import Link from "next/link";

export function ComparisonEssayCta() {
  return (
    <aside className="not-prose my-14 border border-border px-6 py-8 md:px-8">
      <p className="label">Related comparison</p>
      <h3 className="editorial mt-3 text-2xl text-text md:text-3xl">
        Explore the structured comparison
      </h3>
      <p className="jp-heading mt-2 text-lg">構造化された比較を見る</p>
      <p className="mt-4 max-w-xl text-sm text-text-soft">
        This essay interprets the records. The comparison page exposes the data
        structure behind it.
      </p>
      <p className="jp-serif mt-2 max-w-xl text-sm text-text-faint">
        この記事は記録の意味を読む。比較ページでは、その背後にあるデータ構造を確認できる。
      </p>
      <Link
        href="/compare/urban-diarists"
        className="focus-ring mt-8 inline-flex border border-text bg-text px-5 py-2.5 text-xs tracking-wide text-bg"
      >
        Open Three Urban Diarists
      </Link>
    </aside>
  );
}
