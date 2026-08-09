import type { Metadata } from "next";
import { NishimuraBukowskiObservatory } from "@/components/compare/NishimuraBukowskiObservatory";
import { nishimuraBukowskiComparison } from "@/data/comparisons/nishimura-bukowski";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "西村賢太とブコウスキー｜Diary Observatory";
const description =
  "西村賢太とチャールズ・ブコウスキーを、東京とロサンゼルス、出版社と小出版、テレビと郵送投稿、酒、労働、身体、私生活の文学化から比較する観測ページ。";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    type: "article",
    url: `${SITE_URL}/compare/nishimura-bukowski`,
  },
};

export default function NishimuraBukowskiComparePage() {
  const cmp = nishimuraBukowskiComparison;
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
          name: "Kenji Nishimura",
          alternateName: "西村賢太",
          url: `${SITE_URL}/writers/kenji-nishimura`,
        },
        {
          "@type": "Person",
          name: "Charles Bukowski",
          alternateName: "チャールズ・ブコウスキー",
          url: `${SITE_URL}/writers/charles-bukowski`,
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
      about:
        "Comparative reading of Nishimura and Bukowski across literary systems and writing bodies",
      url: `${SITE_URL}/compare/${cmp.slug}`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NishimuraBukowskiObservatory />
    </>
  );
}
