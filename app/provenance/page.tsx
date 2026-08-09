import type { Metadata } from "next";
import { ProvenanceHealthOverview } from "@/components/provenance/ProvenanceHealthOverview";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Provenance｜Diary Observatory";
const description =
  "Diary Observatoryに掲載されるFact、Observation、Interpretationが、どの資料、版、ページ、SourceCaptureから作られたかを追跡する。";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: `${SITE_URL}/provenance`,
  },
};

export default function ProvenanceIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Provenance",
    description,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/provenance`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProvenanceHealthOverview />
    </>
  );
}
