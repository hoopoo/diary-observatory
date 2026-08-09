import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { ConceptBlock } from "@/components/ConceptBlock";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { Timeline } from "@/components/Timeline";
import { ConceptQuote } from "@/components/observations/ConceptQuote";
import { FactObservationInterpretationBlock } from "@/components/observations/FactObservationInterpretationBlock";
import { RoppaTextPortrait } from "@/components/writers/RoppaTextPortrait";
import { WriterAxisCards } from "@/components/writers/WriterAxisCards";
import { WriterBreadcrumb } from "@/components/writers/WriterBreadcrumb";
import { WriterRelatedWriters } from "@/components/writers/WriterRelatedWriters";
import { WriterResearchQueue } from "@/components/writers/WriterResearchQueue";
import {
  ROPPA_SLUG,
  audienceFeedbackLoop,
  authorityActors,
  bodyObservatoryItems,
  compareHayashi,
  compareNishimura,
  entertainmentLaborProfile,
  epistemicOverview,
  fifthCondition,
  foodObservatoryItems,
  mediaTransition,
  moneyCategories,
  performanceDayModel,
  performanceNetworkActors,
  periodArchitecture,
  popularityIndicators,
  primaryDiary,
  primaryDomains,
  rehearsalPerformanceRecovery,
  roppaAxes,
  roppaBodyRecords,
  roppaFoodRecordIds,
  roppaLead,
  roppaPerformanceRecords,
  roppaRelatedPages,
  roppaRelatedWriters,
  roppaResearchQueue,
  roppaSources,
  roppaTimeline,
  selectedEntry,
  theaterWorkplaceCategories,
  wartimeAxes,
  whyRoppa,
} from "@/data/writers/furukawa-roppa";
import type { Writer } from "@/lib/types";

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

export function RoppaObservatory({
  writer,
  activeAxis,
}: {
  writer: Writer;
  activeAxis?: string;
}) {
  const years = `${writer.birthYear}–${writer.deathYear}`;
  const activeAxisMeta = roppaAxes.find((a) => a.id === activeAxis);

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
          {writer.canonicalNameJa && (
            <p className="mt-2 text-sm text-text-faint">
              Canonical Japanese name: {writer.canonicalNameJa}
            </p>
          )}
          <p className="mt-4 text-sm text-text-faint">
            {years} · {writer.primaryCity ?? writer.city}, {writer.country}
          </p>
          {writer.occupations && (
            <p className="mt-2 text-xs tracking-wide text-text-faint">
              Primary occupation: {writer.occupations.join(" / ")}
            </p>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {primaryDomains.map((d) => (
              <span
                key={d}
                className="border border-border px-2.5 py-1 text-xs text-text-soft"
              >
                {d}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {writer.themes.map((theme) => (
              <span
                key={theme}
                className="border border-border-soft px-2 py-0.5 text-[0.65rem] text-text-faint"
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
            {roppaLead.map((p) => (
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
                {writer.lastUpdated ?? "2026-08-05"}
              </dd>
            </div>
          </dl>
        </div>
        <RoppaTextPortrait years={years} />
      </header>

      {activeAxisMeta && (
        <p className="mt-6 text-sm text-text-faint">
          Active axis: {activeAxisMeta.label} / {activeAxisMeta.labelJa}
        </p>
      )}

      <section className="my-14 border-b border-border pb-14">
        <WriterAxisCards
          writerSlug={ROPPA_SLUG}
          axes={roppaAxes}
          activeAxis={activeAxis}
        />
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {whyRoppa.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{whyRoppa.titleJa}</p>
        <div className="jp-body mt-6 max-w-2xl space-y-4 text-[0.98rem]">
          {whyRoppa.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-8 space-y-3">
          {epistemicOverview.map((layer) => (
            <aside
              key={layer.kind}
              className="border border-border px-4 py-3 text-sm text-text-soft"
            >
              <EpistemicLabel kind={layer.kind} />
              <p className="mt-2">{layer.text}</p>
            </aside>
          ))}
        </div>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {primaryDiary.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{primaryDiary.titleJa}</p>
        <article className="mt-6 border border-border px-5 py-6">
          <p className="jp-serif text-xl text-accent">{primaryDiary.workJa}</p>
          <p className="editorial mt-2 text-lg">{primaryDiary.workEn}</p>
          <p className="mt-1 text-sm text-text-faint">
            {primaryDiary.englishDisplay}
          </p>
          <p className="mt-4 text-xs text-text-faint">
            Source form: {primaryDiary.sourceForm} / {primaryDiary.sourceFormJa}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {primaryDiary.volumes.map((vol) => (
              <div key={vol.id} className="border border-border-soft px-4 py-4">
                <p className="label">{vol.label}</p>
                <p className="jp-serif mt-1 text-sm text-text-soft">
                  {vol.labelJa}
                </p>
                <p className="mt-3 text-xs text-text-faint">
                  {vol.coverageLabelJa}
                </p>
                <p className="mt-2 text-[0.65rem] text-text-faint">
                  {vol.publisher} · {vol.verificationStatus}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-text-faint">{primaryDiary.comingNote}</p>
          <Link
            href={primaryDiary.href}
            className="focus-ring mt-4 inline-flex border border-border px-4 py-2 text-xs text-text-soft"
          >
            Open diary observatory
          </Link>
        </article>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          A diary divided by historical pressure
        </h2>
        <p className="jp-heading mt-2 text-lg">時代の圧力によって分かれる日記</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {periodArchitecture.map((period) => (
            <article key={period.id} className="border border-border px-5 py-5">
              <p className="label">{period.label}</p>
              <p className="jp-serif mt-1 text-sm text-accent">{period.labelJa}</p>
              <ul className="mt-4 space-y-1 text-sm text-text-faint">
                {period.candidates.map((c) => (
                  <li key={c}>· {c}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-text-faint">
          この区分を単純な進歩・衰退物語にしない。各時期の Fact は日記本文と書誌から確認して登録する。
        </p>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="editorial text-2xl text-text md:text-3xl">
            The performance day
          </h2>
          <EpistemicLabel kind="interpretation" />
        </div>
        <p className="jp-heading mt-2 text-lg">舞台に立つ一日</p>
        <p className="mt-4 text-xs tracking-wide text-text-faint">
          {performanceDayModel.label}
        </p>
        <FlowSteps steps={performanceDayModel.steps} />
        <p className="mt-6 max-w-2xl text-sm text-text-soft">
          {performanceDayModel.noteEn}
        </p>
        <p className="jp-serif mt-1 max-w-2xl text-sm text-text-faint">
          {performanceDayModel.noteJa}
        </p>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          A performer never works alone
        </h2>
        <p className="jp-heading mt-2 text-lg">演者は、一人では働けない</p>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-[0.98rem]">
          <p>小説家は、一人で原稿を書くように見える。</p>
          <p>舞台は、最初から集団で作られる。</p>
          <p>
            ロッパの日記には、本人の身体だけでなく、他者の遅刻、失敗、病気、機嫌、劇場側の判断が一日へ入り込む。
          </p>
        </div>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {performanceNetworkActors.map((a) => (
            <li
              key={a.id}
              className="border border-border px-4 py-3 text-sm text-text-soft"
            >
              <span className="editorial text-base text-text">{a.label}</span>
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {a.labelJa}
              </span>
              <span className="mt-2 block text-[0.65rem] text-text-faint">
                {a.status}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Rehearsal, performance, recovery
        </h2>
        <p className="jp-heading mt-2 text-lg">稽古、本番、回復</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {rehearsalPerformanceRecovery.map((layer) => (
            <article key={layer.id} className="border border-border px-4 py-5">
              <p className="label">{layer.label}</p>
              <p className="jp-serif mt-1 text-sm text-accent">{layer.labelJa}</p>
              <ul className="mt-4 space-y-1 text-sm text-text-faint">
                {layer.items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Eating between performances
        </h2>
        <p className="jp-heading mt-2 text-lg">本番のあいだに食べる</p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {foodObservatoryItems.map((item) => (
            <li
              key={item.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {item.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {item.labelJa}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-text-faint">
          FoodRecord indexed: {roppaFoodRecordIds.length} · 献立・店名・金額は本文確認前に作らない。
        </p>
        <ConceptBlock
          title="The meal is part of the performance."
          titleJa="食事もまた、舞台の一部である。"
          paragraphs={[
            "食事は、喜劇人の私生活の逸話ではない。",
            "声を出す。立つ。動く。複数回の本番をこなす。翌日も出演する。",
            "食事は、身体を舞台へ戻すための補給である。",
            "同時に、会食は人間関係、興行、打ち合わせ、人気の確認が行われる場所にもなる。",
          ]}
        />
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          The performing body
        </h2>
        <p className="jp-heading mt-2 text-lg">演じる身体</p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {bodyObservatoryItems.map((item) => (
            <li
              key={item.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {item.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {item.labelJa}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-text-faint">
          BodyRecord indexed: {roppaBodyRecords.length} · 病名・体重・検査値は確認済み資料のみ。医学的因果は推測しない。
        </p>
        <h3 className="editorial mt-10 text-xl text-text">
          When the body becomes public equipment
        </h3>
        <p className="jp-heading mt-2 text-base">
          身体が、公的な設備になるとき
        </p>
        <div className="jp-body mt-4 max-w-2xl space-y-3 text-[0.98rem]">
          <p>舞台俳優の身体は、完全に私的なものではない。</p>
          <p>
            声が出るか。歩けるか。太ったか。痩せたか。観客を笑わせられるか。出演できるか。
          </p>
          <p>
            しかし、身体を商品や機械としてだけ扱わない。苦痛、不安、老い、回復も本人の生活として観測する。
          </p>
        </div>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          The audience enters the diary
        </h2>
        <p className="jp-heading mt-2 text-lg">観客が日記へ入ってくる</p>
        <FlowSteps steps={audienceFeedbackLoop} />
        <p className="mt-6 max-w-2xl text-sm text-text-faint">
          Popularity indicators (no invented numbers):{" "}
          {popularityIndicators.join(" · ")}
        </p>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          The theater is a workplace
        </h2>
        <p className="jp-heading mt-2 text-lg">劇場は、職場である</p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {theaterWorkplaceCategories.map((c) => (
            <li
              key={c.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {c.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {c.labelJa}
              </span>
              <span className="mt-2 block text-[0.65rem] text-text-faint">
                Entity: Not indexed
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Entertainment is labor
        </h2>
        <p className="jp-heading mt-2 text-lg">娯楽は、労働である</p>
        <dl className="mt-8 grid gap-3 sm:grid-cols-2">
          {(
            [
              ["Rehearsal", entertainmentLaborProfile.rehearsal],
              ["Performance", entertainmentLaborProfile.performance],
              ["Travel", entertainmentLaborProfile.travel],
              ["Waiting", entertainmentLaborProfile.waiting],
              ["Publicity", entertainmentLaborProfile.publicity],
              ["Writing", entertainmentLaborProfile.writing],
              ["Meetings", entertainmentLaborProfile.meetings],
              ["Recovery", entertainmentLaborProfile.recovery],
              ["Administration", entertainmentLaborProfile.administration],
              ["Management", entertainmentLaborProfile.management],
            ] as const
          ).map(([label, value]) => (
            <div key={label} className="border border-border px-4 py-3">
              <dt className="text-xs text-text-faint">{label}</dt>
              <dd className="mt-1 text-sm text-text-soft">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          The cost of making people laugh
        </h2>
        <p className="jp-heading mt-2 text-lg">人を笑わせるための費用</p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2">
          {moneyCategories.map((c) => (
            <li
              key={c.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {c.label} / {c.labelJa}
              <span className="mt-1 block text-[0.65rem] text-text-faint">
                {c.status}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Comedy under war
        </h2>
        <p className="jp-heading mt-2 text-lg">戦争下の喜劇</p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2">
          {wartimeAxes.map((a) => (
            <li
              key={a.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {a.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {a.labelJa}
              </span>
              {"note" in a && a.note && (
                <span className="mt-2 block text-[0.65rem] text-text-faint">
                  {a.note}
                </span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-text-faint">
          戦時下の笑いを美談だけにしない。何を演じられ／演じられなかったかを、制度と身体から観測する。
        </p>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Who permits laughter?
        </h2>
        <p className="jp-heading mt-2 text-lg">誰が、笑いを許可するのか</p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {authorityActors.map((a) => (
            <li
              key={a.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {a.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {a.labelJa}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          After the war, the audience returns differently
        </h2>
        <p className="jp-heading mt-2 text-lg">
          戦後、観客は違う形で戻る
        </p>
        <p className="mt-6 max-w-2xl text-sm text-text-soft">
          「復興」を単純な回復として扱わず、別の産業構造への移行として観測する。劇場再開、食糧、占領期文化、映画・ラジオ・テレビ、新しい芸人、身体の老い——すべて Not indexed から開始する。
        </p>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          When the audience leaves the theater
        </h2>
        <p className="jp-heading mt-2 text-lg">観客が劇場の外へ移るとき</p>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {mediaTransition.map((m) => (
            <li
              key={m.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {m.label} / {m.labelJa}
              <span className="mt-1 block text-[0.65rem] text-text-faint">
                {m.status}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          When the role remains but the body changes
        </h2>
        <p className="jp-heading mt-2 text-lg">役割が残り、身体が変わるとき</p>
        <p className="mt-6 max-w-2xl text-sm text-text-soft">
          公的な役割と身体のずれを、長期日記から読み取る。After Success と Writing Body
          比較へ接続可能な足場のみ置く。
        </p>
      </section>

      <ConceptQuote
        en={"The diary is the backstage\nthat history forgot to film."}
        ja="日記は、歴史が撮影しなかった楽屋である。"
      />

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {fifthCondition.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{fifthCondition.titleJa}</p>
        <ul className="mt-8 space-y-2">
          {fifthCondition.rows.map((row) => (
            <li
              key={row.name}
              className="flex flex-wrap items-baseline justify-between gap-2 border border-border px-4 py-3 text-sm"
            >
              <span className="editorial text-text">{row.name}</span>
              <span className="text-text-soft">
                {row.condition} / {row.conditionJa}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-text-faint">
          {fifthCondition.noteJa}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={fifthCondition.fourHref}
            className="focus-ring inline-flex border border-text bg-text px-4 py-2.5 text-xs text-bg"
          >
            Open Four Urban Lives
          </Link>
          <span className="inline-flex border border-dashed border-border px-4 py-2.5 text-xs text-text-faint">
            Coming: {fifthCondition.futureCompareHref}
          </span>
        </div>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {compareNishimura.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{compareNishimura.titleJa}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="border border-border px-4 py-4">
            <p className="label">Roppa</p>
            <ul className="mt-3 space-y-1 text-sm text-text-faint">
              {compareNishimura.roppa.map((i) => (
                <li key={i}>· {i}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border px-4 py-4">
            <p className="label">Nishimura</p>
            <ul className="mt-3 space-y-1 text-sm text-text-faint">
              {compareNishimura.nishimura.map((i) => (
                <li key={i}>· {i}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border px-4 py-4">
            <p className="label">Shared</p>
            <ul className="mt-3 space-y-1 text-sm text-text-faint">
              {compareNishimura.shared.map((i) => (
                <li key={i}>· {i}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-text-faint">
          Coming comparison · {compareNishimura.comingHref}
        </p>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {compareHayashi.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{compareHayashi.titleJa}</p>
        <p className="mt-4 text-sm text-text-faint">{compareHayashi.sharedContext}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border border-border px-4 py-4">
            <p className="label">Hayashi</p>
            <p className="mt-3 text-sm text-text-soft">
              {compareHayashi.hayashi.join(" / ")}
            </p>
          </div>
          <div className="border border-border px-4 py-4">
            <p className="label">Roppa</p>
            <p className="mt-3 text-sm text-text-soft">
              {compareHayashi.roppa.join(" / ")}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-text-faint">
          Coming comparison · {compareHayashi.comingHref}
        </p>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">Selected day</h2>
        <p className="jp-heading mt-2 text-lg">選ばれた一日</p>
        <p className="mt-6 text-sm text-text-soft">{selectedEntry.status}</p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          {selectedEntry.statusJa}
        </p>
        <p className="label mt-8">Entry criteria</p>
        <ul className="mt-3 space-y-1 text-sm text-text-faint">
          {selectedEntry.criteria.map((c) => (
            <li key={c}>· {c}</li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/research/furukawa-roppa-bibliography"
            className="focus-ring inline-flex border border-border px-4 py-2 text-xs text-text-soft"
          >
            Verify bibliography
          </Link>
          <Link
            href="/research/furukawa-roppa-first-entry"
            className="focus-ring inline-flex border border-text bg-text px-4 py-2 text-xs text-bg"
          >
            Open entry research
          </Link>
        </div>
        <p className="mt-4 text-xs text-text-faint">
          PerformanceRecord indexed: {roppaPerformanceRecords.length} · 具体日付は推測しない。
        </p>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text">Chronology (minimal Fact)</h2>
        <div className="mt-6">
          <Timeline items={roppaTimeline} />
        </div>
      </section>

      <WriterResearchQueue items={roppaResearchQueue} />

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text">Related writers</h2>
        <div className="mt-8">
          <WriterRelatedWriters items={roppaRelatedWriters} />
        </div>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text">Related pages</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {roppaRelatedPages.map((page) => {
            const isComing = page.group === "Coming comparison";
            return (
              <li key={`${page.group}-${page.title}`}>
                {isComing ? (
                  <div className="flex flex-col border border-dashed border-border px-4 py-3">
                    <span className="label">{page.group}</span>
                    <span className="mt-2 text-sm text-text-faint">
                      {page.title}
                    </span>
                    <span className="mt-1 text-[0.65rem] text-text-faint">
                      {page.href}
                    </span>
                  </div>
                ) : (
                  <Link
                    href={page.href}
                    className="focus-ring flex flex-col border border-border px-4 py-3 hover:border-text-faint"
                  >
                    <span className="label">{page.group}</span>
                    <span className="mt-2 text-sm text-text-soft">
                      {page.title}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <FactObservationInterpretationBlock
        fact="生年1903・没年1961。表示名は古川ロッパ、典拠表記として古川緑波。『古川ロッパ昭和日記』は書誌上、戦前篇・戦中篇・戦後篇・晩年篇の複数巻構造を持つ。日付付き Entry・PerformanceRecord・FoodRecord・BodyRecord は未索引。"
        observation="日記カテゴリから、上演を稽古・待機・食事・観客・回復を含む集団労働として読む入口が開く。"
        interpretation="五人目の一日の重心として Performance を置くが、Four Urban Lives の四人比較は保持したまま拡張する。"
      />

      <CategorizedSourceList sources={roppaSources} />
    </div>
  );
}
