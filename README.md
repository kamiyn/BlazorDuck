# BlazorDuck

BlazorDuck is a .NET 10 Blazor Server application that lets you explore Parquet data quickly by running DuckDB queries directly in the browser. DuckDB WASM is statically served from the app and executed through minimal JavaScript interop, so you can inspect datasets such as the included `sendgrid.parquet` without leaving your browser.

## Features
- Lists Parquet files dropped into `wwwroot/data` and exposes them to the UI.
- Executes ad-hoc SQL through DuckDB WASM and renders tabular results interactively.
- Provides guard rails for missing SQL/file selections and surfaces errors returned by DuckDB.
- Ships ready-to-serve DuckDB WASM artifacts with an automated MSBuild download fallback.

## Prerequisites
- .NET SDK 10.0.100 RC1 or later (`dotnet --version` currently reports 10.0.100-rc.1.25451.107).
- PowerShell 7+ (required to run the Playwright bootstrap scripts for end-to-end tests).
- Node.js 18 or later if you need to rebuild the optional DuckDB bundle under `DuckDbBundle/`.

## Getting Started
1. Restore dependencies:
   ```bash
   dotnet restore
   ```
2. Build the solution:
   ```bash
   dotnet build
   ```
3. Run the Blazor Server app:
   ```bash
   dotnet run --project BlazorDuck.Web/BlazorDuck.Web.csproj
   ```
   - The app listens on `https://localhost:5001` and `http://localhost:5000` by default. Set `ASPNETCORE_URLS` or pass `--urls` if you need a different port.
   - In restricted sandboxes where binding to `http://localhost:5000` is not permitted you may see `System.IO.IOException: Failed to bind`. Use a custom loopback port with `--urls http://127.0.0.1:5005` to work around the restriction.

## Working with Parquet Data
- Place `.parquet` files in `BlazorDuck.Web/wwwroot/data`. The catalog service enumerates files at startup, so refreshing the browser after adding files is sufficient.
- The included `sendgrid.parquet` sample demonstrates the expected layout.
- The UI creates a temporary DuckDB view named `parquet_source`. Your SQL can query this view directly, e.g. `SELECT * FROM parquet_source LIMIT 10;`.

## DuckDB WASM Assets
- Run `npm install` and `npm run build` inside `DuckDbBundle/` to download the DuckDB WASM files (`duckdb-browser.mjs`, `duckdb-eh.wasm`, and workers) and copy them into `BlazorDuck.Web/wwwroot/duckdb`.
- The .NET project fails the build if these assets are missing; rerun the bundle build whenever you update `@duckdb/duckdb-wasm`.
- For offline builds, download the matching `@duckdb/duckdb-wasm` version manually from the [DuckDB WASM releases](https://github.com/duckdb/duckdb-wasm/releases) and place the files under `BlazorDuck.Web/wwwroot/duckdb` before building.

## Testing
- **Unit tests** (xUnit):
  ```bash
  dotnet test BlazorDuck.UnitTests/BlazorDuck.UnitTests.csproj
  ```

- **End-to-end tests** (Playwright):
  ```bash
  # install PowerShell https://learn.microsoft.com/en-us/powershell/scripting/install/install-ubuntu
  cd BlazorDuck.E2E
  sudo pwsh bin/Debug/net10.0/playwright.ps1 install-deps
  pwsh bin/Debug/net10.0/playwright.ps1 install
  dotnet test
  ```
  The Playwright bootstrap scripts download driver binaries and (on Linux) add the required system dependencies. Adjust the `install-deps` invocation to match your environment if elevated privileges are restricted.

## Project Layout
- `BlazorDuck.Web/` – Blazor Server host, Razor components, services, and static assets.
- `BlazorDuck.UnitTests/` – xUnit-based unit test suite for backend services.
- `BlazorDuck.E2E/` – Playwright-based E2E tests that spin up the app and automate the browser.
- `DuckDbBundle/` – Optional build pipeline for generating DuckDB WASM bundle assets using Vite.

## Configuration
- `appsettings.json` exposes a `DuckDbWasm` section for customizing bundle paths when hosting assets elsewhere.
- The middleware in `Program.cs` sets immutable caching headers for `.wasm` files served from `/duckdb/`.

## Contributing
- Prefer immutable data structures; return `IReadOnlyList<T>` from APIs and favor `ToArray()` when the size is known ahead of time.
- When combining multiple sequences for iteration, use iterator-returning local functions to avoid intermediate allocations.
- Run `dotnet format` before submitting changes to keep the codebase consistent.

## License
Distributed under the terms of the [MIT License](LICENSE).
