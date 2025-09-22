using System;
using System.Threading;
using System.Threading.Tasks;
using BlazorDuck.Web.Configuration;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Options;
using Microsoft.JSInterop;

namespace BlazorDuck.Web.Services;

public interface IDuckDbQueryService : IAsyncDisposable
{
    ValueTask ExecuteAsync(
        string parquetUrl,
        string sql,
        ElementReference templateElement,
        ElementReference targetElement,
        CancellationToken cancellationToken = default);

    ValueTask ClearResultsAsync(ElementReference targetElement, CancellationToken cancellationToken = default);
}

public sealed class DuckDbQueryService : IDuckDbQueryService
{
    private readonly IJSRuntime _jsRuntime;
    private readonly IOptionsSnapshot<DuckDbWasmOptions> _options;
    private readonly Lazy<Task<IJSObjectReference>> _moduleTask;

    public DuckDbQueryService(IJSRuntime jsRuntime, IOptionsSnapshot<DuckDbWasmOptions> options)
    {
        _jsRuntime = jsRuntime;
        _options = options;
        _moduleTask = new(() => _jsRuntime.InvokeAsync<IJSObjectReference>("import", "./duckdb/duckdb-browser-bundle.js").AsTask());
    }

    public async ValueTask ExecuteAsync(
        string parquetUrl,
        string sql,
        ElementReference templateElement,
        ElementReference targetElement,
        CancellationToken cancellationToken = default)
    {
        if (string.IsNullOrWhiteSpace(parquetUrl))
        {
            throw new ArgumentException("A parquet source is required.", nameof(parquetUrl));
        }

        if (string.IsNullOrWhiteSpace(sql))
        {
            throw new ArgumentException("A SQL statement is required.", nameof(sql));
        }

        var config = _options.Value;
        var module = await _moduleTask.Value;
        await module.InvokeVoidAsync(
            "executeQuery",
            cancellationToken,
            new
            {
                bundleBasePath = config.BundleBasePath,
                mainModule = config.MainModule,
                pthreadWorker = config.PthreadWorker,
                mainWorker = config.MainWorker,
                moduleLoader = config.ModuleLoader,
            },
            parquetUrl,
            sql,
            templateElement,
            targetElement);
    }

    public async ValueTask ClearResultsAsync(ElementReference targetElement, CancellationToken cancellationToken = default)
    {
        var module = await _moduleTask.Value;
        await module.InvokeVoidAsync("clearResults", cancellationToken, targetElement);
    }

    public async ValueTask DisposeAsync()
    {
        if (_moduleTask.IsValueCreated)
        {
            var module = await _moduleTask.Value;
            await module.DisposeAsync();
        }
    }
}
