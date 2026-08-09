import type {
  DiaryThemeIndex,
  DiaryWork,
  DiaryYear,
  EpistemicKind,
  ResearchQueueItem,
  Source,
  SourceCategory,
  SourceStatus,
} from "@/lib/types";

export const DANCHO_DIARY_ID = "diary-kafu-dancho";
export const DANCHO_DIARY_SLUG = "dancho-tei-nichijo";

/** Fully observatory-indexed entries only — scaffolds stay in research queue. */
export const DANCHO_INDEXED_ENTRY_IDS = ["entry-1918-01-01"] as const;

export const DANCHO_ENTITY_IDS = [
  "entity-tokyo",
  "entity-azabu",
  "entity-ginza",
  "entity-asakusa",
  "entity-mukojima",
  "entity-ichikawa",
  "entity-dancho-tei",
  "entity-asamoya",
] as const;

export const danchoTeiNichijo: DiaryWork = {
  id: DANCHO_DIARY_ID,
  slug: DANCHO_DIARY_SLUG,
  writerId: "writer-kafu",
  title: "Danchōtei Nichijō",
  titleOriginal: "断腸亭日乗",
  romanizedTitle: "Danchōtei Nichijō",
  startYear: 1917,
  endYear: 1959,
  durationLabel: "42 years",
  genre: "diary",
  language: "ja",
  publicationStatus: "published",
  primaryCity: "Tokyo",
  themes: [
    "Weather",
    "Walking",
    "Garden",
    "Body",
    "Publishing",
    "Food",
    "War",
    "Urban Change",
    "Old Tokyo",
    "Repetition",
  ],
  tagline:
    "Forty-two years of ordinary days, through which Tokyo repeatedly disappeared.",
  taglineJa: "四十二年の日常の中で、東京は何度も姿を変えた。",
  description:
    "A long diary recording weather, walks, garden, meals, publishing, friendships, the body, Tokyo, and war across decades.",
  descriptionJa:
    "天候、散歩、庭、食事、出版、交友、身体、東京、戦争を長期間にわたり記録した日記。",
  summary:
    "『断腸亭日乗』には、歴史的事件だけでなく、晴雨、寒暖、庭木、歯痛、散歩、食事、来客、原稿、出版社、街、戦争が記録されている。",
  longSummary: [
    "『断腸亭日乗』には、歴史的事件だけでなく、晴雨、寒暖、庭木、歯痛、散歩、食事、来客、原稿、出版社、街、戦争が記録されている。",
    "日記は一日ごとには小さい。",
    "しかし、四十二年分を重ねると、一人の身体の老いと、東京の変化が同時に見えてくる。",
  ],
  entryIds: [...DANCHO_INDEXED_ENTRY_IDS],
  entityIds: [...DANCHO_ENTITY_IDS],
  observationIds: ["obs-heisei-dancho"],
  comparisonIds: ["compare-kafu-nishimura"],
  indexedYears: [1918],
  researchQueueIds: ["rq-1945-03-10", "rq-1945-08-15", "rq-new-years"],
  entryCount: null,
  entryCountVerification: "needs-source",
  sourceAvailability:
    "Edition bibliography and public-domain text links — source verification pending. Do not invent imprint URLs.",
  copyrightNote:
    "Public-domain status must be verified per edition and jurisdiction. Modern annotated editions remain under separate rights. Long quotations are not reproduced.",
  editionIds: [],
  indexingStatus: "in-progress",
  verificationStatus: "partial",
  lastUpdated: "2026-08-02",
  sources: [],
};

export const danchoDiaryCard = {
  title: "断腸亭日乗",
  titleEn: "Danchōtei Nichijō",
  type: "Diary / Daily record",
  periodLabel: "1917–1959",
  language: "Japanese",
  description:
    "天候、散歩、庭、食事、出版、交友、身体、東京、戦争を長期間にわたり記録した日記。",
  statusLabel: "Primary source",
  verificationLabel: "Edition details needed",
  copyrightNote:
    "Public-domain status must be verified per edition and jurisdiction.",
  href: `/diaries/${DANCHO_DIARY_SLUG}`,
};

export const danchoLead = [
  "『断腸亭日乗』には、歴史的事件だけでなく、晴雨、寒暖、庭木、歯痛、散歩、食事、来客、原稿、出版社、街、戦争が記録されている。",
  "日記は一日ごとには小さい。",
  "しかし、四十二年分を重ねると、一人の身体の老いと、東京の変化が同時に見えてくる。",
];

export const danchoMetadata = [
  { label: "Author", value: "Kafū Nagai" },
  { label: "Start year", value: "1917" },
  { label: "End year", value: "1959" },
  { label: "Duration", value: "42 years" },
  { label: "Language", value: "Japanese" },
  { label: "Primary city", value: "Tokyo" },
  { label: "Diary status", value: "Complete historical record" },
  { label: "Indexing status", value: "In progress" },
  { label: "Verification status", value: "Partial" },
  { label: "Last updated", value: "2026-08-02" },
] as const;

/** Theme cards — filters wire to ?theme= */
export const danchoThemeCards = [
  {
    id: "weather",
    label: "Weather",
    labelJa: "天候、寒暖、風、雨、雪、光",
  },
  {
    id: "garden",
    label: "Garden",
    labelJa: "庭木、花、落葉、鳥、季節",
  },
  {
    id: "walking",
    label: "Walking",
    labelJa: "散歩、街路、橋、駅、寺社",
  },
  {
    id: "body",
    label: "Body",
    labelJa: "歯痛、疲労、老い、睡眠、食欲",
  },
  {
    id: "food",
    label: "Food & Drink",
    labelJa: "食事、酒、菓子、外食",
  },
  {
    id: "publishing",
    label: "Publishing",
    labelJa: "原稿、出版社、書店、編集者",
  },
  {
    id: "people",
    label: "People",
    labelJa: "来客、知人、作家、芸術家",
  },
  {
    id: "city",
    label: "City",
    labelJa: "店、建物、歓楽街、街路",
  },
  {
    id: "war",
    label: "War",
    labelJa: "統制、空襲、焼失、敗戦",
  },
  {
    id: "time",
    label: "Time",
    labelJa: "反復、季節、習慣、待ち時間",
  },
] as const;

/** Map query theme → entry theme keywords (case-insensitive match). */
export const DANCHO_THEME_MATCH: Record<string, string[]> = {
  weather: ["Weather", "Heating"],
  garden: ["Garden"],
  walking: ["Walking"],
  body: ["Body"],
  food: ["Food", "Drink"],
  publishing: ["Publishing"],
  people: ["People", "Visitor"],
  city: ["City", "Tokyo", "Urban Change", "Early Taishō Tokyo"],
  war: ["War"],
  time: ["Routine", "New Year", "Repetition"],
};

export const danchoDecadeTimeline = [
  {
    id: "1917-1919",
    label: "1917–1919",
    title: "日記の開始",
    text: "大正期の生活、東京、出版、庭、身体 — 日記開始期として確認。詳細はEntry単位で補充。",
    note: "1918-01-01 indexed. Other opening-year days: Archive research needed.",
    verificationStatus: "partial" as const,
  },
  {
    id: "1920s",
    label: "1920s",
    title: "散歩、都市生活、出版、人間関係",
    text: "震災後の変化は、確認済み資料と日記本文が接続できる場合のみ表示する。",
    note: "Archive research needed / Source needed",
    verificationStatus: "needs-source" as const,
  },
  {
    id: "1930s",
    label: "1930s",
    title: "街歩き、文化環境、歓楽街、社会変化",
    text: "一般史の要約だけでは年代説明を置かない。Entry接続待ち。",
    note: "Source needed",
    verificationStatus: "needs-source" as const,
  },
  {
    id: "1940-1944",
    label: "1940–1944",
    title: "戦時統制が日常へ入る",
    text: "統制が生活条件へ変わる過程は、日記Entry確認後に索引化する。",
    note: "Archive research needed",
    verificationStatus: "needs-source" as const,
  },
  {
    id: "1945",
    label: "1945",
    title: "空襲、焼失、敗戦",
    text: "具体的内容はEntryと出典確認後に表示する。",
    note: "Research queue: 1945-03-10, 1945-08-15",
    verificationStatus: "needs-source" as const,
  },
  {
    id: "1946-1949",
    label: "1946–1949",
    title: "戦後の生活と都市の再編",
    text: "戦後再編の記述は、日記本文の確認後に接続する。",
    note: "Source needed",
    verificationStatus: "needs-source" as const,
  },
  {
    id: "1950s",
    label: "1950s",
    title: "戦後東京、老い、身体、生活の変化",
    text: "晩年の身体と都市は、年代横断索引の対象。現時点は未索引。",
    note: "Archive research needed",
    verificationStatus: "needs-source" as const,
  },
  {
    id: "1959",
    label: "1959",
    title: "日記の終わり",
    text: "終了年として確認。最終日次の詳細は出典確認後。",
    note: "Source needed for closing-day detail",
    verificationStatus: "partial" as const,
  },
];

export const danchoIndexedEntryCard = {
  id: "entry-1918-01-01",
  dateLabel: "January 1, 1918",
  dateLabelJa: "1918年1月1日",
  summary:
    "正月を特別に祝わず、室内が暖まるのを待ち、片づけと掃除をする。",
  themes: [
    "New Year",
    "Domestic Life",
    "Heating",
    "Cleaning",
    "Routine",
    "Body",
  ],
  verification: "Partial provenance",
  factCount: 5,
  unknownCount: 12,
  badge: "Indexed day — bibliographic trail incomplete",
  href: "/entries/1918-01-01-kafu-nagai",
};

export const danchoResearchQueue: ResearchQueueItem[] = [
  {
    id: "rq-1945-03-10",
    diaryId: DANCHO_DIARY_ID,
    date: "1945-03-10",
    title: "March 10, 1945 — Tokyo air raid",
    titleJa: "1945年3月10日 — 東京大空襲",
    reason: "Primary text location and edition check required before summary.",
    priority: "high",
    status: "research-needed",
    sourceNeeded: true,
    notes: "Do not assert content before text confirmation.",
  },
  {
    id: "rq-1945-08-15",
    diaryId: DANCHO_DIARY_ID,
    date: "1945-08-15",
    title: "August 15, 1945 — End of war",
    titleJa: "1945年8月15日 — 敗戦の日",
    reason: "Cross-city and diary-text verification pending.",
    priority: "high",
    status: "research-needed",
    sourceNeeded: true,
  },
  {
    id: "rq-new-years",
    diaryId: DANCHO_DIARY_ID,
    title: "Other New Year’s Days — Cross-year comparison",
    titleJa: "他の正月 — 年横断比較",
    reason: "Compare January 1 across years once more New Year entries are indexed.",
    priority: "medium",
    status: "queued",
    sourceNeeded: true,
  },
];

export const danchoRepetitionCopy = {
  title: "Repetition as structure",
  titleJa: "反復がつくる構造",
  kind: "observation" as EpistemicKind,
  paragraphs: [
    "長い日記では、一日ごとの出来事より、繰り返される行動が重要になる。",
    "天候を見る。",
    "庭を見る。",
    "散歩する。",
    "原稿を書く。",
    "食事をする。",
    "身体の不調を記す。",
    "同じ行動が繰り返されることで、わずかな変化が見える。",
    "歩く距離が短くなる。",
    "知人が減る。",
    "街が変わる。",
    "店が消える。",
    "戦争が生活へ入る。",
    "日記は、大事件だけでなく、反復の崩れを記録する。",
  ],
};

export const danchoRepetitionAxes = [
  { id: "weather", label: "Weather recorded", labelJa: "天候" },
  { id: "walk", label: "Walk recorded", labelJa: "散歩" },
  { id: "garden", label: "Garden observed", labelJa: "庭" },
  { id: "writing", label: "Writing or publishing", labelJa: "執筆・出版" },
  { id: "visitors", label: "Visitors", labelJa: "来客" },
  { id: "food", label: "Food or drink", labelJa: "食事・酒" },
  { id: "pain", label: "Pain or illness", labelJa: "痛み・病気" },
  { id: "war", label: "War-related context", labelJa: "戦争" },
] as const;

export const danchoWeatherArchive = {
  title: "Weather archive",
  titleJa: "天候の記録",
  paragraphs: [
    "荷風の日記では、天候が背景ではなく、行動を決める条件として繰り返し現れる。",
    "晴雨。",
    "寒暖。",
    "風。",
    "光。",
    "庭木。",
    "外出できるか。",
    "身体が動くか。",
    "索引化によって、日記の主観的な天候と、公的な気象記録を将来比較できる。",
  ],
  layers: [
    { id: "subjective", label: "Subjective weather", labelJa: "日記本文の表現" },
    { id: "measured", label: "Measured weather", labelJa: "気象観測データ" },
    { id: "body", label: "Body response", labelJa: "身体の反応" },
    { id: "action", label: "Action", labelJa: "散歩、外出、室内" },
  ],
  statusEn: "No aggregated weather data yet.",
  statusJa: "天候データは現在索引化中。",
  caution:
    "日記の寒さと公的気温を混同しない。Subjective weather ≠ Measured weather.",
};

export const danchoBodyArchive = {
  title: "The body across decades",
  titleJa: "四十二年間の身体",
  paragraphs: [
    "同じ都市を見ていても、見る身体は同じではない。",
    "若い身体。",
    "歯が痛む身体。",
    "疲れた身体。",
    "老いた身体。",
    "外出できる身体。",
    "家にとどまる身体。",
    "長期日記では、都市の変化と同時に、観測者の身体の変化を追うことができる。",
  ],
  axes: [
    { id: "pain", label: "Pain", labelJa: "痛み" },
    { id: "sleep", label: "Sleep", labelJa: "睡眠" },
    { id: "appetite", label: "Appetite", labelJa: "食欲" },
    { id: "walking", label: "Walking", labelJa: "歩行" },
    { id: "fatigue", label: "Fatigue", labelJa: "疲労" },
    { id: "medical", label: "Medical care", labelJa: "診療、薬" },
    { id: "aging", label: "Aging", labelJa: "老い" },
  ],
  statusEn: "Body indexing in progress",
  statusJa: "身体の索引化は進行中",
};

export const danchoUrbanLayers = [
  {
    id: "taisho",
    label: "Taishō Tokyo",
    text: "大正期の東京",
    note: "Connected to diary opening years — entry detail pending beyond 1918-01-01.",
    verificationStatus: "partial",
  },
  {
    id: "prewar-showa",
    label: "Prewar Shōwa",
    text: "戦前昭和",
    note: "Source needed — do not fill from general history alone.",
    verificationStatus: "needs-source",
  },
  {
    id: "wartime",
    label: "Wartime Tokyo",
    text: "戦時下の東京",
    note: "Archive research needed for control / blackout / mobility entries.",
    verificationStatus: "needs-source",
  },
  {
    id: "burned",
    label: "Burned Tokyo",
    text: "焼けた東京",
    note: "1945 air-raid days in research queue — no content asserted yet.",
    verificationStatus: "needs-source",
  },
  {
    id: "postwar",
    label: "Postwar Tokyo",
    text: "戦後の東京",
    note: "Source needed",
    verificationStatus: "needs-source",
  },
  {
    id: "1950s",
    label: "1950s Tokyo",
    text: "復興期の東京",
    note: "Late diary years — body and city change; details source-needed.",
    verificationStatus: "needs-source",
  },
];

export const danchoUrbanCopy = {
  title: "Tokyo as layers",
  titleJa: "層として残る東京",
  paragraphs: [
    "『断腸亭日乗』の東京は、一つの固定された都市ではない。",
    "建物が建つ。",
    "店が開く。",
    "街路が変わる。",
    "戦争で焼ける。",
    "再建される。",
    "地名だけが残る。",
    "同じ場所が、年代ごとに別の都市として現れる。",
  ],
};

export const danchoPlaces = [
  {
    id: "entity-tokyo",
    name: "Tokyo",
    nameJa: "東京",
    type: "City",
    relationship: "Primary city of the diary’s geography",
    period: "1917–1959",
    currentStatusNote: "Administrative / urban field persists",
    verificationStatus: "verified" as const,
    coming: false,
    href: "/entities/tokyo",
  },
  {
    id: "entity-azabu",
    name: "Azabu",
    nameJa: "麻布",
    type: "District",
    relationship: "Lived / recorded geography",
    period: "Diary period — details source-needed",
    currentStatusNote: "District persists; shop-level survival separate",
    verificationStatus: "needs-source" as const,
    coming: false,
    href: "/entities/azabu",
  },
  {
    id: "entity-ginza",
    name: "Ginza",
    nameJa: "銀座",
    type: "District",
    relationship: "Urban walking / cultural geography",
    period: "Diary appearances — source-needed per entry",
    currentStatusNote: "District exists; venues unverified here",
    verificationStatus: "needs-source" as const,
    coming: false,
    href: "/entities/ginza",
  },
  {
    id: "entity-asakusa",
    name: "Asakusa",
    nameJa: "浅草",
    type: "District",
    relationship: "Downtown / pleasure geography in diary",
    period: "Diary period",
    currentStatusNote: "Transformed urban tissue",
    verificationStatus: "needs-source" as const,
    coming: false,
    href: "/entities/asakusa",
  },
  {
    id: "entity-mukojima",
    name: "Mukojima",
    nameJa: "向島",
    type: "District",
    relationship: "Diary geography — linkage density pending",
    period: "Diary appearances — source-needed",
    currentStatusNote: "Place-name verified as Tokyo district",
    verificationStatus: "needs-source" as const,
    coming: false,
    href: "/entities/mukojima",
  },
  {
    id: "entity-ichikawa",
    name: "Ichikawa",
    nameJa: "市川",
    type: "City",
    relationship: "Residence / living geography (details source-needed)",
    period: "Source-needed for exact years",
    currentStatusNote: "Administrative place exists",
    verificationStatus: "needs-source" as const,
    coming: false,
    href: "/entities/ichikawa",
  },
  {
    id: "entity-dancho-tei",
    name: "Danchōtei",
    nameJa: "断腸亭",
    type: "Place / residence or diary-title context",
    relationship: "Title / residence context — details needed",
    period: "Confirm against editions",
    currentStatusNote: "詳細確認が必要",
    verificationStatus: "needs-source" as const,
    coming: false,
    href: "/entities/dancho-tei",
  },
];

export const danchoPeopleCategories = [
  { id: "family", label: "Family", labelJa: "家族" },
  { id: "writers", label: "Writers", labelJa: "作家" },
  { id: "publishers", label: "Publishers", labelJa: "出版社関係者" },
  { id: "artists", label: "Artists", labelJa: "芸術家" },
  { id: "visitors", label: "Visitors", labelJa: "来客" },
  { id: "doctors", label: "Doctors", labelJa: "医師" },
  { id: "neighbors", label: "Neighbors", labelJa: "近隣" },
  { id: "unknown", label: "Unknown identities", labelJa: "未特定人物" },
] as const;

export const danchoWarCopy = {
  title: "War as daily change",
  titleJa: "日常の変化としての戦争",
  paragraphs: [
    "戦争は、日記の中へ一度に完成した歴史として現れない。",
    "物資が減る。",
    "移動が難しくなる。",
    "店が閉じる。",
    "街が暗くなる。",
    "知人の消息が分からなくなる。",
    "建物が焼ける。",
    "日記は、戦争が日常の条件へ変わっていく過程を残す。",
  ],
  phases: [
    { id: "before", label: "Before war", labelJa: "戦前の日常" },
    { id: "during", label: "During war", labelJa: "統制下の生活" },
    { id: "raids", label: "Air raids", labelJa: "空襲" },
    { id: "destruction", label: "Destruction", labelJa: "焼失" },
    { id: "defeat", label: "Defeat", labelJa: "敗戦" },
    { id: "aftermath", label: "Aftermath", labelJa: "戦後" },
  ],
};

export const danchoSurvivalCopy = {
  title: "What survived the diary’s time?",
  titleJa: "日記の時間から、何が残ったか",
  paragraphs: [
    "都市は、残るか消えるかの二択ではない。",
    "同じ名前で残る。",
    "形を変えて残る。",
    "再建される。",
    "記録の中だけに残る。",
    "Diary Observatoryは、こうした異なる残り方を区別する。",
  ],
  categories: [
    { id: "text", label: "Text survives", labelJa: "日記本文" },
    { id: "place-name", label: "Place name survives", labelJa: "地名" },
    { id: "building", label: "Building survives", labelJa: "建物" },
    { id: "rebuilt", label: "Rebuilt", labelJa: "再建" },
    { id: "renamed", label: "Renamed", labelJa: "改名" },
    { id: "transformed", label: "Transformed", labelJa: "地域変容" },
    { id: "destroyed", label: "Destroyed", labelJa: "焼失" },
    { id: "practice", label: "Practice survives", labelJa: "散歩、掃除、食事、日記" },
    { id: "unknown", label: "Unknown", labelJa: "確認不能" },
  ],
};

export const danchoSameDayLinks = [
  {
    id: "1918-01-01",
    kind: "same-day" as const,
    label: "January 1, 1918",
    status: "Open comparison · 1 indexed life",
    href: "/same-day/1918-01-01",
  },
  {
    id: "2011-05-02",
    kind: "related-date" as const,
    label: "May 2, 2011 — Kenji Nishimura",
    status: "Related comparison",
    href: "/same-day/2011-05-02",
  },
  {
    id: "jan1-years",
    kind: "future" as const,
    label: "January 1 across years",
    status: "Coming comparison",
    href: null,
  },
  {
    id: "1945-03-10",
    kind: "research" as const,
    label: "March 10, 1945",
    status: "Coming research",
    href: null,
  },
  {
    id: "1945-08-15",
    kind: "research" as const,
    label: "August 15, 1945",
    status: "Coming research",
    href: null,
  },
];

export const danchoComparison = {
  title: "From Kafū to Nishimura",
  titleJa: "荷風から西村へ",
  left: {
    title: "Danchōtei Nichijō",
    period: "1917–1959",
  },
  right: {
    title: "Kenji Nishimura’s diary",
    period: "Late-Heisei Tokyo",
  },
  axes: [
    {
      id: "duration",
      label: "Duration",
      left: "42 years",
      right: "shorter indexed period",
    },
    {
      id: "condition",
      label: "Primary condition",
      left: "Weather",
      right: "media",
    },
    {
      id: "movement",
      label: "Movement",
      left: "Walking",
      right: "urban cultural route",
    },
    {
      id: "publishing",
      label: "Publishing",
      left: "Print culture",
      right: "publishing + television",
    },
    {
      id: "loss",
      label: "Urban loss",
      left: "War and reconstruction",
      right: "closures and fragmentation",
    },
    {
      id: "body",
      label: "Body",
      left: "Aging over decades",
      right: "alcohol, fatigue, illness",
    },
  ],
  href: "/compare/kafu-nishimura",
};

export const danchoEditions = [
  {
    id: "original",
    label: "Original diary",
    labelJa: "原日記",
    note: "Edition details needed / Source verification pending",
  },
  {
    id: "pd",
    label: "Public-domain text",
    labelJa: "正規公開本文",
    note: "Public-domain status must be verified per jurisdiction — no invented URL.",
  },
  {
    id: "modern",
    label: "Modern edited editions",
    labelJa: "現代の校訂版",
    note: "Edition details needed — editorial copyright separate from the work.",
  },
  {
    id: "selections",
    label: "Selections",
    labelJa: "抄録版",
    note: "Edition details needed",
  },
  {
    id: "digital",
    label: "Digital text",
    labelJa: "電子版",
    note: "Source verification pending",
  },
];

export const danchoEditorialSteps = [
  {
    step: 1,
    en: "Confirm the date and primary text",
    ja: "日付と原文を確認する",
  },
  {
    step: 2,
    en: "Summarize without long reproduction",
    ja: "長文転載を避けて要約する",
  },
  {
    step: 3,
    en: "Extract people, places, objects, body, weather, and actions",
    ja: "人、場所、物、身体、天候、行動を抽出する",
  },
  {
    step: 4,
    en: "Assign evidence level (Explicit / Implied / Contextual / Unknown)",
    ja: "証拠水準を付与する",
  },
  {
    step: 5,
    en: "Verify present-day entity status",
    ja: "現在状況を確認する",
  },
  {
    step: 6,
    en: "Connect the entry to year, theme, writer, entity, and Same Day",
    ja: "年、テーマ、作家、Entity、Same Dayへ接続する",
  },
  {
    step: 7,
    en: "Revise interpretation as more entries are indexed",
    ja: "記録が増えるたびに解釈を更新する",
  },
];

export const danchoRelatedObservations = {
  published: [
    {
      title: "平成の断腸亭日乗",
      subtitle: "西村賢太の日記に残る、消えていく東京",
      href: "/observations/heisei-dancho-tei-nichijo",
    },
  ],
  coming: [
    "東京は、日記の中で何度も消える",
    "天候という記録",
    "戦争が日常へ入ってくるとき",
    "日記は、生活の速度を残す",
  ],
};

export type DiarySourceItem = Source & {
  title?: string;
  author?: string;
  publisher?: string;
  date?: string;
  accessedAt?: string;
  supports?: string;
  sourceType?: string;
  copyrightNote?: string;
};

export const danchoSources: DiarySourceItem[] = [
  {
    id: "src-dancho-primary",
    label: "永井荷風『断腸亭日乗』",
    title: "断腸亭日乗",
    author: "永井荷風",
    category: "primary" as SourceCategory,
    status: "verification-pending" as SourceStatus,
    sourceType: "Primary text",
    supports: "Work identity, period 1917–1959, diary genre",
    needed: true,
    note: "Edition bibliography (publisher, volumes, year) — details needed. Do not invent imprint data or URLs.",
    copyrightNote:
      "Work rights and modern edition rights are separate. Long quotations avoided.",
  },
  {
    id: "src-dancho-modern-editions",
    label: "Modern edited / annotated editions",
    category: "primary" as SourceCategory,
    status: "needed" as SourceStatus,
    sourceType: "Modern editions",
    supports: "Readable text for indexing — after imprint confirmation",
    needed: true,
    note: "Edition details needed / Source verification pending",
  },
  {
    id: "src-dancho-biography",
    label: "Biographical sources for Kafū Nagai",
    category: "verification" as SourceCategory,
    status: "needed" as SourceStatus,
    sourceType: "Biographical sources",
    supports: "Writer chronology; not a substitute for diary text",
    needed: true,
    note: "Source needed — no invented titles.",
  },
  {
    id: "src-dancho-place",
    label: "Place verification (buildings, addresses, districts, streets)",
    category: "verification" as SourceCategory,
    status: "verification-pending" as SourceStatus,
    sourceType: "Place verification",
    supports: "Entity current status; district vs shop-level distinction",
    needed: true,
    note: "Tokyo place-name layer partially verified; shop-level pending.",
  },
  {
    id: "src-dancho-weather",
    label: "Historical meteorological records",
    category: "verification" as SourceCategory,
    status: "needed" as SourceStatus,
    sourceType: "Weather",
    supports: "Measured weather layer — never conflated with diary wording",
    needed: true,
    note: "Source needed before any temperature comparison.",
  },
  {
    id: "src-dancho-war-urban",
    label: "War and urban history (air raids, damage, reconstruction)",
    category: "verification" as SourceCategory,
    status: "needed" as SourceStatus,
    sourceType: "War and urban history",
    supports: "Context for 1945 research queue — not diary paraphrase",
    needed: true,
    note: "Source needed; do not invent raid narratives for this page.",
  },
  {
    id: "src-dancho-editorial",
    label: "Editorial references (Kafū studies, diary literature, Tokyo criticism)",
    category: "editorial" as SourceCategory,
    status: "needed" as SourceStatus,
    sourceType: "Editorial references",
    supports: "Interpretation framing; marked as Observation / Interpretation",
    needed: true,
    note: "Source needed — bibliography to be added when confirmed.",
  },
];

danchoTeiNichijo.sources = danchoSources;

/** Theme index rows derived for structure; counts filled at render from entries. */
export function buildDanchoThemeIndexes(
  entryThemeMap: Map<string, string[]>,
): DiaryThemeIndex[] {
  return danchoThemeCards.map((card) => {
    const keywords = DANCHO_THEME_MATCH[card.id] ?? [card.label];
    const entryIds: string[] = [];
    let first: string | null = null;
    let last: string | null = null;
    for (const [entryId, themes] of entryThemeMap) {
      const hit = themes.some((t) =>
        keywords.some((k) => t.toLowerCase().includes(k.toLowerCase())),
      );
      if (hit) {
        entryIds.push(entryId);
        const date = entryId.replace("entry-", "");
        if (!first || date < first) first = date;
        if (!last || date > last) last = date;
      }
    }
    return {
      id: `theme-${card.id}`,
      diaryId: DANCHO_DIARY_ID,
      theme: card.id,
      label: card.label,
      labelJa: card.labelJa,
      entryIds,
      indexedCount: entryIds.length,
      firstIndexedDate: first,
      lastIndexedDate: last,
      status: entryIds.length > 0 ? "indexed" : "in-progress",
    };
  });
}

export function buildDanchoYearGrid(
  startYear: number,
  endYear: number,
  indexedByYear: Map<number, string[]>,
  researchYears: Set<number>,
): DiaryYear[] {
  const years: DiaryYear[] = [];
  for (let y = startYear; y <= endYear; y++) {
    const entryIds = indexedByYear.get(y) ?? [];
    let researchStatus: DiaryYear["researchStatus"] = "not-indexed";
    if (entryIds.length > 0) researchStatus = "indexed";
    else if (researchYears.has(y)) researchStatus = "research-queued";
    years.push({
      id: `year-${y}`,
      diaryId: DANCHO_DIARY_ID,
      year: y,
      entryIds,
      indexedCount: entryIds.length,
      researchStatus,
      verificationStatus: entryIds.length > 0 ? "partial" : "needs-source",
    });
  }
  return years;
}
