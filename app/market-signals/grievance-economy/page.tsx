import type { Metadata } from "next";
import { PainBreadcrumb } from "@/components/pain/PainBreadcrumb";
import { PainCrossLinks } from "@/components/pain/PainCrossLinks";
import { PainHero } from "@/components/pain/PainHero";
import { PainCoreQuote, PainSection } from "@/components/pain/PainSection";
import { PainSignalList } from "@/components/pain/PainSignalList";
import { VerticalFlow } from "@/components/pain/VerticalFlow";
import {
  businessImplications,
  grievanceOpportunities,
  grievanceRisks,
  grievanceSignalSummary,
  marketActors,
  middleClassLosses,
  monetizedEmotions,
  monetizedFormats,
  painToMarketFlow,
  signalsToWatch,
} from "@/data/pain";
import {
  PAIN_NETWORK,
  painArticleJsonLd,
  painBreadcrumbJsonLd,
} from "@/lib/pain";
import { SITE_URL } from "@/lib/site";

const node = PAIN_NETWORK["market-signals"];

export const metadata: Metadata = {
  title: { absolute: `The Grievance Economy｜Market Signals — Diary Observatory` },
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

export default function GrievanceEconomyPage() {
  const jsonLd = [
    painArticleJsonLd(node),
    painBreadcrumbJsonLd([
      { name: "Diary Observatory", path: "" },
      { name: "Market Signals", path: "/market-signals" },
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

      <article className="mx-auto w-full max-w-[46rem] px-5 py-14 md:px-8 md:py-20">
        <PainBreadcrumb
          items={[
            { label: "Market Signals", href: "/market-signals" },
            { label: node.title },
          ]}
        />

        <div className="mt-6">
          <PainHero
            primary="en"
            labels={[
              "Market Signals",
              "Grievance Economy",
              "Middle-Class Anxiety",
              "Welfare Chauvinism",
              "Attention Market",
            ]}
            title={node.title}
            titleAlt={node.titleAlt}
            subtitle={node.subtitle}
            lead={[
              "中間層の不安は、そのままでは市場にならない。しかし、敵と物語を与えられると、投票・視聴・購買・拡散へ変換される。",
            ]}
          />
        </div>

        <PainCoreQuote en="Middle-class anxiety is not, by itself, a market. But given an enemy and a story, it converts into votes, views, purchases and shares.">
          中間層の不安は、そのままでは市場にならない。しかし、敵と物語を与えられると、投票・視聴・購買・拡散へ変換される。
        </PainCoreQuote>

        <section className="mt-6 border border-border bg-bg-raised px-5 py-6">
          <p className="label">Signal summary</p>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {grievanceSignalSummary.map((field) => (
              <div key={field.label}>
                <dt className="label">{field.label}</dt>
                <dd className="mt-1 text-sm text-text-soft">{field.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mt-14 space-y-14">
          <PainSection
            index="01."
            title="From Pain to Market"
            titleJa="苦痛が市場化される流れ"
          >
            <VerticalFlow steps={painToMarketFlow} />
          </PainSection>

          <PainSection
            index="02."
            title="What Is Being Monetized?"
            titleJa="市場化されるもの"
          >
            <p className="label">Emotions · 感情</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {monetizedEmotions.map((e) => (
                <li key={e.ja} className="filter-chip text-[0.72rem]">
                  {e.ja}
                  <span className="text-text-faint/70"> · {e.en}</span>
                </li>
              ))}
            </ul>
            <p className="label mt-6">Formats · 商品化される形式</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {monetizedFormats.map((f) => (
                <li key={f} className="filter-chip text-[0.72rem]">
                  {f}
                </li>
              ))}
            </ul>
          </PainSection>

          <PainSection index="03." title="Market Actors" titleJa="市場の主体">
            <div className="grid gap-3 sm:grid-cols-2">
              {marketActors.map((actor) => (
                <div
                  key={actor.en}
                  className="border border-border-soft bg-bg-raised px-4 py-3"
                >
                  <p className="text-sm font-medium text-text">{actor.ja}</p>
                  <p className="text-[0.7rem] tracking-wide text-text-faint">
                    {actor.en}
                  </p>
                  <p className="jp-serif mt-1.5 text-xs text-text-soft">
                    {actor.role}
                  </p>
                </div>
              ))}
            </div>
            <p className="jp-serif mt-5 text-sm text-text-faint">
              各主体が、必ずしも意図的に分断を作っているとは限らない。しかし、エンゲージメント構造が怒りを増幅することは、観測対象とする。
            </p>
          </PainSection>

          <PainSection
            index="04."
            title="Why the Middle Class Matters"
            titleJa="なぜ中間層か"
          >
            <p className="jp-body text-[0.95rem]">
              中間層は、統計上は弱者に見えなくても、次のものを失いつつある。
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {middleClassLosses.map((l) => (
                <li
                  key={l.ja}
                  className="border border-border-soft px-4 py-3 text-sm text-text-soft"
                >
                  {l.ja}
                  <span className="ml-2 text-[0.7rem] text-text-faint">
                    {l.en}
                  </span>
                </li>
              ))}
            </ul>
            <p className="jp-serif mt-5 text-sm text-text-faint">
              この「地位喪失感」は、絶対的貧困とは異なる政治的エネルギーになる。統計上の弱者でなくても、喪失は動員される。
            </p>
          </PainSection>

          <PainSection
            index="05."
            title="Signals to Watch"
            titleJa="観測すべき指標"
          >
            <div className="mt-2">
              <PainSignalList signals={signalsToWatch} showCause={false} />
            </div>
          </PainSection>

          <PainSection
            index="06."
            title="Business Implications"
            titleJa="企業への示唆"
          >
            <ul className="space-y-2">
              {businessImplications.map((b) => (
                <li
                  key={b.ja}
                  className="border-l border-accent bg-accent-soft px-4 py-3"
                >
                  <p className="text-sm text-text">{b.ja}</p>
                  <p className="mt-0.5 text-[0.72rem] text-text-faint">{b.en}</p>
                </li>
              ))}
            </ul>
          </PainSection>

          <PainSection
            index="07."
            title="Opportunity and Risk"
            titleJa="機会とリスク"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-border-soft bg-bg-raised px-5 py-5">
                <p className="label">Opportunity · 機会</p>
                <ul className="mt-3 space-y-1.5">
                  {grievanceOpportunities.map((o) => (
                    <li key={o.ja} className="text-sm text-text-soft">
                      {o.ja}
                      <span className="ml-2 text-[0.68rem] text-text-faint">
                        {o.en}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-border px-5 py-5">
                <p className="label">Risk · リスク</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {grievanceRisks.map((r) => (
                    <li key={r} className="filter-chip text-[0.72rem]">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </PainSection>

          <PainSection
            index="08."
            title="Strategic Question"
            titleJa="戦略的問い"
          >
            <PainCoreQuote en="Can companies and governments design not only who receives support, but why those who don't receive it come to feel hostility?">
              企業や行政は、支援対象を増やすだけでなく、支援されない人がなぜ敵意を抱くのかまで設計できるか。
            </PainCoreQuote>
          </PainSection>
        </div>

        <PainCrossLinks from="market-signals" />
      </article>
    </>
  );
}
