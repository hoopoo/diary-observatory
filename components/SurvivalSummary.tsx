import { EntityStatusBadge } from "@/components/EntityStatusBadge";
import type { SurvivalSummaryData } from "@/lib/types";

export function SurvivalSummary({ data }: { data: SurvivalSummaryData }) {
  const total = data.buckets.reduce((sum, b) => sum + b.count, 0);

  return (
    <section className="paper-panel p-6 md:p-8">
      <p className="label">World Survival</p>
      <h2 className="editorial mt-3 text-2xl text-text md:text-3xl">
        {data.label}
      </h2>
      <p className="jp-serif mt-2 text-sm text-accent">{data.labelJa}</p>
      {data.date && (
        <p className="mt-3 text-xs tracking-wide text-text-faint">{data.date}</p>
      )}

      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {data.buckets.map((bucket) => (
          <li
            key={bucket.status}
            className="flex items-center justify-between gap-3 border border-border-soft px-3 py-3"
          >
            <EntityStatusBadge status={bucket.status} size="sm" />
            <span className="editorial text-2xl text-text">{bucket.count}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-xs text-text-faint">
        Indexed entities: {total}. Not collapsed into a single Survival Rate.
      </p>
      {data.noteJa && (
        <p className="jp-serif mt-2 text-sm text-text-soft">{data.noteJa}</p>
      )}
      {data.note && (
        <p className="mt-1 text-sm text-text-faint">{data.note}</p>
      )}
    </section>
  );
}
