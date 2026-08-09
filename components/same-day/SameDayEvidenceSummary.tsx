import { EvidenceLevelBadge } from "@/components/entries/EvidenceLevelBadge";
import type { SameDayEvidenceSummary as EvidenceData } from "@/lib/types";

const LAYERS: Array<{
  level: "explicit" | "implied" | "contextual" | "unknown";
  key: keyof Pick<
    EvidenceData,
    "explicitItems" | "impliedItems" | "contextualItems" | "unknownItems"
  >;
  title: string;
}> = [
  { level: "explicit", key: "explicitItems", title: "Explicit" },
  { level: "implied", key: "impliedItems", title: "Implied" },
  { level: "contextual", key: "contextualItems", title: "Contextual" },
  { level: "unknown", key: "unknownItems", title: "Unknown" },
];

export function SameDayEvidenceSummaryPanel({
  data,
}: {
  data: EvidenceData;
}) {
  return (
    <ul className="mt-8 grid gap-4 md:grid-cols-2">
      {LAYERS.map((layer) => (
        <li key={layer.level} className="border border-border-soft px-4 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <p className="editorial text-lg text-text">{layer.title}</p>
            <EvidenceLevelBadge level={layer.level} />
          </div>
          <ul className="mt-3 space-y-1.5">
            {data[layer.key].map((item) => (
              <li key={item} className="text-sm text-text-soft">
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
