import { EpistemicLabel } from "@/components/EpistemicLabel";
import { indexedEditorialRecords } from "@/data/observations/where-did-the-editor-go";

export function IndexedEditorialRecords() {
  return (
    <aside className="not-prose my-12">
      <h3 className="editorial text-2xl text-text">Indexed editorial records</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        索引化された編集記録
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="fact" />
      </div>
      <ul className="mt-6 space-y-3">
        {indexedEditorialRecords.map((row) => (
          <li
            key={row.id}
            className="border border-border px-4 py-4 text-sm text-text-soft"
          >
            <p className="editorial text-lg text-text">{row.writer}</p>
            <p className="mt-1">{row.focus}</p>
            <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
              {row.status}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-text-faint">
        AI / Algorithm 行は概念比較のみ。Factとして件数化しない。
      </p>
    </aside>
  );
}
