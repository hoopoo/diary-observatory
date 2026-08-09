import type {
  ChronologyItem,
  EpistemicKind,
  Source,
  WriterResearchQueueItem,
} from "@/lib/types";
import { HOROKI_ID, HOROKI_SLUG } from "@/data/diaries/horoki";
import { horokiEditions } from "@/data/editions/horoki";
import {
  HAYASHI_HOUSING_IDS,
  hayashiHousingRecords,
} from "@/data/housing/fumiko-hayashi";

export const HAYASHI_SLUG = "fumiko-hayashi";
export const HAYASHI_WRITER_ID = "writer-hayashi";

export const hayashiLead = [
  "林芙美子の文章には、",
  "移動する生活が残っている。",
  "家族と各地を転々とする。",
  "上京する。",
  "働く。",
  "部屋を借りる。",
  "食べるものに困る。",
  "恋愛する。",
  "原稿を書く。",
  "雑誌へ載る。",
  "本が売れる。",
  "家を建てる。",
  "作家として成功したあとも、",
  "かつての貧困や移動は、",
  "作品と作家像の中で繰り返された。",
];

export const whyHayashi = {
  title: "Why Fumiko Hayashi?",
  titleJa: "なぜ、林芙美子なのか",
  paragraphs: [
    "Diary Observatoryに林芙美子を加えることで、これまでの三人では弱かった生活領域が入る。",
    "女性が働くこと。家事と執筆が同じ一日の中にあること。住居が安定しないこと。食べることが切実な問題になること。家族や恋愛が、生活費と移動へ直接影響すること。成功後に得た家が、現在まで物理的に残っていること。",
    "この追加は、作家の人数を増やすためではない。観測できる生活の種類を増やすためである。",
  ],
};

export const hayashiOverview = {
  title: "A life carried from place to place",
  titleJa: "場所から場所へ運ばれた人生",
  layers: [
    {
      kind: "fact" as EpistemicKind,
      text: "生年1903、没年1951。日本。中心都市として東京を置く。『放浪記』は日記的素材から構成された自伝的作品として扱う。",
    },
    {
      kind: "observation" as EpistemicKind,
      text: "家族との移動、上京、複数の仕事、下宿や借家、投稿、成功、旅、戦争期の活動、落合の住居——生活条件が繰り返し変わった時間として見える。",
    },
    {
      kind: "interpretation" as EpistemicKind,
      text: "成功へ至る一直線の経歴ではなく、働きながら移動し、生活を維持しながら書く時間として読む。",
    },
  ],
};

export const primaryRecord = {
  title: "Primary diary-related work",
  titleJa: "中心となる日記的作品",
  workJa: "放浪記",
  workEn: "Hōrōki",
  englishDisplay: "Diary of a Vagabond (common English display — confirm preferred translation later)",
  sourceForm: "diary-derived-work",
  sourceFormJa: "日記的素材から構成された自伝的作品",
  notes: [
    "『放浪記』は生活記録を基礎にしながら、掲載、刊行、改訂の過程を経た作品である。",
    "日付付きの生活記録と、刊行作品として整えられた本文を区別する。",
  ],
  meta: [
    { label: "Original records", value: "Verification needed" },
    { label: "Serialization", value: "Bibliographic verification needed" },
    { label: "First book publication", value: "Verified source required (often cited as 1930)" },
    { label: "Later revised editions", value: "Multiple versions exist" },
    { label: "Textual status", value: "Version-sensitive" },
    { label: "Rights status", value: "Copyright and edition verification required" },
  ],
  href: `/diaries/${HOROKI_SLUG}`,
};

export const horokiVersionPanel = horokiEditions.map((ed) => ({
  id: ed.id,
  title: ed.title,
  titleJa: ed.titleJa ?? "",
  publicationYear: ed.publicationYear,
  publisher: ed.publisher ?? "—",
  baseText: ed.baseText ?? "—",
  additions: ed.additions ?? "—",
  omissions: ed.omissions ?? "—",
  structuralChanges: ed.structuralChanges ?? "—",
  verificationStatus: ed.verificationStatus,
  rightsStatus: ed.rightsStatus ?? "—",
}));

export const livedRecordedPublishedRevised = {
  title: "Lived / Recorded / Published / Revised",
  titleJa: "生きたこと、記録したこと、刊行したこと、書き直したこと",
  lived: [
    "移動",
    "労働",
    "下宿",
    "食事",
    "貧困",
    "恋愛",
    "投稿",
    "成功",
    "旅",
  ],
  recorded: [
    "日記的記録",
    "手帳",
    "書簡",
    "初期原稿",
    "雑誌掲載以前の素材",
  ],
  published: ["『放浪記』", "随筆", "小説", "紀行", "作品集"],
  revised: [
    "削除",
    "追加",
    "並べ替え",
    "表現変更",
    "人物や出来事の再構成",
  ],
  caution:
    "実生活と刊行本文を一対一対応させない。復元版を原日記そのものと呼ばない。",
};

export const hayashiTimeline: ChronologyItem[] = [
  {
    year: 1903,
    event: "Birth",
    eventJa: "出生",
    kind: "fact",
    verificationStatus: "verified",
  },
  {
    year: 1910,
    yearLabel: "Childhood",
    event: "Family movement across places — detailed route source-needed",
    eventJa: "家族と各地を移動（詳細な地名・順序は出典確認後）",
    kind: "observation",
    verificationStatus: "partial",
  },
  {
    year: 1916,
    yearLabel: "School years",
    event: "Relation to Onomichi — school dates source-needed",
    eventJa: "尾道との関係（在学期間等は出典確認後）",
    kind: "observation",
    verificationStatus: "partial",
  },
  {
    year: 1922,
    event: "Move to Tokyo (commonly cited — confirm with bibliography)",
    eventJa: "上京（通説的年次 — 書誌で確認）",
    kind: "observation",
    verificationStatus: "partial",
  },
  {
    year: 1923,
    yearLabel: "Early Tokyo years",
    event: "Multiple jobs, boarding, submission life — specifics source-needed",
    eventJa: "複数の仕事、下宿、投稿生活（職種詳細は出典確認後）",
    kind: "observation",
    verificationStatus: "partial",
  },
  {
    year: 1924,
    event: "Poetry magazine Futari — co-founders / imprint source-needed",
    eventJa: "詩誌『二人』創刊（共同者・刊行情報は出典確認後）",
    kind: "observation",
    verificationStatus: "partial",
  },
  {
    year: 1928,
    yearLabel: "Late 1920s",
    event: "Diary-like writing connects toward publication",
    eventJa: "日記的文章の発表と出版への接続",
    kind: "observation",
    verificationStatus: "partial",
  },
  {
    year: 1930,
    event: "Early book publication of Hōrōki — imprint source-needed",
    eventJa: "『放浪記』初期単行本（出版社・正確な刊行日は書誌から）",
    kind: "fact",
    verificationStatus: "partial",
  },
  {
    year: 1935,
    yearLabel: "1930s",
    event: "Writerly activity, travel, multiple publications — details pending",
    eventJa: "作家活動、旅、複数作品の刊行（詳細は別途検証）",
    kind: "observation",
    verificationStatus: "partial",
  },
  {
    year: 1941,
    event: "Life at Ochiai residence begins (confirm with official sources)",
    eventJa: "落合の住居での生活開始（公式資料で確認）",
    kind: "observation",
    verificationStatus: "partial",
  },
  {
    year: 1943,
    yearLabel: "Wartime and postwar",
    event:
      "Travel, reporting, writing — implement destinations only after sources; not romanticized",
    eventJa:
      "取材、旅行、作品執筆（渡航先等は出典後。美談化しない）",
    kind: "observation",
    verificationStatus: "partial",
  },
  {
    year: 1951,
    event: "Death",
    eventJa: "死去",
    kind: "fact",
    verificationStatus: "verified",
  },
  {
    year: 2026,
    yearLabel: "Present",
    event: "Ochiai residence remains as memorial hall",
    eventJa: "落合の住居が記念館として残る",
    kind: "fact",
    verificationStatus: "partial",
  },
];

export const hayashiAxes = [
  {
    id: "movement",
    label: "Movement",
    labelJa: "移動",
    items: ["引っ越し", "鉄道", "船", "徒歩"],
  },
  {
    id: "labor",
    label: "Labor",
    labelJa: "労働",
    items: ["工場", "店", "給仕", "事務 — 確認済みのみ"],
  },
  {
    id: "womens-work",
    label: "Women’s Work",
    labelJa: "女性の仕事",
    items: ["賃金", "割り当てられた仕事"],
  },
  {
    id: "housing",
    label: "Housing",
    labelJa: "住居",
    items: ["下宿", "借家", "間借り", "持ち家"],
  },
  {
    id: "food",
    label: "Food",
    labelJa: "食事",
    items: ["空腹", "買えるもの", "作るもの"],
  },
  {
    id: "money",
    label: "Money",
    labelJa: "金銭",
    items: ["賃金", "家賃", "食費", "原稿料"],
  },
  {
    id: "domestic",
    label: "Domestic Labor",
    labelJa: "家事",
    items: ["掃除", "炊事", "洗濯", "住居維持"],
  },
  {
    id: "writing",
    label: "Writing",
    labelJa: "執筆",
    items: ["日記", "詩", "投稿", "小説"],
  },
  {
    id: "publishing",
    label: "Publishing",
    labelJa: "出版",
    items: ["雑誌", "編集者", "改訂"],
  },
  {
    id: "relationships",
    label: "Relationships",
    labelJa: "関係",
    items: ["家族", "恋人", "友人", "編集者"],
  },
  {
    id: "travel",
    label: "Travel",
    labelJa: "旅",
    items: ["取材", "国内外 — 出典後"],
  },
  {
    id: "war",
    label: "War",
    labelJa: "戦争",
    items: ["移動", "報道", "作品 — 出典後"],
  },
  {
    id: "body",
    label: "Body",
    labelJa: "身体",
    items: ["疲労", "空腹", "病気", "過労"],
  },
  {
    id: "success",
    label: "Success",
    labelJa: "成功",
    items: ["収入", "住宅", "名声", "仕事量"],
  },
  {
    id: "archive",
    label: "Archive",
    labelJa: "アーカイブ",
    items: ["原稿", "版", "家", "記念館"],
  },
];

export const workingDayPanel = [
  { id: "paid", label: "Paid work", labelJa: "賃金労働" },
  { id: "domestic", label: "Domestic work", labelJa: "家事" },
  { id: "movement", label: "Movement", labelJa: "通勤・移動" },
  { id: "writing", label: "Writing", labelJa: "執筆" },
  { id: "submission", label: "Submission", labelJa: "投稿" },
  { id: "rest", label: "Rest", labelJa: "休息" },
  { id: "food", label: "Food", labelJa: "食事" },
  { id: "unknown", label: "Unknown time", labelJa: "記録されていない時間" },
];

export const womenWorkLayers = [
  {
    id: "explicit",
    label: "Explicit domestic action",
    labelJa: "本文に明記",
  },
  {
    id: "implied",
    label: "Implied domestic labor",
    labelJa: "生活条件から示唆",
  },
  {
    id: "context",
    label: "Historical gender context",
    labelJa: "外部資料",
  },
  { id: "unknown", label: "Unknown", labelJa: "記録なし" },
];

export const foodRecordNotice = {
  title: "Hunger is not a literary metaphor",
  titleJa: "空腹は、文学的比喩ではない",
  paragraphs: [
    "『放浪記』を読むとき、空腹や食事を、貧困文学の雰囲気としてだけ扱わない。",
    "何を食べたか。何を買えなかったか。誰から受け取ったか。自分で作ったか。店で食べたか。食事を抜いたか。",
    "食べることは、身体と金銭と時間が交差する場所である。",
  ],
  emptyNoteEn: "No verified food or cost records indexed yet.",
  emptyNoteJa: "確認済みの食事・金額記録は、まだ索引化されていません。",
};

export const tokyoCategories = [
  { id: "rooms", label: "Rooms", labelJa: "下宿、借家、住居" },
  { id: "workplaces", label: "Workplaces", labelJa: "職場" },
  { id: "publishers", label: "Publishers", labelJa: "出版社" },
  { id: "magazines", label: "Magazines", labelJa: "雑誌編集部" },
  { id: "cafes", label: "Cafés and restaurants", labelJa: "飲食店" },
  { id: "stations", label: "Stations", labelJa: "駅" },
  { id: "shops", label: "Shops", labelJa: "店" },
  { id: "friends", label: "Friends’ homes", labelJa: "知人宅" },
  { id: "medical", label: "Medical places", labelJa: "病院" },
];

export const placesBeforeTokyo = [
  {
    id: "onomichi",
    label: "Onomichi",
    labelJa: "尾道",
    note: "School / early life relation — dates source-needed",
  },
  {
    id: "moji",
    label: "Moji / Shimonoseki area",
    labelJa: "門司・下関周辺",
    note: "Family / early geography — confirm route differences",
  },
  {
    id: "other",
    label: "Other travelling locations",
    labelJa: "その他の移動地",
    note: "Source disagreement possible — do not force one birthplace narrative",
  },
];

export const publishingFlow = [
  { id: "lived", label: "Lived experience", labelJa: "生きた経験" },
  { id: "record", label: "Diary-like record", labelJa: "日記的記録" },
  {
    id: "serial",
    label: "Submission / serialization",
    labelJa: "投稿・連載",
  },
  { id: "edit", label: "Editorial selection", labelJa: "編集" },
  { id: "book", label: "Book publication", labelJa: "単行本" },
  { id: "revise", label: "Revision", labelJa: "改訂" },
  {
    id: "persona",
    label: "Public persona",
    labelJa: "「放浪する女性作家」という作家像",
  },
];

export const marketableLifeLayers = [
  {
    id: "documented",
    label: "Documented life",
    labelJa: "確認された生活",
  },
  {
    id: "published",
    label: "Published narrative",
    labelJa: "刊行作品の物語",
  },
  {
    id: "persona",
    label: "Public persona",
    labelJa: "社会へ流通した作家像",
  },
  {
    id: "myth",
    label: "Later mythology",
    labelJa: "後世に整理された成功物語",
  },
];

export const survivingHouse = {
  title: "After wandering, a house",
  titleJa: "放浪のあとに建てた家",
  paragraphs: [
    "移動と不安定な住居を経験した作家が、後年、自分の生活と執筆のための家を持つ。",
    "この家は、単なる成功の象徴ではない。仕事場。生活空間。庭。客を迎える場所。家事が行われる場所。書く身体を支える設計。現在まで残る物理的なアーカイブ。",
  ],
  entity: {
    name: "林芙美子記念館",
    nameEn: "Hayashi Fumiko Memorial Hall",
    nature: "real",
    type: "Residence / museum / archive",
    historicalRole: "Home and workplace",
    currentStatus: "Existing",
    verification: "Official source available — attach URL after review",
    coming: false,
    href: "/entities/hayashi-fumiko-memorial-hall" as string | null,
    futureHref: "/entities/hayashi-fumiko-memorial-hall",
  },
  concept: {
    title: "The surviving house can make the earlier rooms disappear.",
    titleJa: "残った家は、それ以前の部屋を見えなくすることがある。",
    paragraphs: [
      "成功後の家は残る。下宿は残りにくい。立派な書斎は撮影される。借りた小さな部屋は、住所すら分からなくなる。",
      "記念館だけを見ると、作家の生活が最初から安定した住居へ向かっていたように見える。",
      "Diary Observatoryでは、現存する家だけでなく、失われた部屋と住所不明の住居も同じHousing Timelineへ置く。",
    ],
  },
};

export const movementReasons = [
  { id: "family", label: "Family movement", labelJa: "家族事情" },
  { id: "economic", label: "Economic movement", labelJa: "仕事・生活費" },
  { id: "housing", label: "Housing movement", labelJa: "住居" },
  { id: "literary", label: "Literary travel", labelJa: "執筆・取材" },
  { id: "institutional", label: "Institutional travel", labelJa: "出版社・組織" },
  { id: "wartime", label: "Wartime travel", labelJa: "戦争・報道" },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
];

export const writingBodyItems = [
  { id: "hunger", label: "Hunger", labelJa: "空腹" },
  { id: "fatigue", label: "Fatigue", labelJa: "疲労" },
  { id: "sleep", label: "Sleep", labelJa: "睡眠" },
  { id: "illness", label: "Illness", labelJa: "病気" },
  { id: "travel", label: "Travel", labelJa: "移動負荷" },
  { id: "domestic", label: "Domestic labor", labelJa: "家事" },
  { id: "paid", label: "Paid labor", labelJa: "賃金労働" },
  { id: "writing", label: "Writing", labelJa: "執筆" },
  { id: "deadlines", label: "Deadlines", labelJa: "締切" },
  { id: "success", label: "Success workload", labelJa: "成功後の仕事量" },
];

export const bodyCausalLayers = [
  {
    id: "medical",
    label: "Documented medical fact",
    labelJa: "確認済みの医学的事実",
  },
  {
    id: "workload",
    label: "Documented workload",
    labelJa: "確認済みの仕事量",
  },
  {
    id: "contemporary",
    label: "Contemporary interpretation",
    labelJa: "当時の証言・評価",
  },
  {
    id: "later",
    label: "Later interpretation",
    labelJa: "後世の解釈",
  },
  {
    id: "unknown",
    label: "Unknown causal relation",
    labelJa: "因果関係不明",
  },
];

export const fourUrbanLives = {
  title: "A fourth urban life",
  titleJa: "四人目が変える比較",
  profiles: [
    {
      name: "Kafū Nagai",
      weight: "Environment",
      items: ["天候", "庭", "散歩", "長期日記", "近代東京"],
    },
    {
      name: "Kenji Nishimura",
      weight: "Media",
      items: ["出版社", "文学賞", "テレビ", "古書店", "平成東京"],
    },
    {
      name: "Charles Bukowski",
      weight: "Labor",
      items: ["郵便局", "小出版", "酒場", "競馬場", "ロサンゼルス"],
    },
    {
      name: "Fumiko Hayashi",
      weight: "Maintenance",
      weightJa: "生活維持",
      items: ["賃金労働", "下宿", "家事", "食事", "投稿", "移動", "東京"],
    },
  ],
  comingHref: "/compare/four-urban-lives",
};

export const hayashiBukowskiCompare = {
  title: "Work before recognition",
  titleJa: "評価される前の労働",
  shared: [
    "賃金労働",
    "不安定な生活",
    "投稿",
    "小規模媒体",
    "貧困経験",
    "自伝的素材",
    "成功後の作家神話",
  ],
  hayashi: [
    "女性の労働",
    "家事",
    "下宿",
    "家族との移動",
    "日本の出版制度",
    "日記的作品の版の変化",
  ],
  bukowski: [
    "郵便労働",
    "タイプ原稿",
    "郵送投稿",
    "小出版",
    "競馬",
    "ロサンゼルス",
  ],
  comingHref: "/compare/hayashi-bukowski",
};

export const hayashiKafuCompare = {
  title: "Two records of Tokyo",
  titleJa: "東京を残した二つの記録",
  kafu: [
    "長期継続日記",
    "天候",
    "散歩",
    "庭",
    "男性知識人の生活",
    "住居と都市観察",
  ],
  hayashi: [
    "日記的素材の文学化",
    "労働",
    "下宿",
    "食事",
    "女性の生活",
    "移動と住居獲得",
  ],
  comingHref: "/compare/kafu-hayashi",
};

export const selectedRecord = {
  emptyEn: "No dated record indexed yet.",
  emptyJa: "日付と底本を確認できた記録は、まだ索引化されていません。",
  researchTargetEn: "An early dated passage from Hōrōki",
  researchTargetJa: "『放浪記』の初期記録から、日付を確認できる一日",
  conditions: [
    "日付が確認できる",
    "使用版が明確",
    "初期記録と改訂版を区別できる",
    "長文転載を避けられる",
    "人、仕事、食事、住居、金額のいずれかを抽出できる",
  ],
};

export const hayashiResearchQueue: WriterResearchQueueItem[] = [
  {
    id: "rq-hayashi-1",
    title: "Hōrōki editions and textual formation",
    titleJa: "『放浪記』の版と成立過程",
    type: "textual-scholarship",
    priority: 1,
    status: "source-needed",
    sourceNeeded: true,
    note: "Serialization, first edition, revised, reconstructed — collation required",
  },
  {
    id: "rq-hayashi-2",
    title: "Early dated records",
    titleJa: "日付を確認できる初期記録",
    type: "entry",
    priority: 2,
    status: "queued",
    sourceNeeded: true,
    note: "Date, place, job, food, housing, money",
  },
  {
    id: "rq-hayashi-3",
    title: "Post-Tokyo employment history",
    titleJa: "上京後の職歴",
    type: "labor",
    priority: 3,
    status: "source-needed",
    sourceNeeded: true,
  },
  {
    id: "rq-hayashi-4",
    title: "Housing transitions",
    titleJa: "住居の変遷",
    type: "housing",
    priority: 4,
    status: "researching",
    sourceNeeded: true,
  },
  {
    id: "rq-hayashi-5",
    title: "Food and hunger",
    titleJa: "食事と空腹",
    type: "food",
    priority: 5,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-hayashi-6",
    title: "Wartime activity",
    titleJa: "戦争期の活動",
    type: "war",
    priority: 6,
    status: "source-needed",
    sourceNeeded: true,
    note: "Destinations, affiliations, reporting — historical context required",
  },
  {
    id: "rq-hayashi-7",
    title: "Cause of death and workload",
    titleJa: "死因と仕事量",
    type: "body",
    priority: 7,
    status: "disputed",
    sourceNeeded: true,
    note: "Separate medical fact from later overwork narratives",
  },
];

export const textEditionPolicy = {
  title: "Text and edition policy",
  titleJa: "本文と版の扱い",
  rules: [
    "長文転載をしない",
    "版を混ぜない",
    "初版の文章を改訂版として扱わない",
    "復元版を原日記そのものと呼ばない",
    "出典ページを確認できない引用を載せない",
    "引用が不要なら要約を優先する",
    "引用・要約には editionId を持たせる",
  ],
};

export const hayashiRecordCards = [
  {
    title: "放浪記",
    titleEn: "Hōrōki",
    titleJa: "日記的素材から構成された自伝的作品",
    type: "Diary-derived autobiographical work",
    periodLabel: "Version-sensitive",
    language: "Japanese",
    description:
      "Serialization, early book, revised and reconstructed editions must stay distinct. Not an unedited diary.",
    statusLabel: "Published · multi-edition",
    verificationLabel: "Partial / bibliographic needed",
    href: `/diaries/${HOROKI_SLUG}`,
  },
];

export const hayashiRelatedWriters = [
  {
    id: "rw-bukowski",
    name: "Charles Bukowski",
    nameJa: "チャールズ・ブコウスキー",
    connection: "Work before recognition",
    text: "賃金労働と投稿、貧困経験と自伝的素材。家事と版の変化は林側の軸。",
    cta: "View writer",
    href: "/writers/charles-bukowski",
    status: "available" as const,
  },
  {
    id: "rw-kafu",
    name: "Kafū Nagai",
    nameJa: "永井荷風",
    connection: "Two records of Tokyo",
    text: "同じ東京でも、歩く観測と、働き部屋を探す生活では見えるものが違う。",
    cta: "View writer",
    href: "/writers/kafu-nagai",
    status: "available" as const,
  },
  {
    id: "rw-nishimura",
    name: "Kenji Nishimura",
    nameJa: "西村賢太",
    connection: "Publishing and urban livelihood",
    text: "出版社と生活の回路。時代とジェンダーの条件は異なる。",
    cta: "View writer",
    href: "/writers/kenji-nishimura",
    status: "available" as const,
  },
  {
    id: "rw-roppa",
    name: "Roppa Furukawa",
    nameJa: "古川ロッパ",
    connection: "Same birth year (1903) — food / body / work",
    text: "食事と身体と仕事量。林は生活維持、ロッパは上演労働を軸にする。類似の過度な一般化はしない。",
    cta: "View writer",
    href: "/writers/furukawa-roppa",
    status: "available" as const,
  },
];

export const hayashiRelatedPages = [
  {
    group: "Diary",
    title: "放浪記 / Hōrōki",
    href: `/diaries/${HOROKI_SLUG}`,
  },
  {
    group: "Entity",
    title: "林芙美子記念館",
    href: "/entities/hayashi-fumiko-memorial-hall",
  },
  {
    group: "Observation",
    title: "生活維持は、文学の背景ではない",
    href: "/observations/maintenance-is-not-background",
  },
  {
    group: "Observation",
    title: "残った家、消えた部屋",
    href: "/observations/the-house-that-remained",
  },
  {
    group: "Observation",
    title: "一日の値段",
    href: "/observations/the-price-of-an-ordinary-day",
  },
  {
    group: "Observation",
    title: "編集者は消えたのか",
    href: "/observations/where-did-the-editor-go",
  },
  {
    group: "Observation",
    title: "選ばれなかった原稿",
    href: "/observations/the-manuscripts-that-were-not-chosen",
  },
  {
    group: "Observation",
    title: "プラットフォーム以前の小出版",
    href: "/observations/before-the-platform-small-press",
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
  {
    group: "Coming comparison",
    title: "Hayashi and Bukowski",
    href: "/compare/hayashi-bukowski",
  },
  {
    group: "Coming comparison",
    title: "Kafū and Hayashi",
    href: "/compare/kafu-hayashi",
  },
  {
    group: "Coming comparison",
    title: "Hayashi and Roppa",
    href: "/compare/hayashi-roppa",
  },
  {
    group: "Writer",
    title: "Roppa Furukawa",
    href: "/writers/furukawa-roppa",
  },
];

export const hayashiHousing = hayashiHousingRecords;
export const hayashiHousingIds = [...HAYASHI_HOUSING_IDS];
export const hayashiWorkId = HOROKI_ID;

export const hayashiSources: Source[] = [
  {
    id: "src-hayashi-museum",
    category: "verification",
    status: "needed",
    label: "Shinjuku City Hayashi Fumiko Memorial Hall — official materials",
    needed: true,
    note: "Attach official URL after review. No invented links.",
  },
  {
    id: "src-hayashi-ndl",
    category: "verification",
    status: "needed",
    label: "National Diet Library — person / bibliographic records",
    needed: true,
  },
  {
    id: "src-horoki-biblio",
    category: "verification",
    status: "needed",
    label: "Hōrōki bibliographic records",
    needed: true,
  },
  {
    id: "src-horoki-textual",
    category: "verification",
    status: "needed",
    label: "Textual scholarship on Hōrōki formation and revision",
    needed: true,
  },
  {
    id: "src-hayashi-primary",
    category: "primary",
    status: "verification-pending",
    label: "Primary works — edition-specific Hōrōki, essays, letters",
    needed: true,
    note: "Edition ID required for any excerpt.",
  },
  {
    id: "src-hayashi-publishing",
    category: "verification",
    status: "needed",
    label: "Publishing history — magazines, houses, editors",
    needed: true,
  },
  {
    id: "src-hayashi-labor",
    category: "verification",
    status: "needed",
    label: "Labor history — women’s work and wages",
    needed: true,
  },
  {
    id: "src-hayashi-housing",
    category: "verification",
    status: "needed",
    label: "Housing history — boarding, rental, Ochiai",
    needed: true,
  },
  {
    id: "src-hayashi-food",
    category: "verification",
    status: "needed",
    label: "Food history — meals, prices",
    needed: true,
  },
  {
    id: "src-hayashi-war",
    category: "verification",
    status: "needed",
    label: "War history — wartime travel and reporting context",
    needed: true,
  },
];

export function buildHayashiWorldStatus(
  counts: Partial<Record<string, number>>,
) {
  return {
    title: "Indexed world around Hayashi",
    titleJa: "林芙美子を取り巻く索引世界",
    counts,
    note: "Most workplaces and rooms remain Not indexed. Surviving house must not erase earlier absences.",
    noteJa:
      "職場や部屋の多くは未索引。残った家が、それ以前の欠落を消さないようにする。",
  };
}
