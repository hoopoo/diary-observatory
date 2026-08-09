import type { Metadata } from "next";
import { RoppaBibliographyResearchWorkspace } from "@/components/research/RoppaBibliographyResearchWorkspace";
import {
  BIBLIOGRAPHY_URL,
  roppaEditions,
} from "@/data/research/furukawa-roppa-bibliography";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "古川ロッパ昭和日記｜底本を確定する｜Diary Observatory";
const description =
  "『古川ロッパ昭和日記』の各篇、版、出版社、刊行年、収録期間、ページ体系、索引、閲覧可能性、著作権を照合し、Entry作成に使用する基準版を選定する書誌Research Workspace。";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: `${SITE_URL}${BIBLIOGRAPHY_URL}`,
  },
};

export default function RoppaBibliographyResearchPage() {
  const url = `${SITE_URL}${BIBLIOGRAPHY_URL}`;

  // Schema: only catalogue-safe facts. No unverified ISBN / imprint year / coverage ISO dates.
  const verifiedOrPartialBooks = roppaEditions
    .filter((e) => e.verificationStatus === "verified")
    .map((e) => ({
      "@type": "Book",
      name: e.titleJa ?? e.title,
      ...(e.publisher
        ? { publisher: { "@type": "Organization", name: e.publisher } }
        : {}),
    }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        name: "Establishing the Bibliographic Base for the Furukawa Roppa Shōwa Diary",
        alternateName: "古川ロッパ昭和日記｜底本を確定する",
        description,
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
        },
        about: {
          "@type": "Book",
          name: "古川ロッパ昭和日記",
          url: `${SITE_URL}/diaries/furukawa-roppa-showa-diary`,
        },
        url,
      },
      {
        "@type": "CreativeWork",
        name: "Furukawa Roppa Shōwa Diary bibliographic research workspace",
        description,
        about: {
          "@type": "Book",
          name: "古川ロッパ昭和日記",
          alternateName: "Furukawa Roppa Shōwa Diary",
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        mainEntityOfPage: url,
      },
      ...verifiedOrPartialBooks,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RoppaBibliographyResearchWorkspace />
    </>
  );
}
