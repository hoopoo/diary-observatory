import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { SurvivalSummary } from "@/components/SurvivalSummary";
import { Timeline } from "@/components/Timeline";
import { BukowskiTextPortrait } from "@/components/writers/BukowskiTextPortrait";
import { EntityNatureBadge } from "@/components/writers/EntityNatureBadge";
import { LateDiaryPreview } from "@/components/writers/LateDiaryPreview";
import { LifeTextFictionPanel } from "@/components/writers/LifeTextFictionPanel";
import { RacingRepetitionPanel } from "@/components/writers/RacingRepetitionPanel";
import { SmallPressEcosystem } from "@/components/writers/SmallPressEcosystem";
import { WorkingBodyPanel } from "@/components/writers/WorkingBodyPanel";
import { WriterAxisCards } from "@/components/writers/WriterAxisCards";
import { WriterBreadcrumb } from "@/components/writers/WriterBreadcrumb";
import { WriterDiaryWorkCard } from "@/components/writers/WriterDiaryWorkCard";
import { WriterMythPanel } from "@/components/writers/WriterMythPanel";
import { WriterRelatedWriters } from "@/components/writers/WriterRelatedWriters";
import { getEntitiesByIds } from "@/data/entities";
import {
  BUKOWSKI_REAL_ENTITY_IDS,
  BUKOWSKI_SLUG,
  alcoholMyth,
  bodyAcrossSuccess,
  buildBukowskiWorldStatus,
  bukowskiAxes,
  bukowskiLead,
  bukowskiOverview,
  bukowskiPlaces,
  bukowskiRecordCards,
  bukowskiRelatedEntities,
  bukowskiRelatedPages,
  bukowskiRelatedWriters,
  bukowskiSources,
  bukowskiTimeline,
  lateDiary,
  lifeTextColumns,
  lifeTextRelations,
  moneyAndTime,
  nishimuraComparison,
  placeCategories,
  postalWork,
  primaryTexts,
  racingRepetition,
  selectedRecord,
  smallPressFlow,
  threeUrbanDiarists,
  workingBody,
} from "@/data/writers/charles-bukowski";
import { EntityStatusBadge } from "@/components/EntityStatusBadge";
import type { EntityStatus, Writer } from "@/lib/types";

export function BukowskiObservatory({
  writer,
  activeAxis,
}: {
  writer: Writer;
  activeAxis?: string;
}) {
  const years = `${writer.birthYear}–${writer.deathYear}`;
  const areas = writer.areas ?? [];
  const realEntities = getEntitiesByIds([...BUKOWSKI_REAL_ENTITY_IDS]);
  const statusCounts = realEntities.reduce(
    (acc, entity) => {
      acc[entity.status] = (acc[entity.status] ?? 0) + 1;
      return acc;
    },
    {} as Partial<Record<EntityStatus, number>>,
  );
  const worldStatus = buildBukowskiWorldStatus(statusCounts);
  const activeAxisMeta = bukowskiAxes.find((a) => a.id === activeAxis);
  const entityById = new Map(
    getEntitiesByIds([
      ...BUKOWSKI_REAL_ENTITY_IDS,
      "entity-henry-chinaski",
    ]).map((e) => [e.id, e]),
  );

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <WriterBreadcrumb name={writer.name} nameJa={writer.nameJa} />

      {/* 1. Header */}
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
            Primary areas: {areas.join(" / ")}
          </p>
          <p className="mt-1 text-[0.7rem] text-text-faint">
            Other locations only when verified.
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
            {bukowskiLead.map((p) => (
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
              <dt className="label">Primary city</dt>
              <dd className="mt-1 text-text-soft">
                {writer.primaryCity ?? writer.city}
              </dd>
            </div>
            <div>
              <dt className="label">Primary language</dt>
              <dd className="mt-1 text-text-soft">English</dd>
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

        <BukowskiTextPortrait
          years={years}
          city="LOS ANGELES"
          motifs={["LABOR", "BARS", "RACING", "WRITING"]}
        />
      </header>

      {/* 2. Overview */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">{bukowskiOverview.title}</h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {bukowskiOverview.titleJa}
        </p>
        <ul className="mt-8 max-w-2xl space-y-5">
          {bukowskiOverview.layers.map((layer) => (
            <li key={layer.text}>
              <EpistemicLabel kind={layer.kind} />
              <p className="jp-body mt-2 text-[0.98rem] text-text-soft">
                {layer.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Diaries and related records */}
      <section
        id="records"
        className="mt-16 border-b border-border pb-14"
      >
        <h2 className="editorial text-3xl text-text">
          Diaries and related records
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">日記と周辺記録</p>
        <p className="mt-4 max-w-2xl text-xs text-text-faint">
          Source forms are kept distinct: diary / journal / letter / poem /
          autobiographical fiction / interview. Not all records are diaries.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {bukowskiRecordCards.map((work) => (
            <WriterDiaryWorkCard key={work.title} work={work} />
          ))}
        </div>
      </section>

      {/* 4. Timeline */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Timeline</h2>
        <p className="jp-serif mt-2 text-sm text-accent">年表</p>
        <p className="mt-3 max-w-2xl text-xs text-text-faint">
          Confirmed major divisions only. Exact months and employment spans are
          not invented.
        </p>
        <div className="mt-8">
          <Timeline items={bukowskiTimeline} />
        </div>
      </section>

      {/* 5. Axes */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          The axes of Bukowski’s life
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          ブコウスキーを読む軸
        </p>
        <div className="mt-8">
          <WriterAxisCards
            writerSlug={BUKOWSKI_SLUG}
            axes={bukowskiAxes}
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
              Structure ready for filtered records — none indexed by date yet.
            </p>
            <Link
              href={`/writers/${BUKOWSKI_SLUG}`}
              className="focus-ring mt-3 inline-block text-xs underline-offset-4 hover:underline"
            >
              Clear filter
            </Link>
          </div>
        )}
      </section>

      {/* 6. Lived / Written / Fictionalized */}
      <section className="mt-16 border-b border-border pb-14">
        <LifeTextFictionPanel
          title={lifeTextColumns.title}
          titleJa={lifeTextColumns.titleJa}
          lived={lifeTextColumns.lived}
          written={lifeTextColumns.written}
          fictionalized={lifeTextColumns.fictionalized}
          caution={lifeTextColumns.caution}
          relations={lifeTextRelations}
        />
      </section>

      {/* 7. Working body */}
      <section className="mt-16 border-b border-border pb-14">
        <WorkingBodyPanel {...workingBody} />
      </section>

      {/* 8. Postal work */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">{postalWork.title}</h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {postalWork.titleJa}
        </p>
        <dl className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
          <div className="border border-border-soft px-4 py-3">
            <dt className="label">Employer</dt>
            <dd className="mt-1 text-text-soft">{postalWork.employer}</dd>
          </div>
          <div className="border border-border-soft px-4 py-3">
            <dt className="label">Role</dt>
            <dd className="mt-1 text-text-soft">{postalWork.role}</dd>
          </div>
          <div className="border border-border-soft px-4 py-3">
            <dt className="label">Period</dt>
            <dd className="mt-1 text-text-soft">{postalWork.period}</dd>
          </div>
          <div className="border border-border-soft px-4 py-3">
            <dt className="label">Relation to writing</dt>
            <dd className="mt-1 text-text-soft">
              {postalWork.relationToWriting}
            </dd>
          </div>
        </dl>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-[0.98rem]">
          {postalWork.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {(() => {
          const entity = entityById.get(postalWork.entityId);
          if (!entity) return null;
          return (
            <article className="mt-8 border border-border px-5 py-5">
              <p className="label">Entity</p>
              <h3 className="editorial mt-2 text-xl text-text">{entity.name}</h3>
              <p className="mt-2 text-xs text-text-faint">
                Type: Workplace / institution · Status: Verification needed ·
                Relationship: Labor
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <EntityStatusBadge status={entity.status} size="sm" />
                {entity.nature && <EntityNatureBadge nature={entity.nature} />}
              </div>
              <Link
                href={`/entities/${entity.slug}`}
                className="focus-ring mt-4 inline-block text-sm underline-offset-4 hover:underline"
              >
                View entity
              </Link>
            </article>
          );
        })()}
      </section>

      {/* 9. Small press */}
      <section className="mt-16 border-b border-border pb-14">
        <SmallPressEcosystem {...smallPressFlow} />
      </section>

      {/* 10. LA places */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Bukowski’s Los Angeles</h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          ブコウスキーのロサンゼルス
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {placeCategories.map((c) => (
            <li
              key={c.id}
              className="border border-border px-2.5 py-1 text-xs text-text-faint"
            >
              {c.label} / {c.labelJa}
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-2xl text-xs text-text-faint">
          Famous places alone are not enough. Diary, letter, work, or
          biographical connection required. Musso & Frank omitted until a
          primary citation is attached.
        </p>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {bukowskiPlaces.map((place) => {
            const entity = place.id.startsWith("entity-")
              ? entityById.get(place.id)
              : undefined;
            return (
              <li
                key={place.id}
                className="border border-border-soft px-4 py-4"
              >
                <p className="editorial text-lg text-text">{place.name}</p>
                <p className="jp-serif text-sm text-accent">{place.nameJa}</p>
                <p className="mt-2 text-xs text-text-faint">Type: {place.type}</p>
                <p className="mt-1 text-sm text-text-soft">Role: {place.role}</p>
                <p className="mt-1 text-xs text-text-faint">
                  Period: {place.period}
                </p>
                {entity && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    <EntityStatusBadge status={entity.status} size="sm" />
                    {entity.nature && (
                      <EntityNatureBadge nature={entity.nature} />
                    )}
                  </div>
                )}
                {"statusNote" in place && place.statusNote && (
                  <p className="mt-2 text-xs text-text-faint">
                    {place.statusNote}
                  </p>
                )}
                <p className="mt-1 text-xs text-text-faint">
                  Verification: {place.verificationStatus}
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

      {/* 11. Racing */}
      <section className="mt-16 border-b border-border pb-14">
        <RacingRepetitionPanel {...racingRepetition} />
      </section>

      {/* 12. Alcohol myth */}
      <section className="mt-16 border-b border-border pb-14">
        <WriterMythPanel {...alcoholMyth} />
      </section>

      {/* 13. Money */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">{moneyAndTime.title}</h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {moneyAndTime.titleJa}
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {moneyAndTime.items.map((item) => (
            <li
              key={item.id}
              className="border border-border px-2.5 py-1 text-xs text-text-soft"
            >
              {item.label}
              <span className="text-text-faint"> / {item.labelJa}</span>
            </li>
          ))}
        </ul>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-[0.98rem]">
          {moneyAndTime.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-6 text-xs text-text-faint">{moneyAndTime.note}</p>
      </section>

      {/* 14. Late diary */}
      <section className="mt-16 border-b border-border pb-14">
        <LateDiaryPreview {...lateDiary} />
      </section>

      {/* 15. Selected record */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Selected record</h2>
        <p className="jp-serif mt-2 text-sm text-accent">選ばれた記録</p>
        <div className="mt-8 border border-dashed border-border px-6 py-8">
          <p className="text-sm text-text-soft">{selectedRecord.emptyEn}</p>
          <p className="jp-serif mt-2 text-sm text-text-faint">
            {selectedRecord.emptyJa}
          </p>
          <p className="label mt-6">Primary source</p>
          <p className="mt-2 text-sm text-text-soft">
            {selectedRecord.primarySource}
          </p>
          <p className="mt-3 text-xs text-text-faint">
            Status: {selectedRecord.status}
          </p>
          <p className="mt-1 text-xs text-text-faint">
            Next step: {selectedRecord.nextStep}
          </p>
          <p className="mt-4 text-[0.65rem] tracking-wide text-text-faint">
            Future URL: {selectedRecord.futureUrlPattern}
          </p>
        </div>
      </section>

      {/* 16. Body across success */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          {bodyAcrossSuccess.title}
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {bodyAcrossSuccess.titleJa}
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="border border-border-soft px-4 py-4">
            <p className="label">Before recognition</p>
            <ul className="mt-3 space-y-1.5 text-sm text-text-soft">
              {bodyAcrossSuccess.before.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border-soft px-4 py-4">
            <p className="label">After recognition</p>
            <ul className="mt-3 space-y-1.5 text-sm text-text-soft">
              {bodyAcrossSuccess.after.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-[0.98rem]">
          {bodyAcrossSuccess.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 17. Nishimura comparison */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          {nishimuraComparison.title}
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {nishimuraComparison.titleJa}
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="border border-border-soft px-4 py-4">
            <p className="label">Left</p>
            <p className="editorial mt-2 text-xl">{nishimuraComparison.left.name}</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {nishimuraComparison.left.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border-soft px-4 py-4">
            <p className="label">Right</p>
            <p className="editorial mt-2 text-xl">
              {nishimuraComparison.right.name}
            </p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {nishimuraComparison.right.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="label mt-6">Shared</p>
        <p className="mt-2 text-sm text-text-soft">
          {nishimuraComparison.shared.join(" · ")}
        </p>
        <p className="label mt-4">Differences</p>
        <ul className="mt-2 space-y-1 text-sm text-text-soft">
          {nishimuraComparison.differences.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        {nishimuraComparison.href ? (
          <Link
            href={nishimuraComparison.href}
            className="focus-ring mt-6 inline-flex border border-border px-4 py-3 text-sm text-text underline-offset-4 hover:border-accent hover:text-accent"
          >
            {nishimuraComparison.cta} →
          </Link>
        ) : (
          <p className="mt-6 border border-dashed border-border px-4 py-3 text-sm text-text-faint">
            {nishimuraComparison.cta}
            {nishimuraComparison.comingLabel
              ? ` — ${nishimuraComparison.comingLabel}`
              : ""}
          </p>
        )}
      </section>

      {/* 18. Three urban diarists */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          {threeUrbanDiarists.title}
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {threeUrbanDiarists.titleJa}
        </p>
        <ul className="mt-8 grid gap-3 md:grid-cols-3">
          {threeUrbanDiarists.writers.map((w) => (
            <li key={w.name}>
              <Link
                href={w.href}
                className="focus-ring block border border-border-soft px-4 py-4 hover:border-text-faint"
              >
                <p className="editorial text-lg text-text">{w.name}</p>
                <p className="mt-2 text-xs text-text-faint">{w.items}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-[0.98rem]">
          {threeUrbanDiarists.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {threeUrbanDiarists.href ? (
          <Link
            href={threeUrbanDiarists.href}
            className="focus-ring mt-8 inline-flex border border-text bg-text px-4 py-2 text-xs text-bg"
          >
            {threeUrbanDiarists.cta} →
          </Link>
        ) : null}
      </section>

      {/* 19. World status */}
      <section className="mt-16 border-b border-border pb-14">
        <SurvivalSummary data={worldStatus} />
      </section>

      {/* 20. Primary texts */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">
          Primary texts and editions
        </h2>
        <p className="jp-serif mt-2 text-sm text-accent">原典と刊行版</p>
        <p className="mt-4 max-w-2xl text-sm text-text-faint">
          著作権保護中の可能性が高い。長文転載は行わない。要約を基本とする。架空のISBN・URLは置かない。
        </p>
        <ul className="mt-8 space-y-3">
          {primaryTexts.map((t) => (
            <li key={t.id} className="border border-border-soft px-4 py-3">
              <p className="text-sm text-text-soft">
                {t.label}
                <span className="text-text-faint"> / {t.labelJa}</span>
              </p>
              <p className="mt-1 text-xs text-text-faint">{t.note}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 21. Sources */}
      <CategorizedSourceList sources={bukowskiSources} />

      {/* 22. Related entities */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Related entities</h2>
        <p className="jp-serif mt-2 text-sm text-accent">関連Entity</p>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {bukowskiRelatedEntities.map((e) => (
            <li key={e.id} className="border border-border-soft px-4 py-4">
              <div className="flex flex-wrap items-center gap-2">
                <p className="editorial text-lg text-text">{e.name}</p>
                <EntityNatureBadge nature={e.nature} />
              </div>
              <p className="jp-serif text-sm text-accent">{e.nameJa}</p>
              <p className="mt-2 text-xs text-text-faint">{e.type}</p>
              <p className="mt-1 text-xs text-text-faint">{e.note}</p>
              {e.coming || !e.href ? (
                <p className="mt-3 text-xs text-text-faint">Coming entity</p>
              ) : (
                <Link
                  href={e.href}
                  className="focus-ring mt-3 inline-block text-sm underline-offset-4 hover:underline"
                >
                  View entity
                </Link>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Related writers / pages */}
      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Related writers</h2>
        <div className="mt-8">
          <WriterRelatedWriters items={bukowskiRelatedWriters} />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="editorial text-2xl text-text">Related pages</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {bukowskiRelatedPages.map((page) => (
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
