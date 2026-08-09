import type { ThreeWriterMatrixRow } from "@/lib/types";

export function ThreeWriterComparisonMatrix({
  columns,
  rows,
}: {
  columns: Array<{ writerId: string; label: string; labelJa?: string }>;
  rows: ThreeWriterMatrixRow[];
}) {
  return (
    <div>
      {/* Desktop: axis × writer table */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="min-w-[52rem] w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="sticky left-0 bg-bg px-3 py-3 text-xs tracking-wide text-text-faint">
                Axis
              </th>
              {columns.map((col) => (
                <th
                  key={col.writerId}
                  className="min-w-[12rem] px-3 py-3 text-xs tracking-wide text-text-soft"
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

      {/* Mobile / tablet: writer cards — not horizontal-scroll-only */}
      <div className="space-y-4 lg:hidden">
        {columns.map((col) => (
          <article key={col.writerId} className="border border-border px-4 py-5">
            <p className="editorial text-xl text-text">{col.label}</p>
            {col.labelJa && (
              <p className="jp-serif mt-1 text-sm text-text-faint">
                {col.labelJa}
              </p>
            )}
            <dl className="mt-5 space-y-4">
              {rows.map((row) => {
                const value =
                  row.valueByWriterId[col.writerId] ?? "Not indexed";
                const verification =
                  row.verificationStatusByWriterId[col.writerId] ?? "unknown";
                return (
                  <div key={row.id}>
                    <dt className="text-xs text-text-faint">
                      {row.label} / {row.labelJa}
                    </dt>
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
