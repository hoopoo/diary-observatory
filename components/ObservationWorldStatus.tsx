import { EntityStatusBadge } from "@/components/EntityStatusBadge";
import type { SurvivalSummaryData } from "@/lib/types";

export function ObservationWorldStatus({ data }: { data: SurvivalSummaryData }) {
  return (
    <section className="my-14 paper-panel p-6 md:p-8" aria-labelledby="world-status">
      <p className="label">World Status</p>
      <h2 id="world-status" className="editorial mt-3 text-2xl text-text md:text-3xl">
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

      <div className="mt-6 space-y-2 border-t border-border-soft pt-5">
        <p className="text-sm text-text-soft">{data.note}</p>
        {data.noteJa && (
          <p className="jp-serif text-sm text-text-faint">{data.noteJa}</p>
        )}
      </div>
    </section>
  );
}
