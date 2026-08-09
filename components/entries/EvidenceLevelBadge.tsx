import type { EvidenceLevel } from "@/lib/types";

const LABELS: Record<EvidenceLevel, { en: string; ja: string }> = {
  explicit: { en: "Recorded", ja: "明示" },
  implied: { en: "Implied", ja: "含意" },
  contextual: { en: "Contextual", ja: "文脈" },
  unknown: { en: "Unknown", ja: "不明" },
};

export function EvidenceLevelBadge({ level }: { level: EvidenceLevel }) {
  const label = LABELS[level];
  return (
    <span className="inline-flex border border-border px-2 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
      {label.en}
      <span className="text-text-faint/80"> · {label.ja}</span>
    </span>
  );
}
