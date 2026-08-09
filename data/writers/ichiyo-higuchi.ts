import type {
  ChronologyItem,
  EpistemicKind,
  WriterResearchQueueItem,
} from "@/lib/types";

export const ICHIYO_SLUG = "ichiyo-higuchi";
export const ICHIYO_WRITER_ID = "writer-ichiyo";

/** Interpretive header copy — not Fact. */
export const ichiyoLead = [
  "樋口一葉を加えるのは、有名人を増やすためではない。",
  "既存の書き手たちでは弱かった、家計と創作が同じ一日に置かれる明治東京の生活構造を観測するためである。",
  "文学は生活の上にあるのではなく、生活維持の内部に置かれている——その配置を、日記資料の索引化を通じて観測する。",
  "現時点では正式な日記書誌・頁・金額を登録していない。未索引は未索引のまま残す。",
];

export const whyIchiyo = {
  title: "Why Ichiyō Higuchi?",
  titleJa: "なぜ、樋口一葉なのか",
  paragraphs: [
    "Diary Observatoryに樋口一葉を加えることで、これまでの五人では弱かった観測軸が入る。",
    "明治東京。家計。家族扶養。商売。借金。住居。身体。文学修業。出版。女性ネットワークと文学者ネットワーク。短い生涯と高密度な記録の可能性。",
    "この追加は、作家の人数を増やすためではない。観測できる一日の構造を増やすためである。",
  ],
  caution:
    "「貧困の女性作家」へ還元しない。創作・出版・読書・网络・野心・若年期も同時に観測する。また「女性だから家事をした」と自動推定しない。",
};

export const ichiyoPrimaryQuestion = {
  en: "What does literary life look like when writing cannot be separated from household survival?",
  ja: "書くことと生活維持を分離できないとき、文学者の一日はどう見えるのか。",
};

export const ichiyoOverview = {
  title: "Writing inside household life",
  titleJa: "生活維持の内部にある創作",
  layers: [
    {
      kind: "fact" as EpistemicKind,
      text: "生年・没年は常用される年次として 1872–1896 を置く。詳細な書誌・日記版本の同定は未完了。",
    },
    {
      kind: "observation" as EpistemicKind,
      text: "創作と家計・家族・住居・商売・出版が、同じ人生時間のなかで重なり得る領域として見える——ただし日記条目の索引化以前に断定しない。",
    },
    {
      kind: "interpretation" as EpistemicKind,
      text: "Literature does not sit above life. It sits inside the maintenance of life.",
    },
  ],
};

export const lifeInfrastructure = {
  title: "Ichiyō Life Infrastructure",
  titleJa: "一葉の生活インフラ（概念図）",
  apex: { en: "Writing", ja: "創作" },
  supports: [
    { en: "Household maintenance", ja: "生活維持" },
    { en: "Family obligations", ja: "家族の義務" },
    { en: "Money", ja: "金銭" },
    { en: "Housing", ja: "住居" },
    { en: "Food", ja: "食" },
    { en: "Health", ja: "健康" },
    { en: "Publishing", ja: "出版" },
    { en: "Networks", ja: "人間関係" },
    { en: "Urban movement", ja: "都市移動" },
  ],
  thesis: {
    en: "Literature does not sit above life. It sits inside the maintenance of life.",
    ja: "文学は、生活の上にあるのではない。生活維持の内部に置かれている。",
  },
  relatedHref: "/observations/maintenance-is-not-background",
};

export const diaryCorpusStatus = {
  title: "Diary / Journal Corpus",
  titleJa: "日記資料",
  status: "Bibliographic research needed",
  statusJa: "書誌研究が必要",
  futureSlugCandidate: "ichiyo-nikki",
  notes: [
    "正式な Diary Work 名・slug・版・巻・頁は、確認済み書誌のあとで確定する。",
    "候補ルート /diaries/ichiyo-nikki は仮記号であり、現時点では日記ページを生成しない。",
    "Edition / SourceCapture / Entry は 0。未索引を「生活がなかった」と混同しない。",
  ],
  meta: [
    { label: "Diary Work", value: "Research needed" },
    { label: "Edition", value: "Not indexed" },
    { label: "Entry", value: "0" },
    { label: "SourceCapture", value: "0" },
    { label: "Page references", value: "Research needed" },
  ],
};

export const writingMoneyPanel = {
  title: "Writing / Money",
  titleJa: "創作と金銭",
  items: [
    "Writing work",
    "Publication",
    "Payment",
    "Household expenditure",
    "Debt",
    "Time cost",
    "Unknown labor",
  ],
  caution:
    "「貧困だったから作品Xを書いた」という因果を資料なしに作らない。金額は確認済み一次資料のみ登録する（現在 0 件）。",
};

export const householdEconomyPanel = {
  title: "Household Economy",
  titleJa: "家計",
  candidateCategories: [
    "Income",
    "Publishing income",
    "Household expenditure",
    "Rent",
    "Debt",
    "Borrowing",
    "Retail income",
    "Food cost",
    "Medical cost",
    "Other",
  ],
  indexedCount: 0,
  note: "MoneyRecord は確認済み金額だけを載せる。架空金額は禁止。現在の indexed 件数は 0。",
};

export const familyMaintenancePanel = {
  title: "Family Maintenance",
  titleJa: "家族の生活維持",
  categories: [
    "food",
    "cleaning",
    "shopping",
    "household-management",
    "family-care",
    "money-management",
    "retail-work",
    "correspondence",
    "publishing",
    "other",
  ],
  actorRule:
    "Actor が確認できない場合は unknown。「女性だから本人がやった」と自動推定しない。",
  indexedCount: 0,
};

export const retailPanel = {
  title: "Shop / Commerce",
  titleJa: "商売",
  note: "商売記録が確認できた場合に備え RetailRecord 型を用意した。具体的な店・商品・金額は一次資料確認後のみ登録する。現在 0 件。",
  indexedCount: 0,
};

export const timeAllocationPanel = {
  title: "Time Allocation",
  titleJa: "一日の時間配分（観測枠）",
  slots: [
    "Writing",
    "Household",
    "Family",
    "Commerce",
    "Visitors",
    "Movement",
    "Reading",
    "Correspondence",
    "Rest",
    "Unknown",
  ],
  note: "正確な時刻・割合が不明なら捏造しない。Presence / sequence として扱う。",
};

export const youngWriterAxes = {
  title: "Young Writer Problem",
  titleJa: "年齢構造の差異",
  axes: [
    "Age at record",
    "Life stage",
    "Household responsibility",
    "Publication stage",
    "Income dependence",
    "Health",
    "Archive density",
  ],
  note: "年齢による価値判断をしない。既存 Writer 群との年齢構造の差を、比較軸として残す。",
};

export const genderWithoutEssentialism = {
  title: "Gender without essentialism",
  titleJa: "本質主義なきジェンダー観測",
  question: {
    en: "Which maintenance work is visible, and which remains undocumented?",
    ja: "どの生活維持労働が記録され、どの労働が記録されていないのか。",
  },
  avoid: "「女性作家だから家事」という設計にしない。林芙美子追加時の設計思想を継承する。",
};

export const ichiyoTimeline: ChronologyItem[] = [
  {
    year: 1872,
    event: "Birth (commonly cited year)",
    eventJa: "出生（常用年次）",
    kind: "fact",
    verificationStatus: "partial",
  },
  {
    year: 1890,
    yearLabel: "Literary years",
    event: "Writing / publication activity — dates and titles pending bibliography",
    eventJa: "創作・発表活動（年月日・書名・版は書誌確認後）",
    kind: "observation",
    verificationStatus: "needs-source",
  },
  {
    year: 1896,
    event: "Death (commonly cited year)",
    eventJa: "没（常用年次）",
    kind: "fact",
    verificationStatus: "partial",
  },
];

export const unknownRegister = [
  { label: "Exact daily expenses", status: "Not indexed" },
  { label: "Daily working hours", status: "Not indexed" },
  { label: "Domestic labor actors", status: "Not indexed" },
  { label: "Complete shop transactions", status: "Not indexed" },
  { label: "Body data", status: "Not indexed" },
  { label: "Food records", status: "Not indexed" },
  { label: "Edition", status: "Research needed" },
  { label: "Page references", status: "Research needed" },
  { label: "Housing addresses / periods", status: "Not indexed" },
  { label: "Visitor / correspondence roster", status: "Not indexed" },
];

export const provenanceStatus = [
  { label: "Writer identity", status: "Partial — commonly cited life years" },
  { label: "Diary Work", status: "Research needed" },
  { label: "Edition", status: "Not indexed" },
  { label: "Entry", status: "0" },
  { label: "SourceCapture", status: "0" },
];

export const ichiyoResearchQueue: WriterResearchQueueItem[] = [
  {
    id: "rq-ichiyo-1",
    title: "Establish authoritative diary / journal bibliography",
    titleJa: "日記・自己記録の権威ある書誌の確定",
    type: "bibliography",
    priority: 1,
    status: "source-needed",
    sourceNeeded: true,
    note: "Do not invent edition titles, volumes, or page numbers.",
  },
  {
    id: "rq-ichiyo-2",
    title: "Identify editions eligible for fair citation",
    titleJa: "引用可能な版の同定",
    type: "edition",
    priority: 1,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-ichiyo-3",
    title: "Index household / money mentions with page evidence",
    titleJa: "家計・金銭記述の頁付き索引",
    type: "money",
    priority: 2,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-ichiyo-4",
    title: "Commerce / shop evidence review",
    titleJa: "商売関連記述の証拠レビュー",
    type: "retail",
    priority: 2,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-ichiyo-5",
    title: "Housing and movement timeline from primary sources",
    titleJa: "一次資料に基づく住居・移動年表",
    type: "housing",
    priority: 2,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-ichiyo-6",
    title: "Literary and social network nodes (named only when sourced)",
    titleJa: "文学・社交ネットワーク（出典ある名前のみ）",
    type: "network",
    priority: 3,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-ichiyo-7",
    title: "Future comparison dossiers: Ichiyō–Hayashi / Ichiyō–Kafū",
    titleJa: "将来比較の資料整理（一葉／芙美子、一葉／荷風）",
    type: "comparison",
    priority: 3,
    status: "queued",
    sourceNeeded: true,
  },
];

export const relatedObservations = [
  {
    href: "/observations/maintenance-is-not-background",
    title: "生活維持は、文学の背景ではない",
    note: "Writing inside maintenance of life.",
  },
  {
    href: "/observations/the-price-of-an-ordinary-day",
    title: "普通の一日の値段",
    note: "Money as observation layer — without inventing prices.",
  },
];

export const futureComparisons = [
  {
    id: "future-ichiyo-hayashi",
    title: "Ichiyō / Hayashi",
    titleJa: "書くこと、食べること、家を持つこと",
    altTitle: "Two Women, Two Urban Economies",
    status: "Future comparison",
    note: "Compare writing, food, housing, household economy — not 「二人の貧しい女性作家」へ還元しない。",
  },
  {
    id: "future-ichiyo-kafu",
    title: "Ichiyō / Kafū",
    titleJa: "明治東京の創作と生活条件",
    status: "Future comparison",
    note: "Tokyo, housing, money, writing, gender, household labor, publication, urban movement — 「明治 vs 大正」単純比較にしない。",
  },
  {
    id: "future-ichiyo-nishimura",
    title: "Ichiyō / Nishimura",
    titleJa: "金銭圧力と出版の条件",
    status: "Future comparison",
    note: "Money structure / publishing system / household structure の違いを見る。「貧乏作家」まとめにしない。",
  },
];

export const ichiyoRelatedWriters = [
  {
    id: "writer-hayashi",
    name: "Fumiko Hayashi",
    nameJa: "林芙美子",
    connection: "Writing · food · housing · household life",
    text: "将来の強い比較。生活維持と創作の重なりを、時代と都市経済を違えて読む。",
    cta: "Open writer",
    href: "/writers/fumiko-hayashi",
    status: "available" as const,
  },
  {
    id: "writer-kafu",
    name: "Kafū Nagai",
    nameJa: "永井荷風",
    connection: "Tokyo · housing · writing · urban movement",
    text: "同じ都市の異なる生活条件。単純な時代対比には落とさない。",
    cta: "Open writer",
    href: "/writers/kafu-nagai",
    status: "available" as const,
  },
  {
    id: "writer-nishimura",
    name: "Kenji Nishimura",
    nameJa: "西村賢太",
    connection: "Writing · money pressure · publishing · housing",
    text: "金銭と出版の圧力を、「貧乏作家」ラベルではなく構造として比較する候補。",
    cta: "Open writer",
    href: "/writers/kenji-nishimura",
    status: "available" as const,
  },
  {
    id: "writer-kafka",
    name: "Franz Kafka",
    nameJa: "フランツ・カフカ",
    connection: "Who controls the writer's time?",
    text: "家計義務と有償労働という異なる時間支配。男女二分法ではなく、時間構造として比較する候補。",
    cta: "Open writer",
    href: "/writers/franz-kafka",
    status: "available" as const,
  },
];

export const visibleInvisible = {
  title: "What the diary may make visible",
  titleJa: "日記が見せうるもの／見せないもの",
  visibleCandidates: [
    "Writing practice",
    "Publication attempts",
    "Household money pressure",
    "Family obligations",
    "Visitors and correspondence",
    "Housing movement",
  ],
  unknownCandidates: [
    "Unrecorded domestic actors",
    "Exact wages and debts",
    "Complete shop ledgers",
    "Bodily detail density",
    "Private conversations without diary residue",
  ],
  note: "Visibility depends on what was written and what survives in editions — not on what we assume women did.",
};

export const sectionLabels = {
  housing: {
    title: "Housing",
    titleJa: "住居",
    body: "住所・期間・家賃の索引は未整備。史料確認後に HousingRecord を追加する。",
  },
  food: {
    title: "Food",
    titleJa: "食",
    body: "食事記録は未索引。金額・品目を推測で埋めない。",
  },
  body: {
    title: "Body",
    titleJa: "身体",
    body: "健康・疲労・病気の記述は、頁付き証拠がある場合にのみ BodyRecord 化する。",
  },
  network: {
    title: "Literary Network",
    titleJa: "文学者ネットワーク",
    body: "名前付きノードは出典確認後のみ。創作指導・同人・編集者・女性ネットワークを分けて観測する。",
  },
  visitors: {
    title: "Visitors / Correspondence",
    titleJa: "来客・書簡",
    body: "来客と書簡は生活維持と文学社会の接点になりうるが、名簿は未索引。",
  },
  movement: {
    title: "Urban Movement",
    titleJa: "都市移動",
    body: "明治東京内の移動は、確認済み経路だけを MovementRecord にする。",
  },
};

export const writerConditions = [
  { id: "environment", label: "Environment", writer: "Kafū" },
  { id: "media", label: "Media", writer: "Nishimura" },
  { id: "labor", label: "Labor", writer: "Bukowski" },
  { id: "maintenance", label: "Maintenance", writer: "Hayashi" },
  { id: "performance", label: "Performance", writer: "Roppa" },
  { id: "household-economy", label: "Household Economy", writer: "Ichiyō" },
  { id: "time", label: "Time", writer: "Kafka" },
] as const;

export const primaryConditionLabel = {
  id: "household-economy" as const,
  en: "Household Economy",
  ja: "家計／生活経済",
};
