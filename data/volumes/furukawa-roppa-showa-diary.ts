import type { VolumeRecord } from "@/lib/types";

const DIARY_ID = "diary-furukawa-roppa-showa";

/**
 * VolumeRecords from bibliographic architecture only.
 * coveredStartDate / coveredEndDate / publicationDate / editor left unset
 * until verified against a specific copy or authoritative bibliography.
 */
export const roppaVolumeRecords: VolumeRecord[] = [
  {
    id: "vol-roppa-prewar",
    diaryWorkId: DIARY_ID,
    title: "Prewar volume",
    titleJa: "戦前篇",
    volumeType: "prewar",
    coverageLabel: "Shōwa 9–15 (as stated in bibliographic coverage)",
    coverageLabelJa: "昭和9年–昭和15年（書誌上の収録表示）",
    coveredDatePrecision: "year-only",
    coverageEvidence:
      "Bibliographic / catalogue coverage labels — not confirmed from a specific copy's date headings",
    publisher: "晶文社",
    entryIds: [],
    editionIds: ["edition-roppa-shobunsha-showa-diary-set"],
    sourceIds: ["src-roppa-cinii-ncid", "src-roppa-shobunsha"],
    rightsStatus: "Edition-specific verification required",
    verificationStatus: "partial",
    notes:
      "Bibliographic verification needed for covered ISO dates, imprint year, editor, and base text.",
  },
  {
    id: "vol-roppa-wartime",
    diaryWorkId: DIARY_ID,
    title: "Wartime volume",
    titleJa: "戦中篇",
    volumeType: "wartime",
    coverageLabel: "Shōwa 16–20 (as stated in bibliographic coverage)",
    coverageLabelJa: "昭和16年–昭和20年（書誌上の収録表示）",
    coveredDatePrecision: "year-only",
    coverageEvidence:
      "Bibliographic / catalogue coverage labels — not confirmed from a specific copy's date headings",
    publisher: "晶文社",
    entryIds: [],
    editionIds: ["edition-roppa-shobunsha-showa-diary-set"],
    sourceIds: ["src-roppa-cinii-ncid", "src-roppa-shobunsha"],
    rightsStatus: "Edition-specific verification required",
    verificationStatus: "partial",
    notes:
      "Bibliographic verification needed for covered ISO dates, imprint year, editor, and base text.",
  },
  {
    id: "vol-roppa-postwar",
    diaryWorkId: DIARY_ID,
    title: "Postwar volume",
    titleJa: "戦後篇",
    volumeType: "postwar",
    coverageLabel: "Shōwa 20–27 (as stated in bibliographic coverage)",
    coverageLabelJa: "昭和20年–昭和27年（書誌上の収録表示）",
    coveredDatePrecision: "year-only",
    coverageEvidence:
      "Bibliographic / catalogue coverage labels — not confirmed from a specific copy's date headings",
    publisher: "晶文社",
    entryIds: [],
    editionIds: ["edition-roppa-shobunsha-showa-diary-set"],
    sourceIds: ["src-roppa-cinii-ncid", "src-roppa-shobunsha"],
    rightsStatus: "Edition-specific verification required",
    verificationStatus: "partial",
    notes:
      "Bibliographic verification needed for covered ISO dates, imprint year, editor, and base text.",
  },
  {
    id: "vol-roppa-late",
    diaryWorkId: DIARY_ID,
    title: "Late-years volume",
    titleJa: "晩年篇",
    volumeType: "late-years",
    coverageLabel:
      "Shōwa 28–35 (bibliographic forms: 晩年篇 / 補巻・晩年篇)",
    coverageLabelJa: "昭和28年–昭和35年（晩年篇／補巻・晩年篇の表記差に注意）",
    coveredDatePrecision: "year-only",
    coverageEvidence:
      "Bibliographic / catalogue coverage labels — not confirmed from a specific copy's date headings",
    publisher: "晶文社",
    entryIds: [],
    editionIds: ["edition-roppa-shobunsha-showa-diary-set"],
    sourceIds: ["src-roppa-cinii-ncid", "src-roppa-shobunsha"],
    rightsStatus: "Edition-specific verification required",
    verificationStatus: "partial",
    notes:
      "Verify title wording against the specific copy. Bibliographic verification needed for exact imprint.",
  },
];

export const ROPPA_VOLUME_IDS = roppaVolumeRecords.map((v) => v.id);
