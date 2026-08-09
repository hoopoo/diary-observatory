import type { Metadata } from "next";
import { FourUrbanLivesObservatory } from "@/components/compare/FourUrbanLivesObservatory";
import { fourUrbanLivesComparison } from "@/data/comparisons/four-urban-lives";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "四人の都市生活｜Diary Observatory";
const description =
  "永井荷風、西村賢太、チャールズ・ブコウスキー、林芙美子を、天候、メディア、賃金労働、家事、食事、住居、出版、身体、生活維持と保存から横断比較する。";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    type: "article",
    url: `${SITE_URL}/compare/four-urban-lives`,
  },
};

export default function FourUrbanLivesComparePage() {
  const cmp = fourUrbanLivesComparison;
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
        {
          "@type": "Person",
          name: "Charles Bukowski",
          alternateName: "チャールズ・ブコウスキー",
          url: `${SITE_URL}/writers/charles-bukowski`,
        },
        {
          "@type": "Person",
          name: "Fumiko Hayashi",
          alternateName: "林芙美子",
          url: `${SITE_URL}/writers/fumiko-hayashi`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: cmp.title,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Kafū Nagai",
          url: `${SITE_URL}/writers/kafu-nagai`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Kenji Nishimura",
          url: `${SITE_URL}/writers/kenji-nishimura`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Charles Bukowski",
          url: `${SITE_URL}/writers/charles-bukowski`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Fumiko Hayashi",
          url: `${SITE_URL}/writers/fumiko-hayashi`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: cmp.title,
      alternateName: cmp.titleJa,
      about:
        "Cross-comparison of four urban lives across environment, media, labor, and maintenance",
      url: `${SITE_URL}/compare/${cmp.slug}`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FourUrbanLivesObservatory />
    </>
  );
}
