import type {
  AudienceRecord,
  BodyRecord,
  ChronologyItem,
  EntertainmentLaborProfile,
  EpistemicKind,
  PerformanceRecord,
  PopularityRecord,
  Source,
  WriterResearchQueueItem,
} from "@/lib/types";
import {
  ROPPA_DIARY_ID,
  ROPPA_DIARY_SLUG,
  roppaDiaryVolumes,
} from "@/data/diaries/furukawa-roppa-showa-diary";

export const ROPPA_SLUG = "furukawa-roppa";
export const ROPPA_WRITER_ID = "writer-roppa";

export const roppaLead = [
  "古川ロッパの日記には、",
  "舞台の表側と裏側が同時に残っている。",
  "稽古する。",
  "劇場へ行く。",
  "楽屋で待つ。",
  "食べる。",
  "本番へ出る。",
  "観客の反応を気にする。",
  "人と会う。",
  "病気になる。",
  "体重を量る。",
  "戦争によって興行条件が変わる。",
  "日記を通して見えるのは、",
  "喜劇人の芸だけではない。",
  "一人の身体を毎日舞台へ運ぶための、",
  "生活と産業の仕組みである。",
];

export const whyRoppa = {
  title: "Why Roppa Furukawa?",
  titleJa: "なぜ、古川ロッパなのか",
  paragraphs: [
    "古川ロッパを加えることで、Diary Observatoryは作家の書斎から舞台の楽屋へ広がる。",
    "作品を書く人だけでなく、毎日決まった時間に身体を人前へ出す人。一人で完結しない仕事。観客が必要な仕事。劇場、劇団、照明、衣装、宣伝、配給、放送に支えられる仕事。",
    "ロッパの日記は、芸能を完成した作品ではなく、反復される労働として観測できる。",
  ],
};

export const primaryDomains = [
  "Stage",
  "Comedy",
  "Diary",
  "Film",
  "Radio",
  "Entertainment",
];

export const primaryDiary = {
  title: "Primary diary",
  titleJa: "中心となる日記",
  workJa: "古川ロッパ昭和日記",
  workEn: "Furukawa Roppa Shōwa Nikki",
  englishDisplay: "Roppa Furukawa’s Shōwa Diary",
  sourceForm: "Long-term diary",
  sourceFormJa: "長期日記",
  href: `/diaries/${ROPPA_DIARY_SLUG}`,
  comingNote: "Long-term diary observatory — volumes scaffolded; dated Entries not yet indexed.",
  volumes: roppaDiaryVolumes,
};

export const periodArchitecture = [
  {
    id: "prewar",
    label: "Prewar",
    labelJa: "戦前",
    candidates: [
      "劇場",
      "劇団",
      "稽古",
      "本番",
      "映画",
      "食事",
      "人気",
      "都市娯楽",
    ],
  },
  {
    id: "wartime",
    label: "Wartime",
    labelJa: "戦中",
    candidates: [
      "興行統制",
      "空襲",
      "配給",
      "移動制限",
      "観客",
      "食事",
      "身体",
      "宣伝・報道",
    ],
  },
  {
    id: "postwar",
    label: "Postwar",
    labelJa: "戦後",
    candidates: [
      "興行再開",
      "食糧事情",
      "メディア変化",
      "劇団",
      "人気",
      "収入",
      "生活再建",
    ],
  },
  {
    id: "late",
    label: "Late years",
    labelJa: "晩年",
    candidates: [
      "病気",
      "入院",
      "体力",
      "人気の変化",
      "テレビ時代",
      "過去の役割",
      "死への接近",
    ],
  },
];

export const performanceDayModel = {
  label: "Interpretive performance-day model",
  noteEn:
    "This is not a reconstruction of one specific day. It is a provisional model derived from recurring diary categories.",
  noteJa:
    "これは特定の日の再現ではない。日記に反復して現れる項目から構成する暫定的な舞台労働モデルである。",
  steps: [
    { label: "Wake", labelJa: "起床" },
    { label: "Food / body check", labelJa: "食事・身体確認" },
    { label: "Travel", labelJa: "劇場へ移動" },
    { label: "Rehearsal", labelJa: "稽古" },
    { label: "Waiting", labelJa: "楽屋で待つ" },
    { label: "Performance", labelJa: "本番" },
    { label: "Audience response", labelJa: "観客の反応" },
    { label: "Meal / meeting", labelJa: "食事・会合" },
    { label: "Return / diary", labelJa: "帰宅・日記" },
  ],
};

export const performanceNetworkActors = [
  { id: "actors", label: "Actors", labelJa: "出演者", status: "Not indexed" },
  { id: "writers", label: "Writers", labelJa: "脚本", status: "Not indexed" },
  {
    id: "directors",
    label: "Directors",
    labelJa: "演出",
    status: "Not indexed",
  },
  {
    id: "musicians",
    label: "Musicians",
    labelJa: "音楽",
    status: "Not indexed",
  },
  {
    id: "crew",
    label: "Stage crew",
    labelJa: "舞台スタッフ",
    status: "Not indexed",
  },
  { id: "costume", label: "Costume", labelJa: "衣装", status: "Not indexed" },
  { id: "makeup", label: "Makeup", labelJa: "化粧", status: "Not indexed" },
  {
    id: "management",
    label: "Theater management",
    labelJa: "劇場運営",
    status: "Not indexed",
  },
  {
    id: "promoters",
    label: "Promoters",
    labelJa: "興行",
    status: "Not indexed",
  },
  {
    id: "media",
    label: "Media",
    labelJa: "新聞、ラジオ、映画",
    status: "Not indexed",
  },
  {
    id: "audience",
    label: "Audience",
    labelJa: "観客",
    status: "Unknown persons / Not indexed",
  },
];

export const rehearsalPerformanceRecovery = [
  {
    id: "preparation",
    label: "Preparation",
    labelJa: "準備",
    items: ["台本", "稽古", "衣装", "移動", "打ち合わせ"],
  },
  {
    id: "exposure",
    label: "Exposure",
    labelJa: "本番",
    items: ["観客", "声", "身体", "緊張", "失敗", "反応"],
  },
  {
    id: "recovery",
    label: "Recovery",
    labelJa: "回復",
    items: ["食事", "睡眠", "入浴", "酒", "医療", "休演"],
  },
];

export const foodObservatoryItems = [
  { id: "breakfast", label: "Breakfast", labelJa: "朝食" },
  {
    id: "before",
    label: "Meal before performance",
    labelJa: "本番前",
  },
  { id: "between", label: "Meal between shows", labelJa: "公演間" },
  { id: "after", label: "Meal after performance", labelJa: "終演後" },
  { id: "restaurant", label: "Restaurant", labelJa: "外食" },
  { id: "home", label: "Home meal", labelJa: "家庭の食事" },
  {
    id: "provided",
    label: "Provided meal",
    labelJa: "劇場・他者による提供",
  },
  { id: "ration", label: "Wartime ration", labelJa: "配給・不足" },
  { id: "hospital", label: "Hospital meal", labelJa: "入院食" },
];

export const bodyObservatoryItems = [
  { id: "weight", label: "Weight", labelJa: "体重" },
  { id: "appetite", label: "Appetite", labelJa: "食欲" },
  { id: "voice", label: "Voice", labelJa: "声" },
  { id: "fatigue", label: "Fatigue", labelJa: "疲労" },
  { id: "sleep", label: "Sleep", labelJa: "睡眠" },
  { id: "pain", label: "Pain", labelJa: "痛み" },
  { id: "illness", label: "Illness", labelJa: "病気" },
  {
    id: "hospitalization",
    label: "Hospitalization",
    labelJa: "入院",
  },
  { id: "medication", label: "Medication", labelJa: "薬" },
  { id: "mobility", label: "Mobility", labelJa: "移動能力" },
  {
    id: "capacity",
    label: "Performance capacity",
    labelJa: "出演可能性",
  },
];

export const audienceFeedbackLoop = [
  { label: "Performance", labelJa: "上演" },
  { label: "Audience reaction", labelJa: "観客の反応" },
  { label: "Diary observation", labelJa: "日記の観察" },
  {
    label: "Adjustment / interpretation",
    labelJa: "調整・解釈",
  },
  { label: "Next performance", labelJa: "次の公演" },
];

export const popularityIndicators = [
  "attendance",
  "billing",
  "press",
  "invitation",
  "income",
  "audience-reaction",
  "media-appearance",
  "anecdotal",
  "unknown",
];

export const theaterWorkplaceCategories = [
  { id: "theater", label: "Theater", labelJa: "劇場" },
  {
    id: "rehearsal",
    label: "Rehearsal room",
    labelJa: "稽古場",
  },
  {
    id: "studio",
    label: "Studio",
    labelJa: "撮影所・放送局",
  },
  { id: "restaurant", label: "Restaurant", labelJa: "会食場所" },
  { id: "hospital", label: "Hospital", labelJa: "医療" },
  { id: "home", label: "Home", labelJa: "住居" },
  { id: "station", label: "Station", labelJa: "移動" },
];

export const entertainmentLaborProfile: EntertainmentLaborProfile = {
  writerId: ROPPA_WRITER_ID,
  rehearsal: "Central research axis — Not indexed as Fact records",
  performance: "Central research axis — Not indexed as Fact records",
  travel: "Not indexed",
  waiting: "Not indexed — likely under-recorded elsewhere",
  publicity: "Not indexed",
  writing: "Diary writing visible as long-term form — Entry pages pending",
  meetings: "Not indexed",
  recovery: "Not indexed",
  administration: "Not indexed",
  management: "Not indexed — company / troupe details pending",
  verificationStatus: "indexing",
};

export const moneyCategories = [
  { id: "performance", label: "Performance income", labelJa: "出演料", status: "Not indexed" },
  { id: "theater", label: "Theater revenue", labelJa: "興行収入", status: "Not indexed" },
  { id: "company", label: "Company costs", labelJa: "劇団費", status: "Not indexed" },
  { id: "travel", label: "Travel", labelJa: "交通", status: "Not indexed" },
  { id: "food", label: "Food", labelJa: "食費", status: "Not indexed" },
  { id: "costume", label: "Costume", labelJa: "衣装", status: "Not indexed" },
  { id: "medical", label: "Medical", labelJa: "医療", status: "Not indexed" },
  { id: "housing", label: "Housing", labelJa: "住居", status: "Not indexed" },
  { id: "hospitality", label: "Hospitality", labelJa: "会食", status: "Not indexed" },
  { id: "media", label: "Media work", labelJa: "映画・放送", status: "Not indexed" },
];

export const wartimeAxes = [
  { id: "air", label: "Air raids", labelJa: "空襲" },
  { id: "food", label: "Food shortages", labelJa: "食糧不足" },
  { id: "ration", label: "Rationing", labelJa: "配給" },
  { id: "censor", label: "Censorship", labelJa: "検閲" },
  {
    id: "control",
    label: "Entertainment control",
    labelJa: "興行統制",
  },
  {
    id: "military",
    label: "Military context",
    labelJa: "軍・慰問等",
    note: "Fact only when verified",
  },
  { id: "transport", label: "Transport disruption", labelJa: "交通" },
  { id: "audience", label: "Audience change", labelJa: "観客変化" },
  { id: "damage", label: "Theater damage", labelJa: "劇場被害" },
  { id: "body", label: "Body", labelJa: "病気、疲労" },
];

export const authorityActors = [
  { id: "gov", label: "Government", labelJa: "行政" },
  { id: "military", label: "Military", labelJa: "軍" },
  { id: "censors", label: "Censors", labelJa: "検閲" },
  {
    id: "operators",
    label: "Theater operators",
    labelJa: "劇場",
  },
  { id: "producers", label: "Producers", labelJa: "興行主" },
  {
    id: "media",
    label: "Media companies",
    labelJa: "新聞・放送・映画",
  },
  { id: "audience", label: "Audience", labelJa: "観客" },
  { id: "performers", label: "Performers", labelJa: "演者" },
];

export const mediaTransition = [
  { id: "stage", label: "Stage", labelJa: "舞台", status: "Research axis" },
  { id: "film", label: "Film", labelJa: "映画", status: "Not indexed" },
  { id: "radio", label: "Radio", labelJa: "ラジオ", status: "Not indexed" },
  {
    id: "tv",
    label: "Television",
    labelJa: "テレビ",
    status: "Not indexed",
  },
  { id: "print", label: "Print", labelJa: "新聞・雑誌", status: "Not indexed" },
];

export const fifthCondition = {
  title: "A fifth daily condition",
  titleJa: "五つ目の一日を決める条件",
  rows: [
    { name: "Kafū", condition: "Environment", conditionJa: "環境" },
    { name: "Nishimura", condition: "Media", conditionJa: "メディア" },
    { name: "Bukowski", condition: "Labor", conditionJa: "賃金労働" },
    { name: "Hayashi", condition: "Maintenance", conditionJa: "生活維持" },
    { name: "Roppa", condition: "Performance", conditionJa: "上演" },
  ],
  noteJa:
    "上演とは、舞台上の数時間だけではない。稽古、待機、観客、食事、身体回復を含む集団労働である。",
  fourHref: "/compare/four-urban-lives",
  futureCompareHref: "/compare/five-daily-systems",
};

export const compareNishimura = {
  title: "From theater to television",
  titleJa: "劇場からテレビへ",
  roppa: ["舞台", "劇団", "映画", "ラジオ", "戦前・戦中・戦後", "観客の集合"],
  nishimura: [
    "出版社",
    "文学賞",
    "テレビ",
    "作家本人のキャラクター化",
    "平成メディア",
  ],
  shared: [
    "メディア",
    "人気",
    "観客",
    "作家像",
    "出演",
    "身体",
    "文化産業",
  ],
  comingHref: "/compare/roppa-nishimura",
};

export const compareHayashi = {
  title: "Food, work, and the performing body",
  titleJa: "食事、仕事、演じる身体",
  sharedContext: "Both born 1903 (verified year) — do not overgeneralize lives.",
  hayashi: ["Writing", "movement", "maintenance"],
  roppa: ["Performance", "audience", "recovery"],
  comingHref: "/compare/hayashi-roppa",
};

export const selectedEntry = {
  status: "No dated entry indexed yet.",
  statusJa: "底本と本文を確認できた一日は、まだ索引化されていません。",
  criteria: [
    "日付が明確",
    "使用篇・版が明確",
    "稽古または本番がある",
    "食事がある",
    "身体状態がある",
    "劇場または移動がある",
    "観客反応がある",
    "長文転載なしで要約できる",
  ],
  preferred: [
    "一日の複数公演",
    "戦時下の公演日",
    "食事と体調が詳しい日",
    "舞台と放送を移動した日",
    "入院・休演と仕事が交差する日",
  ],
};

/** Empty Fact arrays — do not invent performances, meals, weights, or diagnoses. */
export const roppaPerformanceRecords: PerformanceRecord[] = [];
export const roppaAudienceRecords: AudienceRecord[] = [];
export const roppaBodyRecords: BodyRecord[] = [];
export const roppaPopularityRecords: PopularityRecord[] = [];
export const roppaFoodRecordIds: string[] = [];

export const roppaAxes = [
  {
    id: "performance",
    label: "Performance",
    labelJa: "上演",
    items: ["rehearsal", "waiting", "stage", "audience"],
  },
  {
    id: "food",
    label: "Food",
    labelJa: "食事",
    items: ["before show", "between shows", "ration", "hospitality"],
  },
  {
    id: "body",
    label: "Body",
    labelJa: "身体",
    items: ["weight", "voice", "illness", "recovery"],
  },
  {
    id: "war",
    label: "War",
    labelJa: "戦争",
    items: ["control", "ration", "air raids", "mobility"],
  },
  {
    id: "audience",
    label: "Audience",
    labelJa: "観客",
    items: ["laugh", "empty seats", "reviews", "attendance"],
  },
  {
    id: "media",
    label: "Media",
    labelJa: "メディア",
    items: ["film", "radio", "television", "print"],
  },
  {
    id: "money",
    label: "Money",
    labelJa: "金銭",
    items: ["fees", "company", "travel", "medical"],
  },
  {
    id: "aging",
    label: "Aging",
    labelJa: "老い",
    items: ["role", "capacity", "illness", "memory"],
  },
];

export const roppaTimeline: ChronologyItem[] = [
  {
    year: 1903,
    event: "Born",
    eventJa: "生誕",
    kind: "fact",
    verificationStatus: "verified",
  },
  {
    year: 1961,
    event: "Died",
    eventJa: "死去",
    kind: "fact",
    verificationStatus: "verified",
  },
  {
    year: 1987,
    yearLabel: "1987–1989",
    event: "Published multi-volume Shōwa diary edition (bibliographic)",
    eventJa: "『古川ロッパ昭和日記』複数巻の書誌上の刊行時期（確認中の詳細あり）",
    kind: "fact",
    verificationStatus: "partial",
  },
];

export const roppaResearchQueue: WriterResearchQueueItem[] = [
  {
    id: "rq-roppa-1",
    title: "Bibliographic records for each volume",
    titleJa: "各篇の書誌（収録期間・刊行年・出版社・編集・新装版・底本）",
    type: "bibliography",
    priority: 1,
    status: "source-needed",
    sourceNeeded: true,
    note: "Open /research/furukawa-roppa-bibliography. Attach NDL / CiNii / copy-in-hand notes per volume. Supervisor/editor credit needs per-edition check.",
  },
  {
    id: "rq-roppa-2",
    title: "First dated Entry to index",
    titleJa: "最初に索引化する一日（日付・劇場・演目・食事・体調・観客・移動）",
    type: "entry",
    priority: 2,
    status: "queued",
    sourceNeeded: true,
    note: "Do not invent a date before opening a verified volume.",
  },
  {
    id: "rq-roppa-3",
    title: "Theater Entity index",
    titleJa: "劇場Entity（名称・所在・現況・公演記録）",
    type: "entity",
    priority: 3,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-roppa-4",
    title: "Food records linked to performance context",
    titleJa: "公演文脈つき食事記録",
    type: "food",
    priority: 4,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-roppa-5",
    title: "Body records (weight, illness, hospitalization, impact)",
    titleJa: "身体記録（体重・病気・入院・出演影響）",
    type: "body",
    priority: 5,
    status: "queued",
    sourceNeeded: true,
    note: "No medical causality invention.",
  },
  {
    id: "rq-roppa-6",
    title: "Wartime entertainment control sources",
    titleJa: "戦時下の興行制度（検閲・統制・配給・空襲・移動）",
    type: "wartime",
    priority: 6,
    status: "source-needed",
    sourceNeeded: true,
  },
  {
    id: "rq-roppa-7",
    title: "Troupe / promotion economics",
    titleJa: "劇団・興行（組織・関係者・収入・経費・契約）",
    type: "money",
    priority: 7,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-roppa-8",
    title: "Film / radio / television appearances",
    titleJa: "映画・ラジオ・テレビの出演と媒体移行",
    type: "media",
    priority: 8,
    status: "queued",
    sourceNeeded: true,
  },
];

export const roppaRelatedWriters = [
  {
    id: "hayashi",
    name: "Fumiko Hayashi",
    nameJa: "林芙美子",
    connection: "Same birth year (1903) — food / work / body axes",
    text: "食事と労働と身体を見える化する。上演／生活維持の重心は分ける。",
    cta: "View writer",
    href: "/writers/fumiko-hayashi",
    status: "available" as const,
  },
  {
    id: "nishimura",
    name: "Kenji Nishimura",
    nameJa: "西村賢太",
    connection: "Media and public persona across eras",
    text: "劇場からテレビへ。人気と出演が一日を動かす条件として重なる。",
    cta: "View writer",
    href: "/writers/kenji-nishimura",
    status: "available" as const,
  },
  {
    id: "kafu",
    name: "Kafū Nagai",
    nameJa: "永井荷風",
    connection: "Tokyo diary depth / wartime city",
    text: "長期日記と東京。環境応答と上演労働は別の重心として比較する。",
    cta: "View writer",
    href: "/writers/kafu-nagai",
    status: "available" as const,
  },
  {
    id: "bukowski",
    name: "Charles Bukowski",
    nameJa: "チャールズ・ブコウスキー",
    connection: "Laboring body before/after recognition",
    text: "賃金労働と上演労働。身体の消耗と回復を、別産業で読む。",
    cta: "View writer",
    href: "/writers/charles-bukowski",
    status: "available" as const,
  },
];

export const roppaRelatedPages = [
  {
    group: "Diary",
    title: "古川ロッパ昭和日記",
    href: `/diaries/${ROPPA_DIARY_SLUG}`,
  },
  {
    group: "Research",
    title: "Bibliography — establish base edition",
    href: "/research/furukawa-roppa-bibliography",
  },
  {
    group: "Research",
    title: "First indexed day — research workspace",
    href: "/research/furukawa-roppa-first-entry",
  },
  {
    group: "Comparison",
    title: "Four Urban Lives",
    href: "/compare/four-urban-lives",
  },
  {
    group: "Observation",
    title: "楽屋は、歴史に映らない",
    href: "/observations/backstage-is-not-recorded",
  },
  {
    group: "Observation",
    title: "生活維持は、文学の背景ではない",
    href: "/observations/maintenance-is-not-background",
  },
  {
    group: "Observation",
    title: "三つの都市、三つの生活速度",
    href: "/observations/three-cities-three-speeds",
  },
  {
    group: "Observation",
    title: "一日の値段",
    href: "/observations/the-price-of-an-ordinary-day",
  },
  {
    group: "Coming comparison",
    title: "Five daily systems",
    href: "/compare/five-daily-systems",
  },
  {
    group: "Coming comparison",
    title: "Roppa and Nishimura",
    href: "/compare/roppa-nishimura",
  },
  {
    group: "Coming comparison",
    title: "Hayashi and Roppa",
    href: "/compare/hayashi-roppa",
  },
];

export const epistemicOverview: Array<{
  kind: EpistemicKind;
  text: string;
}> = [
  {
    kind: "fact",
    text: "生年1903、没年1961。日本。表示名は古川ロッパ、典拠表記として古川緑波を併記する。『古川ロッパ昭和日記』は複数巻の公刊日記として書誌に現れる。",
  },
  {
    kind: "observation",
    text: "舞台・稽古・食事・身体・観客・媒体移行・戦争が、長期日記の反復カテゴリとして見えやすい。",
  },
  {
    kind: "interpretation",
    text: "喜劇を華やかな称号ではなく、身体を人前へ運ぶ集団労働として読む入口にする。",
  },
];

export const roppaSources: Source[] = [
  {
    id: "src-roppa-authority",
    category: "verification",
    status: "needed",
    label: "NDL / authority records — 古川緑波（1903–1961）",
    needed: true,
    note: "Prefer 古川緑波 as canonical personal name; display 古川ロッパ separately. Attach official NDL URI after review.",
  },
  {
    id: "src-roppa-cinii-ncid",
    category: "verification",
    status: "verification-pending",
    label: "CiNii Books — 古川ロッパ昭和日記 (NCID BN01451714)",
    url: "https://ci.nii.ac.jp/ncid/BN01451714",
    needed: true,
  },
  {
    id: "src-roppa-shobunsha",
    category: "verification",
    status: "verification-pending",
    label: "晶文社 — 新装復刊案内",
    url: "https://www.shobunsha.co.jp/?p=1886",
    needed: true,
  },
  {
    id: "src-roppa-primary",
    category: "primary",
    status: "needed",
    label: "Primary diary volumes — copy-in-hand bibliography",
    needed: true,
    note: "No invented entries, menus, weights, or diagnoses.",
  },
  {
    id: "src-roppa-theater",
    category: "verification",
    status: "needed",
    label: "Theater archives / performance calendars",
    needed: true,
  },
  {
    id: "src-roppa-wartime",
    category: "verification",
    status: "needed",
    label: "Wartime cultural history — censorship and entertainment control",
    needed: true,
  },
  {
    id: "src-roppa-media",
    category: "verification",
    status: "needed",
    label: "Film / radio / television credit bibliographies",
    needed: true,
  },
  {
    id: "src-roppa-food-body",
    category: "verification",
    status: "needed",
    label: "Food and body records extracted only after volume confirmation",
    needed: true,
  },
];

export const ROPPA_DIARY_WORK_ID = ROPPA_DIARY_ID;
