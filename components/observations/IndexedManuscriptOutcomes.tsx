import { EpistemicLabel } from "@/components/EpistemicLabel";
import { indexedManuscriptStatus } from "@/data/observations/the-manuscripts-that-were-not-chosen";

export function IndexedManuscriptOutcomes() {
  return (
    <aside className="not-prose my-12">
      <h3 className="editorial text-2xl text-text">Indexed manuscript outcomes</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        索引化された原稿の結果
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="fact" />
      </div>
      <ul className="mt-6 space-y-3">
        {indexedManuscriptStatus.map((row) => (
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
        データがないことを「不採用原稿がなかった」と扱わない。
      </p>
    </aside>
  );
}
