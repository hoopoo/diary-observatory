import { editorRelationshipAxes } from "@/data/observations/before-the-platform-small-press";

export function EditorRelationshipPanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Editor relationship</p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        {editorRelationshipAxes.map((item) => (
          <li key={item.id} className="border border-border-soft px-3 py-3">
            <p className="editorial text-base text-text">{item.label}</p>
            <p className="jp-serif text-xs text-accent">{item.labelJa}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
