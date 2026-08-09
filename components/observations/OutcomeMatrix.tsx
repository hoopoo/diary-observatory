import { EpistemicLabel } from "@/components/EpistemicLabel";
import {
  outcomeMatrixColumns,
  outcomeMatrixRows,
} from "@/data/observations/the-manuscripts-that-were-not-chosen";

export function OutcomeMatrix() {
  return (
    <aside className="not-prose my-12 overflow-x-auto">
      <h3 className="editorial text-2xl text-text">Outcome matrix</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">結果の比較</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="observation" />
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          Empty cells stay Not indexed
        </span>
      </div>
      <table className="mt-5 w-full min-w-[52rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border text-[0.65rem] tracking-wide text-text-faint">
            <th className="py-2 pr-3 font-normal">Writer</th>
            {outcomeMatrixColumns.map((col) => (
              <th key={col.id} className="py-2 pr-3 font-normal">
                <span className="block">{col.label}</span>
                <span className="jp-serif text-text-faint">{col.labelJa}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {outcomeMatrixRows.map((row) => (
            <tr key={row.writer} className="border-b border-border align-top">
              <td className="py-3 pr-3 text-text-soft">{row.writer}</td>
              {outcomeMatrixColumns.map((col) => (
                <td key={col.id} className="py-3 pr-3 text-text-soft">
                  {row.cells[col.id as keyof typeof row.cells]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </aside>
  );
}
