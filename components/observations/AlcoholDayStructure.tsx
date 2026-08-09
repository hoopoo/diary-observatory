import { alcoholDayStructure } from "@/data/observations/alcohol-explains-writers-too-easily";

export function AlcoholDayStructure() {
  const columns = [
    { label: "Before drinking", labelJa: "飲酒前", items: alcoholDayStructure.before },
    { label: "Drinking", labelJa: "飲酒中", items: alcoholDayStructure.during },
    { label: "After drinking", labelJa: "飲酒後", items: alcoholDayStructure.after },
  ];

  return (
    <aside className="not-prose my-10">
      <p className="label">Alcohol day structure</p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {columns.map((col) => (
          <div key={col.label} className="border border-border-soft px-4 py-4">
            <p className="editorial text-lg text-text">{col.label}</p>
            <p className="jp-serif text-xs text-accent">{col.labelJa}</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
