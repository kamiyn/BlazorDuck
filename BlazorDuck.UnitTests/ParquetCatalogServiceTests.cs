using BlazorDuck.Web.Services;

using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.FileProviders;

namespace BlazorDuck.UnitTests;

public sealed class ParquetCatalogServiceTests
{
    [Fact]
    public async Task ReturnsEmptyListWhenDataDirectoryMissing()
    {
        await using var temp = new TempWebRoot();
        var service = new ParquetCatalogService(temp.Environment);

        var files = await service.GetAvailableFilesAsync(TestContext.Current.CancellationToken);

        Assert.NotNull(files);
        Assert.Empty(files);
    }

    [Fact]
    public async Task DiscoversParquetFilesInWebRootDataFolder()
    {
        await using var temp = new TempWebRoot();
        Directory.CreateDirectory(Path.Combine(temp.RootPath, "data"));
        var parquetPath = Path.Combine(temp.RootPath, "data", "sample.parquet");
        await File.WriteAllBytesAsync(parquetPath, new byte[] { 0x50, 0x51, 0x45, 0x53 }, TestContext.Current.CancellationToken);

        var service = new ParquetCatalogService(temp.Environment);

        var files = await service.GetAvailableFilesAsync(TestContext.Current.CancellationToken);

        var file = Assert.Single(files);
        Assert.Equal("sample", file.DisplayName);
        Assert.Equal("/data/sample.parquet", file.RelativeUrl);
        Assert.Equal(new FileInfo(parquetPath).Length, file.Size);
    }

    private sealed class TempWebRoot : IAsyncDisposable
    {
        public string RootPath { get; } = Path.Combine(Path.GetTempPath(), "blazorduck-tests", Guid.NewGuid().ToString("N"));

        public IWebHostEnvironment Environment { get; }

        public TempWebRoot()
        {
            Directory.CreateDirectory(RootPath);
            Environment = new FakeEnvironment(RootPath);
        }

        public async ValueTask DisposeAsync()
        {
            try
            {
                if (Directory.Exists(RootPath))
                {
                    Directory.Delete(RootPath, recursive: true);
                }
            }
            catch
            {
                // Ignore cleanup failures.
            }

            await Task.CompletedTask;
        }

        private sealed class FakeEnvironment : IWebHostEnvironment
        {
            public FakeEnvironment(string webRootPath)
            {
                WebRootPath = webRootPath;
            }

            public string ApplicationName { get; set; } = "BlazorDuck";

            public IFileProvider WebRootFileProvider { get; set; } = new NullFileProvider();

            public string WebRootPath { get; set; }

            public string EnvironmentName { get; set; } = "Development";

            public string ContentRootPath { get; set; } = string.Empty;

            public IFileProvider ContentRootFileProvider { get; set; } = new NullFileProvider();
        }
    }
}
