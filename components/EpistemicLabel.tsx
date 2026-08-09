import { EPISTEMIC_LABELS } from "@/lib/labels";
import type { EpistemicKind } from "@/lib/types";

export function EpistemicLabel({ kind }: { kind: EpistemicKind }) {
  const label = EPISTEMIC_LABELS[kind];
  return (
    <span className="inline-flex items-center gap-1 border border-border px-2 py-0.5 text-[0.65rem] tracking-[0.12em] uppercase text-text-faint">
      {label.en}
      <span className="normal-case tracking-normal text-text-faint/80">
        / {label.ja}
      </span>
    </span>
  );
}
