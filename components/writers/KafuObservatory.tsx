import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { EntityStatusBadge } from "@/components/EntityStatusBadge";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { SurvivalSummary } from "@/components/SurvivalSummary";
import { Timeline } from "@/components/Timeline";
import { BodyIndexPreview } from "@/components/writers/BodyIndexPreview";
import { CityLayerTimeline } from "@/components/writers/CityLayerTimeline";
import { KafuTextPortrait } from "@/components/writers/KafuTextPortrait";
import { RepetitionCalendar } from "@/components/writers/RepetitionCalendar";
import { WarEntryPreview } from "@/components/writers/WarEntryPreview";
import { WeatherIndexPreview } from "@/components/writers/WeatherIndexPreview";
import { WriterAxisCards } from "@/components/writers/WriterAxisCards";
import { WriterBreadcrumb } from "@/components/writers/WriterBreadcrumb";
import { WriterDiaryWorkCard } from "@/components/writers/WriterDiaryWorkCard";
import { danchoDiaryCard } from "@/data/diaries/dancho-tei-nichijo";
import { getEntitiesByIds } from "@/data/entities";
import {
  KAFU_ENTITY_IDS,
  buildKafuWorldStatus,
  kafuAxes,
  kafuBodyArchive,
  kafuCityLayers,
  kafuComparison,
  kafuFeaturedObservations,
  kafuGeography,
  kafuLead,
  kafuOverview,
  kafuPrimaryTextAccess,
  kafuRelatedEntities,
  kafuRelatedPages,
  kafuRelatedWriters,
  kafuRepetitionAxes,
  kafuSelectedDays,
  kafuSources,
  kafuTimeline,
  kafuWarCopy,
  kafuWarEntries,
  kafuWeatherArchive,
} from "@/data/writers/kafu-nagai";
import { VERIFICATION_LABELS } from "@/lib/labels";
import type { EntityStatus, Writer } from "@/lib/types";

export function KafuObservatory({
  writer,
  activeAxis,
}: {
  writer: Writer;
  activeAxis?: string;
}) {
  const years = `${writer.birthYear}–${writer.deathYear}`;
  const areas = writer.areas ?? [];
  const entities = getEntitiesByIds([...KAFU_ENTITY_IDS]);
  const statusCounts = entities.reduce(
    (acc, entity) => {
      acc[entity.status] = (acc[entity.status] ?? 0) + 1;
      return acc;
    },
    {} as Partial<Record<EntityStatus, number>>,
  );
  const worldStatus = buildKafuWorldStatus(statusCounts);
  const activeAxisMeta = kafuAxes.find((a) => a.id === activeAxis);
  const entitiesById = new Map(entities.map((e) => [e.id, e]));

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
            Areas listed only when connected in verified sources; details remain
            source-needed per place.
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
            {kafuLead.map((p) => (
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
              <dt className="label">Primary diary</dt>
              <dd className="mt-1 text-text-soft">断腸亭日乗</dd>
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

        <KafuTextPortrait
          name={writer.name}
          nameJa={writer.nameJa}
          years={years}
          city={writer.primaryCity ?? writer.city}
          motifs={["Weather", "Walking", "Garden", "War"]}
        />
      </header>

      {/* 2. Overview */}
      <section className="my-14 max-w-3xl" aria-labelledby="overview">
        <h2 id="overview" className="editorial text-2xl text-text md:text-3xl">
          {kafuOverview.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{kafuOverview.titleJa}</p>
        <ul className="mt-8 space-y-4">
          {kafuOverview.paragraphs.map((p) => (
            <li key={p.text} className="border border-border-soft px-4 py-4">
              <EpistemicLabel kind={p.kind} />
              <p className="jp-serif mt-3 text-sm text-text-soft">{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Primary diary */}
      <section className="my-14" aria-labelledby="primary-diary">
        <h2
          id="primary-diary"
          className="editorial text-2xl text-text md:text-3xl"
        >
          Primary diary
        </h2>
        <p className="jp-heading mt-2 text-lg">主要日記</p>
        <div className="mt-8 max-w-2xl">
          <WriterDiaryWorkCard work={danchoDiaryCard} />
          <p className="mt-3 text-xs text-text-faint">
            {danchoDiaryCard.copyrightNote}
          </p>
        </div>
      </section>

      {/* 4. Timeline */}
      <section className="my-14" aria-labelledby="timeline">
        <h2 id="timeline" className="editorial text-2xl text-text md:text-3xl">
          Timeline
        </h2>
        <p className="mt-2 text-xs text-text-faint">
          Confirmed items only. Month/day not invented.
        </p>
        <div className="mt-8 max-w-2xl">
          <Timeline items={kafuTimeline} />
        </div>
      </section>

      {/* 5. Axes */}
      <section className="my-14" aria-labelledby="axes">
        <h2 id="axes" className="editorial text-2xl text-text md:text-3xl">
          The axes of Kafū’s diary
        </h2>
        <p className="jp-heading mt-2 text-lg">荷風の日記を読む軸</p>
        {activeAxisMeta && (
          <p className="mt-4 text-sm text-accent">
            Active axis: {activeAxisMeta.label} / {activeAxisMeta.labelJa}
          </p>
        )}
        <div className="mt-8">
          <WriterAxisCards
            writerSlug={writer.slug}
            axes={kafuAxes}
            activeAxis={activeAxis}
          />
        </div>
      </section>

      {/* 6. Selected day */}
      <section className="my-14" aria-labelledby="selected-day">
        <h2
          id="selected-day"
          className="editorial text-2xl text-text md:text-3xl"
        >
          Selected day
        </h2>
        <p className="jp-heading mt-2 text-lg">選ばれた一日</p>
        <div className="mt-8 space-y-4 max-w-3xl">
          {kafuSelectedDays.map((day) => (
            <article
              key={day.dateSlug}
              className="border border-border px-5 py-5"
            >
              <p className="label">
                {day.date} · {day.city}
              </p>
              <p className="jp-serif mt-3 text-sm text-text-soft">{day.summary}</p>
              <p className="mt-2 text-xs text-text-faint">{day.sourceNote}</p>
              {!day.coming && day.dateSlug === "1918-01-01-kafu-nagai" && (
                <p className="mt-3 text-xs text-text-faint">
                  Provenance: Partial · Bibliographic trail incomplete · Not a
                  Reference Entry yet
                </p>
              )}
              {day.coming ? (
                <p className="mt-4 inline-flex border border-border px-3 py-2 text-xs text-text-faint">
                  Coming entry · /entries/{day.dateSlug}
                </p>
              ) : (
                <Link
                  href={`/entries/${day.dateSlug}`}
                  className="focus-ring mt-4 inline-flex border border-text bg-text px-4 py-2 text-xs text-bg"
                >
                  {day.dateSlug === "1918-01-01-kafu-nagai"
                    ? "Open excavated day"
                    : "View this day"}
                  {day.dateSlug === "1918-01-01-kafu-nagai" ? " · 発掘済みの一日を見る" : ""}
                </Link>
              )}
              {!day.coming && day.dateSlug === "1918-01-01-kafu-nagai" && (
                <Link
                  href="/same-day/1918-01-01"
                  className="focus-ring ml-3 inline-flex border border-border px-4 py-2 text-xs text-text-soft hover:border-text-faint"
                >
                  Same Day
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* 7. Repetition */}
      <section className="my-14" aria-labelledby="repetition">
        <h2 id="repetition" className="editorial text-2xl text-text md:text-3xl">
          Repeated life
        </h2>
        <p className="jp-heading mt-2 text-lg">繰り返される生活</p>
        <div className="mt-8">
          <RepetitionCalendar axes={kafuRepetitionAxes} />
        </div>
      </section>

      {/* 8. Kafū’s Tokyo */}
      <section className="my-14" aria-labelledby="kafu-tokyo">
        <h2 id="kafu-tokyo" className="editorial text-2xl text-text md:text-3xl">
          Kafū’s Tokyo
        </h2>
        <p className="jp-heading mt-2 text-lg">荷風の東京</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kafuGeography.map((place) => {
            const entity = entitiesById.get(place.id);
            const verification =
              VERIFICATION_LABELS[place.verificationStatus];
            return (
              <article
                key={place.id}
                className="border border-border px-5 py-5"
              >
                <h3 className="editorial text-lg text-text">{place.name}</h3>
                <p className="jp-serif mt-1 text-sm text-text-soft">
                  {place.nameJa}
                </p>
                <p className="mt-2 text-xs text-text-faint">{place.type}</p>
                <p className="mt-3 text-sm text-text-soft">
                  {place.relationship}
                </p>
                <p className="jp-serif text-xs text-text-faint">
                  {place.relationshipJa}
                </p>
                <p className="mt-2 text-xs text-text-faint">{place.period}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {entity && (
                    <EntityStatusBadge status={entity.status} size="sm" />
                  )}
                  <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
                    {verification.en}
                  </span>
                </div>
                <p className="mt-2 text-xs text-text-faint">
                  Related entries:{" "}
                  {place.relatedEntryCount == null
                    ? "Indexing in progress"
                    : place.relatedEntryCount}
                </p>
                <Link
                  href={place.href}
                  className="focus-ring mt-4 inline-block text-xs tracking-wide text-accent underline-offset-4 hover:underline"
                >
                  View entity
                </Link>
              </article>
            );
          })}
        </div>
        <ol className="mt-8 flex max-w-md flex-col">
          {kafuGeography.map((place, index) => (
            <li key={`route-${place.id}`} className="flex flex-col items-start">
              <span className="border border-border-soft px-3 py-2 text-sm text-text-faint">
                {place.name} / {place.nameJa}
              </span>
              {index < kafuGeography.length - 1 && (
                <span className="px-3 py-1 text-xs text-accent" aria-hidden="true">
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-3 text-xs text-text-faint">
          No map API. Future decade maps can attach coordinates when verified.
        </p>
      </section>

      {/* 9. City layers */}
      <section className="my-14" aria-labelledby="city-layers">
        <h2
          id="city-layers"
          className="editorial text-2xl text-text md:text-3xl"
        >
          Tokyo, layer by layer
        </h2>
        <p className="jp-heading mt-2 text-lg">重なっていく東京</p>
        <CityLayerTimeline layers={kafuCityLayers} />
      </section>

      {/* 10. Weather */}
      <section className="my-14 max-w-3xl" aria-labelledby="weather">
        <h2 id="weather" className="editorial text-2xl text-text md:text-3xl">
          {kafuWeatherArchive.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{kafuWeatherArchive.titleJa}</p>
        <div className="jp-body mt-6 space-y-4 text-sm text-text-soft">
          {kafuWeatherArchive.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <WeatherIndexPreview
          weatherTerms={kafuWeatherArchive.weatherTerms}
          seasonal={kafuWeatherArchive.seasonal}
          bodyRelation={kafuWeatherArchive.bodyRelation}
        />
      </section>

      {/* 11. Body */}
      <section className="my-14 max-w-3xl" aria-labelledby="body">
        <h2 id="body" className="editorial text-2xl text-text md:text-3xl">
          {kafuBodyArchive.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{kafuBodyArchive.titleJa}</p>
        <div className="jp-body mt-6 space-y-4 text-sm text-text-soft">
          {kafuBodyArchive.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <BodyIndexPreview
          items={kafuBodyArchive.items}
          note={kafuBodyArchive.note}
        />
      </section>

      {/* 12. War */}
      <section className="my-14 max-w-3xl" aria-labelledby="war">
        <h2 id="war" className="editorial text-2xl text-text md:text-3xl">
          {kafuWarCopy.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{kafuWarCopy.titleJa}</p>
        <div className="jp-body mt-6 space-y-4 text-sm text-text-soft">
          {kafuWarCopy.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <WarEntryPreview items={kafuWarEntries} />
      </section>

      {/* 13. World status */}
      <div className="my-14">
        <SurvivalSummary data={worldStatus} />
      </div>

      {/* 14. Comparison */}
      <section className="my-14" aria-labelledby="comparison">
        <h2 id="comparison" className="editorial text-2xl text-text md:text-3xl">
          {kafuComparison.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{kafuComparison.titleJa}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="border border-border px-5 py-5">
            <p className="editorial text-xl text-text">
              {kafuComparison.kafu.name}
            </p>
            <p className="mt-2 text-xs text-text-faint">
              {kafuComparison.kafu.period}
            </p>
            <p className="mt-3 text-sm text-text-soft">
              {kafuComparison.kafu.themes}
            </p>
          </article>
          <article className="border border-border px-5 py-5">
            <p className="editorial text-xl text-text">
              {kafuComparison.nishimura.name}
            </p>
            <p className="mt-2 text-xs text-text-faint">
              {kafuComparison.nishimura.period}
            </p>
            <p className="mt-3 text-sm text-text-soft">
              {kafuComparison.nishimura.themes}
            </p>
          </article>
        </div>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-sm text-text-soft">
          {kafuComparison.copy.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <p className="label">Shared</p>
            <ul className="mt-2 space-y-1 text-sm text-text-soft">
              {kafuComparison.shared.map((item) => (
                <li key={item}>– {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">Differences</p>
            <ul className="mt-2 space-y-1 text-sm text-text-soft">
              {kafuComparison.differences.map((item) => (
                <li key={item}>– {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          href={kafuComparison.href}
          className="focus-ring mt-8 inline-flex border border-text bg-text px-4 py-2 text-xs text-bg"
        >
          Compare Kafū and Nishimura
        </Link>
      </section>

      {/* 15. Featured observations */}
      <section className="my-14" aria-labelledby="featured-obs">
        <h2
          id="featured-obs"
          className="editorial text-2xl text-text md:text-3xl"
        >
          Featured observations
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {kafuFeaturedObservations.map((obs) =>
            obs.href ? (
              <Link
                key={obs.id}
                href={obs.href}
                className="focus-ring border border-border px-5 py-5 hover:border-text-faint"
              >
                <span className="border border-accent/40 px-2 py-0.5 text-[0.65rem] text-accent">
                  Published
                </span>
                <h3 className="jp-heading mt-3 text-xl text-text">{obs.title}</h3>
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
                <h3 className="jp-heading mt-3 text-xl text-text-faint">
                  {obs.title}
                </h3>
                <p className="mt-2 text-sm text-text-faint">{obs.subtitle}</p>
              </article>
            ),
          )}
        </div>
      </section>

      {/* 16. Primary text access */}
      <section className="my-14 max-w-3xl" aria-labelledby="primary-text">
        <h2
          id="primary-text"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {kafuPrimaryTextAccess.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{kafuPrimaryTextAccess.titleJa}</p>
        <ul className="mt-8 space-y-3">
          <li className="border border-border px-4 py-4 text-sm">
            <p className="label">{kafuPrimaryTextAccess.publicDomain.label}</p>
            <p className="mt-2 text-text-soft">
              {kafuPrimaryTextAccess.publicDomain.note}
            </p>
          </li>
          <li className="border border-border px-4 py-4 text-sm">
            <p className="label">{kafuPrimaryTextAccess.modernEditions.label}</p>
            <p className="mt-2 text-text-soft">
              {kafuPrimaryTextAccess.modernEditions.note}
            </p>
          </li>
        </ul>
        <p className="mt-4 text-xs text-text-faint">
          {kafuPrimaryTextAccess.copyrightNote}
        </p>
      </section>

      {/* 17. Sources */}
      <CategorizedSourceList sources={kafuSources} />

      {/* 18. Related entities */}
      <section className="my-14" aria-labelledby="related-entities">
        <h2
          id="related-entities"
          className="editorial text-2xl text-text md:text-3xl"
        >
          Related entities
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {kafuRelatedEntities.map((item) =>
            item.coming || !item.href ? (
              <li
                key={item.id}
                className="border border-dashed border-border px-4 py-4 text-sm text-text-faint"
              >
                <p className="text-text-soft">{item.name}</p>
                <p className="jp-serif mt-1">{item.nameJa}</p>
                <p className="mt-2 text-xs">{item.type}</p>
                <p className="mt-2 text-xs">Coming entity · {item.note}</p>
              </li>
            ) : (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                >
                  <p className="text-sm text-text-soft">{item.name}</p>
                  <p className="jp-serif mt-1 text-sm text-text-faint">
                    {item.nameJa}
                  </p>
                  <p className="mt-2 text-xs text-text-faint">{item.type}</p>
                  <p className="mt-1 text-xs text-text-faint">{item.note}</p>
                </Link>
              </li>
            ),
          )}
        </ul>
      </section>

      {/* 19. Related writers */}
      <section className="my-14" aria-labelledby="related-writers">
        <h2
          id="related-writers"
          className="editorial text-2xl text-text md:text-3xl"
        >
          Related writers
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {kafuRelatedWriters.map((w) =>
            w.coming || !w.href ? (
              <li
                key={w.id}
                className="border border-dashed border-border px-4 py-4 text-sm text-text-faint"
              >
                <p className="text-text-soft">{w.name}</p>
                <p className="jp-serif mt-1">{w.nameJa}</p>
                <p className="mt-2 text-xs">{w.connection}</p>
                <p className="mt-2 text-xs">Coming writer</p>
              </li>
            ) : (
              <li key={w.id}>
                <Link
                  href={w.href}
                  className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                >
                  <p className="text-sm text-text-soft">{w.name}</p>
                  <p className="jp-serif mt-1 text-sm text-text-faint">
                    {w.nameJa}
                  </p>
                  <p className="mt-2 text-xs text-text-faint">{w.connection}</p>
                </Link>
              </li>
            ),
          )}
        </ul>
      </section>

      {/* Related pages */}
      <section className="my-14" aria-labelledby="related-pages">
        <h2 id="related-pages" className="editorial text-2xl text-text">
          Related pages
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {kafuRelatedPages.map((page) => (
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
