import { CostVisibilityBadge } from "@/components/observations/CostVisibilityBadge";
import { costVisibilityExamples } from "@/data/observations/the-price-of-an-ordinary-day";

export function CostVisibilityExamples() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Cost visibility</p>
      <ul className="mt-4 space-y-3">
        {costVisibilityExamples.map((item) => (
          <li
            key={item.label}
            className="flex flex-wrap items-center gap-3 border border-border-soft px-4 py-3"
          >
            <span className="text-sm text-text">{item.label}</span>
            <CostVisibilityBadge visibility={item.visibility} />
            <span className="text-xs text-text-faint">{item.note}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
