import { EpistemicLabel } from "@/components/EpistemicLabel";
import { rejectionTypes } from "@/data/observations/the-manuscripts-that-were-not-chosen";

export function RejectionTypesPanel() {
  return (
    <aside className="not-prose my-10 border border-border px-5 py-6">
      <p className="label">Rejection types</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">不採用の種類</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="observation" />
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          Not all outcomes are “rejection”
        </span>
      </div>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {rejectionTypes.map((item) => (
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
