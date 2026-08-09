import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DanchoDiaryObservatory } from "@/components/diaries/DanchoDiaryObservatory";
import { HorokiDiaryObservatory } from "@/components/diaries/HorokiDiaryObservatory";
import { RoppaDiaryObservatory } from "@/components/diaries/RoppaDiaryObservatory";
import { SourceList } from "@/components/SourceList";
import {
  DANCHO_DIARY_SLUG,
  danchoTeiNichijo,
} from "@/data/diaries/dancho-tei-nichijo";
import {
  ROPPA_DIARY_SLUG,
  furukawaRoppaShowaDiary,
} from "@/data/diaries/furukawa-roppa-showa-diary";
import {
  HOROKI_SLUG,
  horoki,
} from "@/data/diaries/horoki";
import {
  diaries,
  getDiaryBySlug,
  getEntriesByWork,
  getWriterById,
} from "@/data/index";
import { bookJsonLd, diaryObservatoryJsonLd } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ theme?: string | string[] }>;
};

export function generateStaticParams() {
  return diaries.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const diary = getDiaryBySlug(slug);
  if (!diary) return { title: "Diary" };

  if (slug === DANCHO_DIARY_SLUG) {
    const title = "断腸亭日乗｜Diary Observatory";
    const description =
      "永井荷風が1917年から1959年まで記した『断腸亭日乗』を、天候、散歩、庭、身体、出版、戦争、東京の変化、反復する日常から索引化するDiary Observatory作品ページ。";
    return {
      title: { absolute: title },
      description,
      openGraph: {
        title,
        description,
        type: "book",
        url: `${SITE_URL}/diaries/${slug}`,
      },
    };
  }

  if (slug === HOROKI_SLUG) {
    const title = "放浪記｜Diary Observatory";
    const description =
      "林芙美子『放浪記』を、日記的素材、雑誌掲載、初期単行本、改訂版、復元版、仕事、食事、住居、金銭、移動、作家像の形成から観測する。";
    return {
      title: { absolute: title },
      description,
      openGraph: {
        title,
        description,
        type: "book",
        url: `${SITE_URL}/diaries/${slug}`,
      },
    };
  }

  if (slug === ROPPA_DIARY_SLUG) {
    const title = "古川ロッパ昭和日記｜Diary Observatory";
    const description =
      "『古川ロッパ昭和日記』を、戦前、戦中、戦後、晩年の四篇から、舞台、稽古、楽屋、食事、体重、病気、観客、興行、空襲、放送、人気、老いを横断して観測する。";
    return {
      title: { absolute: title },
      description,
      openGraph: {
        title,
        description,
        type: "book",
        url: `${SITE_URL}/diaries/${slug}`,
      },
    };
  }

  return {
    title: diary.titleOriginal,
    description: diary.description,
    openGraph: {
      title: diary.titleOriginal,
      description: diary.description,
      type: "book",
    },
  };
}

export default async function DiaryDetailPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const diary = getDiaryBySlug(slug);
  if (!diary) notFound();

  const sp = await searchParams;
  const themeRaw = sp.theme;
  const activeTheme = Array.isArray(themeRaw) ? themeRaw[0] : themeRaw;

  if (slug === DANCHO_DIARY_SLUG) {
    const writer = getWriterById(danchoTeiNichijo.writerId);
    const jsonLd = diaryObservatoryJsonLd(danchoTeiNichijo, writer);
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <DanchoDiaryObservatory
          diary={danchoTeiNichijo}
          activeTheme={activeTheme}
        />
      </>
    );
  }

  if (slug === HOROKI_SLUG) {
    const writer = getWriterById(horoki.writerId);
    const url = `${SITE_URL}/diaries/${HOROKI_SLUG}`;
    const person = writer
      ? {
          "@type": "Person" as const,
          "@id": `${SITE_URL}/writers/${writer.slug}#person`,
          name: writer.name,
          alternateName: writer.nameJa,
          birthDate: String(writer.birthYear),
          deathDate: writer.deathYear ? String(writer.deathYear) : undefined,
          url: `${SITE_URL}/writers/${writer.slug}`,
        }
      : undefined;
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline: "放浪記｜Diary Observatory",
          description: horoki.description,
          inLanguage: "ja",
          about: { "@id": `${url}#work` },
          mainEntityOfPage: url,
          isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
        },
        {
          "@type": ["Book", "CreativeWork"],
          "@id": `${url}#work`,
          name: horoki.title,
          alternateName: horoki.titleOriginal,
          inLanguage: "ja",
          description: horoki.description,
          genre: "Diary-derived autobiographical work",
          author: person,
          url,
        },
        ...(person ? [person] : []),
      ],
    };
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HorokiDiaryObservatory diary={horoki} writer={writer} />
      </>
    );
  }

  if (slug === ROPPA_DIARY_SLUG) {
    const writer = getWriterById(furukawaRoppaShowaDiary.writerId);
    const url = `${SITE_URL}/diaries/${ROPPA_DIARY_SLUG}`;
    const alternateNames = writer
      ? [
          writer.nameJa,
          ...(writer.canonicalNameJa ? [writer.canonicalNameJa] : []),
          ...(writer.alternateNames ?? []),
        ].filter((name, index, arr) => arr.indexOf(name) === index)
      : ["古川ロッパ", "古川緑波"];

    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Book",
          "@id": `${url}#book`,
          name: furukawaRoppaShowaDiary.titleOriginal,
          alternateName: furukawaRoppaShowaDiary.title,
          inLanguage: "ja",
          description: furukawaRoppaShowaDiary.description,
          author: writer
            ? {
                "@type": "Person",
                name: writer.name,
                alternateName: alternateNames,
                birthDate: String(writer.birthYear),
                deathDate: writer.deathYear
                  ? String(writer.deathYear)
                  : undefined,
                url: `${SITE_URL}/writers/${writer.slug}`,
              }
            : undefined,
          url,
        },
        {
          "@type": "CollectionPage",
          "@id": `${url}#page`,
          name: "古川ロッパ昭和日記｜Diary Observatory",
          about: { "@id": `${url}#book` },
          isPartOf: {
            "@type": "WebSite",
            name: SITE_NAME,
            url: SITE_URL,
          },
          url,
        },
        {
          "@type": "CreativeWork",
          name: "古川ロッパ昭和日記｜Long-term Diary Observatory",
          about: { "@id": `${url}#book` },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          mainEntityOfPage: url,
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RoppaDiaryObservatory
          diary={furukawaRoppaShowaDiary}
          writer={writer}
        />
      </>
    );
  }

  const writer = getWriterById(diary.writerId);
  const entries = getEntriesByWork(diary.id);
  const jsonLd = bookJsonLd(diary, writer);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto w-full max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="label">Diary work</p>
        <h1 className="editorial mt-3 text-4xl text-text">{diary.title}</h1>
        <p className="jp-heading mt-3 text-2xl">{diary.titleOriginal}</p>
        {writer && (
          <p className="mt-4 text-sm text-text-faint">
            <Link
              href={`/writers/${writer.slug}`}
              className="focus-ring underline-offset-4 hover:underline"
            >
              {writer.name} / {writer.nameJa}
            </Link>
          </p>
        )}
        <p className="mt-2 text-xs text-text-faint">
          {diary.startYear}
          {diary.endYear ? `–${diary.endYear}` : "–"} · {diary.language} ·{" "}
          {diary.publicationStatus}
        </p>
        <p className="mt-8 text-text-soft">{diary.description}</p>
        <p className="jp-serif mt-3 text-sm text-text-faint">
          {diary.descriptionJa}
        </p>

        <section className="mt-12">
          <h2 className="editorial text-2xl text-text">Indexed dates</h2>
          <ul className="mt-4 space-y-2">
            {entries.map((entry) => (
              <li key={entry.id}>
                <Link
                  href={`/entries/${entry.slug ?? entry.date}`}
                  className="focus-ring text-sm text-text-soft underline-offset-4 hover:underline"
                >
                  {entry.date}
                </Link>
              </li>
            ))}
            {entries.length === 0 && (
              <li className="text-sm text-text-faint">No dates indexed yet.</li>
            )}
          </ul>
        </section>

        <div className="mt-12">
          <SourceList sources={diary.sources} />
        </div>
      </div>
    </>
  );
}
