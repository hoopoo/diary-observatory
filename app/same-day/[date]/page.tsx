import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Jan1SameDayObservatory } from "@/components/same-day/Jan1SameDayObservatory";
import { May2SameDayObservatory } from "@/components/same-day/May2SameDayObservatory";
import { getEntitiesByIds } from "@/data/entities";
import {
  SAME_DAY_SLUG_2011_05_02,
  sameDay20110502,
  sameDayEntityIds,
} from "@/data/same-day/2011-05-02";
import {
  SAME_DAY_SLUG_1918_01_01,
  sameDay19180101,
} from "@/data/same-day/1918-01-01";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ date: string }> };

export function generateStaticParams() {
  return [
    { date: SAME_DAY_SLUG_2011_05_02 },
    { date: SAME_DAY_SLUG_1918_01_01 },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { date } = await params;

  if (date === SAME_DAY_SLUG_2011_05_02) {
    const title = "2011年5月2日｜Same Day｜Diary Observatory";
    const description =
      "2011年5月2日に東京で西村賢太が記録した一日を起点に、同じ日付の異なる都市と人生を将来横断比較するSame Day観測ページ。";
    return {
      title: { absolute: title },
      description,
      openGraph: {
        title,
        description,
        type: "website",
        url: `${SITE_URL}/same-day/${date}`,
      },
    };
  }

  if (date === SAME_DAY_SLUG_1918_01_01) {
    const title = "1918年1月1日｜Same Day｜Diary Observatory";
    const description =
      "1918年1月1日に永井荷風が東京で過ごした、部屋が暖まるのを待ち、片づけと掃除をした一日を起点に、同じ元日を生きた別の人生を将来横断比較するSame Dayページ。";
    return {
      title: { absolute: title },
      description,
      openGraph: {
        title,
        description,
        type: "website",
        url: `${SITE_URL}/same-day/${date}`,
      },
    };
  }

  return {
    title: `Same Day ${date}`,
    description: "Same-day comparison across diaries, cities and lives.",
  };
}

export default async function SameDayDetailPage({ params }: Props) {
  const { date } = await params;

  if (date === SAME_DAY_SLUG_2011_05_02) {
    const entities = getEntitiesByIds(sameDayEntityIds);
    const day = sameDay20110502;

    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "2011年5月2日｜Same Day｜Diary Observatory",
        description: day.summary,
        url: `${SITE_URL}/same-day/${day.slug}`,
        dateModified: day.lastUpdated,
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
        },
        about: {
          "@type": "CreativeWork",
          name: "Kenji Nishimura diary day — May 2, 2011",
          url: `${SITE_URL}/entries/2011-05-02-kenji-nishimura`,
        },
      },
    ];

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <May2SameDayObservatory entities={entities} />
      </>
    );
  }

  if (date === SAME_DAY_SLUG_1918_01_01) {
    const day = sameDay19180101;
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          name: "1918年1月1日｜Same Day｜Diary Observatory",
          description: day.summary,
          url: `${SITE_URL}/same-day/${day.slug}`,
          dateModified: day.lastUpdated,
          inLanguage: "ja",
          isPartOf: {
            "@type": "WebSite",
            name: SITE_NAME,
            url: SITE_URL,
          },
          about: { "@id": `${SITE_URL}/same-day/${day.slug}#day` },
        },
        {
          "@type": "CreativeWork",
          "@id": `${SITE_URL}/same-day/${day.slug}#day`,
          name: "January 1, 1918 — Kafū Nagai, Tokyo",
          alternateName: "1918年1月1日 — 永井荷風・東京",
          dateCreated: day.date,
          inLanguage: "ja",
          url: `${SITE_URL}/entries/1918-01-01-kafu-nagai`,
          author: {
            "@type": "Person",
            name: "Kafū Nagai",
            alternateName: "永井荷風",
            url: `${SITE_URL}/writers/kafu-nagai`,
          },
        },
        {
          "@type": "ItemList",
          name: "Indexed lives on January 1, 1918",
          numberOfItems: 1,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              url: `${SITE_URL}/entries/1918-01-01-kafu-nagai`,
              name: "Kafū Nagai — Tokyo",
            },
          ],
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Jan1SameDayObservatory />
      </>
    );
  }

  notFound();
}
