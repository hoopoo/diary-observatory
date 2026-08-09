import { indexedEvidence } from "@/data/observations/alcohol-explains-writers-too-easily";

export function AlcoholIndexedEvidence() {
  return (
    <aside className="not-prose my-14">
      <h3 className="editorial text-2xl text-text">Indexed evidence</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        未確認の飲酒量や頻度は表示しない。
      </p>
      <ul className="mt-6 space-y-4">
        {indexedEvidence.map((block) => (
          <li key={block.writer} className="border border-border px-4 py-4">
            <p className="editorial text-xl text-text">{block.writer}</p>
            <p className="mt-3 text-xs tracking-wide text-text-faint">
              Indexed sources
            </p>
            <ul className="mt-2 space-y-1 text-sm text-text-soft">
              {block.sources.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs tracking-wide text-text-faint">
              Alcohol-specific evidence
            </p>
            <p className="mt-1 text-sm text-text-soft">{block.alcoholEvidence}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
