import { SITE_NAME, SITE_URL } from "./site";
import type { DiaryWork, Observation, Writer } from "./types";

export function personJsonLd(writer: Writer) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: writer.name,
    alternateName: writer.nameJa,
    birthDate: String(writer.birthYear),
    deathDate: writer.deathYear ? String(writer.deathYear) : undefined,
    nationality: writer.country,
    homeLocation: {
      "@type": "Place",
      name: writer.city,
    },
    description: writer.summary,
    url: `${SITE_URL}/writers/${writer.slug}`,
  };
}

export function bookJsonLd(work: DiaryWork, writer?: Writer) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: work.title,
    alternateName: work.titleOriginal,
    inLanguage: work.language,
    description: work.description,
    author: writer
      ? {
          "@type": "Person",
          name: writer.name,
          url: `${SITE_URL}/writers/${writer.slug}`,
        }
      : undefined,
    url: `${SITE_URL}/diaries/${work.slug}`,
  };
}

/** Diary Observatory work hub — verified fields only. */
export function diaryObservatoryJsonLd(work: DiaryWork, writer?: Writer) {
  const url = `${SITE_URL}/diaries/${work.slug}`;
  const author = writer
    ? {
        "@type": "Person" as const,
        name: writer.name,
        alternateName: writer.nameJa,
        birthDate: String(writer.birthYear),
        deathDate: writer.deathYear ? String(writer.deathYear) : undefined,
        url: `${SITE_URL}/writers/${writer.slug}`,
      }
    : undefined;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `${work.titleOriginal}｜${SITE_NAME}`,
        description: work.description,
        url,
        inLanguage: work.language,
        isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
        about: { "@id": `${url}#book` },
      },
      {
        "@type": ["Book", "CreativeWork"],
        "@id": `${url}#book`,
        name: work.title,
        alternateName: work.titleOriginal,
        inLanguage: work.language,
        description: work.description,
        dateCreated: work.startYear ? String(work.startYear) : undefined,
        temporalCoverage:
          work.startYear && work.endYear
            ? `${work.startYear}/${work.endYear}`
            : undefined,
        genre: "Diary",
        author,
        url,
      },
      ...(author ? [{ ...author, "@id": `${SITE_URL}/writers/${writer!.slug}#person` }] : []),
    ],
  };
}

export function articleJsonLd(observation: Observation) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: observation.title,
    alternativeHeadline: observation.subtitle,
    description: observation.summary,
    datePublished: observation.publishedAt,
    dateModified: observation.updatedAt,
    inLanguage: observation.language,
    author: {
      "@type": "Organization",
      name: "SHIRO & Co.",
      url: "https://shiroand.io",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/observations/${observation.slug}`,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: "SHIRO & Co.",
      url: "https://shiroand.io",
    },
  };
}
