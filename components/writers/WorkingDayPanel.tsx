import { workingDayPanel } from "@/data/writers/fumiko-hayashi";

export function WorkingDayPanel() {
  return (
    <aside className="not-prose my-8 border border-border px-5 py-6">
      <p className="label">Working day</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">働く一日の層</p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {workingDayPanel.map((item) => (
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
