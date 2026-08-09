import type { WriterResearchQueueItem } from "@/lib/types";

export function WriterResearchQueue({
  items,
}: {
  items: WriterResearchQueueItem[];
}) {
  return (
    <aside className="not-prose my-8">
      <h3 className="editorial text-2xl text-text">Research queue</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">調査対象</p>
      <ol className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="border border-border px-4 py-4 text-sm text-text-soft"
          >
            <p className="label">Priority {item.priority}</p>
            <p className="editorial mt-2 text-lg text-text">{item.title}</p>
            {item.titleJa && (
              <p className="jp-serif mt-1 text-text-soft">{item.titleJa}</p>
            )}
            <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
              {item.type} · {item.status}
              {item.sourceNeeded ? " · source-needed" : ""}
            </p>
            {item.note && (
              <p className="mt-2 text-xs text-text-faint">{item.note}</p>
            )}
          </li>
        ))}
      </ol>
    </aside>
  );
}
