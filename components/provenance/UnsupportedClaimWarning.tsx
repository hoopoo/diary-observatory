import {
  getInterpretationClaimById,
  getObservationClaimById,
  getProvenanceIssuesForFact,
} from "@/lib/provenance";

/** Surfaces provenance issues without auto-hiding the claim. */
export function UnsupportedClaimWarning({ claimId }: { claimId: string }) {
  const factIssues = getProvenanceIssuesForFact(claimId);
  const obs = getObservationClaimById(claimId);
  const interp = getInterpretationClaimById(claimId);

  const extra: string[] = [];
  if (obs && obs.supportingFactClaimIds.length === 0) {
    extra.push("Observation without supporting facts");
  }
  if (
    interp &&
    interp.supportingFactClaimIds.length === 0 &&
    (interp.supportingObservationIds?.length ?? 0) === 0
  ) {
    extra.push("Interpretation without Observation / Fact support");
  }

  const critical = factIssues.filter((i) => i.severity === "critical");
  const warnings = factIssues.filter((i) => i.severity === "warning");

  if (critical.length === 0 && warnings.length === 0 && extra.length === 0) {
    return null;
  }

  return (
    <aside
      className="mt-2 border border-dashed border-border px-3 py-2 text-xs text-text-faint"
      role="status"
    >
      <p className="label">Source path incomplete · 資料経路は未完成</p>
      <ul className="mt-2 space-y-1">
        {critical.map((i) => (
          <li key={i.id}>Critical · {i.messageJa ?? i.message}</li>
        ))}
        {warnings.map((i) => (
          <li key={i.id}>Warning · {i.messageJa ?? i.message}</li>
        ))}
        {extra.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
      <p className="mt-2">
        Verified label withheld when critical issues are present. Status remains
        Partial / Source needed / Unknown — page is not auto-hidden.
      </p>
    </aside>
  );
}
