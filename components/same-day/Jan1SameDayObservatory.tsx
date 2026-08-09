import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { ConceptBlock } from "@/components/ConceptBlock";
import { DiaryEditorialMethod } from "@/components/diaries/DiaryEditorialMethod";
import { RecordSurvivalList } from "@/components/entries/RecordSurvivalList";
import { SameDayBreadcrumb } from "@/components/same-day/SameDayBreadcrumb";
import { SameDayEvidenceSummaryPanel } from "@/components/same-day/SameDayEvidenceSummary";
import { SameDayMatrix } from "@/components/same-day/SameDayMatrix";
import { SameDayResearchQueue } from "@/components/same-day/SameDayResearchQueue";
import {
  comparisonAxes,
  emptySlots,
  evidenceSummary,
  howLifeIsAdded,
  indexedLifeCard,
  january1AcrossYears,
  publicContext,
  publicPrivateConcept,
  relatedDates,
  relatedPages,
  repeatedDateConcept,
  sameDay19180101,
  sameDay19180101Meta,
  sameDayMatrixColumns,
  sameDayMatrixRows,
  sameDayRecordSurvival,
  sameDayResearchQueue,
  sameDaySources,
  speedOfLifeConcept,
  tokyoDayFlow,
} from "@/data/same-day/1918-01-01";

export function Jan1SameDayObservatory() {
  const day = sameDay19180101;
  const meta = sameDay19180101Meta;
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
            <dt className="label">Day</dt>
            <dd className="mt-1 text-text-soft">{meta.dayOfWeek}</dd>
          </div>
          <div>
            <dt className="label">Indexed lives</dt>
            <dd className="mt-1 text-text-soft">{meta.indexedLives}</dd>
          </div>
          <div>
            <dt className="label">Cities</dt>
            <dd className="mt-1 text-text-soft">{meta.cities}</dd>
          </div>
          <div>
            <dt className="label">Countries</dt>
            <dd className="mt-1 text-text-soft">{meta.countries}</dd>
          </div>
          <div>
            <dt className="label">Languages</dt>
            <dd className="mt-1 text-text-soft">{meta.languages}</dd>
          </div>
          <div>
            <dt className="label">Comparison status</dt>
            <dd className="mt-1 text-text-soft">{meta.comparisonState}</dd>
          </div>
          <div>
            <dt className="label">Verification status</dt>
            <dd className="mt-1 text-text-soft">{meta.verificationStatus}</dd>
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
              {meta.indexedLives}
            </dd>
          </div>
          <div>
            <dt className="label">Writers</dt>
            <dd className="mt-1 text-sm text-text-soft">
              {meta.writers.join(" / ")}
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
            <dd className="mt-1 text-sm text-text-soft">
              {meta.countriesIndexed.join(" / ")}
            </dd>
          </div>
          <div>
            <dt className="label">Languages</dt>
            <dd className="mt-1 text-sm text-text-soft">
              {meta.languagesIndexed.join(" / ")}
            </dd>
          </div>
          <div>
            <dt className="label">Comparison state</dt>
            <dd className="mt-1 text-sm text-text-soft">{meta.comparisonState}</dd>
          </div>
        </dl>
        <p className="mt-6 text-sm text-text-soft">
          This page is intentionally incomplete.
        </p>
        <p className="mt-2 max-w-2xl text-sm text-text-soft">
          A Same Day observation begins with one surviving record and remains
          open to other lives.
        </p>
        <p className="jp-serif mt-4 max-w-2xl text-sm text-text-faint">
          このページは、未完成であることを前提としている。
        </p>
        <p className="jp-serif mt-1 max-w-2xl text-sm text-text-faint">
          Same Dayは、複数の日記が揃ってから始まるのではない。一つ残った記録から始まり、別の人生を受け入れる余白を残す。
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
            Diary:{" "}
            <Link
              href={life.diaryHref}
              className="focus-ring underline-offset-4 hover:underline"
            >
              {life.diaryTitle}
            </Link>
            <span className="jp-serif"> / {life.diaryTitleJa}</span>
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
              <dt className="inline">Evidence level: </dt>
              <dd className="inline text-text-soft">{life.evidenceLevel}</dd>
            </div>
            <div>
              <dt className="inline">Verification status: </dt>
              <dd className="inline text-text-soft">
                {life.verificationStatus}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="inline">Source status: </dt>
              <dd className="inline text-text-soft">{life.sourceStatus}</dd>
            </div>
            {"sourceQuality" in life && life.sourceQuality && (
              <div className="sm:col-span-2">
                <dt className="inline">Source quality: </dt>
                <dd className="inline text-text-soft">{life.sourceQuality}</dd>
              </div>
            )}
            {"provenanceNote" in life && life.provenanceNote && (
              <div className="sm:col-span-2">
                <dt className="inline">Provenance: </dt>
                <dd className="inline text-text-soft">{life.provenanceNote}</dd>
              </div>
            )}
          </dl>

          <Link
            href={life.entryHref}
            className="focus-ring mt-8 inline-flex border border-text bg-text px-5 py-2.5 text-xs tracking-wide text-bg"
          >
            View this day
          </Link>
        </article>
      </section>

      {/* 4. The day in Tokyo */}
      <section className="my-14" aria-labelledby="tokyo-day">
        <h2 id="tokyo-day" className="editorial text-2xl text-text md:text-3xl">
          {tokyoDayFlow.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{tokyoDayFlow.titleJa}</p>
        <ol className="mt-6 flex max-w-md flex-col">
          {tokyoDayFlow.steps.map((step, index) => (
            <li key={step.label} className="flex flex-col items-start">
              <div className="border border-border px-4 py-3 text-sm">
                <p className="label">{step.label}</p>
                <p className="jp-serif mt-1 text-text-soft">{step.labelJa}</p>
              </div>
              {index < tokyoDayFlow.steps.length - 1 && (
                <span
                  className="px-3 py-1 text-xs text-accent"
                  aria-hidden="true"
                >
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
        <div className="jp-body mt-8 max-w-2xl space-y-4 text-sm text-text-soft">
          {tokyoDayFlow.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 5. Public / Private concept */}
      <ConceptBlock
        title={publicPrivateConcept.title}
        titleJa={publicPrivateConcept.titleJa}
        paragraphs={publicPrivateConcept.paragraphs}
      />

      {/* 6. Empty slots */}
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
            </article>
          ))}
        </div>
      </section>

      {/* 7. Matrix */}
      <section className="my-14" aria-labelledby="matrix">
        <h2 id="matrix" className="editorial text-2xl text-text md:text-3xl">
          Same Day matrix
        </h2>
        <p className="jp-heading mt-2 text-lg">比較表</p>
        <p className="mt-3 max-w-2xl text-xs text-text-faint">
          One column for now. Not indexed / Not recorded / Unknown are stated
          explicitly. Structure supports future multi-life columns.
        </p>
        <div className="mt-8">
          <SameDayMatrix
            columns={sameDayMatrixColumns}
            rows={sameDayMatrixRows}
          />
        </div>
      </section>

      {/* 8. What can be compared */}
      <section className="my-14" aria-labelledby="compare-axes">
        <h2
          id="compare-axes"
          className="editorial text-2xl text-text md:text-3xl"
        >
          What can be compared on New Year’s Day?
        </h2>
        <p className="jp-heading mt-2 text-lg">元日から何を比較できるか</p>
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

      {/* 9. January 1 across years */}
      <section className="my-14" aria-labelledby="across-years">
        <h2
          id="across-years"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {january1AcrossYears.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">
          {january1AcrossYears.titleJa}
        </p>
        <ul className="mt-6 space-y-3">
          {january1AcrossYears.indexed.map((item) => (
            <li
              key={item.date}
              className="flex flex-wrap items-baseline justify-between gap-2 border border-border px-4 py-3"
            >
              <div>
                <p className="text-sm text-text-soft">{item.date}</p>
                <p className="mt-1 text-xs text-text-faint">{item.writer}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="border border-accent/40 px-2 py-0.5 text-[0.65rem] text-accent">
                  {item.status}
                </span>
                <Link
                  href={item.href}
                  className="focus-ring text-xs underline-offset-4 hover:underline"
                >
                  View entry
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 border border-dashed border-border px-4 py-4">
          <p className="text-sm text-text-soft">
            {january1AcrossYears.otherYearsLabel.en}
          </p>
          <p className="jp-serif mt-1 text-sm text-text-faint">
            {january1AcrossYears.otherYearsLabel.ja}
          </p>
        </div>
        <h3 className="label mt-8">Research queue</h3>
        <ul className="mt-3 space-y-2">
          {january1AcrossYears.researchQueue.map((item) => (
            <li
              key={item.id}
              className="border border-border-soft px-4 py-3 text-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-text-soft">{item.label}</p>
                <span className="border border-border px-1.5 py-0.5 text-[0.65rem] text-text-faint">
                  {item.status}
                </span>
              </div>
              <p className="mt-1 text-xs text-text-faint">{item.note}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 10. Repeated date */}
      <ConceptBlock
        title={repeatedDateConcept.title}
        titleJa={repeatedDateConcept.titleJa}
        paragraphs={repeatedDateConcept.paragraphs}
      />

      {/* 11. Public context */}
      <section className="my-14" aria-labelledby="public-context">
        <h2
          id="public-context"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {publicContext.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{publicContext.titleJa}</p>
        <ul className="mt-8 space-y-2">
          {publicContext.items.map((item) => (
            <li
              key={item.id}
              className="flex flex-wrap items-baseline justify-between gap-2 border border-dashed border-border px-4 py-3"
            >
              <span className="text-sm text-text-soft">{item.label}</span>
              <span className="text-[0.65rem] tracking-wide text-text-faint">
                {item.status}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-text-soft">{publicContext.noteEn}</p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          {publicContext.noteJa}
        </p>
      </section>

      {/* 12. Evidence */}
      <section className="my-14" aria-labelledby="evidence">
        <h2 id="evidence" className="editorial text-2xl text-text md:text-3xl">
          How much do we know?
        </h2>
        <p className="jp-heading mt-2 text-lg">
          この一日について、どこまで分かっているか
        </p>
        <SameDayEvidenceSummaryPanel data={evidenceSummary} />
      </section>

      {/* 13. Speed of life */}
      <ConceptBlock
        title={speedOfLifeConcept.title}
        titleJa={speedOfLifeConcept.titleJa}
        paragraphs={speedOfLifeConcept.paragraphs}
      />

      {/* 14. What remains */}
      <section className="my-14" aria-labelledby="remains">
        <h2 id="remains" className="editorial text-2xl text-text md:text-3xl">
          What remains from January 1, 1918?
        </h2>
        <p className="jp-heading mt-2 text-lg">
          1918年1月1日から、何が残っているか
        </p>
        <p className="mt-3 max-w-2xl text-xs text-text-faint">
          Record survival — how the day persists as text, calendar, practice,
          and unknowns. Not an Entity status score.
        </p>
        <RecordSurvivalList items={sameDayRecordSurvival} />
      </section>

      {/* 15. Related dates */}
      <section className="my-14" aria-labelledby="related-dates">
        <h2
          id="related-dates"
          className="editorial text-2xl text-text md:text-3xl"
        >
          Related dates
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {relatedDates.map((item) => {
            const inner = (
              <>
                <p className="editorial text-lg text-text">{item.title}</p>
                <p className="jp-serif mt-1 text-sm text-text-faint">
                  {item.titleJa}
                </p>
                <p className="mt-2 text-xs text-text-faint">{item.detail}</p>
                <p className="mt-1 text-[0.65rem] tracking-wide text-text-faint">
                  {item.dateKind}
                </p>
                <span className="mt-3 inline-block border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
                  {item.status === "Indexed"
                    ? "Indexed"
                    : "Coming observation"}
                </span>
              </>
            );
            return item.href ? (
              <Link
                key={item.id}
                href={item.href}
                className="focus-ring border border-border px-5 py-5 hover:border-text-faint"
              >
                {inner}
              </Link>
            ) : (
              <div
                key={item.id}
                className="border border-dashed border-border px-5 py-5"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* 16. How another life is added */}
      <section className="my-14" aria-labelledby="how-added">
        <h2
          id="how-added"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {howLifeIsAdded.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{howLifeIsAdded.titleJa}</p>
        <DiaryEditorialMethod steps={howLifeIsAdded.steps} />
      </section>

      {/* 17. Research queue */}
      <section className="my-14" aria-labelledby="research-queue">
        <h2
          id="research-queue"
          className="editorial text-2xl text-text md:text-3xl"
        >
          Research queue
        </h2>
        <p className="jp-heading mt-2 text-lg">調査対象</p>
        <SameDayResearchQueue items={sameDayResearchQueue} />
      </section>

      {/* 18. Sources */}
      <section className="my-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">Sources</h2>
        <p className="jp-serif mt-2 text-sm text-accent">出典</p>
        <ul className="mt-8 space-y-3">
          {sameDaySources.map((s) => (
            <li key={s.id} className="border border-border-soft px-4 py-3 text-sm">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-text">{s.label}</span>
                {s.sourceType && (
                  <span className="border border-border px-1.5 py-0.5 text-[0.65rem] text-text-faint">
                    {s.sourceType}
                  </span>
                )}
                <span className="border border-border px-1.5 py-0.5 text-[0.65rem] text-text-faint">
                  {s.status ?? "needed"}
                </span>
              </div>
              {s.supports && (
                <p className="mt-1 text-xs text-text-faint">
                  Supports: {s.supports}
                </p>
              )}
              {s.note && (
                <p className="mt-1 text-xs text-text-faint">{s.note}</p>
              )}
              {s.copyrightNote && (
                <p className="mt-1 text-xs text-text-faint">{s.copyrightNote}</p>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <CategorizedSourceList sources={sameDaySources} />
        </div>
      </section>

      {/* 19. Related pages */}
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
    </div>
  );
}
