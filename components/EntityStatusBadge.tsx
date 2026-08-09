import { ENTITY_STATUS_LABELS } from "@/lib/labels";
import type { EntityStatus } from "@/lib/types";

export function EntityStatusBadge({
  status,
  size = "md",
}: {
  status: EntityStatus;
  size?: "sm" | "md";
}) {
  const label = ENTITY_STATUS_LABELS[status];
  const pad = size === "sm" ? "px-2 py-0.5 text-[0.65rem]" : "px-2.5 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center gap-1.5 border border-border ${pad} tracking-wide text-text-soft`}
      title={`${label.en} / ${label.ja}`}
    >
      <span aria-hidden="true" className="text-accent">
        {label.icon}
      </span>
      <span>
        {label.en}
        <span className="text-text-faint"> · {label.ja}</span>
      </span>
      <span className="sr-only">{`Status: ${label.en}`}</span>
    </span>
  );
}
