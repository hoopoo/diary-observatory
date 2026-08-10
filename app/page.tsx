import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedComparisonCard } from "@/components/FeaturedComparisonCard";
import { FeaturedEssayCard } from "@/components/FeaturedEssayCard";
import { Hero } from "@/components/Hero";
import { LatestObservationCard } from "@/components/LatestObservationCard";
import { ObservationAxes } from "@/components/ObservationAxes";
import { ObservationCard } from "@/components/ObservationCard";
import { PainNetworkCard } from "@/components/pain/PainNetworkCard";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SameDayComparison } from "@/components/SameDayComparison";
import { SectionHeading } from "@/components/SectionHeading";
import { SurvivalSummary } from "@/components/SurvivalSummary";
import { WriterCard } from "@/components/WriterCard";
import {
  PrimaryConditionsGrid,
  WriterConditionsRow,
} from "@/components/WriterConditionsRow";
import {
  comparisons,
  futureWriters,
  getFeaturedObservation,
  getSampleSurvival,
  observationAxes,
  writers,
} from "@/data/index";
import { PAIN_NETWORK_LIST } from "@/lib/pain";
import { websiteJsonLd } from "@/lib/schema";
import {
  CORE_METHOD,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SUBTITLE,
} from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} — ${SITE_SUBTITLE}` },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} — ${SITE_SUBTITLE}`,
    description: SITE_DESCRIPTION,
  },
};

export default function HomePage() {
  const featured = getFeaturedObservation();
  const survival = getSampleSurvival();
  const jsonLd = websiteJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />

      <div className="mx-auto w-full max-w-6xl space-y-20 px-5 py-16 md:space-y-28 md:px-8 md:py-24">
        <section>
          <SectionHeading
            eyebrow="Featured Observation"
            title="最初の観測記事"
            titleJa="日記に残る東京を、現在と照合する"
          />
          <div className="mt-8">
            <ObservationCard observation={featured} featured />
          </div>
        </section>

        <section>
          <FeaturedComparisonCard
            title="Four Urban Lives"
            subtitle="Kafū / Nishimura / Bukowski / Hayashi"
            description="Weather, media, labor, and the work of maintaining life."
            href="/compare/four-urban-lives"
            cta="Open comparison"
          />
        </section>

        <section>
          <FeaturedComparisonCard
            title="Three Urban Diarists"
            subtitle="Kafū / Nishimura / Bukowski"
            description="Three cities, three speeds of life."
            href="/compare/urban-diarists"
            cta="Open comparison"
          />
        </section>

        <section>
          <FeaturedEssayCard
            title="Three Cities, Three Speeds of Life"
            subtitle="荷風・西村・ブコウスキーの日記から"
            href="/observations/three-cities-three-speeds"
            cta="Read observation"
          />
        </section>

        <section>
          <LatestObservationCard
            title="WHAT DID DIARISTS DO FOR WORK?"
            subtitle="日記を書く人は、何を仕事としていたのか — 創作の外側にある、給与、家計、行政、出版、上演"
            href="/observations/what-did-diarists-do-for-work"
            cta="Read observation"
          />
        </section>

        <section>
          <LatestObservationCard
            title="一日は、誰のものなのか"
            subtitle="会社、家族、身体、創作に分割される24時間"
            href="/observations/who-owns-the-day"
            cta="Read observation"
          />
        </section>

        <section>
          <LatestObservationCard
            title="SNSは日記なのか"
            subtitle="「今日あったことを書く」だけでは、日記にならない"
            href="/observations/is-social-media-a-diary"
            cta="Read observation"
          />
        </section>

        <section>
          <LatestObservationCard
            title="スクリーンショットだけが残る"
            subtitle="「見た証拠」と「辿れる証拠」は同じではない"
            href="/observations/screenshot-is-not-provenance"
            cta="Read observation"
          />
        </section>

        <section>
          <LatestObservationCard
            title="リンク切れもまた資料史である"
            subtitle="Webは「残る」のではなく、消え方まで記録される"
            href="/observations/link-rot-is-archive-history"
            cta="Read observation"
          />
        </section>

        <section>
          <LatestObservationCard
            title="資料が多いほど、事実は単純になるのか"
            subtitle="日記、私小説、テレビ、Web、SNS、AI時代のProvenance"
            href="/observations/more-sources-less-certainty"
            cta="Read observation"
          />
        </section>

        <section>
          <LatestObservationCard
            title="楽屋は、歴史に映らない"
            subtitle="完成した舞台の外側にある、待機、食事、疲労、失敗"
            href="/observations/backstage-is-not-recorded"
            cta="Read observation"
          />
        </section>

        <section>
          <LatestObservationCard
            title="生活維持は、文学の背景ではない"
            subtitle="四人の作家の日記から読む、書く前の仕事"
            href="/observations/maintenance-is-not-background"
            cta="Read observation"
          />
        </section>

        <section>
          <LatestObservationCard
            title="残った家、消えた部屋"
            subtitle="林芙美子の住居から読む、作家の生活と保存"
            href="/observations/the-house-that-remained"
            cta="Read observation"
          />
        </section>

        <section>
          <LatestObservationCard
            title="選ばれなかった原稿"
            subtitle="不採用、返送、沈黙、公開されなかった文章"
            href="/observations/the-manuscripts-that-were-not-chosen"
            cta="Read observation"
          />
        </section>

        <section>
          <SectionHeading
            eyebrow="Writers"
            title="Writers"
            titleJa="書き手たち"
            description="Nine lives, nine structures of an ordinary day."
            descriptionJa="九人の生活から、「普通の一日」の異なる構造を見る。"
          />
          <div className="mt-6">
            <WriterConditionsRow />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {writers.map((writer) => (
              <WriterCard key={writer.id} writer={writer} />
            ))}
          </div>
          <div className="mt-8">
            <PrimaryConditionsGrid />
          </div>
          <p className="mt-6 text-sm text-text-faint">
            Primary diary hub:{" "}
            <Link
              href="/diaries/dancho-tei-nichijo"
              className="focus-ring text-text-soft underline-offset-4 hover:underline"
            >
              断腸亭日乗 / Danchōtei Nichijō
            </Link>
            {" · "}
            <Link
              href="/diaries"
              className="focus-ring text-text-soft underline-offset-4 hover:underline"
            >
              All diaries
            </Link>
          </p>
          <div className="mt-8 border border-border-soft px-5 py-4">
            <p className="label">Future subjects / research candidates</p>
            <p className="mt-3 text-sm leading-relaxed text-text-faint">
              {futureWriters.join(" · ")}
            </p>
            <p className="mt-2 text-xs text-text-faint">
              Public Writer cards are not created for research candidates.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Diary Works"
            title="Diary Works"
            titleJa="日記・日記的作品の観測入口"
            description="Raw diaries and diary-derived works are kept distinct."
            descriptionJa="日記と、日記的素材から構成された作品を区別する。"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/diaries/dancho-tei-nichijo"
              className="focus-ring group paper-panel flex h-full flex-col gap-3 p-6 transition-colors hover:border-text-faint"
            >
              <p className="label">Diary</p>
              <h3 className="editorial text-xl text-text group-hover:opacity-80">
                Danchōtei Nichijō
              </h3>
              <p className="jp-serif text-sm text-accent">断腸亭日乗</p>
              <p className="text-xs text-text-faint">Kafū Nagai / 永井荷風</p>
              <p className="mt-auto text-sm text-text-soft">
                A long private diary indexed as lived daily record — weather,
                walks, body, wartime Tokyo.
              </p>
            </Link>
            <Link
              href="/diaries/horoki"
              className="focus-ring group paper-panel flex h-full flex-col gap-3 p-6 transition-colors hover:border-text-faint"
            >
              <p className="label">Diary-derived autobiographical work</p>
              <h3 className="editorial text-xl text-text group-hover:opacity-80">
                Hōrōki
              </h3>
              <p className="jp-serif text-sm text-accent">放浪記</p>
              <p className="text-xs text-text-faint">
                Fumiko Hayashi / 林芙美子
              </p>
              <p className="mt-2 text-sm text-text-soft">
                A lived life transformed through serialization, publication, and
                revision.
              </p>
              <p className="jp-serif text-sm text-text-faint">
                生きた生活が、連載、刊行、改訂を経て作品へ変わる。
              </p>
            </Link>
            <Link
              href="/diaries/furukawa-roppa-showa-diary"
              className="focus-ring group paper-panel flex h-full flex-col gap-3 p-6 transition-colors hover:border-text-faint"
            >
              <p className="label">Long-term diary</p>
              <h3 className="editorial text-xl text-text group-hover:opacity-80">
                Furukawa Roppa Shōwa Diary
              </h3>
              <p className="jp-serif text-sm text-accent">古川ロッパ昭和日記</p>
              <p className="text-xs text-text-faint">
                Roppa Furukawa / 古川ロッパ
              </p>
              <p className="mt-2 text-sm text-text-soft">
                A performer’s body and profession crossing prewar, war, postwar,
                and late Shōwa life.
              </p>
              <p className="jp-serif text-sm text-text-faint">
                一人の演者の身体と職業が、戦前、戦争、戦後、晩年を通過する長期日記。
              </p>
            </Link>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Featured Entity"
            title="Featured Entity"
            titleJa="観測対象の場所"
            description="Surviving architecture and disappearing everyday places."
            descriptionJa="残る建築と、消えやすい日常の場所を並置する。"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Link
              href="/entities/hayashi-fumiko-memorial-hall"
              className="focus-ring group paper-panel flex h-full flex-col gap-3 p-6 transition-colors hover:border-text-faint"
            >
              <p className="label">Residence / museum / archive</p>
              <h3 className="editorial text-xl text-text group-hover:opacity-80">
                Hayashi Fumiko Memorial Hall
              </h3>
              <p className="jp-serif text-sm text-accent">林芙美子記念館</p>
              <p className="mt-2 text-sm text-text-soft">
                The house that remained after many temporary rooms disappeared.
              </p>
              <p className="jp-serif text-sm text-text-faint">
                多くの一時的な部屋が消えたあとに、残った家。
              </p>
            </Link>
            <Link
              href="/entities/tomaru-shoten"
              className="focus-ring group paper-panel flex h-full flex-col gap-3 p-6 transition-colors hover:border-text-faint"
            >
              <p className="label">Bookstore</p>
              <h3 className="editorial text-xl text-text group-hover:opacity-80">
                Tomaru Shoten
              </h3>
              <p className="jp-serif text-sm text-accent">都丸書店</p>
              <p className="mt-2 text-sm text-text-soft">
                An everyday used bookstore route — survival status stays
                source-bound.
              </p>
              <p className="jp-serif text-sm text-text-faint">
                日常の古書店動線。現況は出典確認なしに断定しない。
              </p>
            </Link>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Observation Axes"
            title="観測の軸"
            titleJa="日記の世界を現在へ開くための問い"
          />
          <div className="mt-8">
            <ObservationAxes axes={observationAxes} />
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Same Day, Different Lives"
            title="Same Day"
            titleJa="同じ日付を、複数の日記で比較する"
            description="一件しかない日も、未完成のまま公開する。"
          />
          <div className="mt-8">
            <SameDayComparison items={comparisons} />
          </div>
          <div className="mt-6">
            <Link
              href="/same-day"
              className="focus-ring text-sm text-accent underline-offset-4 hover:underline"
            >
              Open Same Day page
            </Link>
          </div>
        </section>

        <section>
          <SurvivalSummary data={survival} />
        </section>

        <section>
          <SectionHeading
            eyebrow="Observation Network"
            title="The Competition of Pain"
            titleJa="痛みの競争 — 三つの観測レイヤー"
            description="A cross-page network on how a society sorts whose pain is real, instead of reducing pain itself."
            descriptionJa="社会全体の苦痛が増えているのに、苦痛を減らすのではなく、誰の苦痛が本物かを競う構造を、三つのレイヤーで観測する。"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {PAIN_NETWORK_LIST.map((node) => (
              <PainNetworkCard key={node.key} node={node} />
            ))}
          </div>
        </section>

        <section className="paper-panel max-w-3xl space-y-6 p-7 md:p-10">
          <p className="label">About</p>
          <h2 className="editorial text-3xl text-text">About</h2>
          <div className="jp-body space-y-4 text-[0.95rem]">
            <p>日記は、未来のために書かれた歴史資料ではない。</p>
            <p>だからこそ、整理される前の生活が残る。</p>
            <p>
              歯痛。雨。酒。古書店。編集者からの電話。テレビの収録。閉店した店。亡くなった友人。
            </p>
            <p>
              Diary Observatoryは、AIを物語生成に使うのではなく、実際に生きられた一日を索引化し、現在と接続するために使う。
            </p>
          </div>
          <QuoteBlock en={CORE_METHOD.en} ja={CORE_METHOD.ja} />
          <Link
            href="/about"
            className="focus-ring inline-block text-sm text-accent underline-offset-4 hover:underline"
          >
            Read the full about page
          </Link>
        </section>
      </div>
    </>
  );
}
