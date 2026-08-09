import { editorialFunctionsPanel } from "@/data/observations/where-did-the-editor-go";

export function EditorialFunctionsPanel() {
  return (
    <aside className="not-prose my-10 border border-border px-5 py-6">
      <p className="label">Editorial functions</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">編集の機能</p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {editorialFunctionsPanel.map((item) => (
          <li
            key={item.id}
            className="border border-border px-3 py-2 text-sm text-text-soft"
          >
            <span className="block text-[0.65rem] tracking-wide text-text-faint">
              {item.label}
            </span>
            {item.labelJa}
          </li>
        ))}
      </ul>
    </aside>
  );
}
