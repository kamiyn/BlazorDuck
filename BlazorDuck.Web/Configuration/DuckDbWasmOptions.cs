namespace BlazorDuck.Web.Configuration;

public sealed class DuckDbWasmOptions
{
    public string BundleBasePath { get; set; } = "/duckdb";

    public string MainModule { get; set; } = "duckdb-eh.wasm";

    public string PthreadWorker { get; set; } = "duckdb-browser-coi.pthread.worker.js";

    public string MainWorker { get; set; } = "duckdb-browser-eh.worker.js";

    public string ModuleLoader { get; set; } = "duckdb-browser-bundle.js";
}
