import type { Source } from "@/lib/types";
import { compareWriterTimeProfiles } from "@/lib/time-observatory";

export const WHO_OWNS_DAY_SLUG = "who-owns-the-day";
export const WHO_OWNS_DAY_OBS_ID = "obs-who-owns-the-day";

export const whoOwnsDayLead = [
  "一日は24時間ある。",
  "しかし、その24時間をすべて自分で使える人はほとんどいない。",
  "会社へ行く。",
  "家族の用事をする。",
  "食べる。",
  "移動する。",
  "待つ。",
  "病院へ行く。",
  "眠る。",
  "身体が動かない。",
  "誰かの返事を待つ。",
  "その残りに、書く。",
  "あるいは、残りでは足りないので睡眠を削る。",
  "「時間があるか」という問いだけでは、一日は見えない。",
  "重要なのは、誰がその時間を決めたのか。",
  "変更できるのか。",
  "中断できるのか。",
  "報酬があるのか。",
  "身体にどれだけ負担があるのか。",
  "ということである。",
];

export const whoOwnsDayMeta = {
  themes:
    "Time / Work / Writing / Maintenance / Body / Family / Sleep / Waiting / Institution / Creative Labor",
  articleStatus: "Published",
  verificationStatus: "Interpretive / evidence-backed",
  lastUpdated: "2026-08-10",
  axisLabel: "Observation Axis — Time",
};

export const whoOwnsDayTheses = {
  primary: {
    en: "A day is not simply twenty-four free hours. It is a negotiated space between institutions, bodies, relationships, and self-directed time.",
    ja: "一日は、自由に使える24時間ではない。制度、身体、人間関係、そして自分で使える時間のあいだで配分される空間である。",
  },
  secondary: {
    en: "Creative time is often not found. It is made.",
    ja: "創作時間は、どこかに空いているとは限らない。作らなければ存在しないことがある。",
  },
  caution:
    "Observation / Interpretation — do not treat as a universal law for every writer.",
};

export const controlKinds = [
  "Employer-controlled",
  "Institution-controlled",
  "Family-controlled",
  "Body-controlled",
  "Appointment-controlled",
  "Self-directed",
  "Shared",
  "Unknown",
];

export const ownershipAxes = [
  { en: "Duration", ja: "長さ" },
  { en: "Control", ja: "誰が決めるか" },
  { en: "Flexibility", ja: "変更可能性" },
  { en: "Interruptibility", ja: "中断可能性" },
  { en: "Compensation", ja: "報酬" },
  { en: "Body cost", ja: "身体負担" },
  { en: "Opportunity cost", ja: "他活動の機会損失" },
  { en: "Visibility", ja: "記録に残りやすいか" },
];

export const timeBlocks = [
  "Paid work",
  "Commute",
  "Household",
  "Family",
  "Writing",
  "Reading",
  "Correspondence",
  "Performance",
  "Waiting",
  "Food",
  "Sleep",
  "Recovery",
  "Medical",
  "Social",
  "Unknown",
];

export const dayWithoutPercentages = [
  {
    block: "Work",
    control: "Employer-controlled",
    status: "Confirmed presence (when sourced) / Not indexed",
  },
  {
    block: "Writing",
    control: "Self-directed",
    status: "Confirmed presence (when sourced) / Not indexed",
  },
  {
    block: "Sleep",
    control: "Body-controlled",
    status: "Unknown duration",
  },
];

export const institutionalFootprint = [
  "Preparation",
  "Commute",
  "Work",
  "Waiting",
  "Return commute",
  "Recovery",
  "Sleep requirement",
];

export const maintenanceTypes = [
  "Cooking",
  "Cleaning",
  "Shopping",
  "Heating",
  "Laundry",
  "Housing",
  "Money management",
  "Correspondence",
  "Administration",
  "Food procurement",
  "Repair",
  "Medical care",
];

export const creativeTimeTypes = [
  { id: "residual", label: "Residual", labelJa: "残り時間" },
  { id: "protected", label: "Protected", labelJa: "守られた時間" },
  { id: "negotiated", label: "Negotiated", labelJa: "交渉された時間" },
  {
    id: "institutionalized",
    label: "Institutionalized",
    labelJa: "制度化された時間",
  },
];

export const timeFramework = [
  {
    id: "institutional",
    label: "Institutional",
    items: ["Work", "School", "Performance", "Medical"],
  },
  {
    id: "maintenance",
    label: "Maintenance",
    items: ["Food", "Cleaning", "Housing", "Administration"],
  },
  {
    id: "relational",
    label: "Relational",
    items: ["Family", "Care", "Social", "Correspondence"],
  },
  {
    id: "body",
    label: "Body",
    items: ["Sleep", "Recovery", "Illness", "Food"],
  },
  {
    id: "mobility",
    label: "Mobility",
    items: ["Commute", "Travel", "Waiting"],
  },
  {
    id: "self-directed",
    label: "Self-directed",
    items: ["Writing", "Reading", "Rest", "Leisure"],
  },
  {
    id: "unknown",
    label: "Unknown",
    items: ["Unclassified"],
  },
];

export const writerTimeQuestions = [
  {
    slug: "kafu-nagai",
    name: "Kafū",
    nameJa: "永井荷風",
    primaryCondition: "Environment",
    question: "How does environment structure time?",
    dataStatus: "Conceptual comparison only · No indexed time records",
  },
  {
    slug: "kenji-nishimura",
    name: "Nishimura",
    nameJa: "西村賢太",
    primaryCondition: "Media",
    question: "How does media and publishing enter the day?",
    dataStatus: "Conceptual comparison only · No indexed time records",
  },
  {
    slug: "charles-bukowski",
    name: "Bukowski",
    nameJa: "ブコウスキー",
    primaryCondition: "Labor",
    question: "How does paid labor coexist with writing?",
    dataStatus: "Conceptual comparison only · No indexed time records",
  },
  {
    slug: "fumiko-hayashi",
    name: "Hayashi",
    nameJa: "林芙美子",
    primaryCondition: "Maintenance",
    question: "How visible is maintenance work?",
    dataStatus: "Conceptual comparison only · No indexed time records",
  },
  {
    slug: "furukawa-roppa",
    name: "Roppa",
    nameJa: "古川ロッパ",
    primaryCondition: "Performance",
    question: "How much performance work exists outside the performance?",
    dataStatus: "Conceptual comparison only · WaitingRecord registry empty",
  },
  {
    slug: "ichiyo-higuchi",
    name: "Ichiyō",
    nameJa: "樋口一葉",
    primaryCondition: "Household Economy",
    question: "How do household economy and writing share time?",
    dataStatus: "Conceptual comparison only · No indexed time records",
  },
  {
    slug: "franz-kafka",
    name: "Kafka",
    nameJa: "カフカ",
    primaryCondition: "Time",
    question: "Who controls the hours left for writing?",
    dataStatus: "Conceptual comparison only · No indexed time records",
  },
] as const;

export const writerTimeSummaries = compareWriterTimeProfiles(
  writerTimeQuestions.map((w) => {
    const map: Record<string, string> = {
      "kafu-nagai": "writer-kafu",
      "kenji-nishimura": "writer-nishimura",
      "charles-bukowski": "writer-bukowski",
      "fumiko-hayashi": "writer-hayashi",
      "furukawa-roppa": "writer-roppa",
      "ichiyo-higuchi": "writer-ichiyo",
      "franz-kafka": "writer-kafka",
    };
    return map[w.slug];
  }),
);

export const epistemicSplit = {
  fact: "Repository-confirmed Writer pages, Primary Conditions, and empty time registries (counts = 0).",
  factJa:
    "Repositoryに存在するWriterページ、Primary Condition、空の時間レジストリ（件数=0）。",
  observation:
    "Time appears divided among institutions, bodies, relationships, and self-directed activity.",
  observationJa:
    "時間は制度、身体、人間関係、自己裁量の活動のあいだで分割されているように見える。",
  interpretation:
    "Time ownership is a useful comparison axis for ordinary literary life — without ranking writers.",
  interpretationJa:
    "time ownershipは、作家の日常比較に有効な観測軸である（Rankingなし）。",
};

export const relatedComingWhoOwnsDay = [
  {
    id: "coming-waiting-is-work",
    title: "待つことも、仕事である",
    titleEn: "Waiting Is Also Work",
    status: "coming" as const,
  },
  {
    id: "coming-who-owns-night",
    title: "夜は誰のものなのか",
    titleEn: "Who Owns the Night?",
    status: "coming" as const,
  },
  {
    id: "coming-sleep-enemy",
    title: "睡眠は創作の敵なのか",
    titleEn: "Is Sleep the Enemy of Writing?",
    status: "coming" as const,
  },
  {
    id: "coming-free-time-labor",
    title: "自由時間は、誰かの労働でできている",
    titleEn: "Free Time Can Contain Another’s Work",
    status: "coming" as const,
  },
  {
    id: "coming-travel-time-work",
    title: "移動時間は仕事なのか",
    titleEn: "Is Travel Time Work?",
    status: "coming" as const,
  },
  {
    id: "coming-doing-nothing",
    title: "何もしない一日",
    titleEn: "A Day of Doing Nothing",
    status: "coming" as const,
  },
  {
    id: "coming-hours-of-life",
    title: "生活には何時間かかるのか",
    titleEn: "How Many Hours Does Life Take?",
    status: "coming" as const,
  },
];

export const whoOwnsDaySources: Source[] = [
  {
    id: "src-who-owns-day-method",
    label: "Diary Observatory methodology (Time Observatory)",
    category: "editorial",
    status: "verified",
    note: "Conceptual model. No invented schedules or percentage allocations.",
  },
];

export const whoOwnsDayEntityIds: string[] = [];
