import { bodyAfterDrinking } from "@/data/observations/alcohol-explains-writers-too-easily";

export function AlcoholBodyPanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Body after drinking</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {bodyAfterDrinking.map((item) => (
          <li
            key={item}
            className="border border-border px-2.5 py-1 text-sm text-text-soft"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
