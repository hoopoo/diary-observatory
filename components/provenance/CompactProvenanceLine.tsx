import Link from "next/link";
import { ProvenanceBadge } from "@/components/provenance/ProvenanceBadge";
import { ProvenanceDrawer } from "@/components/provenance/ProvenanceDrawer";
import {
  getCapturesForFact,
  getProvenanceCompleteness,
  getSourcesForFact,
} from "@/lib/provenance";

export function CompactProvenanceLine({
  factClaimId,
}: {
  factClaimId: string;
}) {
  const { completeness } = getProvenanceCompleteness(factClaimId);
  const sources = getSourcesForFact(factClaimId);
  const hasPrimary = sources.some(
    (s) => s.category === "primary" || s.sourceLevel === "primary",
  );
  const hasCapture = getCapturesForFact(factClaimId).length > 0;

  return (
    <div className="mt-1 space-y-1">
      <p className="text-[0.65rem] tracking-wide text-text-faint">
        {hasPrimary
          ? "Primary source"
          : sources.length
            ? "Source linked"
            : "Source missing"}
        {" · "}
        Edition missing
        {" · "}
        {hasCapture ? "Capture linked" : "Page not indexed"}
        {" · "}
        Trail: {completeness}
      </p>
      <ProvenanceBadge completeness={completeness} />
      <ProvenanceDrawer factClaimId={factClaimId} />
      <Link href={`#${factClaimId}`} className="sr-only">
        Anchor {factClaimId}
      </Link>
    </div>
  );
}
