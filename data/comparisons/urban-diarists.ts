import type {
  EpistemicKind,
  LifeSpeedPattern,
  LiterarySystem,
  Source,
  ThreeWriterMatrixRow,
  UrbanDiaryProfile,
  WriterComparison,
  WritingBodyProfile,
} from "@/lib/types";
import { lifeTextRelations as bukowskiLifeTextRelations } from "@/data/writers/charles-bukowski";

export const URBAN_DIARISTS_SLUG = "urban-diarists";
export const URBAN_DIARISTS_ID = "compare-urban-diarists";

export const KAFU_ID = "writer-kafu";
export const NISHIMURA_ID = "writer-nishimura";
export const BUKOWSKI_ID = "writer-bukowski";

export const urbanDiaristsComparison: WriterComparison = {
  id: URBAN_DIARISTS_ID,
  slug: URBAN_DIARISTS_SLUG,
  title: "Three Urban Diarists",
  titleJa: "三人の都市記録者",
  subtitle: "Kafū, Nishimura, and Bukowski",
  subtitleJa: "荷風・西村・ブコウスキー――三つの都市、三つの生活速度",
  writerIds: [KAFU_ID, NISHIMURA_ID, BUKOWSKI_ID],
  diaryWorkIds: [
    "diary-kafu-dancho",
    "diary-nishimura-nichijo",
    "diary-bukowski-captain",
  ],
  entryIds: ["entry-1918-01-01", "entry-2011-05-02"],
  entityIds: [
    "entity-tokyo",
    "entity-azabu",
    "entity-ginza",
    "entity-asakusa",
    "entity-dancho-tei",
    "entity-asamoya",
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
    "obs-three-cities-three-speeds",
  ],
  comparisonIds: ["compare-kafu-nishimura", "compare-nishimura-bukowski"],
  themes: [
    "City",
    "Diary",
    "Labor",
    "Publishing",
    "Movement",
    "Body",
    "Weather",
    "Television",
    "Small Press",
    "Alcohol",
    "Urban Change",
    "Repetition",
  ],
  lifeTextRelationIds: ["ltr-postal-chinaski", "ltr-racing"],
  sourceIds: [
    "src-ud-kafu-diary",
    "src-ud-nishimura-diary",
    "src-ud-bukowski-diary",
    "src-ud-publishing",
    "src-ud-labor",
    "src-ud-media",
    "src-ud-places",
  ],
  comparisonStatus: "active",
  verificationStatus: "partial",
  lastUpdated: "2026-08-02",
};

export const comparisonMeta = {
  writers: 3,
  cities: "Tokyo / Los Angeles",
  countries: "Japan / United States",
  periods: "1917–1959 / Late Heisei / 20th-century Los Angeles",
  comparisonStatus: "Active",
  verificationStatus: "Partial",
  lastUpdated: "2026-08-02",
};

export const comparisonLead = [
  "三人とも、都市の歴史を書こうとしたわけではない。",
  "永井荷風は、天候を見て、庭を見て、東京を歩いた。",
  "西村賢太は、出版社へ行き、古書店へ寄り、テレビ局やライブハウスへ向かった。",
  "チャールズ・ブコウスキーは、郵便局で働き、酒場へ行き、競馬場と部屋を往復した。",
  "本人たちは、自分の一日を書いただけだった。",
  "しかし、その一日を支えていた街、仕事、店、メディア、身体までが、文章の中へ残った。",
];

export const threeWritersCards = [
  {
    order: "01",
    writerId: KAFU_ID,
    name: "Kafū Nagai",
    nameJa: "永井荷風",
    years: "1879–1959",
    city: "Tokyo",
    primaryRecord: "Danchōtei Nichijō",
    primaryRecordJa: "断腸亭日乗",
    keywords: [
      "Weather",
      "Walking",
      "Garden",
      "Publishing",
      "War",
      "Body",
      "Old Tokyo",
    ],
    tagline: "Forty-two years recording modern Tokyo as it vanished.",
    taglineJa: "消えていく近代東京を、四十二年にわたり記録した。",
    cta: "View Kafū Nagai",
    href: "/writers/kafu-nagai",
  },
  {
    order: "02",
    writerId: NISHIMURA_ID,
    name: "Kenji Nishimura",
    nameJa: "西村賢太",
    years: "1967–2022",
    city: "Tokyo",
    primaryRecord: "Diary and private-fiction-related records",
    primaryRecordJa: "日記・私小説周辺記録",
    keywords: [
      "Publishing",
      "Literary Prize",
      "Television",
      "Used Bookstores",
      "Alcohol",
      "Late-Heisei Tokyo",
    ],
    tagline: "When television still visited writers at home.",
    taglineJa: "まだテレビが作家を訪ねてきた時代。",
    cta: "View Kenji Nishimura",
    href: "/writers/kenji-nishimura",
  },
  {
    order: "03",
    writerId: BUKOWSKI_ID,
    name: "Charles Bukowski",
    nameJa: "チャールズ・ブコウスキー",
    years: "1920–1994",
    city: "Los Angeles",
    primaryRecord: "Late diary / Letters / Poetry / Autobiographical fiction",
    primaryRecordJa: "晩年日記・書簡・詩・自伝的フィクション",
    keywords: [
      "Labor",
      "Postal Work",
      "Small Press",
      "Bars",
      "Horse Racing",
      "Aging",
      "Los Angeles",
    ],
    tagline:
      "He worked, drank, lost, aged, and turned the residue into literature.",
    taglineJa: "働き、飲み、負け、老い、その残りを文学に変えた。",
    cta: "View Charles Bukowski",
    href: "/writers/charles-bukowski",
  },
];

export const centralProposition = {
  title: "A city enters literature through an ordinary day.",
  titleJa: "都市は、平凡な一日から文学へ入る。",
  paragraphs: [
    "都市は、作品の背景としてだけ存在するのではない。",
    "歩ける距離。",
    "働く場所。",
    "原稿を渡す場所。",
    "酒を飲む店。",
    "本を買う店。",
    "人に会う場所。",
    "一人になれる部屋。",
    "日記や日録には、制度図や都市計画には残りにくい生活の接続関係が記録される。",
    "三人の文章を並べることで、都市が人間の一日をどのように形づくっていたかが見える。",
  ],
};

export const threeCities = {
  title: "Three lived cities",
  titleJa: "三つの、生きられた都市",
  panels: [
    {
      writerId: KAFU_ID,
      label: "Kafū’s Tokyo",
      labelJa: "荷風の東京",
      items: [
        { en: "Garden", ja: "庭" },
        { en: "Streets", ja: "街路" },
        { en: "Publishers", ja: "出版社" },
        { en: "Shops", ja: "店" },
        { en: "Pleasure districts", ja: "歓楽街" },
        { en: "War", ja: "戦争" },
        { en: "Reconstruction", ja: "再建" },
      ],
    },
    {
      writerId: NISHIMURA_ID,
      label: "Nishimura’s Tokyo",
      labelJa: "西村の東京",
      items: [
        { en: "Publishers", ja: "出版社" },
        { en: "Literary prizes", ja: "文学賞" },
        { en: "Used bookstores", ja: "古書店" },
        { en: "Television studios", ja: "テレビ局" },
        { en: "Live houses", ja: "ライブハウス" },
        { en: "Railways", ja: "鉄道" },
        { en: "Restaurants", ja: "飲食店" },
      ],
    },
    {
      writerId: BUKOWSKI_ID,
      label: "Bukowski’s Los Angeles",
      labelJa: "ブコウスキーのロサンゼルス",
      items: [
        { en: "Postal workplaces", ja: "郵便施設" },
        { en: "Rooms", ja: "部屋" },
        { en: "Bars", ja: "酒場" },
        { en: "Racetracks", ja: "競馬場" },
        { en: "Small presses", ja: "小出版社" },
        { en: "Roads", ja: "道路" },
        { en: "Reading venues", ja: "朗読会場" },
      ],
    },
  ],
  paragraphs: [
    "同じ都市名でも、一人ひとりが利用した都市は異なる。",
    "Diary Observatoryが扱うのは、地図上の都市ではなく、その人が実際に使った都市である。",
  ],
};

export const lifeSpeedPatterns: LifeSpeedPattern[] = [
  {
    id: "speed-kafu",
    writerId: KAFU_ID,
    label: "Kafū",
    labelJa: "荷風",
    layer: "interpretation",
    verificationStatus: "partial",
    sourceIds: ["src-ud-kafu-diary"],
    steps: [
      { label: "Weather", labelJa: "天候を見る" },
      { label: "Interior / garden", labelJa: "室内と庭" },
      { label: "Writing", labelJa: "書く" },
      { label: "Walking", labelJa: "歩く" },
      { label: "Visitors / food", labelJa: "人に会い、食べる" },
      { label: "Night", labelJa: "夜" },
    ],
  },
  {
    id: "speed-nishimura",
    writerId: NISHIMURA_ID,
    label: "Nishimura",
    labelJa: "西村",
    layer: "interpretation",
    verificationStatus: "partial",
    sourceIds: ["src-ud-nishimura-diary"],
    steps: [
      { label: "Wake", labelJa: "起きる" },
      { label: "Publisher / editor", labelJa: "出版社と編集者" },
      { label: "Train / taxi", labelJa: "移動" },
      { label: "Bookstore / studio", labelJa: "古書店、テレビ局" },
      { label: "Live house / restaurant", labelJa: "ライブ、飲食" },
      { label: "Alcohol / writing", labelJa: "酒と執筆" },
    ],
  },
  {
    id: "speed-bukowski",
    writerId: BUKOWSKI_ID,
    label: "Bukowski",
    labelJa: "ブコウスキー",
    layer: "interpretation",
    verificationStatus: "partial",
    sourceIds: ["src-ud-bukowski-diary"],
    steps: [
      { label: "Shift", labelJa: "働く" },
      { label: "Fatigue", labelJa: "疲れる" },
      { label: "Bar / racetrack", labelJa: "酒場、競馬場" },
      { label: "Room", labelJa: "部屋へ戻る" },
      { label: "Typewriter", labelJa: "書く" },
      { label: "Sleep / repeat", labelJa: "眠り、また繰り返す" },
    ],
  },
];

export const lifeSpeedsCopy = {
  title: "Three speeds of life",
  titleJa: "三つの生活速度",
  noteEn:
    "These are provisional patterns derived from currently indexed records.",
  noteJa:
    "現在索引化されている記録から見える、暫定的な生活パターンである。",
  caution:
    "全日記を確定的に一般化したモデルではない。Interpretation として扱う。",
};

export const matrixColumns = [
  { writerId: KAFU_ID, label: "Kafū Nagai", labelJa: "永井荷風" },
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

function row(
  id: string,
  key: string,
  label: string,
  labelJa: string,
  values: [string, string, string],
  statuses: [
    ThreeWriterMatrixRow["verificationStatusByWriterId"][string],
    ThreeWriterMatrixRow["verificationStatusByWriterId"][string],
    ThreeWriterMatrixRow["verificationStatusByWriterId"][string],
  ],
): ThreeWriterMatrixRow {
  return {
    id,
    key,
    label,
    labelJa,
    valueByWriterId: {
      [KAFU_ID]: values[0],
      [NISHIMURA_ID]: values[1],
      [BUKOWSKI_ID]: values[2],
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: statuses[0],
      [NISHIMURA_ID]: statuses[1],
      [BUKOWSKI_ID]: statuses[2],
    },
  };
}

export const threeWriterMatrixRows: ThreeWriterMatrixRow[] = [
  row(
    "mx-city",
    "primary-city",
    "Primary city",
    "主要都市",
    ["Tokyo", "Tokyo", "Los Angeles"],
    ["verified", "verified", "verified"],
  ),
  row(
    "mx-period",
    "period",
    "Primary period",
    "主要時期",
    ["1917–1959", "Late Heisei / 2010s", "20th-century Los Angeles"],
    ["verified", "partial", "partial"],
  ),
  row(
    "mx-form",
    "record-form",
    "Primary record form",
    "主要記録形態",
    [
      "Long-term diary",
      "Diary / daily record / private fiction",
      "Diary / letters / poetry / autobiographical fiction",
    ],
    ["verified", "partial", "partial"],
  ),
  row(
    "mx-env",
    "environment",
    "Main environmental condition",
    "主な環境条件",
    ["Weather", "Media and publishing schedule", "Labor schedule"],
    ["partial", "partial", "partial"],
  ),
  row(
    "mx-move",
    "movement",
    "Primary movement",
    "主な移動",
    [
      "Walking",
      "Train / taxi / cultural route",
      "Workplace / road / racetrack route",
    ],
    ["partial", "partial", "partial"],
  ),
  row(
    "mx-pub",
    "publishing",
    "Publishing system",
    "出版制度",
    [
      "Print / newspaper / literary circle",
      "Publisher / prize / bookstore / television",
      "Small press / postal submission / independent publisher",
    ],
    ["partial", "partial", "partial"],
  ),
  row(
    "mx-nodes",
    "urban-nodes",
    "Primary urban nodes",
    "主要都市ノード",
    [
      "Garden / streets / shops / publishers",
      "Publishers / bookstores / studios / live houses",
      "Post office / bars / racetracks / rooms",
    ],
    ["partial", "partial", "needs-source"],
  ),
  row(
    "mx-body",
    "body",
    "Body",
    "身体",
    [
      "Dental pain / fatigue / aging",
      "Alcohol / sleep / fatigue / illness",
      "Labor fatigue / alcohol / aging / illness",
    ],
    ["partial", "partial", "partial"],
  ),
  row(
    "mx-money",
    "money",
    "Money",
    "金銭",
    [
      "Food / books / publishing / daily expenses",
      "Royalties / book purchases / alcohol / transport",
      "Wages / rent / postage / alcohol / betting",
    ],
    ["needs-source", "needs-source", "needs-source"],
  ),
  row(
    "mx-visibility",
    "visibility",
    "Public visibility",
    "公共的認知",
    [
      "Print literary figure",
      "Television-visible prize-winning writer",
      "Small-press writer, later international reputation",
    ],
    ["partial", "partial", "partial"],
  ),
  row(
    "mx-tech",
    "technology",
    "Technology",
    "技術",
    [
      "Paper / letters / print",
      "Mobile email / television / digital transition",
      "Typewriter / letters / postal system",
    ],
    ["partial", "partial", "partial"],
  ),
  row(
    "mx-disappear",
    "urban-disappearance",
    "Urban disappearance",
    "都市の消失",
    [
      "War / destruction / reconstruction",
      "Closures / ended programs / media fragmentation",
      "Closures / redevelopment / transformed labor and leisure sites",
    ],
    ["partial", "partial", "needs-source"],
  ),
  row(
    "mx-depth",
    "indexing-depth",
    "Current indexing depth",
    "現在の索引深度",
    [
      "Indexed entry available (sample + scaffolds)",
      "Indexed entry available (May 2, 2011)",
      "Not indexed — no dated diary entry yet",
    ],
    ["partial", "partial", "not-indexed"],
  ),
];

export const dayShapes = {
  title: "What shapes an ordinary day?",
  titleJa: "一日を形づくるもの",
  conditions: [
    {
      writerId: KAFU_ID,
      label: "Kafū",
      condition: "Environment",
      conditionJa: "環境",
      detail: "天候、季節、室内、庭、身体",
    },
    {
      writerId: NISHIMURA_ID,
      label: "Nishimura",
      condition: "Media",
      conditionJa: "メディア",
      detail: "編集者、出版社、文学賞、テレビ、予定",
    },
    {
      writerId: BUKOWSKI_ID,
      label: "Bukowski",
      condition: "Labor",
      conditionJa: "労働",
      detail: "勤務、疲労、賃金、投稿、生活費",
    },
  ],
  paragraphs: [
    "人の一日は、本人の意思だけで作られていない。",
    "自然環境。",
    "メディア環境。",
    "労働環境。",
    "それぞれの時代で、異なる条件が行動の順番と速度を決める。",
  ],
  caution:
    "荷風にも出版と労働があり、西村にも天候と身体があり、ブコウスキーにもメディアがある。完全な三分法ではなく、日記に現れる重心の違いとして扱う。",
};

export const literarySystems: LiterarySystem[] = [
  {
    id: "sys-kafu",
    writerId: KAFU_ID,
    nodes: [
      "Writer",
      "Publisher",
      "Newspaper / literary magazine",
      "Bookstore",
      "Reader",
    ],
    period: "Taishō–Shōwa print culture",
    summary: "印刷・新聞・文壇を通じた流通。",
    verificationStatus: "partial",
    sourceIds: ["src-ud-publishing"],
  },
  {
    id: "sys-nishimura",
    writerId: NISHIMURA_ID,
    nodes: [
      "Writer",
      "Publisher",
      "Literary prize",
      "Bookstore",
      "Newspaper / magazine",
      "Television",
      "Mass recognition",
    ],
    period: "Late Heisei publishing / television",
    summary: "文学賞とテレビが短期間で認知を拡大。",
    verificationStatus: "partial",
    sourceIds: ["src-ud-publishing", "src-ud-media"],
  },
  {
    id: "sys-bukowski",
    writerId: BUKOWSKI_ID,
    nodes: [
      "Worker / writer",
      "Typed manuscript",
      "Postal submission",
      "Small magazine",
      "Independent publisher",
      "Reading / book",
      "Gradual recognition",
    ],
    period: "U.S. small press / postal culture",
    summary: "小さな出版回路が長い時間をかけて支える。",
    verificationStatus: "partial",
    sourceIds: ["src-ud-publishing"],
  },
];

export const literarySystemsCopy = {
  title: "Three literary systems",
  titleJa: "三つの文学制度",
  paragraphs: [
    "作品は、作家から直接読者へ届くわけではない。",
    "各時代には、作品を選び、編集し、流通させ、評価する仕組みがある。",
    "日記を読むことで、完成した本の背後にある文学制度の日常的な動きが見える。",
  ],
};

export const movementSection = {
  title: "Walking, commuting, working",
  titleJa: "歩くこと、移動すること、働くこと",
  items: [
    {
      writerId: KAFU_ID,
      label: "Kafū",
      text: "Walking as observation",
      textJa: "観察としての歩行",
    },
    {
      writerId: NISHIMURA_ID,
      label: "Nishimura",
      text: "Movement between cultural institutions",
      textJa: "文化機関のあいだの移動",
    },
    {
      writerId: BUKOWSKI_ID,
      label: "Bukowski",
      text: "Movement constrained by wage labor and leisure routines",
      textJa: "賃金労働と余暇の往復に制約された移動",
    },
  ],
  paragraphs: [
    "荷風は、歩くことで街の細部へ近づいた。",
    "西村は、出版社、書店、テレビ局、ライブハウスを移動した。",
    "ブコウスキーは、職場、酒場、競馬場、部屋を往復した。",
    "移動は、場所から場所への変化ではない。",
    "何が観測でき、誰に会え、どの文章が生まれるかを決める。",
  ],
};

export const writingBodies: WritingBodyProfile[] = [
  {
    writerId: KAFU_ID,
    labor: [],
    sleep: [],
    alcohol: [],
    movement: ["歩行"],
    pain: ["寒さ", "歯痛"],
    aging: ["老い"],
    writingRoutine: ["食欲", "疲労"],
    verificationStatus: "partial",
  },
  {
    writerId: NISHIMURA_ID,
    labor: [],
    sleep: ["睡眠", "二日酔い"],
    alcohol: ["飲酒"],
    movement: ["移動"],
    pain: ["病気"],
    aging: [],
    writingRoutine: ["怒り"],
    verificationStatus: "partial",
  },
  {
    writerId: BUKOWSKI_ID,
    labor: ["賃金労働", "立ち仕事", "疲労"],
    sleep: [],
    alcohol: ["飲酒"],
    movement: [],
    pain: [],
    aging: ["老い"],
    writingRoutine: ["夜の執筆"],
    verificationStatus: "partial",
  },
];

export const writingBodiesCopy = {
  title: "Three writing bodies",
  titleJa: "三つの書く身体",
  itemsByWriter: {
    [KAFU_ID]: ["寒さ", "歯痛", "歩行", "食欲", "疲労", "老い"],
    [NISHIMURA_ID]: ["飲酒", "睡眠", "二日酔い", "怒り", "移動", "病気"],
    [BUKOWSKI_ID]: [
      "賃金労働",
      "立ち仕事",
      "疲労",
      "飲酒",
      "夜の執筆",
      "老い",
    ],
  },
  paragraphs: [
    "書くことは、知性だけの活動ではない。",
    "歩ける身体。",
    "働かなければならない身体。",
    "酒を飲む身体。",
    "痛みを抱えた身体。",
    "眠れない身体。",
    "老いていく身体。",
    "三人の日記や周辺記録には、都市を見る身体と、文章を書く身体が重なって残る。",
  ],
};

export const dayPrice = {
  title: "The price of an ordinary day",
  titleJa: "平凡な一日の値段",
  axes: [
    { id: "food", label: "Food", labelJa: "食事" },
    { id: "alcohol", label: "Alcohol", labelJa: "酒" },
    { id: "books", label: "Books", labelJa: "本" },
    { id: "transport", label: "Transport", labelJa: "移動" },
    { id: "rent", label: "Rent", labelJa: "住居" },
    { id: "wages", label: "Wages", labelJa: "賃金" },
    { id: "publishing", label: "Publishing income", labelJa: "原稿料、印税" },
    { id: "betting", label: "Betting", labelJa: "賭け" },
    {
      id: "domestic",
      label: "Heating and domestic costs",
      labelJa: "暖房、家事",
    },
  ],
  valueByWriterId: {
    [KAFU_ID]: "Indexing in progress",
    [NISHIMURA_ID]: "Indexing in progress",
    [BUKOWSKI_ID]: "Indexing in progress",
  } as Record<string, string>,
  paragraphs: [
    "文学史では、金額は細部として省かれやすい。",
    "しかし、一冊の本の値段、一日の酒代、家賃、賃金、郵送料、移動費は、その人がどのように書けたかを決める。",
    "確認済みの金額だけを使用し、現代換算や推定値を作らない。",
  ],
  note: "MVP: numeric values remain Indexing in progress until edition-level prices are verified.",
};

export const alcoholWithoutMyth = {
  title: "Alcohol without mythology",
  titleJa: "神話にしない酒",
  paragraphs: [
    "西村とブコウスキーは、酒を飲む作家として語られやすい。",
    "荷風の日記にも酒や食事は現れる。",
    "しかし酒を、反抗、自由、破滅の象徴だけとして扱うと、金銭、身体、孤独、社交、習慣、病気との関係が見えなくなる。",
    "Diary Observatoryでは、酒を作家の魅力として演出するのではなく、一日の時間を構成する行動として観測する。",
  ],
  layers: [
    {
      kind: "fact" as EpistemicKind,
      text: "確認された飲酒・飲食記録がある場合のみ Fact とする。",
    },
    {
      kind: "observation" as EpistemicKind,
      text: "飲酒が時間・金銭・身体へ及ぼす影響。",
    },
    {
      kind: "interpretation" as EpistemicKind,
      text: "文化産業が酒を作家像へ変換する過程。",
    },
  ],
  caution: "医学的診断は推測しない。",
};

export const repetitionSection = {
  title: "What repetition reveals",
  titleJa: "反復が明らかにするもの",
  items: [
    {
      writerId: KAFU_ID,
      label: "Kafū",
      text: "天候、庭、散歩、来客、身体",
    },
    {
      writerId: NISHIMURA_ID,
      label: "Nishimura",
      text: "出版社、原稿、酒、店、テレビ、移動",
    },
    {
      writerId: BUKOWSKI_ID,
      label: "Bukowski",
      text: "労働、酒場、競馬、投稿、執筆",
    },
  ],
  paragraphs: [
    "一度だけなら、偶然に見える。",
    "何度も繰り返されると、生活の構造が見える。",
    "そして、その反復が崩れたとき、身体、都市、制度の変化が見える。",
    "歩かなくなる。",
    "店へ行かなくなる。",
    "テレビから姿を消す。",
    "仕事を辞める。",
    "競馬場が閉じる。",
    "人が亡くなる。",
    "長期の日記は、反復そのものと、反復が終わる瞬間を記録する。",
  ],
};

export const disappearedSection = {
  title: "What disappeared from their cities?",
  titleJa: "三人の都市から、何が消えたか",
  categories: [
    {
      writerId: KAFU_ID,
      label: "Kafū",
      items: [
        "戦災で焼失した建物",
        "変化した街路",
        "消えた風俗",
        "再建された地域",
        "亡くなった知人",
      ],
    },
    {
      writerId: NISHIMURA_ID,
      label: "Nishimura",
      items: [
        "閉店した古書店",
        "終了したテレビ番組",
        "変化した出版経済圏",
        "消えた飲食店",
        "亡くなった関係者",
      ],
    },
    {
      writerId: BUKOWSKI_ID,
      label: "Bukowski",
      items: [
        "閉鎖・再開発された競馬場",
        "変化した郵便労働",
        "消えた酒場や小出版社",
        "変わった住宅地域",
        "亡くなった編集者や関係者",
      ],
    },
  ],
  note: "具体名は登録済み Entity のみ。件数は status から自動集計。",
};

export const relatedEntityIds = {
  kafu: [
    "entity-tokyo",
    "entity-azabu",
    "entity-ginza",
    "entity-asakusa",
    "entity-dancho-tei",
    "entity-asamoya",
  ],
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

export const remainedSection = {
  title: "What remained?",
  titleJa: "何が残ったか",
  layers: [
    { label: "Text", labelJa: "テクスト", text: "日記、手紙、詩、小説" },
    { label: "Routes", labelJa: "経路", text: "移動経路" },
    { label: "Place names", labelJa: "地名", text: "地名" },
    {
      label: "Institutions",
      labelJa: "制度",
      text: "出版社、郵便制度、文化施設",
    },
    {
      label: "Practices",
      labelJa: "実践",
      text: "散歩、掃除、投稿、飲酒、競馬",
    },
    {
      label: "Characters",
      labelJa: "人物像",
      text: "文学へ変形された人物",
    },
    {
      label: "Cultural memory",
      labelJa: "文化的記憶",
      text: "作家像、映像、批評、読者の記憶",
    },
  ],
  paragraphs: [
    "都市は、完全に残るわけでも、完全に消えるわけでもない。",
    "建物はなくなり、地名が残る。",
    "制度は変わり、習慣が残る。",
    "人は亡くなり、作家像だけが独り歩きする。",
    "日記は、異なる残り方を同じページに置く。",
  ],
};

export const livedRecorded = {
  title: "Lived / Recorded / Fictionalized",
  titleJa: "生きたこと、記録したこと、物語にしたこと",
  columns: [
    {
      writerId: KAFU_ID,
      label: "Kafū",
      lived: ["東京", "散歩", "庭", "出版", "戦争"],
      recorded: ["長期日記"],
      fictionalized: ["小説、随筆 — 具体対応は Source needed"],
    },
    {
      writerId: NISHIMURA_ID,
      label: "Nishimura",
      lived: ["出版", "古書", "酒", "人間関係"],
      recorded: ["日記", "随筆"],
      fictionalized: ["私小説"],
    },
    {
      writerId: BUKOWSKI_ID,
      label: "Bukowski",
      lived: ["労働", "酒場", "競馬", "投稿"],
      recorded: ["日記", "手紙", "詩"],
      fictionalized: ["自伝的フィクション", "Henry Chinaski (fictional)"],
    },
  ],
  caution:
    "実生活と作品の一対一対応を避ける。LifeTextRelation: documented / probable / interpreted / disputed / unknown。",
  relations: bukowskiLifeTextRelations,
};

export const indexedDays = {
  title: "Indexed days",
  titleJa: "索引化された日々",
  days: [
    {
      writerId: KAFU_ID,
      date: "January 1, 1918",
      summary: "A New Year’s Day without celebration",
      href: "/entries/1918-01-01-kafu-nagai",
      coming: false,
      verification: "Partial",
    },
    {
      writerId: NISHIMURA_ID,
      date: "May 2, 2011",
      summary: "A publisher, a bookstore, a live house",
      href: "/entries/2011-05-02-kenji-nishimura",
      coming: false,
      verification: "Partial",
    },
    {
      writerId: BUKOWSKI_ID,
      date: "No dated record",
      summary: "No dated record indexed yet.",
      href: "/diaries/captain-is-out-to-lunch",
      coming: true,
      verification: "Bibliographic verification needed",
    },
  ],
  note: "ブコウスキーの架空の日付は作らない。空欄は調査対象として残す。",
};

export const sameDayPossibility = {
  title: "One day, many cities",
  titleJa: "一つの日付、複数の都市",
  paragraphs: [
    "将来、同じ日付の東京とロサンゼルスを並べることができる。",
    "天候。",
    "仕事。",
    "食事。",
    "身体。",
    "移動。",
    "メディア。",
    "公共のニュース。",
    "同じ日でも、都市と生活条件が違えば、一日の形はまったく異なる。",
  ],
  slots: [
    { city: "Tokyo", status: "Indexed dates available" },
    { city: "Los Angeles", status: "Dated record research needed" },
    { city: "London / Paris / New York", status: "Open research slots" },
  ],
  cta: "Explore Same Day",
  href: "/same-day",
};

export const cultureTransition = {
  title: "From shared culture to generated culture",
  titleJa: "共有される文化から、生成される文化へ",
  steps: [
    "Kafū era — Print / newspapers / literary circles",
    "Nishimura era — Publishing / literary prizes / television",
    "Bukowski route — Small press / letters / readings / independent publishing",
    "Current era — SNS / streaming / recommendation systems / generative AI",
  ],
  paragraphs: [
    "現在は、過去の三つの経路が同時に存在する。",
    "大手メディア。",
    "小さなコミュニティー。",
    "個人発信。",
    "そして、AIによる個人向けの文章生成。",
    "しかし、文体を生成できても、一度しか生きられなかった生活は生成できない。",
  ],
};

export const excavationConcept = {
  title: "Not generation, but excavation.",
  titleJa: "生成ではなく、発掘。",
  paragraphs: [
    "荷風風の東京。",
    "西村賢太風の一日。",
    "ブコウスキー風の酒場。",
    "AIは、それらしい文章を作れる。",
    "しかし、1918年1月1日の寒い部屋も、2011年5月2日の高円寺も、郵便局勤務後の疲れた夜も、新しく作ることはできない。",
    "Diary Observatoryが扱うのは、もっともらしい人生ではない。",
    "実際に生きられた時間の痕跡である。",
  ],
};

export const comparisonStatusCopy = {
  title: "Comparison status",
  titleJa: "比較の現在状況",
  noteEn:
    "This comparison is provisional. It will change as more days, places, editions, and sources are indexed.",
  noteJa:
    "この比較は暫定的である。日付、場所、刊行版、出典が増えるたびに、三人の見え方も変わる。",
};

export const relatedComparisons = {
  published: [
    {
      title: "Four Urban Lives",
      titleJa: "四人の都市生活",
      href: "/compare/four-urban-lives",
    },
    {
      title: "From Kafū to Nishimura",
      titleJa: "荷風から西村へ",
      href: "/compare/kafu-nishimura",
    },
    {
      title: "Nishimura and Bukowski",
      titleJa: "西村賢太とブコウスキー",
      href: "/compare/nishimura-bukowski",
    },
  ],
  coming: [
    {
      title: "Kafū and Bukowski",
      subtitle: "Walking and labor",
    },
    {
      title: "Three cities through one date",
      subtitle: "Coming Same Day research",
    },
  ],
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
      title: "三つの都市、三つの生活速度",
      subtitle: "荷風・西村賢太・ブコウスキーの日記から",
      href: "/observations/three-cities-three-speeds",
    },
    {
      title: "平成の断腸亭日乗",
      subtitle: "西村賢太の日記に残る、消えていく東京",
      href: "/observations/heisei-dancho-tei-nichijo",
    },
  ],
  coming: [
    "都市は、平凡な一日から文学へ入る",
    "日記は、生活のインフラを残す",
    "一日の値段",
    "文体ではなく、生活の残滓",
  ],
};

export const urbanProfiles: UrbanDiaryProfile[] = [
  {
    writerId: KAFU_ID,
    cityId: "entity-tokyo",
    period: "1917–1959",
    primaryConditions: ["Weather", "Garden", "Walking", "Body"],
    movementPattern: "Walking as observation",
    literarySystemId: "sys-kafu",
    writingBodyProfileId: "body-kafu",
    recurringActions: ["天候", "庭", "散歩", "来客", "身体"],
    urbanNodeIds: [
      "entity-tokyo",
      "entity-azabu",
      "entity-ginza",
      "entity-asakusa",
      "entity-dancho-tei",
    ],
    disappearanceTypes: ["destroyed", "rebuilt", "transformed", "deceased"],
    verificationStatus: "partial",
  },
  {
    writerId: NISHIMURA_ID,
    cityId: "entity-tokyo",
    period: "Late Heisei",
    primaryConditions: ["Publishing", "Television", "Bookstores", "Alcohol"],
    movementPattern: "Cultural-institution circuit",
    literarySystemId: "sys-nishimura",
    writingBodyProfileId: "body-nishimura",
    recurringActions: ["出版社", "原稿", "酒", "店", "テレビ", "移動"],
    urbanNodeIds: [
      "entity-shinchosha",
      "entity-tomaru",
      "entity-koenji",
      "entity-showboat",
      "entity-tokyo-mx",
    ],
    disappearanceTypes: ["closed", "ended", "transformed", "deceased"],
    verificationStatus: "partial",
  },
  {
    writerId: BUKOWSKI_ID,
    cityId: "entity-los-angeles",
    period: "20th-century Los Angeles",
    primaryConditions: ["Labor", "Bars", "Racing", "Small press"],
    movementPattern: "Workplace / leisure / room circuit",
    literarySystemId: "sys-bukowski",
    writingBodyProfileId: "body-bukowski",
    recurringActions: ["労働", "酒場", "競馬", "投稿", "執筆"],
    urbanNodeIds: [
      "entity-los-angeles",
      "entity-la-post-office",
      "entity-hollywood-park",
    ],
    disappearanceTypes: ["closed", "transformed", "demolished"],
    verificationStatus: "partial",
  },
];

export const relatedPages = [
  { group: "Writer", title: "Kafū Nagai", href: "/writers/kafu-nagai" },
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
    group: "Comparison",
    title: "From Kafū to Nishimura",
    href: "/compare/kafu-nishimura",
  },
  {
    group: "Comparison",
    title: "Nishimura and Bukowski",
    href: "/compare/nishimura-bukowski",
  },
  {
    group: "Entry",
    title: "January 1, 1918",
    href: "/entries/1918-01-01-kafu-nagai",
  },
  {
    group: "Entry",
    title: "May 2, 2011",
    href: "/entries/2011-05-02-kenji-nishimura",
  },
  {
    group: "Diary",
    title: "断腸亭日乗",
    href: "/diaries/dancho-tei-nichijo",
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
  { group: "Same Day", title: "Same Day", href: "/same-day" },
];

export const researchQueues = [
  {
    id: "rq-bukowski-dated",
    title: "Bukowski dated diary entries",
    status: "research-needed",
  },
  {
    id: "rq-prices",
    title: "Verified prices / wages / postage",
    status: "source-needed",
  },
  {
    id: "rq-bars-presses",
    title: "LA bars and small presses as entities",
    status: "queued",
  },
  {
    id: "rq-kafu-bukowski",
    title: "Kafū × Bukowski pairwise comparison",
    status: "queued",
  },
];

export const comparisonSources: Source[] = [
  {
    id: "src-ud-kafu-diary",
    category: "primary",
    status: "verification-pending",
    label: "永井荷風『断腸亭日乗』",
    needed: true,
    note: "Primary diary — edition details needed. No long quotation.",
  },
  {
    id: "src-ud-nishimura-diary",
    category: "primary",
    status: "needed",
    label: "西村賢太の公刊日記・日乗類",
    needed: true,
    note: "Edition details needed.",
  },
  {
    id: "src-ud-bukowski-diary",
    category: "primary",
    status: "verification-pending",
    label:
      "Charles Bukowski, The Captain Is Out to Lunch and the Sailors Have Taken Over the Ship",
    needed: true,
    note: "Late diary — Edition / rights verification needed.",
  },
  {
    id: "src-ud-works",
    category: "primary",
    status: "needed",
    label: "Published literary works — novels, poems, essays",
    needed: true,
    note: "No invented ISBN / imprint.",
  },
  {
    id: "src-ud-letters",
    category: "primary",
    status: "needed",
    label: "Letter collections",
    needed: true,
  },
  {
    id: "src-ud-bio",
    category: "verification",
    status: "needed",
    label: "Biographical sources",
    needed: true,
  },
  {
    id: "src-ud-publishing",
    category: "verification",
    status: "verification-pending",
    label: "Publishing history — houses, prizes, small press",
    needed: true,
  },
  {
    id: "src-ud-labor",
    category: "verification",
    status: "needed",
    label: "Labor history — postal system / wage labor",
    needed: true,
    note: "Do not invent facility names or exact employment years.",
  },
  {
    id: "src-ud-media",
    category: "verification",
    status: "needed",
    label: "Media history — newspapers, television, readings",
    needed: true,
  },
  {
    id: "src-ud-places",
    category: "verification",
    status: "verification-pending",
    label: "Place verification — shops, buildings, racetracks, workplaces",
    needed: true,
  },
  {
    id: "src-ud-urban",
    category: "verification",
    status: "needed",
    label: "Urban history — war, reconstruction, redevelopment, closures",
    needed: true,
  },
];
