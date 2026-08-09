import type { WriterComparisonMatrixRow } from "@/lib/types";

export function WriterComparisonMatrix({
  columns,
  rows,
}: {
  columns: Array<{ writerId: string; label: string; labelJa?: string }>;
  rows: WriterComparisonMatrixRow[];
}) {
  return (
    <div>
      <div className="hidden overflow-x-auto md:block">
        <table className="min-w-[40rem] w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="sticky left-0 bg-bg px-3 py-3 text-xs tracking-wide text-text-faint">
                Axis
              </th>
              {columns.map((col) => (
                <th
                  key={col.writerId}
                  className="min-w-[14rem] px-3 py-3 text-xs tracking-wide text-text-soft"
                >
                  <span className="editorial text-base text-text">
                    {col.label}
                  </span>
                  {col.labelJa && (
                    <span className="mt-1 block font-normal text-text-faint">
                      {col.labelJa}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-border-soft">
                <th className="sticky left-0 bg-bg px-3 py-3 align-top text-xs text-text-faint">
                  <span className="text-text-soft">{row.label}</span>
                  <span className="mt-0.5 block jp-serif text-[0.7rem]">
                    {row.labelJa}
                  </span>
                </th>
                {columns.map((col) => {
                  const value =
                    row.valueByWriterId[col.writerId] ?? "Not indexed";
                  const verification =
                    row.verificationStatusByWriterId[col.writerId] ??
                    "unknown";
                  return (
                    <td
                      key={`${row.id}-${col.writerId}`}
                      className="px-3 py-3 align-top text-text-soft"
                    >
                      <p>{value}</p>
                      <p className="mt-1 text-[0.65rem] tracking-wide text-text-faint">
                        {verification}
                      </p>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 md:hidden">
        {rows.map((row) => (
          <article key={row.id} className="border border-border px-4 py-4">
            <p className="label">
              {row.label} / {row.labelJa}
            </p>
            <dl className="mt-3 space-y-3">
              {columns.map((col) => {
                const value =
                  row.valueByWriterId[col.writerId] ?? "Not indexed";
                const verification =
                  row.verificationStatusByWriterId[col.writerId] ?? "unknown";
                return (
                  <div key={col.writerId}>
                    <dt className="text-xs text-text-faint">{col.label}</dt>
                    <dd className="mt-1 text-sm text-text-soft">{value}</dd>
                    <dd className="mt-0.5 text-[0.65rem] text-text-faint">
                      {verification}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
