import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { ConceptBlock } from "@/components/ConceptBlock";
import { SurvivalSummary } from "@/components/SurvivalSummary";
import { SameDayBreadcrumb } from "@/components/same-day/SameDayBreadcrumb";
import { SameDayMatrix } from "@/components/same-day/SameDayMatrix";
import {
  comparisonAxes,
  dateContext,
  emptySlots,
  howLifeIsAdded,
  indexedLifeCard,
  otherYears,
  potentialDiaries,
  privatePublicConcept,
  relatedDates,
  relatedPages,
  sameDay20110502,
  sameDay20110502Meta,
  sameDayMatrixColumns,
  sameDayMatrixRows,
  sameDaySources,
  tokyoDayRoute,
  worldStatusMeta,
} from "@/data/same-day/2011-05-02";
import { summarizeSurvival } from "@/lib/survival";
import type { Entity } from "@/lib/types";

export function May2SameDayObservatory({ entities }: { entities: Entity[] }) {
  const meta = sameDay20110502Meta;
  const day = sameDay20110502;
  const worldStatus = summarizeSurvival(entities, worldStatusMeta);
  const life = indexedLifeCard;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <SameDayBreadcrumb dateLabel={meta.dateEn} />

      {/* 1. Header */}
      <header className="mt-8 border-b border-border pb-12">
        <p className="label">Same Day, Different Lives</p>
        <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
          {day.title}
        </h1>
        <p className="jp-heading mt-3 text-2xl md:text-3xl">{day.titleJa}</p>
        <p className="editorial mt-6 text-xl text-accent">{day.subtitle}</p>
        <p className="jp-serif mt-2 text-base text-text-soft">{day.subtitleJa}</p>

        <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
          {day.lead.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="label">Date</dt>
            <dd className="mt-1 text-text-soft">{day.date}</dd>
          </div>
          <div>
            <dt className="label">Indexed diaries</dt>
            <dd className="mt-1 text-text-soft">{meta.indexedDiaries}</dd>
          </div>
          <div>
            <dt className="label">Countries</dt>
            <dd className="mt-1 text-text-soft">{meta.countries}</dd>
          </div>
          <div>
            <dt className="label">Cities</dt>
            <dd className="mt-1 text-text-soft">{meta.cities}</dd>
          </div>
          <div>
            <dt className="label">Writers</dt>
            <dd className="mt-1 text-text-soft">{meta.writers}</dd>
          </div>
          <div>
            <dt className="label">Comparison status</dt>
            <dd className="mt-1 text-text-soft">Open</dd>
          </div>
          <div>
            <dt className="label">Last updated</dt>
            <dd className="mt-1 text-text-soft">{day.lastUpdated}</dd>
          </div>
        </dl>
      </header>

      {/* 2. Comparison status */}
      <section className="my-12 border border-accent/30 bg-bg-raised px-6 py-6 md:px-8">
        <p className="label">Comparison status</p>
        <h2 className="jp-heading mt-2 text-xl">比較状況</h2>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="label">Indexed lives</dt>
            <dd className="editorial mt-1 text-3xl text-text">
              {meta.indexedDiaries}
            </dd>
          </div>
          <div>
            <dt className="label">Cities</dt>
            <dd className="mt-1 text-sm text-text-soft">
              {meta.citiesIndexed.join(" / ")}
            </dd>
          </div>
          <div>
            <dt className="label">Countries</dt>
            <dd className="mt-1 text-sm text-text-soft">Japan</dd>
          </div>
          <div>
            <dt className="label">Languages</dt>
            <dd className="mt-1 text-sm text-text-soft">
              {meta.languages.join(" / ")}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="label">Open slots</dt>
            <dd className="mt-1 text-sm text-text-soft">
              {meta.openSlots.join(" / ")}
            </dd>
          </div>
        </dl>
        <p className="mt-6 text-sm text-text-soft">
          Status: Incomplete by design
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          未完成であることを前提とした観測
        </p>
        <p className="mt-5 max-w-2xl text-sm text-text-soft">
          A Same Day page does not need to begin with multiple diaries. It
          begins with one surviving record and remains open to other lives.
        </p>
        <p className="jp-serif mt-2 max-w-2xl text-sm text-text-faint">
          Same Dayは、複数の日記が揃ってから始まるのではない。まず一つの記録があり、別の人生が追加される余白を残す。
        </p>
      </section>

      {/* 3. Indexed life */}
      <section className="my-14" aria-labelledby="indexed-life">
        <h2
          id="indexed-life"
          className="editorial text-2xl text-text md:text-3xl"
        >
          Indexed life
        </h2>
        <p className="jp-heading mt-2 text-lg">この日に記録された人生</p>

        <article className="mt-8 border border-border px-6 py-8 md:px-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <p className="label">Writer</p>
              <Link
                href={life.writerHref}
                className="focus-ring editorial mt-1 inline-block text-2xl text-text underline-offset-4 hover:underline md:text-3xl"
              >
                {life.writerName}
              </Link>
              <p className="jp-heading mt-1 text-lg">{life.writerNameJa}</p>
            </div>
            <div className="text-right text-xs text-text-faint">
              <p>
                {life.city} / {life.country}
              </p>
              <p className="mt-1">{life.language}</p>
            </div>
          </div>

          <p className="mt-4 text-xs tracking-wide text-text-faint">
            Areas: {life.areas.join(" / ")}
          </p>

          <h3 className="editorial mt-6 text-xl text-accent md:text-2xl">
            {life.title}
          </h3>
          <p className="jp-serif mt-2 text-base text-text-soft">{life.titleJa}</p>
          <p className="jp-body mt-5 max-w-2xl text-sm text-text-soft">
            {life.summary}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {life.themes.map((theme) => (
              <li
                key={theme}
                className="border border-border px-2.5 py-1 text-[0.7rem] tracking-wide text-text-faint"
              >
                {theme}
              </li>
            ))}
          </ul>

          <dl className="mt-6 grid gap-2 text-xs text-text-faint sm:grid-cols-2">
            <div>
              <dt className="inline">Verification status: </dt>
              <dd className="inline text-text-soft">{life.verificationStatus}</dd>
            </div>
            <div>
              <dt className="inline">Source status: </dt>
              <dd className="inline text-text-soft">{life.sourceStatus}</dd>
            </div>
          </dl>

          <Link
            href={life.entryHref}
            className="focus-ring mt-8 inline-flex border border-text bg-text px-5 py-2.5 text-xs tracking-wide text-bg"
          >
            View this day
          </Link>
        </article>
      </section>

      {/* 4. One day, one city */}
      <section className="my-14" aria-labelledby="one-city">
        <h2 id="one-city" className="editorial text-2xl text-text md:text-3xl">
          {tokyoDayRoute.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{tokyoDayRoute.titleJa}</p>
        <p className="editorial mt-6 text-xl text-text">{tokyoDayRoute.city}</p>
        <ol className="mt-6 flex max-w-md flex-col">
          {tokyoDayRoute.steps.map((step, index) => (
            <li key={step.label} className="flex flex-col items-start">
              <div className="border border-border px-4 py-3 text-sm">
                <p className="label">{step.label}</p>
                {step.href ? (
                  <Link
                    href={step.href}
                    className="focus-ring mt-1 inline-block text-text-soft underline-offset-4 hover:underline"
                  >
                    {step.labelJa}
                  </Link>
                ) : (
                  <p className="mt-1 text-text-soft">{step.labelJa}</p>
                )}
              </div>
              {index < tokyoDayRoute.steps.length - 1 && (
                <span className="px-3 py-1 text-xs text-accent" aria-hidden="true">
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
        <div className="jp-body mt-8 max-w-2xl space-y-4 text-sm text-text-soft">
          {tokyoDayRoute.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 5. Empty slots */}
      <section className="my-14" aria-labelledby="empty-slots">
        <h2
          id="empty-slots"
          className="editorial text-2xl text-text md:text-3xl"
        >
          Other lives not yet indexed
        </h2>
        <p className="jp-heading mt-2 text-lg">まだ索引化されていない人生</p>
        <p className="mt-3 max-w-2xl text-xs text-text-faint">
          Empty slots are not defects. They are observational margin — no
          invented writers or events.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {emptySlots.map((slot) => (
            <article
              key={slot.id}
              className="border border-dashed border-border px-5 py-5"
            >
              <h3 className="editorial text-lg text-text-faint">{slot.city}</h3>
              {slot.cityJa && (
                <p className="jp-serif mt-1 text-sm text-text-faint">
                  {slot.cityJa}
                </p>
              )}
              <p className="mt-4 text-sm text-text-soft">{slot.note}</p>
              {slot.noteJa && (
                <p className="jp-serif mt-2 text-sm text-text-faint">
                  {slot.noteJa}
                </p>
              )}
              <p className="mt-3 text-[0.65rem] tracking-wide text-text-faint">
                Slot: {slot.status} · Research: {slot.researchStatus}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 6. What can be compared */}
      <section className="my-14" aria-labelledby="compare-axes">
        <h2
          id="compare-axes"
          className="editorial text-2xl text-text md:text-3xl"
        >
          What can be compared on the same day?
        </h2>
        <p className="jp-heading mt-2 text-lg">同じ日から、何を比較できるか</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {comparisonAxes.map((axis) => (
            <li
              key={axis.id}
              id={`axis-${axis.id}`}
              className="border border-border px-4 py-3"
            >
              <p className="text-sm text-text-soft">{axis.label}</p>
              <p className="jp-serif mt-1 text-xs text-text-faint">
                {axis.labelJa}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 7. Matrix */}
      <section className="my-14" aria-labelledby="matrix">
        <h2 id="matrix" className="editorial text-2xl text-text md:text-3xl">
          Comparison matrix
        </h2>
        <p className="jp-heading mt-2 text-lg">比較表</p>
        <p className="mt-3 max-w-2xl text-xs text-text-faint">
          One column for now. Unknown is stated explicitly — never left blank.
          Horizontal scroll supports future multi-city columns.
        </p>
        <div className="mt-8">
          <SameDayMatrix
            columns={sameDayMatrixColumns}
            rows={sameDayMatrixRows}
          />
        </div>
      </section>

      {/* 8. Date context */}
      <section className="my-14" aria-labelledby="date-context">
        <h2
          id="date-context"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {dateContext.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{dateContext.titleJa}</p>
        <div className="mt-6 border border-dashed border-border px-5 py-5">
          <p className="text-sm text-text-soft">{dateContext.emptyEn}</p>
          <p className="jp-serif mt-2 text-sm text-text-faint">
            {dateContext.emptyJa}
          </p>
        </div>
        <p className="mt-4 text-xs text-text-faint">
          Future items (not yet filled): {dateContext.futureItems.join(" · ")}
        </p>
        <p className="mt-2 text-xs text-text-faint">
          Private diary time and public history are kept separate.
        </p>
      </section>

      {/* 9. Concept */}
      <ConceptBlock
        title={privatePublicConcept.title}
        titleJa={privatePublicConcept.titleJa}
        paragraphs={privatePublicConcept.paragraphs}
      />

      {/* 10. World status */}
      <div className="my-14">
        <SurvivalSummary data={worldStatus} />
      </div>

      {/* 11. Other years */}
      <section className="my-14" aria-labelledby="other-years">
        <h2
          id="other-years"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {otherYears.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{otherYears.titleJa}</p>
        <div className="mt-6 border border-dashed border-border px-5 py-5">
          <p className="text-sm text-text-soft">{otherYears.emptyEn}</p>
          <p className="jp-serif mt-2 text-sm text-text-faint">
            {otherYears.emptyJa}
          </p>
        </div>
        <p className="label mt-6">Coming structure</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {otherYears.comingStructure.map((item) => (
            <li
              key={item}
              className="border border-border-soft px-2.5 py-1 text-[0.7rem] text-text-faint"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* 12. Potential diaries */}
      <section className="my-14" aria-labelledby="potential">
        <h2 id="potential" className="editorial text-2xl text-text md:text-3xl">
          Potential diaries for this date
        </h2>
        <p className="jp-heading mt-2 text-lg">今後照合できる可能性のある日記</p>
        <p className="mt-3 max-w-2xl text-xs text-text-faint">
          Candidates are archives to check — not assertions that a diary exists
          for this date.
        </p>
        <ul className="mt-8 space-y-3">
          {potentialDiaries.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-1 border border-border px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <p className="text-sm text-text-soft">{item.label}</p>
                <p className="mt-1 text-xs text-text-faint">{item.note}</p>
                <p className="jp-serif text-xs text-text-faint">{item.noteJa}</p>
              </div>
              <span className="border border-border px-2 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
                {item.researchStatus}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* 13. How a life is added */}
      <section className="my-14" aria-labelledby="how-added">
        <p className="label">{howLifeIsAdded.eyebrow}</p>
        <h2
          id="how-added"
          className="editorial mt-2 text-2xl text-text md:text-3xl"
        >
          {howLifeIsAdded.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{howLifeIsAdded.titleJa}</p>
        <ol className="mt-8 space-y-4">
          {howLifeIsAdded.steps.map((step) => (
            <li key={step.n} className="flex gap-4 border-b border-border-soft pb-4">
              <span className="editorial text-2xl text-accent">
                {String(step.n).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm text-text-soft">{step.en}</p>
                <p className="jp-serif mt-1 text-sm text-text-faint">{step.ja}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 14. Related dates */}
      <section className="my-14" aria-labelledby="related-dates">
        <h2
          id="related-dates"
          className="editorial text-2xl text-text md:text-3xl"
        >
          Related dates
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {relatedDates.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="focus-ring border border-border px-5 py-5 hover:border-text-faint"
            >
              <p className="editorial text-lg text-text">{item.title}</p>
              <p className="jp-serif mt-1 text-sm text-text-faint">
                {item.titleJa}
              </p>
              <p className="mt-2 text-xs text-text-faint">{item.cities}</p>
              <span className="mt-3 inline-block border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
                Coming observation
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 15. Related pages */}
      <section className="my-14" aria-labelledby="related-pages">
        <h2 id="related-pages" className="editorial text-2xl text-text">
          Related pages
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {relatedPages.map((page) => (
            <li key={`${page.group}-${page.title}`}>
              <Link
                href={page.href}
                className="focus-ring flex flex-col border border-border px-4 py-3 hover:border-text-faint"
              >
                <span className="label">{page.group}</span>
                <span className="mt-1 text-sm text-text-soft">{page.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 16. Sources */}
      <CategorizedSourceList sources={sameDaySources} />
    </div>
  );
}
