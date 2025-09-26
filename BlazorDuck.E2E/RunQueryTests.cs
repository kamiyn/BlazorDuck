using System.Diagnostics;
using System.Net;
using System.Net.Sockets;

using Microsoft.Playwright;

namespace BlazorDuck.E2E;

[CollectionDefinition(E2ECollection.Name)]
public sealed class E2ECollection : ICollectionFixture<E2EFixture>
{
    public const string Name = "BlazorDuck.E2E";
}

public sealed class E2EFixture : IAsyncLifetime
{
    private Process? _process;

    public string BaseUrl { get; private set; } = string.Empty;

    public IPlaywright? PlaywrightInstance { get; private set; }

    public IBrowser? Browser { get; private set; }

    public async Task InitializeAsync()
    {
        var port = GetFreeTcpPort();
        BaseUrl = $"http://127.0.0.1:{port}";
        var solutionDirectory = GetSolutionDirectory();
        var projectPath = Path.Combine(solutionDirectory, "BlazorDuck.Web", "BlazorDuck.Web.csproj");

        var startInfo = new ProcessStartInfo
        {
            FileName = "dotnet",
            Arguments = $"run --no-build --project \"{projectPath}\" --urls {BaseUrl}",
            WorkingDirectory = solutionDirectory,
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            UseShellExecute = false
        };

        _process = Process.Start(startInfo) ?? throw new InvalidOperationException("Failed to start Blazor app process.");

        await WaitForAppAsync(BaseUrl, TimeSpan.FromSeconds(45));

        PlaywrightInstance = await Playwright.CreateAsync();
        Browser = await PlaywrightInstance.Chromium.LaunchAsync(new BrowserTypeLaunchOptions
        {
            Headless = true
        });
    }

    public async Task DisposeAsync()
    {
        if (Browser is not null)
        {
            await Browser.CloseAsync();
        }

        PlaywrightInstance?.Dispose();

        if (_process is { HasExited: false })
        {
            try
            {
                _process.Kill(entireProcessTree: true);
            }
            catch
            {
                // Ignore failures while tearing down the hosted app.
            }

            _process.WaitForExit();
        }

        _process?.Dispose();
    }

    private static int GetFreeTcpPort()
    {
        var listener = new TcpListener(IPAddress.Loopback, 0);
        listener.Start();
        var port = ((IPEndPoint)listener.LocalEndpoint).Port;
        listener.Stop();
        return port;
    }

    private static string GetSolutionDirectory()
    {
        var assemblyDirectory = AppContext.BaseDirectory;
        return Path.GetFullPath(Path.Combine(assemblyDirectory, "..", "..", "..", ".."));
    }

    private static async Task WaitForAppAsync(string baseUrl, TimeSpan timeout)
    {
        using var httpClient = new HttpClient();
        httpClient.Timeout = TimeSpan.FromSeconds(5);
        var deadline = DateTime.UtcNow + timeout;

        while (DateTime.UtcNow < deadline)
        {
            try
            {
                var response = await httpClient.GetAsync(baseUrl);
                if (response.IsSuccessStatusCode)
                {
                    return;
                }
            }
            catch
            {
                // Swallow connection errors while waiting for startup.
            }

            await Task.Delay(500);
        }

        throw new TimeoutException($"The Blazor application did not start within {timeout.TotalSeconds} seconds.");
    }
}

[Collection(E2ECollection.Name)]
public sealed class RunQueryTests
{
    private readonly E2EFixture _fixture;

    public RunQueryTests(E2EFixture fixture)
    {
        _fixture = fixture;
    }

    [Fact]
    public async Task RunQueryDisplaysResults()
    {
        if (_fixture.Browser is null)
        {
            throw new InvalidOperationException("Playwright browser was not initialized.");
        }

        var context = await _fixture.Browser.NewContextAsync();
        var page = await context.NewPageAsync();

        try
        {
            await page.GotoAsync(_fixture.BaseUrl + "/", new PageGotoOptions
            {
                WaitUntil = WaitUntilState.NetworkIdle
            });

            var runButton = page.Locator("#runQueryButton");
            await runButton.WaitForAsync(new LocatorWaitForOptions
            {
                State = WaitForSelectorState.Visible
            });

            var buttonText = (await runButton.InnerTextAsync()).Trim();
            Assert.Equal("Run query", buttonText);

            await runButton.ClickAsync();

            var dataRows = page.Locator("table tbody tr");
            await dataRows.First.WaitForAsync(new LocatorWaitForOptions
            {
                State = WaitForSelectorState.Visible
            });

            var rowCount = await dataRows.CountAsync();
            Assert.True(rowCount > 0, "Expected at least one result row after running the query.");
        }
        finally
        {
            await page.CloseAsync();
            await context.CloseAsync();
        }
    }
}
