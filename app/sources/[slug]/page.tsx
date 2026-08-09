import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SourceObservatory } from "@/components/sources/SourceObservatory";
import {
  getAllSources,
  getSourceBySlug,
  getSourceDisplayTitle,
} from "@/lib/sources";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSources().map((s) => ({ slug: s.slug! }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const source = getSourceBySlug(slug);
  if (!source) return { title: "Source" };

  const display = getSourceDisplayTitle(source);
  const title = `${display}｜Source Observatory｜Diary Observatory`;
  const description = `${display}の書誌、資料種別、確認個体、参照箇所、支えているFact、利用ページ、資料間の矛盾、権利状態を確認する。`;

  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${SITE_URL}/sources/${source.slug}`,
    },
  };
}

export default async function SourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const source = getSourceBySlug(slug);
  if (!source) notFound();

  // Hide non-public (should already be filtered)
  if (
    source.visibility !== "public" &&
    source.visibility !== "metadata-only"
  ) {
    notFound();
  }

  const url = `${SITE_URL}/sources/${source.slug}`;
  const name = getSourceDisplayTitle(source);

  const workType =
    source.format === "book" || source.kind === "bibliography"
      ? "Book"
      : source.format === "webpage"
        ? "WebPage"
        : source.format === "catalogue" || source.format === "database"
          ? "Dataset"
          : "CreativeWork";

  const about: Record<string, unknown> = {
    "@type": workType,
    name: source.title ?? source.label,
  };
  if (source.url) about.url = source.url;
  if (source.publisher) {
    about.publisher = { "@type": "Organization", name: source.publisher };
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        name,
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
        },
        about,
        url,
      },
      about,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SourceObservatory source={source} />
    </>
  );
}
