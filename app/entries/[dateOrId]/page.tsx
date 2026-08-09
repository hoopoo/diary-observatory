import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EntryMetadata } from "@/components/EntryMetadata";
import { KafuEntryObservatory } from "@/components/entries/KafuEntryObservatory";
import { NishimuraEntryObservatory } from "@/components/entries/NishimuraEntryObservatory";
import { SourceList } from "@/components/SourceList";
import {
  entries,
  getDiaryById,
  getEntitiesByIds,
  getEntryByDateOrId,
  getWriterById,
} from "@/data/index";
import {
  ENTRY_ID_2011_05_02,
  ENTRY_SLUG_2011_05_02,
  entry20110502Meta,
} from "@/data/entries/2011-05-02-kenji-nishimura";
import {
  ENTRY_ID_1918_01_01,
  ENTRY_SLUG_1918_01_01,
  entry19180101Meta,
} from "@/data/entries/1918-01-01-kafu-nagai";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ dateOrId: string }> };

function isNishimuraEntry20110502(dateOrId: string, entryId: string) {
  return (
    dateOrId === ENTRY_SLUG_2011_05_02 ||
    dateOrId === ENTRY_ID_2011_05_02 ||
    dateOrId === "2011-05-02" ||
    entryId === ENTRY_ID_2011_05_02
  );
}

function isKafuEntry19180101(dateOrId: string, entryId: string) {
  return (
    dateOrId === ENTRY_SLUG_1918_01_01 ||
    dateOrId === ENTRY_ID_1918_01_01 ||
    dateOrId === "1918-01-01" ||
    entryId === ENTRY_ID_1918_01_01
  );
}

export function generateStaticParams() {
  return entries.flatMap((e) =>
    [
      { dateOrId: e.date },
      { dateOrId: e.id },
      e.slug ? { dateOrId: e.slug } : null,
    ].filter(Boolean) as Array<{ dateOrId: string }>,
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { dateOrId } = await params;
  const entry = getEntryByDateOrId(dateOrId);
  if (!entry) return { title: "Entry" };

  if (isNishimuraEntry20110502(dateOrId, entry.id)) {
    const title = "2011年5月2日｜西村賢太の日記｜Diary Observatory";
    const description =
      "西村賢太が新潮社で仕事をし、高円寺の都丸書店へ立ち寄り、ShowBoatで友川カズキのライブを見た2011年5月2日の一日を、場所、人物、購入物、現在状況から観測する。";
    return {
      title: { absolute: title },
      description,
      openGraph: {
        title,
        description,
        type: "article",
        url: `${SITE_URL}/entries/${ENTRY_SLUG_2011_05_02}`,
      },
    };
  }

  if (isKafuEntry19180101(dateOrId, entry.id)) {
    const title = "1918年1月1日｜永井荷風｜Diary Observatory";
    const description =
      "永井荷風『断腸亭日乗』1918年1月1日の記録を、日付、生活行為、環境、身体とともに、版、ページ、SourceCapture、Fact、Observation、Interpretationまで根拠経路を追跡して読む。現時点は Partial Provenance（Edition / Page / Capture 未登録）。";
    return {
      title: { absolute: title },
      description,
      openGraph: {
        title,
        description,
        type: "article",
        url: `${SITE_URL}/entries/${ENTRY_SLUG_1918_01_01}`,
      },
    };
  }

  return {
    title: entry.title ? `${entry.date} — ${entry.title}` : entry.date,
    description: entry.excerpt ?? `Diary entry index for ${entry.date}`,
  };
}

export default async function EntryPage({ params }: Props) {
  const { dateOrId } = await params;
  const entry = getEntryByDateOrId(dateOrId);
  if (!entry) notFound();

  if (isNishimuraEntry20110502(dateOrId, entry.id)) {
    const dayEntities = getEntitiesByIds(entry20110502Meta.entityIds);
    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: "2011年5月2日｜西村賢太の日記",
        dateCreated: "2011-05-02",
        description:
          "Editorial reconstruction of a lived day indexed from a copyright-protected diary. No long quotation.",
        author: {
          "@type": "Person",
          name: "Kenji Nishimura",
          alternateName: "西村賢太",
          url: `${SITE_URL}/writers/kenji-nishimura`,
        },
        about: [
          {
            "@type": "Place",
            name: "Shinchosha",
            url: `${SITE_URL}/entities/shinchosha`,
          },
          {
            "@type": "Place",
            name: "Kōenji",
            url: `${SITE_URL}/entities/koenji`,
          },
        ],
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        mainEntityOfPage: `${SITE_URL}/entries/${ENTRY_SLUG_2011_05_02}`,
      },
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "2011年5月2日｜西村賢太の日記｜Diary Observatory",
        datePublished: "2026-08-02",
        dateModified: entry20110502Meta.lastUpdated,
        inLanguage: "ja",
        author: {
          "@type": "Organization",
          name: "SHIRO & Co.",
          url: "https://shiroand.io",
        },
        mainEntityOfPage: `${SITE_URL}/entries/${ENTRY_SLUG_2011_05_02}`,
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Kenji Nishimura",
        alternateName: "西村賢太",
        url: `${SITE_URL}/writers/kenji-nishimura`,
      },
    ];

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NishimuraEntryObservatory entities={dayEntities} />
      </>
    );
  }

  if (isKafuEntry19180101(dateOrId, entry.id)) {
    const dayEntities = getEntitiesByIds(entry19180101Meta.entityIds);
    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: "1918年1月1日｜永井荷風の日記",
        dateCreated: "1918-01-01",
        description:
          "Editorial reconstruction of a lived New Year’s Day. No long quotation of the diary text.",
        author: {
          "@type": "Person",
          name: "Kafū Nagai",
          alternateName: "永井荷風",
          url: `${SITE_URL}/writers/kafu-nagai`,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        mainEntityOfPage: `${SITE_URL}/entries/${ENTRY_SLUG_1918_01_01}`,
      },
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "1918年1月1日｜永井荷風の日記｜Diary Observatory",
        datePublished: "2026-08-02",
        dateModified: entry19180101Meta.lastUpdated,
        inLanguage: "ja",
        author: {
          "@type": "Organization",
          name: "SHIRO & Co.",
          url: "https://shiroand.io",
        },
        mainEntityOfPage: `${SITE_URL}/entries/${ENTRY_SLUG_1918_01_01}`,
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Kafū Nagai",
        alternateName: "永井荷風",
        url: `${SITE_URL}/writers/kafu-nagai`,
      },
    ];

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <KafuEntryObservatory entities={dayEntities} />
      </>
    );
  }

  const diary = getDiaryById(entry.workId);
  const writer = diary ? getWriterById(diary.writerId) : undefined;
  const linked = getEntitiesByIds([
    ...entry.entityIds,
    ...entry.locationIds,
    ...entry.personIds,
  ]);

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <p className="label">Diary entry</p>
      <h1 className="editorial mt-3 text-4xl text-text">{entry.date}</h1>
      {entry.title && (
        <p className="mt-3 text-lg text-text-soft">{entry.title}</p>
      )}

      {(writer || diary) && (
        <p className="mt-4 text-sm text-text-faint">
          {writer && (
            <Link
              href={`/writers/${writer.slug}`}
              className="focus-ring underline-offset-4 hover:underline"
            >
              {writer.nameJa}
            </Link>
          )}
          {writer && diary && " · "}
          {diary && (
            <Link
              href={`/diaries/${diary.slug}`}
              className="focus-ring underline-offset-4 hover:underline"
            >
              {diary.titleOriginal}
            </Link>
          )}
        </p>
      )}

      {entry.excerpt && (
        <p className="mt-8 border-l border-border pl-4 text-sm text-text-soft">
          {entry.excerpt}
        </p>
      )}

      <div className="mt-10">
        <EntryMetadata entry={entry} entities={linked} />
      </div>

      {entry.notes && (
        <p className="mt-8 text-sm text-text-faint">{entry.notes}</p>
      )}

      <div className="mt-12">
        <SourceList
          sources={[
            {
              id: `entry-source-${entry.id}`,
              label: entry.source,
              note: "Long quotations are not reproduced on this page.",
            },
          ]}
        />
      </div>
    </div>
  );
}
