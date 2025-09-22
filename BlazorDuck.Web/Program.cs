using BlazorDuck.Web.Components;
using BlazorDuck.Web.Configuration;
using BlazorDuck.Web.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<DuckDbWasmOptions>(builder.Configuration.GetSection("DuckDbWasm"));
builder.Services.AddSingleton<IParquetCatalogService, ParquetCatalogService>();
builder.Services.AddScoped<IDuckDbQueryService, DuckDbQueryService>();

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

var app = builder.Build();

app.Use(async (context, next) =>
{
    var requestPath = context.Request.Path.Value;
    if (requestPath?.EndsWith(".wasm", StringComparison.OrdinalIgnoreCase) == true &&
        requestPath.StartsWith("/duckdb/", StringComparison.OrdinalIgnoreCase))
    {
        context.Response.OnStarting(() =>
        {
            var headers = context.Response.Headers;
            headers.Remove("Cache-Control");
            headers.Remove("Pragma");
            headers.Remove("Expires");
            headers.CacheControl = "public,max-age=86400,immutable";
            return Task.CompletedTask;
        });
    }

    await next();
});


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseStatusCodePagesWithReExecute("/not-found");
app.UseHttpsRedirection();
app.UseAntiforgery();

app.MapStaticAssets();
app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
