import type * as duckdb from '@duckdb/duckdb-wasm';

export interface DuckDbBundleConfig {
  bundleBasePath: string;
  mainModule: string;
  mainWorker: string;
  moduleLoader: string;
  pthreadWorker?: string | null;
}

export interface DuckDbInstance {
  loader: typeof duckdb;
  db: duckdb.AsyncDuckDB;
  worker: Worker;
}

export interface ResultState {
  columns: string[];
  rows: string[][];
  error: string;
  isLoading: boolean;
}

export interface ResultRowPayload {
  values?: ReadonlyArray<unknown>;
}

export interface ResultPayload {
  columns?: ReadonlyArray<unknown>;
  rows?: ReadonlyArray<ResultRowPayload | ReadonlyArray<unknown>>;
}

export interface DuckDbQueryPayload {
  columns: string[];
  rows: Array<{ values: string[] }>;
}

export interface ResultAppHandle {
  setResult(result: ResultPayload): void;
  setError(message: string): void;
  setLoading(isLoading: boolean): void;
  clear(): void;
  unmount(): void;
}
