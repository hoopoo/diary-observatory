import { entryResearchTarget } from "@/data/diaries/horoki";

export function EditionComparisonWorkspace() {
  return (
    <aside className="not-prose my-10 border border-border px-5 py-6">
      <h3 className="editorial text-2xl text-text">
        Edition comparison workspace
      </h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        版比較（簡易MVP）
      </p>
      <p className="mt-2 text-xs text-text-faint">
        将来: /diaries/horoki/editions — 全文diffは実装しない
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <div className="border border-border px-4 py-4">
          <p className="label">Edition A</p>
          <p className="mt-2 text-sm text-text-faint">Not selected</p>
        </div>
        <div className="border border-border px-4 py-4">
          <p className="label">Edition B</p>
          <p className="mt-2 text-sm text-text-faint">Not selected</p>
        </div>
      </div>
      <p className="mt-4 text-xs text-text-faint">
        Compare by: section · date · place · person · work · food · money ·
        phrase · sequence
      </p>
      <p className="mt-2 text-xs text-text-faint">
        Diff states: Present in both · Only in A · Only in B · Modified ·
        Reordered · Uncertain
      </p>
    </aside>
  );
}

export function HorokiEntryTarget() {
  return (
    <aside className="not-prose my-10 border border-border px-5 py-6">
      <h3 className="editorial text-2xl text-text">First entry to index</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        最初に索引化する一日
      </p>
      <p className="mt-4 text-sm text-text-soft">{entryResearchTarget.emptyEn}</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        {entryResearchTarget.emptyJa}
      </p>
      <p className="mt-4 text-xs tracking-wide text-text-faint">
        Status: {entryResearchTarget.status}
      </p>
      <p className="mt-2 text-xs text-text-faint">
        Future URL: {entryResearchTarget.futureUrl}
      </p>
      <ul className="mt-4 space-y-1 text-sm text-text-faint">
        {entryResearchTarget.conditions.map((c) => (
          <li key={c}>· {c}</li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-text-faint">
        候補日を推測で作らない。
      </p>
    </aside>
  );
}
