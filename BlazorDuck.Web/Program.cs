using System;
using System.Globalization;
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
    if (context.Request.Path.Value?.EndsWith(".wasm", StringComparison.OrdinalIgnoreCase) == true)
    {
        context.Response.OnStarting(() =>
        {
            context.Response.Headers.CacheControl = "public,max-age=86400,immutable";
            context.Response.Headers.Expires = DateTime.UtcNow.AddDays(1).ToString("R", CultureInfo.InvariantCulture);
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

app.UseStatusCodePagesWithReExecute("/not-found", createScopeForStatusCodePages: true);
app.UseHttpsRedirection();
app.UseAntiforgery();

app.MapStaticAssets();
app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
