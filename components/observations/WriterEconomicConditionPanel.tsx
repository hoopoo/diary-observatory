import { writerEconomicConditions } from "@/data/observations/the-price-of-an-ordinary-day";

export function WriterEconomicConditionPanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Who buys writing time</p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {writerEconomicConditions.map((row) => (
          <div key={row.writerId} className="border border-border px-4 py-4">
            <p className="editorial text-lg text-text">{row.name}</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {row.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-text-faint">{row.note}</p>
            <p className="mt-1 text-[0.65rem] tracking-wide text-text-faint">
              {row.verificationStatus}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}
