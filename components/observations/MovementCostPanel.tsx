import { movementCostRows } from "@/data/observations/the-price-of-an-ordinary-day";

export function MovementCostPanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Movement cost</p>
      <div className="mt-4 space-y-3 md:hidden">
        {movementCostRows.map((row) => (
          <article key={row.writer} className="border border-border px-4 py-4">
            <p className="editorial text-lg">{row.writer}</p>
            <dl className="mt-3 space-y-2 text-sm text-text-soft">
              <div>
                <dt className="text-xs text-text-faint">Transport mode</dt>
                <dd>{row.modes}</dd>
              </div>
              <div>
                <dt className="text-xs text-text-faint">Cost</dt>
                <dd>{row.cost}</dd>
              </div>
              <div>
                <dt className="text-xs text-text-faint">Route</dt>
                <dd>{row.route}</dd>
              </div>
              <div>
                <dt className="text-xs text-text-faint">Purpose</dt>
                <dd>{row.purpose}</dd>
              </div>
              <div>
                <dt className="text-xs text-text-faint">Verification</dt>
                <dd>{row.verification}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <div className="mt-4 hidden overflow-x-auto md:block">
        <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs tracking-wide text-text-faint">
              <th className="py-2 pr-3 font-normal">Writer</th>
              <th className="py-2 pr-3 font-normal">Transport mode</th>
              <th className="py-2 pr-3 font-normal">Cost</th>
              <th className="py-2 pr-3 font-normal">Route</th>
              <th className="py-2 pr-3 font-normal">Purpose</th>
              <th className="py-2 font-normal">Verification</th>
            </tr>
          </thead>
          <tbody>
            {movementCostRows.map((row) => (
              <tr key={row.writer} className="border-b border-border-soft">
                <td className="py-3 pr-3 text-text">{row.writer}</td>
                <td className="py-3 pr-3 text-text-soft">{row.modes}</td>
                <td className="py-3 pr-3 text-text-faint">{row.cost}</td>
                <td className="py-3 pr-3 text-text-soft">{row.route}</td>
                <td className="py-3 pr-3 text-text-soft">{row.purpose}</td>
                <td className="py-3 text-text-faint">{row.verification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </aside>
  );
}
