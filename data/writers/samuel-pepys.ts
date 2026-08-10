import type {
  ChronologyItem,
  EpistemicKind,
  WriterResearchQueueItem,
} from "@/lib/types";

export const PEPYS_SLUG = "samuel-pepys";
export const PEPYS_WRITER_ID = "writer-pepys";

export const pepysLead = [
  "仕事へ行く。",
  "書類を見る。",
  "人と会う。",
  "金を使う。",
  "食べる。",
  "劇場へ行く。",
  "家庭へ戻る。",
  "そして、国家の出来事がその一日の予定を変える。",
  "Pepysの日記では、私生活と公的生活を簡単に切り離すことができない。",
];

export const whyPepys = {
  title: "Why Pepys?",
  titleJa: "なぜPepysなのか",
  paragraphs: [
    "私的な日記が同時に、行政、都市、社会の記録でもあるとき、「一日」はどう見えるのか。",
    "Diary Observatoryを「文学者の日記サイト」から、より広い生活記録 Observatory へ拡張するためである。",
    "文学者ではないが、日記・自己記録を残した人として Writer に含まれる。",
  ],
  concept: {
    en: "What happens when a personal diary is also a record of administration, city life, and public events?",
    ja: "私的な日記が同時に、行政、都市、社会の記録でもあるとき、「一日」はどう見えるのか。",
  },
  caution:
    "Great Plague・Great Fire・Restoration London・性的逸話・government official だけへ還元しない。",
};

export const pepysPrimaryQuestion = {
  en: "How does public infrastructure enter an ordinary private day?",
  ja: "社会制度や公共インフラは、個人の普通の一日にどのように入り込むのか。",
};

export const pepysThesis = {
  en: "When public administration enters a private diary",
  ja: "個人の日記の中へ、国家と都市が入ってくる",
};

export const primaryConditionLabel = {
  id: "administration-public-life" as const,
  en: "Administration / Public Life",
  ja: "行政／公的生活",
  shortEn: "Administration",
  shortJa: "行政",
};

export const administrationLayers = [
  { en: "Work / Administration", ja: "仕事・行政" },
  { en: "Documents", ja: "書類" },
  { en: "Meetings", ja: "会合" },
  { en: "Money", ja: "金銭" },
  { en: "Food", ja: "食事" },
  { en: "Movement", ja: "移動" },
  { en: "City infrastructure", ja: "都市インフラ" },
  { en: "Household", ja: "家庭" },
  { en: "Social network", ja: "社会関係" },
  { en: "Entertainment", ja: "娯楽" },
  { en: "Body", ja: "身体" },
  { en: "Public health", ja: "公衆衛生" },
  { en: "Public events", ja: "公共事件" },
  { en: "Waiting", ja: "待ち時間" },
];

export const administrationIsDailyWork = {
  title: "Administration is daily work",
  titleJa: "行政も、毎日の仕事である",
  observe: [
    "Documents",
    "Meetings",
    "Appointments",
    "Reports",
    "Accounts",
    "Travel",
    "Waiting",
    "Officials",
    "Decisions",
    "Correspondence",
    "Money",
    "Institutional deadlines",
  ],
};

export const publicHistoryConcept = {
  title: "Public history can become daily logistics",
  titleJa: "大きな歴史は、個人の一日では予定変更や移動、食事、仕事として現れる",
  note: "大事件を日記へ勝手に接続しない。Entry 本文で影響確認できる場合のみ PublicEventImpactRecord を作る。",
};

export const cityAsOs = {
  title: "The city is not a setting",
  titleJa: "都市は背景ではない",
  concept: {
    en: "It is an operating system for the day.",
    ja: "一日を動かす Operating System である。",
  },
};

export const moneyObserve = {
  title: "Money",
  titleJa: "金銭",
  candidates: [
    "Income",
    "Salary",
    "Purchases",
    "Food",
    "Entertainment",
    "Household",
    "Transport",
    "Gifts",
    "Administration",
    "Debt",
    "Savings",
    "Investment",
  ],
  caution:
    "公金と私金を混同しない。MoneyContext（personal / household / employment / institutional / public / business）を区別する。具体金額は Source 確認後のみ。",
};

export const foodAsLayers = {
  title: "Food",
  titleJa: "食事",
  layers: ["body", "social", "work", "administration", "status", "maintenance"],
  caution: "単なる「昔のグルメ」にしない。",
};

export const workLeisureBoundary = {
  title: "Work / Leisure boundary",
  titleJa: "仕事と余暇の境界",
  note: "official meeting / meal with officials / theater / social visit が完全に分離しない可能性がある。Multi-layer time は Source 確認後に接続する。",
};

export const publicPrivateLayers = {
  title: "Public history / Personal observation",
  titleJa: "公共史と個人観測の分離",
  layers: [
    {
      en: "Historical Fact",
      ja: "外部制度・歴史 Source",
    },
    {
      en: "Diary Fact",
      ja: "本人の日記記述",
    },
    {
      en: "Observation",
      ja: "その出来事が日常構造へどう入ったか",
    },
    {
      en: "Interpretation",
      ja: "個人と公共世界の関係",
    },
  ],
};

export const diaryCorpusStatus = {
  title: "Diary corpus",
  titleJa: "日記コーパス",
  status: "Bibliographic research needed",
  futureRoute: "/diaries/samuel-pepys-diary",
  rows: [
    { label: "Edition", status: "Not indexed" },
    { label: "Pages", status: "Not indexed" },
    { label: "SourceCopy", status: "Not indexed" },
    { label: "SourceCapture", status: "Not indexed" },
    { label: "Indexed entries", status: "0" },
  ],
  note: "長大な日記だからといって架空 Entry を作らない。正式名称・Edition 確認後に route を確定可能。",
};

export const provenanceStatus = [
  { label: "Writer", status: "registered" },
  { label: "Diary corpus", status: "research needed" },
  { label: "Edition", status: "not indexed" },
  { label: "Entry", status: "0" },
  { label: "SourceCopy", status: "0" },
  { label: "SourceCapture", status: "0" },
  { label: "Provenance", status: "research stage" },
  { label: "AdministrationRecord", status: "0" },
  { label: "PublicEventImpactRecord", status: "0" },
  { label: "CityInfrastructureRecord", status: "0" },
  { label: "EntertainmentRecord", status: "0" },
];

export const visibleRegister = [
  {
    label: "Page as framework",
    status: "available",
    kind: "observation" as EpistemicKind,
  },
  {
    label: "Primary Condition = Administration / Public Life",
    status: "defined",
    kind: "observation" as EpistemicKind,
  },
  {
    label: "Public event → private logistics (concept)",
    status: "interpretive model",
    kind: "interpretation" as EpistemicKind,
  },
];

export const unknownRegister = [
  { label: "Exact daily work schedule", status: "Not indexed" },
  { label: "Administrative tasks by day", status: "Not indexed" },
  { label: "Money records", status: "Not indexed" },
  { label: "Food records", status: "Not indexed" },
  { label: "Travel durations", status: "Not indexed" },
  { label: "Public-event impact by Entry", status: "Not indexed" },
  { label: "Diary edition", status: "Research needed" },
  { label: "Page references", status: "Research needed" },
  { label: "SourceCapture", status: "Research needed" },
];

export const pepysOverviewLayers = [
  {
    kind: "interpretation" as EpistemicKind,
    text: "Lead copy は Interpretive。具体的日付・出来事は実データなしに Fact 化しない。",
  },
  {
    kind: "observation" as EpistemicKind,
    text: "Primary Condition は入口であり、Food / Money / Family / Entertainment も同居しうる。",
  },
  {
    kind: "fact" as EpistemicKind,
    text: "Indexed diary Entries: 0。Edition / Page / SourceCapture は未索引。",
  },
];

export const pepysTimeline: ChronologyItem[] = [
  {
    year: 1633,
    event: "Birth (commonly cited year)",
    eventJa: "生（常用年次）",
    kind: "fact",
    verificationStatus: "partial",
  },
  {
    year: 1703,
    event: "Death (commonly cited year)",
    eventJa: "没（常用年次）",
    kind: "fact",
    verificationStatus: "partial",
  },
  {
    year: 1633,
    yearLabel: "Diary bibliography",
    event: "Diary editions / pages — bibliographic research needed",
    eventJa: "日記版・頁 — 書誌調査が必要（記憶から登録しない）",
    kind: "observation",
    verificationStatus: "needs-source",
  },
];

export const pepysResearchQueue: WriterResearchQueueItem[] = [
  {
    id: "rq-pepys-1",
    title: "Identify verified diary edition(s) and reference system",
    titleJa: "確認済み日記 Edition・参照体系の特定",
    type: "edition",
    priority: 1,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-pepys-2",
    title: "Sample entries for administration / money / food / movement",
    titleJa: "行政・金銭・食事・移動が現れる Entry の標本化",
    type: "entry",
    priority: 1,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-pepys-3",
    title: "Public-event impact only where Entry text shows effect",
    titleJa: "公共事件の影響は Entry 本文で確認できる場合のみ",
    type: "context",
    priority: 1,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-pepys-4",
    title: "Separate personal and institutional money contexts",
    titleJa: "私的金銭と制度・公的金銭の分離",
    type: "money",
    priority: 2,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-pepys-5",
    title: "City infrastructure only when named or used in entry evidence",
    titleJa: "都市インフラは Entry で確認できる場合のみ",
    type: "place",
    priority: 2,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-pepys-6",
    title: "Entertainment / social visits without gossip framing",
    titleJa: "娯楽・訪問をゴシップ化せず索引する",
    type: "observation",
    priority: 3,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-pepys-7",
    title: "Future comparison: Pepys / Kafū — Two Cities Inside Two Diaries",
    titleJa: "将来比較：二つの日記の中の、二つの都市",
    type: "comparison",
    priority: 3,
    status: "queued",
    sourceNeeded: true,
  },
];

export const relatedObservations = [
  {
    href: "/observations/city-as-operating-system",
    title: "都市は、一日のOperating Systemである",
    note: "Featured · Administration turns the city into a working network.",
  },
  {
    href: "/observations/what-did-diarists-do-for-work",
    title: "日記を書く人は、何を仕事としていたのか",
    note: "Featured · Institutional work beside private diary.",
  },
  {
    href: "/observations/who-owns-the-day",
    title: "一日は、誰のものなのか",
    note: "Institutional time and private hours — administration as schedule.",
  },
  {
    href: "/observations/the-price-of-an-ordinary-day",
    title: "普通の一日の値段",
    note: "Money without inventing amounts.",
  },
  {
    href: "/observations/maintenance-is-not-background",
    title: "生活維持は、文学の背景ではない",
    note: "Household beside work and public life.",
  },
  {
    href: "/observations/more-sources-less-certainty",
    title: "資料が多いほど、事実は単純になるのか",
    note: "Historical Fact vs Diary Fact layers.",
  },
];

export const futureComparisons = [
  {
    id: "future-pepys-kafu",
    title: "Pepys / Kafū",
    titleJa: "二つの日記の中の、二つの都市",
    status: "Future comparison",
    note: "City, movement, food, money, public events, private life, infrastructure. Comparison page not created yet.",
  },
  {
    id: "future-pepys-kafka",
    title: "Pepys / Kafka",
    titleJa: "行政実務・有給労働・時間",
    status: "Future comparison",
    note: "Administration / salaried work / time as co-present structures.",
  },
  {
    id: "future-pepys-roppa",
    title: "Pepys / Roppa",
    titleJa: "制度・上演・公共的観客",
    status: "Future comparison",
    note: "Institution / performance / public audience — different publics.",
  },
  {
    id: "future-pepys-ichiyo",
    title: "Pepys / Ichiyō",
    titleJa: "金銭・都市生活・家計",
    status: "Future comparison",
    note: "Money, urban life, household — without forcing period analogy.",
  },
];

export const pepysRelatedWriters = [
  {
    id: "writer-roppa",
    name: "Roppa Furukawa",
    nameJa: "古川緑波",
    connection: "institution / performance / public audience",
    text: "制度と公共的観客が一日に入り込む条件を軸でつなぐ。",
    cta: "Open writer",
    href: "/writers/furukawa-roppa",
    status: "available" as const,
  },
  {
    id: "writer-kafka",
    name: "Franz Kafka",
    nameJa: "フランツ・カフカ",
    connection: "administration / salaried work / time",
    text: "行政・勤務・時間の所有が創作／記録の隣にある構造の比較候補。",
    cta: "Open writer",
    href: "/writers/franz-kafka",
    status: "available" as const,
  },
  {
    id: "writer-kafu",
    name: "Kafū Nagai",
    nameJa: "永井荷風",
    connection: "city / environment / daily record",
    text: "都市と日常記録。Future：二つの日記の中の二つの都市。",
    cta: "Open writer",
    href: "/writers/kafu-nagai",
    status: "available" as const,
  },
  {
    id: "writer-ichiyo",
    name: "Ichiyō Higuchi",
    nameJa: "樋口一葉",
    connection: "money / urban life / household",
    text: "金銭・都市生活・家計が同じ一日に置かれる条件の比較候補。",
    cta: "Open writer",
    href: "/writers/ichiyo-higuchi",
    status: "available" as const,
  },
];
