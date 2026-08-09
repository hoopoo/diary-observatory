import { drinkingContexts } from "@/data/observations/alcohol-explains-writers-too-easily";

export function DrinkingContextPanel() {
  return (
    <aside className="not-prose my-10">
      <ul className="grid gap-3 sm:grid-cols-2">
        {drinkingContexts.map((ctx) => (
          <li key={ctx.id} className="border border-border-soft px-4 py-4">
            <p className="editorial text-lg text-text">{ctx.label}</p>
            <p className="jp-serif text-xs text-accent">{ctx.labelJa}</p>
            <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
              {ctx.contextType}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
