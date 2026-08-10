import { getMaintenanceEventsByWriter } from "@/data/maintenance-events";
import { getMoneyRecordsByWriter } from "@/data/money-records";
import { getPublishingRecordsByWriter } from "@/data/publishing-records";
import { getRetailRecordsByWriter } from "@/data/retail/registry";
import { getTimeOwnershipByWriter } from "@/data/time/registry";
import { administrationRecords } from "@/data/administration-records";
import { entertainmentRecords } from "@/data/entertainment-records";
import { publishingActivityRecords } from "@/data/publishing-activity-records";
import {
  archiveBiasProfiles,
  getWorkRecordsByWriter,
  hiddenLaborRecords,
  literaryIncomeRelations,
  multiRoleDayProfiles,
  workEvidenceProfiles,
  workFootprintProfiles,
  workIdentityProfiles,
  workSilenceRecords,
} from "@/data/work/registry";
import { getWriterById, writers } from "@/data/writers";
import type {
  IncomeSourceProfile,
  OccupationLabel,
  SalariedWorkProfile,
  WorkClass,
  WorkIdentityProfile,
  WorkSilenceRecord,
} from "@/lib/types";

function mapOccupationString(raw: string): OccupationLabel {
  const s = raw.toLowerCase();
  if (s.includes("admin") || s.includes("official")) return "administrator";
  if (s.includes("perform") || s.includes("comedian") || s.includes("actor"))
    return "performer";
  if (s.includes("publish")) return "publisher";
  if (s.includes("edit")) return "editor";
  if (s.includes("retail") || s.includes("shop")) return "retailer";
  if (s.includes("journal")) return "journalist";
  if (s.includes("employ") || s.includes("clerk") || s.includes("office"))
    return "employee";
  if (s.includes("freelance")) return "freelancer";
  if (s.includes("household") || s.includes("家")) return "household-manager";
  if (
    s.includes("writer") ||
    s.includes("author") ||
    s.includes("novel") ||
    s.includes("poet") ||
    s.includes("diarist")
  )
    return "author";
  return "other";
}

export function getIndexedWorkRecords(writerId: string) {
  return getWorkRecordsByWriter(writerId);
}

export function getWorkIdentityProfile(writerId: string): WorkIdentityProfile {
  const registered = workIdentityProfiles.find((p) => p.writerId === writerId);
  if (registered) return registered;

  const writer = getWriterById(writerId);
  const known = writer?.occupations ?? [];
  const labels = known.length
    ? [...new Set(known.map(mapOccupationString))]
    : (["unknown"] as OccupationLabel[]);

  const work = getIndexedWorkRecords(writerId);
  const money = getMoneyRecordsByWriter(writerId);
  const maint = getMaintenanceEventsByWriter(writerId);

  return {
    writerId,
    occupationLabels: labels,
    knownOccupationNotes: known.length
      ? known.map(
          (o) =>
            `${o} (Writer registration · biographical label · needs-source)`,
        )
      : ["No occupation label registered on Writer record"],
    indexedWorkTypes: [
      ...new Set(
        work
          .map((r) => r.workType)
          .filter((t): t is NonNullable<typeof t> => Boolean(t)),
      ),
    ],
    workClasses: getWriterWorkClasses(writerId),
    incomeSourceTypes:
      money.filter((m) => m.incomeOrExpense === "income").length > 0
        ? ["money-record-income-present"]
        : [],
    unpaidWorkTypes: maint
      .filter((e) => e.paidStatus === "unpaid" || e.paidStatus === "unknown")
      .map((e) => e.category),
    institutionalRoles: [],
    selfDirectedRoles: [],
    verificationStatus: known.length ? "needs-source" : "unverified",
    sourceIds: writer?.sourceIds ?? [],
    notes:
      "Known occupation ≠ day-level indexed work. Do not treat labels as Entry Facts.",
  };
}

export function getWriterWorkClasses(writerId: string): WorkClass[] {
  const classes = new Set<WorkClass>();
  for (const r of getIndexedWorkRecords(writerId)) {
    if (r.workType === "salaried") classes.add("paid-employment");
    else if (r.workType === "literary") classes.add("literary");
    else if (r.workType === "administrative") classes.add("administration");
    else if (r.workType === "retail") classes.add("retail");
    else if (r.workType === "freelance") classes.add("freelance");
    else classes.add("unknown");
  }
  if (getPublishingRecordsByWriter(writerId).length > 0)
    classes.add("publishing");
  if (publishingActivityRecords.some((r) => r.writerId === writerId))
    classes.add("publishing");
  if (administrationRecords.some((r) => r.writerId === writerId))
    classes.add("administration");
  if (getMaintenanceEventsByWriter(writerId).length > 0)
    classes.add("maintenance");
  if (getRetailRecordsByWriter(writerId).length > 0) classes.add("retail");
  if (entertainmentRecords.some((r) => r.writerId === writerId))
    classes.add("performance");
  return [...classes];
}

export function getSalariedWorkProfile(writerId: string): SalariedWorkProfile {
  const work = getIndexedWorkRecords(writerId).filter(
    (r) => r.workType === "salaried",
  );
  const money = getMoneyRecordsByWriter(writerId).filter(
    (m) => m.category === "income" || m.category === "work",
  );
  const time = getTimeOwnershipByWriter(writerId);
  return {
    writerId,
    workRecordIds: work.map((r) => r.id),
    employerIds: [
      ...new Set(
        work
          .map((r) => r.employerEntityId)
          .filter((id): id is string => Boolean(id)),
      ),
    ],
    timeOwnershipRecordIds: time.map((r) => r.id),
    moneyRecordIds: money.map((r) => r.id),
    commuteRecordIds: [],
    bodyRecordIds: [],
    indexedEntryIds: [
      ...new Set(
        work
          .map((r) => r.date)
          .filter((d): d is string => Boolean(d)),
      ),
    ],
    salariedPresenceIndexed: work.length > 0,
    verificationStatus: work.length > 0 ? "partial" : "unverified",
    notes:
      work.length === 0
        ? "No indexed salaried WorkRecords. Do not invent employer or wage."
        : undefined,
  };
}

export function getLiteraryIncome(writerId: string) {
  return literaryIncomeRelations.filter((r) => r.writerId === writerId);
}

export function getHiddenLabor(writerId: string) {
  return hiddenLaborRecords.filter((r) => r.writerId === writerId);
}

export function getMultiRoleDays(writerId: string) {
  return multiRoleDayProfiles.filter((r) => r.writerId === writerId);
}

export function getWorkFootprint(workRecordId: string) {
  return workFootprintProfiles.find((p) => p.workRecordId === workRecordId);
}

export function getIncomeSourceProfile(writerId: string): IncomeSourceProfile {
  const money = getMoneyRecordsByWriter(writerId);
  const income = money.filter((m) => m.incomeOrExpense === "income");
  const literary = getLiteraryIncome(writerId);
  return {
    writerId,
    moneyRecordIds: money.map((m) => m.id),
    incomeTypes: [
      ...new Set([
        ...income.map((m) => m.category),
        ...literary.map((r) => r.incomeType),
      ]),
    ],
    primaryIncomeType: undefined,
    evidenceCoverage:
      income.length > 0 || literary.length > 0
        ? "partial"
        : money.length > 0
          ? "partial"
          : "none",
    verificationStatus:
      income.length > 0 || literary.length > 0 ? "partial" : "unverified",
    notes:
      "primaryIncomeType remains unset until sources are sufficient. Expense-only MoneyRecords do not prove income ecology.",
  };
}

export function getWorkSilence(writerId: string): WorkSilenceRecord {
  const existing = workSilenceRecords.find((r) => r.writerId === writerId);
  if (existing) return existing;
  const writer = getWriterById(writerId);
  const workCount = getIndexedWorkRecords(writerId).length;
  return {
    id: `work-silence-${writerId}`,
    writerId,
    diaryWorkId: writer?.diaryWorkIds?.[0],
    knownOccupation: writer?.occupations?.join(" / "),
    indexedWorkMentionCount: workCount,
    silenceType: workCount === 0 ? "not-indexed" : "sparse-mention",
    interpretationStatus: "not-asserted",
    sourceIds: [],
    verificationStatus: "unverified",
    notes:
      "No mention / Not indexed ≠ No work. Silence is not evidence of leisure.",
  };
}

export function getWorkEvidenceProfile(workRecordId: string) {
  return workEvidenceProfiles.find((p) => p.workRecordId === workRecordId);
}

export function getWorkArchiveVisibility(workClass: WorkClass) {
  return archiveBiasProfiles.filter((p) => p.workClass === workClass);
}

export type WriterWorkComparisonCard = {
  writerId: string;
  slug: string;
  name: string;
  nameJa: string;
  primaryCondition: string;
  primaryConditionShort: string;
  workQuestion: string;
  knownOccupation: string;
  knownOccupationStatus: string;
  indexedWorkClasses: string[];
  workRecordCount: number;
  moneyRecordCount: number;
  moneyIncomeCount: number;
  maintenanceEventCount: number;
  publishingRecordCount: number;
  publishingActivityCount: number;
  administrationRecordCount: number;
  retailRecordCount: number;
  hiddenLaborCount: number;
  literaryIncomeCount: number;
  timeOwnershipCount: number;
  entryCount: number;
  sourceCoverage: string;
  mainResearchGap: string;
};

const WORK_QUESTIONS: Record<string, string> = {
  "writer-kafu":
    "What forms of work are visible beside diary writing and literary activity?",
  "writer-nishimura":
    "How do writing, publishing, media, and literary persona overlap?",
  "writer-bukowski":
    "How does paid labor coexist with literary production?",
  "writer-hayashi":
    "Which forms of survival labor become visible in the record?",
  "writer-roppa":
    "How much labor exists outside the visible performance?",
  "writer-ichiyo":
    "How do writing and household survival share the same day?",
  "writer-kafka":
    "Who controls the hours between employment and writing?",
  "writer-woolf":
    "When does publishing itself become literary labor?",
  "writer-pepys":
    "How does institutional work enter a private diary?",
};

const RESEARCH_GAPS: Record<string, string> = {
  "writer-kafu": "Day-level WorkRecords; literary income links",
  "writer-nishimura":
    "Employment vs persona separation; day-level media labor",
  "writer-bukowski": "Indexed salaried WorkRecords with sources",
  "writer-hayashi": "Actor-resolved maintenance; paid status evidence",
  "writer-roppa": "Performance / waiting / paid boundary from Entry",
  "writer-ichiyo": "Verified retail / household money amounts",
  "writer-kafka": "Employer · schedule · wage · commute from sources",
  "writer-woolf": "PublishingActivity actors with SourceCapture",
  "writer-pepys": "AdministrationRecords linked to Entry evidence",
};

const CONDITION_SHORT: Record<string, string> = {
  environment: "Environment",
  media: "Media",
  labor: "Labor",
  maintenance: "Maintenance",
  performance: "Performance",
  "household-economy": "Household Economy",
  time: "Time",
  "publishing-network": "Publishing",
  "administration-public-life": "Administration",
};

export function compareWriterWorkProfiles(
  writerIds?: string[],
): WriterWorkComparisonCard[] {
  const ids =
    writerIds ??
    writers.map((w) => w.id);
  return ids.map((writerId) => {
    const writer = getWriterById(writerId);
    if (!writer) {
      throw new Error(`Unknown writerId: ${writerId}`);
    }
    const work = getIndexedWorkRecords(writerId);
    const money = getMoneyRecordsByWriter(writerId);
    const income = money.filter((m) => m.incomeOrExpense === "income");
    const maint = getMaintenanceEventsByWriter(writerId);
    const publishing = getPublishingRecordsByWriter(writerId);
    const pubAct = publishingActivityRecords.filter(
      (r) => r.writerId === writerId,
    );
    const admin = administrationRecords.filter((r) => r.writerId === writerId);
    const retail = getRetailRecordsByWriter(writerId);
    const classes = getWriterWorkClasses(writerId);
    const known = writer.occupations?.length
      ? writer.occupations.join(" / ")
      : "Not indexed";

    return {
      writerId,
      slug: writer.slug,
      name: writer.name,
      nameJa: writer.nameJa,
      primaryCondition: writer.primaryCondition ?? "unknown",
      primaryConditionShort:
        CONDITION_SHORT[writer.primaryCondition ?? ""] ??
        writer.primaryCondition ??
        "Unknown",
      workQuestion:
        WORK_QUESTIONS[writerId] ??
        "What work made an ordinary day possible?",
      knownOccupation: known,
      knownOccupationStatus: writer.occupations?.length
        ? "registered (biographical · needs-source)"
        : "Not indexed",
      indexedWorkClasses:
        classes.length > 0 ? classes : ["none-indexed"],
      workRecordCount: work.length,
      moneyRecordCount: money.length,
      moneyIncomeCount: income.length,
      maintenanceEventCount: maint.length,
      publishingRecordCount: publishing.length,
      publishingActivityCount: pubAct.length,
      administrationRecordCount: admin.length,
      retailRecordCount: retail.length,
      hiddenLaborCount: getHiddenLabor(writerId).length,
      literaryIncomeCount: getLiteraryIncome(writerId).length,
      timeOwnershipCount: getTimeOwnershipByWriter(writerId).length,
      entryCount: writer.selectedEntryIds?.length ?? 0,
      sourceCoverage:
        work.length + publishing.length + money.length + maint.length > 0
          ? "Partial repository traces (not occupation-complete)"
          : "Framework only · day-level work not indexed",
      mainResearchGap:
        RESEARCH_GAPS[writerId] ?? "Bibliographic + Entry indexing",
    };
  });
}
