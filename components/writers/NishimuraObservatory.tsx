import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { DiaryFragment } from "@/components/DiaryFragment";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { ObservationCard } from "@/components/ObservationCard";
import { ObservationWorldStatus } from "@/components/ObservationWorldStatus";
import { Timeline } from "@/components/Timeline";
import { MediaEcologyFlow } from "@/components/writers/MediaEcologyFlow";
import { WriterAxisCards } from "@/components/writers/WriterAxisCards";
import { WriterBreadcrumb } from "@/components/writers/WriterBreadcrumb";
import { WriterDiaryWorkCard } from "@/components/writers/WriterDiaryWorkCard";
import { WriterEntityCard } from "@/components/writers/WriterEntityCard";
import { WriterGeography } from "@/components/writers/WriterGeography";
import { WriterRelatedWriters } from "@/components/writers/WriterRelatedWriters";
import { WriterTextPortrait } from "@/components/writers/WriterTextPortrait";
import {
  buildNishimuraWorldStatus,
  nishimuraAxes,
  nishimuraDiaryWorks,
  nishimuraEntityGroups,
  nishimuraFragments,
  nishimuraGeography,
  nishimuraLead,
  nishimuraMediaEcology,
  nishimuraOverview,
  nishimuraRelatedPages,
  nishimuraRelatedWriters,
  nishimuraSources,
  nishimuraTimeline,
} from "@/data/writers/kenji-nishimura";
import { getEntitiesByIds } from "@/data/entities";
import { getObservationBySlug } from "@/data/observations";
import type { EntityStatus, Writer } from "@/lib/types";

export function NishimuraObservatory({
  writer,
  activeAxis,
}: {
  writer: Writer;
  activeAxis?: string;
}) {
  const years = `${writer.birthYear}–${writer.deathYear}`;
  const areas = writer.areas ?? [];
  const featured = getObservationBySlug("heisei-dancho-tei-nichijo");
  const latestObservation = getObservationBySlug(
    "the-manuscripts-that-were-not-chosen",
  );
  const moneyObservation = getObservationBySlug(
    "the-price-of-an-ordinary-day",
  );
  const alcoholObservation = getObservationBySlug(
    "alcohol-explains-writers-too-easily",
  );
  const allEntityIds = nishimuraEntityGroups.flatMap((g) => g.entityIds);
  const allEntities = getEntitiesByIds(allEntityIds);
  const statusCounts = allEntities.reduce(
    (acc, entity) => {
      acc[entity.status] = (acc[entity.status] ?? 0) + 1;
      return acc;
    },
    {} as Partial<Record<EntityStatus, number>>,
  );
  const worldStatus = buildNishimuraWorldStatus(statusCounts);
  const observationCount =
    (featured ? 1 : 0) +
    (latestObservation ? 1 : 0) +
    (alcoholObservation ? 1 : 0) +
    (moneyObservation ? 1 : 0);
  const activeAxisMeta = nishimuraAxes.find((a) => a.id === activeAxis);

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
            Primary areas: {areas.join(" / ")}
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
            {nishimuraLead.map((p) => (
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
              <dt className="label">Observation status</dt>
              <dd className="mt-1 text-text-soft">
                {writer.observationStatus ?? "Active"}
              </dd>
            </div>
            <div>
              <dt className="label">Last updated</dt>
              <dd className="mt-1 text-text-soft">
                {writer.lastUpdated ?? "2026-08-02"}
              </dd>
            </div>
          </dl>
        </div>

        <WriterTextPortrait
          name={writer.name}
          nameJa={writer.nameJa}
          years={years}
          areas={areas}
          tagline={writer.tagline}
        />
      </header>

      <section className="mt-14 max-w-3xl">
        <h2 className="editorial text-3xl text-text">
          {nishimuraOverview.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{nishimuraOverview.titleJa}</p>
        <div className="mt-6 space-y-4">
          {nishimuraOverview.paragraphs.map((item) => (
            <div key={item.text} className="space-y-2">
              <EpistemicLabel kind={item.kind} />
              <p className="jp-serif text-sm leading-relaxed text-text-soft">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="editorial text-2xl text-text">Timeline</h2>
        <p className="jp-serif mt-1 text-sm text-text-faint">年譜</p>
        <div className="mt-6 max-w-3xl">
          <Timeline items={nishimuraTimeline} />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="editorial text-2xl text-text">
          Diaries and related records
        </h2>
        <p className="jp-serif mt-1 text-sm text-text-faint">日記と周辺記録</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {nishimuraDiaryWorks.map((work) => (
            <WriterDiaryWorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>

      {(featured || latestObservation || alcoholObservation || moneyObservation) && (
        <section className="mt-16">
          <h2 className="editorial text-2xl text-text">Observations</h2>
          <p className="jp-serif mt-1 text-sm text-text-faint">観測記事</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {featured ? (
              <ObservationCard observation={featured} featured />
            ) : null}
            {latestObservation ? (
              <ObservationCard observation={latestObservation} />
            ) : null}
            {alcoholObservation ? (
              <ObservationCard observation={alcoholObservation} />
            ) : null}
            {moneyObservation ? (
              <ObservationCard observation={moneyObservation} />
            ) : null}
          </div>
        </section>
      )}

      <section className="mt-16">
        <h2 className="editorial text-2xl text-text">
          The world recorded in his diaries
        </h2>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          日記に記録された世界
        </p>
        <div className="mt-8 space-y-10">
          {nishimuraEntityGroups.map((group) => {
            const entities = getEntitiesByIds(group.entityIds);
            return (
              <div key={group.id}>
                <h3 className="label">
                  {group.label} / {group.labelJa}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {entities.map((entity) => (
                    <WriterEntityCard
                      key={entity.id}
                      entity={entity}
                      relatedObservationCount={observationCount}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-16">
        <ObservationWorldStatus data={worldStatus} />
      </section>

      <section className="mt-16">
        <h2 className="editorial text-2xl text-text">Daily Life Axes</h2>
        <p className="jp-serif mt-1 text-sm text-text-faint">生活の観測軸</p>
        {activeAxisMeta && (
          <p className="mt-3 text-xs text-accent">
            Active filter: {activeAxisMeta.label} / {activeAxisMeta.labelJa}
            {" · "}
            <Link
              href={`/writers/${writer.slug}`}
              className="underline-offset-4 hover:underline"
            >
              Clear
            </Link>
          </p>
        )}
        <div className="mt-6">
          <WriterAxisCards
            writerSlug={writer.slug}
            axes={nishimuraAxes}
            activeAxis={activeAxis}
          />
        </div>
        <p className="mt-4 text-xs text-text-faint">
          Entry list by axis is not implemented yet. URL structure:
          /writers/{writer.slug}?axis=media
        </p>
      </section>

      <section className="mt-16">
        <h2 className="editorial text-2xl text-text">Selected days</h2>
        <p className="jp-serif mt-1 text-sm text-text-faint">選ばれた日々</p>
        <div className="mt-6 max-w-3xl space-y-6">
          {nishimuraFragments.map((fragment) => (
            <div key={fragment.dateSlug}>
              <DiaryFragment
                date={fragment.date}
                locations={fragment.locations}
                events={fragment.events}
                sourceTitle={fragment.sourceTitle}
                sourceNote={fragment.sourceNote}
                relatedEntityIds={fragment.relatedEntityIds}
                entryHref={
                  fragment.coming
                    ? undefined
                    : `/entries/${fragment.dateSlug}`
                }
              />
              {fragment.coming && (
                <p className="inline-flex border border-border px-3 py-2 text-xs text-text-faint">
                  View day · /entries/{fragment.dateSlug} · Coming observation
                </p>
              )}
              {!fragment.coming && fragment.dateSlug === "2011-05-02-kenji-nishimura" && (
                <Link
                  href="/same-day/2011-05-02"
                  className="focus-ring ml-3 inline-flex border border-border px-4 py-2 text-xs text-text-soft hover:border-text-faint"
                >
                  Same Day
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="editorial text-2xl text-text">Nishimura’s Tokyo</h2>
        <p className="jp-serif mt-1 text-sm text-text-faint">西村賢太の東京</p>
        <div className="mt-6 max-w-2xl">
          <WriterGeography places={nishimuraGeography} />
        </div>
      </section>

      <section className="mt-16">
        <MediaEcologyFlow {...nishimuraMediaEcology} />
      </section>

      <section className="mt-16">
        <h2 className="editorial text-2xl text-text">Related writers</h2>
        <p className="jp-serif mt-1 text-sm text-text-faint">比較して読む作家</p>
        <div className="mt-6">
          <WriterRelatedWriters items={nishimuraRelatedWriters} />
        </div>
      </section>

      <CategorizedSourceList sources={nishimuraSources} />

      <section className="mt-16 border-t border-border pt-10">
        <h2 className="editorial text-2xl text-text">Related Pages</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="label">Featured observation</p>
            <Link
              href={nishimuraRelatedPages.featuredObservation.href}
              className="focus-ring jp-serif mt-2 block text-sm text-accent underline-offset-4 hover:underline"
            >
              {nishimuraRelatedPages.featuredObservation.title}
            </Link>
            {nishimuraRelatedPages.essayObservation ? (
              <Link
                href={nishimuraRelatedPages.essayObservation.href}
                className="focus-ring jp-serif mt-2 block text-sm text-accent underline-offset-4 hover:underline"
              >
                {nishimuraRelatedPages.essayObservation.title}
              </Link>
            ) : null}
            {nishimuraRelatedPages.latestObservation ? (
              <Link
                href={nishimuraRelatedPages.latestObservation.href}
                className="focus-ring jp-serif mt-2 block text-sm text-accent underline-offset-4 hover:underline"
              >
                {nishimuraRelatedPages.latestObservation.title}
              </Link>
            ) : null}
            {nishimuraRelatedPages.alcoholObservation ? (
              <Link
                href={nishimuraRelatedPages.alcoholObservation.href}
                className="focus-ring jp-serif mt-2 block text-sm text-accent underline-offset-4 hover:underline"
              >
                {nishimuraRelatedPages.alcoholObservation.title}
              </Link>
            ) : null}
            {nishimuraRelatedPages.moneyObservation ? (
              <Link
                href={nishimuraRelatedPages.moneyObservation.href}
                className="focus-ring jp-serif mt-2 block text-sm text-accent underline-offset-4 hover:underline"
              >
                {nishimuraRelatedPages.moneyObservation.title}
              </Link>
            ) : null}
            {nishimuraRelatedPages.maintenanceObservation ? (
              <Link
                href={nishimuraRelatedPages.maintenanceObservation.href}
                className="focus-ring jp-serif mt-2 block text-sm text-accent underline-offset-4 hover:underline"
              >
                {nishimuraRelatedPages.maintenanceObservation.title}
              </Link>
            ) : null}
          </div>
          <div>
            <p className="label">Entities</p>
            <ul className="mt-2 space-y-1">
              {nishimuraRelatedPages.entities.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring text-sm text-text-soft underline-offset-4 hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">Diaries</p>
            <ul className="mt-2 space-y-1">
              {nishimuraRelatedPages.diaries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring text-sm text-text-soft underline-offset-4 hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">Comparison</p>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  href={nishimuraRelatedPages.comparison.href}
                  className="focus-ring jp-serif text-sm text-accent underline-offset-4 hover:underline"
                >
                  {nishimuraRelatedPages.comparison.title}
                </Link>
              </li>
              {nishimuraRelatedPages.comparisonBukowski ? (
                <li>
                  <Link
                    href={nishimuraRelatedPages.comparisonBukowski.href}
                    className="focus-ring jp-serif text-sm text-accent underline-offset-4 hover:underline"
                  >
                    {nishimuraRelatedPages.comparisonBukowski.title}
                  </Link>
                </li>
              ) : null}
              {nishimuraRelatedPages.comparisonUrban ? (
                <li>
                  <Link
                    href={nishimuraRelatedPages.comparisonUrban.href}
                    className="focus-ring jp-serif text-sm text-accent underline-offset-4 hover:underline"
                  >
                    {nishimuraRelatedPages.comparisonUrban.title}
                  </Link>
                </li>
              ) : null}
              {nishimuraRelatedPages.comparisonFour ? (
                <li>
                  <Link
                    href={nishimuraRelatedPages.comparisonFour.href}
                    className="focus-ring jp-serif text-sm text-accent underline-offset-4 hover:underline"
                  >
                    {nishimuraRelatedPages.comparisonFour.title}
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
