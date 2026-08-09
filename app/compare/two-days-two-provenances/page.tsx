import type { Metadata } from "next";
import { TwoDaysTwoProvenances } from "@/components/compare/TwoDaysTwoProvenances";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "二つの一日、二つの根拠｜Diary Observatory";
const description =
  "永井荷風1918-01-01と西村賢太2011-05-02を、資料量ではなく根拠経路（Provenance）の形から比較する。";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    type: "article",
    url: `${SITE_URL}/compare/two-days-two-provenances`,
  },
};

export default function TwoDaysTwoProvenancesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Two Days, Two Provenances",
    alternateName: "二つの一日、二つの根拠",
    description,
    url: `${SITE_URL}/compare/two-days-two-provenances`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TwoDaysTwoProvenances />
    </>
  );
}
