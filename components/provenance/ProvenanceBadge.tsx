import type { ProvenanceCompleteness } from "@/lib/types";

const LABELS: Record<
  ProvenanceCompleteness,
  { en: string; ja: string }
> = {
  complete: { en: "Strong trail", ja: "根拠経路・完成" },
  strong: { en: "Strong trail", ja: "根拠経路・強い" },
  partial: { en: "Partial trail", ja: "根拠経路・部分" },
  minimal: { en: "Minimal trail", ja: "根拠経路・最小" },
  broken: { en: "Broken trail", ja: "根拠経路・断絶" },
  unknown: { en: "Unknown trail", ja: "根拠経路・未評価" },
};

/** complete uses Strong trail label per UI (complete==strong display). */
export function ProvenanceBadge({
  completeness,
}: {
  completeness: ProvenanceCompleteness;
}) {
  const label = LABELS[completeness] ?? LABELS.unknown;
  return (
    <span className="inline-flex border border-border px-2 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
      {label.en}
      <span className="text-text-faint/80"> · {label.ja}</span>
    </span>
  );
}
