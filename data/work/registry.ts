import type {
  ArchiveBiasProfile,
  HiddenLaborRecord,
  LiteraryIncomeRelation,
  MultiRoleDayProfile,
  WorkEvidenceProfile,
  WorkFootprintProfile,
  WorkIdentityProfile,
  WorkRecord,
  WorkSilenceRecord,
} from "@/lib/types";

/** Day-level work — empty until Entry evidence is indexed. Never invent jobs. */
export const workRecords: WorkRecord[] = [];

export const literaryIncomeRelations: LiteraryIncomeRelation[] = [];

export const hiddenLaborRecords: HiddenLaborRecord[] = [];

export const multiRoleDayProfiles: MultiRoleDayProfile[] = [];

export const workFootprintProfiles: WorkFootprintProfile[] = [];

export const workSilenceRecords: WorkSilenceRecord[] = [];

export const workEvidenceProfiles: WorkEvidenceProfile[] = [];

/** Explicit identity registry — profiles are also derived in lib/work-observatory. */
export const workIdentityProfiles: WorkIdentityProfile[] = [];

/**
 * Conceptual archive-bias model only.
 * Do not auto-apply to specific Writers as Fact.
 */
export const archiveBiasProfiles: ArchiveBiasProfile[] = [
  {
    id: "archive-bias-administration",
    workClass: "administration",
    typicalRecordTypes: ["documents", "minutes", "accounts", "correspondence"],
    visibility: "high",
    institutionalRecording: "common",
    selfRecording: "occasional",
    financialRecording: "common",
    survivalLikelihood: "medium",
    notes: "Conceptual — institutions often leave trails households may not.",
  },
  {
    id: "archive-bias-publishing",
    workClass: "publishing",
    typicalRecordTypes: ["books", "letters", "contracts", "accounts", "reviews"],
    visibility: "high",
    institutionalRecording: "common",
    selfRecording: "occasional",
    financialRecording: "occasional",
    survivalLikelihood: "medium",
    notes: "Conceptual — printed and contractual traces can survive.",
  },
  {
    id: "archive-bias-performance",
    workClass: "performance",
    typicalRecordTypes: ["programs", "reviews", "diary", "photographs"],
    visibility: "medium",
    institutionalRecording: "occasional",
    selfRecording: "occasional",
    financialRecording: "rare",
    survivalLikelihood: "variable",
    notes: "Conceptual — stage output more visible than waiting/recovery.",
  },
  {
    id: "archive-bias-maintenance",
    workClass: "maintenance",
    typicalRecordTypes: ["diary", "accounts", "indirect traces"],
    visibility: "low",
    institutionalRecording: "rare",
    selfRecording: "occasional",
    financialRecording: "occasional",
    survivalLikelihood: "low",
    notes: "Conceptual — not a universal law; visibility varies by source.",
  },
  {
    id: "archive-bias-household",
    workClass: "household-economy",
    typicalRecordTypes: ["account books", "diary", "receipts"],
    visibility: "low",
    institutionalRecording: "rare",
    selfRecording: "occasional",
    financialRecording: "occasional",
    survivalLikelihood: "low",
    notes: "Conceptual — money management labor often sparse in archives.",
  },
  {
    id: "archive-bias-paid-employment",
    workClass: "paid-employment",
    typicalRecordTypes: [
      "employment files",
      "pay records",
      "diary",
      "institutional files",
    ],
    visibility: "medium",
    institutionalRecording: "common",
    selfRecording: "occasional",
    financialRecording: "common",
    survivalLikelihood: "variable",
    notes: "Conceptual — access to institutional archives varies widely.",
  },
];

export function getWorkRecordsByWriter(writerId: string) {
  return workRecords.filter((r) => r.writerId === writerId);
}
