using BlazorDuck.Web.Models;

namespace BlazorDuck.Web.Services;

public interface IParquetCatalogService
{
    ValueTask<IReadOnlyList<ParquetFileDescriptor>> GetAvailableFilesAsync(CancellationToken cancellationToken = default);
}

public sealed class ParquetCatalogService(IWebHostEnvironment environment) : IParquetCatalogService
{
    public ValueTask<IReadOnlyList<ParquetFileDescriptor>> GetAvailableFilesAsync(CancellationToken cancellationToken = default)
    {
        cancellationToken.ThrowIfCancellationRequested();

        var webRoot = environment.WebRootPath;
        if (string.IsNullOrEmpty(webRoot))
        {
            return ValueTask.FromResult<IReadOnlyList<ParquetFileDescriptor>>([]);
        }

        var dataDirectory = Path.Combine(webRoot, "data");
        if (!Directory.Exists(dataDirectory))
        {
            return ValueTask.FromResult<IReadOnlyList<ParquetFileDescriptor>>([]);
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
