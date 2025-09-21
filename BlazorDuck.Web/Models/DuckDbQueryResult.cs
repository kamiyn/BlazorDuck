using System.Linq;
using System.Text.Json.Serialization;

namespace BlazorDuck.Web.Models;

public sealed record DuckDbQueryResult(IReadOnlyList<string> Columns, IReadOnlyList<IReadOnlyList<string>> Rows)
{
    public static DuckDbQueryResult Empty { get; } = new(Array.Empty<string>(), Array.Empty<IReadOnlyList<string>>());
}

internal sealed class DuckDbRawQueryResult
{
    [JsonPropertyName("columns")]
    public string[] Columns { get; set; } = Array.Empty<string>();

    [JsonPropertyName("rows")]
    public DuckDbRawRow[] Rows { get; set; } = Array.Empty<DuckDbRawRow>();

    public DuckDbQueryResult ToResult()
    {
        var columnNames = Columns ?? Array.Empty<string>();
        var rows = (Rows ?? Array.Empty<DuckDbRawRow>())
            .Select(row => (IReadOnlyList<string>)(row.Values ?? Array.Empty<string>()))
            .ToArray();
        return new DuckDbQueryResult(columnNames, rows);
    }
}

internal sealed class DuckDbRawRow
{
    [JsonPropertyName("values")]
    public string[]? Values { get; set; }
}
