import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { ConceptBlock } from "@/components/ConceptBlock";
import { EntityStatusBadge } from "@/components/EntityStatusBadge";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { ComparisonBreadcrumb } from "@/components/compare/ComparisonBreadcrumb";
import { ComparisonStatusSummary } from "@/components/compare/ComparisonStatusSummary";
import { LifeCostComparison } from "@/components/compare/LifeCostComparison";
import { LiterarySystemComparison } from "@/components/compare/LiterarySystemComparison";
import { MassSmallMediaPanel } from "@/components/compare/MassSmallMediaPanel";
import { ParallelRecordPanel } from "@/components/compare/ParallelRecordPanel";
import { WriterComparisonMatrix } from "@/components/compare/WriterComparisonMatrix";
import { WriterMythComparison } from "@/components/compare/WriterMythComparison";
import { WritingBodyComparison } from "@/components/compare/WritingBodyComparison";
import { EntityNatureBadge } from "@/components/writers/EntityNatureBadge";
import { LifeTextFictionPanel } from "@/components/writers/LifeTextFictionPanel";
import {
  BUKOWSKI_ID,
  NISHIMURA_ID,
  afterRecognition,
  aiPersonalized,
  alcoholMyth,
  beforeWriterIdentity,
  centralProposition,
  cityInfrastructure,
  comparisonLead,
  comparisonMeta,
  comparisonSources,
  comparisonStatusCopy,
  lifeCost,
  literarySystems,
  literarySystemsCopy,
  massSmallMedia,
  matrixColumns,
  nishimuraBukowskiComparison,
  parallelRecords,
  privateLifeMaterial,
  relatedEntityIds,
  relatedKafu,
  relatedObservations,
  relatedPages,
  residueConcept,
  twoWritersCards,
  writerComparisonMatrixRows,
  writingBodyCopy,
} from "@/data/comparisons/nishimura-bukowski";
import { getEntitiesByIds } from "@/data/entities";
import { getEntriesByWork } from "@/data/entries";
import type { Entity } from "@/lib/types";

function EntitySideList({
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

export function NishimuraBukowskiObservatory() {
  const meta = nishimuraBukowskiComparison;
  const nishimuraEntities = getEntitiesByIds(relatedEntityIds.nishimura);
  const bukowskiReal = getEntitiesByIds(relatedEntityIds.bukowskiReal);
  const bukowskiFictional = getEntitiesByIds(
    relatedEntityIds.bukowskiFictional,
  );

  const nishimuraEntries = getEntriesByWork("diary-nishimura-nichijo");
  const bukowskiEntries = getEntriesByWork("diary-bukowski-captain");
  /** Dated observatory-indexed entries only */
  const indexedEntryCount =
    nishimuraEntries.filter((e) => e.slug).length +
    bukowskiEntries.filter((e) => e.slug).length;

  const matrixVerified = writerComparisonMatrixRows.filter((row) =>
    Object.values(row.verificationStatusByWriterId).every(
      (v) => v === "verified",
    ),
  ).length;
  const matrixPartial = writerComparisonMatrixRows.filter((row) =>
    Object.values(row.verificationStatusByWriterId).some((v) => v === "partial"),
  ).length;
  const unknownFields = writerComparisonMatrixRows.filter((row) =>
    Object.values(row.verificationStatusByWriterId).some(
      (v) => v === "unknown" || v === "not-indexed",
    ),
  ).length;
  const sourcesNeeded = comparisonSources.filter(
    (s) =>
      s.needed ||
      s.status === "needed" ||
      s.status === "verification-pending" ||
      s.status === "primary-unavailable",
  ).length;
  const unknownEntities = [...nishimuraEntities, ...bukowskiReal].filter(
    (e) => e.status === "unknown",
  ).length;

  const left = twoWritersCards.nishimura;
  const right = twoWritersCards.bukowski;
  const sysN = literarySystems.find((s) => s.writerId === NISHIMURA_ID)!;
  const sysB = literarySystems.find((s) => s.writerId === BUKOWSKI_ID)!;

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
            <dt className="label">Periods</dt>
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

      {/* 2. Two writers */}
      <section className="my-14">
        <div className="grid gap-4 md:grid-cols-2">
          {[left, right].map((card) => (
            <article
              key={card.writerId}
              className="border border-border px-6 py-8"
            >
              <p className="label">
                {card.writerId === NISHIMURA_ID ? "Left" : "Right"}
              </p>
              <h2 className="editorial mt-3 text-2xl text-text md:text-3xl">
                {card.name}
              </h2>
              <p className="jp-heading mt-1 text-lg">{card.nameJa}</p>
              <p className="mt-3 text-sm text-text-faint">{card.years}</p>
              <p className="mt-1 text-xs text-text-faint">City: {card.city}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {card.keywords.map((k) => (
                  <li
                    key={k}
                    className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint"
                  >
                    {k}
                  </li>
                ))}
              </ul>
              <p className="editorial mt-6 text-lg text-accent">{card.tagline}</p>
              <p className="jp-serif mt-1 text-sm text-text-soft">
                {card.taglineJa}
              </p>
              <Link
                href={card.href}
                className="focus-ring mt-8 inline-flex border border-text bg-text px-5 py-2.5 text-xs tracking-wide text-bg"
              >
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Central proposition */}
      <ConceptBlock
        title={centralProposition.title}
        titleJa={centralProposition.titleJa}
        paragraphs={centralProposition.paragraphs}
      />

      {/* 4. Matrix */}
      <section className="my-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Comparison matrix
        </h2>
        <p className="jp-heading mt-2 text-lg">比較表</p>
        <p className="mt-3 max-w-2xl text-xs text-text-faint">
          Unknown / Not indexed / Source needed are stated explicitly.
        </p>
        <div className="mt-8">
          <WriterComparisonMatrix
            columns={matrixColumns}
            rows={writerComparisonMatrixRows}
          />
        </div>
      </section>

      {/* 5. Before writer identity */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {beforeWriterIdentity.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">
          {beforeWriterIdentity.titleJa}
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="border border-border-soft px-4 py-4">
            <p className="label">Nishimura</p>
            <ul className="mt-3 space-y-1.5 text-sm text-text-soft">
              {beforeWriterIdentity.nishimura.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border-soft px-4 py-4">
            <p className="label">Bukowski</p>
            <ul className="mt-3 space-y-1.5 text-sm text-text-soft">
              {beforeWriterIdentity.bukowski.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
          {beforeWriterIdentity.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-4 text-xs text-text-faint">
          {beforeWriterIdentity.caution}
        </p>
      </section>

      {/* 6. Literary systems */}
      <section className="my-14 border-b border-border pb-14">
        <LiterarySystemComparison
          title={literarySystemsCopy.title}
          titleJa={literarySystemsCopy.titleJa}
          leftLabel="Nishimura"
          rightLabel="Bukowski"
          leftNodes={sysN.nodes}
          rightNodes={sysB.nodes}
          paragraphs={literarySystemsCopy.paragraphs}
        />
      </section>

      {/* 7. Cities */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {cityInfrastructure.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{cityInfrastructure.titleJa}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="border border-border-soft px-4 py-4">
            <p className="label">Tokyo</p>
            <ul className="mt-3 space-y-1.5 text-sm text-text-soft">
              {cityInfrastructure.tokyo.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border-soft px-4 py-4">
            <p className="label">Los Angeles</p>
            <ul className="mt-3 space-y-1.5 text-sm text-text-soft">
              {cityInfrastructure.losAngeles.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
          {cityInfrastructure.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 8. Writing bodies */}
      <section className="my-14 border-b border-border pb-14">
        <WritingBodyComparison
          title={writingBodyCopy.title}
          titleJa={writingBodyCopy.titleJa}
          leftLabel="Nishimura"
          rightLabel="Bukowski"
          leftItems={writingBodyCopy.nishimuraItems}
          rightItems={writingBodyCopy.bukowskiItems}
          paragraphs={writingBodyCopy.paragraphs}
        />
      </section>

      {/* 9. Alcohol myth */}
      <section className="my-14 border-b border-border pb-14">
        <WriterMythComparison {...alcoholMyth} />
      </section>

      {/* 10. Private life */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {privateLifeMaterial.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{privateLifeMaterial.titleJa}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="border border-border-soft px-4 py-4 space-y-4">
            <p className="label">Nishimura</p>
            <LayerList
              label="Lived"
              items={privateLifeMaterial.nishimura.lived}
            />
            <LayerList
              label="Written"
              items={privateLifeMaterial.nishimura.written}
            />
            <LayerList
              label="Publicly consumed"
              items={privateLifeMaterial.nishimura.publiclyConsumed}
            />
          </div>
          <div className="border border-border-soft px-4 py-4 space-y-4">
            <p className="label">Bukowski</p>
            <LayerList label="Lived" items={privateLifeMaterial.bukowski.lived} />
            <LayerList
              label="Written"
              items={privateLifeMaterial.bukowski.written}
            />
            <LayerList
              label="Fictionalized"
              items={privateLifeMaterial.bukowski.fictionalized}
            />
            <LayerList
              label="Publicly consumed"
              items={privateLifeMaterial.bukowski.publiclyConsumed}
            />
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-xs text-text-faint">
          {privateLifeMaterial.caution}
        </p>
        <div className="mt-10">
          <LifeTextFictionPanel
            title="Life–text relations (Bukowski)"
            titleJa="生活とテクストの関係（ブコウスキー）"
            lived={{
              label: "Lived",
              labelJa: "生きられたもの",
              items: privateLifeMaterial.bukowski.lived,
            }}
            written={{
              label: "Written",
              labelJa: "書かれたもの",
              items: privateLifeMaterial.bukowski.written,
            }}
            fictionalized={{
              label: "Fictionalized",
              labelJa: "フィクション化されたもの",
              items: privateLifeMaterial.bukowski.fictionalized,
            }}
            caution="Henry Chinaski is fictional (EntityNature). Do not equate life and text one-to-one."
            relations={privateLifeMaterial.relations}
          />
        </div>
      </section>

      {/* 11. Life cost */}
      <section className="my-14 border-b border-border pb-14">
        <LifeCostComparison
          title={lifeCost.title}
          titleJa={lifeCost.titleJa}
          axes={lifeCost.axes}
          paragraphs={lifeCost.paragraphs}
        />
      </section>

      {/* 12. After recognition */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {afterRecognition.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{afterRecognition.titleJa}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="border border-border-soft px-4 py-4">
            <p className="label">Nishimura</p>
            <ul className="mt-3 space-y-1.5 text-sm text-text-soft">
              {afterRecognition.nishimura.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border-soft px-4 py-4">
            <p className="label">Bukowski</p>
            <ul className="mt-3 space-y-1.5 text-sm text-text-soft">
              {afterRecognition.bukowski.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
          {afterRecognition.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 13. Mass / small media */}
      <section className="my-14 border-b border-border pb-14">
        <MassSmallMediaPanel
          title={massSmallMedia.title}
          titleJa={massSmallMedia.titleJa}
          leftLabel="Nishimura"
          rightLabel="Bukowski"
          leftItems={massSmallMedia.nishimura}
          rightItems={massSmallMedia.bukowski}
          paragraphs={massSmallMedia.paragraphs}
        />
      </section>

      {/* 14. AI */}
      <section className="my-14 border-b border-border pb-14">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="editorial text-2xl text-text md:text-3xl">
            {aiPersonalized.title}
          </h2>
          <EpistemicLabel kind={aiPersonalized.kind} />
        </div>
        <p className="jp-heading mt-2 text-lg">{aiPersonalized.titleJa}</p>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-[0.98rem]">
          {aiPersonalized.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 15. Residue concept */}
      <ConceptBlock
        title={residueConcept.title}
        titleJa={residueConcept.titleJa}
        paragraphs={residueConcept.paragraphs}
      />

      {/* 16. Recorded worlds */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          What remains from their worlds?
        </h2>
        <p className="jp-heading mt-2 text-lg">
          二人の世界から、何が残っているか
        </p>
        <p className="mt-3 max-w-2xl text-xs text-text-faint">
          EntityStatus for real places; EntityNature for fictional Chinaski.
          Counts from indexed data only.
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <EntitySideList title="Nishimura entities" entities={nishimuraEntities} />
          <div className="space-y-8">
            <EntitySideList title="Bukowski entities (real)" entities={bukowskiReal} />
            <EntitySideList
              title="Bukowski entities (fictional)"
              entities={bukowskiFictional}
              showNature
            />
          </div>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2 text-xs text-text-faint">
          {[
            "Existing",
            "Closed",
            "Demolished",
            "Transformed",
            "Ended",
            "Deceased",
            "Fictional (nature)",
            "Unknown",
          ].map((s) => (
            <li key={s} className="border border-border px-2 py-1">
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* 17. Parallel records */}
      <section className="my-14 border-b border-border pb-14">
        <ParallelRecordPanel
          title={parallelRecords.title}
          titleJa={parallelRecords.titleJa}
          noteEn={parallelRecords.noteEn}
          noteJa={parallelRecords.noteJa}
          left={parallelRecords.nishimura}
          right={parallelRecords.bukowski}
        />
      </section>

      {/* 18. Comparison status */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          {comparisonStatusCopy.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{comparisonStatusCopy.titleJa}</p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Stat label="Indexed entries" value={indexedEntryCount} />
          <Stat label="Verified facts" value={matrixVerified} />
          <Stat
            label="Life-text relations"
            value={privateLifeMaterial.relations.length}
          />
          <Stat
            label="Real entities"
            value={nishimuraEntities.length + bukowskiReal.length}
          />
          <Stat label="Fictional entities" value={bukowskiFictional.length} />
          <Stat label="Source-needed items" value={sourcesNeeded} />
          <Stat label="Unknown fields" value={unknownFields} />
        </dl>
        <div className="mt-8">
          <ComparisonStatusSummary
            verifiedFacts={matrixVerified}
            partialObservations={matrixPartial}
            unknownEntities={unknownEntities}
            entriesByWriter={[
              {
                name: "Nishimura",
                count: nishimuraEntries.filter((e) => e.slug).length,
              },
              {
                name: "Bukowski",
                count: bukowskiEntries.filter((e) => e.slug).length,
              },
            ]}
            entitiesByWriter={[
              { name: "Nishimura", count: nishimuraEntities.length },
              {
                name: "Bukowski (real)",
                count: bukowskiReal.length,
              },
              {
                name: "Bukowski (fictional)",
                count: bukowskiFictional.length,
              },
            ]}
            sourcesNeeded={sourcesNeeded}
          />
        </div>
        <p className="mt-6 max-w-2xl text-sm text-text-soft">
          {comparisonStatusCopy.noteEn}
        </p>
        <p className="jp-serif mt-2 max-w-2xl text-sm text-text-faint">
          {comparisonStatusCopy.noteJa}
        </p>
      </section>

      {/* 19. Related Kafu */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Related writers
        </h2>
        <article className="mt-8 border border-border px-6 py-6">
          <p className="editorial text-2xl text-text">{relatedKafu.name}</p>
          <p className="jp-heading mt-1 text-lg">{relatedKafu.nameJa}</p>
          <p className="mt-2 text-xs text-text-faint">{relatedKafu.connection}</p>
          <div className="jp-body mt-4 space-y-2 text-sm text-text-soft">
            {relatedKafu.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link
            href={relatedKafu.href}
            className="focus-ring mt-6 inline-flex border border-text bg-text px-4 py-2 text-xs text-bg"
          >
            {relatedKafu.cta}
          </Link>
        </article>
      </section>

      {/* 20. Observations */}
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

      {/* 21. Sources */}
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

function LayerList({ label, items }: { label: string; items: string[] }) {
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

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="border border-border-soft px-4 py-3">
      <dt className="label">{label}</dt>
      <dd className="editorial mt-1 text-3xl text-text">{value}</dd>
    </div>
  );
}
