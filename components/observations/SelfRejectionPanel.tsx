import { selfRejection } from "@/data/observations/the-manuscripts-that-were-not-chosen";

export function SelfRejectionPanel() {
  return (
    <aside className="not-prose my-10 border border-border px-5 py-6">
      <p className="label">Self-rejection</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">作者による非公開</p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {selfRejection.map((item) => (
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
        作家ごとの具体例は出典確認後のみ。
      </p>
    </aside>
  );
}
