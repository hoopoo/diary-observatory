import type { EntityNature } from "@/lib/types";

const LABELS: Record<EntityNature, { en: string; ja: string }> = {
  real: { en: "Real", ja: "実在" },
  fictional: { en: "Fictional", ja: "架空" },
  composite: { en: "Composite", ja: "複合" },
  disputed: { en: "Disputed", ja: "争点" },
  unknown: { en: "Unknown", ja: "不明" },
};

export function EntityNatureBadge({ nature }: { nature: EntityNature }) {
  const label = LABELS[nature];
  return (
    <span className="inline-flex border border-border px-2 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
      {label.en}
      <span className="text-text-faint/80"> · {label.ja}</span>
    </span>
  );
}
