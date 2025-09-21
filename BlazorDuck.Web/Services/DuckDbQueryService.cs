using System;
using System.Threading;
using System.Threading.Tasks;
using BlazorDuck.Web.Configuration;
using BlazorDuck.Web.Models;
using Microsoft.Extensions.Options;
using Microsoft.JSInterop;

namespace BlazorDuck.Web.Services;

public interface IDuckDbQueryService : IAsyncDisposable
{
    ValueTask<DuckDbQueryResult> ExecuteAsync(string parquetUrl, string sql, CancellationToken cancellationToken = default);
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
        _moduleTask = new(() => _jsRuntime.InvokeAsync<IJSObjectReference>("import", "./js/duckdbInterop.js").AsTask());
    }

    public async ValueTask<DuckDbQueryResult> ExecuteAsync(string parquetUrl, string sql, CancellationToken cancellationToken = default)
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
        var module = await _moduleTask.Value.ConfigureAwait(false);
        var rawResult = await module.InvokeAsync<DuckDbRawQueryResult>(
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
            sql).ConfigureAwait(false);

        return rawResult.ToResult();
    }

    public async ValueTask DisposeAsync()
    {
        if (_moduleTask.IsValueCreated)
        {
            var module = await _moduleTask.Value.ConfigureAwait(false);
            await module.DisposeAsync().ConfigureAwait(false);
        }
    }
}
