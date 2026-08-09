import type { CostVisibility } from "@/lib/types";

const LABELS: Record<CostVisibility, { en: string; ja: string }> = {
  priced: { en: "Priced", ja: "金額あり" },
  "cost-bearing": { en: "Cost-bearing", ja: "費用を伴う" },
  "unpaid-labor": { en: "Unpaid labor", ja: "無償労働" },
  gifted: { en: "Gifted", ja: "贈与" },
  "institutionally-supported": {
    en: "Institutionally supported",
    ja: "制度的支援",
  },
  unknown: { en: "Unknown", ja: "不明" },
};

export function CostVisibilityBadge({
  visibility,
}: {
  visibility: CostVisibility;
}) {
  const label = LABELS[visibility];
  return (
    <span className="inline-flex border border-border px-2 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
      {label.en}
      <span className="text-text-faint/80"> · {label.ja}</span>
    </span>
  );
}
