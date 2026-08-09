import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditionObservatory } from "@/components/editions/EditionObservatory";
import {
  getAllEditions,
  getEditionBySlug,
  getEditionContext,
} from "@/lib/editions";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllEditions().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const edition = getEditionBySlug(slug);
  if (!edition) return { title: "Edition" };

  const display = edition.titleJa ?? edition.title;
  const { work } = getEditionContext(edition);
  const workLabel = work?.titleOriginal ?? work?.title ?? "diary work";
  const title = `${display}｜Edition Observatory｜Diary Observatory`;
  const description = `${workLabel}の${display}について、出版社、刊行年、篇構成、収録期間、ページ体系、底本、注釈、利用可能性、引用方針、Entry適合性を確認する。`;

  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${SITE_URL}/editions/${edition.slug}`,
    },
  };
}

export default async function EditionDetailPage({ params }: Props) {
  const { slug } = await params;
  const edition = getEditionBySlug(slug);
  if (!edition) notFound();

  const { work } = getEditionContext(edition);
  const url = `${SITE_URL}/editions/${edition.slug}`;

  // Schema: only include confirmed-safe fields. No guessed ISBN / year / coverage.
  const bookNode: Record<string, unknown> = {
    "@type": ["Book", "CreativeWork"],
    name: edition.titleJa ?? edition.title,
    alternateName: edition.title,
  };
  if (edition.publisher && edition.verificationStatus === "verified") {
    bookNode.publisher = {
      "@type": "Organization",
      name: edition.publisher,
    };
  }
  if (edition.isbn && edition.verificationStatus === "verified") {
    bookNode.isbn = edition.isbn;
  }
  if (work) {
    bookNode.isPartOf = {
      "@type": "CreativeWork",
      name: work.titleOriginal ?? work.title,
      url: `${SITE_URL}/diaries/${work.slug}`,
    };
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        name: edition.titleJa ?? edition.title,
        description: `Edition Observatory page for ${edition.title}`,
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
        },
        about: bookNode,
        url,
      },
      bookNode,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EditionObservatory edition={edition} />
    </>
  );
}
