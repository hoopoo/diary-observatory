import { ProvenanceBadge } from "@/components/provenance/ProvenanceBadge";
import { getEntryProvenanceSummary } from "@/lib/provenance";

export function ProvenanceAudit({ entryId }: { entryId: string }) {
  const s = getEntryProvenanceSummary(entryId);

  return (
    <section className="my-14 border-b border-border pb-14">
      <h2 className="editorial text-2xl text-text">Provenance audit</h2>
      <p className="jp-heading mt-2 text-lg">根拠監査</p>
      <div className="mt-4">
        <ProvenanceBadge completeness={s.overall} />
      </div>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm">
        {[
          ["Public facts", s.factClaims],
          ["Facts with Source", s.factsWithSource],
          ["Facts with Capture", s.factsWithCapture],
          ["Facts with Edition", s.factsWithEdition],
          ["Facts with page", s.factsWithPage],
          ["Cross-checked facts", s.crossCheckedFacts],
          ["Conflicted facts", s.conflictedFacts],
          ["Observations with fact support", s.observationsWithFactSupport],
          [
            "Interpretations with observation support",
            s.interpretationsWithObservationSupport,
          ],
          ["Rights reviewed", s.rightsReviewed],
        ].map(([label, value]) => (
          <li key={label as string} className="border border-border px-4 py-3">
            <p className="label">{label}</p>
            <p className="editorial mt-2 text-2xl text-text">{value}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-text-soft">
        Audit result: {s.audit}
      </p>
      <p className="mt-2 text-xs text-text-faint">
        単一の信用点数は作らない。Strong / Partial / Needs research のみ。
      </p>
    </section>
  );
}
