import type { Metadata } from "next";
import Link from "next/link";
import { QuoteBlock } from "@/components/QuoteBlock";
import { CORE_METHOD, CORE_SENTENCE, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${SITE_NAME} — project description and method.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <p className="label">About</p>
      <h1 className="editorial mt-3 text-4xl text-text md:text-5xl">
        Diary Observatory
      </h1>
      <p className="jp-heading mt-4 text-xl">
        日記に残った世界を、現在から読み直す
      </p>

      <div className="prose-diary jp-body mt-10 space-y-5">
        <p>日記は、未来のために書かれた歴史資料ではない。</p>
        <p>だからこそ、整理される前の生活が残る。</p>
        <p>
          歯痛。
          <br />
          雨。
          <br />
          酒。
          <br />
          古書店。
          <br />
          編集者からの電話。
          <br />
          テレビの収録。
          <br />
          閉店した店。
          <br />
          亡くなった友人。
        </p>
        <p>
          Diary Observatoryは、AIを物語生成に使うのではなく、実際に生きられた一日を索引化し、現在と接続するために使う。
        </p>
      </div>

      <div className="mt-10 space-y-8">
        <QuoteBlock en={CORE_SENTENCE.en} ja={CORE_SENTENCE.ja} />
        <QuoteBlock en={CORE_METHOD.en} ja={CORE_METHOD.ja} />
      </div>

      <section className="mt-14 space-y-4 border-t border-border pt-10">
        <h2 className="editorial text-2xl text-text">Featured comparison</h2>
        <p className="text-sm text-text-soft">
          荷風・西村・ブコウスキーを横断する代表比較ページ。
        </p>
        <Link
          href="/compare/urban-diarists"
          className="focus-ring inline-flex cta cta-secondary"
        >
          Three Urban Diarists →
        </Link>
      </section>

      <section className="mt-14 space-y-4 border-t border-border pt-10">
        <h2 className="editorial text-2xl text-text">Featured essay</h2>
        <p className="text-sm text-text-soft">
          三つの生活速度を、長文観測として読む。
        </p>
        <Link
          href="/observations/three-cities-three-speeds"
          className="focus-ring inline-flex cta cta-secondary"
        >
          三つの都市、三つの生活速度 →
        </Link>
      </section>

      <section className="mt-14 space-y-4 border-t border-border pt-10">
        <h2 className="editorial text-2xl text-text">Four Urban Lives</h2>
        <p className="text-sm text-text-soft">
          天候、メディア、労働、生活維持から四人を横断する比較。
        </p>
        <Link
          href="/compare/four-urban-lives"
          className="focus-ring inline-flex cta cta-secondary"
        >
          Four Urban Lives →
        </Link>
      </section>

      <section className="mt-14 space-y-4 border-t border-border pt-10">
        <h2 className="editorial text-2xl text-text">Latest Observation</h2>
        <p className="text-sm text-text-soft">
          書く前の食事、住居、家事、賃金労働、支援を、文学生活の OS として読む。
        </p>
        <Link
          href="/observations/maintenance-is-not-background"
          className="focus-ring inline-flex cta cta-secondary"
        >
          生活維持は、文学の背景ではない →
        </Link>
      </section>

      <section className="mt-14 space-y-4 border-t border-border pt-10">
        <h2 className="editorial text-2xl text-text">Related Observation</h2>
        <p className="text-sm text-text-soft">
          不採用、返送、沈黙、公開されなかった文章の痕跡を観測する。
        </p>
        <Link
          href="/observations/the-manuscripts-that-were-not-chosen"
          className="focus-ring inline-flex cta cta-secondary"
        >
          選ばれなかった原稿 →
        </Link>
      </section>

      <section className="mt-14 space-y-4 border-t border-border pt-10">
        <h2 className="editorial text-2xl text-text">
          How evidence becomes an observation
        </h2>
        <p className="jp-heading text-lg">根拠が観測になるまで</p>
        <ol className="mt-4 space-y-2 text-sm text-text-soft">
          <li>Source → Capture → Fact → Observation → Interpretation → Comparison / Article</li>
        </ol>
        <ul className="mt-4 space-y-2 text-sm text-text-soft">
          <li>Fact：資料から確認できること</li>
          <li>Observation：複数Factの並びから見えること</li>
          <li>Interpretation：そのパターンへの意味づけ</li>
          <li>Unknown：資料から分からないこと</li>
        </ul>
        <p className="mt-4 text-xs text-text-faint">
          Interpretation を SourceCapture の直接結果として見せない。経路は Source → Fact →
          Observation → Interpretation を保つ。
        </p>
        <Link
          href="/provenance"
          className="focus-ring mt-4 inline-flex cta cta-secondary"
        >
          Explore provenance →
        </Link>
        <Link
          href="/entries/1918-01-01-kafu-nagai"
          className="focus-ring mt-4 ml-3 inline-flex border border-border px-4 py-2 text-xs text-text-soft"
        >
          See a traced day (Partial) →
        </Link>
        <Link
          href="/observations/more-sources-less-certainty"
          className="focus-ring mt-4 ml-3 inline-flex border border-border px-4 py-2 text-xs text-text-soft"
        >
          Do More Sources Make Facts Simpler? →
        </Link>
        <Link
          href="/observations/link-rot-is-archive-history"
          className="focus-ring mt-4 ml-3 inline-flex border border-border px-4 py-2 text-xs text-text-soft"
        >
          Link Rot Is Also Archive History →
        </Link>
        <Link
          href="/observations/screenshot-is-not-provenance"
          className="focus-ring mt-4 ml-3 inline-flex border border-border px-4 py-2 text-xs text-text-soft"
        >
          A Screenshot Is Not Provenance →
        </Link>
        <Link
          href="/observations/is-social-media-a-diary"
          className="focus-ring mt-4 ml-3 inline-flex border border-border px-4 py-2 text-xs text-text-soft"
        >
          Is Social Media a Diary? →
        </Link>
      </section>

      <section className="mt-14 space-y-4 border-t border-border pt-10">
        <h2 className="editorial text-2xl text-text">Editorial rules</h2>
        <ul className="space-y-2 text-sm text-text-soft">
          <li>架空の引用を作らない</li>
          <li>架空の出典を作らない</li>
          <li>不明な現在状況は unknown にする</li>
          <li>日記本文の長い転載はしない</li>
          <li>著作権保護中の文章は短い引用と要約に留める</li>
          <li>出典欄を必ず設ける</li>
          <li>Fact / Observation / Interpretation をUI上で分ける</li>
        </ul>
      </section>
    </div>
  );
}
