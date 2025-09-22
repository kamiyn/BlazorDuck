import Handlebars, { TemplateDelegate } from 'handlebars';
import * as duckdb from '@duckdb/duckdb-wasm';
import * as arrow from 'apache-arrow';

// const {
//   AsyncDuckDB,
//   AsyncDuckDBConnection,
//   ConsoleLogger,
//   selectBundle
// } = duckdb;

type DuckDbLoaderModule = Pick<typeof duckdb, 'ConsoleLogger' | 'AsyncDuckDB'>;

type DuckDbConnection = duckdb.AsyncDuckDBConnection;

type AsyncQueryResult = Awaited<ReturnType<DuckDbConnection['query']>>;

type QueryRows = ReturnType<AsyncQueryResult['toArray']>;

type QueryRow = QueryRows extends ReadonlyArray<infer TRow>
  ? TRow extends Record<string, unknown>
    ? TRow
    : Record<string, unknown>
  : Record<string, unknown>;

interface LoadedDuckDb {
  readonly loader: DuckDbLoaderModule;
  readonly db: duckdb.AsyncDuckDB;
  readonly worker: Worker;
}

interface DuckDbState {
  duckDbPromise?: Promise<LoadedDuckDb>;
  httpFsInitialized: boolean;
}

export interface DuckDbBundleConfig {
  readonly bundleBasePath: string;
  readonly moduleLoader: string;
  readonly mainWorker: string;
  readonly mainModule: string;
  readonly pthreadWorker?: string | null;
}

export interface ExecuteQueryRow {
  readonly values: ReadonlyArray<string>;
}

export interface ExecuteQueryResult {
  readonly columns: ReadonlyArray<string>;
  readonly rows: ReadonlyArray<ExecuteQueryRow>;
}

const state: DuckDbState = {
  duckDbPromise: undefined,
  httpFsInitialized: false
};

interface QueryRenderContext {
  readonly columns: ReadonlyArray<string>;
  readonly rows: ReadonlyArray<ExecuteQueryRow>;
  readonly hasColumns: boolean;
  readonly hasRows: boolean;
  readonly columnCount: number;
  readonly rowCount: number;
}

const templateCache = new WeakMap<Element, TemplateDelegate<QueryRenderContext>>();

async function loadDuckDb(config: DuckDbBundleConfig): Promise<LoadedDuckDb> {
  let promise = state.duckDbPromise;

  if (!promise) {
    promise = (async () => {
      if (!config) {
        throw new Error('DuckDB configuration is required.');
      }

      const moduleLoaderPath = `${config.bundleBasePath}/${config.moduleLoader}`;
      const loader = (await import(/* @vite-ignore */ moduleLoaderPath)) as DuckDbLoaderModule;
      const workerPath = `${config.bundleBasePath}/${config.mainWorker}`;
      const worker = new Worker(workerPath, { type: 'module' });
      const logger = new loader.ConsoleLogger();
      const db = new loader.AsyncDuckDB(logger, worker);
      const mainModuleUrl = `${config.bundleBasePath}/${config.mainModule}`;
      const pthreadWorkerUrl = config.pthreadWorker
        ? `${config.bundleBasePath}/${config.pthreadWorker}`
        : null;

      await db.instantiate(mainModuleUrl, pthreadWorkerUrl);
      return { loader, db, worker } satisfies LoadedDuckDb;
    })();

    state.duckDbPromise = promise;
  }

  return promise;
}

async function ensureHttpFs(connection: duckdb.AsyncDuckDBConnection): Promise<void> {
  if (state.httpFsInitialized) {
    return;
  }

  try {
    await connection.query("INSTALL 'httpfs';");
  } catch (error: unknown) {
    const errorWithMessage = error as { message?: unknown };
    const message = typeof errorWithMessage?.message === 'string'
      ? errorWithMessage.message
      : String(error ?? '');
    if (!message.includes('already installed')) {
      throw error;
    }
  }

  await connection.query("LOAD 'httpfs';");
  state.httpFsInitialized = true;
}

function toDisplayValue(value: unknown): string {
  if (value === null || value === undefined) {
    return '';
  }

  if (typeof value === 'object') {
    return JSON.stringify(value);
  }

  return String(value);
}

function resolveParquetUrl(parquetUrl: string): string {
  if (!parquetUrl) {
    return parquetUrl;
  }

  if (parquetUrl.startsWith('http://') || parquetUrl.startsWith('https://')) {
    return parquetUrl;
  }

  const baseUrl = typeof window === 'object' && window.location
    ? window.location.origin
    : globalThis.location?.origin ?? '';

  return new URL(parquetUrl, baseUrl).toString();
}

function ensureElement<TElement extends Element>(element: TElement | null | undefined, name: string): TElement {
  if (!element) {
    throw new Error(`${name} element is required.`);
  }

  return element;
}

function extractTemplateMarkup(element: Element): string {
  if (element instanceof HTMLTemplateElement) {
    return element.innerHTML;
  }

  return element.innerHTML;
}

function getTemplateDelegate(templateElement: Element): TemplateDelegate<QueryRenderContext> {
  const cached = templateCache.get(templateElement);
  if (cached) {
    return cached;
  }

  const markup = extractTemplateMarkup(templateElement);
  const compiled = Handlebars.compile<QueryRenderContext>(markup.trim());
  templateCache.set(templateElement, compiled);
  return compiled;
}

function renderQueryResultWithTemplate(
  templateElement: Element,
  targetElement: Element,
  context: QueryRenderContext
): void {
  const template = getTemplateDelegate(templateElement);
  const renderedHtml = template(context);
  targetElement.innerHTML = renderedHtml;
}

export async function executeQuery(
  config: DuckDbBundleConfig,
  parquetUrl: string,
  sql: string,
  templateElement: Element,
  targetElement: Element
): Promise<void> {
  if (!config) {
    throw new Error('DuckDB configuration is required.');
  }

  if (!parquetUrl) {
    throw new Error('A parquet URL must be provided.');
  }

  const resolvedTemplate = ensureElement(templateElement, 'Template');
  const resolvedTarget = ensureElement(targetElement, 'Target container');

  const { db } = await loadDuckDb(config);
  const connection = await db.connect();

  try {
    await ensureHttpFs(connection);
    const resolvedParquetUrl = resolveParquetUrl(parquetUrl);
    const sourceLiteral = JSON.stringify(resolvedParquetUrl);

    try {
      await connection.query(`CREATE OR REPLACE TEMP VIEW parquet_source AS SELECT * FROM read_parquet(${sourceLiteral});`);
      const result = await connection.query(sql);
      const schemaFields = Array.isArray(result?.schema?.fields)
        ? result.schema.fields
        : [];
      const columns = schemaFields
        .map((field) => field?.name ?? '')
        .filter((name): name is string => Boolean(name));

      const rowValues: ReadonlyArray<ReadonlyArray<string>> = result
        .toArray()
        .map((row: QueryRow) => columns.map((column) => toDisplayValue(row[column])));

      closeArrowTable(result);

      const rows = rowValues.map<ExecuteQueryRow>((values) => ({ values }));

      const context: QueryRenderContext = {
        columns,
        rows,
        hasColumns: columns.length > 0,
        hasRows: rows.length > 0,
        columnCount: columns.length,
        rowCount: rows.length
      };

      renderQueryResultWithTemplate(resolvedTemplate, resolvedTarget, context);

      return;
    } finally {
      await connection.query('DROP VIEW IF EXISTS parquet_source;');
    }
  } finally {
    await connection.close();
  }

  function closeArrowTable(result: any) {
    if (typeof result.close === 'function') {
      result.close();
    } else if (typeof result.release === 'function') {
      result.release();
    }
  }
}

export function clearResults(targetElement: Element | null | undefined): void {
  if (!targetElement) {
    return;
  }

  (targetElement as HTMLElement).innerHTML = '';
}

// export {
//   AsyncDuckDB,
//   AsyncDuckDBConnection,
//   ConsoleLogger,
//   loadDuckDb,
//   selectBundle
// };

// export * from '@duckdb/duckdb-wasm';
