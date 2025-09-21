namespace BlazorDuck.Web.Configuration;

public sealed class DuckDbWasmOptions
{
    public string BundleBasePath { get; set; } = "/duckdb";

    public string MainModule { get; set; } = "duckdb.wasm";

    public string PthreadWorker { get; set; } = "duckdb.worker.js";

    public string MainWorker { get; set; } = "duckdb-browser.worker.js";

    public string ModuleLoader { get; set; } = "duckdb-browser.mjs";
}
