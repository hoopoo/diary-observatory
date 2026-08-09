import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { Timeline } from "@/components/Timeline";
import { FoodRecordPanel } from "@/components/writers/FoodRecordPanel";
import { HayashiTextPortrait } from "@/components/writers/HayashiTextPortrait";
import { HorokiVersionPanel } from "@/components/writers/HorokiVersionPanel";
import { HousingTimeline } from "@/components/writers/HousingTimeline";
import { LivedRecordedPublishedRevised } from "@/components/writers/LivedRecordedPublishedRevised";
import { MarketableLifeStory } from "@/components/writers/MarketableLifeStory";
import { MovementReasonPanel } from "@/components/writers/MovementReasonPanel";
import { SurvivingHousePanel } from "@/components/writers/SurvivingHousePanel";
import { WomenWorkPanel } from "@/components/writers/WomenWorkPanel";
import { WorkingDayPanel } from "@/components/writers/WorkingDayPanel";
import { WriterAxisCards } from "@/components/writers/WriterAxisCards";
import { WriterBreadcrumb } from "@/components/writers/WriterBreadcrumb";
import { WriterDiaryWorkCard } from "@/components/writers/WriterDiaryWorkCard";
import { WriterRelatedWriters } from "@/components/writers/WriterRelatedWriters";
import { WriterResearchQueue } from "@/components/writers/WriterResearchQueue";
import {
  HAYASHI_SLUG,
  bodyCausalLayers,
  fourUrbanLives,
  hayashiAxes,
  hayashiBukowskiCompare,
  hayashiKafuCompare,
  hayashiLead,
  hayashiOverview,
  hayashiRecordCards,
  hayashiRelatedPages,
  hayashiRelatedWriters,
  hayashiResearchQueue,
  hayashiSources,
  hayashiTimeline,
  placesBeforeTokyo,
  primaryRecord,
  publishingFlow,
  selectedRecord,
  textEditionPolicy,
  tokyoCategories,
  whyHayashi,
  writingBodyItems,
} from "@/data/writers/fumiko-hayashi";
import type { Writer } from "@/lib/types";

export function HayashiObservatory({
  writer,
  activeAxis,
}: {
  writer: Writer;
  activeAxis?: string;
}) {
  const years = `${writer.birthYear}–${writer.deathYear}`;
  const areas = writer.areas ?? [];
  const activeAxisMeta = hayashiAxes.find((a) => a.id === activeAxis);

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <WriterBreadcrumb name={writer.name} nameJa={writer.nameJa} />

      <header className="mt-8 grid gap-8 border-b border-border pb-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="label">Writer Observatory</p>
          <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
            {writer.name}
          </h1>
          <p className="jp-heading mt-3 text-2xl md:text-3xl">{writer.nameJa}</p>
          <p className="mt-4 text-sm text-text-faint">
            {years} · {writer.primaryCity ?? writer.city}, {writer.country}
          </p>
          <p className="mt-2 text-xs tracking-wide text-text-faint">
            Related places: {areas.join(" / ")}
          </p>
          <p className="mt-1 text-[0.7rem] text-text-faint">
            Birthplace: Bibliographic verification needed · descriptions vary by
            source.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {writer.themes.map((theme) => (
              <span
                key={theme}
                className="border border-border px-2.5 py-1 text-xs text-text-soft"
              >
                {theme}
              </span>
            ))}
          </div>

          <p className="editorial mt-8 text-xl text-accent md:text-2xl">
            {writer.tagline}
          </p>
          <p className="jp-serif mt-2 text-base text-text-soft">
            {writer.taglineJa}
          </p>

          <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
            {hayashiLead.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
            <div>
              <dt className="label">Born</dt>
              <dd className="mt-1 text-text-soft">{writer.birthYear}</dd>
            </div>
            <div>
              <dt className="label">Died</dt>
              <dd className="mt-1 text-text-soft">{writer.deathYear}</dd>
            </div>
            <div>
              <dt className="label">Country</dt>
              <dd className="mt-1 text-text-soft">{writer.country}</dd>
            </div>
            <div>
              <dt className="label">Primary language</dt>
              <dd className="mt-1 text-text-soft">Japanese</dd>
            </div>
            <div>
              <dt className="label">Primary city</dt>
              <dd className="mt-1 text-text-soft">
                {writer.primaryCity ?? writer.city}
              </dd>
            </div>
            <div>
              <dt className="label">Observation status</dt>
              <dd className="mt-1 text-text-soft">
                {writer.observationStatus ?? "Active"}
              </dd>
            </div>
            <div>
              <dt className="label">Verification status</dt>
              <dd className="mt-1 text-text-soft">Partial</dd>
            </div>
            <div>
              <dt className="label">Last updated</dt>
              <dd className="mt-1 text-text-soft">
                {writer.lastUpdated ?? "2026-08-02"}
              </dd>
            </div>
          </dl>
        </div>
        <HayashiTextPortrait years={years} />
      </header>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">{whyHayashi.title}</h2>
        <p className="jp-serif mt-2 text-sm text-accent">{whyHayashi.titleJa}</p>
        <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
          {whyHayashi.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">{hayashiOverview.title}</h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {hayashiOverview.titleJa}
        </p>
        <ul className="mt-8 max-w-2xl space-y-5">
          {hayashiOverview.layers.map((layer) => (
            <li key={layer.text}>
              <EpistemicLabel kind={layer.kind} />
              <p className="jp-body mt-2 text-[0.98rem] text-text-soft">
                {layer.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section id="records" className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">{primaryRecord.title}</h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {primaryRecord.titleJa}
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {hayashiRecordCards.map((work) => (
            <WriterDiaryWorkCard key={work.title} work={work} />
          ))}
        </div>
        <dl className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
          {primaryRecord.meta.map((row) => (
            <div key={row.label} className="border border-border-soft px-4 py-3">
              <dt className="label">{row.label}</dt>
              <dd className="mt-1 text-text-soft">{row.value}</dd>
            </div>
          ))}
        </dl>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-[0.98rem]">
          {primaryRecord.notes.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-4 text-xs text-text-faint">
          sourceForm: {primaryRecord.sourceForm} · {primaryRecord.sourceFormJa}
        </p>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <HorokiVersionPanel />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <LivedRecordedPublishedRevised />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Timeline</h2>
        <p className="jp-serif mt-2 text-sm text-accent">年表</p>
        <p className="mt-3 max-w-2xl text-xs text-text-faint">
          確認済みの大きな区切りのみ。戦争期の活動は出典後に個別実装する。
        </p>
        <div className="mt-8">
          <Timeline items={hayashiTimeline} />
        </div>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          The axes of Fumiko Hayashi’s life
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          林芙美子を読む軸
        </p>
        <div className="mt-8">
          <WriterAxisCards
            writerSlug={HAYASHI_SLUG}
            axes={hayashiAxes}
            activeAxis={activeAxis}
          />
        </div>
        {activeAxisMeta && (
          <div className="mt-6 border border-border-soft px-4 py-4">
            <p className="label">Active axis · {activeAxisMeta.label}</p>
            <p className="jp-serif mt-1 text-sm text-text-soft">
              {activeAxisMeta.labelJa}
            </p>
            <p className="mt-2 text-xs text-text-faint">
              Structure ready for filtered records — dated entries not yet
              indexed.
            </p>
            <Link
              href={`/writers/${HAYASHI_SLUG}`}
              className="focus-ring mt-3 inline-block text-xs underline-offset-4 hover:underline"
            >
              Clear filter
            </Link>
          </div>
        )}
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          Before literature became work
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          文学が仕事になる前
        </p>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-[0.98rem]">
          <p>
            林芙美子は、最初から執筆収入で暮らしていたわけではない。生活費を得るために働く。仕事を変える。部屋を変える。空いた時間に書く。投稿する。掲載を待つ。
          </p>
          <p>
            この時期を、成功前の苦労話として短くまとめない。賃金労働、家事、移動、食事、恋愛、執筆が一日の中でどう重なっていたかを観測する。
          </p>
        </div>
        <WorkingDayPanel />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          Work seen through a woman’s day
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          女性の一日から見える労働
        </p>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-[0.98rem]">
          <p>
            男性作家の生活では、家事を誰が担っていたかが記録から消えることがある。林芙美子の場合、賃金を得る仕事と、生活を維持する仕事を同じ一日の中で観測できる可能性がある。
          </p>
          <p>
            ただし、「女性だから家事をした」と一般化して補完しない。記録された行動と、当時の社会的文脈を分ける。
          </p>
        </div>
        <WomenWorkPanel />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          Hunger is not a literary metaphor
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          空腹は、文学的比喩ではない
        </p>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-[0.98rem]">
          <p>
            『放浪記』を読むとき、空腹や食事を、貧困文学の雰囲気としてだけ扱わない。食べることは、身体と金銭と時間が交差する場所である。
          </p>
        </div>
        <FoodRecordPanel />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">A literature of rooms</h2>
        <p className="jp-serif mt-2 text-sm text-accent">部屋の文学</p>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-[0.98rem]">
          <p>
            移動の多い生活では、住居は背景ではない。家賃、広さ、暖房、台所、同居人、大家、仕事場までの距離、原稿を書けるか、眠れるか——住所が変われば、一日の動線も変わる。
          </p>
        </div>
        <HousingTimeline />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Fumiko’s Tokyo</h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          林芙美子が働いた東京
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {tokyoCategories.map((c) => (
            <li
              key={c.id}
              className="border border-border px-2.5 py-1 text-xs text-text-faint"
            >
              {c.label} · {c.labelJa}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-text-soft">
          Workplace in Tokyo — Specific entity not yet verified.
        </p>
        <p className="mt-2 text-sm text-text-faint">
          東京を、成功した作家の文化都市だけでなく、家賃と仕事を探す都市として表示する。
        </p>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Places before Tokyo</h2>
        <p className="jp-serif mt-2 text-sm text-accent">東京以前の場所</p>
        <ul className="mt-6 space-y-3">
          {placesBeforeTokyo.map((p) => (
            <li key={p.id} className="border border-border px-4 py-3 text-sm">
              <p className="editorial text-lg text-text">{p.label}</p>
              <p className="jp-serif mt-1 text-text-soft">{p.labelJa}</p>
              <p className="mt-2 text-xs text-text-faint">{p.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-text-faint">
          出生地・幼少期経路に資料差がある場合は Source disagreement
          として並列表記できる構造を残す。
        </p>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          When private notes became a public book
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          私的記録が公的な本になるとき
        </p>
        <ol className="mt-6 space-y-1">
          {publishingFlow.map((step, i) => (
            <li key={step.id} className="text-sm text-text-soft">
              <span className="block text-[0.65rem] tracking-wide text-text-faint">
                {step.label}
              </span>
              {step.labelJa}
              {i < publishingFlow.length - 1 ? (
                <span className="mt-1 block text-text-faint">↓</span>
              ) : null}
            </li>
          ))}
        </ol>
        <p className="jp-body mt-6 max-w-2xl text-[0.98rem] text-text-soft">
          『放浪記』の刊行は、生活記録がそのまま本になった出来事ではない。選ばれ、並べ替えられ、削られ、書き直され、題名と出版形態を与えられた。
        </p>
        <MarketableLifeStory />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <SurvivingHousePanel />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          Travel is not always freedom
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          旅は、いつも自由ではない
        </p>
        <p className="jp-body mt-6 max-w-2xl text-[0.98rem] text-text-soft">
          生活のための移動、作家としての旅行、取材、戦争期の移動を、「放浪」や「旅好き」という一つの言葉でまとめない。
        </p>
        <MovementReasonPanel />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          A body carrying too much work
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          多すぎる仕事を運ぶ身体
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {writingBodyItems.map((item) => (
            <li
              key={item.id}
              className="border border-border px-3 py-2 text-sm text-text-soft"
            >
              <span className="block text-[0.65rem] text-text-faint">
                {item.label}
              </span>
              {item.labelJa}
            </li>
          ))}
        </ul>
        <ul className="mt-6 space-y-2">
          {bodyCausalLayers.map((layer) => (
            <li
              key={layer.id}
              className="border border-border-soft px-3 py-2 text-sm text-text-soft"
            >
              <span className="text-[0.65rem] text-text-faint">
                {layer.label}
              </span>
              <span className="ml-2">{layer.labelJa}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-text-faint">
          死因を単純に「過労死」と断定しない。医学的事実と仕事量の観察を分離する。
        </p>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">{fourUrbanLives.title}</h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {fourUrbanLives.titleJa}
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {fourUrbanLives.profiles.map((profile) => (
            <article
              key={profile.name}
              className="border border-border px-4 py-4"
            >
              <p className="label">{profile.name}</p>
              <p className="mt-2 text-sm text-text-soft">
                Primary weight: {profile.weight}
                {"weightJa" in profile && profile.weightJa
                  ? ` · ${profile.weightJa}`
                  : ""}
              </p>
              <ul className="mt-3 space-y-1 text-sm text-text-faint">
                {profile.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm text-text-faint">
          Three Urban Diarists の名称・内容は変更しない。{" "}
          <Link
            href={fourUrbanLives.comingHref}
            className="focus-ring text-accent underline-offset-4 hover:underline"
          >
            Four Urban Lives
          </Link>{" "}
          として公開。
        </p>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          {hayashiBukowskiCompare.title}
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {hayashiBukowskiCompare.titleJa}
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <div className="border border-border px-4 py-4">
            <p className="label">Shared</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {hayashiBukowskiCompare.shared.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border px-4 py-4">
            <p className="label">Hayashi</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {hayashiBukowskiCompare.hayashi.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border px-4 py-4">
            <p className="label">Bukowski</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {hayashiBukowskiCompare.bukowski.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 inline-flex border border-border px-3 py-1.5 text-xs text-text-faint">
          Coming comparison · {hayashiBukowskiCompare.comingHref}
        </p>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          {hayashiKafuCompare.title}
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {hayashiKafuCompare.titleJa}
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <div className="border border-border px-4 py-4">
            <p className="label">Kafū</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {hayashiKafuCompare.kafu.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border px-4 py-4">
            <p className="label">Hayashi</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {hayashiKafuCompare.hayashi.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 inline-flex border border-border px-3 py-1.5 text-xs text-text-faint">
          Coming comparison · {hayashiKafuCompare.comingHref}
        </p>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Selected record</h2>
        <p className="jp-serif mt-2 text-sm text-accent">選ばれた記録</p>
        <p className="mt-6 text-sm text-text-soft">{selectedRecord.emptyEn}</p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          {selectedRecord.emptyJa}
        </p>
        <p className="mt-6 label">Primary research target</p>
        <p className="mt-2 text-sm text-text-soft">
          {selectedRecord.researchTargetEn}
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          {selectedRecord.researchTargetJa}
        </p>
        <ul className="mt-4 space-y-1 text-sm text-text-faint">
          {selectedRecord.conditions.map((c) => (
            <li key={c}>· {c}</li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <WriterResearchQueue items={hayashiResearchQueue} />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          {textEditionPolicy.title}
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {textEditionPolicy.titleJa}
        </p>
        <ul className="mt-6 space-y-2 text-sm text-text-soft">
          {textEditionPolicy.rules.map((r) => (
            <li key={r}>· {r}</li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Related writers</h2>
        <div className="mt-8">
          <WriterRelatedWriters items={hayashiRelatedWriters} />
        </div>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Related pages</h2>
        <ul className="mt-6 space-y-2 text-sm text-text-soft">
          {hayashiRelatedPages.map((page) => (
            <li key={`${page.group}-${page.title}`}>
              <span className="text-text-faint">{page.group}: </span>
              {page.href.startsWith("/compare/hayashi") ||
              page.href.startsWith("/compare/kafu-hayashi") ||
              page.href === "/compare/hayashi-roppa" ? (
                <span>
                  {page.title}{" "}
                  <span className="text-xs text-text-faint">(Coming)</span>
                </span>
              ) : (
                <Link
                  href={page.href}
                  className="focus-ring underline-offset-4 hover:underline"
                >
                  {page.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="editorial text-3xl text-text">Sources</h2>
        <p className="jp-serif mt-2 text-sm text-accent">出典</p>
        <p className="mt-3 max-w-2xl text-xs text-text-faint">
          Wikipediaだけを根拠にしない。架空URLを作らない。公式・書誌・版研究を優先する。
        </p>
        <div className="mt-8">
          <CategorizedSourceList sources={hayashiSources} />
        </div>
      </section>
    </div>
  );
}
