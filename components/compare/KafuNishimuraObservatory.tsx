import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { ConceptBlock } from "@/components/ConceptBlock";
import { EntityStatusBadge } from "@/components/EntityStatusBadge";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { ComparisonBreadcrumb } from "@/components/compare/ComparisonBreadcrumb";
import { ComparisonStatusSummary } from "@/components/compare/ComparisonStatusSummary";
import { CulturalEcosystemComparison } from "@/components/compare/CulturalEcosystemComparison";
import { ParallelDayCard } from "@/components/compare/ParallelDayCard";
import { WriterComparisonMatrix } from "@/components/compare/WriterComparisonMatrix";
import {
  KAFU_ID,
  NISHIMURA_ID,
  bodySection,
  comparisonLead,
  comparisonSources,
  dayShapes,
  diaryPreservesConcept,
  disappearedCopy,
  excavationConcept,
  foodMoney,
  historyBeforeConcept,
  kafuNishimuraComparison,
  movementSection,
  parallelDays,
  publishingEcosystems,
  relatedEntityIds,
  relatedObservations,
  relatedPages,
  remainedSection,
  sharedToPersonalized,
  twoWritersCards,
  weatherMedia,
  writerComparisonMatrixRows,
} from "@/data/comparisons/kafu-nishimura";
import { getEntitiesByIds } from "@/data/entities";
import { getEntriesByWork } from "@/data/entries";
import type { Entity, EntityStatus } from "@/lib/types";

const DISAPPEARANCE_STATUSES: EntityStatus[] = [
  "closed",
  "demolished",
  "destroyed",
  "rebuilt",
  "renamed",
  "transformed",
  "ended",
  "deceased",
  "unknown",
  "existing",
];

function FlowList({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-4 flex flex-col">
      {steps.map((step, index) => (
        <li key={step} className="flex flex-col items-start">
          <span className="border border-border px-3 py-2 text-sm text-text-soft">
            {step}
          </span>
          {index < steps.length - 1 && (
            <span className="px-3 py-1 text-xs text-accent" aria-hidden="true">
              ↓
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

function EntitySideList({
  title,
  entities,
}: {
  title: string;
  entities: Entity[];
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
              <EntityStatusBadge status={entity.status} size="sm" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function KafuNishimuraObservatory() {
  const meta = kafuNishimuraComparison;
  const kafuEntities = getEntitiesByIds(relatedEntityIds.kafu);
  const nishimuraEntities = getEntitiesByIds(relatedEntityIds.nishimura);
  const allRelated = [...kafuEntities, ...nishimuraEntities];

  const kafuEntries = getEntriesByWork("diary-kafu-dancho");
  const nishimuraEntries = getEntriesByWork("diary-nishimura-nichijo");

  const matrixVerified = writerComparisonMatrixRows.filter((row) =>
    Object.values(row.verificationStatusByWriterId).every(
      (v) => v === "verified",
    ),
  ).length;
  const matrixPartial = writerComparisonMatrixRows.filter((row) =>
    Object.values(row.verificationStatusByWriterId).some(
      (v) => v === "partial" || v === "needs-source",
    ),
  ).length;
  const unknownEntities = allRelated.filter((e) => e.status === "unknown").length;
  const sourcesNeeded =
    comparisonSources.filter((s) => s.needed || s.status === "needed").length +
    allRelated.filter((e) => e.sourceNeeded).length;

  const disappearedByStatus = DISAPPEARANCE_STATUSES.map((status) => ({
    status,
    kafu: kafuEntities.filter((e) => e.status === status),
    nishimura: nishimuraEntities.filter((e) => e.status === status),
  })).filter((bucket) => bucket.kafu.length > 0 || bucket.nishimura.length > 0);

  const matrixColumns = [
    { writerId: KAFU_ID, label: "Kafū Nagai", labelJa: "永井荷風" },
    {
      writerId: NISHIMURA_ID,
      label: "Kenji Nishimura",
      labelJa: "西村賢太",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <ComparisonBreadcrumb label="Kafū and Nishimura" />

      {/* 1. Header */}
      <header className="mt-8 border-b border-border pb-12">
        <p className="label">Comparative Observatory</p>
        <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
          {meta.title}
        </h1>
        <p className="jp-heading mt-3 text-2xl md:text-3xl">{meta.titleJa}</p>
        <p className="editorial mt-6 text-xl text-accent md:text-2xl">
          {meta.subtitle}
        </p>
        <p className="jp-serif mt-2 text-base text-text-soft">{meta.subtitleJa}</p>

        <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
          {comparisonLead.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {meta.themes.map((theme) => (
            <li
              key={theme}
              className="border border-border px-2.5 py-1 text-[0.7rem] tracking-wide text-text-faint"
            >
              {theme}
            </li>
          ))}
        </ul>

        <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="label">Writers</dt>
            <dd className="mt-1 text-text-soft">2</dd>
          </div>
          <div>
            <dt className="label">Cities</dt>
            <dd className="mt-1 text-text-soft">Tokyo</dd>
          </div>
          <div>
            <dt className="label">Primary diaries</dt>
            <dd className="mt-1 text-text-soft">2</dd>
          </div>
          <div>
            <dt className="label">Periods observed</dt>
            <dd className="mt-1 text-text-soft">1917–1959 / Late Heisei</dd>
          </div>
          <div>
            <dt className="label">Comparison status</dt>
            <dd className="mt-1 text-text-soft">Active</dd>
          </div>
          <div>
            <dt className="label">Verification status</dt>
            <dd className="mt-1 text-text-soft">Partial</dd>
          </div>
          <div>
            <dt className="label">Last updated</dt>
            <dd className="mt-1 text-text-soft">{meta.lastUpdated}</dd>
          </div>
        </dl>
      </header>

      {/* 2. Two writers */}
      <section className="my-14" aria-labelledby="two-writers">
        <h2
          id="two-writers"
          className="editorial text-2xl text-text md:text-3xl"
        >
          Two writers, two Tokyos
        </h2>
        <p className="jp-heading mt-2 text-lg">二人の作家、二つの東京</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[twoWritersCards.kafu, twoWritersCards.nishimura].map((card) => (
            <article
              key={card.writerId}
              className="flex h-full flex-col border border-border px-6 py-6"
            >
              <h3 className="editorial text-2xl text-text">{card.name}</h3>
              <p className="jp-heading mt-1 text-lg">{card.nameJa}</p>
              <p className="mt-3 text-sm text-text-faint">{card.years}</p>
              <p className="mt-4 text-xs text-text-faint">
                Primary diary: {card.primaryDiary}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {card.keywords.map((kw) => (
                  <li
                    key={kw}
                    className="border border-border-soft px-2 py-0.5 text-[0.65rem] text-text-faint"
                  >
                    {kw}
                  </li>
                ))}
              </ul>
              <p className="editorial mt-6 text-base text-accent">
                {card.tagline}
              </p>
              <p className="jp-serif mt-2 text-sm text-text-soft">
                {card.taglineJa}
              </p>
              <Link
                href={card.href}
                className="focus-ring mt-auto pt-8 inline-flex border border-text bg-text px-4 py-2 text-xs text-bg self-start"
              >
                View {card.name}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Concept */}
      <ConceptBlock
        title={diaryPreservesConcept.title}
        titleJa={diaryPreservesConcept.titleJa}
        paragraphs={diaryPreservesConcept.paragraphs}
      />

      {/* 4. Matrix */}
      <section className="my-14" aria-labelledby="matrix">
        <h2 id="matrix" className="editorial text-2xl text-text md:text-3xl">
          Comparison matrix
        </h2>
        <p className="jp-heading mt-2 text-lg">比較表</p>
        <p className="mt-3 max-w-2xl text-xs text-text-faint">
          Unknown / Not indexed are stated explicitly. No invented fill-ins.
        </p>
        <div className="mt-8">
          <WriterComparisonMatrix
            columns={matrixColumns}
            rows={writerComparisonMatrixRows}
          />
        </div>
      </section>

      {/* 5. Day shapes */}
      <section className="my-14" aria-labelledby="day-shapes">
        <h2
          id="day-shapes"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {dayShapes.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{dayShapes.titleJa}</p>
        <div className="mt-3">
          <EpistemicLabel kind={dayShapes.layer} />
        </div>
        <p className="mt-3 text-xs text-text-faint">{dayShapes.note}</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="label">Kafū</p>
            <FlowList steps={dayShapes.kafu} />
          </div>
          <div>
            <p className="label">Nishimura</p>
            <FlowList steps={dayShapes.nishimura} />
          </div>
        </div>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
          {dayShapes.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 6. Movement */}
      <section className="my-14" aria-labelledby="movement">
        <h2 id="movement" className="editorial text-2xl text-text md:text-3xl">
          {movementSection.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{movementSection.titleJa}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <p className="label">Kafū</p>
            <ul className="mt-4 space-y-2">
              {movementSection.kafu.map((item) => (
                <li
                  key={item.label}
                  className="border border-border-soft px-3 py-2 text-sm"
                >
                  <span className="text-text-soft">{item.label}</span>
                  <span className="jp-serif ml-2 text-xs text-text-faint">
                    {item.labelJa}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">Nishimura</p>
            <ul className="mt-4 space-y-2">
              {movementSection.nishimura.map((item) => (
                <li
                  key={item.label}
                  className="border border-border-soft px-3 py-2 text-sm"
                >
                  <span className="text-text-soft">{item.label}</span>
                  <span className="jp-serif ml-2 text-xs text-text-faint">
                    {item.labelJa}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
          {movementSection.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 7. Publishing */}
      <section className="my-14" aria-labelledby="publishing">
        <h2
          id="publishing"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {publishingEcosystems.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{publishingEcosystems.titleJa}</p>
        <CulturalEcosystemComparison
          leftLabel="Kafū’s ecosystem"
          rightLabel="Nishimura’s ecosystem"
          left={publishingEcosystems.kafu}
          right={publishingEcosystems.nishimura}
        />
        <ul className="mt-8 max-w-2xl space-y-4">
          {publishingEcosystems.paragraphs.map((p) => (
            <li key={p.text} className="border border-border-soft px-4 py-4">
              <EpistemicLabel kind={p.layer} />
              <p className="jp-serif mt-3 text-sm text-text-soft">{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 8. Weather / Media */}
      <section className="my-14" aria-labelledby="weather-media">
        <h2
          id="weather-media"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {weatherMedia.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{weatherMedia.titleJa}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="border border-border px-5 py-5">
            <p className="label">Kafū</p>
            <h3 className="mt-2 text-sm text-text-soft">
              {weatherMedia.kafu.title}
            </h3>
            <p className="mt-4 text-sm text-text-faint">
              {weatherMedia.kafu.items.join(" / ")}
            </p>
          </article>
          <article className="border border-border px-5 py-5">
            <p className="label">Nishimura</p>
            <h3 className="mt-2 text-sm text-text-soft">
              {weatherMedia.nishimura.title}
            </h3>
            <p className="mt-4 text-sm text-text-faint">
              {weatherMedia.nishimura.items.join(" / ")}
            </p>
          </article>
        </div>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
          {weatherMedia.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 9. Body */}
      <section className="my-14" aria-labelledby="body">
        <h2 id="body" className="editorial text-2xl text-text md:text-3xl">
          {bodySection.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{bodySection.titleJa}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="border border-border px-5 py-5">
            <p className="label">Kafū</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {bodySection.kafu.map((item) => (
                <li key={item}>– {item}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border px-5 py-5">
            <p className="label">Nishimura</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {bodySection.nishimura.map((item) => (
                <li key={item}>– {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
          {bodySection.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-3 text-xs text-text-faint">{bodySection.note}</p>
      </section>

      {/* 10. Food / money */}
      <section className="my-14" aria-labelledby="food-money">
        <h2
          id="food-money"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {foodMoney.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{foodMoney.titleJa}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {foodMoney.axes.map((axis) => (
            <li
              key={axis.label}
              className="border border-dashed border-border px-4 py-3"
            >
              <p className="text-sm text-text-soft">{axis.label}</p>
              <p className="jp-serif text-xs text-text-faint">{axis.labelJa}</p>
              <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
                {axis.status}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-text-faint">
          {foodMoney.knownSpendingNote}
        </p>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-sm text-text-soft">
          {foodMoney.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 11. What disappeared */}
      <section className="my-14" aria-labelledby="disappeared">
        <h2
          id="disappeared"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {disappearedCopy.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{disappearedCopy.titleJa}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border border-border-soft px-4 py-4">
            <p className="label">Kafū — thematic axes</p>
            <ul className="mt-3 space-y-1 text-sm text-text-faint">
              {disappearedCopy.kafuThemes.map((t) => (
                <li key={t}>– {t}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border-soft px-4 py-4">
            <p className="label">Nishimura — thematic axes</p>
            <ul className="mt-3 space-y-1 text-sm text-text-faint">
              {disappearedCopy.nishimuraThemes.map((t) => (
                <li key={t}>– {t}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-xs text-text-faint">{disappearedCopy.note}</p>
        <div className="mt-8 space-y-4">
          {disappearedByStatus.map((bucket) => (
            <div key={bucket.status} className="border border-border px-4 py-4">
              <div className="flex items-center gap-2">
                <EntityStatusBadge status={bucket.status} size="sm" />
              </div>
              <div className="mt-3 grid gap-3 md:grid-cols-2 text-sm">
                <div>
                  <p className="label">Kafū</p>
                  <p className="mt-1 text-text-soft">
                    {bucket.kafu.length === 0
                      ? "—"
                      : bucket.kafu
                          .map((e) => e.nameOriginal ?? e.name)
                          .join(" · ")}
                  </p>
                </div>
                <div>
                  <p className="label">Nishimura</p>
                  <p className="mt-1 text-text-soft">
                    {bucket.nishimura.length === 0
                      ? "—"
                      : bucket.nishimura
                          .map((e) => e.nameOriginal ?? e.name)
                          .join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. What remained */}
      <section className="my-14" aria-labelledby="remained">
        <h2 id="remained" className="editorial text-2xl text-text md:text-3xl">
          {remainedSection.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{remainedSection.titleJa}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {remainedSection.items.map((item) => (
            <li
              key={item.label}
              className="border border-border px-4 py-3 text-sm"
            >
              <p className="text-text-soft">{item.label}</p>
              <p className="jp-serif text-xs text-text-faint">{item.labelJa}</p>
            </li>
          ))}
        </ul>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
          {remainedSection.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 13. Parallel days */}
      <section className="my-14" aria-labelledby="parallel-days">
        <h2
          id="parallel-days"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {parallelDays.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{parallelDays.titleJa}</p>
        <p className="mt-3 text-xs text-text-faint">
          Ordinary days — not catastrophe-first comparison.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ParallelDayCard {...parallelDays.kafu} />
          <ParallelDayCard {...parallelDays.nishimura} />
        </div>
      </section>

      {/* 14–16 Concepts */}
      <ConceptBlock
        title={historyBeforeConcept.title}
        titleJa={historyBeforeConcept.titleJa}
        paragraphs={historyBeforeConcept.paragraphs}
      />

      <section className="my-14" aria-labelledby="personalized">
        <h2
          id="personalized"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {sharedToPersonalized.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{sharedToPersonalized.titleJa}</p>
        <ol className="mt-8 flex max-w-xl flex-col">
          {sharedToPersonalized.stages.map((stage, index) => (
            <li key={stage.label} className="flex flex-col items-start">
              <div className="border border-border px-4 py-3">
                <p className="label">{stage.label}</p>
                <p className="mt-1 text-sm text-text-soft">{stage.text}</p>
              </div>
              {index < sharedToPersonalized.stages.length - 1 && (
                <span className="px-3 py-1 text-xs text-accent" aria-hidden="true">
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
          {sharedToPersonalized.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-3 text-xs text-text-faint">
          {sharedToPersonalized.note}
        </p>
      </section>

      <ConceptBlock
        title={excavationConcept.title}
        titleJa={excavationConcept.titleJa}
        paragraphs={excavationConcept.paragraphs}
      />

      {/* 17. Status */}
      <section className="my-14" aria-labelledby="cmp-status">
        <h2
          id="cmp-status"
          className="editorial text-2xl text-text md:text-3xl"
        >
          Comparison status
        </h2>
        <p className="jp-heading mt-2 text-lg">比較の現在状況</p>
        <div className="mt-8">
          <ComparisonStatusSummary
            verifiedFacts={matrixVerified}
            partialObservations={matrixPartial}
            unknownEntities={unknownEntities}
            entriesByWriter={[
              { name: "Kafū", count: kafuEntries.length },
              { name: "Nishimura", count: nishimuraEntries.length },
            ]}
            entitiesByWriter={[
              { name: "Kafū", count: kafuEntities.length },
              { name: "Nishimura", count: nishimuraEntities.length },
            ]}
            sourcesNeeded={sourcesNeeded}
          />
        </div>
      </section>

      {/* 18. Related entities */}
      <section className="my-14" aria-labelledby="rel-entities">
        <h2
          id="rel-entities"
          className="editorial text-2xl text-text md:text-3xl"
        >
          Related entities
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <EntitySideList title="Kafū side" entities={kafuEntities} />
          <EntitySideList title="Nishimura side" entities={nishimuraEntities} />
        </div>
      </section>

      {/* 19. Related observations */}
      <section className="my-14" aria-labelledby="rel-obs">
        <h2 id="rel-obs" className="editorial text-2xl text-text md:text-3xl">
          Related observations
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {relatedObservations.map((obs) =>
            obs.href ? (
              <Link
                key={obs.id}
                href={obs.href}
                className="focus-ring border border-border px-5 py-5 hover:border-text-faint"
              >
                <span className="border border-accent/40 px-2 py-0.5 text-[0.65rem] text-accent">
                  Published
                </span>
                <h3 className="jp-heading mt-3 text-lg text-text">{obs.title}</h3>
                <p className="mt-2 text-sm text-text-faint">{obs.subtitle}</p>
              </Link>
            ) : (
              <article
                key={obs.id}
                className="border border-dashed border-border px-5 py-5"
              >
                <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
                  Coming observation
                </span>
                <h3 className="jp-heading mt-3 text-lg text-text-faint">
                  {obs.title}
                </h3>
                <p className="mt-2 text-sm text-text-faint">{obs.subtitle}</p>
              </article>
            ),
          )}
        </div>
      </section>

      {/* 20. Sources */}
      <CategorizedSourceList sources={comparisonSources} />

      {/* Related pages */}
      <section className="my-14" aria-labelledby="rel-pages">
        <h2 id="rel-pages" className="editorial text-2xl text-text">
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
