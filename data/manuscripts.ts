import type { ManuscriptRecord } from "@/lib/types";

export const NISHIMURA_ID = "writer-nishimura";
export const BUKOWSKI_ID = "writer-bukowski";
export const KAFU_ID = "writer-kafu";

/**
 * Provisional manuscript outcome records.
 * Do not invent titles, rejection counts, or unpublished contents.
 */
export const manuscriptRecords: ManuscriptRecord[] = [
  {
    id: "ms-kafu-published-surviving",
    writerId: KAFU_ID,
    description: "Published and surviving diary / literary records",
    descriptionJa: "刊行・残存する日記・文学記録",
    outcome: "accepted",
    archiveStatus: "survives",
    posthumousStatus: "not-applicable",
    evidenceLevel: "contextual",
    verificationStatus: "partial",
    sourceIds: ["src-ms-kafu"],
    notes: "Specific unpublished manuscripts not yet indexed.",
  },
  {
    id: "ms-kafu-archive-loss-possible",
    writerId: KAFU_ID,
    description: "Possible draft / letter loss (war, destruction, non-survival)",
    descriptionJa: "草稿・書簡の欠落可能性（戦災・破棄・非残存）",
    outcome: "lost",
    archiveStatus: "unknown",
    posthumousStatus: "unknown",
    evidenceLevel: "contextual",
    verificationStatus: "indexing",
    sourceIds: ["src-ms-kafu", "src-ms-archive"],
    notes: "Archive loss possible — source needed for specifics.",
  },
  {
    id: "ms-nishimura-published",
    writerId: NISHIMURA_ID,
    description: "Published magazine / book track via publisher relation",
    descriptionJa: "出版社との関係のなかで刊行された原稿経路",
    outcome: "accepted",
    archiveStatus: "survives",
    posthumousStatus: "not-applicable",
    evidenceLevel: "contextual",
    verificationStatus: "partial",
    sourceIds: ["src-ms-nishimura"],
    notes: "Rejected or unpublished manuscript data not yet indexed.",
  },
  {
    id: "ms-bukowski-postal-circuit",
    writerId: BUKOWSKI_ID,
    description: "Postal small-press submission circuit (outcomes mixed / unknown)",
    descriptionJa: "郵送による小出版投稿回路（結果は混合・未確定）",
    outcome: "unknown",
    archiveStatus: "unknown",
    posthumousStatus: "not-applicable",
    evidenceLevel: "contextual",
    verificationStatus: "indexing",
    sourceIds: ["src-ms-bukowski", "src-ms-submission"],
    notes:
      "Specific rejected manuscripts require bibliographic verification.",
  },
];

export const MS_OBS_MANUSCRIPT_IDS = manuscriptRecords.map((m) => m.id);

export function getManuscriptsByWriter(writerId: string) {
  return manuscriptRecords.filter((m) => m.writerId === writerId);
}
