import { booksEconomyAxes } from "@/data/observations/the-price-of-an-ordinary-day";

export function BooksEconomyPanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Books economy</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {booksEconomyAxes.map((axis) => (
          <li
            key={axis.id}
            className="border border-border px-3 py-2 text-sm text-text-soft"
          >
            <span className="editorial text-text">{axis.label}</span>
            <span className="ml-2 text-xs text-text-faint">{axis.labelJa}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-text-faint">
        Concrete amounts and relations: verified data only. Currently indexing.
      </p>
    </aside>
  );
}
