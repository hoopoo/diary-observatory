import type { Source } from "@/lib/types";
import { maintenanceProfiles as fourMaintenanceProfiles } from "@/data/comparisons/four-urban-lives";
import {
  MAINTENANCE_EVENT_IDS,
  maintenanceEvents,
} from "@/data/maintenance-events";
import {
  MAINTENANCE_GAP_IDS,
  maintenanceGaps,
} from "@/data/maintenance-gaps";
import { HAYASHI_HOUSING_IDS } from "@/data/housing/fumiko-hayashi";

export const MAINT_OBS_SLUG = "maintenance-is-not-background";
export const MAINT_OBS_ID = "obs-maintenance-is-not-background";

export const maintenanceLead = [
  "人は、",
  "机に向かった瞬間から",
  "書き始めるわけではない。",
  "その前に、",
  "起きる。",
  "食べる。",
  "身体を温める。",
  "部屋を片づける。",
  "仕事へ行く。",
  "家賃を払う。",
  "手紙を返す。",
  "誰かを迎える。",
  "眠る。",
  "また起きる。",
  "文学史には、",
  "作品が残る。",
  "しかし、",
  "作品を書く身体を",
  "一日ずつ維持した仕事は残りにくい。",
  "生活維持は、",
  "創作の外側にある雑務ではない。",
  "書くことを可能にする、",
  "最初のインフラである。",
];

export const maintenanceMeta = {
  primaryWriters:
    "Kafū Nagai / Kenji Nishimura / Charles Bukowski / Fumiko Hayashi",
  primaryComparison: "Four Urban Lives",
  themes:
    "Maintenance / Domestic Labor / Paid Labor / Food / Housing / Body / Writing / Support / Time / Gender",
  articleStatus: "Published",
  verificationStatus: "Partial",
  lastUpdated: "2026-08-05",
};

export const maintenanceFunctions = [
  {
    id: "food",
    label: "Food",
    labelJa: "食事を得る、作る、片づける",
  },
  {
    id: "housing",
    label: "Housing",
    labelJa: "住居を確保し、家賃を払う",
  },
  {
    id: "heat",
    label: "Heat and energy",
    labelJa: "暖房、照明、湯、燃料",
  },
  {
    id: "cleaning",
    label: "Cleaning",
    labelJa: "掃除、整理",
  },
  {
    id: "clothing",
    label: "Clothing",
    labelJa: "衣服、洗濯",
  },
  {
    id: "sleep",
    label: "Sleep and recovery",
    labelJa: "睡眠、休息、身体回復",
  },
  {
    id: "health",
    label: "Health",
    labelJa: "医療、薬、療養",
  },
  {
    id: "money",
    label: "Money",
    labelJa: "賃金、家計、支払い",
  },
  {
    id: "movement",
    label: "Movement",
    labelJa: "通勤、買い物、移動",
  },
  {
    id: "relationships",
    label: "Relationships",
    labelJa: "家族、配偶者、友人、編集者との関係維持",
  },
  {
    id: "admin",
    label: "Administrative work",
    labelJa: "手紙、電話、契約、原稿管理",
  },
  {
    id: "writing-support",
    label: "Writing support",
    labelJa: "資料整理、発送、校正、来客対応",
  },
];

export const maintenanceLayers = [
  { id: "published", label: "Published work", labelJa: "刊行作品" },
  { id: "writing", label: "Writing", labelJa: "執筆" },
  { id: "time", label: "Available time", labelJa: "使える時間" },
  { id: "body", label: "Body", labelJa: "身体" },
  {
    id: "food-housing-sleep",
    label: "Food / housing / sleep",
    labelJa: "食事・住居・睡眠",
  },
  {
    id: "money-labor-support",
    label: "Money / labor / support",
    labelJa: "金銭・労働・支援",
  },
  {
    id: "infra",
    label: "Social and material infrastructure",
    labelJa: "社会・物質インフラ",
  },
];

export const fourMaintenanceCards = [
  {
    writerId: "writer-kafu",
    name: "Kafū Nagai",
    primary: "Environmental response",
    primaryJa: "環境への応答",
    items: ["heat", "cleaning", "food", "housing", "bodily adjustment"],
    unknown: "who supported domestic life",
  },
  {
    writerId: "writer-nishimura",
    name: "Kenji Nishimura",
    primary: "Schedule and institutional coordination",
    primaryJa: "予定と制度的調整",
    items: [
      "messages",
      "movement",
      "appointments",
      "food",
      "sleep",
      "publishing tasks",
    ],
    unknown: "domestic support structure",
  },
  {
    writerId: "writer-bukowski",
    name: "Charles Bukowski",
    primary: "Wage labor and self-maintenance",
    primaryJa: "賃金労働と自己維持",
    items: ["work", "rent", "food", "alcohol", "submission", "recovery"],
    unknown: "full domestic support structure",
  },
  {
    writerId: "writer-hayashi",
    name: "Fumiko Hayashi",
    primary: "Paid work, housing, food, domestic life",
    primaryJa: "賃金労働・住居・食事・家事",
    items: [
      "wages",
      "rent",
      "rooms",
      "food",
      "domestic work",
      "movement",
      "submission",
    ],
    unknown: "record-by-record division of labor",
  },
];

export const foodProvisionModes = [
  { id: "self", label: "Self-prepared", labelJa: "自炊" },
  { id: "purchased", label: "Purchased", labelJa: "購入" },
  { id: "restaurant", label: "Restaurant", labelJa: "外食" },
  { id: "gifted", label: "Gifted", labelJa: "贈与" },
  {
    id: "known-person",
    label: "Prepared by known person",
    labelJa: "確認済みの他者",
  },
  {
    id: "institution",
    label: "Institutionally provided",
    labelJa: "職場・出版社等",
  },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
];

export const supportActors = [
  { id: "self", label: "Self", labelJa: "本人", status: "Unknown / Not indexed" },
  { id: "family", label: "Family", labelJa: "家族", status: "Unknown / Not indexed" },
  {
    id: "partner",
    label: "Partner",
    labelJa: "配偶者・恋人",
    status: "Unknown / Not indexed",
  },
  { id: "friend", label: "Friend", labelJa: "友人", status: "Unknown / Not indexed" },
  {
    id: "domestic",
    label: "Domestic worker",
    labelJa: "家事労働者",
    status: "Unknown / Not indexed",
  },
  {
    id: "employer",
    label: "Employer",
    labelJa: "雇用者",
    status: "Possible system support (contextual)",
  },
  {
    id: "publisher",
    label: "Publisher",
    labelJa: "出版社",
    status: "Possible system support (contextual)",
  },
  {
    id: "editor",
    label: "Editor",
    labelJa: "編集者",
    status: "Known support only when entry-named",
  },
  {
    id: "institution",
    label: "Institution",
    labelJa: "組織",
    status: "Possible system support (contextual)",
  },
  {
    id: "shop",
    label: "Restaurant / shop",
    labelJa: "店",
    status: "Possible system support (contextual)",
  },
  {
    id: "transport",
    label: "Transport system",
    labelJa: "交通",
    status: "Possible system support (contextual)",
  },
  {
    id: "postal",
    label: "Postal system",
    labelJa: "郵便",
    status: "Possible system support (contextual)",
  },
  { id: "unknown", label: "Unknown", labelJa: "不明", status: "Default for persons" },
];

export const studyHousehold = {
  study: ["机", "椅子", "本棚", "原稿", "書斎展示"],
  household: [
    "台所",
    "洗濯",
    "掃除",
    "暖房",
    "郵便",
    "電話",
    "買い物",
    "来客対応",
    "資料整理",
  ],
};

export const paidUnpaidRows = [
  {
    id: "paid-employment",
    label: "Paid employment",
    cells: {
      kafu: "Historical context",
      nishimura: "Documented",
      bukowski: "Documented (axis)",
      hayashi: "Implied / research",
    },
  },
  {
    id: "writing-income",
    label: "Writing income",
    cells: {
      kafu: "Partial",
      nishimura: "Documented",
      bukowski: "Partial",
      hayashi: "Partial",
    },
  },
  {
    id: "domestic",
    label: "Domestic labor",
    cells: {
      kafu: "Not indexed",
      nishimura: "Not indexed",
      bukowski: "Not indexed",
      hayashi: "Partial / research",
    },
  },
  {
    id: "food-prep",
    label: "Food preparation",
    cells: {
      kafu: "Unknown",
      nishimura: "Unknown",
      bukowski: "Unknown",
      hayashi: "Unknown",
    },
  },
  {
    id: "cleaning",
    label: "Cleaning",
    cells: {
      kafu: "Unknown",
      nishimura: "Not indexed",
      bukowski: "Not indexed",
      hayashi: "Unknown",
    },
  },
  {
    id: "housing-admin",
    label: "Housing administration",
    cells: {
      kafu: "Partial",
      nishimura: "Not indexed",
      bukowski: "Not indexed",
      hayashi: "Partial",
    },
  },
  {
    id: "travel",
    label: "Travel coordination",
    cells: {
      kafu: "Partial",
      nishimura: "Documented",
      bukowski: "Partial",
      hayashi: "Implied",
    },
  },
  {
    id: "correspondence",
    label: "Correspondence",
    cells: {
      kafu: "Partial",
      nishimura: "Documented",
      bukowski: "Partial",
      hayashi: "Partial",
    },
  },
  {
    id: "publishing-admin",
    label: "Publishing administration",
    cells: {
      kafu: "Historical context",
      nishimura: "Documented",
      bukowski: "Implied",
      hayashi: "Implied",
    },
  },
  {
    id: "body",
    label: "Body recovery",
    cells: {
      kafu: "Documented",
      nishimura: "Partial",
      bukowski: "Documented",
      hayashi: "Implied",
    },
  },
  {
    id: "support",
    label: "Support by others",
    cells: {
      kafu: "Unknown / Not indexed",
      nishimura: "Unknown / Not indexed",
      bukowski: "Unknown / Not indexed",
      hayashi: "Unknown / Not indexed",
    },
  },
];

export const breakdownTypes = [
  { id: "food", label: "Food insecurity", labelJa: "食事" },
  { id: "housing", label: "Housing instability", labelJa: "住居" },
  { id: "income", label: "Income interruption", labelJa: "収入" },
  { id: "sleep", label: "Sleep disruption", labelJa: "睡眠" },
  { id: "illness", label: "Illness", labelJa: "病気" },
  { id: "relationship", label: "Relationship breakdown", labelJa: "関係" },
  { id: "overload", label: "Work overload", labelJa: "過重労働" },
  {
    id: "care",
    label: "Care burden",
    labelJa: "介護・ケア",
    note: "Fact only when verified",
  },
  { id: "unknown", label: "Unknown cause", labelJa: "原因不明" },
];

export const bodyMaintenance = [
  {
    name: "Kafū",
    items: ["寒さ", "歯痛", "歩行", "老い"],
  },
  {
    name: "Nishimura",
    items: ["睡眠", "飲酒", "疲労", "病気"],
  },
  {
    name: "Bukowski",
    items: ["労働疲労", "飲酒", "夜の執筆", "老い"],
  },
  {
    name: "Hayashi",
    items: ["空腹", "移動", "仕事量", "睡眠", "身体負荷"],
  },
];

export const successShift = {
  before: [
    "self-maintenance",
    "wage labor",
    "unstable housing",
    "limited support",
  ],
  after: [
    "writing income",
    "stable housing",
    "institutional support",
    "increased public obligations",
    "possible delegated domestic work",
    "increased archive visibility",
  ],
};

export const infrastructureCompare = {
  visible: [
    "train",
    "postal system",
    "publisher",
    "television",
    "workplace",
    "museum",
  ],
  lessVisible: [
    "food",
    "cleaning",
    "sleep",
    "care",
    "emotional support",
    "household management",
    "bodily recovery",
  ],
};

export const indexedMaintenanceStatus = [
  {
    writer: "Kafū Nagai",
    focus: "Heating / cleaning",
    date: "1918-01-01",
    status: "Partial",
    href: "/entries/1918-01-01-kafu-nagai",
  },
  {
    writer: "Kenji Nishimura",
    focus: "Movement / publishing schedule",
    date: "2011-05-02",
    status: "Partial",
    href: "/entries/2011-05-02-kenji-nishimura",
  },
  {
    writer: "Charles Bukowski",
    focus: "Paid labor",
    date: "Conceptual / bibliographic verification needed",
    status: "Indexing",
    href: null as string | null,
  },
  {
    writer: "Fumiko Hayashi",
    focus: "Housing / food / paid work / domestic life",
    date: "Edition and source verification needed",
    status: "Indexing",
    href: null as string | null,
  },
];

export const relatedComingMaintenance = [
  { id: "rel-who-food", title: "誰が作家の食事を用意したのか", status: "coming" as const },
  { id: "rel-outside-study", title: "書斎の外にある仕事", status: "coming" as const },
  {
    id: "rel-men-domestic",
    title: "男性作家の日記に残らない家事",
    status: "coming" as const,
  },
  { id: "rel-sleep-work", title: "眠ることも仕事である", status: "coming" as const },
  {
    id: "rel-unnamed",
    title: "作家を支えた無名の人々",
    status: "coming" as const,
  },
];

export const maintenanceObservationProfiles = fourMaintenanceProfiles;
export { maintenanceEvents, MAINTENANCE_EVENT_IDS };
export { maintenanceGaps, MAINTENANCE_GAP_IDS };

export const maintenanceEntityIds = [
  "entity-tokyo",
  "entity-los-angeles",
  "entity-hayashi-fumiko-memorial-hall",
];

export const maintenanceHousingRecordIds = [...HAYASHI_HOUSING_IDS];

export const maintenanceSources: Source[] = [
  {
    id: "src-maint-kafu-entry",
    category: "primary",
    status: "verification-pending",
    label: "Primary diary — Danchōtei Nichijō / indexed 1918-01-01",
    needed: true,
    note: "No long quotation. Actor of domestic labor remains Unknown.",
  },
  {
    id: "src-maint-nishimura-entry",
    category: "primary",
    status: "verification-pending",
    label: "Primary diary — Nishimura day record / indexed 2011-05-02",
    needed: true,
  },
  {
    id: "src-maint-bukowski",
    category: "primary",
    status: "needed",
    label: "Bukowski — journals / letters / bibliographies before wage Fact tables",
    needed: true,
    note: "Do not invent wages, rooms, or shift dates.",
  },
  {
    id: "src-maint-hayashi",
    category: "primary",
    status: "needed",
    label: "Hayashi — Hōrōki edition layers; FoodRecord / HousingRecord Facts only",
    needed: true,
    note: "Diary-derived work — not an unedited diary.",
  },
  {
    id: "src-maint-cross",
    category: "editorial",
    status: "needed",
    label: "Cross-writer maintenance assignee research",
    needed: true,
  },
  {
    id: "src-maint-domestic-history",
    category: "verification",
    status: "needed",
    label: "Domestic history — heat, laundry, household technology (context ≠ Fact)",
    needed: true,
  },
  {
    id: "src-maint-gender-history",
    category: "verification",
    status: "needed",
    label: "Gender / labor-history context separate from individual Fact",
    needed: true,
  },
  {
    id: "src-maint-publishing",
    category: "verification",
    status: "needed",
    label: "Publishing records — editing, mailing, proof, hospitality",
    needed: true,
  },
  {
    id: "src-maint-housing-money",
    category: "verification",
    status: "needed",
    label: "Housing and money records — rent, wages, fuel",
    needed: true,
  },
  {
    id: "src-maint-body",
    category: "verification",
    status: "needed",
    label: "Body / health records — sleep, illness, recovery (no medical invention)",
    needed: true,
  },
];
