import type {
  ChronologyItem,
  EpistemicKind,
  WriterResearchQueueItem,
} from "@/lib/types";

export const WOOLF_SLUG = "virginia-woolf";
export const WOOLF_WRITER_ID = "writer-woolf";

export const woolfLead = [
  "作家の一日は、原稿を書くだけでは終わらない。",
  "読む。",
  "直す。",
  "手紙を書く。",
  "人に会う。",
  "出版について話す。",
  "本を作る。",
  "届いた反応を読む。",
  "次の文章を書く。",
  "Virginia Woolfを読むとき、創作だけでなく、「作品がどのような人間関係と出版環境の中を通って読者へ届くのか」という一日が見えてくる。",
];

export const whyWoolf = {
  title: "Why Woolf?",
  titleJa: "なぜWoolfなのか",
  paragraphs: [
    "Diary Observatoryに publishing、editing、literary network、intellectual network、correspondence、reviewing、household、money、books、reading、audience、war、body、social life を追加するためである。",
    "人物紹介サイトにしない。女性作家、Bloomsbury、近代主義といったラベルだけで分類しない。",
    "中心にあるのは、普通の一日を構成していた条件としての出版／ネットワークである。",
  ],
  concept: {
    en: "What happens when the writer also participates in the system that makes writing public?",
    ja: "書き手自身が、文章を世に出す仕組みにも関わるとき、作家の一日はどう変わるのか。",
  },
  caution:
    "Bloomsbury・mental illness・suicide・famous novelist だけへ還元しない。病気の伝記中心にもしない。",
};

export const woolfPrimaryQuestion = {
  en: "How does writing move from private work to public circulation?",
  ja: "書かれたものは、どのような人と仕組みを通って公的な文章になるのか。",
};

export const woolfThesis = {
  en: "Between writing a book and making a book circulate.",
  ja: "書くことと、本を世に出すことのあいだ",
};

export const primaryConditionLabel = {
  id: "publishing-network" as const,
  en: "Publishing / Network",
  ja: "出版／ネットワーク",
  shortEn: "Publishing",
  shortJa: "出版",
};

export const publishingLayers = [
  { en: "Writing", ja: "執筆" },
  { en: "Reading", ja: "読書" },
  { en: "Editing", ja: "編集" },
  { en: "Publishing", ja: "出版" },
  { en: "Correspondence", ja: "手紙" },
  { en: "Visitors / Meetings", ja: "来客・会合" },
  { en: "Networks", ja: "ネットワーク" },
  { en: "Household", ja: "生活維持" },
  { en: "Money", ja: "金銭" },
  { en: "Body", ja: "身体" },
  { en: "Walking / Travel", ja: "移動" },
  { en: "War context", ja: "戦時" },
  { en: "Reviews / Audience", ja: "書評・反応" },
  { en: "Books", ja: "書物" },
];

export const publishingIsLabor = {
  title: "Publishing is part of literary labor",
  titleJa: "出版もまた、文学労働の一部である",
  flow: [
    "Draft",
    "Revision",
    "Editorial discussion",
    "Typesetting / production",
    "Publication",
    "Distribution",
    "Review",
    "Reader response",
    "Next writing",
  ],
  caution:
    "Woolf本人がすべての工程を行ったと推測しない。各Actorは Source 確認後に接続する。",
};

export const networkAsInfrastructure = {
  title: "Network as infrastructure",
  titleJa: "人間関係を、文学を支えるInfrastructureとして見る",
  observe: [
    "Who read the manuscript?",
    "Who edited?",
    "Who printed?",
    "Who corresponded?",
    "Who visited?",
    "Who reviewed?",
    "Who paid?",
    "Who received the book?",
  ],
  avoid: "有名人ネットワークや人物相関図として見せない。友情・親密さを資料なしに推測しない。",
};

export const writingPublishingSplit = {
  title: "Writing / Publishing",
  titleJa: "執筆と出版",
  writing: ["Private production", "Revision", "Self-directed"],
  publishing: [
    "Coordination",
    "Others",
    "Deadlines",
    "Money",
    "Distribution",
    "Public response",
  ],
  caution:
    "Writing = private / Publishing = public と単純化しない。両者は重なることがありうる。",
};

export const readingAsWork = {
  title: "Reading as work",
  titleJa: "読書も観測対象である",
  note: "読んだ作品が創作へ影響したと、資料なしに因果化しない。",
  types: [
    "leisure",
    "review",
    "research",
    "editorial",
    "manuscript",
    "rereading",
  ],
};

export const audienceLoop = {
  title: "Audience loop",
  titleJa: "読者反応の循環（概念図）",
  flow: [
    "Writing",
    "Publication",
    "Review / Reader",
    "Writer receives reaction",
    "Next diary / correspondence / writing",
  ],
  note: "Conceptual feedback loop。具体因果は Source 確認時のみ。",
};

export const householdObserve = {
  title: "Household",
  titleJa: "生活維持を外さない",
  layers: [
    "Housing",
    "Meals",
    "Visitors",
    "Domestic administration",
    "Money",
    "Rest",
    "Body",
    "Walking",
    "Travel",
  ],
  caution:
    "女性だから家事担当と推測しない。Actor unknown を維持する。",
};

export const bodyNote = {
  title: "Body",
  titleJa: "身体",
  caution:
    "日記や手紙上の身体・感情記述から現代医学的診断を推測しない。病気中心の伝記構成にしない。Body は Time / Writing / Social / Publishing との関係として観測する。",
};

export const warContextNote = {
  title: "War Context",
  titleJa: "戦時状況",
  candidates: [
    "Air raids",
    "Publishing constraints",
    "Paper",
    "Transport",
    "Housing",
    "Communication",
    "Audience",
    "Daily routine",
  ],
  note: "具体的出来事は Source 確認後のみ。WartimeContextRecord を再利用可能。",
};

export const diaryCorpusStatus = {
  title: "Diary corpus",
  titleJa: "日記コーパス",
  status: "Bibliographic research needed",
  futureRoute: "/diaries/virginia-woolf-diaries",
  rows: [
    { label: "Edition", status: "Not indexed" },
    { label: "Page", status: "Not indexed" },
    { label: "SourceCopy", status: "Not indexed" },
    { label: "SourceCapture", status: "Not indexed" },
    { label: "Indexed entries", status: "0" },
  ],
  note: "記憶から巻数、出版社、版、ページを登録しない。正式 slug は書誌確認後でもよい。",
};

export const provenanceStatus = [
  { label: "Writer", status: "registered" },
  { label: "Diary corpus", status: "research needed" },
  { label: "Edition", status: "not indexed" },
  { label: "Entry", status: "0" },
  { label: "SourceCopy", status: "0" },
  { label: "SourceCapture", status: "0" },
  { label: "Provenance", status: "research stage" },
  { label: "PublishingActivityRecord", status: "0" },
  { label: "LiteraryNetworkRelation", status: "0" },
  { label: "MeetingRecord", status: "0" },
  { label: "ReadingRecord", status: "0" },
  { label: "ReviewRecord", status: "0" },
];

export const visibleRegister = [
  {
    label: "Page as framework",
    status: "available",
    kind: "observation" as EpistemicKind,
  },
  {
    label: "Primary Condition = Publishing / Network",
    status: "defined",
    kind: "observation" as EpistemicKind,
  },
  {
    label: "Publishing labor as conceptual flow",
    status: "interpretive model",
    kind: "interpretation" as EpistemicKind,
  },
];

export const unknownRegister = [
  { label: "Exact daily writing hours", status: "Not indexed" },
  { label: "Publishing coordination time", status: "Not indexed" },
  { label: "Domestic labor actors", status: "Not indexed" },
  { label: "Exact financial flows", status: "Not indexed" },
  { label: "Complete correspondence network", status: "Not indexed" },
  { label: "Diary edition", status: "Research needed" },
  { label: "Pages", status: "Research needed" },
  { label: "SourceCapture", status: "Research needed" },
];

export const woolfOverviewLayers = [
  {
    kind: "interpretation" as EpistemicKind,
    text: "Lead copy は Interpretive。個々の行動を特定日 Fact として扱わない。",
  },
  {
    kind: "observation" as EpistemicKind,
    text: "Primary Condition は比較の入口であり、Woolf の本質ではない。Time / Body / Maintenance も同居しうる。",
  },
  {
    kind: "fact" as EpistemicKind,
    text: "Indexed diary Entries: 0。Edition / Page / SourceCapture は未索引。",
  },
];

export const woolfTimeline: ChronologyItem[] = [
  {
    year: 1882,
    event: "Birth (commonly cited year)",
    eventJa: "生（常用年次）",
    kind: "fact",
    verificationStatus: "partial",
  },
  {
    year: 1941,
    event: "Death (commonly cited year) — not the organizing frame of this page",
    eventJa: "没（常用年次）。病気・死をページの中心にしない。",
    kind: "fact",
    verificationStatus: "partial",
  },
  {
    year: 1882,
    yearLabel: "Diary bibliography",
    event: "Diary editions / pages — bibliographic research needed",
    eventJa: "日記版・頁 — 書誌調査が必要（記憶から登録しない）",
    kind: "observation",
    verificationStatus: "needs-source",
  },
];

export const woolfResearchQueue: WriterResearchQueueItem[] = [
  {
    id: "rq-woolf-1",
    title: "Identify verified diary edition(s) and volume structure",
    titleJa: "確認済み日記 Edition・巻構成の特定",
    type: "edition",
    priority: 1,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-woolf-2",
    title: "Sample entries for publishing / editing / correspondence activity",
    titleJa: "出版・編集・手紙活動が現れる Entry の標本化",
    type: "entry",
    priority: 1,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-woolf-3",
    title: "Map publishing actors only when named in sources",
    titleJa: "Sourceに名前がある出版 Actor のみを接続",
    type: "network",
    priority: 2,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-woolf-4",
    title: "Index Reading / Review / Meeting records without causality invention",
    titleJa: "読書・書評・会合レコードの索引（因果の捏造なし）",
    type: "observation",
    priority: 2,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-woolf-5",
    title: "Money flows for books / household — amounts only when priced in source",
    titleJa: "書籍・家計の金銭フロー（金額は資料に明示がある場合のみ）",
    type: "money",
    priority: 2,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-woolf-6",
    title: "Wartime context only where diary evidence shows impact",
    titleJa: "戦時状況は日記で影響が確認できる場合のみ",
    type: "context",
    priority: 3,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-woolf-7",
    title: "Future comparisons: Woolf–Kafka / Woolf–Hayashi / Woolf–Ichiyō / Woolf–Nishimura",
    titleJa: "将来比較の資料整理",
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
    note: "Featured · City as infrastructure for ordinary days.",
  },
  {
    href: "/observations/what-did-diarists-do-for-work",
    title: "日記を書く人は、何を仕事としていたのか",
    note: "Featured · Occupation / Activity / Income across nine writers.",
  },
  {
    href: "/observations/where-did-the-editor-go",
    title: "編集者はどこへ行ったのか",
    note: "Publishing systems and editorial contact as daily structure.",
  },
  {
    href: "/observations/before-the-platform-small-press",
    title: "プラットフォーム以前の小さな出版",
    note: "Circulation infrastructure before platform distribution.",
  },
  {
    href: "/observations/the-manuscripts-that-were-not-chosen",
    title: "選ばれなかった原稿",
    note: "Selection, silence, and unpublished text.",
  },
  {
    href: "/observations/maintenance-is-not-background",
    title: "生活維持は、文学の背景ではない",
    note: "Household and maintenance beside writing.",
  },
  {
    href: "/observations/who-owns-the-day",
    title: "一日は、誰のものなのか",
    note: "Time alongside correspondence, body, and social obligation.",
  },
];

export const futureComparisons = [
  {
    id: "future-woolf-kafka",
    title: "Woolf / Kafka",
    titleJa: "手紙・時間・公開までの距離",
    status: "Future comparison",
    note: "Writing, correspondence, time, and how text becomes public — without forcing biography.",
  },
  {
    id: "future-woolf-hayashi",
    title: "Woolf / Hayashi",
    titleJa: "執筆・出版・生活維持",
    status: "Future comparison",
    note: "Writing / publishing / maintenance as co-present layers.",
  },
  {
    id: "future-woolf-ichiyo",
    title: "Woolf / Ichiyō",
    titleJa: "創作・家計・出版",
    status: "Future comparison",
    note: "Writing, household economy, and publication — not gender-essential comparison.",
  },
  {
    id: "future-woolf-nishimura",
    title: "Woolf / Nishimura",
    titleJa: "出版・メディア・著者像",
    status: "Future comparison",
    note: "Publishing / media / author persona systems entering the day.",
  },
];

export const woolfRelatedWriters = [
  {
    id: "writer-hayashi",
    name: "Fumiko Hayashi",
    nameJa: "林芙美子",
    connection: "writing / publishing / maintenance",
    text: "執筆と生活維持が同じ一日に置かれる条件を、Observation Axis でつなぐ。",
    cta: "Open writer",
    href: "/writers/fumiko-hayashi",
    status: "available" as const,
  },
  {
    id: "writer-ichiyo",
    name: "Ichiyō Higuchi",
    nameJa: "樋口一葉",
    connection: "writing / household economy / publication",
    text: "創作・家計・公開が重なる入口。人物属性ではなく軸で関連づける。",
    cta: "Open writer",
    href: "/writers/ichiyo-higuchi",
    status: "available" as const,
  },
  {
    id: "writer-kafka",
    name: "Franz Kafka",
    nameJa: "フランツ・カフカ",
    connection: "writing / correspondence / time",
    text: "手紙と時間、そして文章が制度や他者を経る条件の比較候補。",
    cta: "Open writer",
    href: "/writers/franz-kafka",
    status: "available" as const,
  },
  {
    id: "writer-nishimura",
    name: "Kenji Nishimura",
    nameJa: "西村賢太",
    connection: "publishing / media / author persona",
    text: "出版とメディアが一日に入り込む様式を比較する候補。",
    cta: "Open writer",
    href: "/writers/kenji-nishimura",
    status: "available" as const,
  },
];
