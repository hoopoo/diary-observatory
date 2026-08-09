import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProvenanceDetail } from "@/components/provenance/ProvenanceDetail";
import {
  getFactClaimById,
  getInterpretationClaimById,
  getObservationClaimById,
  getPublicFactClaims,
  getPublicProvenanceTrail,
} from "@/lib/provenance";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return getPublicFactClaims().map((f) => ({ id: f.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const fact = getFactClaimById(id);
  const obs = getObservationClaimById(id);
  const interp = getInterpretationClaimById(id);
  const claim =
    fact?.claim ?? obs?.observation ?? interp?.interpretation ?? id;

  if (!getPublicProvenanceTrail(id)) {
    return { title: "Not found" };
  }

  const title = `${claim}｜Provenance｜Diary Observatory`;
  const description =
    "このFactまたはObservationを支える一次資料、版、ページ、SourceCapture、照合資料、矛盾、Unknownを表示する。";

  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE_URL}/provenance/${id}`,
    },
  };
}

export default async function ProvenanceClaimPage({ params }: Props) {
  const { id } = await params;
  const trail = getPublicProvenanceTrail(id);
  if (!trail) notFound();

  const fact = getFactClaimById(id);
  const obs = getObservationClaimById(id);
  const interp = getInterpretationClaimById(id);
  if (fact && !fact.publicDisplay) notFound();
  if (obs && !obs.publicDisplay) notFound();
  if (interp && !interp.publicDisplay) notFound();

  const claim =
    fact?.claim ?? obs?.observation ?? interp?.interpretation ?? id;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: claim,
    description:
      "Provenance trail for a public claim in Diary Observatory — evidence ancestry and interpretive descendants.",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/provenance/${id}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProvenanceDetail id={id} />
    </>
  );
}
