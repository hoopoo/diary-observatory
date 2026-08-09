import { readerEditingPanel } from "@/data/observations/where-did-the-editor-go";

export function ReaderEditingPanel() {
  return (
    <aside className="not-prose my-10 border border-border px-5 py-6">
      <p className="label">Reader editing</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">読者による編集</p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {readerEditingPanel.map((item) => (
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
