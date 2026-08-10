import type { Source } from "@/lib/types";
import { compareWriterWorkProfiles } from "@/lib/work-observatory";
import { archiveBiasProfiles } from "@/data/work/registry";

export const WORK_OBS_SLUG = "what-did-diarists-do-for-work";
export const WORK_OBS_ID = "obs-what-did-diarists-do-for-work";

export const workObsLead = [
  "後世から見ると、人は一つの肩書きになる。",
  "作家。",
  "詩人。",
  "俳優。",
  "官僚。",
  "しかし、一日は一つの肩書きではできていない。",
  "会社へ行く。",
  "店を切り盛りする。",
  "原稿を書く。",
  "出版社とやり取りする。",
  "舞台に立つ。",
  "書類を処理する。",
  "家計を管理する。",
  "誰かを支える。",
  "日記を読むと、「その人は何者だったか」ではなく、",
  "「その日は、何をして生活を成立させていたのか」という問いが出てくる。",
];

export const workObsMeta = {
  themes:
    "Work / Labor / Occupation / Writing / Money / Administration / Publishing / Performance / Household Economy / Maintenance / Time",
  articleStatus: "Published",
  verificationStatus: "Interpretive / evidence-backed",
  lastUpdated: "2026-08-10",
  axisLabel: "Observation Axis — Work",
};

export const workObsTheses = {
  primary: {
    en: "A writer's occupation is not always \"writer.\"",
    ja: "書き手の仕事が、いつも「作家」であるとは限らない。",
  },
  secondary: {
    en: "Literary history remembers the book. The diary may remember the job.",
    ja: "文学史は作品を記憶する。日記は、その作品を書いていた人の仕事を残すことがある。",
  },
  caution:
    "Observation / Interpretation — not a ranking of productivity, income, or literary value.",
};

export const roleExpansion = [
  "Author",
  "Employee",
  "Administrator",
  "Performer",
  "Publisher",
  "Household manager",
  "Retail worker",
  "Correspondent",
  "Family member",
  "Patient",
  "Traveler",
  "Reader",
];

export const occupationActivityIncome = [
  {
    layer: "Occupation",
    en: "Institutional / social occupation label",
    ja: "制度上・社会上の職業",
    example: "writer / administrator / performer",
  },
  {
    layer: "Activity",
    en: "What was actually done that day",
    ja: "その日に実際にしていた行為",
    example: "meeting editor / processing documents",
  },
  {
    layer: "Income source",
    en: "What funded livelihood",
    ja: "生活費を生み出していた源泉",
    example: "salary / royalties / household income / unknown",
  },
];

export const writingWorkTypes = [
  "private-writing",
  "literary-writing",
  "commissioned-writing",
  "editorial-writing",
  "administrative-writing",
  "correspondence",
  "review-writing",
  "diary-writing",
  "commercial-writing",
  "unknown",
];

export const publishingLaborRoles = [
  "Writer",
  "Editor",
  "Printer",
  "Publisher",
  "Distributor",
  "Bookseller",
  "Reviewer",
  "Reader",
  "Accountant",
  "Correspondent",
];

export const performanceBoundary = [
  { layer: "Paid performance time", status: "Source required" },
  { layer: "Preparation time", status: "Source required" },
  { layer: "Waiting time", status: "Source required" },
  { layer: "Recovery time", status: "Source required" },
  { layer: "Travel time", status: "Source required" },
  { layer: "Administrative time", status: "Source required" },
  { layer: "Food / maintenance time", status: "Source required" },
];

export const adminLaborTypes = [
  "Meeting",
  "Document",
  "Accounting",
  "Inspection",
  "Correspondence",
  "Travel",
  "Waiting",
  "Decision",
  "Procurement",
  "Unknown",
];

export const unpaidCandidates = [
  "Cooking",
  "Cleaning",
  "Care",
  "Shopping",
  "Household administration",
  "Correspondence",
  "Family support",
  "Emotional coordination (explicit sources only)",
];

export const paidStatusValues = [
  "paid",
  "salaried",
  "fee-based",
  "household-income",
  "unpaid",
  "reciprocal",
  "self-maintenance",
  "unknown",
];

export const hiddenLaborTypes = [
  "Waiting",
  "Travel",
  "Reading manuscripts",
  "Answering letters",
  "Meeting people",
  "Recovery",
  "Preparation",
  "Networking",
  "Research",
  "Bookkeeping",
  "Scheduling",
];

export const incomeEcologyBuckets = [
  "Salary",
  "Literary income",
  "Publishing income",
  "Performance income",
  "Retail income",
  "Household income",
  "Family support",
  "Savings",
  "Unknown",
];

export const workClasses = [
  "paid-employment",
  "freelance",
  "literary",
  "publishing",
  "performance",
  "administration",
  "household-economy",
  "retail",
  "maintenance",
  "care",
  "correspondence",
  "unpaid-support",
  "self-directed-production",
  "unknown",
];

export const visibleInvisibleWork = {
  visible: [
    "Book",
    "Performance",
    "Official decision",
    "Published article",
  ],
  invisible: [
    "Drafting",
    "Editing",
    "Waiting",
    "Travel",
    "Household work",
    "Accounting",
    "Recovery",
    "Correspondence",
    "Coordination",
  ],
};

export const workVisibilityRows = [
  "Paid employment",
  "Literary work",
  "Publishing",
  "Performance",
  "Administration",
  "Household economy",
  "Maintenance",
  "Care",
  "Retail",
  "Correspondence",
  "Travel",
  "Waiting",
  "Recovery",
  "Money management",
  "Unknown work",
] as const;

export const multilayerExamples = [
  {
    title: "Dinner with publisher",
    layers: ["Food", "Social", "Publishing", "Work"],
  },
  {
    title: "Letter to editor",
    layers: ["Correspondence", "Publishing", "Work"],
  },
  {
    title: "Rehearsal",
    layers: ["Performance", "Preparation", "Work"],
  },
  {
    title: "Shopping for household",
    layers: ["Maintenance", "Household economy", "Work"],
  },
];

export const workDefinition = {
  en: "Work is an activity that contributes to income, institutional obligation, household survival, public function, production, care, or the maintenance of another activity.",
  ja: "Diary Observatoryでは、仕事をひとまず、収入、制度上の義務、家計維持、公共機能、生産、ケア、あるいは別の活動を成立させるための維持に関わる行為として広く観測する。",
  caution: "すべての行為を Work へ吸収しない。",
};

export const writerWorkCards = compareWriterWorkProfiles([
  "writer-kafu",
  "writer-nishimura",
  "writer-bukowski",
  "writer-hayashi",
  "writer-roppa",
  "writer-ichiyo",
  "writer-kafka",
  "writer-woolf",
  "writer-pepys",
]);

export const epistemicSplit = {
  fact: "Repository Writer registrations; MoneyRecords / PublishingRecords / MaintenanceEvents where present; empty WorkRecord / AdministrationRecord / PublishingActivity / LiteraryIncome registries (counts = 0 for day-level work).",
  factJa:
    "RepositoryのWriter登録。存在するMoneyRecord / PublishingRecord / MaintenanceEvent。WorkRecord・AdministrationRecord・PublishingActivity・LiteraryIncomeは day-level では 0。",
  observation:
    "A single later title such as “writer” hides the plural roles that made an ordinary day possible.",
  observationJa:
    "「作家」という後世の肩書きでは、一日を成立させていた複数の仕事が見えにくくなる。",
  interpretation:
    "Separating Occupation / Activity / Income lets ordinary literary life be observed without collapsing authorship into livelihood.",
  interpretationJa:
    "Occupation / Activity / Income を分離すると、文学者の日常構造をより正確に観測できる。",
};

export { archiveBiasProfiles };

export const relatedComingWork = [
  {
    id: "coming-day-left-job",
    title: "仕事を辞めた日は、日記にどう残るのか",
    titleEn: "How Does a Diary Record Leaving Work?",
    status: "coming" as const,
  },
  {
    id: "coming-salary-supports-writing",
    title: "給与は創作を支えたのか",
    titleEn: "Did Salary Support Writing?",
    status: "coming" as const,
  },
  {
    id: "coming-unpaid-vanishes",
    title: "無給の仕事だけが残らない",
    titleEn: "Why Unpaid Work Leaves Fewer Traces",
    status: "coming" as const,
  },
  {
    id: "coming-commute-is-work",
    title: "通勤も仕事なのか",
    titleEn: "Is Commuting Also Work?",
    status: "coming" as const,
  },
  {
    id: "coming-editor-labor",
    title: "編集者は何をしていたのか",
    titleEn: "What Did Editors Actually Do?",
    status: "coming" as const,
  },
  {
    id: "coming-receipts-as-sources",
    title: "家事の領収書は文学資料になるか",
    titleEn: "Can Household Receipts Become Literary Sources?",
    status: "coming" as const,
  },
  {
    id: "coming-institutions-record",
    title: "制度は、なぜ記録を残すのか",
    titleEn: "Why Institutions Leave Records",
    status: "coming" as const,
  },
];

export const workObsSources: Source[] = [
  {
    id: "src-work-obs-repo",
    label: "Diary Observatory repository state",
    category: "editorial",
    status: "verified",
    note: "Counts derived from registered Writers and existing Money / Publishing / Maintenance registries. No invented occupations, wages, or employer details.",
  },
];
