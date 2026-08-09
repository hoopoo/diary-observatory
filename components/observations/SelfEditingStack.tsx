import { selfEditingStack } from "@/data/observations/where-did-the-editor-go";

export function SelfEditingStack() {
  return (
    <aside className="not-prose my-10 border border-border px-5 py-6">
      <p className="label">Self-editing stack</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">自己編集の層</p>
      <ol className="mt-5 space-y-2">
        {selfEditingStack.map((item, i) => (
          <li
            key={item.id}
            className="flex items-baseline gap-3 border-b border-border pb-2 text-sm text-text-soft last:border-0"
          >
            <span className="w-6 shrink-0 text-[0.65rem] text-text-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>
              <span className="block text-[0.65rem] tracking-wide text-text-faint">
                {item.label}
              </span>
              {item.labelJa}
            </span>
          </li>
        ))}
      </ol>
    </aside>
  );
}
