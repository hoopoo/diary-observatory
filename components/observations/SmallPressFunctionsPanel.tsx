import { smallPressFunctions } from "@/data/observations/before-the-platform-small-press";

export function SmallPressFunctionsPanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Small press functions</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {smallPressFunctions.map((item) => (
          <li key={item.id} className="border border-border px-4 py-4">
            <p className="editorial text-lg text-text">{item.label}</p>
            <p className="jp-serif text-xs text-accent">{item.labelJa}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
