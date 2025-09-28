DuckDB WASM assets are downloaded automatically during the build via MSBuild.
If the build machine has no network access, download the files manually from
https://github.com/duckdb/duckdb-wasm/releases (matching version 1.29.0) and
place them in this directory:
- duckdb-browser.mjs
- duckdb-eh.wasm
- duckdb-browser-eh.worker.js
- duckdb-browser-coi.pthread.worker.js

Set the `NoDuckDbDownload` MSBuild property to `true` to skip automatic downloads.
