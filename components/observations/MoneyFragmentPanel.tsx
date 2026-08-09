import { moneyFragments } from "@/data/observations/three-cities-three-speeds";

export function MoneyFragmentPanel() {
  return (
    <aside className="not-prose my-10 space-y-3">
      {moneyFragments.map((fragment) => (
        <div
          key={fragment.id}
          className="border border-dashed border-border px-4 py-4"
        >
          <p className="label">Money fragment</p>
          <p className="editorial mt-2 text-2xl text-text-faint">
            {fragment.amount} {fragment.currency !== "—" ? fragment.currency : ""}
          </p>
          <p className="mt-2 text-sm text-text-soft">{fragment.context}</p>
          <p className="mt-2 text-xs text-text-faint">
            Writer: {fragment.writer}
            {fragment.date ? ` · ${fragment.date}` : ""} ·{" "}
            {fragment.verificationStatus}
          </p>
        </div>
      ))}
    </aside>
  );
}
