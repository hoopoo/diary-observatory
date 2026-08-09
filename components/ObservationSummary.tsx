import { EpistemicLabel } from "@/components/EpistemicLabel";
import type { EpistemicKind } from "@/lib/types";

type Finding = { kind: EpistemicKind; text: string };
type Legend = { kind: EpistemicKind; en: string; ja: string };

export function ObservationSummary({
  observedWorld,
  observedWorldJa,
  mainQuestion,
  mainQuestionEn,
  findings,
  legend,
}: {
  observedWorld: string;
  observedWorldJa?: string;
  mainQuestion: string;
  mainQuestionEn?: string;
  findings: Finding[];
  legend: Legend[];
}) {
  return (
    <section className="paper-panel my-10 p-6 md:p-8" aria-labelledby="obs-summary">
      <p className="label">Observation Summary</p>
      <h2 id="obs-summary" className="editorial mt-3 text-2xl text-text">
        Observed world
      </h2>
      <p className="mt-2 text-sm text-text-soft">{observedWorld}</p>
      {observedWorldJa && (
        <p className="jp-serif mt-1 text-sm text-text-faint">{observedWorldJa}</p>
      )}

      <div className="mt-6 border-t border-border-soft pt-5">
        <p className="label">Main question</p>
        <p className="jp-heading mt-2 text-lg">{mainQuestion}</p>
        {mainQuestionEn && (
          <p className="mt-1 text-sm text-text-faint">{mainQuestionEn}</p>
        )}
      </div>

      <div className="mt-6 border-t border-border-soft pt-5">
        <p className="label">Current findings</p>
        <ul className="mt-4 space-y-3">
          {findings.map((finding) => (
            <li key={finding.text} className="flex flex-col gap-2 sm:flex-row sm:items-start">
              <EpistemicLabel kind={finding.kind} />
              <p className="jp-serif text-sm text-text-soft">{finding.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 grid gap-3 border-t border-border-soft pt-5 sm:grid-cols-3">
        {legend.map((item) => (
          <div key={item.kind} className="border border-border-soft px-3 py-3">
            <EpistemicLabel kind={item.kind} />
            <p className="mt-2 text-xs text-text-faint">{item.en}</p>
            <p className="jp-serif mt-1 text-xs text-text-soft">{item.ja}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
