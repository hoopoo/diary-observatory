import type { PainCompetitionSignal } from "@/lib/pain";
import { BURDEN_LABELS } from "@/lib/pain";
import { PainEvidenceBadge } from "./PainEvidenceBadge";

export function PainSignalList({
  signals,
  showCause = true,
}: {
  signals: PainCompetitionSignal[];
  showCause?: boolean;
}) {
  return (
    <ul className="not-prose space-y-3">
      {signals.map((signal) => (
        <li
          key={signal.id}
          className="border border-border-soft bg-bg-raised px-4 py-4"
        >
          <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
            <div className="min-w-0">
              <p className="text-sm font-medium text-text">{signal.labelJa}</p>
              <p className="text-[0.7rem] tracking-wide text-text-faint">
                {signal.label}
              </p>
            </div>
            <PainEvidenceBadge level={signal.evidenceLevel} />
          </div>

          <p className="jp-serif mt-2 text-sm text-text-soft">
            {signal.descriptionJa}
          </p>

          {showCause && (signal.visibleTarget || signal.hiddenCause) && (
            <dl className="mt-3 grid gap-2 text-xs sm:grid-cols-2">
              {signal.visibleTarget && (
                <div className="border border-border-soft px-3 py-2">
                  <dt className="label">Visible target · 可視の対象</dt>
                  <dd className="mt-1 text-text-soft">{signal.visibleTarget}</dd>
                </div>
              )}
              {signal.hiddenCause && (
                <div className="border border-accent/40 bg-accent-soft px-3 py-2">
                  <dt className="label">Hidden cause · 隠れた原因</dt>
                  <dd className="mt-1 text-text">{signal.hiddenCause}</dd>
                </div>
              )}
            </dl>
          )}

          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Burden dimensions">
            {signal.burdenDimensions.map((dim) => (
              <li key={dim} className="filter-chip text-[0.68rem]">
                {BURDEN_LABELS[dim].ja}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
