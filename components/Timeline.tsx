import { EpistemicLabel } from "@/components/EpistemicLabel";
import type { ChronologyItem } from "@/lib/types";

export function Timeline({ items }: { items: ChronologyItem[] }) {
  return (
    <ol className="space-y-0 border-l border-border">
      {items.map((item) => (
        <li key={`${item.year}-${item.event}`} className="relative pl-6 py-4">
          <span
            className="absolute left-0 top-6 h-2 w-2 -translate-x-1/2 rounded-full bg-accent"
            aria-hidden="true"
          />
          <div className="flex flex-wrap items-center gap-2">
            <p className="editorial text-lg text-text">
              {item.yearLabel ?? item.year}
            </p>
            {item.kind && <EpistemicLabel kind={item.kind} />}
            {item.verificationStatus && (
              <span className="border border-border px-1.5 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
                {item.verificationStatus}
              </span>
            )}
          </div>
          <p className="jp-serif mt-1 text-sm text-text-soft">{item.eventJa}</p>
          <p className="mt-1 text-sm text-text-faint">{item.event}</p>
        </li>
      ))}
    </ol>
  );
}
