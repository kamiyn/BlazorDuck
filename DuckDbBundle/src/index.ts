import type { App } from 'vue';
import { createApp, reactive } from 'vue';
import * as duckdb from '@duckdb/duckdb-wasm';
import * as arrow from 'apache-arrow';
import ResultApp from './ResultApp.vue';
import type {
  DuckDbBundleConfig,
  DuckDbInstance,
  DuckDbQueryPayload,
  ResultAppHandle,
  ResultPayload,
  ResultState
} from './resultTypes';

const {
  AsyncDuckDB,
  AsyncDuckDBConnection,
  AsyncDuckDBPreparedStatement,
  AsyncDuckDBTable,
  ConsoleLogger,
  FilesystemTable,
  duckdbBundle,
  duckdbBundles,
  selectBundle
} = duckdb;

const duckDbState: {
  duckDbPromise: Promise<DuckDbInstance> | null;
  httpFsInitialized: boolean;
} = {
  duckDbPromise: null,
  httpFsInitialized: false
};

const resultAppRegistry = new WeakMap<Element, { app: App<Element>; handle: ResultAppHandle }>();

async function loadDuckDb(config: DuckDbBundleConfig): Promise<DuckDbInstance> {
  if (!duckDbState.duckDbPromise) {
    duckDbState.duckDbPromise = (async () => {
      if (!config) {
        throw new Error('DuckDB configuration is required.');
      }

      const moduleLoaderPath = `${config.bundleBasePath}/${config.moduleLoader}`;
      const loader = (await import(/* @vite-ignore */ moduleLoaderPath)) as typeof duckdb;
      const workerPath = `${config.bundleBasePath}/${config.mainWorker}`;
      const worker = new Worker(workerPath, { type: 'module' });
      const logger = new loader.ConsoleLogger();
      const db = new loader.AsyncDuckDB(logger, worker);
      const mainModuleUrl = `${config.bundleBasePath}/${config.mainModule}`;
      const pthreadWorkerUrl = config.pthreadWorker
        ? `${config.bundleBasePath}/${config.pthreadWorker}`
        : null;

      await db.instantiate(mainModuleUrl, pthreadWorkerUrl ?? undefined);
      return { loader, db, worker } satisfies DuckDbInstance;
    })();
  }

  return duckDbState.duckDbPromise;
}

async function ensureHttpFs(connection: duckdb.AsyncDuckDBConnection): Promise<void> {
  if (duckDbState.httpFsInitialized) {
    return;
  }

  try {
    await connection.query("INSTALL 'httpfs';");
  } catch (error) {
    const message = typeof (error as { message?: unknown })?.message === 'string'
      ? (error as { message: string }).message
      : String(error ?? '');
    if (!message.includes('already installed')) {
      throw error;
    }
  }

  await connection.query("LOAD 'httpfs';");
  duckDbState.httpFsInitialized = true;
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

function cloneRowValues(rows: ResultPayload['rows']): string[][] {
  if (!Array.isArray(rows)) {
    return [];
  }

  return rows.map(item => {
    const row = Array.isArray(item)
      ? item
      : Array.isArray(item?.values)
        ? item.values
        : [];

    return row.map(value => String(value ?? ''));
  });
}

function ensureHostElement(element: Element | null | undefined): Element {
  if (!element) {
    throw new Error('A host element is required to mount the result application.');
  }

  return element;
}

export function createResultApp(element: Element | null | undefined): ResultAppHandle {
  const host = ensureHostElement(element);
  const existing = resultAppRegistry.get(host);
  if (existing) {
    return existing.handle;
  }

  host.innerHTML = '';
  const state = reactive<ResultState>({
    columns: [],
    rows: [],
    error: '',
    isLoading: false
  });

  const app = createApp(ResultApp, { state });
  app.mount(host);

  const handle: ResultAppHandle = {
    setResult(result: ResultPayload) {
      const columns = Array.isArray(result?.columns)
        ? result.columns.map(value => String(value ?? '')).filter(name => Boolean(name))
        : [];
      const rows = cloneRowValues(result?.rows);
      state.error = '';
      state.columns = columns;
      state.rows = rows;
      state.isLoading = false;
    },
    setError(message: string) {
      state.error = message;
      state.columns = [];
      state.rows = [];
      state.isLoading = false;
    },
    setLoading(isLoading: boolean) {
      state.isLoading = Boolean(isLoading);
    },
    clear() {
      state.error = '';
      state.columns = [];
      state.rows = [];
      state.isLoading = false;
    },
    unmount() {
      app.unmount();
      host.innerHTML = '';
      resultAppRegistry.delete(host);
    }
  };

  resultAppRegistry.set(host, { app, handle });
  return handle;
}

export async function executeQuery(
  config: DuckDbBundleConfig,
  parquetUrl: string,
  sql: string
): Promise<DuckDbQueryPayload> {
  if (!config) {
    throw new Error('DuckDB configuration is required.');
  }

  if (!parquetUrl) {
    throw new Error('A parquet URL must be provided.');
  }

  const { db } = await loadDuckDb(config);
  const connection = await db.connect();

  try {
    await ensureHttpFs(connection);
    const resolvedParquetUrl = resolveParquetUrl(parquetUrl);
    const sourceLiteral = JSON.stringify(resolvedParquetUrl);

    try {
      await connection.query(`CREATE OR REPLACE TEMP VIEW parquet_source AS SELECT * FROM read_parquet(${sourceLiteral});`);
      const result = await connection.query(sql);
      const columns = Array.isArray(result?.schema?.fields)
        ? result.schema.fields.map(field => field.name ?? '').filter(name => Boolean(name))
        : [];

      const rowValues = result.toArray().map(row => columns.map(column => toDisplayValue(row[column])));

      if (typeof result.close === 'function') {
        result.close();
      } else if (typeof result.release === 'function') {
        result.release();
      }

      return {
        columns,
        rows: rowValues.map(values => ({ values }))
      } satisfies DuckDbQueryPayload;
    } finally {
      await connection.query('DROP VIEW IF EXISTS parquet_source;');
    }
  } finally {
    await connection.close();
  }
}

export {
  AsyncDuckDB,
  AsyncDuckDBConnection,
  AsyncDuckDBPreparedStatement,
  AsyncDuckDBTable,
  ConsoleLogger,
  FilesystemTable,
  arrow,
  duckdbBundle,
  duckdbBundles,
  loadDuckDb,
  selectBundle
};

export type { DuckDbBundleConfig, DuckDbInstance, DuckDbQueryPayload, ResultAppHandle, ResultPayload, ResultState } from './resultTypes';
export * from '@duckdb/duckdb-wasm';
