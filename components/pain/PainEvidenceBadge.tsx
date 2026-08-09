import { PAIN_EVIDENCE_LABELS, type PainEvidenceLevel } from "@/lib/pain";

export function PainEvidenceBadge({ level }: { level: PainEvidenceLevel }) {
  const label = PAIN_EVIDENCE_LABELS[level];
  return (
    <span className="inline-flex items-center gap-1 border border-border px-2 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
      {label.en}
      <span className="text-text-faint/80"> · {label.ja}</span>
    </span>
  );
}
