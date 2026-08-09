import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { ConceptBlock } from "@/components/ConceptBlock";
import { EntityStatusBadge } from "@/components/EntityStatusBadge";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { ComparisonBreadcrumb } from "@/components/compare/ComparisonBreadcrumb";
import { IndexedDaysTriptych } from "@/components/compare/IndexedDaysTriptych";
import { ThreeCitiesPanel } from "@/components/compare/ThreeCitiesPanel";
import { ThreeLifeSpeeds } from "@/components/compare/ThreeLifeSpeeds";
import { ThreeLiterarySystems } from "@/components/compare/ThreeLiterarySystems";
import { ThreeWriterComparisonMatrix } from "@/components/compare/ThreeWriterComparisonMatrix";
import { ThreeWriterHeader } from "@/components/compare/ThreeWriterHeader";
import { ThreeWritingBodies } from "@/components/compare/ThreeWritingBodies";
import { UrbanConditionComparison } from "@/components/compare/UrbanConditionComparison";
import { EntityNatureBadge } from "@/components/writers/EntityNatureBadge";
import { LifeTextFictionPanel } from "@/components/writers/LifeTextFictionPanel";
import {
  BUKOWSKI_ID,
  KAFU_ID,
  NISHIMURA_ID,
  alcoholWithoutMyth,
  centralProposition,
  comparisonLead,
  comparisonMeta,
  comparisonSources,
  comparisonStatusCopy,
  cultureTransition,
  dayPrice,
  dayShapes,
  disappearedSection,
  excavationConcept,
  indexedDays,
  lifeSpeedPatterns,
  lifeSpeedsCopy,
  literarySystems,
  literarySystemsCopy,
  livedRecorded,
  matrixColumns,
  movementSection,
  relatedComparisons,
  relatedEntityIds,
  relatedObservations,
  relatedPages,
  remainedSection,
  repetitionSection,
  researchQueues,
  sameDayPossibility,
  threeCities,
  threeWriterMatrixRows,
  threeWritersCards,
  urbanDiaristsComparison,
  writingBodiesCopy,
} from "@/data/comparisons/urban-diarists";
import { getDiariesByWriter } from "@/data/diaries";
import { getEntitiesByIds } from "@/data/entities";
import { getEntriesByWork } from "@/data/entries";
import type { Entity, EntityStatus } from "@/lib/types";

function EntityList({
  title,
  entities,
  showNature,
}: {
  title: string;
  entities: Entity[];
  showNature?: boolean;
}) {
  return (
    <div>
      <p className="label">{title}</p>
      <ul className="mt-4 space-y-2">
        {entities.map((entity) => (
          <li key={entity.id}>
            <Link
              href={`/entities/${entity.slug}`}
              className="focus-ring flex flex-wrap items-center justify-between gap-2 border border-border px-3 py-2 text-sm hover:border-text-faint"
            >
              <span className="text-text-soft">
                {entity.nameOriginal ?? entity.name}
              </span>
              <span className="flex flex-wrap items-center gap-1">
                {showNature && entity.nature && (
                  <EntityNatureBadge nature={entity.nature} />
                )}
                {!showNature && (
                  <EntityStatusBadge status={entity.status} size="sm" />
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="border border-border-soft px-4 py-3">
      <dt className="label">{label}</dt>
      <dd className="editorial mt-1 text-3xl text-text">{value}</dd>
    </div>
  );
}

function countByStatus(entities: Entity[]) {
  return entities.reduce(
    (acc, e) => {
      acc[e.status] = (acc[e.status] ?? 0) + 1;
      return acc;
    },
    {} as Partial<Record<EntityStatus, number>>,
  );
}

export function UrbanDiaristsObservatory() {
  const meta = urbanDiaristsComparison;
  const kafuEntities = getEntitiesByIds(relatedEntityIds.kafu);
  const nishimuraEntities = getEntitiesByIds(relatedEntityIds.nishimura);
  const bukowskiReal = getEntitiesByIds(relatedEntityIds.bukowskiReal);
  const bukowskiFictional = getEntitiesByIds(
    relatedEntityIds.bukowskiFictional,
  );
  const allReal = [...kafuEntities, ...nishimuraEntities, ...bukowskiReal];

  const kafuEntries = getEntriesByWork("diary-kafu-dancho").filter((e) => e.slug);
  const nishimuraEntries = getEntriesByWork("diary-nishimura-nichijo").filter(
    (e) => e.slug,
  );
  const bukowskiEntries = getEntriesByWork("diary-bukowski-captain").filter(
    (e) => e.slug,
  );
  const indexedEntryCount =
    kafuEntries.length + nishimuraEntries.length + bukowskiEntries.length;

  const diaryWorkCount =
    getDiariesByWriter(KAFU_ID).length +
    getDiariesByWriter(NISHIMURA_ID).length +
    getDiariesByWriter(BUKOWSKI_ID).length;

  const verifiedSources = comparisonSources.filter(
    (s) => s.status === "verified",
  ).length;
  const sourcesNeeded = comparisonSources.filter(
    (s) =>
      s.needed ||
      s.status === "needed" ||
      s.status === "verification-pending" ||
      s.status === "primary-unavailable",
  ).length;
  const unknownFields = threeWriterMatrixRows.filter((row) =>
    Object.values(row.verificationStatusByWriterId).some(
      (v) => v === "unknown" || v === "not-indexed",
    ),
  ).length;

  const statusCounts = countByStatus(allReal);

  const writerNames: Record<string, string> = {
    [KAFU_ID]: "Kafū Nagai",
    [NISHIMURA_ID]: "Kenji Nishimura",
    [BUKOWSKI_ID]: "Charles Bukowski",
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <ComparisonBreadcrumb label={meta.title} />

      {/* 1. Header */}
      <header className="mt-8 border-b border-border pb-12">
        <p className="label">Comparative Observatory</p>
        <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
          {meta.title}
        </h1>
        <p className="jp-heading mt-3 text-2xl md:text-3xl">{meta.titleJa}</p>
        <p className="editorial mt-6 text-xl text-accent">{meta.subtitle}</p>
        <p className="jp-serif mt-2 text-base text-text-soft">
          {meta.subtitleJa}
        </p>
        <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
          {comparisonLead.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="label">Writers</dt>
            <dd className="mt-1 text-text-soft">{comparisonMeta.writers}</dd>
          </div>
          <div>
            <dt className="label">Cities</dt>
            <dd className="mt-1 text-text-soft">{comparisonMeta.cities}</dd>
          </div>
          <div>
            <dt className="label">Countries</dt>
            <dd className="mt-1 text-text-soft">{comparisonMeta.countries}</dd>
          </div>
          <div>
            <dt className="label">Primary periods</dt>
            <dd className="mt-1 text-text-soft">{comparisonMeta.periods}</dd>
          </div>
          <div>
            <dt className="label">Comparison status</dt>
            <dd className="mt-1 text-text-soft">
              {comparisonMeta.comparisonStatus}
            </dd>
          </div>
          <div>
            <dt className="label">Verification status</dt>
            <dd className="mt-1 text-text-soft">
              {comparisonMeta.verificationStatus}
            </dd>
          </div>
          <div>
            <dt className="label">Last updated</dt>
            <dd className="mt-1 text-text-soft">
              {comparisonMeta.lastUpdated}
            </dd>
          </div>
        </dl>
        <div className="mt-6 flex flex-wrap gap-2">
          {meta.themes.map((theme) => (
            <span
              key={theme}
              className="border border-border px-2.5 py-1 text-xs text-text-soft"
            >
              {theme}
            </span>
          ))}
        </div>
      </header>

      {/* 2. Three writers */}
      <section className="my-14">
        <ThreeWriterHeader cards={threeWritersCards} />
      </section>

      {/* 3. Central proposition */}
      <ConceptBlock
        title={centralProposition.title}
        titleJa={centralProposition.titleJa}
        paragraphs={centralProposition.paragraphs}
      />

      {/* 4. Three cities */}
      <section className="my-14 border-b border-border pb-14">
        <ThreeCitiesPanel {...threeCities} />
      </section>

      {/* 5. Life speeds */}
      <section className="my-14 border-b border-border pb-14">
        <ThreeLifeSpeeds
          title={lifeSpeedsCopy.title}
          titleJa={lifeSpeedsCopy.titleJa}
          patterns={lifeSpeedPatterns}
          noteEn={lifeSpeedsCopy.noteEn}
          noteJa={lifeSpeedsCopy.noteJa}
          caution={lifeSpeedsCopy.caution}
        />
      </section>

      {/* 6. Matrix */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Comparative matrix
        </h2>
        <p className="jp-heading mt-2 text-lg">比較表</p>
        <p className="mt-3 max-w-2xl text-xs text-text-faint">
          Unknown / Not indexed / Source needed are stated explicitly.
        </p>
        <div className="mt-8">
          <ThreeWriterComparisonMatrix
            columns={matrixColumns}
            rows={threeWriterMatrixRows}
          />
        </div>
      </section>

      {/* 7. What shapes a day */}
      <section className="my-14 border-b border-border pb-14">
        <UrbanConditionComparison {...dayShapes} />
      </section>

      {/* 8. Literary systems */}
      <section className="my-14 border-b border-border pb-14">
        <ThreeLiterarySystems
          title={literarySystemsCopy.title}
          titleJa={literarySystemsCopy.titleJa}
          systems={literarySystems}
          labels={{
            [KAFU_ID]: "Kafū",
            [NISHIMURA_ID]: "Nishimura",
            [BUKOWSKI_ID]: "Bukowski",
          }}
          paragraphs={literarySystemsCopy.paragraphs}
        />
      </section>

      {/* 9. Movement */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {movementSection.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{movementSection.titleJa}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {movementSection.items.map((item) => (
            <div
              key={item.writerId}
              className="border border-border-soft px-4 py-4"
            >
              <p className="label">{item.label}</p>
              <p className="editorial mt-3 text-lg text-text">{item.text}</p>
              <p className="jp-serif mt-1 text-sm text-text-soft">
                {item.textJa}
              </p>
            </div>
          ))}
        </div>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
          {movementSection.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 10. Writing bodies */}
      <section className="my-14 border-b border-border pb-14">
        <ThreeWritingBodies
          title={writingBodiesCopy.title}
          titleJa={writingBodiesCopy.titleJa}
          columns={[
            {
              writerId: KAFU_ID,
              label: "Kafū",
              items: writingBodiesCopy.itemsByWriter[KAFU_ID],
            },
            {
              writerId: NISHIMURA_ID,
              label: "Nishimura",
              items: writingBodiesCopy.itemsByWriter[NISHIMURA_ID],
            },
            {
              writerId: BUKOWSKI_ID,
              label: "Bukowski",
              items: writingBodiesCopy.itemsByWriter[BUKOWSKI_ID],
            },
          ]}
          paragraphs={writingBodiesCopy.paragraphs}
        />
      </section>

      {/* 11. Day price */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {dayPrice.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{dayPrice.titleJa}</p>
        <ul className="mt-8 space-y-3">
          {dayPrice.axes.map((axis) => (
            <li
              key={axis.id}
              className="grid gap-2 border-b border-border-soft py-4 text-sm md:grid-cols-[10rem_1fr_1fr_1fr]"
            >
              <div>
                <p className="text-text-soft">{axis.label}</p>
                <p className="jp-serif text-xs text-text-faint">{axis.labelJa}</p>
              </div>
              <p className="text-text-faint">
                Kafū: {dayPrice.valueByWriterId[KAFU_ID]}
              </p>
              <p className="text-text-faint">
                Nishimura: {dayPrice.valueByWriterId[NISHIMURA_ID]}
              </p>
              <p className="text-text-faint">
                Bukowski: {dayPrice.valueByWriterId[BUKOWSKI_ID]}
              </p>
            </li>
          ))}
        </ul>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
          {dayPrice.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-4 text-xs text-text-faint">{dayPrice.note}</p>
      </section>

      {/* 12. Alcohol */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {alcoholWithoutMyth.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{alcoholWithoutMyth.titleJa}</p>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-[0.98rem]">
          {alcoholWithoutMyth.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="mt-8 space-y-3">
          {alcoholWithoutMyth.layers.map((layer) => (
            <li key={layer.kind} className="border border-border-soft px-4 py-3">
              <EpistemicLabel kind={layer.kind} />
              <p className="mt-2 text-sm text-text-soft">{layer.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-text-faint">
          {alcoholWithoutMyth.caution}
        </p>
      </section>

      {/* 13. Repetition */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {repetitionSection.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{repetitionSection.titleJa}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {repetitionSection.items.map((item) => (
            <div
              key={item.writerId}
              className="border border-border-soft px-4 py-4"
            >
              <p className="label">{item.label}</p>
              <p className="mt-3 text-sm text-text-soft">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
          {repetitionSection.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 14. Disappeared */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {disappearedSection.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{disappearedSection.titleJa}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {disappearedSection.categories.map((cat) => (
            <div
              key={cat.writerId}
              className="border border-border-soft px-4 py-4"
            >
              <p className="label">{cat.label}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-text-soft">
                {cat.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-text-faint">{disappearedSection.note}</p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <EntityList title="Kafū entities" entities={kafuEntities} />
          <EntityList title="Nishimura entities" entities={nishimuraEntities} />
          <div className="space-y-8">
            <EntityList title="Bukowski entities (real)" entities={bukowskiReal} />
            <EntityList
              title="Bukowski (fictional)"
              entities={bukowskiFictional}
              showNature
            />
          </div>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2 text-xs text-text-faint">
          {(
            [
              "existing",
              "closed",
              "demolished",
              "destroyed",
              "rebuilt",
              "renamed",
              "transformed",
              "ended",
              "deceased",
              "unknown",
            ] as EntityStatus[]
          ).map((status) => (
            <li key={status} className="border border-border px-2 py-1">
              {status}: {statusCounts[status] ?? 0}
            </li>
          ))}
        </ul>
      </section>

      {/* 15. Remained */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {remainedSection.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{remainedSection.titleJa}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {remainedSection.layers.map((layer) => (
            <li
              key={layer.label}
              className="border border-border-soft px-4 py-4"
            >
              <p className="editorial text-lg text-text">{layer.label}</p>
              <p className="jp-serif text-xs text-accent">{layer.labelJa}</p>
              <p className="mt-2 text-sm text-text-soft">{layer.text}</p>
            </li>
          ))}
        </ul>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
          {remainedSection.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 16. Lived / Recorded / Fictionalized */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {livedRecorded.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{livedRecorded.titleJa}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {livedRecorded.columns.map((col) => (
            <div
              key={col.writerId}
              className="space-y-4 border border-border-soft px-4 py-4"
            >
              <p className="label">{col.label}</p>
              <Layer label="Lived" items={col.lived} />
              <Layer label="Recorded" items={col.recorded} />
              <Layer label="Fictionalized" items={col.fictionalized} />
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-xs text-text-faint">
          {livedRecorded.caution}
        </p>
        <div className="mt-10">
          <LifeTextFictionPanel
            title="Life–text relations (Bukowski)"
            titleJa="生活とテクストの関係（ブコウスキー）"
            lived={{
              label: "Lived",
              labelJa: "生きられたもの",
              items: livedRecorded.columns.find((c) => c.writerId === BUKOWSKI_ID)!
                .lived,
            }}
            written={{
              label: "Recorded",
              labelJa: "記録されたもの",
              items: livedRecorded.columns.find((c) => c.writerId === BUKOWSKI_ID)!
                .recorded,
            }}
            fictionalized={{
              label: "Fictionalized",
              labelJa: "フィクション化されたもの",
              items: livedRecorded.columns.find((c) => c.writerId === BUKOWSKI_ID)!
                .fictionalized,
            }}
            caution="Henry Chinaski is fictional (EntityNature). Do not equate life and text one-to-one."
            relations={livedRecorded.relations}
          />
        </div>
      </section>

      {/* 17. Indexed days */}
      <section className="my-14 border-b border-border pb-14">
        <IndexedDaysTriptych
          title={indexedDays.title}
          titleJa={indexedDays.titleJa}
          note={indexedDays.note}
          days={indexedDays.days.map((d) => ({
            ...d,
            writerName: writerNames[d.writerId] ?? d.writerId,
          }))}
        />
      </section>

      {/* 18. Same Day possibility */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {sameDayPossibility.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{sameDayPossibility.titleJa}</p>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
          {sameDayPossibility.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="mt-8 space-y-2">
          {sameDayPossibility.slots.map((slot) => (
            <li
              key={slot.city}
              className="flex flex-wrap items-baseline justify-between gap-2 border border-border-soft px-4 py-3 text-sm"
            >
              <span className="text-text-soft">{slot.city}</span>
              <span className="text-xs text-text-faint">{slot.status}</span>
            </li>
          ))}
        </ul>
        <Link
          href={sameDayPossibility.href}
          className="focus-ring mt-8 inline-flex border border-text bg-text px-4 py-2 text-xs text-bg"
        >
          {sameDayPossibility.cta}
        </Link>
      </section>

      {/* 19. Culture transition */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {cultureTransition.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{cultureTransition.titleJa}</p>
        <ol className="mt-8 flex flex-col">
          {cultureTransition.steps.map((step, index) => (
            <li key={step} className="flex flex-col items-start">
              <span className="border border-border px-4 py-3 text-sm text-text-soft">
                {step}
              </span>
              {index < cultureTransition.steps.length - 1 && (
                <span className="px-4 py-1 text-xs text-accent" aria-hidden>
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
          {cultureTransition.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 20. Excavation */}
      <ConceptBlock
        title={excavationConcept.title}
        titleJa={excavationConcept.titleJa}
        paragraphs={excavationConcept.paragraphs}
      />

      {/* 21. Status */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {comparisonStatusCopy.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{comparisonStatusCopy.titleJa}</p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Stat label="Indexed writers" value={3} />
          <Stat label="Indexed diary works" value={diaryWorkCount} />
          <Stat label="Indexed entries" value={indexedEntryCount} />
          <Stat label="Real entities" value={allReal.length} />
          <Stat label="Fictional entities" value={bukowskiFictional.length} />
          <Stat label="Verified sources" value={verifiedSources} />
          <Stat label="Source-needed items" value={sourcesNeeded} />
          <Stat label="Unknown fields" value={unknownFields} />
          <Stat label="Research queues" value={researchQueues.length} />
        </dl>
        <p className="mt-6 max-w-2xl text-sm text-text-soft">
          {comparisonStatusCopy.noteEn}
        </p>
        <p className="jp-serif mt-2 max-w-2xl text-sm text-text-faint">
          {comparisonStatusCopy.noteJa}
        </p>
      </section>

      {/* 22. Related comparisons */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Related comparisons
        </h2>
        <ul className="mt-8 space-y-3">
          {relatedComparisons.published.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
              >
                <p className="editorial text-xl">{c.title}</p>
                <p className="jp-serif mt-1 text-sm text-text-soft">
                  {c.titleJa}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="label mt-8">Future</h3>
        <ul className="mt-3 space-y-2">
          {relatedComparisons.coming.map((c) => (
            <li
              key={c.title}
              className="border border-dashed border-border px-4 py-3 text-sm text-text-faint"
            >
              <p>{c.title}</p>
              <p className="mt-1 text-xs">{c.subtitle}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 23. Observations */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Related Observations
        </h2>
        <ul className="mt-8 space-y-3">
          {relatedObservations.published.map((o) => (
            <li key={o.href}>
              <Link
                href={o.href}
                className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
              >
                <p className="label">Published</p>
                <p className="editorial mt-2 text-xl">{o.title}</p>
                <p className="jp-serif mt-1 text-sm text-text-soft">
                  {o.subtitle}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="label mt-8">Coming</h3>
        <ul className="mt-3 space-y-2">
          {relatedObservations.coming.map((title) => (
            <li
              key={title}
              className="border border-dashed border-border px-4 py-3 text-sm text-text-faint"
            >
              {title}
            </li>
          ))}
        </ul>
      </section>

      {/* 24. Sources */}
      <CategorizedSourceList sources={comparisonSources} />

      {/* Related pages */}
      <section className="my-14">
        <h2 className="editorial text-2xl text-text">Related pages</h2>
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

function Layer({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs tracking-wide text-text-faint">{label}</p>
      <ul className="mt-1 space-y-1 text-sm text-text-soft">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
