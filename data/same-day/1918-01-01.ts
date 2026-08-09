import type {
  RecordSurvival,
  ResearchQueueItem,
  SameDateAcrossYears,
  SameDay,
  SameDayEvidenceSummary,
  SameDayMatrixRow,
  SameDaySlot,
  Source,
  SourceCategory,
  SourceStatus,
} from "@/lib/types";
import { ENTRY_ID_1918_01_01 } from "@/data/entries/1918-01-01-kafu-nagai";

export const SAME_DAY_SLUG_1918_01_01 = "1918-01-01";
export const SAME_DAY_ID_1918_01_01 = "same-day-1918-01-01";

export const sameDay19180101: SameDay = {
  id: SAME_DAY_ID_1918_01_01,
  slug: SAME_DAY_SLUG_1918_01_01,
  date: "1918-01-01",
  title: "January 1, 1918",
  titleJa: "1918年1月1日",
  subtitle: "One New Year’s Day, one indexed life.",
  subtitleJa: "一つの元日、いま索引化されている一人の生活。",
  summary:
    "1918年1月1日に永井荷風が東京で過ごした、部屋が暖まるのを待ち、片づけと掃除をした一日を起点に、同じ元日を生きた別の人生を将来横断比較する。",
  lead: [
    "同じ元日にも、世界では無数の人が別々の一日を生きていた。",
    "祝いの席にいた人。",
    "働いていた人。",
    "戦争を意識していた人。",
    "家族と過ごした人。",
    "一人でいた人。",
    "現在、Diary Observatoryに索引化されているのは、東京で永井荷風が過ごした一日だけである。",
    "部屋が暖まるのを待ち、片づけと掃除をする。",
    "このページは、その一人の記録から始まり、同じ日を生きた別の人生があとから加わるための器である。",
  ],
  entryIds: [ENTRY_ID_1918_01_01],
  writerIds: ["writer-kafu"],
  cityIds: ["entity-tokyo"],
  countries: ["Japan"],
  languages: ["Japanese"],
  themes: [
    "New Year",
    "Domestic Life",
    "Heating",
    "Cleaning",
    "Routine",
    "Body",
    "Private Time",
  ],
  publicContextIds: [],
  sourceIds: [
    "src-sd1918-primary",
    "src-sd1918-editions",
    "src-sd1918-pd",
    "src-sd1918-weather",
    "src-sd1918-domestic",
    "src-sd1918-newyear",
    "src-sd1918-public",
  ],
  comparisonStatus: "open",
  verificationStatus: "partial",
  researchQueueIds: [
    "rq-sd1918-weather",
    "rq-sd1918-heating",
    "rq-sd1918-customs",
    "rq-sd1918-japan-writers",
    "rq-sd1918-intl",
    "rq-sd1918-news",
  ],
  lastUpdated: "2026-08-02",
};

export const sameDay19180101Meta = {
  dateEn: "January 1, 1918",
  dateJa: "1918年1月1日",
  dayOfWeek: "Tuesday",
  indexedLives: 1,
  countries: 1,
  cities: 1,
  languages: 1,
  writers: ["Kafū Nagai"],
  citiesIndexed: ["Tokyo"],
  countriesIndexed: ["Japan"],
  languagesIndexed: ["Japanese"],
  comparisonState: "Open",
  verificationStatus: "Partial",
};

export const indexedLifeCard = {
  entryId: ENTRY_ID_1918_01_01,
  entryHref: "/entries/1918-01-01-kafu-nagai",
  writerName: "Kafū Nagai",
  writerNameJa: "永井荷風",
  writerHref: "/writers/kafu-nagai",
  city: "Tokyo",
  country: "Japan",
  language: "Japanese",
  diaryTitle: "Danchōtei Nichijō",
  diaryTitleJa: "断腸亭日乗",
  diaryHref: "/diaries/dancho-tei-nichijo",
  title: "A New Year’s Day without celebration.",
  titleJa: "祝わない正月。",
  summary:
    "正月を特別に祝わず、室内が暖まるのを待ち、片づけと掃除をして過ごす。",
  themes: [
    "New Year",
    "Domestic Life",
    "Heating",
    "Cleaning",
    "Routine",
    "Body",
    "Private Time",
  ],
  evidenceLevel: "Explicit / Implied / Contextual",
  verificationStatus: "Partial",
  sourceStatus: "Primary text — edition details needed / no long quotation",
  sourceQuality: "Partial provenance",
  provenanceNote:
    "Source quality for Kafū: Partial — diary identified; Edition / Page / SourceCapture missing.",
};

export const tokyoDayFlow = {
  title: "The day in Tokyo",
  titleJa: "東京で過ごされた一日",
  steps: [
    { label: "New Year’s Day", labelJa: "正月" },
    { label: "Cold interior", labelJa: "寒い室内" },
    { label: "Waiting", labelJa: "暖まるのを待つ" },
    { label: "Tidying", labelJa: "片づけ" },
    { label: "Cleaning", labelJa: "掃除" },
    { label: "Ordinary time", labelJa: "日常の時間" },
  ],
  paragraphs: [
    "この流れは、1918年の東京全体を代表するものではない。",
    "永井荷風という一人の人間が、その日の住居と身体の条件の中で過ごした一日である。",
    "Same Dayは、都市を統計や国家史としてではなく、個人が生きた時間として比較する。",
  ],
};

export const publicPrivateConcept = {
  title: "The calendar says New Year. The diary records ordinary life.",
  titleJa: "暦は正月と言う。日記は日常を記す。",
  paragraphs: [
    "一月一日は、社会によって特別な日と定められている。",
    "しかし、個人の身体や住居は、暦に合わせて自動的に変わらない。",
    "寒い。",
    "部屋が暖まらない。",
    "片づける必要がある。",
    "掃除をする。",
    "Same Dayは、公共の暦の内側で、私的な時間が別の速度で流れていることを観測する。",
  ],
};

export const emptySlots: SameDaySlot[] = [
  {
    id: "slot-london",
    sameDayId: SAME_DAY_ID_1918_01_01,
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
    sameDayId: SAME_DAY_ID_1918_01_01,
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
    sameDayId: SAME_DAY_ID_1918_01_01,
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
    id: "slot-berlin",
    sameDayId: SAME_DAY_ID_1918_01_01,
    city: "Berlin",
    cityJa: "ベルリン",
    country: "Germany",
    entryId: null,
    status: "open",
    note: "No indexed diary yet.",
    noteJa: "この日付の日記はまだ登録されていません。",
    researchStatus: "open",
  },
  {
    id: "slot-other-japan",
    sameDayId: SAME_DAY_ID_1918_01_01,
    city: "Other Japan",
    cityJa: "日本の別の場所",
    country: "Japan",
    entryId: null,
    status: "open",
    note: "No indexed diary yet.",
    noteJa: "この日付の日記はまだ登録されていません。",
    researchStatus: "open",
  },
  {
    id: "slot-other",
    sameDayId: SAME_DAY_ID_1918_01_01,
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
  sameDayId: SAME_DAY_ID_1918_01_01,
  city: "Tokyo",
  cityJa: "東京",
  country: "Japan",
  entryId: ENTRY_ID_1918_01_01,
  status: "indexed",
  note: "Kafū Nagai diary day indexed.",
  noteJa: "永井荷風の一日を索引化済み。",
  researchStatus: "indexed",
};

export const sameDayMatrixColumns = [
  {
    entryId: ENTRY_ID_1918_01_01,
    label: "Kafū Nagai / Tokyo",
    labelJa: "永井荷風 / 東京",
  },
];

const E = ENTRY_ID_1918_01_01;

export const sameDayMatrixRows: SameDayMatrixRow[] = [
  {
    id: "mx-writer",
    key: "writer",
    label: "Writer",
    labelJa: "書き手",
    valueByEntryId: { [E]: "Kafū Nagai" },
    verificationStatusByEntryId: { [E]: "verified" },
  },
  {
    id: "mx-diary",
    key: "diary",
    label: "Diary",
    labelJa: "日記",
    valueByEntryId: { [E]: "Danchōtei Nichijō" },
    verificationStatusByEntryId: { [E]: "verified" },
  },
  {
    id: "mx-city",
    key: "city",
    label: "City",
    labelJa: "都市",
    valueByEntryId: { [E]: "Tokyo" },
    verificationStatusByEntryId: { [E]: "verified" },
  },
  {
    id: "mx-country",
    key: "country",
    label: "Country",
    labelJa: "国",
    valueByEntryId: { [E]: "Japan" },
    verificationStatusByEntryId: { [E]: "verified" },
  },
  {
    id: "mx-language",
    key: "language",
    label: "Language",
    labelJa: "言語",
    valueByEntryId: { [E]: "Japanese" },
    verificationStatusByEntryId: { [E]: "verified" },
  },
  {
    id: "mx-public-date",
    key: "public-date",
    label: "Public date",
    labelJa: "公共の暦",
    valueByEntryId: { [E]: "New Year’s Day" },
    verificationStatusByEntryId: { [E]: "verified" },
  },
  {
    id: "mx-weather",
    key: "weather",
    label: "Weather",
    labelJa: "天候",
    valueByEntryId: { [E]: "Not indexed" },
    verificationStatusByEntryId: { [E]: "unknown" },
  },
  {
    id: "mx-indoor",
    key: "indoor",
    label: "Indoor condition",
    labelJa: "室内",
    valueByEntryId: { [E]: "Cold before warming" },
    verificationStatusByEntryId: { [E]: "needs-source" },
  },
  {
    id: "mx-body",
    key: "body",
    label: "Body",
    labelJa: "身体",
    valueByEntryId: { [E]: "Responding to cold" },
    verificationStatusByEntryId: { [E]: "needs-source" },
  },
  {
    id: "mx-work",
    key: "work",
    label: "Work",
    labelJa: "仕事",
    valueByEntryId: { [E]: "Not recorded in indexed summary" },
    verificationStatusByEntryId: { [E]: "unknown" },
  },
  {
    id: "mx-food",
    key: "food",
    label: "Food",
    labelJa: "食事",
    valueByEntryId: { [E]: "Not recorded" },
    verificationStatusByEntryId: { [E]: "unknown" },
  },
  {
    id: "mx-visitors",
    key: "visitors",
    label: "Visitors",
    labelJa: "来客",
    valueByEntryId: { [E]: "Not recorded" },
    verificationStatusByEntryId: { [E]: "unknown" },
  },
  {
    id: "mx-movement",
    key: "movement",
    label: "Movement",
    labelJa: "移動",
    valueByEntryId: { [E]: "No indexed outdoor movement" },
    verificationStatusByEntryId: { [E]: "unknown" },
  },
  {
    id: "mx-domestic",
    key: "domestic",
    label: "Domestic action",
    labelJa: "家事",
    valueByEntryId: { [E]: "Tidying / cleaning" },
    verificationStatusByEntryId: { [E]: "needs-source" },
  },
  {
    id: "mx-tech",
    key: "technology",
    label: "Technology",
    labelJa: "技術",
    valueByEntryId: {
      [E]: "Paper diary / domestic heating source unidentified",
    },
    verificationStatusByEntryId: { [E]: "unknown" },
  },
  {
    id: "mx-themes",
    key: "themes",
    label: "Themes",
    labelJa: "テーマ",
    valueByEntryId: {
      [E]: "New Year / domestic life / routine / body",
    },
    verificationStatusByEntryId: { [E]: "verified" },
  },
  {
    id: "mx-evidence",
    key: "evidence",
    label: "Evidence",
    labelJa: "証拠水準",
    valueByEntryId: {
      [E]: "Explicit / Implied / Contextual",
    },
    verificationStatusByEntryId: { [E]: "needs-source" },
  },
];

export const comparisonAxes = [
  { id: "celebration", label: "Celebration", labelJa: "祝い、儀式、年賀" },
  {
    id: "domestic",
    label: "Domestic life",
    labelJa: "住居、掃除、暖房、家事",
  },
  { id: "food", label: "Food", labelJa: "正月料理、通常食、欠食" },
  { id: "family", label: "Family", labelJa: "家族、来客、一人" },
  { id: "body", label: "Body", labelJa: "寒さ、病気、疲労、睡眠" },
  { id: "work", label: "Work", labelJa: "執筆、労働、休業" },
  { id: "weather", label: "Weather", labelJa: "天候、気温、雪、風" },
  {
    id: "media",
    label: "Media",
    labelJa: "新聞、手紙、ラジオ、テレビ、SNS",
  },
  { id: "movement", label: "Movement", labelJa: "外出、参詣、訪問、移動" },
  {
    id: "public",
    label: "Public events",
    labelJa: "政治、戦争、社会状況",
  },
  {
    id: "private",
    label: "Private mood",
    labelJa: "期待、不安、退屈、孤独",
  },
];

export const sameDateAcrossYearsMeta: SameDateAcrossYears = {
  month: 1,
  day: 1,
  indexedEntryIds: [ENTRY_ID_1918_01_01],
  researchQueueIds: [
    "rq-year-dancho-other",
    "rq-year-roppa",
    "rq-year-wartime",
    "rq-year-postwar",
    "rq-year-digital",
  ],
};

export const january1AcrossYears = {
  title: "January 1 across years",
  titleJa: "別の年の1月1日",
  indexed: [
    {
      date: "January 1, 1918",
      writer: "Kafū Nagai",
      status: "Indexed" as const,
      href: "/entries/1918-01-01-kafu-nagai",
    },
  ],
  otherYearsLabel: {
    en: "Other years — Not indexed",
    ja: "別の年 — 未索引",
  },
  researchQueue: [
    {
      id: "rq-year-dancho-other",
      label: "Another New Year’s Day in Danchōtei Nichijō",
      status: "Archive to check",
      note: "Bibliographic research needed — do not assert a specific dated entry yet.",
    },
    {
      id: "rq-year-roppa",
      label: "Furukawa Roppa’s New Year entries",
      status: "Bibliographic research needed",
      note: "Candidate archive — not an indexed Entry.",
    },
    {
      id: "rq-year-wartime",
      label: "Wartime New Year diaries",
      status: "Archive to check",
      note: "Not yet indexed — no invented writers or dates.",
    },
    {
      id: "rq-year-postwar",
      label: "Postwar New Year diaries",
      status: "Archive to check",
      note: "Not yet indexed.",
    },
    {
      id: "rq-year-digital",
      label: "Contemporary blogs and digital diaries",
      status: "Not yet indexed",
      note: "Archive research needed.",
    },
  ],
};

export const repeatedDateConcept = {
  title: "A date that returns every year",
  titleJa: "毎年戻ってくる日付",
  paragraphs: [
    "一月一日は、同じ日付が毎年繰り返される。",
    "しかし、身体、家族、住居、社会、戦争、仕事、技術は毎年同じではない。",
    "同じ作家の元日を年代順に並べれば、生活の変化が見える。",
    "異なる作家の同じ元日を並べれば、同じ社会の中に存在した複数の生活が見える。",
    "Same Dayは、同じ日付の反復を通して、時間の差を読む。",
  ],
};

export const publicContext = {
  title: "The world outside the diary",
  titleJa: "日記の外側にあった世界",
  items: [
    {
      id: "public-history",
      label: "Public historical context",
      status: "Not yet indexed",
    },
    {
      id: "weather",
      label: "Weather records",
      status: "Research needed",
    },
    {
      id: "national",
      label: "National events",
      status: "Research needed",
    },
    {
      id: "international",
      label: "International events",
      status: "Research needed",
    },
    {
      id: "newspaper",
      label: "Newspaper context",
      status: "Research needed",
    },
  ],
  noteEn: "Private diary time and public history must be verified separately.",
  noteJa:
    "私的な日記の時間と、公共の歴史は、別々に確認する必要がある。",
};

export const evidenceSummary: SameDayEvidenceSummary = {
  sameDayId: SAME_DAY_ID_1918_01_01,
  explicitItems: [
    "正月",
    "特別な行事をしない",
    "室内が暖まるのを待つ",
    "片づけ",
    "掃除",
  ],
  impliedItems: ["暖房または火", "掃除道具"],
  contextualItems: [
    "寒い室内",
    "家事を行う住居空間",
    "暖まるまでの待ち時間",
  ],
  unknownItems: [
    "天候",
    "食事",
    "来客",
    "外出",
    "執筆",
    "暖房器具",
    "掃除道具",
    "具体的な居室",
  ],
};

export const speedOfLifeConcept = {
  title: "A diary preserves the speed of life.",
  titleJa: "日記は、生活の速度を残す。",
  paragraphs: [
    "部屋が暖まるのを待つ。",
    "片づける。",
    "掃除をする。",
    "歴史年表には残らない行動だが、人が一日をどのような速度で生きていたかは、こうした細部の中に残る。",
    "同じ元日でも、暖房、住居、家事、通信、移動の条件が変われば、一日の形も変わる。",
  ],
};

/** Record survival for this Same Day — how the record persists, not Entity status. */
export const sameDayRecordSurvival: RecordSurvival[] = [
  {
    id: "rs-sd-text",
    entryId: ENTRY_ID_1918_01_01,
    label: "Text survives",
    labelJa: "日記本文",
    type: "text-survives",
    description: "Primary diary text survives in editions; not reproduced here.",
    verificationStatus: "partial",
  },
  {
    id: "rs-sd-calendar",
    entryId: ENTRY_ID_1918_01_01,
    label: "Calendar survives",
    labelJa: "一月一日という暦",
    type: "practice-survives",
    description: "The calendar day remains readable as New Year.",
    verificationStatus: "verified",
  },
  {
    id: "rs-sd-practice",
    entryId: ENTRY_ID_1918_01_01,
    label: "Practice survives",
    labelJa: "掃除、片づけ",
    type: "practice-survives",
    description: "Domestic routines remain as recorded practices.",
    verificationStatus: "partial",
  },
  {
    id: "rs-sd-need",
    entryId: ENTRY_ID_1918_01_01,
    label: "Human need survives",
    labelJa: "暖かさを必要とする身体",
    type: "practice-survives",
    description: "The bodily need for warmth remains a living condition.",
    verificationStatus: "partial",
  },
  {
    id: "rs-sd-domestic",
    entryId: ENTRY_ID_1918_01_01,
    label: "Domestic time survives",
    labelJa: "住居を整える時間",
    type: "practice-survives",
    description: "Time spent ordering the house remains in the record.",
    verificationStatus: "partial",
  },
  {
    id: "rs-sd-objects",
    entryId: ENTRY_ID_1918_01_01,
    label: "Objects unknown",
    labelJa: "暖房器具、掃除道具",
    type: "object-unknown",
    description: "Heating appliance and cleaning tools are not identified.",
    verificationStatus: "unverified",
  },
  {
    id: "rs-sd-place",
    entryId: ENTRY_ID_1918_01_01,
    label: "Place unknown",
    labelJa: "具体的な居室",
    type: "place-unknown",
    description: "Exact room identity unknown.",
    verificationStatus: "unverified",
  },
  {
    id: "rs-sd-public",
    entryId: ENTRY_ID_1918_01_01,
    label: "Public context pending",
    labelJa: "社会状況、天候",
    type: "context-research-needed",
    description: "Public history and weather — research pending; not asserted.",
    verificationStatus: "needs-source",
  },
];

export const relatedDates = [
  {
    id: "2011-05-02",
    title: "May 2, 2011",
    titleJa: "2011年5月2日",
    detail: "Tokyo / Kenji Nishimura",
    dateKind: "Ordinary date" as const,
    status: "Indexed" as const,
    href: "/same-day/2011-05-02",
  },
  {
    id: "1945-03-10",
    title: "March 10, 1945",
    titleJa: "1945年3月10日",
    detail: "Tokyo",
    dateKind: "Historical date" as const,
    status: "Coming research" as const,
    href: null,
  },
  {
    id: "1945-08-15",
    title: "August 15, 1945",
    titleJa: "1945年8月15日",
    detail: "Multi-city (planned)",
    dateKind: "Historical date" as const,
    status: "Coming research" as const,
    href: null,
  },
  {
    id: "2001-09-11",
    title: "September 11, 2001",
    titleJa: "2001年9月11日",
    detail: "Crisis period",
    dateKind: "Crisis period" as const,
    status: "Coming research" as const,
    href: null,
  },
  {
    id: "2020-03",
    title: "March 2020",
    titleJa: "2020年3月",
    detail: "Crisis period",
    dateKind: "Crisis period" as const,
    status: "Coming research" as const,
    href: null,
  },
];

export const howLifeIsAdded = {
  title: "How another life enters this page",
  titleJa: "別の人生をどう追加するか",
  steps: [
    {
      step: 1,
      en: "Find a dated primary source",
      ja: "日付が明記された原典を探す",
    },
    {
      step: 2,
      en: "Verify writer, place, and edition",
      ja: "書き手、場所、版を確認する",
    },
    {
      step: 3,
      en: "Summarize without long reproduction",
      ja: "長文転載を避けて要約する",
    },
    {
      step: 4,
      en: "Extract body, place, people, objects, actions, and media",
      ja: "身体、場所、人、物、行動、メディアを抽出する",
    },
    {
      step: 5,
      en: "Assign evidence level (Explicit / Implied / Contextual / Unknown)",
      ja: "証拠水準を付与する",
    },
    {
      step: 6,
      en: "Separate private time from public history",
      ja: "私的時間と公共史を分ける",
    },
    {
      step: 7,
      en: "Add the entry to the comparison matrix",
      ja: "比較表へ追加する",
    },
  ],
};

export const sameDayResearchQueue: Array<
  ResearchQueueItem & { type: string }
> = [
  {
    id: "rq-sd1918-weather",
    diaryId: SAME_DAY_ID_1918_01_01,
    title: "1918年1月1日の東京の天候",
    titleJa: "Historical weather data",
    type: "Historical weather",
    reason: "Attach measured weather only after verifying official records.",
    priority: "high",
    status: "research-needed",
    sourceNeeded: true,
    notes: "Do not invent temperature or sky conditions.",
  },
  {
    id: "rq-sd1918-heating",
    diaryId: SAME_DAY_ID_1918_01_01,
    title: "1918年の住居と暖房",
    titleJa: "Domestic heating history",
    type: "Domestic history",
    reason: "Heating appliance type remains unidentified.",
    priority: "high",
    status: "source-needed",
    sourceNeeded: true,
  },
  {
    id: "rq-sd1918-customs",
    diaryId: SAME_DAY_ID_1918_01_01,
    title: "1918年の正月習慣",
    titleJa: "New Year customs",
    type: "New Year customs",
    reason: "Public calendar context — separate from private diary summary.",
    priority: "medium",
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-sd1918-japan-writers",
    diaryId: SAME_DAY_ID_1918_01_01,
    title: "同日の日本人作家の日記",
    titleJa: "Japanese literary diaries",
    type: "Literary diaries",
    reason: "Archive to check — no invented writers or entries.",
    priority: "medium",
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-sd1918-intl",
    diaryId: SAME_DAY_ID_1918_01_01,
    title: "同日の海外作家の日記",
    titleJa: "International diaries",
    type: "International diaries",
    reason: "Empty city slots await verified dated sources.",
    priority: "medium",
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-sd1918-news",
    diaryId: SAME_DAY_ID_1918_01_01,
    title: "新聞・公共史",
    titleJa: "Newspaper and public-event context",
    type: "Public historical context",
    reason: "Keep public history separate from diary private time.",
    priority: "low",
    status: "research-needed",
    sourceNeeded: true,
  },
];

export const relatedPages = [
  {
    group: "Entry",
    title: "January 1, 1918 — Kafū Nagai",
    href: "/entries/1918-01-01-kafu-nagai",
  },
  {
    group: "Writer",
    title: "Kafū Nagai",
    href: "/writers/kafu-nagai",
  },
  {
    group: "Diary",
    title: "Danchōtei Nichijō",
    href: "/diaries/dancho-tei-nichijo",
  },
  {
    group: "Comparison",
    title: "From Kafū to Nishimura",
    href: "/compare/kafu-nishimura",
  },
  { group: "Same Day index", title: "Same Day", href: "/same-day" },
  {
    group: "Related Same Day",
    title: "May 2, 2011",
    href: "/same-day/2011-05-02",
  },
];

export type SameDaySourceItem = Source & {
  title?: string;
  author?: string;
  publisher?: string;
  date?: string;
  accessedAt?: string;
  supports?: string;
  sourceType?: string;
  copyrightNote?: string;
};

export const sameDaySources: SameDaySourceItem[] = [
  {
    id: "src-sd1918-primary",
    label: "永井荷風『断腸亭日乗』1918年1月1日",
    title: "断腸亭日乗（1918年1月1日）",
    author: "永井荷風",
    category: "primary" as SourceCategory,
    status: "verification-pending" as SourceStatus,
    sourceType: "Primary diary source",
    supports: "Indexed life summary; domestic actions; New Year without ceremony",
    needed: true,
    note: "Edition bibliography needed. No long quotation.",
    copyrightNote:
      "Work rights and modern edition rights are separate.",
  },
  {
    id: "src-sd1918-editions",
    label: "Modern edited / annotated editions",
    category: "primary" as SourceCategory,
    status: "needed" as SourceStatus,
    sourceType: "Modern editions",
    supports: "Readable text for indexing after imprint confirmation",
    needed: true,
    note: "Edition details needed — Source verification pending",
  },
  {
    id: "src-sd1918-pd",
    label: "Public-domain / authorized digital text",
    category: "primary" as SourceCategory,
    status: "needed" as SourceStatus,
    sourceType: "Public-domain source",
    supports: "Legal text access — jurisdiction-specific",
    needed: true,
    note: "Do not invent URLs. Verify public-domain status per edition.",
  },
  {
    id: "src-sd1918-weather",
    label: "Historical meteorological records for Tokyo, 1918-01-01",
    category: "verification" as SourceCategory,
    status: "needed" as SourceStatus,
    sourceType: "Historical weather",
    supports: "Measured weather layer only — never conflated with diary wording",
    needed: true,
    note: "Research needed before any temperature claim.",
  },
  {
    id: "src-sd1918-domestic",
    label: "Domestic history — housing, heating, housework c. 1918",
    category: "verification" as SourceCategory,
    status: "needed" as SourceStatus,
    sourceType: "Domestic history",
    supports: "Context for waiting-for-warmth; appliance type remains unknown",
    needed: true,
  },
  {
    id: "src-sd1918-newyear",
    label: "New Year customs in Taishō Japan",
    category: "verification" as SourceCategory,
    status: "needed" as SourceStatus,
    sourceType: "New Year customs",
    supports: "Public calendar layer — separate from private diary day",
    needed: true,
  },
  {
    id: "src-sd1918-public",
    label: "Newspaper / public historical context for 1918-01-01",
    category: "editorial" as SourceCategory,
    status: "needed" as SourceStatus,
    sourceType: "Public historical context",
    supports: "Outside-the-diary world — not yet indexed",
    needed: true,
    note: "Do not invent public events for this page.",
  },
];
