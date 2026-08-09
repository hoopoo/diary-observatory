import type { ResponseArtifact, SubmissionRecord } from "@/lib/types";

export const BUKOWSKI_ID = "writer-bukowski";
export const NISHIMURA_ID = "writer-nishimura";
export const KAFU_ID = "writer-kafu";

/**
 * Submission records — provisional / conceptual where specifics are unindexed.
 */
export const submissionRecords: SubmissionRecord[] = [
  {
    id: "sub-bukowski-postal-pattern",
    manuscriptId: "ms-bukowski-postal-circuit",
    writerId: BUKOWSKI_ID,
    recipientType: "magazine",
    method: "postal",
    outcome: "unknown",
    evidenceLevel: "contextual",
    verificationStatus: "indexing",
    sourceIds: ["src-ms-submission", "src-ms-bukowski"],
    description: "Typed manuscript → envelope → small magazine / editor",
    descriptionJa: "タイプ原稿 → 封筒 → 小規模雑誌・編集者",
    notes:
      "No invented submission counts, acceptance rates, or magazine names.",
    responseArtifactIds: ["ra-returned-ms-pattern", "ra-rejection-letter-pattern"],
  },
  {
    id: "sub-nishimura-publisher-track",
    manuscriptId: "ms-nishimura-published",
    writerId: NISHIMURA_ID,
    recipientType: "publisher",
    method: "publisher-editorial relation",
    outcome: "accepted",
    evidenceLevel: "contextual",
    verificationStatus: "partial",
    sourceIds: ["src-ms-nishimura", "src-ms-publishing"],
    description: "Ongoing publisher selection rather than cold postal circuit",
    descriptionJa: "郵送の冷たい回路ではなく、継続的な出版社選考",
    notes: "Unselected pitches inside the house remain Not indexed.",
  },
  {
    id: "sub-platform-silence-conceptual",
    writerId: BUKOWSKI_ID,
    recipientType: "platform",
    method: "digital upload / submit",
    outcome: "unanswered",
    evidenceLevel: "contextual",
    verificationStatus: "indexing",
    sourceIds: ["src-ms-platform"],
    description: "Conceptual: silence / invisibility instead of returned paper",
    descriptionJa: "概念：返送紙ではなく沈黙・不可視としての不採用",
    notes:
      "Conceptual comparison only — not a claim about Bukowski on a platform, nor any specific product.",
    responseArtifactIds: ["ra-no-response-pattern"],
  },
];

export const responseArtifacts: ResponseArtifact[] = [
  {
    id: "ra-returned-ms-pattern",
    submissionId: "sub-bukowski-postal-pattern",
    type: "returned-manuscript",
    description: "Returned manuscript as physical object (pattern)",
    descriptionJa: "物として戻る返送原稿（パターン）",
    rightsStatus: "Do not quote protected letter/manuscript bodies at length",
    verificationStatus: "indexing",
    sourceIds: ["src-ms-rejection"],
  },
  {
    id: "ra-rejection-letter-pattern",
    submissionId: "sub-bukowski-postal-pattern",
    type: "rejection-letter",
    description: "Rejection letter / short notice (pattern)",
    descriptionJa: "不採用通知・短い返事（パターン）",
    rightsStatus: "No invented letter text; no long quotation",
    verificationStatus: "indexing",
    sourceIds: ["src-ms-rejection"],
  },
  {
    id: "ra-no-response-pattern",
    submissionId: "sub-platform-silence-conceptual",
    type: "no-response",
    description: "No reply / no visibility as contemporary rejection form",
    descriptionJa: "未返信・不可視という現在の拒絶形態",
    verificationStatus: "indexing",
    sourceIds: ["src-ms-platform"],
  },
];

export const MS_OBS_SUBMISSION_IDS = submissionRecords.map((s) => s.id);
