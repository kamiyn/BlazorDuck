# AGENTS.md

プロンプトに書かれた内容、および、処理内容 を Markdown 形式 ./codinglog/Gpt<yyyyMMddHHmm>.md ファイルへ記録してください

## Important Notes

- do not use 'sudo' command
- なるべく immuntable なデータ構造を使うこと。関数内で生成されたデータは IReadOnlyList<T> で返すのが望ましい
- IReadOnlyList<T> を作る際に、事前に要素数がわかるなら　ToArray() を使って配列にする。List<T> は避ける
- foreach に渡すオブジェクトを生成するために 複数の集合を合成する場合には IEnumerable<T> を返すような ローカル関数 として実装してメモリ割り当てを避ける
- コード修正の最後に dotnet format を実行する

## Project Overview

This is a .NET 10.0 Blazor application that analyzes Parquet files.

## Architecture

Blazor Server application with DuckDB for querying Parquet files.

use DuckDB WASM and wasm files are Statically Served. refer https://duckdb.org/docs/stable/clients/wasm/instantiation

### Solution Structure
- **BlazorDuck.Web**: main project, a Blazor Server with backend application.

### Data Flow
1. Get Parquet files from Server to Browser Local Filesystem (import ./sendgrid.parquet into the project)
2. Query Parquet files using DuckDB
3. Show results in a web application

future plan: Parquet files will be retrieved from S3 storage.

## Development Commands

### Build
```bash
dotnet build
```
