import type { Metadata } from "next";
import { KafuNishimuraObservatory } from "@/components/compare/KafuNishimuraObservatory";
import { kafuNishimuraComparison } from "@/data/comparisons/kafu-nishimura";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "荷風から西村へ｜Diary Observatory";
const description =
  "永井荷風の『断腸亭日乗』と西村賢太の日記を通して、天候、散歩、出版、テレビ、古書店、身体、都市の消失を比較し、異なる時代の東京を読み直す。";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    type: "article",
    url: `${SITE_URL}/compare/kafu-nishimura`,
  },
};

export default function KafuNishimuraComparePage() {
  const cmp = kafuNishimuraComparison;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: cmp.titleJa,
      alternateName: cmp.title,
      description,
      url: `${SITE_URL}/compare/${cmp.slug}`,
      dateModified: cmp.lastUpdated,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      about: [
        {
          "@type": "Person",
          name: "Kafū Nagai",
          alternateName: "永井荷風",
          url: `${SITE_URL}/writers/kafu-nagai`,
        },
        {
          "@type": "Person",
          name: "Kenji Nishimura",
          alternateName: "西村賢太",
          url: `${SITE_URL}/writers/kenji-nishimura`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      dateModified: cmp.lastUpdated,
      inLanguage: "ja",
      author: {
        "@type": "Organization",
        name: "SHIRO & Co.",
        url: "https://shiroand.io",
      },
      mainEntityOfPage: `${SITE_URL}/compare/${cmp.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: cmp.title,
      alternateName: cmp.titleJa,
      about: "Comparative reading of two Tokyo diaries across eras",
      url: `${SITE_URL}/compare/${cmp.slug}`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KafuNishimuraObservatory />
    </>
  );
}
