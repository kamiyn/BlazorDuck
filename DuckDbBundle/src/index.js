import * as duckdb from '@duckdb/duckdb-wasm';
import * as arrow from 'apache-arrow';

export const {
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

export { arrow };
export * from '@duckdb/duckdb-wasm';
