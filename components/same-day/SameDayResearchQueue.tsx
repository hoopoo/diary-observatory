import type { ResearchQueueItem } from "@/lib/types";

export function SameDayResearchQueue({
  items,
}: {
  items: Array<ResearchQueueItem & { type?: string }>;
}) {
  return (
    <ul className="mt-8 space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="border border-border-soft px-4 py-3 text-sm"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <p className="text-text-soft">{item.title}</p>
              {item.titleJa && (
                <p className="jp-serif mt-0.5 text-xs text-text-faint">
                  {item.titleJa}
                </p>
              )}
            </div>
            <span className="border border-border px-1.5 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
              {item.status}
            </span>
          </div>
          {item.type && (
            <p className="mt-2 text-xs text-text-faint">Type: {item.type}</p>
          )}
          <p className="mt-1 text-xs text-text-faint">
            Priority: {item.priority}
            {item.sourceNeeded ? " · source needed" : ""}
          </p>
          <p className="mt-2 text-xs text-text-faint">{item.reason}</p>
          {item.notes && (
            <p className="mt-1 text-xs text-text-faint">{item.notes}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
