import type {
  ChronologyItem,
  EntityStatus,
  EpistemicKind,
  LifeTextRelation,
  Source,
  SurvivalSummaryData,
} from "@/lib/types";
import { captainDiaryCard } from "@/data/diaries/captain-is-out-to-lunch";

export const BUKOWSKI_SLUG = "charles-bukowski";
export const BUKOWSKI_WRITER_ID = "writer-bukowski";

export const bukowskiLead = [
  "チャールズ・ブコウスキーの文章には、作家として成功する以前の長い労働が残っている。",
  "郵便局。",
  "安い部屋。",
  "酒場。",
  "競馬場。",
  "零細文芸誌。",
  "拒絶された原稿。",
  "日記、手紙、詩、小説の境界を越えながら、実際に生きた生活は、ヘンリー・チナスキーという人物へ変形されていった。",
];

export const bukowskiOverview = {
  title: "A life divided between work and writing",
  titleJa: "労働と執筆に分けられた人生",
  layers: [
    {
      kind: "fact" as EpistemicKind,
      text: "ブコウスキーは、早い時期から継続的に作家として生活できたわけではない。さまざまな仕事を経験し、長期間、郵便局で働いた。",
    },
    {
      kind: "observation" as EpistemicKind,
      text: "勤務後に飲み、競馬へ行き、夜に書く。その生活は、後に詩、手紙、小説、日記へ繰り返し現れる。",
    },
    {
      kind: "interpretation" as EpistemicKind,
      text: "作品の背後には、文学的な姿勢だけでなく、賃金労働、疲労、時間不足、酒、病気を抱えた身体がある。",
    },
  ],
};

export const bukowskiTimeline: ChronologyItem[] = [
  {
    year: 1920,
    event: "Born in Germany.",
    eventJa: "ドイツで生まれる。",
    kind: "fact",
    verificationStatus: "partial",
  },
  {
    year: 1923,
    yearLabel: "Childhood",
    event: "Moves to the United States with family. Exact age and route — bibliographic confirmation needed.",
    eventJa: "家族とともにアメリカへ移る。詳細な年齢・経路は書誌確認後。",
    kind: "fact",
    verificationStatus: "needs-source",
  },
  {
    year: 1930,
    yearLabel: "Los Angeles",
    event: "Grows up in Los Angeles.",
    eventJa: "ロサンゼルスで成長する。",
    kind: "fact",
    verificationStatus: "partial",
  },
  {
    year: 1945,
    yearLabel: "Adult years",
    event: "Years of varied labor and magazine submission life.",
    eventJa: "さまざまな労働と投稿生活。",
    kind: "observation",
    verificationStatus: "needs-source",
  },
  {
    year: 1952,
    yearLabel: "Postal work",
    event:
      "Works for the postal system in Los Angeles. Exact employment period — source verification needed.",
    eventJa: "郵便局で勤務。正確な勤務期間は出典確認後。",
    kind: "fact",
    verificationStatus: "needs-source",
  },
  {
    year: 1960,
    yearLabel: "Small press years",
    event: "Relations with small magazines and independent publishers.",
    eventJa: "小規模文芸誌や出版者との関係。",
    kind: "observation",
    verificationStatus: "needs-source",
  },
  {
    year: 1970,
    yearLabel: "1970s",
    event:
      "Transition toward full-time writing. Exact contracts and months — confirm after sources.",
    eventJa: "専業作家へ移行。正確な契約内容、年月は確認後。",
    kind: "fact",
    verificationStatus: "needs-source",
  },
  {
    year: 1980,
    yearLabel: "Later years",
    event: "Novels, poems, readings, international recognition.",
    eventJa: "小説、詩、朗読、国際的評価。",
    kind: "observation",
    verificationStatus: "partial",
  },
  {
    year: 1994,
    event: "Dies.",
    eventJa: "死去。",
    kind: "fact",
    verificationStatus: "partial",
  },
  {
    year: 2026,
    event:
      "Diary Observatory indexes labor, city, body, and the conversion into literature.",
    eventJa:
      "Diary Observatoryで、生活、都市、身体、作品の変換を観測する。",
    kind: "observation",
    verificationStatus: "verified",
  },
];

export const bukowskiAxes = [
  {
    id: "labor",
    label: "Labor",
    labelJa: "郵便局、単純労働、勤務時間、疲労",
    items: ["Postal work", "Shifts", "Fatigue", "Wages"],
  },
  {
    id: "writing",
    label: "Writing",
    labelJa: "タイプライター、投稿、拒絶、夜の執筆",
    items: ["Typewriter", "Submission", "Rejection", "Night writing"],
  },
  {
    id: "alcohol",
    label: "Alcohol",
    labelJa: "酒場、飲酒、身体、社交、孤独",
    items: ["Bars", "Drinking", "Body", "Solitude"],
  },
  {
    id: "racing",
    label: "Horse Racing",
    labelJa: "競馬場、賭け、移動、金銭、反復",
    items: ["Track", "Bet", "Waiting", "Repetition"],
  },
  {
    id: "housing",
    label: "Housing",
    labelJa: "安宿、アパート、部屋、家",
    items: ["Rooms", "Rent", "Cheap lodging"],
  },
  {
    id: "money",
    label: "Money",
    labelJa: "賃金、賭け金、原稿料、出版契約",
    items: ["Wages", "Bets", "Fees", "Contracts"],
  },
  {
    id: "small-press",
    label: "Small Press",
    labelJa: "小規模雑誌、編集者、独立出版",
    items: ["Magazines", "Editors", "Mail", "Limited print"],
  },
  {
    id: "body",
    label: "Body",
    labelJa: "疲労、病気、老い、傷、欲望",
    items: ["Fatigue", "Illness", "Aging", "Desire"],
  },
  {
    id: "los-angeles",
    label: "Los Angeles",
    labelJa: "郵便局、酒場、競馬場、道路、住宅地",
    items: ["Post office", "Bars", "Tracks", "Streets"],
  },
  {
    id: "relationships",
    label: "Relationships",
    labelJa: "恋人、友人、編集者、読者",
    items: ["Lovers", "Friends", "Editors", "Readers"],
  },
  {
    id: "lived-written",
    label: "Lived / Written / Fictionalized",
    labelJa: "実生活、記録、フィクション化",
    items: ["Lived", "Recorded", "Chinaski"],
  },
];

export const bukowskiRecordCards = [
  captainDiaryCard,
  {
    title: "Letters",
    titleJa: "書簡集",
    type: "Letter collections",
    periodLabel: "Edition details needed",
    language: "English",
    description: "書簡。日記とは区別して索引化する。正式書誌は確認後。",
    statusLabel: "Related record",
    verificationLabel: "Edition details needed",
    href: "/writers/charles-bukowski#records",
  },
  {
    title: "Poems",
    titleJa: "詩",
    type: "Poetry",
    periodLabel: "Bibliographic research needed",
    language: "English",
    description: "詩。日記・小説と同一視しない。",
    statusLabel: "Related record",
    verificationLabel: "Edition details needed",
    href: "/writers/charles-bukowski#records",
  },
  {
    title: "Autobiographical fiction",
    titleJa: "自伝的フィクション",
    type: "Autobiographical fiction",
    periodLabel: "Titles confirmed after bibliography",
    language: "English",
    description:
      "自伝的フィクション（例: Post Office 等）。実生活との一対一対応を断定しない。",
    statusLabel: "Related record",
    verificationLabel: "Edition details needed",
    href: "/writers/charles-bukowski#records",
  },
];

export const lifeTextColumns = {
  title: "Lived / Written / Fictionalized",
  titleJa: "生きたこと、書いたこと、物語に変えたこと",
  lived: {
    label: "Lived",
    labelJa: "実際に生きた生活",
    items: [
      "郵便局勤務",
      "酒場",
      "競馬",
      "投稿",
      "ロサンゼルス",
      "老い",
    ],
  },
  written: {
    label: "Written",
    labelJa: "日記・手紙・詩に記録されたこと",
    items: [
      "労働の疲労",
      "酒",
      "賭け",
      "執筆",
      "文学への不信",
      "名声への距離",
    ],
  },
  fictionalized: {
    label: "Fictionalized",
    labelJa: "小説へ変形されたこと",
    items: [
      "Henry Chinaski",
      "Post office life",
      "Bar culture",
      "Racing",
      "Poverty",
      "Relationships",
    ],
  },
  caution:
    "作品と実生活の一対一対応を断定しない。Labels: Fact / Documented parallel / Interpretation / Unverified resemblance.",
};

export const lifeTextRelations: LifeTextRelation[] = [
  {
    id: "ltr-postal-chinaski",
    writerId: BUKOWSKI_WRITER_ID,
    livedContext: "Postal labor years",
    sourceRecordIds: [],
    fictionalWorkIds: ["work-post-office"],
    fictionalEntityIds: ["entity-henry-chinaski"],
    relationType: "interpreted",
    summary:
      "Postal work later transformed into autobiographical fiction. Exact facility and dates remain source-needed; Chinaski is fictional.",
    verificationStatus: "needs-source",
    sourceIds: ["src-bukowski-labor"],
  },
  {
    id: "ltr-racing",
    writerId: BUKOWSKI_WRITER_ID,
    livedContext: "Racetrack attendance as repeated practice",
    sourceRecordIds: [],
    fictionalWorkIds: [],
    fictionalEntityIds: [],
    relationType: "probable",
    summary:
      "Racing appears across lived routines, journals, and fiction — density per work requires edition checks.",
    verificationStatus: "needs-source",
    sourceIds: ["src-bukowski-racing"],
  },
];

export const workingBody = {
  title: "The working body",
  titleJa: "働く身体",
  paragraphs: [
    "ブコウスキーの文学を、酒と破滅だけで読むと、その前にあった労働が見えなくなる。",
    "立つ。",
    "運ぶ。",
    "仕分ける。",
    "時間に管理される。",
    "疲れて帰る。",
    "その後に書く。",
    "作品に現れる倦怠や怒りは、抽象的な反抗だけではなく、賃金労働を経験した身体から生まれている。",
  ],
  axes: [
    { id: "shift", label: "Shift", labelJa: "勤務" },
    { id: "standing", label: "Standing", labelJa: "立ち仕事" },
    { id: "repetition", label: "Repetition", labelJa: "反復作業" },
    { id: "fatigue", label: "Fatigue", labelJa: "疲労" },
    { id: "night", label: "Night writing", labelJa: "夜の執筆" },
    { id: "sleep", label: "Sleep", labelJa: "睡眠" },
    { id: "pain", label: "Pain", labelJa: "痛み" },
    { id: "recovery", label: "Recovery", labelJa: "酒、休息、競馬" },
  ],
  note: "具体的な作業内容や健康影響は、原典で確認できる範囲だけをFactにする。医学的診断を推測しない。",
};

export const postalWork = {
  title: "The post office years",
  titleJa: "郵便局で働いた時間",
  employer:
    "United States Postal Service or predecessor institution — confirm by period",
  role: "Postal worker — detailed job title after sources",
  period: "Source verification needed",
  relationToWriting: "Later transformed into autobiographical fiction",
  paragraphs: [
    "郵便局は、作家になるまでの空白期間ではない。",
    "時間、規則、疲労、同僚、管理、生活費を得ることが、その後の文章の重要な素材になった。",
  ],
  entityId: "entity-la-post-office",
};

export const smallPressFlow = {
  title: "Before the platform, there was the small press",
  titleJa: "プラットフォーム以前の小出版",
  steps: [
    { label: "Writer", labelJa: "作家" },
    { label: "Typed manuscript", labelJa: "タイプ原稿" },
    { label: "Postal submission", labelJa: "郵送投稿" },
    { label: "Small magazine", labelJa: "小規模文芸誌" },
    { label: "Editor / publisher", labelJa: "編集者・出版者" },
    { label: "Reader", labelJa: "少数の読者" },
  ],
  paragraphs: [
    "ブコウスキーの作品は、最初から大手出版社や巨大な読者層へ届いたわけではない。",
    "小さな雑誌。",
    "郵送された原稿。",
    "編集者との手紙。",
    "限られた部数。",
    "この遅く、小さな回路が、作家としての時間を支えた。",
    "現在のSNS、Substack、動画、生成AI時代の自己出版と比較できる。ただし、過去の小出版を理想化しない。",
  ],
};

export const placeCategories = [
  { id: "workplaces", label: "Workplaces", labelJa: "職場" },
  { id: "bars", label: "Bars", labelJa: "酒場" },
  { id: "racetracks", label: "Racetracks", labelJa: "競馬場" },
  { id: "rooms", label: "Rooms", labelJa: "部屋、アパート、安宿" },
  { id: "publishers", label: "Publishers", labelJa: "出版社" },
  { id: "streets", label: "Streets", labelJa: "街路" },
  { id: "hospitals", label: "Hospitals", labelJa: "病院" },
  { id: "venues", label: "Reading venues", labelJa: "朗読会場" },
];

/** Confirmed / structured place cards — Musso excluded until diary citation. */
export const bukowskiPlaces = [
  {
    id: "entity-los-angeles",
    name: "Los Angeles",
    nameJa: "ロサンゼルス",
    type: "City",
    role: "Primary city",
    period: "Life span",
    verificationStatus: "verified" as const,
    href: "/entities/los-angeles",
    coming: false,
  },
  {
    id: "entity-la-post-office",
    name: "Los Angeles Post Office",
    nameJa: "ロサンゼルスの郵便局",
    type: "Workplace / institution",
    role: "Labor",
    period: "Employment years — source needed",
    verificationStatus: "needs-source" as const,
    href: "/entities/los-angeles-post-office",
    coming: false,
  },
  {
    id: "entity-hollywood-park",
    name: "Hollywood Park",
    nameJa: "ハリウッド・パーク",
    type: "Racetrack",
    role: "Racing / repetition",
    period: "Appearances — density source-needed",
    verificationStatus: "verified" as const,
    href: "/entities/hollywood-park",
    coming: false,
    statusNote: "Track closed (2013) — diary link density pending",
  },
  {
    id: "small-press",
    name: "Small press",
    nameJa: "小出版エコシステム",
    type: "Publishing ecosystem",
    role: "Submission circuit",
    period: "Pre-platform years",
    verificationStatus: "needs-source" as const,
    href: "/observations/before-the-platform-small-press",
    coming: false,
  },
];

export const racingRepetition = {
  title: "Racing as repetition",
  titleJa: "反復としての競馬",
  paragraphs: [
    "競馬は、一度の劇的な勝敗ではなく、繰り返し戻る行動として記録される。",
    "出かける。",
    "賭ける。",
    "待つ。",
    "負ける。",
    "時に勝つ。",
    "帰る。",
    "また書く。",
    "競馬は、金銭、時間、偶然、期待、失敗を同じ場所へ集める。",
  ],
  axes: [
    { id: "track", label: "Track", labelJa: "競馬場" },
    { id: "bet", label: "Bet", labelJa: "賭け金" },
    { id: "winloss", label: "Win / Loss", labelJa: "勝敗" },
    { id: "travel", label: "Travel", labelJa: "移動" },
    { id: "waiting", label: "Waiting", labelJa: "待ち時間" },
    { id: "mood", label: "Mood", labelJa: "感情" },
    { id: "after", label: "Writing after racing", labelJa: "競馬後の執筆" },
  ],
  statusEn: "Indexing in progress",
  statusJa: "索引化中 — 集計値は実数確認後",
};

export const alcoholMyth = {
  title: "Alcohol and the myth of the writer",
  titleJa: "酒と、作家の神話",
  paragraphs: [
    "ブコウスキーは、飲酒する作家として神話化されてきた。",
    "しかし酒を、個性や反抗の記号としてだけ扱うと、身体、依存、健康、金銭、孤独、社交の複雑さが消える。",
    "Diary Observatoryでは、酒を美化も道徳化もせず、生活を構成した反復行動として観測する。",
  ],
  layers: [
    {
      kind: "fact" as EpistemicKind,
      label: "Fact",
      text: "何を、どこで、どれだけ飲んだか — 確認できる場合のみ。",
    },
    {
      kind: "observation" as EpistemicKind,
      label: "Observation",
      text: "飲酒が時間、金銭、身体、関係へ与えた影響。",
    },
    {
      kind: "interpretation" as EpistemicKind,
      label: "Interpretation",
      text: "飲酒が作家像としてどのように消費されたか。",
    },
  ],
  caution: "医学的診断や依存症の断定を推測で行わない。",
};

export const moneyAndTime = {
  title: "The price of a writing life",
  titleJa: "書く生活の値段",
  items: [
    { id: "wages", label: "Wages", labelJa: "賃金" },
    { id: "rent", label: "Rent", labelJa: "家賃" },
    { id: "alcohol", label: "Alcohol", labelJa: "酒代" },
    { id: "racing", label: "Racing", labelJa: "賭け金" },
    { id: "postage", label: "Postage", labelJa: "投稿の郵送料" },
    { id: "manuscripts", label: "Manuscripts", labelJa: "紙、タイプライター、インク" },
    { id: "payments", label: "Payments", labelJa: "原稿料、印税" },
    { id: "support", label: "Support", labelJa: "出版者からの支援" },
  ],
  paragraphs: [
    "作家になる物語は、才能や発見だけでは成立しない。",
    "家賃を払う。",
    "酒を買う。",
    "競馬へ行く。",
    "原稿を郵送する。",
    "仕事を辞められるだけの収入を得る。",
    "日記や手紙に残る金額は、文学が成立する生活条件を示す。",
  ],
  note: "未確認の金額や現代換算を作らない。",
};

export const lateDiary = {
  title: "The late diary",
  titleJa: "晩年の日記",
  workTitle:
    "The Captain Is Out to Lunch and the Sailors Have Taken Over the Ship",
  themes: [
    { id: "aging", label: "Aging", labelJa: "老い" },
    { id: "illness", label: "Illness", labelJa: "病気" },
    { id: "fame", label: "Fame", labelJa: "名声" },
    { id: "writing", label: "Writing", labelJa: "執筆" },
    { id: "racing", label: "Racing", labelJa: "競馬" },
    { id: "death", label: "Death", labelJa: "死への接近" },
    { id: "routine", label: "Ordinary routine", labelJa: "変わらない日常" },
  ],
  paragraphs: [
    "成功後も、生活が完全に別のものへ変わるわけではない。",
    "競馬へ行く。",
    "書く。",
    "人を避ける。",
    "名声について考える。",
    "身体の衰えを感じる。",
    "晩年の日記は、破滅的な若者の神話ではなく、老いていく作家の時間を記録する。",
  ],
  note: "正式なEntry日付が確認できるまで、架空のSelected dayを作らない。",
};

export const selectedRecord = {
  emptyEn: "No dated record indexed yet.",
  emptyJa: "日付を確認できた記録は、まだ索引化されていません。",
  primarySource:
    "The Captain Is Out to Lunch and the Sailors Have Taken Over the Ship",
  status: "Bibliographic verification needed",
  nextStep: "Confirm edition, dated entries, and source rights.",
  futureUrlPattern: "/entries/YYYY-MM-DD-charles-bukowski",
};

export const bodyAcrossSuccess = {
  title: "The body before and after success",
  titleJa: "成功の前後にある身体",
  before: [
    "賃金労働",
    "投稿",
    "拒絶",
    "疲労",
    "生活費",
    "安い部屋",
  ],
  after: [
    "専業執筆",
    "読者",
    "朗読",
    "国際的評価",
    "老い",
    "病気",
  ],
  paragraphs: [
    "成功は、身体を過去から切り離さない。",
    "労働した記憶。",
    "傷ついた身体。",
    "飲酒の習慣。",
    "反復する競馬。",
    "名声を得たあとも、以前の生活が文章と身体に残る。",
  ],
};

export const nishimuraComparison = {
  title: "Tokyo and Los Angeles",
  titleJa: "東京とロサンゼルス",
  left: {
    name: "Kenji Nishimura",
    items: ["出版社", "古書店", "テレビ", "酒", "私小説", "平成東京"],
  },
  right: {
    name: "Charles Bukowski",
    items: [
      "郵便局",
      "小出版",
      "競馬場",
      "酒場",
      "自伝的フィクション",
      "ロサンゼルス",
    ],
  },
  shared: [
    "酒",
    "貧困経験",
    "怒り",
    "孤独",
    "都市",
    "私生活の文学化",
    "作家像の消費",
    "書く身体",
  ],
  differences: [
    "西村：出版・文学賞・テレビ文化",
    "ブコウスキー：労働・小出版・郵送投稿文化",
  ],
  href: "/compare/nishimura-bukowski" as string | null,
  cta: "Compare Nishimura and Bukowski",
  comingLabel: null as string | null,
};

export const threeUrbanDiarists = {
  title: "Three urban diarists",
  titleJa: "三人の都市記録者",
  href: "/compare/urban-diarists",
  cta: "Open Three Urban Diarists",
  writers: [
    {
      name: "Kafū Nagai",
      items: "Tokyo / walking / weather / garden / war",
      href: "/writers/kafu-nagai",
    },
    {
      name: "Kenji Nishimura",
      items: "Tokyo / publishing / television / bookstores",
      href: "/writers/kenji-nishimura",
    },
    {
      name: "Charles Bukowski",
      items: "Los Angeles / labor / bars / racing",
      href: "/writers/charles-bukowski",
    },
  ],
  paragraphs: [
    "荷風は、歩きながら近代東京を記録した。",
    "西村は、出版社とメディアを移動しながら平成東京を記録した。",
    "ブコウスキーは、労働、酒場、競馬場を往復しながらロサンゼルスを記録した。",
    "三人とも都市史を書こうとはしなかった。",
    "しかし、自分の一日を書いた結果、都市の生活条件が残った。",
  ],
};

export const primaryTexts = [
  {
    id: "journal",
    label: "Diary / journal",
    labelJa: "日記的記録",
    note: "The Captain Is Out to Lunch… — Edition details needed / Rights verification needed",
  },
  {
    id: "letters",
    label: "Letters",
    labelJa: "書簡",
    note: "Edition details needed",
  },
  {
    id: "poetry",
    label: "Poetry",
    labelJa: "詩",
    note: "Edition details needed",
  },
  {
    id: "autofiction",
    label: "Autobiographical fiction",
    labelJa: "自伝的フィクション",
    note: "Post Office and related titles — imprint confirmation pending; do not invent ISBN",
  },
  {
    id: "interviews",
    label: "Interviews",
    labelJa: "インタビュー",
    note: "Source verification needed",
  },
  {
    id: "biographies",
    label: "Biographies",
    labelJa: "伝記",
    note: "Source verification needed — no invented titles",
  },
];

export const bukowskiRelatedEntities = [
  {
    id: "entity-los-angeles",
    name: "Los Angeles",
    nameJa: "ロサンゼルス",
    type: "City",
    nature: "real" as const,
    note: "Primary city",
    href: "/entities/los-angeles",
    coming: false,
  },
  {
    id: "entity-la-post-office",
    name: "Los Angeles postal system",
    nameJa: "郵便制度 / 職場",
    type: "Institution / workplace",
    nature: "real" as const,
    note: "詳細確認中 — specific facility unknown",
    href: "/entities/los-angeles-post-office",
    coming: false,
  },
  {
    id: "entity-hollywood-park",
    name: "Hollywood Park",
    nameJa: "ハリウッド・パーク",
    type: "Racetrack",
    nature: "real" as const,
    note: "Closed as racetrack — diary density source-needed",
    href: "/entities/hollywood-park",
    coming: false,
  },
  {
    id: "small-press",
    name: "Small press",
    nameJa: "小出版",
    type: "Publishing ecosystem",
    nature: "real" as const,
    note: "Coming entity cluster",
    href: null,
    coming: true,
  },
  {
    id: "entity-henry-chinaski",
    name: "Henry Chinaski",
    nameJa: "ヘンリー・チナスキー",
    type: "Fictional character",
    nature: "fictional" as const,
    note: "Autobiographical alter ego — not a real person",
    href: "/entities/henry-chinaski",
    coming: false,
  },
];

export const bukowskiRelatedWriters = [
  {
    id: "writer-nishimura",
    name: "Kenji Nishimura",
    nameJa: "西村賢太",
    connection: "Alcohol / autofiction / urban poverty / writing body",
    text: "西村が平成東京の出版・テレビ文化を書いたように、ブコウスキーはロサンゼルスの労働、酒場、競馬、貧困、老いを書いた。",
    cta: "Open Nishimura Writer Observatory",
    href: "/writers/kenji-nishimura",
    status: "available" as const,
  },
  {
    id: "writer-kafu",
    name: "Kafū Nagai",
    nameJa: "永井荷風",
    connection: "Urban diarist / city as lived condition",
    text: "荷風は歩きながら近代東京を記録した。ブコウスキーは労働と酒場と競馬場を往復しながらロサンゼルスを記録した。",
    cta: "Open Kafū Writer Observatory",
    href: "/writers/kafu-nagai",
    status: "available" as const,
  },
  {
    id: "writer-hayashi",
    name: "Fumiko Hayashi",
    nameJa: "林芙美子",
    connection: "Work before recognition / rooms / food / women’s labor",
    text: "評価される前の労働と投稿。林は家事・下宿・版の変化を、ブコウスキーは郵便労働と小出版を軸にする。",
    cta: "Open Hayashi Writer Observatory",
    href: "/writers/fumiko-hayashi",
    status: "available" as const,
  },
  {
    id: "writer-roppa",
    name: "Roppa Furukawa",
    nameJa: "古川ロッパ",
    connection: "Laboring body before / after public demand",
    text: "賃金労働と上演労働。身体の消耗と回復を、別産業の条件として読む。",
    cta: "Open Roppa Writer Observatory",
    href: "/writers/furukawa-roppa",
    status: "available" as const,
  },
];

export const bukowskiRelatedPages = [
  {
    group: "Diary",
    title: "The Captain Is Out to Lunch…",
    href: "/diaries/captain-is-out-to-lunch",
  },
  {
    group: "Writer",
    title: "Kenji Nishimura",
    href: "/writers/kenji-nishimura",
  },
  {
    group: "Writer",
    title: "Kafū Nagai",
    href: "/writers/kafu-nagai",
  },
  {
    group: "Writer",
    title: "Fumiko Hayashi",
    href: "/writers/fumiko-hayashi",
  },
  {
    group: "Observation",
    title: "The Manuscripts That Were Not Chosen",
    href: "/observations/the-manuscripts-that-were-not-chosen",
  },
  {
    group: "Observation",
    title: "Where Did the Editor Go?",
    href: "/observations/where-did-the-editor-go",
  },
  {
    group: "Observation",
    title: "Before the Platform, There Was the Small Press",
    href: "/observations/before-the-platform-small-press",
  },
  {
    group: "Observation",
    title: "生活維持は、文学の背景ではない",
    href: "/observations/maintenance-is-not-background",
  },
  {
    group: "Observation",
    title: "The Price of an Ordinary Day",
    href: "/observations/the-price-of-an-ordinary-day",
  },
  {
    group: "Observation",
    title: "Alcohol Explains Writers Too Easily",
    href: "/observations/alcohol-explains-writers-too-easily",
  },
  {
    group: "Observation",
    title: "Three Cities, Three Speeds of Life",
    href: "/observations/three-cities-three-speeds",
  },
  {
    group: "Comparison",
    title: "Four Urban Lives",
    href: "/compare/four-urban-lives",
  },
  {
    group: "Comparison",
    title: "Three Urban Diarists",
    href: "/compare/urban-diarists",
  },
  {
    group: "Comparison",
    title: "Nishimura and Bukowski",
    href: "/compare/nishimura-bukowski",
  },
  {
    group: "Comparison",
    title: "Kafū to Nishimura",
    href: "/compare/kafu-nishimura",
  },
  { group: "Writers", title: "Writers index", href: "/writers" },
];

export const bukowskiSources: Source[] = [
  {
    id: "src-bukowski-captain",
    category: "primary",
    status: "verification-pending",
    label:
      "Charles Bukowski, The Captain Is Out to Lunch and the Sailors Have Taken Over the Ship",
    needed: true,
    note: "Primary late journal — Edition details needed / Rights verification needed. No long quotation.",
  },
  {
    id: "src-bukowski-letters",
    category: "primary",
    status: "needed",
    label: "Letter collections",
    needed: true,
    note: "Edition details needed — do not invent titles or URLs.",
  },
  {
    id: "src-bukowski-works",
    category: "primary",
    status: "needed",
    label: "Published works — novels and poems",
    needed: true,
    note: "Post Office and related titles — imprint confirmation pending.",
  },
  {
    id: "src-bukowski-bio",
    category: "verification",
    status: "needed",
    label: "Biographical sources",
    needed: true,
    note: "Source needed — no invented biographies.",
  },
  {
    id: "src-bukowski-labor",
    category: "verification",
    status: "needed",
    label: "Labor history — postal work",
    needed: true,
    note: "Exact employer name by period, facility, and dates — source needed.",
  },
  {
    id: "src-bukowski-racing",
    category: "verification",
    status: "verification-pending",
    label: "Place verification — racetracks, bars, rooms, publishers",
    needed: true,
    note: "Hollywood Park closure verified as track; diary density pending.",
  },
  {
    id: "src-bukowski-editorial",
    category: "editorial",
    status: "needed",
    label:
      "Editorial references — Bukowski studies, Los Angeles literature, labor literature",
    needed: true,
    note: "Source needed — bibliography to be added when confirmed.",
  },
];

/** Real entities only for survival aggregation (exclude fictional Chinaski). */
export const BUKOWSKI_REAL_ENTITY_IDS = [
  "entity-los-angeles",
  "entity-la-post-office",
  "entity-hollywood-park",
] as const;

export const BUKOWSKI_ENTITY_IDS = [
  ...BUKOWSKI_REAL_ENTITY_IDS,
  "entity-henry-chinaski",
] as const;

export function buildBukowskiWorldStatus(
  statusCounts: Partial<Record<EntityStatus, number>>,
): SurvivalSummaryData {
  const order: EntityStatus[] = [
    "existing",
    "closed",
    "demolished",
    "destroyed",
    "rebuilt",
    "renamed",
    "relocated",
    "transformed",
    "ended",
    "deceased",
    "unknown",
  ];
  return {
    label: "What remains from Bukowski’s Los Angeles?",
    labelJa: "ブコウスキーのロサンゼルスから、何が残っているか",
    buckets: order.map((status) => ({
      status,
      count: statusCounts[status] ?? 0,
    })),
    note: "This is not a nostalgia score. It records how work, leisure, poverty, and literature were organized in the city. Fictional entities are excluded from counts.",
    noteJa:
      "これは懐古の点数ではない。労働、娯楽、貧困、文学が、都市の中でどう配置されていたかを記録する。架空Entityは集計に含めない。",
  };
}
