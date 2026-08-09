import { movementReasons } from "@/data/writers/fumiko-hayashi";

export function MovementReasonPanel() {
  return (
    <aside className="not-prose my-8 border border-border px-5 py-6">
      <p className="label">Movement reasons</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">移動の理由</p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {movementReasons.map((item) => (
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
      <p className="mt-4 text-sm text-text-faint">
        戦争期・植民地地域への移動は、出典確認後に個別実装する。美談化しない。
      </p>
    </aside>
  );
}
