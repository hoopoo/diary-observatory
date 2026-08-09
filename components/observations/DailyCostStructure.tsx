import { dailyCostStructure } from "@/data/observations/the-price-of-an-ordinary-day";

export function DailyCostStructure() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Daily cost structure</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {dailyCostStructure.map((item) => (
          <li key={item.id} className="border border-border-soft px-4 py-4">
            <p className="editorial text-lg text-text">{item.label}</p>
            <p className="jp-serif text-xs text-accent">{item.labelJa}</p>
            <p className="mt-3 text-sm text-text-faint">
              Known amount: Not indexed
            </p>
            <p className="mt-1 text-[0.65rem] tracking-wide text-text-faint">
              Verification: {item.status}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
