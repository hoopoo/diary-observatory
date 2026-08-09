import type { ArchiveAbsence } from "@/lib/types";

export const KAFU_ID = "writer-kafu";
export const NISHIMURA_ID = "writer-nishimura";
export const BUKOWSKI_ID = "writer-bukowski";

/**
 * Absences — record gaps without inventing lost contents.
 */
export const archiveAbsences: ArchiveAbsence[] = [
  {
    id: "aa-kafu-archive-gaps",
    writerId: KAFU_ID,
    absenceType: "missing-manuscript",
    description:
      "Possible missing drafts / letters / materials; specifics source-needed",
    descriptionJa:
      "草稿・書簡・資料の欠落可能性。具体内容は出典確認後のみ",
    evidence: "Surviving published diaries and works do not prove completeness",
    likelyCause: undefined,
    verificationStatus: "indexing",
    sourceIds: ["src-ms-kafu", "src-ms-archive"],
    notes: "Do not invent burned titles or destroyed draft lists.",
  },
  {
    id: "aa-nishimura-unseen-pitches",
    writerId: NISHIMURA_ID,
    absenceType: "unpublished-work",
    description:
      "Uncommissioned / unselected pitches inside publishing are hard to see",
    descriptionJa: "依頼されなかった企画・未採用は見えにくい",
    evidence: "Diaries show commissions and deadlines; rejections rarely surface",
    verificationStatus: "indexing",
    sourceIds: ["src-ms-nishimura"],
    notes: "No invented unpublished manuscript titles.",
  },
  {
    id: "aa-bukowski-unknown-outcomes",
    writerId: BUKOWSKI_ID,
    absenceType: "unknown-outcome",
    description:
      "Many postal submissions have unknown individual outcomes until sourced",
    descriptionJa: "個別投稿の結果は、出典確認まで不明な場合が多い",
    evidence: "Postal circuit known as pattern; per-piece outcomes need bibliography",
    verificationStatus: "indexing",
    sourceIds: ["src-ms-bukowski", "src-ms-submission"],
  },
  {
    id: "aa-general-what-was-not-written",
    writerId: KAFU_ID,
    absenceType: "other",
    description: "What was not written — absences in life as well as archive",
    descriptionJa: "書かなかったこと——資料だけでなく人生側の欠落",
    evidence: "Conceptual observation across writers",
    verificationStatus: "indexing",
    sourceIds: ["src-ms-bio"],
    notes: "Interpretation layer — not a Fact inventory of secrets.",
  },
];

export const MS_OBS_ABSENCE_IDS = archiveAbsences.map((a) => a.id);
