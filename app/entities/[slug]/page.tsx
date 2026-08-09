import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EntityStatusBadge } from "@/components/EntityStatusBadge";
import { SourceList } from "@/components/SourceList";
import { HayashiMemorialObservatory } from "@/components/entities/HayashiMemorialObservatory";
import { TomaruObservatory } from "@/components/entities/TomaruObservatory";
import {
  entities,
  getEntityBySlug,
  getEntryById,
  getWriterById,
} from "@/data/index";
import { MEMORIAL_SLUG } from "@/data/entities/hayashi-fumiko-memorial-hall";
import { TOMARU_SLUG } from "@/data/entities/tomaru-shoten";
import { ENTITY_TYPE_LABELS, VERIFICATION_LABELS } from "@/lib/labels";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return entities.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entity = getEntityBySlug(slug);
  if (!entity) return { title: "Entity" };

  if (slug === TOMARU_SLUG) {
    const title = "都丸書店｜Diary Observatory";
    const description =
      "西村賢太の日記に登場する高円寺の都丸書店を起点に、その日の移動、購入した古書、街の文化動線、現在の状況を観測するEntity Observatoryページ。";
    return {
      title: { absolute: title },
      description,
      openGraph: {
        title,
        description,
        type: "article",
        url: `${SITE_URL}/entities/${slug}`,
      },
    };
  }

  if (slug === MEMORIAL_SLUG) {
    const title = "林芙美子記念館｜Diary Observatory";
    const description =
      "林芙美子記念館を、成功後の住居、書斎、家事、庭、来客、保存建築、展示、記念館化、失われた下宿との対比から観測するEntityページ。";
    return {
      title: { absolute: title },
      description,
      openGraph: {
        title,
        description,
        type: "article",
        url: `${SITE_URL}/entities/${slug}`,
      },
    };
  }

  return {
    title: entity.nameOriginal ?? entity.name,
    description: entity.description,
  };
}

export default async function EntityDetailPage({ params }: Props) {
  const { slug } = await params;
  const entity = getEntityBySlug(slug);
  if (!entity) notFound();

  if (slug === TOMARU_SLUG) {
    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": ["BookStore", "LocalBusiness", "Place"],
        name: entity.nameOriginal ?? entity.name,
        alternateName: entity.name,
        description: entity.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: entity.area ?? entity.city,
          addressRegion: entity.city,
          addressCountry: entity.country,
        },
        url: `${SITE_URL}/entities/${entity.slug}`,
      },
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: "都丸書店 — Entity Observatory",
        about: entity.nameOriginal ?? entity.name,
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        mainEntityOfPage: `${SITE_URL}/entities/${entity.slug}`,
      },
    ];

    return (
      <>
        {jsonLd.map((item, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
        <TomaruObservatory entity={entity} />
      </>
    );
  }

  if (slug === MEMORIAL_SLUG) {
    const writer = getWriterById("writer-hayashi");
    const placeUrl = `${SITE_URL}/entities/${entity.slug}`;
    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": ["Museum", "House", "LandmarksOrHistoricalBuildings", "Place"],
        name: entity.nameOriginal ?? entity.name,
        alternateName: entity.name,
        description: entity.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: entity.city,
          addressCountry: entity.country,
        },
        url: placeUrl,
      },
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: "林芙美子記念館 — Entity Observatory",
        about: entity.nameOriginal ?? entity.name,
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        mainEntityOfPage: placeUrl,
        author: writer
          ? {
              "@type": "Person",
              name: writer.name,
              alternateName: writer.nameJa,
              url: `${SITE_URL}/writers/${writer.slug}`,
            }
          : undefined,
      },
    ];

    return (
      <>
        {jsonLd.map((item, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
        <HayashiMemorialObservatory entity={entity} />
      </>
    );
  }

  const type = ENTITY_TYPE_LABELS[entity.type];
  const verification = VERIFICATION_LABELS[entity.verificationStatus];
  const relatedWriters = entity.writerIds
    .map((id) => getWriterById(id))
    .filter(Boolean);
  const relatedEntries = entity.entryIds
    .map((id) => getEntryById(id))
    .filter(Boolean);

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <p className="label">
        {type.en} / {type.ja}
      </p>
      <h1 className="editorial mt-3 text-4xl text-text">{entity.name}</h1>
      {entity.nameOriginal && (
        <p className="jp-heading mt-3 text-2xl">{entity.nameOriginal}</p>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
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

      <p className="mt-8 text-text-soft">{entity.description}</p>
      {entity.descriptionJa && (
        <p className="jp-serif mt-3 text-sm text-text-faint">
          {entity.descriptionJa}
        </p>
      )}

      <dl className="mt-10 grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="label">Then / location</dt>
          <dd className="mt-1 text-text-soft">
            {[entity.address, entity.area, entity.city, entity.country]
              .filter(Boolean)
              .join(" / ") || "—"}
          </dd>
        </div>
        <div>
          <dt className="label">Current status as of</dt>
          <dd className="mt-1 text-text-soft">{entity.statusAsOf ?? "—"}</dd>
        </div>
        <div>
          <dt className="label">Last verified</dt>
          <dd className="mt-1 text-text-soft">{entity.lastVerified ?? "—"}</dd>
        </div>
        <div>
          <dt className="label">Verification status</dt>
          <dd className="mt-1 text-text-soft">
            {verification.en} / {verification.ja}
          </dd>
        </div>
      </dl>

      {entity.notes && (
        <p className="mt-6 border-l border-border pl-4 text-sm text-text-faint">
          {entity.notes}
        </p>
      )}

      <section className="mt-12">
        <h2 className="editorial text-2xl text-text">Related writers</h2>
        <ul className="mt-4 space-y-2">
          {relatedWriters.map(
            (writer) =>
              writer && (
                <li key={writer.id}>
                  <Link
                    href={`/writers/${writer.slug}`}
                    className="focus-ring text-sm text-text-soft underline-offset-4 hover:underline"
                  >
                    {writer.name} / {writer.nameJa}
                  </Link>
                </li>
              ),
          )}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="editorial text-2xl text-text">Diary appearances</h2>
        <ul className="mt-4 space-y-2">
          {relatedEntries.map(
            (entry) =>
              entry && (
                <li key={entry.id}>
                  <Link
                    href={`/entries/${entry.slug ?? entry.date}`}
                    className="focus-ring text-sm text-text-soft underline-offset-4 hover:underline"
                  >
                    {entry.date}
                  </Link>
                </li>
              ),
          )}
        </ul>
      </section>

      <div className="mt-12">
        <SourceList sources={entity.sources} />
      </div>
    </div>
  );
}
