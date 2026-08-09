import Link from "next/link";

export function AlcoholComparisonCta() {
  return (
    <aside className="not-prose my-14 border border-border px-6 py-8 md:px-8">
      <p className="label">Related comparison</p>
      <h3 className="editorial mt-3 text-2xl text-text md:text-3xl">
        See the full writer comparison
      </h3>
      <p className="jp-heading mt-2 text-lg">二人の構造比較を見る</p>
      <p className="mt-4 max-w-xl text-sm text-text-soft">
        This essay focuses on alcohol and writer persona. The comparison page
        examines labor, publishing systems, cities, and writing bodies.
      </p>
      <p className="jp-serif mt-2 max-w-xl text-sm text-text-faint">
        この記事は酒と作家像に焦点を当てる。比較ページでは、労働、出版制度、都市、書く身体を横断する。
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/compare/nishimura-bukowski"
          className="focus-ring inline-flex cta cta-secondary"
        >
          Open Nishimura and Bukowski
        </Link>
        <Link
          href="/compare/urban-diarists"
          className="focus-ring inline-flex border border-border px-5 py-2.5 text-xs text-text-soft hover:border-text-faint"
        >
          Three Urban Diarists
        </Link>
      </div>
    </aside>
  );
}
