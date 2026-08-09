import type { Metadata } from "next";
import { RoppaFirstEntryResearchWorkspace } from "@/components/research/RoppaFirstEntryResearchWorkspace";
import { RESEARCH_URL } from "@/data/research/furukawa-roppa-first-entry";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "古川ロッパ｜最初の一日を選ぶ｜Diary Observatory";
const description =
  "『古川ロッパ昭和日記』から最初に索引化する一日を、底本、篇、版、ページ、日付、公演、待機、食事、身体、観客、劇場、著作権、資料照合から選定するResearch Workspace。";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: `${SITE_URL}${RESEARCH_URL}`,
  },
};

export default function RoppaFirstEntryResearchPage() {
  const url = `${SITE_URL}${RESEARCH_URL}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        name: "Selecting Roppa Furukawa’s First Indexed Day",
        alternateName: "古川ロッパ｜最初の一日を選ぶ",
        description,
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
        },
        about: {
          "@type": "Person",
          name: "Roppa Furukawa",
          alternateName: ["古川ロッパ", "古川緑波"],
          url: `${SITE_URL}/writers/furukawa-roppa`,
        },
        url,
      },
      {
        "@type": "CreativeWork",
        name: "Furukawa Roppa first-entry research workspace",
        description,
        about: {
          "@type": "Book",
          name: "古川ロッパ昭和日記",
          url: `${SITE_URL}/diaries/furukawa-roppa-showa-diary`,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        mainEntityOfPage: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RoppaFirstEntryResearchWorkspace />
    </>
  );
}
