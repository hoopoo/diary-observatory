import type { Metadata } from "next";
import { SourceIndex } from "@/components/sources/SourceIndex";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Sources｜Diary Observatory";
const description =
  "Diary ObservatoryのWriter、Diary Work、Edition、Entry、Observation、Comparisonを支える一次資料、書誌、新聞、公演資料、アーカイブ、研究資料を一覧する。";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: `${SITE_URL}/sources`,
  },
};

export default function SourcesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Sources",
    description,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/sources`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SourceIndex />
    </>
  );
}
