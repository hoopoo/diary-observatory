import type { Metadata } from "next";
import { BurdenMatrix } from "@/components/pain/BurdenMatrix";
import { PainBreadcrumb } from "@/components/pain/PainBreadcrumb";
import { PainCrossLinks } from "@/components/pain/PainCrossLinks";
import { PainLadder } from "@/components/pain/PainLadder";
import { PainCoreQuote, PainSection } from "@/components/pain/PainSection";
import {
  exitFromCompetition,
  invisiblePain,
  painCompared,
  painIdentityNotes,
  painIsNotEnough,
  painShared,
  visiblePain,
} from "@/data/pain";
import {
  PAIN_NETWORK,
  painArticleJsonLd,
  painBreadcrumbJsonLd,
} from "@/lib/pain";
import { SITE_URL } from "@/lib/site";

const node = PAIN_NETWORK["competition-of-pain"];

export const metadata: Metadata = {
  title: { absolute: `The Competition of Pain｜痛みの競争 — Diary Observatory` },
  description: node.description,
  alternates: { canonical: node.path },
  openGraph: {
    title: `${node.title} — ${node.titleAlt}`,
    description: node.description,
    type: "article",
    url: `${SITE_URL}${node.path}`,
    publishedTime: node.publishedAt,
    modifiedTime: node.updatedAt,
    authors: ["SHIRO & Co."],
  },
  twitter: {
    card: "summary_large_image",
    title: node.title,
    description: node.description,
  },
};

export default function CompetitionOfPainPage() {
  const jsonLd = [
    painArticleJsonLd(node),
    {
      ...painArticleJsonLd(node),
      "@type": "DefinedTerm",
      name: node.title,
      alternateName: node.titleAlt,
      description:
        "人々が苦痛から解放されるために協力するのではなく、自分の苦痛が他者より深く、正当で、優先されるべきだと証明しようとする社会状態。",
    },
    painBreadcrumbJsonLd([
      { name: "Diary Observatory", path: "" },
      { name: node.title, path: node.path },
    ]),
  ];

  return (
    <>
      {jsonLd.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      <article className="mx-auto w-full max-w-[44rem] px-5 py-16 md:px-8 md:py-24">
        <PainBreadcrumb items={[{ label: node.title }]} />

        {/* Opening — quiet */}
        <header className="mt-10 border-b border-border pb-12">
          <ul className="flex flex-wrap gap-2" aria-label="Observation labels">
            {["Concept", "The Competition of Pain", "Recognition", "Burden"].map(
              (label) => (
                <li
                  key={label}
                  className="label border border-border-soft px-2 py-1"
                >
                  {label}
                </li>
              ),
            )}
          </ul>
          <h1 className="editorial mt-8 text-4xl leading-tight text-text md:text-5xl">
            The Competition of Pain
          </h1>
          <p className="jp-heading mt-4 text-xl">痛みの競争</p>
          <p className="jp-serif mt-6 max-w-xl text-base text-text-soft md:text-lg">
            誰もが傷ついている社会で、私たちは傷を減らすのではなく、誰の傷が本物かを争っている。
          </p>

          <div className="jp-serif mt-10 max-w-md space-y-3 text-[1.02rem] leading-loose text-text-soft">
            <p>誰もが、少しずつ苦しい。</p>
            <p>しかし、全員を助ける仕組みはない。</p>
            <p>そこで社会は、苦痛を減らす代わりに、苦痛を順位づけ始める。</p>
          </div>
        </header>

        {/* Central definition */}
        <PainCoreQuote en="The Competition of Pain: a state in which, instead of cooperating to be freed from suffering, people try to prove that their own pain is deeper, more legitimate, and more deserving of priority than others'.">
          The Competition of Pain とは、人々が苦痛から解放されるために協力するのではなく、自分の苦痛が他者より深く、正当で、優先されるべきだと証明しようとする状態である。
        </PainCoreQuote>

        <div className="mt-14 space-y-16">
          <PainSection index="01." title="Pain Is Not Enough" titleJa="苦しいだけでは足りない">
            <p className="jp-body text-[0.95rem]">
              苦しいだけでは支援されない。次のものが求められる。
            </p>
            <ul className="mt-4 space-y-2">
              {painIsNotEnough.map((p) => (
                <li
                  key={p.ja}
                  className="border border-border-soft px-4 py-3 text-sm text-text-soft"
                >
                  {p.ja}
                  <span className="ml-2 text-[0.7rem] text-text-faint">
                    {p.en}
                  </span>
                </li>
              ))}
            </ul>
          </PainSection>

          <PainSection
            index="02."
            title="The Ladder of Pain"
            titleJa="痛みの梯子"
          >
            <p className="jp-body text-[0.95rem]">
              「自分もつらい」は、なぜ「自分のほうがつらい」に変化するのか。
            </p>
            <PainLadder />
          </PainSection>

          <PainSection index="03." title="Pain as Identity" titleJa="痛みがアイデンティティになるとき">
            <p className="jp-body text-[0.95rem]">
              苦痛が一時的な状態ではなく、アイデンティティになることがある。
            </p>
            <ul className="mt-4 space-y-2">
              {painIdentityNotes.map((p) => (
                <li key={p.ja} className="text-sm text-text-soft">
                  <span className="mr-2 text-accent" aria-hidden="true">
                    —
                  </span>
                  {p.ja}
                </li>
              ))}
            </ul>
            <p className="jp-serif mt-5 text-sm text-text-faint">
              これは、被害者の語りそのものを否定するものではない。語りが生存や帰属の手段になること自体には、正当な理由がある。
            </p>
          </PainSection>

          <PainSection
            index="04."
            title="The Visibility Problem"
            titleJa="可視性の問題"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-border px-5 py-5">
                <p className="label">Visible · 見えやすい苦痛</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {visiblePain.map((p) => (
                    <li key={p.ja} className="filter-chip text-[0.72rem]">
                      {p.ja}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-border-soft bg-bg-raised px-5 py-5">
                <p className="label">Invisible · 見えにくい苦痛</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {invisiblePain.map((p) => (
                    <li key={p.ja} className="filter-chip text-[0.72rem]">
                      {p.ja}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </PainSection>

          <PainSection
            index="05."
            title="Pain Is Compared, Not Shared"
            titleJa="比較される苦痛、共有される苦痛"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-border px-5 py-5">
                <p className="label">Compared · 比較</p>
                <ul className="mt-3 space-y-2">
                  {painCompared.map((p) => (
                    <li key={p.ja} className="text-sm text-text-soft">
                      {p.ja}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-accent/40 bg-accent-soft px-5 py-5">
                <p className="label">Shared · 共有</p>
                <ul className="mt-3 space-y-2">
                  {painShared.map((p) => (
                    <li key={p.ja} className="text-sm text-text">
                      {p.ja}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </PainSection>

          <PainSection index="06." title="Burden, Not Identity" titleJa="属性ではなく、負荷">
            <BurdenMatrix />
            <PainCoreQuote en="People are not the vulnerable. They become vulnerable, under certain conditions.">
              人は弱者なのではない。ある条件のもとで、脆弱になる。
            </PainCoreQuote>
          </PainSection>

          <PainSection
            index="07."
            title="Exit from the Competition"
            titleJa="競争から抜ける"
          >
            <ol className="grid gap-3 sm:grid-cols-2">
              {exitFromCompetition.map((p, i) => (
                <li
                  key={p.ja}
                  className="flex gap-3 border border-border-soft bg-bg-raised px-4 py-4"
                >
                  <span
                    className="editorial text-2xl text-accent"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-text">{p.ja}</p>
                    <p className="mt-0.5 text-[0.7rem] text-text-faint">
                      {p.en}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </PainSection>
        </div>

        {/* Closing */}
        <section className="mt-16 border-t border-border pt-12">
          <div className="jp-serif max-w-xl space-y-5 text-[1.02rem] leading-loose text-text-soft">
            <p>誰かの苦痛が認められることは、自分の苦痛が否定されることではない。</p>
            <p>
              しかし、そう思えない社会を作った責任は、個人の優しさだけでは解決できない。
            </p>
            <p className="text-text">必要なのは、痛みを競わせない制度である。</p>
          </div>
        </section>

        <PainCrossLinks from="competition-of-pain" />
      </article>
    </>
  );
}
