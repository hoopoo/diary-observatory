import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DiaryCard } from "@/components/DiaryCard";
import { EntityCard } from "@/components/EntityCard";
import { RelatedObservations } from "@/components/RelatedObservations";
import { Timeline } from "@/components/Timeline";
import { BukowskiObservatory } from "@/components/writers/BukowskiObservatory";
import { HayashiObservatory } from "@/components/writers/HayashiObservatory";
import { KafuObservatory } from "@/components/writers/KafuObservatory";
import { NishimuraObservatory } from "@/components/writers/NishimuraObservatory";
import { RoppaObservatory } from "@/components/writers/RoppaObservatory";
import {
  getDiariesByWriter,
  getEntitiesByWriter,
  getEntriesByWork,
  getObservationsByWriter,
  getWriterBySlug,
  writers,
} from "@/data/index";
import { BUKOWSKI_SLUG } from "@/data/writers/charles-bukowski";
import { HAYASHI_SLUG } from "@/data/writers/fumiko-hayashi";
import { ROPPA_SLUG } from "@/data/writers/furukawa-roppa";
import { KAFU_SLUG } from "@/data/writers/kafu-nagai";
import { NISHIMURA_SLUG } from "@/data/writers/kenji-nishimura";
import { personJsonLd } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ axis?: string | string[] }>;
};

export function generateStaticParams() {
  return writers.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const writer = getWriterBySlug(slug);
  if (!writer) return { title: "Writer" };

  if (slug === NISHIMURA_SLUG) {
    const title = "西村賢太｜Diary Observatory";
    const description =
      "西村賢太の日記に残された出版社、古書店、テレビ番組、街、酒、身体、編集者との関係を、現在から読み直すWriter Observatoryページ。";
    return {
      title: { absolute: title },
      description,
      openGraph: {
        title,
        description,
        type: "profile",
        url: `${SITE_URL}/writers/${slug}`,
      },
    };
  }

  if (slug === KAFU_SLUG) {
    const title = "永井荷風｜Diary Observatory";
    const description =
      "永井荷風の『断腸亭日乗』に残された天候、庭、散歩、身体、出版、戦争、東京の街を現在から読み直すWriter Observatoryページ。";
    return {
      title: { absolute: title },
      description,
      openGraph: {
        title,
        description,
        type: "profile",
        url: `${SITE_URL}/writers/${slug}`,
      },
    };
  }

  if (slug === BUKOWSKI_SLUG) {
    const title = "チャールズ・ブコウスキー｜Diary Observatory";
    const description =
      "チャールズ・ブコウスキーの晩年の日記、手紙、郵便局での労働、酒場、競馬場、ロサンゼルス、老いと書く身体を横断して観測するWriter Observatoryページ。";
    return {
      title: { absolute: title },
      description,
      openGraph: {
        title,
        description,
        type: "profile",
        url: `${SITE_URL}/writers/${slug}`,
      },
    };
  }

  if (slug === HAYASHI_SLUG) {
    const title = "林芙美子｜Diary Observatory";
    const description =
      "林芙美子の『放浪記』、賃金労働、食事、下宿、女性の家事、東京への移動、出版、改訂、成功後の家、書く身体を横断して観測するWriter Observatoryページ。";
    return {
      title: { absolute: title },
      description,
      openGraph: {
        title,
        description,
        type: "profile",
        url: `${SITE_URL}/writers/${slug}`,
      },
    };
  }

  if (slug === ROPPA_SLUG) {
    const title = "古川ロッパ｜Diary Observatory";
    const description =
      "古川ロッパの昭和日記から、舞台、稽古、本番、食事、体重、病気、観客、興行、戦争、映画、ラジオ、人気、晩年を横断して観測する。";
    return {
      title: { absolute: title },
      description,
      openGraph: {
        title,
        description,
        type: "profile",
        url: `${SITE_URL}/writers/${slug}`,
      },
    };
  }

  return {
    title: writer.name,
    description: writer.summary,
    openGraph: {
      title: `${writer.name} / ${writer.nameJa}`,
      description: writer.summary,
      type: "profile",
    },
  };
}

export default async function WriterDetailPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const query = await searchParams;
  const writer = getWriterBySlug(slug);
  if (!writer) notFound();

  const axis = Array.isArray(query.axis) ? query.axis[0] : query.axis;

  if (slug === NISHIMURA_SLUG) {
    const jsonLd = [
      personJsonLd(writer),
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: "西村賢太の日記",
        inLanguage: "ja",
        creator: {
          "@type": "Person",
          name: writer.name,
          alternateName: writer.nameJa,
        },
        url: `${SITE_URL}/diaries/isshi-shosetsukaki-no-nichijo`,
      },
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "西村賢太｜Writer Observatory",
        about: {
          "@type": "Person",
          name: writer.name,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        mainEntityOfPage: `${SITE_URL}/writers/${slug}`,
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
        <NishimuraObservatory writer={writer} activeAxis={axis} />
      </>
    );
  }

  if (slug === KAFU_SLUG) {
    const jsonLd = [
      personJsonLd(writer),
      {
        "@context": "https://schema.org",
        "@type": "Book",
        name: "断腸亭日乗",
        alternateName: "Danchōtei Nichijō",
        inLanguage: "ja",
        author: {
          "@type": "Person",
          name: writer.name,
          alternateName: writer.nameJa,
          birthDate: String(writer.birthYear),
          deathDate: String(writer.deathYear),
        },
        url: `${SITE_URL}/diaries/dancho-tei-nichijo`,
      },
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: "永井荷風｜Writer Observatory",
        about: {
          "@type": "Person",
          name: writer.name,
          alternateName: writer.nameJa,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        mainEntityOfPage: `${SITE_URL}/writers/${slug}`,
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
        <KafuObservatory writer={writer} activeAxis={axis} />
      </>
    );
  }

  if (slug === BUKOWSKI_SLUG) {
    const jsonLd = [
      personJsonLd(writer),
      {
        "@context": "https://schema.org",
        "@type": "Book",
        name: "The Captain Is Out to Lunch and the Sailors Have Taken Over the Ship",
        inLanguage: "en",
        author: {
          "@type": "Person",
          name: writer.name,
          alternateName: writer.nameJa,
          birthDate: String(writer.birthYear),
          deathDate: String(writer.deathYear),
        },
        url: `${SITE_URL}/diaries/captain-is-out-to-lunch`,
      },
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: "チャールズ・ブコウスキー｜Writer Observatory",
        about: {
          "@type": "Person",
          name: writer.name,
          alternateName: writer.nameJa,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        mainEntityOfPage: `${SITE_URL}/writers/${slug}`,
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
        <BukowskiObservatory writer={writer} activeAxis={axis} />
      </>
    );
  }

  if (slug === HAYASHI_SLUG) {
    const jsonLd = [
      personJsonLd(writer),
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: "放浪記",
        alternateName: "Hōrōki",
        inLanguage: "ja",
        creator: {
          "@type": "Person",
          name: writer.name,
          alternateName: writer.nameJa,
          birthDate: String(writer.birthYear),
          deathDate: String(writer.deathYear),
        },
        url: `${SITE_URL}/diaries/horoki`,
      },
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "林芙美子｜Writer Observatory",
        about: {
          "@type": "Person",
          name: writer.name,
          alternateName: writer.nameJa,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        mainEntityOfPage: `${SITE_URL}/writers/${slug}`,
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
        <HayashiObservatory writer={writer} activeAxis={axis} />
      </>
    );
  }

  if (slug === ROPPA_SLUG) {
    const alternateNames = [
      writer.nameJa,
      ...(writer.canonicalNameJa ? [writer.canonicalNameJa] : []),
      ...(writer.alternateNames ?? []),
    ].filter((name, index, arr) => arr.indexOf(name) === index);

    const jsonLd = [
      {
        ...personJsonLd(writer),
        alternateName: alternateNames,
        jobTitle: writer.occupations,
      },
      {
        "@context": "https://schema.org",
        "@type": "Book",
        name: "古川ロッパ昭和日記",
        alternateName: "Furukawa Roppa Shōwa Nikki",
        inLanguage: "ja",
        author: {
          "@type": "Person",
          name: writer.name,
          alternateName: alternateNames,
          birthDate: String(writer.birthYear),
          deathDate: String(writer.deathYear),
        },
        url: `${SITE_URL}/diaries/furukawa-roppa-showa-diary`,
      },
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: "古川ロッパ｜Writer Observatory",
        about: {
          "@type": "Person",
          name: writer.name,
          alternateName: alternateNames,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        mainEntityOfPage: `${SITE_URL}/writers/${slug}`,
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
        <RoppaObservatory writer={writer} activeAxis={axis} />
      </>
    );
  }

  const diaries = getDiariesByWriter(writer.id);
  const entities = getEntitiesByWriter(writer.id);
  const observations = getObservationsByWriter(writer.id);
  const workIds = diaries.map((d) => d.id);
  const dates = workIds.flatMap((id) => getEntriesByWork(id));
  const people = entities.filter((e) => e.type === "person");
  const places = entities.filter((e) => e.type !== "person");
  const jsonLd = personJsonLd(writer);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <p className="label">Writer</p>
        <h1 className="editorial mt-3 text-4xl text-text md:text-5xl">
          {writer.name}
        </h1>
        <p className="jp-heading mt-3 text-2xl">{writer.nameJa}</p>
        <p className="mt-4 text-sm text-text-faint">
          {writer.birthYear}
          {writer.deathYear ? `–${writer.deathYear}` : "–"} · {writer.city} /{" "}
          {writer.country}
        </p>
        <p className="mt-6 max-w-3xl text-text-soft">{writer.summary}</p>
        <p className="jp-serif mt-3 max-w-3xl text-sm text-text-faint">
          {writer.summaryJa}
        </p>
        <p className="jp-serif mt-6 text-accent">{writer.taglineJa}</p>

        <section className="mt-14">
          <h2 className="editorial text-2xl text-text">Chronology</h2>
          <div className="mt-6">
            <Timeline items={writer.chronology} />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="editorial text-2xl text-text">Diaries</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {diaries.map((diary) => (
              <DiaryCard key={diary.id} diary={diary} />
            ))}
          </div>
        </section>

        {people.length > 0 && (
          <section className="mt-14">
            <h2 className="editorial text-2xl text-text">People</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {people.map((entity) => (
                <EntityCard key={entity.id} entity={entity} />
              ))}
            </div>
          </section>
        )}

        <section className="mt-14">
          <h2 className="editorial text-2xl text-text">Places & entities</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {places.map((entity) => (
              <EntityCard key={entity.id} entity={entity} />
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="editorial text-2xl text-text">Dates</h2>
          <ul className="mt-4 space-y-2">
            {dates.map((entry) => (
              <li key={entry.id}>
                <Link
                  href={`/entries/${entry.slug ?? entry.date}`}
                  className="focus-ring text-sm text-text-soft underline-offset-4 hover:underline"
                >
                  {entry.date}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-14">
          <RelatedObservations items={observations} />
        </div>
      </div>
    </>
  );
}
