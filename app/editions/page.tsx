import type { Metadata } from "next";
import { EditionIndex } from "@/components/editions/EditionIndex";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Editions｜Diary Observatory";
const description =
  "Diary Observatoryが参照する日記・作品の版、底本、ページ体系、引用方針、Entry適合性を一覧する。";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: `${SITE_URL}/editions`,
  },
};

export default function EditionsIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Editions",
    description,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/editions`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EditionIndex />
    </>
  );
}
