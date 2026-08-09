import { creatorStack } from "@/data/observations/before-the-platform-small-press";

export function CreatorStackPanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Creator stack</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
        {creatorStack.map((item) => (
          <li key={item.id} className="border border-border-soft px-3 py-3">
            <p className="editorial text-base text-text">{item.label}</p>
            <p className="jp-serif text-xs text-accent">{item.labelJa}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
