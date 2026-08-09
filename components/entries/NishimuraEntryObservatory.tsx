import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { ConceptBlock } from "@/components/ConceptBlock";
import { EntityStatusBadge } from "@/components/EntityStatusBadge";
import { SurvivalSummary } from "@/components/SurvivalSummary";
import { ThenNowBlock } from "@/components/entities/ThenNowBlock";
import { EntryBreadcrumb } from "@/components/entries/EntryBreadcrumb";
import { EntryDayLayers } from "@/components/entries/EntryDayLayers";
import { EntryTimeline } from "@/components/entries/EntryTimeline";
import { RouteTimeline } from "@/components/entries/RouteTimeline";
import { EntryProvenanceSummary } from "@/components/provenance/EntryProvenanceSummary";
import { LiteraryEvidenceWarning } from "@/components/provenance/LiteraryEvidenceWarning";
import { ProvenanceAudit } from "@/components/provenance/ProvenanceAudit";
import {
  culturalSystem,
  dayAtAGlance,
  diaryAsEvidence,
  ENTRY_ID_2011_05_02,
  entry20110502Meta,
  entryLayers,
  entryRoutePoints,
  entrySourceNotice,
  entrySources,
  entryTimeline,
  moneyRecord,
  peopleInDay,
  placesInDay,
  purchasedItems,
  relatedPages,
  thenAndNow,
  whatWouldBeDifferent,
  worldStatusMeta,
} from "@/data/entries/2011-05-02-kenji-nishimura";
import {
  ENTITY_TYPE_LABELS,
  VERIFICATION_LABELS,
} from "@/lib/labels";
import { summarizeSurvival } from "@/lib/survival";
import type { Entity } from "@/lib/types";

function fieldOrPending(value: string | number | null | undefined) {
  if (value === null || value === undefined || value === "") return "確認中";
  return String(value);
}

export function NishimuraEntryObservatory({
  entities,
}: {
  entities: Entity[];
}) {
  const byId = new Map(entities.map((e) => [e.id, e]));
  const worldStatus = summarizeSurvival(entities, worldStatusMeta);
  const meta = entry20110502Meta;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <EntryBreadcrumb
        year="2011"
        monthDay="May 2"
        writerName={meta.writerName}
      />

      {/* 1. Entry Header */}
      <header className="mt-8 border-b border-border pb-12">
        <p className="label">Diary Entry</p>
        <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
          {meta.dateEn}
        </h1>
        <p className="jp-heading mt-3 text-2xl md:text-3xl">{meta.dateJa}</p>

        <p className="mt-6 text-sm text-text-soft">
          <Link
            href={meta.writerHref}
            className="focus-ring underline-offset-4 hover:underline"
          >
            {meta.writerName}
          </Link>
          <span className="text-text-faint"> / {meta.writerNameJa}</span>
        </p>

        <p className="mt-3 text-xs tracking-wide text-text-faint">
          Primary locations: {meta.primaryLocations.join(" / ")}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {meta.themes.map((theme) => (
            <li
              key={theme}
              className="border border-border px-2.5 py-1 text-[0.7rem] tracking-wide text-text-faint"
            >
              {theme}
            </li>
          ))}
        </ul>

        <p className="editorial mt-8 max-w-2xl text-xl text-accent md:text-2xl">
          {meta.tagline.en}
        </p>
        <p className="jp-serif mt-2 max-w-2xl text-base text-text-soft">
          {meta.tagline.ja}
        </p>

        <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
          {meta.lead.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="label">Date</dt>
            <dd className="mt-1 text-text-soft">{meta.date}</dd>
          </div>
          <div>
            <dt className="label">Day</dt>
            <dd className="mt-1 text-text-soft">{meta.dayOfWeek}</dd>
          </div>
          <div>
            <dt className="label">Writer</dt>
            <dd className="mt-1 text-text-soft">{meta.writerName}</dd>
          </div>
          <div>
            <dt className="label">Cities</dt>
            <dd className="mt-1 text-text-soft">Tokyo</dd>
          </div>
          <div>
            <dt className="label">Areas</dt>
            <dd className="mt-1 text-text-soft">
              {meta.primaryLocations.join(" / ")}
            </dd>
          </div>
          <div>
            <dt className="label">Entry type</dt>
            <dd className="mt-1 text-text-soft">Daily record</dd>
          </div>
          <div>
            <dt className="label">Observation status</dt>
            <dd className="mt-1 text-text-soft">{meta.observationStatus}</dd>
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

      {/* 2. Source Notice */}
      <section className="my-12 border border-accent/30 bg-bg-raised px-6 py-6 md:px-8">
        <p className="label">{entrySourceNotice.title}</p>
        <h2 className="jp-heading mt-2 text-xl">{entrySourceNotice.titleJa}</h2>
        <div className="jp-body mt-4 space-y-3 text-sm text-text-soft">
          {entrySourceNotice.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="mt-5 flex flex-wrap gap-2">
          {entrySourceNotice.labels.map((label) => (
            <li
              key={label.en}
              className="border border-border px-2.5 py-1 text-[0.7rem] text-text-faint"
            >
              {label.en}: {label.ja}
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Day Summary */}
      <section className="my-14" aria-labelledby="day-glance">
        <h2 id="day-glance" className="editorial text-2xl text-text md:text-3xl">
          The day at a glance
        </h2>
        <p className="jp-heading mt-2 text-lg">この一日</p>
        <p className="mt-3 max-w-2xl text-xs text-text-faint">
          Exact clock times that cannot be verified from the primary text are
          shown only as Morning / Afternoon / Evening. No invented minutes.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {dayAtAGlance.map((block) => (
            <article key={block.id} className="paper-panel p-5">
              <p className="label">{block.label}</p>
              <p className="jp-serif mt-1 text-sm text-accent">{block.labelJa}</p>
              <ul className="mt-4 space-y-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-text-soft"
                  >
                    <span className="text-accent" aria-hidden="true">
                      –
                    </span>
                    <span className="jp-serif">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Timeline */}
      <section className="my-14" aria-labelledby="entry-timeline">
        <h2
          id="entry-timeline"
          className="editorial text-2xl text-text md:text-3xl"
        >
          Timeline of the day
        </h2>
        <p className="jp-heading mt-2 text-lg">一日の時系列</p>
        <EntryTimeline events={entryTimeline} entitiesById={byId} />
      </section>

      {/* 5. Route */}
      <section className="my-14" aria-labelledby="entry-route">
        <h2 id="entry-route" className="editorial text-2xl text-text md:text-3xl">
          Route through the city
        </h2>
        <p className="jp-heading mt-2 text-lg">この日の移動</p>
        <p className="mt-3 max-w-2xl text-sm text-text-faint">
          Home departure and path to Shinchosha are not asserted when the
          primary text does not make them clear. Only the known route is shown.
        </p>
        <div className="mt-8 max-w-md">
          <RouteTimeline points={entryRoutePoints} />
        </div>
      </section>

      {/* 6. Places */}
      <section className="my-14" aria-labelledby="places-day">
        <h2 id="places-day" className="editorial text-2xl text-text md:text-3xl">
          Places in this day
        </h2>
        <p className="jp-heading mt-2 text-lg">この日に登場する場所</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {placesInDay.map((place) => {
            const entity = byId.get(place.entityId);
            if (!entity) {
              return (
                <article
                  key={place.entityId}
                  className="border border-border-soft px-5 py-5 text-sm text-text-faint"
                >
                  Coming entity
                </article>
              );
            }
            const type = ENTITY_TYPE_LABELS[entity.type];
            const verification = VERIFICATION_LABELS[entity.verificationStatus];
            return (
              <article
                key={place.entityId}
                className="border border-border px-5 py-5"
              >
                <h3 className="editorial text-xl text-text">{entity.name}</h3>
                <p className="jp-serif mt-1 text-sm text-text-soft">
                  {entity.nameOriginal ?? entity.nameJa}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
                    {type.en}
                  </span>
                  <EntityStatusBadge status={entity.status} size="sm" />
                  <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
                    {verification.en}
                  </span>
                </div>
                <p className="mt-3 text-sm text-text-soft">
                  Role: {place.role}
                </p>
                <p className="jp-serif text-xs text-text-faint">{place.roleJa}</p>
                <Link
                  href={`/entities/${entity.slug}`}
                  className="focus-ring mt-4 inline-block text-xs tracking-wide text-accent underline-offset-4 hover:underline"
                >
                  View entity
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* 7. People */}
      <section className="my-14" aria-labelledby="people-day">
        <h2 id="people-day" className="editorial text-2xl text-text md:text-3xl">
          People in this day
        </h2>
        <p className="jp-heading mt-2 text-lg">この日に登場する人</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {peopleInDay.map((person) => {
            const entity = byId.get(person.entityId);
            if (!entity) {
              return (
                <article
                  key={person.entityId}
                  className="border border-border-soft px-5 py-5 text-sm text-text-faint"
                >
                  Coming entity
                </article>
              );
            }
            const verification = VERIFICATION_LABELS[entity.verificationStatus];
            return (
              <article
                key={person.entityId}
                className="border border-border px-5 py-5"
              >
                <h3 className="editorial text-xl text-text">{entity.name}</h3>
                <p className="jp-serif mt-1 text-sm text-text-soft">
                  {entity.nameOriginal ?? entity.nameJa}
                </p>
                <p className="mt-3 text-sm text-text-soft">Role: {person.role}</p>
                <p className="jp-serif text-xs text-text-faint">{person.roleJa}</p>
                <p className="mt-2 text-xs text-text-faint">
                  Relationship: {person.relationship} / {person.relationshipJa}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <EntityStatusBadge status={entity.status} size="sm" />
                  <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
                    {verification.en}
                  </span>
                </div>
                <p className="mt-3 text-xs text-text-faint">
                  Appears in: {meta.dateEn}
                </p>
                <Link
                  href={`/entities/${entity.slug}`}
                  className="focus-ring mt-4 inline-block text-xs tracking-wide text-accent underline-offset-4 hover:underline"
                >
                  View entity
                </Link>
              </article>
            );
          })}
          <article className="border border-border-soft px-5 py-5">
            <h3 className="editorial text-xl text-text-faint">Other attendees</h3>
            <p className="jp-serif mt-1 text-sm text-text-faint">その他の関係者</p>
            <p className="mt-3 text-sm text-text-soft">Role: Unknown</p>
            <p className="mt-2 text-xs text-text-faint">
              Names read from images are not asserted without primary-text
              confirmation.
            </p>
            <div className="mt-3">
              <EntityStatusBadge status="unknown" size="sm" />
            </div>
          </article>
        </div>
      </section>

      {/* 8. Books and objects */}
      <section className="my-14" aria-labelledby="books-objects">
        <h2
          id="books-objects"
          className="editorial text-2xl text-text md:text-3xl"
        >
          Books and objects
        </h2>
        <p className="jp-heading mt-2 text-lg">買われた本と物</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {purchasedItems.map((item) => {
            const verification = VERIFICATION_LABELS[item.verificationStatus];
            return (
              <article
                key={item.id}
                className="border border-border px-5 py-5 text-sm"
              >
                <h3 className="editorial text-lg text-text">
                  {item.title ?? "Unknown"}
                </h3>
                <dl className="mt-3 space-y-1.5 text-xs text-text-faint">
                  <div>
                    <dt className="inline">Author: </dt>
                    <dd className="inline text-text-soft">
                      {fieldOrPending(item.creator)}
                    </dd>
                  </div>
                  <div>
                    <dt className="inline">Object type: </dt>
                    <dd className="inline text-text-soft">{item.type}</dd>
                  </div>
                  <div>
                    <dt className="inline">Purchased at: </dt>
                    <dd className="inline text-text-soft">
                      {item.purchasedAtLabelJa ??
                        item.purchasedAtLabel ??
                        "確認中"}
                    </dd>
                  </div>
                  <div>
                    <dt className="inline">Price: </dt>
                    <dd className="inline text-text-soft">
                      {item.money?.verificationStatus === "verified"
                        ? `${item.money.currency} ${item.money.amount}`
                        : "Unknown / 確認中"}
                    </dd>
                  </div>
                  <div>
                    <dt className="inline">Edition: </dt>
                    <dd className="inline text-text-soft">
                      {fieldOrPending(item.edition)}
                    </dd>
                  </div>
                  <div>
                    <dt className="inline">Verification: </dt>
                    <dd className="inline">
                      {verification.en} / {verification.ja}
                    </dd>
                  </div>
                </dl>
                {item.sourceNote && (
                  <p className="mt-3 text-[0.7rem] text-text-faint">
                    {item.sourceNote}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* 9. Money */}
      <section className="my-14" aria-labelledby="money-day">
        <h2 id="money-day" className="editorial text-2xl text-text md:text-3xl">
          Money in the diary
        </h2>
        <p className="jp-heading mt-2 text-lg">日記に記録された金額</p>
        <div className="mt-6 border border-border px-5 py-5">
          <p className="text-sm text-text-soft">
            Known spending:{" "}
            {moneyRecord.knownSpending
              ? `${moneyRecord.knownSpending.currency === "JPY" ? "¥" : ""}${moneyRecord.knownSpending.amount.toLocaleString()}`
              : "none verified"}
          </p>
          <p className="mt-2 text-sm text-text-soft">
            Unverified spending: {moneyRecord.unverifiedSpendingCount} item
            {moneyRecord.unverifiedSpendingCount === 1 ? "" : "s"}
          </p>
          <p className="mt-3 text-xs text-text-faint">{moneyRecord.note}</p>
        </div>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-sm text-text-soft">
          {moneyRecord.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 10. Fact / Observation / Interpretation */}
      <section className="my-14" aria-labelledby="layers">
        <h2 id="layers" className="editorial text-2xl text-text md:text-3xl">
          Fact / Observation / Interpretation
        </h2>
        <p className="jp-heading mt-2 text-lg">三層の読み</p>
        <EntryDayLayers layers={entryLayers} />
      </section>

      {/* 11. Then and Now */}
      <ThenNowBlock
        title="This day, then and now"
        titleJa="この日を、当時と現在から見る"
        then={thenAndNow.then}
        now={thenAndNow.now}
        note="Unverified items remain Unknown. Closure is not asserted for Tomaru Shoten."
      />

      {/* 12. World Status */}
      <div className="my-14">
        <SurvivalSummary data={worldStatus} />
      </div>

      {/* 13. Cultural system */}
      <section className="my-14" aria-labelledby="cultural-system">
        <h2
          id="cultural-system"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {culturalSystem.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{culturalSystem.titleJa}</p>
        <ol className="mt-8 flex max-w-md flex-col">
          {culturalSystem.nodes.map((node, index) => (
            <li key={node.label} className="flex flex-col items-start">
              <div className="border border-border px-4 py-3 text-sm">
                <p className="label">{node.label}</p>
                {node.href ? (
                  <Link
                    href={node.href}
                    className="focus-ring jp-serif mt-1 inline-block text-text-soft underline-offset-4 hover:underline"
                  >
                    {node.labelJa}
                  </Link>
                ) : (
                  <p className="jp-serif mt-1 text-text-soft">{node.labelJa}</p>
                )}
              </div>
              {index < culturalSystem.nodes.length - 1 && (
                <span className="px-3 py-1 text-xs text-accent" aria-hidden="true">
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
        <div className="jp-body mt-8 max-w-2xl space-y-4 text-sm text-text-soft">
          {culturalSystem.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* 14. What would be different */}
      <section className="my-14" aria-labelledby="different-today">
        <h2
          id="different-today"
          className="editorial text-2xl text-text md:text-3xl"
        >
          {whatWouldBeDifferent.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{whatWouldBeDifferent.titleJa}</p>
        <div className="jp-body mt-6 max-w-2xl space-y-4 text-sm text-text-soft">
          {whatWouldBeDifferent.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-4 max-w-2xl text-xs text-text-faint">
          {whatWouldBeDifferent.note}
        </p>
      </section>

      {/* 15. Diary as evidence */}
      <ConceptBlock
        title={diaryAsEvidence.title}
        titleJa={diaryAsEvidence.titleJa}
        paragraphs={diaryAsEvidence.paragraphs}
      />

      {/* 16. Same Day */}
      <section className="my-14 border border-border px-6 py-8" aria-labelledby="same-day">
        <h2 id="same-day" className="editorial text-2xl text-text">
          Other lives on May 2, 2011
        </h2>
        <p className="jp-heading mt-2 text-lg">同じ日、別の人生</p>
        <p className="mt-4 text-sm text-text-soft">
          One indexed life, for now. No other diaries yet on this date.
        </p>
        <p className="jp-serif mt-2 text-sm text-text-faint">
          いま記録されているのは、一人の一日だけ。別都市の日記はまだ索引化されていません。
        </p>
        <Link
          href="/same-day/2011-05-02"
          className="focus-ring mt-6 inline-block cta cta-secondary"
        >
          Open Same Day — May 2, 2011
        </Link>
      </section>

      {/* 17. Related pages */}
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

      <EntryProvenanceSummary entryId={ENTRY_ID_2011_05_02} />

      <LiteraryEvidenceWarning />

      {/* 18. Sources */}
      <CategorizedSourceList sources={entrySources} />

      <ProvenanceAudit entryId={ENTRY_ID_2011_05_02} />
    </div>
  );
}
