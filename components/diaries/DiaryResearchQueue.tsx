import type { ResearchQueueItem } from "@/lib/types";

export function DiaryResearchQueue({ items }: { items: ResearchQueueItem[] }) {
  return (
    <section className="mt-10">
      <h3 className="label">Archive research queue</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="border border-border-soft px-4 py-3 text-sm"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-text-soft">{item.title}</p>
              <span className="border border-border px-1.5 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
                {item.status}
                {item.priority ? ` · ${item.priority}` : ""}
              </span>
            </div>
            {item.titleJa && (
              <p className="jp-serif mt-1 text-xs text-text-faint">
                {item.titleJa}
              </p>
            )}
            {item.date && (
              <p className="mt-1 text-xs text-text-faint">{item.date}</p>
            )}
            <p className="mt-2 text-xs text-text-faint">{item.reason}</p>
            {item.sourceNeeded && (
              <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
                Source needed
              </p>
            )}
            {item.notes && (
              <p className="mt-1 text-[0.65rem] text-text-faint">{item.notes}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
