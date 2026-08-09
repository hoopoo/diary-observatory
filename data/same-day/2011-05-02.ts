import type {
  SameDay,
  SameDayMatrixRow,
  SameDaySlot,
  Source,
} from "@/lib/types";
import { ENTRY_ID_2011_05_02 } from "@/data/entries/2011-05-02-kenji-nishimura";

export const SAME_DAY_SLUG_2011_05_02 = "2011-05-02";
export const SAME_DAY_ID_2011_05_02 = "same-day-2011-05-02";

export const sameDay20110502: SameDay = {
  id: SAME_DAY_ID_2011_05_02,
  slug: SAME_DAY_SLUG_2011_05_02,
  date: "2011-05-02",
  title: "May 2, 2011",
  titleJa: "2011年5月2日",
  subtitle: "One indexed life, for now.",
  subtitleJa: "いま記録されているのは、一人の一日だけ。",
  summary:
    "2011年5月2日に東京で西村賢太が記録した一日を起点に、同じ日付の異なる都市と人生を将来横断比較する。",
  lead: [
    "同じ日にも、世界では無数の人が別々の一日を生きていた。",
    "しかし、日記として残り、現在この観測所に索引化されている人生は、まだ一つしかない。",
    "2011年5月2日。",
    "東京で西村賢太は、出版社で仕事をし、古書店へ立ち寄り、夜にはライブを見た。",
    "このページは、一人の一日から始まり、将来ほかの都市の記録が加わるための器である。",
  ],
  entryIds: [ENTRY_ID_2011_05_02],
  writerIds: ["writer-nishimura"],
  cityIds: ["entity-koenji"],
  countries: ["Japan"],
  languages: ["Japanese"],
  themes: [
    "Publishing",
    "Used Bookstores",
    "Live Music",
    "Movement",
    "Books",
  ],
  publicContextIds: [],
  sourceIds: [
    "src-sd-primary",
    "src-sd-entry",
    "src-sd-entities",
    "src-sd-context",
  ],
  comparisonStatus: "open",
  lastUpdated: "2026-08-02",
};

export const sameDay20110502Meta = {
  dateEn: "May 2, 2011",
  dateJa: "2011年5月2日",
  indexedDiaries: 1,
  countries: 1,
  cities: 1,
  writers: 1,
  openSlots: ["Los Angeles", "London", "Paris", "New York", "Other"],
  citiesIndexed: ["Tokyo"],
  languages: ["Japanese"],
};

export const indexedLifeCard = {
  entryId: ENTRY_ID_2011_05_02,
  entryHref: "/entries/2011-05-02-kenji-nishimura",
  writerName: "Kenji Nishimura",
  writerNameJa: "西村賢太",
  writerHref: "/writers/kenji-nishimura",
  city: "Tokyo",
  country: "Japan",
  language: "Japanese",
  areas: ["Shinjuku", "Koenji"],
  title: "A publisher, a bookstore, a live house.",
  titleJa: "出版社、古書店、ライブハウス。",
  summary:
    "新潮社で仕事をし、高円寺へ移動し、都丸書店で古書を購入。その後、ShowBoatで友川カズキのライブを見る。",
  themes: [
    "Publishing",
    "Used Bookstores",
    "Live Music",
    "Movement",
    "Books",
  ],
  verificationStatus: "partial" as const,
  sourceStatus: "Primary text copyright protected / editorial summary",
};

export const tokyoDayRoute = {
  title: "One day, one city",
  titleJa: "一日、一つの都市",
  city: "Tokyo",
  steps: [
    { label: "Publisher", labelJa: "Shinchosha", href: "/entities/shinchosha" },
    { label: "Movement", labelJa: "Train to Koenji", href: null },
    {
      label: "Bookstore",
      labelJa: "Tomaru Shoten",
      href: "/entities/tomaru-shoten",
    },
    { label: "Live music", labelJa: "ShowBoat", href: "/entities/showboat" },
  ],
  paragraphs: [
    "この一日は、東京全体を代表するものではない。",
    "一人の作家が、一日の中で通過した文化的な動線である。",
    "Same Dayは、都市を統計や観光情報ではなく、個人が生きた経路として比較する。",
  ],
};

export const emptySlots: SameDaySlot[] = [
  {
    id: "slot-la",
    sameDayId: SAME_DAY_ID_2011_05_02,
    city: "Los Angeles",
    cityJa: "ロサンゼルス",
    country: "United States",
    entryId: null,
    status: "open",
    note: "No indexed diary yet.",
    noteJa: "この日付の日記はまだ登録されていません。",
    researchStatus: "open",
  },
  {
    id: "slot-london",
    sameDayId: SAME_DAY_ID_2011_05_02,
    city: "London",
    cityJa: "ロンドン",
    country: "United Kingdom",
    entryId: null,
    status: "open",
    note: "No indexed diary yet.",
    noteJa: "この日付の日記はまだ登録されていません。",
    researchStatus: "open",
  },
  {
    id: "slot-paris",
    sameDayId: SAME_DAY_ID_2011_05_02,
    city: "Paris",
    cityJa: "パリ",
    country: "France",
    entryId: null,
    status: "open",
    note: "No indexed diary yet.",
    noteJa: "この日付の日記はまだ登録されていません。",
    researchStatus: "open",
  },
  {
    id: "slot-ny",
    sameDayId: SAME_DAY_ID_2011_05_02,
    city: "New York",
    cityJa: "ニューヨーク",
    country: "United States",
    entryId: null,
    status: "open",
    note: "No indexed diary yet.",
    noteJa: "この日付の日記はまだ登録されていません。",
    researchStatus: "open",
  },
  {
    id: "slot-other",
    sameDayId: SAME_DAY_ID_2011_05_02,
    city: "Other city",
    cityJa: "その他の都市",
    entryId: null,
    status: "open",
    note: "Open for future observation.",
    noteJa: "将来の観測のために開いている。",
    researchStatus: "open",
  },
];

export const indexedTokyoSlot: SameDaySlot = {
  id: "slot-tokyo",
  sameDayId: SAME_DAY_ID_2011_05_02,
  city: "Tokyo",
  cityJa: "東京",
  country: "Japan",
  entryId: ENTRY_ID_2011_05_02,
  status: "indexed",
  note: "Kenji Nishimura diary day indexed.",
  noteJa: "西村賢太の一日を索引化済み。",
  researchStatus: "indexed",
};

export const comparisonAxes = [
  { id: "weather", label: "Weather", labelJa: "天候" },
  { id: "body", label: "Body", labelJa: "身体、病気、疲労、睡眠" },
  { id: "work", label: "Work", labelJa: "仕事、原稿、労働" },
  { id: "food", label: "Food", labelJa: "食事、酒、価格" },
  { id: "movement", label: "Movement", labelJa: "移動、距離、交通手段" },
  { id: "media", label: "Media", labelJa: "新聞、テレビ、ラジオ、SNS" },
  { id: "city", label: "City", labelJa: "店、建物、街路、生活圏" },
  { id: "money", label: "Money", labelJa: "支出、収入、物価" },
  {
    id: "public",
    label: "Public events",
    labelJa: "政治、戦争、災害、ニュース",
  },
  {
    id: "private",
    label: "Private events",
    labelJa: "会話、感情、家族、孤独",
  },
];

export const sameDayMatrixColumns = [
  {
    entryId: ENTRY_ID_2011_05_02,
    label: "Kenji Nishimura / Tokyo",
    labelJa: "西村賢太 / 東京",
  },
];

export const sameDayMatrixRows: SameDayMatrixRow[] = [
  {
    id: "mx-writer",
    key: "writer",
    label: "Writer",
    labelJa: "書き手",
    valueByEntryId: { [ENTRY_ID_2011_05_02]: "Kenji Nishimura" },
    verificationStatusByEntryId: { [ENTRY_ID_2011_05_02]: "verified" },
  },
  {
    id: "mx-city",
    key: "city",
    label: "City",
    labelJa: "都市",
    valueByEntryId: { [ENTRY_ID_2011_05_02]: "Tokyo" },
    verificationStatusByEntryId: { [ENTRY_ID_2011_05_02]: "verified" },
  },
  {
    id: "mx-language",
    key: "language",
    label: "Language",
    labelJa: "言語",
    valueByEntryId: { [ENTRY_ID_2011_05_02]: "Japanese" },
    verificationStatusByEntryId: { [ENTRY_ID_2011_05_02]: "verified" },
  },
  {
    id: "mx-weather",
    key: "weather",
    label: "Weather",
    labelJa: "天候",
    valueByEntryId: { [ENTRY_ID_2011_05_02]: "Unknown" },
    verificationStatusByEntryId: { [ENTRY_ID_2011_05_02]: "unknown" },
  },
  {
    id: "mx-body",
    key: "body",
    label: "Body",
    labelJa: "身体",
    valueByEntryId: {
      [ENTRY_ID_2011_05_02]: "Unknown / source-needed",
    },
    verificationStatusByEntryId: { [ENTRY_ID_2011_05_02]: "needs-source" },
  },
  {
    id: "mx-work",
    key: "work",
    label: "Work",
    labelJa: "仕事",
    valueByEntryId: { [ENTRY_ID_2011_05_02]: "Publishing work" },
    verificationStatusByEntryId: { [ENTRY_ID_2011_05_02]: "needs-source" },
  },
  {
    id: "mx-movement",
    key: "movement",
    label: "Movement",
    labelJa: "移動",
    valueByEntryId: { [ENTRY_ID_2011_05_02]: "Shinjuku → Koenji" },
    verificationStatusByEntryId: { [ENTRY_ID_2011_05_02]: "needs-source" },
  },
  {
    id: "mx-food",
    key: "food",
    label: "Food",
    labelJa: "食事",
    valueByEntryId: { [ENTRY_ID_2011_05_02]: "Unknown" },
    verificationStatusByEntryId: { [ENTRY_ID_2011_05_02]: "unknown" },
  },
  {
    id: "mx-money",
    key: "money",
    label: "Money",
    labelJa: "金額",
    valueByEntryId: {
      [ENTRY_ID_2011_05_02]: "Known book purchases only (prices unverified)",
    },
    verificationStatusByEntryId: { [ENTRY_ID_2011_05_02]: "needs-source" },
  },
  {
    id: "mx-media",
    key: "media",
    label: "Media",
    labelJa: "メディア",
    valueByEntryId: {
      [ENTRY_ID_2011_05_02]: "None indexed in this entry",
    },
    verificationStatusByEntryId: { [ENTRY_ID_2011_05_02]: "unknown" },
  },
  {
    id: "mx-places",
    key: "places",
    label: "Places",
    labelJa: "場所",
    valueByEntryId: {
      [ENTRY_ID_2011_05_02]: "Shinchosha / Tomaru Shoten / ShowBoat",
    },
    verificationStatusByEntryId: { [ENTRY_ID_2011_05_02]: "needs-source" },
  },
  {
    id: "mx-themes",
    key: "themes",
    label: "Themes",
    labelJa: "テーマ",
    valueByEntryId: {
      [ENTRY_ID_2011_05_02]: "Publishing / Books / Music / Movement",
    },
    verificationStatusByEntryId: { [ENTRY_ID_2011_05_02]: "verified" },
  },
];

export const dateContext = {
  title: "The date outside the diary",
  titleJa: "日記の外側にあった日付",
  emptyEn: "No verified public-event context has been added yet.",
  emptyJa:
    "この日付の社会的・国際的な出来事は、まだ検証・登録されていません。",
  futureItems: [
    "major public events",
    "weather records",
    "market data",
    "political events",
    "cultural releases",
    "disasters",
    "broadcasts",
  ],
};

export const privatePublicConcept = {
  title: "Private time does not follow the history book.",
  titleJa: "私的な時間は、歴史年表どおりには進まない。",
  paragraphs: [
    "歴史年表には、政治、戦争、選挙、災害が記録される。",
    "しかし個人の日記には、歯痛、酒、待ち合わせ、本の値段、電車、雨、原稿の締切が残る。",
    "同じ日でも、公共の時間と私的な時間は、異なる速度で進んでいる。",
    "Same Dayは、そのずれを並べて読むための仕組みである。",
  ],
};

export const worldStatusMeta = {
  label: "What remains from this day?",
  labelJa: "この日から、何が残っているか",
  date: "2011-05-02",
  note: "As more diaries are added, this breakdown will expand across cities. Not a score.",
  noteJa:
    "別の都市の日記が追加されるたびに、この日の世界は横へ広がる。残存状況を点数化しない。",
};

export const otherYears = {
  title: "May 2 across years",
  titleJa: "別の年の5月2日",
  emptyEn: "No other May 2 entries indexed yet.",
  emptyJa: "現在、別の年の5月2日はまだ索引化されていません。",
  comingStructure: [
    "May 2, 1920",
    "May 2, 1945",
    "May 2, 1974",
    "May 2, 2011",
    "May 2, 2020",
  ],
};

export const potentialDiaries = [
  {
    id: "pot-bukowski",
    label: "Charles Bukowski",
    note: "Not applicable — died in 1994",
    noteJa: "対象外 — 1994年没",
    researchStatus: "not-applicable" as const,
  },
  {
    id: "pot-kafu",
    label: "Kafū Nagai",
    note: "Not applicable — died in 1959",
    noteJa: "対象外 — 1959年没",
    researchStatus: "not-applicable" as const,
  },
  {
    id: "pot-contemporary",
    label: "Contemporary diaries",
    note: "Archive research needed",
    noteJa: "Archive to check / 確認対象のアーカイブ",
    researchStatus: "research-needed" as const,
  },
  {
    id: "pot-blogs",
    label: "Blogs",
    note: "Old Web research needed",
    noteJa: "Archive to check / 確認対象のアーカイブ",
    researchStatus: "research-needed" as const,
  },
  {
    id: "pot-journals",
    label: "Published journals",
    note: "Bibliographic research needed",
    noteJa: "Archive to check / 確認対象のアーカイブ",
    researchStatus: "research-needed" as const,
  },
];

export const howLifeIsAdded = {
  title: "How another life enters this page",
  titleJa: "別の人生を、どう追加するか",
  eyebrow: "Editorial Method",
  steps: [
    {
      n: 1,
      en: "Find a dated primary source",
      ja: "日付が明記された原典を探す",
    },
    {
      n: 2,
      en: "Confirm writer, city, and edition",
      ja: "書き手、都市、版を確認する",
    },
    {
      n: 3,
      en: "Summarize without reproducing long copyrighted text",
      ja: "長文転載を避けて出来事を要約する",
    },
    {
      n: 4,
      en: "Extract people, places, objects, body, work, and media",
      ja: "人、場所、物、身体、仕事、メディアを抽出する",
    },
    {
      n: 5,
      en: "Verify current entity status",
      ja: "現在状況を確認する",
    },
    {
      n: 6,
      en: "Add it to the Same Day matrix",
      ja: "比較表へ追加する",
    },
  ],
};

export const relatedDates = [
  {
    id: "compare-1945-03-10",
    title: "March 10, 1945",
    titleJa: "1945年3月10日",
    cities: "Tokyo",
    status: "coming" as const,
    href: "/compare#compare-1945-03-10",
  },
  {
    id: "compare-1945-08-15",
    title: "August 15, 1945",
    titleJa: "1945年8月15日",
    cities: "Tokyo / London / New York",
    status: "coming" as const,
    href: "/compare#compare-1945-08-15",
  },
  {
    id: "compare-2001-09-11",
    title: "September 11, 2001",
    titleJa: "2001年9月11日",
    cities: "New York / Tokyo / London",
    status: "coming" as const,
    href: "/compare#compare-2001-09-11",
  },
  {
    id: "compare-2020-03",
    title: "March 2020",
    titleJa: "2020年3月",
    cities: "Tokyo / New York / Milan / Wuhan",
    status: "coming" as const,
    href: "/compare#compare-2020-03",
  },
];

export const relatedPages = [
  {
    group: "Writer",
    title: "Kenji Nishimura",
    href: "/writers/kenji-nishimura",
  },
  {
    group: "Entry",
    title: "May 2, 2011",
    href: "/entries/2011-05-02-kenji-nishimura",
  },
  {
    group: "Entity",
    title: "Tomaru Shoten",
    href: "/entities/tomaru-shoten",
  },
  {
    group: "Observation",
    title: "平成の断腸亭日乗",
    href: "/observations/heisei-dancho-tei-nichijo",
  },
  { group: "Entity", title: "Shinchosha", href: "/entities/shinchosha" },
  { group: "Entity", title: "ShowBoat", href: "/entities/showboat" },
  { group: "Same Day index", title: "Same Day", href: "/same-day" },
];

export const sameDaySources: Source[] = [
  {
    id: "src-sd-primary",
    category: "primary",
    status: "primary-unavailable",
    label: "西村賢太の日記（2011年5月2日）",
    note: "Primary diary source — copyright protected. Edition details needed.",
    needed: true,
  },
  {
    id: "src-sd-entry",
    category: "primary",
    status: "verification-pending",
    label: "Entry reconstruction — editorial summary of May 2, 2011",
    note: "Supports: work, movement, bookstore, live house. No long quotation.",
  },
  {
    id: "src-sd-shinchosha",
    category: "verification",
    status: "verified",
    label: "新潮社 公式サイト",
    url: "https://www.shinchosha.co.jp/",
    note: "Entity verification — publisher existing status",
  },
  {
    id: "src-sd-tomaru",
    category: "verification",
    status: "needed",
    label: "都丸書店の現況確認",
    needed: true,
    note: "Entity verification — status remains unknown until sourced",
  },
  {
    id: "src-sd-showboat",
    category: "verification",
    status: "needed",
    label: "ShowBoat の会場同一性と現況",
    needed: true,
  },
  {
    id: "src-sd-context",
    category: "editorial",
    status: "needed",
    label: "Date context — public history sources for 2011-05-02",
    needed: true,
    note: "Not yet added. Do not invent public events.",
  },
];

/** Entity IDs for world-status aggregation on this Same Day (Nishimura entry only). */
export const sameDayEntityIds = [
  "entity-shinchosha",
  "entity-koenji",
  "entity-tomaru",
  "entity-showboat",
  "entity-nishimura-person",
  "entity-tomikawa",
  "entity-editor-unnamed",
];
