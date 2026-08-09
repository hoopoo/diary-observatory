import {
  versionMatrixCols,
  versionMatrixRows,
} from "@/data/diaries/horoki";

export function VersionDifferenceMatrix() {
  return (
    <aside className="not-prose my-10 overflow-x-auto">
      <h3 className="editorial text-2xl text-text">One life, several texts</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        一つの生活、複数の本文
      </p>
      <table className="mt-6 w-full min-w-[40rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border text-[0.65rem] tracking-wide text-text-faint">
            <th className="py-2 pr-3 font-normal">Axis</th>
            {versionMatrixCols.map((col) => (
              <th key={col} className="py-2 pr-3 font-normal">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {versionMatrixRows.map((row) => (
            <tr key={row} className="border-b border-border">
              <td className="py-2 pr-3 text-text-soft">{row}</td>
              {versionMatrixCols.map((col) => (
                <td key={col} className="py-2 pr-3 text-text-faint">
                  Not compared
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-sm text-text-faint">
        実際の本文比較データがないため、すべて Not compared。概念例を実データとして表示しない。
      </p>
    </aside>
  );
}
