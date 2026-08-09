import type { MaintenanceGap } from "@/lib/types";

/** Gaps are questions — never invent assignees to fill them. */
export const maintenanceGaps: MaintenanceGap[] = [
  {
    id: "mg-kafu-who-prepared-meal",
    writerId: "writer-kafu",
    relatedEntryId: "entry-1918-01-01",
    category: "food",
    question: "Who prepared the meal?",
    questionJa: "誰が食事を用意したか",
    knownContext: "Food appears as daily condition in long diary indexing.",
    missingInformation: "Cook / purchaser / servant / self — not indexed as Fact.",
    significance:
      "Absence of an actor can make meals look ‘automatic’; keep Unknown.",
    verificationStatus: "unknown",
    sourceIds: ["src-maint-kafu-entry"],
  },
  {
    id: "mg-kafu-who-cleaned",
    writerId: "writer-kafu",
    relatedEntryId: "entry-1918-01-01",
    category: "cleaning",
    question: "Who cleaned the room?",
    questionJa: "誰が部屋を掃除したか",
    knownContext: "Cleaning / arrangement appears in day structure indexing.",
    missingInformation: "Domestic labor assignee not verified.",
    significance: "Environment response ≠ proof of who did the labor.",
    verificationStatus: "unknown",
    sourceIds: ["src-maint-kafu-entry"],
  },
  {
    id: "mg-nishimura-domestic",
    writerId: "writer-nishimura",
    relatedEntryId: "entry-2011-05-02",
    category: "cleaning",
    question: "Who maintained domestic space that day?",
    questionJa: "その日、誰が生活空間を維持したか",
    knownContext: "Schedule, movement, publishing nodes are more visible.",
    missingInformation: "Domestic support structure Not indexed.",
    significance: "Media maintenance can overshadow unpaid household labor.",
    verificationStatus: "not-indexed",
    sourceIds: ["src-maint-nishimura-entry"],
  },
  {
    id: "mg-bukowski-domestic-support",
    writerId: "writer-bukowski",
    category: "care",
    question: "Who provided care / domestic support around wage labor periods?",
    questionJa: "賃金労働期に、誰が家事・ケアを担ったか",
    knownContext: "Paid labor axis is stronger in current conceptual index.",
    missingInformation: "Full domestic support structure Not indexed.",
    significance: "Wage labor visibility must not erase other unpaid work.",
    verificationStatus: "not-indexed",
    sourceIds: ["src-maint-bukowski"],
  },
  {
    id: "mg-hayashi-division",
    writerId: "writer-hayashi",
    category: "administration",
    question: "Record-by-record division of domestic and paid labor?",
    questionJa: "家事と賃金労働の分担は、記録単位でどう分かれるか",
    knownContext:
      "Housing / food / paid work are research axes; Hōrōki is edition-sensitive.",
    missingInformation:
      "Assignee maps and rent amounts require edition-verified sources.",
    significance:
      "Visible maintenance in women’s records must return as a question to all four.",
    verificationStatus: "partial",
    sourceIds: ["src-maint-hayashi"],
  },
  {
    id: "mg-all-who-protected-writing-time",
    writerId: "writer-hayashi",
    category: "writing-support",
    question: "Who protected writing time?",
    questionJa: "誰が書く時間を支えた／守ったのか",
    knownContext: "Applies as a research question to all four writers.",
    missingInformation: "Cross-writer assignee Facts Not indexed.",
    significance: "Writing time is an outcome of maintenance, not a given.",
    verificationStatus: "not-indexed",
    sourceIds: ["src-maint-cross"],
  },
];

export const MAINTENANCE_GAP_IDS = maintenanceGaps.map((g) => g.id);
