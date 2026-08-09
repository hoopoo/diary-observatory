import type { Metadata } from "next";
import { UrbanDiaristsObservatory } from "@/components/compare/UrbanDiaristsObservatory";
import { urbanDiaristsComparison } from "@/data/comparisons/urban-diarists";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "三人の都市記録者｜Diary Observatory";
const description =
  "永井荷風、西村賢太、チャールズ・ブコウスキーを、東京とロサンゼルス、天候、出版、テレビ、労働、酒、身体、移動、消えていく文化インフラから横断比較する Diary Observatoryの代表ページ。";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    type: "article",
    url: `${SITE_URL}/compare/urban-diarists`,
  },
};

export default function UrbanDiaristsComparePage() {
  const cmp = urbanDiaristsComparison;
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
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: cmp.title,
      alternateName: cmp.titleJa,
      about:
        "Cross-comparison of three urban diarists across city, labor, media, and body",
      url: `${SITE_URL}/compare/${cmp.slug}`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UrbanDiaristsObservatory />
    </>
  );
}
