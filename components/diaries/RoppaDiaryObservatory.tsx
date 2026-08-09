import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { ConceptBlock } from "@/components/ConceptBlock";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { ConceptQuote } from "@/components/observations/ConceptQuote";
import { FactObservationInterpretationBlock } from "@/components/observations/FactObservationInterpretationBlock";
import { FoodProvisionPanel } from "@/components/observations/MaintenanceObservationPanels";
import { DiaryBreadcrumb } from "@/components/diaries/DiaryBreadcrumb";
import { WriterResearchQueue } from "@/components/writers/WriterResearchQueue";
import { getDiaryWorkBibliographySummary } from "@/data/research/furukawa-roppa-bibliography";
import {
  agingAcrossMedia,
  airRaidObservations,
  audienceForms,
  bodyCategories,
  bodyPerformanceRelations,
  companyMaintenanceTargets,
  densityCell,
  densityPeriods,
  densityRows,
  diaryRelatedComparisons,
  diaryRelatedObservations,
  entertainmentMoneyCategories,
  entityCurrentStatuses,
  firstEntryTarget,
  foodAcrossPeriods,
  foodProvisionTypes,
  furukawaRoppaShowaDiary,
  historicalPressures,
  performanceDayPeriodDiffs,
  popularityIndicators,
  postwarTransition,
  publicPersonaPrivateBody,
  roppaDiaryAudienceRecords,
  roppaDiaryBodyRecords,
  roppaDiaryFoodRecordIds,
  roppaDiaryKinds,
  roppaDiaryLead,
  roppaDiaryMoneyRecords,
  roppaDiaryPerformanceRecords,
  roppaDiaryPopularityRecords,
  roppaDiaryResearchQueue,
  roppaDiarySources,
  roppaDiaryTimelineRecords,
  roppaDiaryWaitingRecords,
  roppaDiaryWartimeContextRecords,
  roppaVolumeRecords,
  substitutionOutcomes,
  theaterEntityTypes,
  timelineFilterOptions,
  volumeComparisonCategories,
  waitingTypes,
  wartimeCategories,
} from "@/data/diaries/furukawa-roppa-showa-diary";
import { performanceDayModel } from "@/data/writers/furukawa-roppa";
import type { DiaryWork, Writer } from "@/lib/types";

function FlowSteps({
  steps,
}: {
  steps: Array<{ label: string; labelJa?: string }>;
}) {
  return (
    <ol className="mt-6 flex flex-col">
      {steps.map((step, i) => (
        <li key={step.label} className="flex flex-col items-start">
          <span className="border border-border px-3 py-2 text-sm text-text-soft">
            <span className="block">{step.label}</span>
            {step.labelJa && (
              <span className="jp-serif mt-0.5 block text-xs text-text-faint">
                {step.labelJa}
              </span>
            )}
          </span>
          {i < steps.length - 1 && (
            <span className="px-3 py-1 text-xs text-accent" aria-hidden>
              ↓
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

function EmptyIndexed({
  en,
  ja,
}: {
  en: string;
  ja: string;
}) {
  return (
    <div className="mt-6 border border-dashed border-border px-4 py-5">
      <p className="text-sm text-text-soft">{en}</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">{ja}</p>
    </div>
  );
}

export function RoppaDiaryObservatory({
  diary,
  writer,
}: {
  diary: DiaryWork;
  writer?: Writer;
}) {
  const years =
    diary.endYear != null
      ? `${diary.startYear}–${diary.endYear}`
      : `${diary.startYear}–`;

  const volumeCounts = roppaVolumeRecords.map((vol) => ({
    volume: vol,
    counts: Object.fromEntries(
      volumeComparisonCategories.map((c) => [c.id, 0]),
    ),
  }));
  const bibliographySummary = getDiaryWorkBibliographySummary();

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <DiaryBreadcrumb title={diary.title} titleJa={diary.titleOriginal} />

      {/* 1. Header */}
      <header className="mt-8 border-b border-border pb-12">
        <p className="label">Long-term diary observatory</p>
        <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
          {diary.title}
        </h1>
        <p className="jp-heading mt-3 text-2xl md:text-3xl">
          {diary.titleOriginal}
        </p>
        {writer && (
          <p className="mt-4 text-sm text-text-faint">
            Writer:{" "}
            <Link
              href={`/writers/${writer.slug}`}
              className="focus-ring text-text-soft underline-offset-4 hover:underline"
            >
              {writer.name} / {writer.nameJa}
            </Link>
            {writer.canonicalNameJa && (
              <span className="mt-1 block text-xs">
                Canonical name: {writer.canonicalNameJa}
              </span>
            )}
          </p>
        )}
        <p className="mt-3 text-xs tracking-wide text-text-faint">
          Source form: Long-term diary · {years}
        </p>

        <p className="editorial mt-8 text-xl text-accent md:text-2xl">
          {diary.tagline}
        </p>
        <p className="jp-serif mt-2 text-base text-text-soft">
          {diary.taglineJa}
        </p>

        <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
          {roppaDiaryLead.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="label">Writer</dt>
            <dd className="mt-1 text-text-soft">
              {writer?.name ?? "Roppa Furukawa"}
            </dd>
          </div>
          <div>
            <dt className="label">Language</dt>
            <dd className="mt-1 text-text-soft">Japanese</dd>
          </div>
          <div>
            <dt className="label">Source form</dt>
            <dd className="mt-1 text-text-soft">long-term-diary</dd>
          </div>
          <div>
            <dt className="label">Volume structure</dt>
            <dd className="mt-1 text-text-soft">Multiple volumes</dd>
          </div>
          <div>
            <dt className="label">Primary periods</dt>
            <dd className="mt-1 text-text-soft">
              Prewar / Wartime / Postwar / Late years
            </dd>
          </div>
          <div>
            <dt className="label">Observation status</dt>
            <dd className="mt-1 text-text-soft">Active</dd>
          </div>
          <div>
            <dt className="label">Textual status</dt>
            <dd className="mt-1 text-text-soft">Edition and volume sensitive</dd>
          </div>
          <div>
            <dt className="label">Rights status</dt>
            <dd className="mt-1 text-text-soft">{diary.rightsStatus}</dd>
          </div>
          <div>
            <dt className="label">Verification status</dt>
            <dd className="mt-1 text-text-soft">Partial</dd>
          </div>
          <div>
            <dt className="label">Last updated</dt>
            <dd className="mt-1 text-text-soft">{diary.lastUpdated}</dd>
          </div>
        </dl>
      </header>

      {/* 2. What kind */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          What kind of diary is this?
        </h2>
        <p className="jp-heading mt-2 text-lg">これは、どのような日記なのか</p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {roppaDiaryKinds.map((k) => (
            <li
              key={k.label}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {k.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {k.labelJa}
              </span>
            </li>
          ))}
        </ul>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-[0.98rem]">
          <p>この日記は、一つのテーマだけでできていない。</p>
          <p>舞台を読めば、身体が現れる。</p>
          <p>身体を読めば、食事が現れる。</p>
          <p>食事を読めば、配給と金銭が現れる。</p>
          <p>観客を読めば、劇場とメディアが現れる。</p>
          <p>日記の各層は分離していない。</p>
        </div>
      </section>

      {/* 3. Volume architecture */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Four historical volumes
        </h2>
        <p className="jp-heading mt-2 text-lg">四つの時代区分</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {roppaVolumeRecords.map((vol) => (
            <article
              key={vol.id}
              id={vol.id}
              className="border border-border px-5 py-5"
            >
              <p className="label">{vol.volumeType}</p>
              <h3 className="editorial mt-2 text-xl text-text">{vol.title}</h3>
              <p className="jp-serif mt-1 text-sm text-accent">{vol.titleJa}</p>
              <dl className="mt-4 space-y-2 text-xs text-text-faint">
                <div>
                  <dt className="label">Coverage</dt>
                  <dd className="mt-1 text-text-soft">
                    {vol.coverageLabelJa ?? "Bibliographic verification needed"}
                  </dd>
                </div>
                <div>
                  <dt className="label">Covered dates (ISO)</dt>
                  <dd className="mt-1 text-text-soft">
                    {vol.coveredStartDate && vol.coveredEndDate
                      ? `${vol.coveredStartDate} – ${vol.coveredEndDate}`
                      : "Bibliographic verification needed"}
                  </dd>
                </div>
                <div>
                  <dt className="label">Publication date</dt>
                  <dd className="mt-1 text-text-soft">
                    {vol.publicationDate ?? "Bibliographic verification needed"}
                  </dd>
                </div>
                <div>
                  <dt className="label">Publisher</dt>
                  <dd className="mt-1 text-text-soft">
                    {vol.publisher ?? "Bibliographic verification needed"}
                  </dd>
                </div>
                <div>
                  <dt className="label">Editor</dt>
                  <dd className="mt-1 text-text-soft">
                    {vol.editor ?? "Bibliographic verification needed"}
                  </dd>
                </div>
                <div>
                  <dt className="label">Verification</dt>
                  <dd className="mt-1 text-text-soft">{vol.verificationStatus}</dd>
                </div>
              </dl>
              {vol.notes && (
                <p className="mt-3 text-[0.65rem] text-text-faint">{vol.notes}</p>
              )}
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/research/furukawa-roppa-bibliography"
            className="focus-ring inline-flex border border-text bg-text px-4 py-2 text-xs text-bg"
          >
            Open bibliographic research
          </Link>
          <Link
            href="/editions/furukawa-roppa-showa-diary-shobunsha-set"
            className="focus-ring inline-flex border border-border px-4 py-2 text-xs text-text-soft"
          >
            Open Edition Observatory
          </Link>
          <Link
            href="/editions"
            className="focus-ring inline-flex border border-border px-4 py-2 text-xs text-text-soft"
          >
            All editions
          </Link>
        </div>
        <dl className="mt-6 grid gap-3 text-xs text-text-faint sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="label">Known editions</dt>
            <dd className="mt-1 text-text-soft">
              {bibliographySummary.editions.length} registered
            </dd>
          </div>
          <div>
            <dt className="label">Selected base edition</dt>
            <dd className="mt-1 text-text-soft">
              {bibliographySummary.selectedBaseEditionId ?? "None"}
            </dd>
          </div>
          <div>
            <dt className="label">Rights status</dt>
            <dd className="mt-1 text-text-soft">
              {bibliographySummary.editions[0]?.rightsStatus ??
                "Edition-specific verification required"}
            </dd>
          </div>
          <div>
            <dt className="label">Bibliography research</dt>
            <dd className="mt-1 text-text-soft">
              {bibliographySummary.verificationStatus}
            </dd>
          </div>
        </dl>
      </section>

      {/* 4. Historical pressures */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          One diary, four historical pressures
        </h2>
        <p className="jp-heading mt-2 text-lg">一つの日記、四つの時代圧力</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {historicalPressures.map((p) => (
            <article key={p.id} className="border border-border px-5 py-5">
              <p className="label">{p.label}</p>
              <p className="jp-serif mt-1 text-sm text-accent">{p.labelJa}</p>
              <p className="mt-3 text-[0.65rem] tracking-wide text-text-faint">
                Primary pressures · observation candidates
              </p>
              <ul className="mt-3 space-y-1 text-sm text-text-faint">
                {p.pressures.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-text-faint">
          各 pressure は観測候補であり、個別 Fact は日記本文と研究資料から確認する。
        </p>
      </section>

      {/* 5. Longitudinal timeline */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          A life measured by performances
        </h2>
        <p className="jp-heading mt-2 text-lg">公演によって測られる人生</p>
        <p className="mt-4 text-xs tracking-wide text-text-faint">
          Filters (ready · no dated rows yet):{" "}
          {timelineFilterOptions.join(" · ")}
        </p>
        {roppaDiaryTimelineRecords.length === 0 ? (
          <EmptyIndexed
            en="No timeline records indexed yet. Multi-category overlays will attach to dated Entries after volume confirmation."
            ja="タイムライン記録は未索引。複数カテゴリの重ね表示は、篇・版確認後の日付付き Entry に接続する。"
          />
        ) : (
          <ul className="mt-6 space-y-3 md:hidden">
            {/* year cards on mobile when data exists */}
          </ul>
        )}
      </section>

      {/* 6. Recurring performance day */}
      <section className="my-14 border-b border-border pb-14">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="editorial text-2xl text-text md:text-3xl">
            The recurring performance day
          </h2>
          <EpistemicLabel kind="interpretation" />
        </div>
        <p className="jp-heading mt-2 text-lg">反復される舞台の一日</p>
        <p className="mt-4 text-xs tracking-wide text-text-faint">
          {performanceDayModel.label}
        </p>
        <FlowSteps steps={performanceDayModel.steps} />
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {performanceDayPeriodDiffs.map((d) => (
            <article key={d.id} className="border border-border px-4 py-4">
              <p className="label">{d.label}</p>
              <p className="jp-serif mt-1 text-xs text-accent">{d.labelJa}</p>
              <ul className="mt-3 space-y-1 text-sm text-text-faint">
                {d.diffs.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-text-soft">
          {performanceDayModel.noteEn}
        </p>
        <p className="jp-serif mt-1 max-w-2xl text-sm text-text-faint">
          {performanceDayModel.noteJa}
        </p>
      </section>

      {/* 7. Performance records */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Indexed performances
        </h2>
        <p className="jp-heading mt-2 text-lg">索引化された公演</p>
        <p className="mt-3 text-xs text-text-faint">
          Columns ready: Date · Production · Type · Venue · Role · Show count ·
          Rehearsal · Audience · Body · Food · Money · Period · Verification
        </p>
        {roppaDiaryPerformanceRecords.length === 0 ? (
          <EmptyIndexed
            en="No verified performance records indexed yet."
            ja="確認済みの公演記録は、まだ索引化されていません。"
          />
        ) : null}
      </section>

      {/* 8. Rehearsal */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          The audience does not see rehearsal
        </h2>
        <p className="jp-heading mt-2 text-lg">観客には、稽古が見えない</p>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-[0.98rem]">
          <p>観客が見るのは、完成した本番である。</p>
          <p>日記には、その前にあった稽古が残る。</p>
          <p>
            台本を読む。覚える。直す。待つ。他者と合わせる。失敗する。演目が変わる。体調が悪くても準備する。
          </p>
        </div>
        <EmptyIndexed
          en="No rehearsal records indexed. Duration and participants will not be invented."
          ja="稽古記録は未索引。時間や参加者を推測しない。"
        />
      </section>

      {/* 9. Waiting */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Waiting is also work
        </h2>
        <p className="jp-heading mt-2 text-lg">待つことも、仕事である</p>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-[0.98rem]">
          <p>舞台労働には、目立たない待ち時間がある。</p>
          <p>
            出番を待つ。相手を待つ。舞台転換を待つ。収録を待つ。衣装や化粧を待つ。移動を待つ。医師の判断を待つ。観客の入りを待つ。
          </p>
          <p>待っている時間にも、本人の身体は拘束されている。</p>
        </div>
        <ul className="mt-8 grid gap-2 sm:grid-cols-3">
          {waitingTypes.map((t) => (
            <li
              key={t.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {t.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {t.labelJa}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-text-faint">
          WaitingRecord indexed: {roppaDiaryWaitingRecords.length} · duration
          は不明なら埋めない
        </p>
      </section>

      {/* 10–11. Food */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          What did performance require him to eat?
        </h2>
        <p className="jp-heading mt-2 text-lg">
          舞台へ立つ身体は、何を食べたか
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {foodAcrossPeriods.map((p) => (
            <article key={p.id} className="border border-border px-4 py-4">
              <p className="label">{p.label}</p>
              <p className="jp-serif mt-1 text-xs text-accent">{p.labelJa}</p>
              <ul className="mt-3 space-y-1 text-sm text-text-faint">
                {p.categories.map((c) => (
                  <li key={c}>· {c}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-text-faint">
          上記は観測カテゴリ。具体の献立・店は本文確認後のみ。FoodRecord indexed:{" "}
          {roppaDiaryFoodRecordIds.length}
        </p>

        <h3 className="editorial mt-12 text-xl text-text">
          Who provided the meal?
        </h3>
        <p className="jp-heading mt-1 text-base">誰が、食事を用意したのか</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {foodProvisionTypes.map((t) => (
            <li
              key={t.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {t.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {t.labelJa}
              </span>
            </li>
          ))}
        </ul>
        <FoodProvisionPanel />
      </section>

      {/* 12–13. Body */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          The same body across decades
        </h2>
        <p className="jp-heading mt-2 text-lg">同じ身体を、数十年追う</p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {bodyCategories.map((c) => (
            <li
              key={c.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {c.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {c.labelJa}
              </span>
            </li>
          ))}
        </ul>
        <EmptyIndexed
          en="No body timeline rows indexed. Values appear only from verified diary or bibliography."
          ja={`身体タイムラインは未索引（${roppaDiaryBodyRecords.length}）。医学的数値は確認済みのみ。`}
        />

        <h3 className="editorial mt-12 text-xl text-text">
          Can the show continue?
        </h3>
        <p className="jp-heading mt-1 text-base">本番は、続けられるか</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {bodyPerformanceRelations.map((r) => (
            <li
              key={r.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {r.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {r.labelJa}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-2xl text-sm text-text-faint">
          体調不良と公演が同日にあっても、因果関係を自動的に断定しない。
        </p>
      </section>

      {/* 14–15. Audience */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          The audience changes with history
        </h2>
        <p className="jp-heading mt-2 text-lg">観客も、時代とともに変わる</p>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-[0.98rem]">
          <p>観客は、同じ人々ではない。</p>
          <p>
            戦前の都市観客。戦時下の観客。慰問や動員の対象。戦後の観客。ラジオの聴取者。テレビの視聴者。
          </p>
          <p>媒体が変わると、「観客」という存在も変わる。</p>
        </div>
        <EmptyIndexed
          en="No audience records indexed. Occupancy stays qualitative when counts are absent."
          ja={`観客記録は未索引（${roppaDiaryAudienceRecords.length}）。実数がなければ定性表現のみ。`}
        />

        <h3 className="editorial mt-12 text-xl text-text">
          From seats to listeners and viewers
        </h3>
        <p className="jp-heading mt-1 text-base">
          客席から、聴取者と視聴者へ
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audienceForms.map((f) => (
            <article key={f.id} className="border border-border px-4 py-4">
              <p className="editorial text-lg text-text">{f.label}</p>
              <p className="jp-serif mt-1 text-xs text-accent">{f.labelJa}</p>
              <p className="mt-3 text-[0.65rem] text-text-faint">{f.status}</p>
              <ul className="mt-2 space-y-0.5 text-[0.7rem] text-text-faint">
                {f.axes.map((a) => (
                  <li key={a}>· {a}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* 16–17. Theater network */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          The city as a network of stages
        </h2>
        <p className="jp-heading mt-2 text-lg">劇場のネットワークとしての都市</p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-3">
          {theaterEntityTypes.map((t) => (
            <li
              key={t.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {t.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {t.labelJa}
              </span>
            </li>
          ))}
        </ul>
        <EmptyIndexed
          en="No mapped theater entities. Places without verified coordinates are not placed on a map."
          ja="劇場 Entity は未登録。位置未確認の Entity を地図へ置かない。"
        />
        <h3 className="label mt-10">Current entity status vocabulary</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {entityCurrentStatuses.map((s) => (
            <li
              key={s.id}
              className="border border-border px-2.5 py-1 text-xs text-text-faint"
            >
              {s.label} / {s.labelJa}
            </li>
          ))}
        </ul>
      </section>

      {/* 18–20. Wartime */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Performance under wartime pressure
        </h2>
        <p className="jp-heading mt-2 text-lg">戦争の圧力下にある上演</p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {wartimeCategories.map((c) => (
            <li
              key={c.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {c.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {c.labelJa}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-text-faint">
          WartimeContextRecord indexed:{" "}
          {roppaDiaryWartimeContextRecords.length} · 制度文脈と個人記録を分離する
        </p>

        <ConceptBlock
          title="Comedy does not stand outside history."
          titleJa="喜劇は、歴史の外側には立てない。"
          paragraphs={[
            "笑いは、戦争と無関係な避難所ではない。",
            "何を言えるか。どこで演じられるか。誰が観客になるか。何を食べられるか。劇場へ行けるか。本人が出演できるか。",
            "喜劇もまた、制度と物資と身体の条件に従う。戦争下の上演を、希望や慰めだけで説明しない。",
          ]}
        />

        <h3 className="editorial mt-12 text-xl text-text">
          When the city can no longer guarantee a stage
        </h3>
        <p className="jp-heading mt-1 text-base">
          都市が舞台を保証できなくなるとき
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {airRaidObservations.map((o) => (
            <li
              key={o}
              className="border border-border px-2.5 py-1 text-xs text-text-faint"
            >
              {o}
            </li>
          ))}
        </ul>
        <EmptyIndexed
          en="No verified air-raid-linked performance record indexed yet."
          ja="空襲と結びついた確認済み公演記録は、まだ索引化されていません。"
        />
      </section>

      {/* 21. Postwar */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Postwar does not mean returning to zero
        </h2>
        <p className="jp-heading mt-2 text-lg">戦後は、元に戻ることではない</p>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-[0.98rem]">
          <p>
            終戦後、劇場が再開しても、戦前と同じ世界へは戻らない。建物がない。食料がない。観客の生活が変わっている。新しい制度がある。新しいメディアがある。新しい芸人がいる。本人の身体も年齢を重ねている。
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {(
            [
              ["What returned", postwarTransition.returned],
              ["What changed", postwarTransition.changed],
              ["What remained uncertain", postwarTransition.uncertain],
            ] as const
          ).map(([title, items]) => (
            <article key={title} className="border border-border px-4 py-4">
              <p className="label">{title}</p>
              <ul className="mt-3 space-y-1 text-sm text-text-faint">
                {items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* 22–23. Popularity / persona */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Popularity has a history
        </h2>
        <p className="jp-heading mt-2 text-lg">人気にも、時間がある</p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {popularityIndicators.map((i) => (
            <li
              key={i.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {i.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {i.labelJa}
              </span>
            </li>
          ))}
        </ul>
        <EmptyIndexed
          en={`No popularity timeline rows (${roppaDiaryPopularityRecords.length}). No single PopularityScore.`}
          ja="人気タイムラインは未索引。単一スコア化しない。"
        />

        <h3 className="editorial mt-12 text-xl text-text">
          The comic figure and the private body
        </h3>
        <p className="jp-heading mt-1 text-base">喜劇人の像と、私的な身体</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="border border-border px-4 py-4">
            <p className="label">Public persona</p>
            <ul className="mt-3 space-y-1 text-sm text-text-faint">
              {publicPersonaPrivateBody.public.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </article>
          <article className="border border-border px-4 py-4">
            <p className="label">Private diary body</p>
            <ul className="mt-3 space-y-1 text-sm text-text-faint">
              {publicPersonaPrivateBody.private.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </article>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-text-faint">
          観客が見るのは演じる身体。日記が残すのは演じる前後の身体。両者は同じ人間だが、同じ見え方ではない。
        </p>
      </section>

      {/* 24–26. Money / company / illness */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Who pays for the show?
        </h2>
        <p className="jp-heading mt-2 text-lg">誰が、上演の費用を負担するのか</p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {entertainmentMoneyCategories.map((c) => (
            <li
              key={c.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {c.label} / {c.labelJa}
              <span className="mt-1 block text-[0.65rem] text-text-faint">
                Not indexed
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-text-faint">
          EntertainmentMoneyRecord: {roppaDiaryMoneyRecords.length} ·
          金額を推測しない
        </p>

        <h3 className="editorial mt-12 text-xl text-text">
          A company must also be maintained
        </h3>
        <p className="jp-heading mt-1 text-base">
          劇団もまた、維持されなければならない
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {companyMaintenanceTargets.map((t) => (
            <li
              key={t.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {t.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {t.labelJa}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="editorial mt-12 text-xl text-text">
          What happens when a performer cannot appear?
        </h3>
        <p className="jp-heading mt-1 text-base">
          演者が舞台へ出られないとき、何が起きるか
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-3">
          {substitutionOutcomes.map((o) => (
            <li
              key={o.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {o.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {o.labelJa}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* 27–28. Aging / industrial archive */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Aging while the medium changes
        </h2>
        <p className="jp-heading mt-2 text-lg">媒体が変わる中で老いる</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {agingAcrossMedia.map((m) => (
            <article key={m.id} className="border border-border px-4 py-4">
              <p className="editorial text-lg text-text">{m.label}</p>
              <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
                Requires
              </p>
              <ul className="mt-2 space-y-1 text-sm text-text-faint">
                {m.requires.map((r) => (
                  <li key={r}>· {r}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-text-faint">
          老いは身体能力の変化だけではない。媒体が変わることで求められる演技も変わる。
        </p>

        <h3 className="editorial mt-12 text-xl text-text">
          A diary of an industry
        </h3>
        <p className="jp-heading mt-1 text-base">産業の日記</p>
        <div className="jp-body mt-4 max-w-2xl space-y-3 text-[0.98rem]">
          <p>
            『古川ロッパ昭和日記』は、一人の私生活だけを記録していない。劇場。劇団。飲食店。新聞。映画会社。放送局。病院。交通。観客。制度。
          </p>
          <p>
            一人の一日を読むことで、娯楽産業の接続関係が見える。
          </p>
        </div>
        <ConceptQuote
          en="A personal diary can preserve the operating system of an industry."
          ja="個人の日記は、産業を動かしていたOSを残すことがある。"
        />
      </section>

      {/* 29. Density */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          What becomes more visible in each period?
        </h2>
        <p className="jp-heading mt-2 text-lg">各時期に、何が濃く見えるか</p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="px-2 py-2 font-normal text-text-faint">Axis</th>
                {densityPeriods.map((p) => (
                  <th
                    key={p}
                    className="px-2 py-2 font-normal text-text-faint"
                  >
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {densityRows.map((row) => (
                <tr key={row} className="border-b border-border-soft">
                  <td className="px-2 py-2 text-text-soft">{row}</td>
                  {densityPeriods.map((p) => (
                    <td key={p} className="px-2 py-2 text-text-faint">
                      {densityCell()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-text-faint">
          索引件数がないあいだは High/Medium を割り当てない。
        </p>
      </section>

      {/* 30. First entry */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          First day to index
        </h2>
        <p className="jp-heading mt-2 text-lg">最初に索引化する一日</p>
        <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
          <div className="border border-border px-4 py-4">
            <dt className="label">Selected entry</dt>
            <dd className="mt-2 text-text-soft">{firstEntryTarget.status}</dd>
            <dd className="jp-serif mt-1 text-xs text-text-faint">
              {firstEntryTarget.statusJa}
            </dd>
          </div>
          <div className="border border-border px-4 py-4">
            <dt className="label">Status</dt>
            <dd className="mt-2 text-text-soft">
              {firstEntryTarget.researchStatus}
            </dd>
            <dd className="mt-2 text-xs text-text-faint">
              Research: {firstEntryTarget.researchWorkspaceUrl ?? "/research/furukawa-roppa-first-entry"}
            </dd>
            <dd className="mt-1 text-xs text-text-faint">
              Future Entry URL: {firstEntryTarget.futureUrl}
            </dd>
          </div>
        </dl>
        <p className="label mt-8">Criteria</p>
        <ul className="mt-3 space-y-1 text-sm text-text-faint">
          {firstEntryTarget.criteria.map((c) => (
            <li key={c}>· {c}</li>
          ))}
        </ul>
        <p className="label mt-8">Priority candidate types</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {firstEntryTarget.candidateTypes.map((c) => (
            <li
              key={c.label}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {c.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {c.labelJa}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-text-faint">具体的日付を推測しない。</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={
              firstEntryTarget.bibliographyWorkspaceUrl ??
              "/research/furukawa-roppa-bibliography"
            }
            className="focus-ring inline-flex border border-border px-4 py-2 text-xs text-text-soft"
          >
            Open bibliographic research
          </Link>
          <Link
            href="/research/furukawa-roppa-first-entry"
            className="focus-ring inline-flex border border-text bg-text px-4 py-2 text-xs text-bg"
          >
            Open entry research workspace
          </Link>
        </div>
      </section>

      {/* 31. Volume comparison */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          The same categories across four volumes
        </h2>
        <p className="jp-heading mt-2 text-lg">四篇を貫く同じ観測項目</p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="px-2 py-2 font-normal text-text-faint">
                  Category
                </th>
                {volumeCounts.map(({ volume }) => (
                  <th
                    key={volume.id}
                    className="px-2 py-2 font-normal text-text-faint"
                  >
                    {volume.titleJa}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {volumeComparisonCategories.map((cat) => (
                <tr key={cat.id} className="border-b border-border-soft">
                  <td className="px-2 py-2 text-text-soft">
                    {cat.label}
                    <span className="jp-serif ml-1 text-text-faint">
                      {cat.labelJa}
                    </span>
                  </td>
                  {volumeCounts.map(({ volume }) => (
                    <td key={volume.id} className="px-2 py-2 text-text-faint">
                      Not indexed
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 32. Writer CTA */}
      <section className="my-14 border-b border-border pb-14">
        <Link
          href="/writers/furukawa-roppa"
          className="focus-ring paper-panel block p-8 transition-colors hover:border-text-faint"
        >
          <p className="label">Related writer</p>
          <h2 className="editorial mt-3 text-3xl text-text">Roppa Furukawa</h2>
          <p className="jp-heading mt-2 text-xl">古川ロッパ</p>
          <p className="mt-4 max-w-xl text-sm text-text-soft">
            Read the performer behind the diary: stage, food, illness, audience,
            and aging.
          </p>
          <p className="jp-serif mt-2 max-w-xl text-sm text-text-faint">
            日記の背後にいる演者を、舞台、食事、病気、観客、老いから読む。
          </p>
        </Link>
      </section>

      {/* 33–34. Related */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text">Related comparisons</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {diaryRelatedComparisons.coming.map((c) => (
            <li
              key={c.title}
              className="border border-dashed border-border px-4 py-3"
            >
              <p className="label">Coming</p>
              <p className="mt-2 text-sm text-text-soft">{c.title}</p>
              <p className="jp-serif mt-1 text-xs text-text-faint">
                {c.subtitle}
              </p>
              <p className="mt-1 text-[0.65rem] text-text-faint">{c.href}</p>
            </li>
          ))}
        </ul>

        <h2 className="editorial mt-12 text-2xl text-text">
          Related observations
        </h2>
        <ul className="mt-6 space-y-3">
          {diaryRelatedObservations.published.map((o) => (
            <li key={o.href}>
              <Link
                href={o.href}
                className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
              >
                <p className="label">Published</p>
                <p className="editorial mt-2 text-xl">{o.title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="label mt-8">Coming</h3>
        <ul className="mt-3 space-y-2">
          {diaryRelatedObservations.coming.map((title) => (
            <li
              key={title}
              className="border border-dashed border-border px-4 py-3 text-sm text-text-faint"
            >
              {title}
            </li>
          ))}
        </ul>
      </section>

      <WriterResearchQueue items={roppaDiaryResearchQueue} />

      <FactObservationInterpretationBlock
        fact="『古川ロッパ昭和日記』は書誌上、戦前篇・戦中篇・戦後篇・晩年篇の複数巻として現れる。出版社表示は晶文社（確認中の版差あり）。日付付き Entry・PerformanceRecord・WaitingRecord は未索引。"
        observation="長期で読むと、上演・食事・身体・観客・媒体・戦時制度が同一身体を通して組み替わる見え方が開く。"
        interpretation="一日の再現ではなく、反復される舞台労働と時代圧力の交差として索引する。"
      />

      <CategorizedSourceList sources={roppaDiarySources} />

      <p className="mt-8 text-[0.65rem] text-text-faint">
        Work id: {furukawaRoppaShowaDiary.id} · slug:{" "}
        {furukawaRoppaShowaDiary.slug}
      </p>
    </div>
  );
}
