import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { DiaryFragment } from "@/components/DiaryFragment";
import { EntityStatusBadge } from "@/components/EntityStatusBadge";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { EntityBreadcrumb } from "@/components/entities/EntityBreadcrumb";
import { EntityPlacePortrait } from "@/components/entities/EntityPlacePortrait";
import { EntityRouteList } from "@/components/entities/EntityRouteList";
import { ThenNowBlock } from "@/components/entities/ThenNowBlock";
import {
  tomaruConcept,
  tomaruEcosystem,
  tomaruEpistemic,
  tomaruFragment,
  tomaruLead,
  tomaruLocationContext,
  tomaruPurchasedItems,
  tomaruRelatedEntities,
  tomaruRelatedObservations,
  tomaruSources,
  tomaruStatusHistory,
  tomaruTagline,
  tomaruThenNow,
  tomaruWhatDisappeared,
} from "@/data/entities/tomaru-shoten";
import { getEntityById } from "@/data/entities";
import { ENTITY_TYPE_LABELS, VERIFICATION_LABELS } from "@/lib/labels";
import type { Entity } from "@/lib/types";

function fieldOrPending(value: string | number | null | undefined) {
  if (value === null || value === undefined || value === "") return "確認中";
  return String(value);
}

export function TomaruObservatory({ entity }: { entity: Entity }) {
  const type = ENTITY_TYPE_LABELS[entity.type];
  const verification = VERIFICATION_LABELS[entity.verificationStatus];
  const nameJa = entity.nameJa ?? entity.nameOriginal ?? entity.name;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <EntityBreadcrumb name={entity.name} nameJa={nameJa} />

      <header className="mt-8 grid gap-8 border-b border-border pb-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="label">Entity Observatory</p>
          <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
            {entity.name}
          </h1>
          <p className="jp-heading mt-3 text-2xl md:text-3xl">{nameJa}</p>
          <p className="mt-4 text-sm text-text-faint">
            {type.en} / {type.ja}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <EntityStatusBadge status={entity.status} />
            <span className="border border-border px-2.5 py-1 text-xs text-text-faint">
              {verification.en} / {verification.ja}
            </span>
            {entity.sourceNeeded && (
              <span className="border border-accent/40 px-2.5 py-1 text-xs text-accent">
                Source needed
              </span>
            )}
          </div>

          <p className="mt-4 text-xs tracking-wide text-text-faint">
            Primary location: {entity.area ?? "Koenji"}, {entity.city}
          </p>
          <p className="mt-1 text-xs tracking-wide text-text-faint">
            Appears in: Kenji Nishimura’s diary
          </p>

          <p className="editorial mt-8 text-xl text-accent md:text-2xl">
            {entity.tagline ?? tomaruTagline.en}
          </p>
          <p className="jp-serif mt-2 text-base text-text-soft">
            {entity.taglineJa ?? tomaruTagline.ja}
          </p>
          <p className="mt-3 text-[0.7rem] text-text-faint">
            Tagline is Interpretation — closure is not asserted as Fact while
            status remains unknown.
          </p>

          <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
            {(entity.longDescription ?? tomaruLead).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
            <div>
              <dt className="label">Entity type</dt>
              <dd className="mt-1 text-text-soft">{type.en}</dd>
            </div>
            <div>
              <dt className="label">City / Area</dt>
              <dd className="mt-1 text-text-soft">
                {entity.city} / {entity.area ?? "—"}
              </dd>
            </div>
            <div>
              <dt className="label">Status as of</dt>
              <dd className="mt-1 text-text-soft">{entity.statusAsOf ?? "—"}</dd>
            </div>
            <div>
              <dt className="label">Verification</dt>
              <dd className="mt-1 text-text-soft">{verification.en}</dd>
            </div>
            <div>
              <dt className="label">First indexed appearance</dt>
              <dd className="mt-1 text-text-soft">2011-05-02</dd>
            </div>
            <div>
              <dt className="label">Related writer</dt>
              <dd className="mt-1">
                <Link
                  href="/writers/kenji-nishimura"
                  className="focus-ring text-text-soft underline-offset-4 hover:underline"
                >
                  Kenji Nishimura
                </Link>
              </dd>
            </div>
            <div>
              <dt className="label">Observation status</dt>
              <dd className="mt-1 text-text-soft">
                {entity.observationStatus ?? "Active"}
              </dd>
            </div>
            <div>
              <dt className="label">Last updated</dt>
              <dd className="mt-1 text-text-soft">
                {entity.lastUpdated ?? "2026-08-02"}
              </dd>
            </div>
          </dl>
        </div>

        <EntityPlacePortrait
          name={entity.name}
          nameJa={nameJa}
          area={entity.area ?? "Koenji"}
          date="2011-05-02"
          typeLabel="Bookstore"
          status={entity.status}
        />
      </header>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {(
          [
            ["fact", tomaruEpistemic.fact],
            ["observation", tomaruEpistemic.observation],
            ["interpretation", tomaruEpistemic.interpretation],
          ] as const
        ).map(([kind, items]) => (
          <div key={kind} className="paper-panel p-5">
            <EpistemicLabel kind={kind} />
            <ul className="mt-4 space-y-3">
              {items.map((item) => (
                <li key={item} className="jp-serif text-sm text-text-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="editorial text-2xl text-text">Appears in a diary</h2>
        <p className="jp-serif mt-1 text-sm text-text-faint">日記に現れる</p>
        <p className="mt-4 text-sm text-text-soft">
          Writer:{" "}
          <Link
            href={tomaruFragment.writerHref}
            className="focus-ring text-accent underline-offset-4 hover:underline"
          >
            {tomaruFragment.writerName}
          </Link>
        </p>
        <DiaryFragment
          date={tomaruFragment.date}
          locations={tomaruFragment.locations}
          events={tomaruFragment.events}
          sourceTitle={tomaruFragment.sourceTitle}
          sourceNote={tomaruFragment.sourceNote}
          relatedEntityIds={tomaruFragment.relatedEntityIds}
          entryHref={tomaruFragment.entryHref}
        />
        <div className="flex flex-wrap gap-3 text-xs">
          <Link
            href={tomaruFragment.writerHref}
            className="focus-ring border border-border px-3 py-2 text-text-soft hover:border-text-faint"
          >
            Writer
          </Link>
          <Link
            href={tomaruFragment.observationHref}
            className="focus-ring border border-border px-3 py-2 text-text-soft hover:border-text-faint"
          >
            Observation
          </Link>
          {tomaruFragment.entryAvailable ? (
            <Link
              href={tomaruFragment.entryHref}
              className="focus-ring cta cta-secondary"
            >
              Entry
            </Link>
          ) : (
            <span className="border border-border px-3 py-2 text-text-faint">
              Entry · Coming observation
            </span>
          )}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="editorial text-2xl text-text">
          Books purchased that day
        </h2>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          その日に買われた本
        </p>
        <p className="mt-3 max-w-2xl text-xs text-text-faint">
          書名・出版社・価格が原典で正確に確認できない項目は断定せず「確認中」とする。
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {tomaruPurchasedItems.map((item) => (
            <li key={item.id} className="paper-panel p-5">
              <p className="jp-heading text-lg">
                {item.title ?? "確認中"}
              </p>
              <dl className="mt-3 space-y-1 text-xs text-text-faint">
                <div>
                  <dt className="inline">Author: </dt>
                  <dd className="inline text-text-soft">
                    {fieldOrPending(item.creator)}
                  </dd>
                </div>
                <div>
                  <dt className="inline">Publisher: </dt>
                  <dd className="inline text-text-soft">
                    {fieldOrPending(item.publisher)}
                  </dd>
                </div>
                <div>
                  <dt className="inline">Edition: </dt>
                  <dd className="inline text-text-soft">
                    {fieldOrPending(item.edition)}
                  </dd>
                </div>
                <div>
                  <dt className="inline">Price: </dt>
                  <dd className="inline text-text-soft">
                    {item.price == null
                      ? "確認中"
                      : `${item.currency ?? ""} ${item.price}`}
                  </dd>
                </div>
                <div>
                  <dt className="inline">Verification: </dt>
                  <dd className="inline text-accent">
                    {VERIFICATION_LABELS[item.verificationStatus].en}
                  </dd>
                </div>
              </dl>
              {item.sourceNote && (
                <p className="mt-3 text-[0.7rem] text-text-faint">
                  {item.sourceNote}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="editorial text-2xl text-text">
          {tomaruLocationContext.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">
          {tomaruLocationContext.titleJa}
        </p>
        <div className="jp-body mt-6 space-y-4 text-sm">
          {tomaruLocationContext.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="label mt-8">Route list</p>
        <EntityRouteList steps={tomaruLocationContext.route} />
        <p className="mt-4 text-[0.65rem] text-text-faint">
          lat/lng: {String(tomaruLocationContext.latitude)} /{" "}
          {String(tomaruLocationContext.longitude)}
        </p>
      </section>

      <ThenNowBlock {...tomaruThenNow} />

      <section className="mt-14 paper-panel p-6 md:p-8">
        <h2 className="editorial text-2xl text-text">
          {tomaruWhatDisappeared.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">
          {tomaruWhatDisappeared.titleJa}
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tomaruWhatDisappeared.items.map((item) => (
            <li key={item.id} className="border border-border-soft px-4 py-3">
              <p className="editorial text-base text-text">{item.label}</p>
              <p className="jp-serif mt-1 text-sm text-accent">{item.labelJa}</p>
            </li>
          ))}
        </ul>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-sm">
          {tomaruWhatDisappeared.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="editorial text-2xl text-text">Entity Status History</h2>
        <p className="jp-serif mt-1 text-sm text-text-faint">状態の履歴</p>
        <ol className="mt-6 max-w-2xl space-y-0 border-l border-border">
          {tomaruStatusHistory.map((event) => (
            <li key={event.id} className="relative py-5 pl-6">
              <span
                className="absolute left-0 top-7 h-2 w-2 -translate-x-1/2 rounded-full bg-accent"
                aria-hidden="true"
              />
              <p className="label">
                {event.year === "unknown" ? "Date unknown" : event.year}
              </p>
              <p className="editorial mt-2 text-lg text-text">{event.label}</p>
              {event.labelJa && (
                <p className="jp-serif mt-1 text-sm text-accent">
                  {event.labelJa}
                </p>
              )}
              {event.description && (
                <p className="mt-2 text-xs text-text-faint">
                  {event.description}
                </p>
              )}
              <p className="mt-2 text-[0.65rem] text-text-faint">
                {VERIFICATION_LABELS[event.verificationStatus].en}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="editorial text-2xl text-text">Related entities</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tomaruRelatedEntities.map((rel) => {
            const related = getEntityById(rel.entityId);
            if (!related) return null;
            const relatedType = ENTITY_TYPE_LABELS[related.type];
            return (
              <article key={rel.entityId} className="paper-panel flex flex-col p-5">
                <div className="flex flex-wrap gap-2">
                  <EntityStatusBadge status={related.status} size="sm" />
                  <span className="text-[0.65rem] text-text-faint">
                    {relatedType.en}
                  </span>
                </div>
                <h3 className="editorial mt-3 text-xl text-text">
                  {related.nameOriginal ?? related.name}
                </h3>
                <p className="mt-2 text-xs text-text-faint">{rel.relationship}</p>
                <p className="jp-serif mt-1 text-xs text-text-soft">
                  {rel.relationshipJa}
                </p>
                <p className="mt-2 text-[0.65rem] text-text-faint">
                  {VERIFICATION_LABELS[related.verificationStatus].en}
                </p>
                <Link
                  href={`/entities/${related.slug}`}
                  className="focus-ring mt-auto pt-3 text-xs text-accent underline-offset-4 hover:underline"
                >
                  View entity
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-16 paper-panel p-6 md:p-8">
        <p className="label">Cultural Ecosystem</p>
        <h2 className="editorial mt-3 text-2xl text-text">
          {tomaruEcosystem.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{tomaruEcosystem.titleJa}</p>
        <ol className="mt-8 flex flex-col">
          {tomaruEcosystem.flow.map((step, index) => (
            <li key={step} className="flex flex-col items-start">
              <span className="border border-border px-4 py-2 text-sm text-text-soft">
                {step}
              </span>
              {index < tomaruEcosystem.flow.length - 1 && (
                <span className="px-3 py-1 text-xs text-accent" aria-hidden="true">
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
        <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm">
          {tomaruEcosystem.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="my-14 border border-border px-6 py-8 md:px-8">
        <p className="label">Concept</p>
        <h2 className="editorial mt-3 text-2xl text-accent md:text-3xl">
          {tomaruConcept.title}
        </h2>
        <p className="jp-heading mt-2 text-lg">{tomaruConcept.titleJa}</p>
        <div className="jp-body mt-6 space-y-4 text-[0.95rem]">
          {tomaruConcept.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <CategorizedSourceList sources={tomaruSources} />

      <section className="mt-16">
        <h2 className="editorial text-2xl text-text">Related Observations</h2>
        <ul className="mt-6 space-y-3">
          {tomaruRelatedObservations.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-2 border border-border-soft px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="focus-ring jp-serif text-sm text-text underline-offset-4 hover:underline"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <p className="jp-serif text-sm text-text">{item.title}</p>
                )}
                {item.subtitle && (
                  <p className="mt-1 text-xs text-text-faint">{item.subtitle}</p>
                )}
              </div>
              {item.status === "coming" && (
                <span className="shrink-0 border border-border px-2 py-1 text-[0.65rem] text-text-faint">
                  Coming observation
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
