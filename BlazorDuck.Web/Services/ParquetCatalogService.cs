using System.IO;
using System.Linq;
using BlazorDuck.Web.Models;
using Microsoft.AspNetCore.Hosting;

namespace BlazorDuck.Web.Services;

public interface IParquetCatalogService
{
    ValueTask<IReadOnlyList<ParquetFileDescriptor>> GetAvailableFilesAsync(CancellationToken cancellationToken = default);
}

public sealed class ParquetCatalogService : IParquetCatalogService
{
    private readonly IWebHostEnvironment _environment;

    public ParquetCatalogService(IWebHostEnvironment environment)
    {
        _environment = environment;
    }

    public ValueTask<IReadOnlyList<ParquetFileDescriptor>> GetAvailableFilesAsync(CancellationToken cancellationToken = default)
    {
        cancellationToken.ThrowIfCancellationRequested();

        var webRoot = _environment.WebRootPath ?? string.Empty;
        if (string.IsNullOrEmpty(webRoot))
        {
            return ValueTask.FromResult<IReadOnlyList<ParquetFileDescriptor>>(Array.Empty<ParquetFileDescriptor>());
        }

        var dataDirectory = Path.Combine(webRoot, "data");
        if (!Directory.Exists(dataDirectory))
        {
            return ValueTask.FromResult<IReadOnlyList<ParquetFileDescriptor>>(Array.Empty<ParquetFileDescriptor>());
        }

        var descriptors = Directory.EnumerateFiles(dataDirectory, "*.parquet", SearchOption.TopDirectoryOnly)
            .Select(filePath => CreateDescriptor(webRoot, filePath))
            .ToArray();

        return ValueTask.FromResult<IReadOnlyList<ParquetFileDescriptor>>(descriptors);
    }

    private static ParquetFileDescriptor CreateDescriptor(string webRoot, string filePath)
    {
        var fileInfo = new FileInfo(filePath);
        var displayName = Path.GetFileNameWithoutExtension(fileInfo.Name);
        var relativePath = Path.GetRelativePath(webRoot, filePath).Replace('\\', '/');
        var relativeUrl = $"/{relativePath}";
        return new ParquetFileDescriptor(displayName, relativeUrl, fileInfo.Length);
    }
}
