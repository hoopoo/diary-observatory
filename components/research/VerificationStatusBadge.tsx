import type { VerificationStatus } from "@/lib/types";

const LABELS: Record<string, { en: string; ja: string }> = {
  verified: { en: "Verified", ja: "確認済み" },
  "needs-source": { en: "Needs source", ja: "要出典" },
  unverified: { en: "Unverified", ja: "未検証" },
  partial: { en: "Partial", ja: "部分確認" },
  indexing: { en: "Indexing", ja: "索引中" },
  "source-needed": { en: "Source needed", ja: "要資料" },
  conflicting: { en: "Conflicting", ja: "矛盾あり" },
  unknown: { en: "Unknown", ja: "不明" },
  "not-checked": { en: "Not checked", ja: "未確認" },
  "not-applicable": { en: "Not applicable", ja: "該当なし" },
};

export function VerificationStatusBadge({
  status,
}: {
  status: VerificationStatus | string;
}) {
  const label = LABELS[status] ?? { en: status, ja: status };
  return (
    <span className="inline-flex border border-border px-2 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
      {label.en}
      <span className="text-text-faint/80"> · {label.ja}</span>
    </span>
  );
}
