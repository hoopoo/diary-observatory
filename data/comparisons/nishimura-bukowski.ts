import type {
  EpistemicKind,
  LiterarySystem,
  Source,
  WriterComparison,
  WriterComparisonMatrixRow,
  WriterMyth,
  WritingBodyProfile,
} from "@/lib/types";
import { lifeTextRelations as bukowskiLifeTextRelations } from "@/data/writers/charles-bukowski";

export const NISHIMURA_BUKOWSKI_COMPARE_SLUG = "nishimura-bukowski";
export const NISHIMURA_BUKOWSKI_COMPARE_ID = "compare-nishimura-bukowski";

export const NISHIMURA_ID = "writer-nishimura";
export const BUKOWSKI_ID = "writer-bukowski";

export const nishimuraBukowskiComparison: WriterComparison = {
  id: NISHIMURA_BUKOWSKI_COMPARE_ID,
  slug: NISHIMURA_BUKOWSKI_COMPARE_SLUG,
  title: "Nishimura and Bukowski",
  titleJa: "西村賢太とブコウスキー",
  subtitle: "Two cities, two literary systems, two writing bodies.",
  subtitleJa: "二つの都市、二つの文学制度、二つの書く身体。",
  writerIds: [NISHIMURA_ID, BUKOWSKI_ID],
  diaryWorkIds: ["diary-nishimura-nichijo", "diary-bukowski-captain"],
  entryIds: ["entry-2011-05-02"],
  entityIds: [
    "entity-shinchosha",
    "entity-tomaru",
    "entity-koenji",
    "entity-showboat",
    "entity-tokyo-mx",
    "entity-oji-honcho",
    "entity-los-angeles",
    "entity-la-post-office",
    "entity-hollywood-park",
  ],
  fictionalEntityIds: ["entity-henry-chinaski"],
  observationIds: [
    "obs-heisei-dancho",
    "obs-alcohol-explains-writers-too-easily",
    "obs-the-price-of-an-ordinary-day",
    "obs-the-manuscripts-that-were-not-chosen",
    "obs-where-did-the-editor-go",
    "obs-before-the-platform-small-press",
  ],
  themes: [
    "Labor",
    "Publishing",
    "Alcohol",
    "Poverty",
    "Autofiction",
    "Private Fiction",
    "Television",
    "Small Press",
    "Body",
    "Urban Life",
    "Writer Myth",
  ],
  lifeTextRelationIds: ["ltr-postal-chinaski", "ltr-racing"],
  sourceIds: [
    "src-nb-nishimura-diary",
    "src-nb-bukowski-diary",
    "src-nb-works",
    "src-nb-labor",
    "src-nb-publishing",
    "src-nb-media",
    "src-nb-places",
  ],
  comparisonStatus: "active",
  verificationStatus: "partial",
  lastUpdated: "2026-08-02",
};

export const comparisonMeta = {
  writers: 2,
  cities: "Tokyo / Los Angeles",
  countries: "Japan / United States",
  periods: "Late Heisei / 20th-century Los Angeles",
  comparisonStatus: "Active",
  verificationStatus: "Partial",
  lastUpdated: "2026-08-02",
};

export const comparisonLead = [
  "西村賢太とチャールズ・ブコウスキーは、酒、貧困、怒り、孤独、私生活の文学化という点で並べられやすい。",
  "しかし、二人が作家になった仕組みは異なる。",
  "西村の周囲には、出版社、文学賞、書店、雑誌、テレビがあった。",
  "ブコウスキーの周囲には、賃金労働、郵送投稿、小規模文芸誌、独立系出版者があった。",
  "似ているのは、破滅的な作家像ではない。",
  "生活を削り、その残りを文章へ変えた身体である。",
];

export const twoWritersCards = {
  nishimura: {
    writerId: NISHIMURA_ID,
    name: "Kenji Nishimura",
    nameJa: "西村賢太",
    years: "1967–2022",
    city: "Tokyo",
    keywords: [
      "Publishing",
      "Literary Prize",
      "Television",
      "Used Bookstores",
      "Alcohol",
      "Private Fiction",
    ],
    tagline: "When television still visited writers at home.",
    taglineJa: "まだテレビが作家を訪ねてきた時代。",
    cta: "View Kenji Nishimura",
    href: "/writers/kenji-nishimura",
  },
  bukowski: {
    writerId: BUKOWSKI_ID,
    name: "Charles Bukowski",
    nameJa: "チャールズ・ブコウスキー",
    years: "1920–1994",
    city: "Los Angeles",
    keywords: [
      "Labor",
      "Postal Work",
      "Small Press",
      "Bars",
      "Horse Racing",
      "Autobiographical Fiction",
    ],
    tagline:
      "He worked, drank, lost, aged, and turned the residue into literature.",
    taglineJa: "働き、飲み、負け、老い、その残りを文学に変えた。",
    cta: "View Charles Bukowski",
    href: "/writers/charles-bukowski",
  },
};

export const centralProposition = {
  title: "The myth is similar. The systems are different.",
  titleJa: "神話は似ている。仕組みは違う。",
  paragraphs: [
    "二人とも、酒を飲み、怒り、人間関係を壊し、生活を文章へ変えた作家として読まれる。",
    "しかし、その文章が読者へ届くまでの経路は異なる。",
    "西村は、文学賞と出版社とテレビによって社会的な人物になった。",
    "ブコウスキーは、小規模文芸誌、手紙、独立系出版者を経て、時間をかけて読者を獲得した。",
    "作家像だけを比較すると、文学を支えた制度が見えなくなる。",
  ],
};

export const matrixColumns = [
  {
    writerId: NISHIMURA_ID,
    label: "Kenji Nishimura",
    labelJa: "西村賢太",
  },
  {
    writerId: BUKOWSKI_ID,
    label: "Charles Bukowski",
    labelJa: "チャールズ・ブコウスキー",
  },
];

export const writerComparisonMatrixRows: WriterComparisonMatrixRow[] = [
  {
    id: "mx-country",
    key: "country",
    label: "Country",
    labelJa: "国",
    valueByWriterId: {
      [NISHIMURA_ID]: "Japan",
      [BUKOWSKI_ID]: "United States",
    },
    verificationStatusByWriterId: {
      [NISHIMURA_ID]: "verified",
      [BUKOWSKI_ID]: "verified",
    },
  },
  {
    id: "mx-city",
    key: "city",
    label: "Primary city",
    labelJa: "主要都市",
    valueByWriterId: {
      [NISHIMURA_ID]: "Tokyo",
      [BUKOWSKI_ID]: "Los Angeles",
    },
    verificationStatusByWriterId: {
      [NISHIMURA_ID]: "verified",
      [BUKOWSKI_ID]: "verified",
    },
  },
  {
    id: "mx-mode",
    key: "literary-mode",
    label: "Literary mode",
    labelJa: "文学形態",
    valueByWriterId: {
      [NISHIMURA_ID]: "Private fiction / diary-related records",
      [BUKOWSKI_ID]: "Autobiographical fiction / diary / letters / poetry",
    },
    verificationStatusByWriterId: {
      [NISHIMURA_ID]: "partial",
      [BUKOWSKI_ID]: "partial",
    },
  },
  {
    id: "mx-labor",
    key: "pre-success-labor",
    label: "Pre-success labor",
    labelJa: "作家以前の労働",
    valueByWriterId: {
      [NISHIMURA_ID]:
        "Manual and temporary work history — Source needed for specifics",
      [BUKOWSKI_ID]: "Postal and other wage labor — Period Source needed",
    },
    verificationStatusByWriterId: {
      [NISHIMURA_ID]: "needs-source",
      [BUKOWSKI_ID]: "needs-source",
    },
  },
  {
    id: "mx-system",
    key: "literary-system",
    label: "Main literary system",
    labelJa: "文学制度",
    valueByWriterId: {
      [NISHIMURA_ID]: "Publisher / literary prize / bookstore / television",
      [BUKOWSKI_ID]: "Small press / postal submission / independent publisher",
    },
    verificationStatusByWriterId: {
      [NISHIMURA_ID]: "partial",
      [BUKOWSKI_ID]: "partial",
    },
  },
  {
    id: "mx-submission",
    key: "submission",
    label: "Submission medium",
    labelJa: "投稿経路",
    valueByWriterId: {
      [NISHIMURA_ID]: "Publisher and editorial network",
      [BUKOWSKI_ID]: "Typed manuscripts / postal submissions",
    },
    verificationStatusByWriterId: {
      [NISHIMURA_ID]: "partial",
      [BUKOWSKI_ID]: "partial",
    },
  },
  {
    id: "mx-visibility",
    key: "visibility",
    label: "Public visibility",
    labelJa: "公共的認知",
    valueByWriterId: {
      [NISHIMURA_ID]: "Television personality after literary prize",
      [BUKOWSKI_ID]:
        "Readings, small press, later international reputation",
    },
    verificationStatusByWriterId: {
      [NISHIMURA_ID]: "partial",
      [BUKOWSKI_ID]: "partial",
    },
  },
  {
    id: "mx-nodes",
    key: "urban-nodes",
    label: "Urban nodes",
    labelJa: "都市ノード",
    valueByWriterId: {
      [NISHIMURA_ID]: "Publishers / bookstores / studios / live houses",
      [BUKOWSKI_ID]: "Post office / bars / racetracks / small presses",
    },
    verificationStatusByWriterId: {
      [NISHIMURA_ID]: "partial",
      [BUKOWSKI_ID]: "needs-source",
    },
  },
  {
    id: "mx-alcohol",
    key: "alcohol",
    label: "Alcohol",
    labelJa: "酒",
    valueByWriterId: {
      [NISHIMURA_ID]: "Daily-life and writer-image element",
      [BUKOWSKI_ID]: "Daily-life and writer-myth element",
    },
    verificationStatusByWriterId: {
      [NISHIMURA_ID]: "partial",
      [BUKOWSKI_ID]: "partial",
    },
  },
  {
    id: "mx-money",
    key: "money",
    label: "Money",
    labelJa: "金銭",
    valueByWriterId: {
      [NISHIMURA_ID]: "Royalties / fees / book purchases / living costs",
      [BUKOWSKI_ID]: "Wages / rent / betting / postage / publication income",
    },
    verificationStatusByWriterId: {
      [NISHIMURA_ID]: "needs-source",
      [BUKOWSKI_ID]: "needs-source",
    },
  },
  {
    id: "mx-body",
    key: "body",
    label: "Body",
    labelJa: "身体",
    valueByWriterId: {
      [NISHIMURA_ID]: "Sleep / fatigue / alcohol / illness",
      [BUKOWSKI_ID]: "Labor fatigue / alcohol / aging / illness",
    },
    verificationStatusByWriterId: {
      [NISHIMURA_ID]: "partial",
      [BUKOWSKI_ID]: "partial",
    },
  },
  {
    id: "mx-fiction",
    key: "fictionalization",
    label: "Fictionalization",
    labelJa: "フィクション化",
    valueByWriterId: {
      [NISHIMURA_ID]: "Private-fiction transformation",
      [BUKOWSKI_ID]:
        "Henry Chinaski and autobiographical transformation (fictional entity)",
    },
    verificationStatusByWriterId: {
      [NISHIMURA_ID]: "partial",
      [BUKOWSKI_ID]: "needs-source",
    },
  },
  {
    id: "mx-tech",
    key: "technology",
    label: "Technology",
    labelJa: "技術",
    valueByWriterId: {
      [NISHIMURA_ID]: "Mobile email / television / digital transition",
      [BUKOWSKI_ID]: "Typewriter / letters / postal system",
    },
    verificationStatusByWriterId: {
      [NISHIMURA_ID]: "partial",
      [BUKOWSKI_ID]: "partial",
    },
  },
  {
    id: "mx-distribution",
    key: "distribution",
    label: "Cultural distribution",
    labelJa: "文化の流通",
    valueByWriterId: {
      [NISHIMURA_ID]: "Mass-media amplification",
      [BUKOWSKI_ID]: "Slow accumulation through small publications",
    },
    verificationStatusByWriterId: {
      [NISHIMURA_ID]: "partial",
      [BUKOWSKI_ID]: "partial",
    },
  },
];

export const beforeWriterIdentity = {
  title: "Before the writer identity",
  titleJa: "作家になる前の時間",
  nishimura: [
    "貧困",
    "不安定な仕事（詳細職歴は Source needed）",
    "古書への執着",
    "文学への接近",
    "出版社との接続",
    "私生活を私小説へ変える",
  ],
  bukowski: [
    "賃金労働",
    "郵便局（勤務期間 Source needed）",
    "投稿",
    "不採用",
    "小規模雑誌",
    "夜の執筆",
  ],
  paragraphs: [
    "作家の成功譚では、刊行や受賞以前の時間は前史として短く扱われる。",
    "しかし、文章の速度、怒り、金銭感覚、人間関係、身体の疲労は、その長い前史から生まれている。",
  ],
  caution: "西村の具体的な職歴・ブコウスキーの正確な勤務期間は確認済み情報だけ表示する。",
};

export const literarySystems: LiterarySystem[] = [
  {
    id: "sys-nishimura",
    writerId: NISHIMURA_ID,
    nodes: [
      "Writer",
      "Publisher",
      "Literary Prize",
      "Bookstore",
      "Newspaper / Magazine",
      "Television",
      "Mass recognition",
    ],
    period: "Late Heisei Japan",
    summary:
      "既存の文化産業が一人の作家を短期間で社会の表側へ押し出した経路。",
    verificationStatus: "partial",
    sourceIds: ["src-nb-publishing", "src-nb-media"],
  },
  {
    id: "sys-bukowski",
    writerId: BUKOWSKI_ID,
    nodes: [
      "Worker / Writer",
      "Typed manuscript",
      "Postal submission",
      "Small magazine",
      "Editor / Independent publisher",
      "Poetry reading / books",
      "Gradual recognition",
    ],
    period: "20th-century Los Angeles / U.S. small press",
    summary: "小さな出版回路が長い時間をかけて作家を支えた経路。",
    verificationStatus: "partial",
    sourceIds: ["src-nb-publishing"],
  },
];

export const literarySystemsCopy = {
  title: "Two literary systems",
  titleJa: "二つの文学制度",
  paragraphs: [
    "西村の成功は、既存の文化産業が一人の作家を短期間で社会の表側へ押し出した事例である。",
    "ブコウスキーの成功は、小さな出版回路が長い時間をかけて作家を支えた事例として読める。",
    "どちらも、個人の才能だけでは成立していない。",
  ],
};

export const cityInfrastructure = {
  title: "Two cities as literary infrastructure",
  titleJa: "文学インフラとしての二つの都市",
  tokyo: [
    "出版社",
    "文学賞",
    "古書店",
    "テレビ局",
    "ライブハウス",
    "鉄道",
    "飲食店",
  ],
  losAngeles: [
    "郵便施設",
    "酒場",
    "競馬場",
    "安宿",
    "小出版社",
    "道路",
    "朗読会場",
  ],
  paragraphs: [
    "都市は、作品の背景ではない。",
    "原稿を渡せる場所。",
    "賃金を得る場所。",
    "酒を飲む場所。",
    "人に会う場所。",
    "一人になれる部屋。",
    "本や雑誌を流通させる場所。",
    "二人の文学は、それぞれの都市に配置された生活インフラから生まれた。",
  ],
};

export const writingBodies: WritingBodyProfile[] = [
  {
    writerId: NISHIMURA_ID,
    labor: [],
    sleep: ["睡眠", "二日酔い"],
    alcohol: ["飲酒"],
    movement: ["移動"],
    pain: ["病気"],
    aging: [],
    writingRoutine: ["締切", "怒り"],
    verificationStatus: "partial",
  },
  {
    writerId: BUKOWSKI_ID,
    labor: ["賃金労働", "立ち仕事", "疲労"],
    sleep: [],
    alcohol: ["飲酒"],
    movement: ["競馬"],
    pain: ["病気"],
    aging: ["老い"],
    writingRoutine: ["夜の執筆"],
    verificationStatus: "partial",
  },
];

export const writingBodyCopy = {
  title: "Two writing bodies",
  titleJa: "二つの書く身体",
  nishimuraItems: [
    "飲酒",
    "睡眠",
    "二日酔い",
    "怒り",
    "締切",
    "移動",
    "病気",
  ],
  bukowskiItems: [
    "賃金労働",
    "立ち仕事",
    "疲労",
    "飲酒",
    "競馬",
    "夜の執筆",
    "老い",
  ],
  paragraphs: [
    "文章を書くのは、抽象的な知性ではない。",
    "眠い身体。",
    "疲れた身体。",
    "酒を飲んだ身体。",
    "金のない身体。",
    "老いる身体。",
    "二人の文体を比較するなら、語彙や構文だけでなく、文章が書かれた身体条件を見る必要がある。",
  ],
};

export const alcoholMyth = {
  title: "Alcohol and the marketable writer",
  titleJa: "酒と、消費される作家像",
  paragraphs: [
    "酒は、二人の生活に存在した。",
    "同時に、メディアや読者が理解しやすい作家像の記号にもなった。",
    "西村は、テレビで露悪的な言動をする私小説作家として消費された。",
    "ブコウスキーは、酒場と破滅を生きるアウトロー作家として神話化された。",
    "しかし、酒だけを強調すると、労働、執筆、編集、出版、老い、病気が見えなくなる。",
  ],
  layers: [
    {
      kind: "fact" as EpistemicKind,
      label: "Fact",
      text: "確認された飲酒記録 — 確認できる場合のみ。",
    },
    {
      kind: "observation" as EpistemicKind,
      label: "Observation",
      text: "飲酒が時間、金銭、身体へ及ぼす影響。",
    },
    {
      kind: "interpretation" as EpistemicKind,
      label: "Interpretation",
      text: "文化産業が酒を作家像へ変換する過程。",
    },
  ],
  caution: "医学的診断は推測しない。",
};

export const writerMyths: WriterMyth[] = [
  {
    writerId: NISHIMURA_ID,
    publicImage: "Private-fiction writer / television personality",
    mediaChannels: ["Television", "Prize culture", "Publishing"],
    documentedTraits: ["Alcohol in daily life", "Anger", "Literary work"],
    exaggeratedTraits: ["Marketable exposure / 「露悪」 as brand"],
    interpretation:
      "Mass media compressed a complex writing life into a consumable writer image.",
    sourceIds: ["src-nb-media"],
    verificationStatus: "partial",
  },
  {
    writerId: BUKOWSKI_ID,
    publicImage: "Outlaw / bar-and-race myth",
    mediaChannels: ["Small press", "Readings", "Later international reputation"],
    documentedTraits: ["Wage labor", "Bars", "Racing", "Writing"],
    exaggeratedTraits: ["Pure destruction myth without labor history"],
    interpretation:
      "Myth of the outlaw writer can erase postal work and small-press infrastructure.",
    sourceIds: ["src-nb-bukowski-diary"],
    verificationStatus: "partial",
  },
];

export const privateLifeMaterial = {
  title: "When private life becomes literary material",
  titleJa: "私生活が文学になるとき",
  nishimura: {
    lived: ["生活", "人間関係", "怒り", "貧困"],
    written: ["日記", "随筆", "私小説"],
    publiclyConsumed: ["テレビ", "対談", "作家像"],
  },
  bukowski: {
    lived: ["労働", "酒場", "競馬", "関係", "孤独"],
    written: ["日記", "手紙", "詩", "小説"],
    fictionalized: ["Henry Chinaski"],
    publiclyConsumed: ["Outlaw writer mythology"],
  },
  caution:
    "実生活と作品の一対一対応を断定しない。LifeTextRelation: documented / probable / interpreted / unknown.",
  relations: bukowskiLifeTextRelations,
};

export const lifeCost = {
  title: "The cost of becoming a writer",
  titleJa: "作家になるために支払ったもの",
  axes: [
    {
      id: "time",
      label: "Time",
      labelJa: "仕事と執筆に使った時間",
      nishimura: "Editorial deadlines / publishing calendar",
      bukowski: "Wage shifts / night writing after work",
    },
    {
      id: "body",
      label: "Body",
      labelJa: "疲労、酒、睡眠、病気",
      nishimura: "Alcohol / sleep / illness",
      bukowski: "Labor fatigue / alcohol / aging",
    },
    {
      id: "money",
      label: "Money",
      labelJa: "生活費、家賃、投稿費、本、賭け",
      nishimura: "Living costs / books / fees — amounts Source needed",
      bukowski: "Wages / rent / postage / bets — amounts Source needed",
    },
    {
      id: "relationships",
      label: "Relationships",
      labelJa: "恋人、友人、編集者、同僚",
      nishimura: "Editors / literary circle — names only when sourced",
      bukowski: "Editors / readers / relationships — density Source needed",
    },
    {
      id: "privacy",
      label: "Privacy",
      labelJa: "私生活の作品化",
      nishimura: "Private fiction / diary exposure",
      bukowski: "Autobiographical transformation / Chinaski",
    },
    {
      id: "reputation",
      label: "Reputation",
      labelJa: "作家像への固定",
      nishimura: "TV / prize image",
      bukowski: "Outlaw myth",
    },
  ],
  paragraphs: [
    "成功後に残るのは、作品と作家像である。",
    "そこへ至るまでに失われた時間、身体、関係は見えにくい。",
    "Diary Observatoryでは、作品だけでなく、文学が成立するために何が消費されたかも観測する。",
  ],
};

export const afterRecognition = {
  title: "After recognition",
  titleJa: "評価されたあと",
  nishimura: [
    "芥川賞",
    "テレビ出演",
    "読者拡大",
    "作家像の定着",
    "日記と私生活への関心",
    "54歳で死去",
  ],
  bukowski: [
    "専業作家への移行（年月 Source needed）",
    "出版点数の増加",
    "朗読",
    "国際的評価",
    "アウトロー像の定着",
    "晩年の日記",
    "73歳で死去",
  ],
  paragraphs: [
    "成功は、過去の生活を消さない。",
    "むしろ成功後、過去の貧困、酒、労働、怒りが商品化された作家像として反復される。",
  ],
};

export const massSmallMedia = {
  title: "Mass media / small media",
  titleJa: "マスメディアと小さなメディア",
  nishimura: ["文学賞", "新聞", "雑誌", "テレビ", "全国的認知"],
  bukowski: ["リトルマガジン", "手紙", "小出版社", "朗読", "口コミ的拡散"],
  paragraphs: [
    "西村の作家像は、テレビによって短時間で広く共有された。",
    "ブコウスキーの作家像は、小さな媒体の反復によって時間をかけて形成された。",
    "現在は、SNSや動画が、大規模と小規模の境界を曖昧にしている。",
  ],
};

export const aiPersonalized = {
  title: "From lived life to generated style",
  titleJa: "生きられた生活から、生成される文体へ",
  kind: "interpretation" as EpistemicKind,
  paragraphs: [
    "現在、AIに「西村賢太風」「ブコウスキー風」と指示すれば、似た調子の文章を生成できる。",
    "酒。",
    "貧困。",
    "怒り。",
    "古書店。",
    "酒場。",
    "競馬。",
    "しかし、文体の特徴を再現することと、その文体を生んだ生活を再現することは違う。",
    "生成された文章には、実際の賃金労働も、編集者との衝突も、投稿の不採用も、二日酔いの翌朝も存在しない。",
  ],
};

export const residueConcept = {
  title: "Not style, but residue.",
  titleJa: "文体ではなく、生活の残滓。",
  paragraphs: [
    "二人の文章が残るのは、乱暴な語り口や、露悪的な人物像だけが理由ではない。",
    "その背後に、一度しか生きられなかった生活がある。",
    "文学は、生活をそのまま保存しない。",
    "削り、変形し、誇張し、隠す。",
    "それでも、身体と都市と制度の痕跡は残る。",
  ],
};

export const relatedEntityIds = {
  nishimura: [
    "entity-shinchosha",
    "entity-tomaru",
    "entity-koenji",
    "entity-showboat",
    "entity-tokyo-mx",
    "entity-oji-honcho",
  ],
  bukowskiReal: [
    "entity-los-angeles",
    "entity-la-post-office",
    "entity-hollywood-park",
  ],
  bukowskiFictional: ["entity-henry-chinaski"],
};

export const parallelRecords = {
  title: "Parallel records",
  titleJa: "並べて読む記録",
  noteEn:
    "Comparison does not require equal volumes of material. An empty slot is a research target.",
  noteJa:
    "比較は、同じ量の資料が揃っていることを前提にしない。片方の空欄は、今後の調査対象として残す。",
  nishimura: {
    date: "May 2, 2011",
    writer: "Kenji Nishimura",
    summary: "Publisher / bookstore / live house",
    verification: "Partial",
    href: "/entries/2011-05-02-kenji-nishimura",
    coming: false,
  },
  bukowski: {
    date: "No dated record",
    writer: "Charles Bukowski",
    summary:
      "No dated record indexed yet. Primary source: The Captain Is Out to Lunch and the Sailors Have Taken Over the Ship.",
    verification: "Bibliographic verification needed",
    href: "/diaries/captain-is-out-to-lunch",
    coming: true,
  },
};

export const comparisonStatusCopy = {
  title: "Comparison status",
  titleJa: "比較の現在状況",
  noteEn:
    "This comparison is provisional. It will change as Bukowski’s dated records, editions, workplaces, and places are verified.",
  noteJa:
    "この比較は暫定的である。ブコウスキーの日付付き記録、刊行版、勤務先、場所が確認されるたびに、比較の見え方は変わる。",
};

export const relatedKafu = {
  name: "Kafū Nagai",
  nameJa: "永井荷風",
  connection: "Tokyo / diary / body / urban observation",
  paragraphs: [
    "荷風を加えると、三人の違いがより明確になる。",
    "荷風：天候と散歩",
    "西村：出版とテレビ",
    "ブコウスキー：労働と小出版",
  ],
  href: "/writers/kafu-nagai",
  cta: "View Kafū Nagai",
};

export const relatedObservations = {
  published: [
    {
      title: "選ばれなかった原稿",
      subtitle: "不採用、返送、沈黙、公開されなかった文章",
      href: "/observations/the-manuscripts-that-were-not-chosen",
    },
    {
      title: "編集者は消えたのか",
      subtitle: "人間、アルゴリズム、AIに分散する「選ぶ仕事」",
      href: "/observations/where-did-the-editor-go",
    },
    {
      title: "プラットフォーム以前の小出版",
      subtitle: "原稿、封筒、切手、編集者、少数の読者",
      href: "/observations/before-the-platform-small-press",
    },
    {
      title: "一日の値段",
      subtitle: "日記に残る本、酒、食事、賃金、家賃",
      href: "/observations/the-price-of-an-ordinary-day",
    },
    {
      title: "酒は、作家を説明しすぎる",
      subtitle: "西村賢太、ブコウスキー、そして作家像の消費",
      href: "/observations/alcohol-explains-writers-too-easily",
    },
    {
      title: "平成の断腸亭日乗",
      subtitle: "西村賢太の日記に残る、消えていく東京",
      href: "/observations/heisei-dancho-tei-nichijo",
    },
    {
      title: "三つの都市、三つの生活速度",
      subtitle: "荷風・西村賢太・ブコウスキーの日記から",
      href: "/observations/three-cities-three-speeds",
    },
  ],
  coming: [
    "東京とロサンゼルスの書く底辺",
        "成功後も、人は同じ役を求められる",
    "文体ではなく、生活の残滓",
  ],
};

export const relatedPages = [
  {
    group: "Writer",
    title: "Kenji Nishimura",
    href: "/writers/kenji-nishimura",
  },
  {
    group: "Writer",
    title: "Charles Bukowski",
    href: "/writers/charles-bukowski",
  },
  {
    group: "Writer",
    title: "Kafū Nagai",
    href: "/writers/kafu-nagai",
  },
  {
    group: "Comparison",
    title: "Three Urban Diarists",
    href: "/compare/urban-diarists",
  },
  {
    group: "Comparison",
    title: "From Kafū to Nishimura",
    href: "/compare/kafu-nishimura",
  },
  {
    group: "Entry",
    title: "May 2, 2011",
    href: "/entries/2011-05-02-kenji-nishimura",
  },
  {
    group: "Diary",
    title: "The Captain Is Out to Lunch…",
    href: "/diaries/captain-is-out-to-lunch",
  },
  {
    group: "Observation",
    title: "平成の断腸亭日乗",
    href: "/observations/heisei-dancho-tei-nichijo",
  },
  {
    group: "Observation",
    title: "選ばれなかった原稿",
    href: "/observations/the-manuscripts-that-were-not-chosen",
  },
  {
    group: "Observation",
    title: "編集者は消えたのか",
    href: "/observations/where-did-the-editor-go",
  },
  {
    group: "Observation",
    title: "プラットフォーム以前の小出版",
    href: "/observations/before-the-platform-small-press",
  },
  {
    group: "Observation",
    title: "一日の値段",
    href: "/observations/the-price-of-an-ordinary-day",
  },
  {
    group: "Observation",
    title: "酒は、作家を説明しすぎる",
    href: "/observations/alcohol-explains-writers-too-easily",
  },
  {
    group: "Observation",
    title: "三つの都市、三つの生活速度",
    href: "/observations/three-cities-three-speeds",
  },
];

export const comparisonSources: Source[] = [
  {
    id: "src-nb-nishimura-diary",
    category: "primary",
    status: "primary-unavailable",
    label: "西村賢太の公刊日記・日乗類",
    needed: true,
    note: "Primary records — edition details needed. No long quotation.",
  },
  {
    id: "src-nb-bukowski-diary",
    category: "primary",
    status: "verification-pending",
    label:
      "Charles Bukowski, The Captain Is Out to Lunch and the Sailors Have Taken Over the Ship",
    needed: true,
    note: "Late diary / journal — Edition details needed / Rights verification needed.",
  },
  {
    id: "src-nb-works",
    category: "primary",
    status: "needed",
    label: "Published works — private fiction / autobiographical fiction / poetry",
    needed: true,
    note: "Imprint confirmation pending. No invented ISBN.",
  },
  {
    id: "src-nb-letters",
    category: "primary",
    status: "needed",
    label: "Letter collections (Bukowski)",
    needed: true,
    note: "Edition details needed.",
  },
  {
    id: "src-nb-bio",
    category: "verification",
    status: "needed",
    label: "Biographical sources",
    needed: true,
    note: "Source needed — no invented biographies.",
  },
  {
    id: "src-nb-labor",
    category: "verification",
    status: "needed",
    label: "Labor history — Nishimura work history / Bukowski postal years",
    needed: true,
    note: "Do not invent job titles, facilities, or exact years.",
  },
  {
    id: "src-nb-publishing",
    category: "verification",
    status: "verification-pending",
    label: "Publishing history — prizes, houses, small press",
    needed: true,
    note: "Literary prize for Nishimura treated as documented public fact; imprint details pending.",
  },
  {
    id: "src-nb-media",
    category: "verification",
    status: "needed",
    label: "Media history — television, magazines, readings",
    needed: true,
  },
  {
    id: "src-nb-places",
    category: "verification",
    status: "verification-pending",
    label: "Place verification — shops, workplaces, racetracks, cities",
    needed: true,
    note: "Indexed entities only; bars / small presses pending entity creation.",
  },
];
