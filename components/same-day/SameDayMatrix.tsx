import type { SameDayMatrixRow } from "@/lib/types";

export function SameDayMatrix({
  columns,
  rows,
}: {
  columns: Array<{ entryId: string; label: string; labelJa?: string }>;
  rows: SameDayMatrixRow[];
}) {
  return (
    <div>
      {/* Desktop / tablet: horizontal scroll table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="min-w-[36rem] w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="sticky left-0 bg-bg px-3 py-3 text-xs tracking-wide text-text-faint">
                Axis
              </th>
              {columns.map((col) => (
                <th
                  key={col.entryId}
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
                    row.valueByEntryId[col.entryId] ?? "Not indexed";
                  const verification =
                    row.verificationStatusByEntryId[col.entryId] ?? "unknown";
                  return (
                    <td
                      key={`${row.id}-${col.entryId}`}
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

      {/* Mobile: stacked cards per column */}
      <div className="space-y-4 md:hidden">
        {columns.map((col) => (
          <article
            key={col.entryId}
            className="border border-border px-4 py-4"
          >
            <h3 className="editorial text-lg text-text">{col.label}</h3>
            {col.labelJa && (
              <p className="jp-serif mt-1 text-sm text-text-faint">
                {col.labelJa}
              </p>
            )}
            <dl className="mt-4 space-y-3">
              {rows.map((row) => {
                const value =
                  row.valueByEntryId[col.entryId] ?? "Not indexed";
                const verification =
                  row.verificationStatusByEntryId[col.entryId] ?? "unknown";
                return (
                  <div key={row.id}>
                    <dt className="label">
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
