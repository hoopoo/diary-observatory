import type { PublishingRecord, PublishingSystem } from "@/lib/types";

export const NISHIMURA_ID = "writer-nishimura";
export const BUKOWSKI_ID = "writer-bukowski";
export const KAFU_ID = "writer-kafu";

/**
 * Conceptual / provisional publishing records.
 * Do not invent circulation figures, rejection counts, or fees.
 */
export const publishingRecords: PublishingRecord[] = [
  {
    id: "pub-bukowski-postal-small-press",
    writerId: BUKOWSKI_ID,
    submissionMethod: "postal",
    manuscriptType: "typed manuscript",
    outcome: "unknown",
    audienceScale: "niche",
    paymentStatus: "unknown",
    evidenceLevel: "contextual",
    verificationStatus: "indexing",
    sourceIds: ["src-press-bukowski", "src-press-small"],
    label: "Postal submission to small magazines",
    labelJa: "小規模文芸誌への郵送投稿",
    notes:
      "Route is documented as a system; specific magazine titles / counts need sources.",
  },
  {
    id: "pub-bukowski-independent-publisher",
    writerId: BUKOWSKI_ID,
    submissionMethod: "postal",
    outcome: "published",
    audienceScale: "unknown",
    paymentStatus: "unknown",
    evidenceLevel: "contextual",
    verificationStatus: "indexing",
    sourceIds: ["src-press-bukowski", "src-press-publishing"],
    label: "Independent / small-press book publishing",
    labelJa: "独立系・小出版での書籍化",
    notes: "Publisher names and contracts: bibliographic verification needed.",
  },
  {
    id: "pub-kafu-print-system",
    writerId: KAFU_ID,
    submissionMethod: "editorial-request",
    outcome: "published",
    audienceScale: "national",
    paymentStatus: "unknown",
    evidenceLevel: "contextual",
    verificationStatus: "partial",
    sourceIds: ["src-press-kafu", "src-press-publishing"],
    label: "Newspaper / magazine / publisher circuit",
    labelJa: "新聞・雑誌・出版社の回路",
  },
  {
    id: "pub-nishimura-publisher-prize-tv",
    writerId: NISHIMURA_ID,
    submissionMethod: "editorial-request",
    publisherId: "entity-shinchosha",
    outcome: "published",
    audienceScale: "national",
    paymentStatus: "unknown",
    evidenceLevel: "contextual",
    verificationStatus: "partial",
    sourceIds: ["src-press-nishimura", "src-press-media"],
    label: "Publisher / literary prize / television amplification",
    labelJa: "出版社・文学賞・テレビによる増幅",
  },
];

export const publishingSystems: PublishingSystem[] = [
  {
    id: "sys-kafu-print",
    writerId: KAFU_ID,
    period: "Late Meiji–Showa print culture",
    nodes: [
      "Writer",
      "Newspaper / magazine",
      "Publisher",
      "Bookstore",
      "Reader",
    ],
    submissionMethods: ["editorial-request", "unknown"],
    selectionMechanisms: ["Editorial selection", "Serial publication"],
    distributionMethods: ["Print media", "Bookstore"],
    audienceScale: "national",
    paymentModels: ["Manuscript fees (details source-needed)"],
    sourceIds: ["src-press-kafu"],
    verificationStatus: "partial",
    note: "Provisional model from indexed records — not a complete history.",
  },
  {
    id: "sys-nishimura-mass",
    writerId: NISHIMURA_ID,
    period: "Late Heisei publishing / broadcast",
    nodes: [
      "Writer",
      "Publisher",
      "Literary prize",
      "Television",
      "Mass audience",
    ],
    submissionMethods: ["editorial-request", "unknown"],
    selectionMechanisms: ["Publisher", "Prize culture", "Television booking"],
    distributionMethods: ["Bookstore", "Television", "Newspaper / magazine"],
    audienceScale: "national",
    paymentModels: ["Royalties / appearance fees (amounts not indexed)"],
    sourceIds: ["src-press-nishimura", "src-press-media"],
    verificationStatus: "partial",
    note: "Speed and scale differ from Bukowski’s gradual circuit — not a ranking.",
  },
  {
    id: "sys-bukowski-small-press",
    writerId: BUKOWSKI_ID,
    period: "20th-century U.S. small press",
    nodes: [
      "Worker / writer",
      "Postal submission",
      "Small magazine",
      "Independent publisher",
      "Gradual audience",
    ],
    submissionMethods: ["postal"],
    selectionMechanisms: ["Magazine editors", "Small-press selection"],
    distributionMethods: ["Mail", "Small magazine", "Independent books"],
    audienceScale: "niche",
    paymentModels: ["Often unpaid / copies / later royalties — unverified"],
    sourceIds: ["src-press-bukowski", "src-press-small", "src-press-postal"],
    verificationStatus: "indexing",
    note: "Bibliographic verification needed for titles, counts, and fees.",
  },
];

export const PRESS_OBS_PUBLISHING_IDS = publishingRecords.map((r) => r.id);

export function getPublishingRecordsByWriter(writerId: string) {
  return publishingRecords.filter((r) => r.writerId === writerId);
}

export function getPublishingSystemByWriter(writerId: string) {
  return publishingSystems.find((s) => s.writerId === writerId);
}
