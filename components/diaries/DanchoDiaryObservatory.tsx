import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { SurvivalSummary } from "@/components/SurvivalSummary";
import { CityLayerTimeline } from "@/components/writers/CityLayerTimeline";
import { DiaryBreadcrumb } from "@/components/diaries/DiaryBreadcrumb";
import { DiaryEditorialMethod } from "@/components/diaries/DiaryEditorialMethod";
import { DiaryIndexingStatus } from "@/components/diaries/DiaryIndexingStatus";
import { DiaryResearchQueue } from "@/components/diaries/DiaryResearchQueue";
import { DiaryTextPortrait } from "@/components/diaries/DiaryTextPortrait";
import { DiaryThemeGrid } from "@/components/diaries/DiaryThemeGrid";
import { DiaryYearGrid } from "@/components/diaries/DiaryYearGrid";
import { RepetitionIndex } from "@/components/diaries/RepetitionIndex";
import {
  DANCHO_DIARY_SLUG,
  DANCHO_INDEXED_ENTRY_IDS,
  buildDanchoThemeIndexes,
  buildDanchoYearGrid,
  danchoBodyArchive,
  danchoComparison,
  danchoDecadeTimeline,
  danchoEditions,
  danchoEditorialSteps,
  danchoIndexedEntryCard,
  danchoLead,
  danchoMetadata,
  danchoPeopleCategories,
  danchoPlaces,
  danchoRelatedObservations,
  danchoRepetitionAxes,
  danchoRepetitionCopy,
  danchoResearchQueue,
  danchoSameDayLinks,
  danchoSources,
  danchoSurvivalCopy,
  danchoUrbanCopy,
  danchoUrbanLayers,
  danchoWarCopy,
  danchoWeatherArchive,
} from "@/data/diaries/dancho-tei-nichijo";
import { getEntitiesByIds } from "@/data/entities";
import { getEntriesByWork } from "@/data/entries";
import { buildKafuWorldStatus } from "@/data/writers/kafu-nagai";
import { VERIFICATION_LABELS } from "@/lib/labels";
import type { DiaryWork, EntityStatus } from "@/lib/types";

export function DanchoDiaryObservatory({
  diary,
  activeTheme,
}: {
  diary: DiaryWork;
  activeTheme?: string;
}) {
  const allWorkEntries = getEntriesByWork(diary.id);
  const indexedEntries = allWorkEntries.filter((e) =>
    (DANCHO_INDEXED_ENTRY_IDS as readonly string[]).includes(e.id),
  );

  const entryThemeMap = new Map(
    indexedEntries.map((e) => [e.id, e.themes ?? []]),
  );
  const themeIndexes = buildDanchoThemeIndexes(entryThemeMap);

  const indexedByYear = new Map<number, string[]>();
  for (const e of indexedEntries) {
    const y = Number(e.date.slice(0, 4));
    const list = indexedByYear.get(y) ?? [];
    list.push(e.id);
    indexedByYear.set(y, list);
  }
  const researchYears = new Set(
    danchoResearchQueue
      .map((q) => (q.date ? Number(q.date.slice(0, 4)) : NaN))
      .filter((y) => !Number.isNaN(y)),
  );
  const yearGrid = buildDanchoYearGrid(
    diary.startYear,
    diary.endYear ?? diary.startYear,
    indexedByYear,
    researchYears,
  );

  const placeEntities = getEntitiesByIds(danchoPlaces.map((p) => p.id));
  const entityById = new Map(placeEntities.map((e) => [e.id, e]));
  const statusCounts = placeEntities.reduce(
    (acc, entity) => {
      acc[entity.status] = (acc[entity.status] ?? 0) + 1;
      return acc;
    },
    {} as Partial<Record<EntityStatus, number>>,
  );
  const worldStatus = {
    ...buildKafuWorldStatus(statusCounts),
    label: danchoSurvivalCopy.title,
    labelJa: danchoSurvivalCopy.titleJa,
  };

  const entryCountByEntity = (entityId: string) =>
    allWorkEntries.filter((e) => e.entityIds?.includes(entityId)).length;

  const sourceNeededCount = danchoSources.filter(
    (s) => s.needed || s.status === "needed" || s.status === "verification-pending",
  ).length;

  const indexedYearsCount = yearGrid.filter(
    (y) => y.researchStatus === "indexed",
  ).length;

  const activeThemeMeta = themeIndexes.find((t) => t.theme === activeTheme);
  const filteredIndexed =
    activeTheme && activeThemeMeta
      ? indexedEntries.filter((e) => activeThemeMeta.entryIds.includes(e.id))
      : indexedEntries;

  const basePath = `/diaries/${DANCHO_DIARY_SLUG}`;
  const yearsLabel = `${diary.startYear}–${diary.endYear}`;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <DiaryBreadcrumb
        title={diary.title}
        titleJa={diary.titleOriginal}
      />

      {/* 1. Header */}
      <header className="mt-8 grid gap-8 border-b border-border pb-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="label">Diary Observatory</p>
          <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
            {diary.title}
          </h1>
          <p className="jp-heading mt-3 text-2xl md:text-3xl">
            {diary.titleOriginal}
          </p>
          <p className="mt-4 text-sm text-text-faint">
            <Link
              href="/writers/kafu-nagai"
              className="focus-ring underline-offset-4 hover:underline"
            >
              Kafū Nagai / 永井荷風
            </Link>
          </p>
          <p className="mt-2 text-xs tracking-wide text-text-faint">
            Period: {yearsLabel} · Type: Diary / Daily record · Primary city:
            Tokyo
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {(diary.themes ?? []).map((theme) => (
              <span
                key={theme}
                className="border border-border px-2.5 py-1 text-xs text-text-soft"
              >
                {theme}
              </span>
            ))}
          </div>

          <p className="editorial mt-8 text-xl text-accent md:text-2xl">
            {diary.tagline}
          </p>
          <p className="jp-serif mt-2 text-base text-text-soft">
            {diary.taglineJa}
          </p>

          <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
            {danchoLead.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
            {danchoMetadata.map((m) => (
              <div key={m.label}>
                <dt className="label">{m.label}</dt>
                <dd className="mt-1 text-text-soft">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <DiaryTextPortrait
          titleJa={diary.titleOriginal}
          years={yearsLabel}
          city="TOKYO"
          motifs={["Weather", "Walking", "Garden", "War"]}
        />
      </header>

      {/* 2. What this diary preserves */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          What this diary preserves
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">この日記が残したもの</p>
        <DiaryThemeGrid
          themes={themeIndexes}
          basePath={basePath}
          activeTheme={activeTheme}
        />
        {activeTheme && (
          <div className="mt-6 border border-border-soft px-4 py-4">
            <p className="label">Theme filter · {activeTheme}</p>
            <p className="mt-2 text-sm text-text-soft">
              {activeThemeMeta?.indexedCount ?? 0} indexed entr
              {(activeThemeMeta?.indexedCount ?? 0) === 1 ? "y" : "ies"}
              {" · "}
              <Link href={basePath} className="focus-ring underline-offset-4 hover:underline">
                Clear filter
              </Link>
            </p>
            {filteredIndexed.length === 0 && (
              <p className="mt-2 text-xs text-text-faint">
                Structure ready — no indexed entry for this theme yet.
              </p>
            )}
          </div>
        )}
      </section>

      {/* 3. Forty-two years */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Forty-two years</h2>
        <p className="jp-serif mt-2 text-sm text-accent">四十二年の時間</p>
        <ol className="mt-8 space-y-0 border-l border-border">
          {danchoDecadeTimeline.map((d) => (
            <li key={d.id} className="relative py-5 pl-6">
              <span
                className="absolute left-0 top-7 h-2 w-2 -translate-x-1/2 rounded-full bg-accent"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-center gap-2">
                <p className="editorial text-xl text-text">{d.label}</p>
                <span className="border border-border px-1.5 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
                  {d.verificationStatus === "needs-source"
                    ? "Source needed"
                    : "Partial"}
                </span>
              </div>
              <p className="mt-2 text-sm text-text-soft">{d.title}</p>
              <p className="jp-serif mt-1 text-sm text-text-faint">{d.text}</p>
              <p className="mt-1 text-xs text-text-faint">{d.note}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 4. Indexed entries */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Indexed entries</h2>
        <p className="jp-serif mt-2 text-sm text-accent">索引化された日々</p>

        <article className="mt-8 border border-border-soft px-5 py-5">
          <p className="label">{danchoIndexedEntryCard.dateLabel}</p>
          <p className="jp-serif mt-1 text-sm text-text-faint">
            {danchoIndexedEntryCard.dateLabelJa}
          </p>
          <p className="mt-4 text-sm text-text-soft">
            {danchoIndexedEntryCard.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {danchoIndexedEntryCard.themes.map((t) => (
              <span
                key={t}
                className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs text-text-faint">
            Verification: {danchoIndexedEntryCard.verification}
          </p>
          <p className="mt-1 text-xs text-text-faint">
            Facts {danchoIndexedEntryCard.factCount} · Unknowns{" "}
            {danchoIndexedEntryCard.unknownCount} ·{" "}
            {danchoIndexedEntryCard.badge}
          </p>
          <Link
            href={danchoIndexedEntryCard.href}
            className="focus-ring mt-4 inline-block text-sm text-text underline-offset-4 hover:underline"
          >
            Open excavated day · 発掘済みの一日を見る
          </Link>
        </article>

        <p className="mt-6 text-sm text-text-soft">
          More entries are being indexed.
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          別の日付は現在索引化中。
        </p>

        <DiaryResearchQueue items={danchoResearchQueue} />
      </section>

      {/* 5. Repetition as structure */}
      <section className="mt-16 border-b border-border pb-14">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="editorial text-3xl text-text">
            {danchoRepetitionCopy.title}
          </h2>
          <EpistemicLabel kind={danchoRepetitionCopy.kind} />
        </div>
        <p className="jp-serif mt-2 text-sm text-accent">
          {danchoRepetitionCopy.titleJa}
        </p>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-[0.98rem]">
          {danchoRepetitionCopy.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 6. Repetition index */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Repetition index</h2>
        <p className="jp-serif mt-2 text-sm text-accent">反復する生活の索引</p>
        <RepetitionIndex axes={danchoRepetitionAxes} />
      </section>

      {/* 7. Calendar */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          Calendar of indexed days
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">索引化された日付</p>
        <p className="mt-4 max-w-2xl text-sm text-text-faint">
          Years {yearsLabel}. Entry counts are not invented — only confirmed
          indexed days appear as Indexed.
        </p>
        <DiaryYearGrid
          years={yearGrid}
          yearPathBase={`${basePath}/years`}
          clickableYears={[]}
        />
      </section>

      {/* 8. Weather */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          {danchoWeatherArchive.title}
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {danchoWeatherArchive.titleJa}
        </p>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-[0.98rem]">
          {danchoWeatherArchive.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {danchoWeatherArchive.layers.map((l) => (
            <li key={l.id} className="border border-border-soft px-4 py-3">
              <p className="text-sm text-text-soft">{l.label}</p>
              <p className="jp-serif mt-1 text-xs text-text-faint">{l.labelJa}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-text-soft">
          {danchoWeatherArchive.statusEn}
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          {danchoWeatherArchive.statusJa}
        </p>
        <p className="mt-3 text-xs text-text-faint">
          {danchoWeatherArchive.caution}
        </p>
      </section>

      {/* 9. Body */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">{danchoBodyArchive.title}</h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {danchoBodyArchive.titleJa}
        </p>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-[0.98rem]">
          {danchoBodyArchive.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {danchoBodyArchive.axes.map((a) => (
            <li
              key={a.id}
              className="border border-border px-2.5 py-1 text-xs text-text-soft"
            >
              {a.label}
              <span className="text-text-faint"> / {a.labelJa}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-text-soft">
          {danchoBodyArchive.statusEn}
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          {danchoBodyArchive.statusJa}
        </p>
      </section>

      {/* 10. Tokyo layers */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">{danchoUrbanCopy.title}</h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {danchoUrbanCopy.titleJa}
        </p>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-[0.98rem]">
          {danchoUrbanCopy.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <CityLayerTimeline layers={danchoUrbanLayers} />
      </section>

      {/* 11. Places */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Places in the diary</h2>
        <p className="jp-serif mt-2 text-sm text-accent">日記に登場する場所</p>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {danchoPlaces.map((place) => {
            const entity = entityById.get(place.id);
            const count = entryCountByEntity(place.id);
            const vLabel =
              VERIFICATION_LABELS[
                place.verificationStatus === "verified"
                  ? "verified"
                  : "needs-source"
              ];
            return (
              <li
                key={place.id}
                className="border border-border-soft px-4 py-4"
              >
                <p className="editorial text-lg text-text">{place.name}</p>
                <p className="jp-serif text-sm text-accent">{place.nameJa}</p>
                <p className="mt-2 text-xs text-text-faint">Type: {place.type}</p>
                <p className="mt-1 text-sm text-text-soft">{place.relationship}</p>
                <p className="mt-1 text-xs text-text-faint">
                  Period: {place.period}
                </p>
                <p className="mt-1 text-xs text-text-faint">
                  Current: {entity?.status ?? place.currentStatusNote}
                </p>
                <p className="mt-1 text-xs text-text-faint">
                  Verification: {vLabel.en}
                </p>
                <p className="mt-1 text-xs text-text-faint">
                  Indexed entry count: {count}
                </p>
                {place.coming || !place.href ? (
                  <p className="mt-3 text-xs text-text-faint">Coming entity</p>
                ) : (
                  <Link
                    href={place.href}
                    className="focus-ring mt-3 inline-block text-sm underline-offset-4 hover:underline"
                  >
                    View entity
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* 12. People */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">People in the diary</h2>
        <p className="jp-serif mt-2 text-sm text-accent">日記に登場する人々</p>
        <p className="mt-6 text-sm text-text-soft">
          People indexing in progress
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          確認済みの人物データが揃うまで、架空の人名は追加しない。
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {danchoPeopleCategories.map((c) => (
            <li
              key={c.id}
              className="border border-border px-2.5 py-1 text-xs text-text-faint"
            >
              {c.label} / {c.labelJa}
            </li>
          ))}
        </ul>
      </section>

      {/* 13. War */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">{danchoWarCopy.title}</h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {danchoWarCopy.titleJa}
        </p>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-[0.98rem]">
          {danchoWarCopy.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {danchoWarCopy.phases.map((ph) => (
            <li
              key={ph.id}
              className="border border-border-soft px-3 py-3 text-sm"
            >
              <p className="text-text-soft">{ph.label}</p>
              <p className="jp-serif text-xs text-text-faint">{ph.labelJa}</p>
              <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
                Research queue
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 14. What survived */}
      <section className="mt-16 border-b border-border pb-14">
        <div className="jp-body mb-8 max-w-2xl space-y-3 text-[0.98rem]">
          {danchoSurvivalCopy.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="mb-8 flex flex-wrap gap-2">
          {danchoSurvivalCopy.categories.map((c) => (
            <li
              key={c.id}
              className="border border-border px-2.5 py-1 text-xs text-text-faint"
            >
              {c.label} / {c.labelJa}
            </li>
          ))}
        </ul>
        <SurvivalSummary data={worldStatus} />
        <p className="mt-4 text-xs text-text-faint">
          Counts from indexed place entities only — no invented totals.
        </p>
      </section>

      {/* 15. Same Day */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          Across the same day and date
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          同じ日と、同じ月日を横断する
        </p>
        <ul className="mt-8 space-y-3">
          {danchoSameDayLinks.map((item) => (
            <li
              key={item.id}
              className="flex flex-wrap items-baseline justify-between gap-2 border border-border-soft px-4 py-3"
            >
              <div>
                <p className="text-sm text-text-soft">{item.label}</p>
                <p className="mt-1 text-[0.65rem] tracking-wide text-text-faint">
                  {item.kind === "related-date"
                    ? "Related Date"
                    : item.kind === "same-day"
                      ? "Same Day"
                      : item.kind === "research"
                        ? "Research"
                        : "Future"}
                  {" · "}
                  {item.status}
                </p>
              </div>
              {item.href ? (
                <Link
                  href={item.href}
                  className="focus-ring text-sm underline-offset-4 hover:underline"
                >
                  Open
                </Link>
              ) : (
                <span className="text-xs text-text-faint">{item.status}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* 16. Comparison */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">{danchoComparison.title}</h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {danchoComparison.titleJa}
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="border border-border-soft px-4 py-4">
            <p className="label">Left</p>
            <p className="editorial mt-2 text-xl text-text">
              {danchoComparison.left.title}
            </p>
            <p className="mt-1 text-sm text-text-faint">
              {danchoComparison.left.period}
            </p>
          </div>
          <div className="border border-border-soft px-4 py-4">
            <p className="label">Right</p>
            <p className="editorial mt-2 text-xl text-text">
              {danchoComparison.right.title}
            </p>
            <p className="mt-1 text-sm text-text-faint">
              {danchoComparison.right.period}
            </p>
          </div>
        </div>
        <ul className="mt-6 space-y-2">
          {danchoComparison.axes.map((ax) => (
            <li
              key={ax.id}
              className="grid gap-1 border-b border-border-soft py-3 text-sm md:grid-cols-[8rem_1fr_1fr]"
            >
              <span className="text-text-faint">{ax.label}</span>
              <span className="text-text-soft">{ax.left}</span>
              <span className="text-text-soft">{ax.right}</span>
            </li>
          ))}
        </ul>
        <Link
          href={danchoComparison.href}
          className="focus-ring mt-6 inline-block text-sm underline-offset-4 hover:underline"
        >
          Open comparison
        </Link>
      </section>

      {/* 17. Editions */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          Primary text and editions
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">原典と刊行版</p>
        <p className="mt-4 max-w-2xl text-sm text-text-faint">
          作品自体の権利状態と、現代版の編集著作権を分ける。架空のISBN・出版社・URLは置かない。
        </p>
        <ul className="mt-8 space-y-3">
          {danchoEditions.map((ed) => (
            <li key={ed.id} className="border border-border-soft px-4 py-3">
              <p className="text-sm text-text-soft">
                {ed.label}
                <span className="text-text-faint"> / {ed.labelJa}</span>
              </p>
              <p className="mt-1 text-xs text-text-faint">{ed.note}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 18. Editorial method */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          How this diary is indexed
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          この日記をどう索引化するか
        </p>
        <DiaryEditorialMethod steps={danchoEditorialSteps} />
      </section>

      {/* 19. Indexing status */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Indexing status</h2>
        <p className="jp-serif mt-2 text-sm text-accent">索引化の状況</p>
        <DiaryIndexingStatus
          stats={[
            {
              label: "Indexed entries",
              labelJa: "索引済みEntry",
              count: indexedEntries.length,
            },
            {
              label: "Indexed years",
              labelJa: "索引済み年",
              count: indexedYearsCount,
            },
            {
              label: "Indexed entities",
              labelJa: "索引済みEntity",
              count: placeEntities.length,
            },
            {
              label: "Verified sources",
              labelJa: "確認済み出典",
              count: danchoSources.filter((s) => s.status === "verified")
                .length,
            },
            {
              label: "Source-needed items",
              labelJa: "出典要確認",
              count: sourceNeededCount,
            },
            {
              label: "Research queue",
              labelJa: "調査キュー",
              count: danchoResearchQueue.length,
            },
          ]}
        />
      </section>

      {/* 20. Related observations */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Related Observations</h2>
        <p className="jp-serif mt-2 text-sm text-accent">関連する観測</p>
        <ul className="mt-8 space-y-3">
          {danchoRelatedObservations.published.map((o) => (
            <li key={o.href}>
              <Link
                href={o.href}
                className="focus-ring block border border-border-soft px-4 py-4 hover:border-text-faint"
              >
                <p className="label">Published</p>
                <p className="editorial mt-2 text-xl text-text">{o.title}</p>
                <p className="jp-serif mt-1 text-sm text-text-soft">
                  {o.subtitle}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="label mt-8">Coming</h3>
        <ul className="mt-3 space-y-2">
          {danchoRelatedObservations.coming.map((title) => (
            <li
              key={title}
              className="border border-border-soft px-4 py-3 text-sm text-text-faint"
            >
              {title}
            </li>
          ))}
        </ul>
      </section>

      {/* 21. Sources — grouped + type notes */}
      <section className="mt-16">
        <h2 className="editorial text-3xl text-text">Sources</h2>
        <p className="jp-serif mt-2 text-sm text-accent">出典</p>
        <ul className="mt-8 space-y-3">
          {danchoSources.map((s) => (
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
          <CategorizedSourceList sources={danchoSources} />
        </div>
      </section>

    </div>
  );
}
