import type {
  ChronologyItem,
  EpistemicKind,
  Source,
  SurvivalSummaryData,
} from "@/lib/types";

export const NISHIMURA_SLUG = "kenji-nishimura";
export const NISHIMURA_WRITER_ID = "writer-nishimura";

export const nishimuraLead = [
  "西村賢太の日記には、本人の生活だけでなく、平成後期の出版、テレビ、古書店、ライブハウス、飲食店、編集者との関係が残されている。",
  "作家本人は2022年に亡くなった。",
  "しかし、日記を開くと、出版社へ向かい、古書店を覗き、テレビ取材を受け、夜には酒を飲む一日が再び始まる。",
];

export const nishimuraOverview = {
  title: "A life recorded through ordinary days",
  titleJa: "日常の記録から見える作家の生",
  paragraphs: [
    {
      kind: "fact" as EpistemicKind,
      text: "西村賢太は、自身の貧困、怒り、酒、孤独、人間関係を私小説として書いた。",
    },
    {
      kind: "observation" as EpistemicKind,
      text: "日記には、作品になる前の生活がさらに直接的に残る。起床時刻。原稿の進行。編集者からの電話。購入した古書。テレビ収録。飲酒。移動。体調。",
    },
    {
      kind: "interpretation" as EpistemicKind,
      text: "そこから、作家本人だけではなく、当時の東京と文化産業が見えてくる。",
    },
  ],
};

export const nishimuraTimeline: ChronologyItem[] = [
  {
    year: 1967,
    event: "Born in Tokyo.",
    eventJa: "東京都に生まれる",
    kind: "fact",
  },
  {
    year: 2000,
    event: "Publishes works as a private-fiction novelist.",
    eventJa: "私小説作家として作品を発表",
    kind: "fact",
  },
  {
    year: 2011,
    event: "Receives the Akutagawa Prize for Kueki Ressha.",
    eventJa: "『苦役列車』で芥川賞受賞",
    kind: "fact",
  },
  {
    year: 2011,
    event: "Television appearances, interviews and talks increase.",
    eventJa: "テレビ出演、取材、対談が増える",
    kind: "observation",
  },
  {
    year: 2012,
    event:
      "Through the 2010s, a life moving between publishers, used bookstores, live houses and restaurants remains in the diary.",
    eventJa:
      "2010年代、出版社、古書店、ライブハウス、飲食店を往復する生活が日記に残る",
    kind: "observation",
  },
  {
    year: 2022,
    event: "Dies.",
    eventJa: "死去",
    kind: "fact",
  },
  {
    year: 2026,
    event:
      "Diary Observatory begins observing the present status of the world recorded in the diaries.",
    eventJa:
      "Diary Observatoryで日記に残る世界の現在状況を観測",
    kind: "observation",
  },
];

/** Diary work card for the Writer Observatory — no invented bibliography. */
export const nishimuraDiaryWorks = [
  {
    id: "diary-nishimura-nichijo",
    title: "西村賢太の日記",
    titleEn: "Kenji Nishimura’s diaries",
    type: "Diary / Daily record",
    periodLabel: "Period: edition details needed",
    language: "Japanese",
    description:
      "原稿、編集者、出版社、古書店、テレビ番組、酒、食事、身体、人間関係が細かく記録されている。",
    statusLabel: "Primary source",
    verificationLabel: "Edition details needed",
    href: "/diaries/isshi-shosetsukaki-no-nichijo",
  },
];

export const nishimuraEntityGroups: Array<{
  id: string;
  label: string;
  labelJa: string;
  entityIds: string[];
}> = [
  {
    id: "publishers",
    label: "Publishers",
    labelJa: "出版社",
    entityIds: ["entity-shinchosha", "entity-shincho-bunko"],
  },
  {
    id: "bookstores",
    label: "Bookstores",
    labelJa: "書店",
    entityIds: ["entity-tomaru"],
  },
  {
    id: "live-houses",
    label: "Live Houses",
    labelJa: "ライブハウス",
    entityIds: ["entity-showboat"],
  },
  {
    id: "media",
    label: "Broadcasters / Programs",
    labelJa: "放送局・番組",
    entityIds: ["entity-tokyo-mx", "entity-zip"],
  },
  {
    id: "places",
    label: "Places",
    labelJa: "場所",
    entityIds: [
      "entity-oji-honcho",
      "entity-koenji",
      "entity-shinjuku",
      "entity-iidabashi",
    ],
  },
  {
    id: "people",
    label: "People",
    labelJa: "人物",
    entityIds: [
      "entity-nishimura-person",
      "entity-editor-unnamed",
      "entity-tomikawa",
    ],
  },
];

export const nishimuraAxes = [
  {
    id: "work",
    label: "Work",
    labelJa: "仕事",
    items: ["原稿", "校正", "編集者", "出版社"],
  },
  {
    id: "media",
    label: "Media",
    labelJa: "メディア",
    items: ["テレビ出演", "ロケ", "取材", "番組"],
  },
  {
    id: "places",
    label: "Places",
    labelJa: "場所",
    items: ["王子本町", "高円寺", "新宿", "飯田橋"],
  },
  {
    id: "books",
    label: "Books",
    labelJa: "本",
    items: ["古書", "文庫", "購入記録", "書店"],
  },
  {
    id: "food-drink",
    label: "Food & Drink",
    labelJa: "食事と酒",
    items: ["酒", "蕎麦", "外食", "深夜の食事"],
  },
  {
    id: "body",
    label: "Body",
    labelJa: "身体",
    items: ["疲労", "睡眠", "二日酔い", "病気", "老い"],
  },
  {
    id: "money",
    label: "Money",
    labelJa: "金額",
    items: ["原稿料", "印税", "本の価格", "生活費"],
  },
  {
    id: "relationships",
    label: "Relationships",
    labelJa: "関係",
    items: ["編集者", "作家", "知人", "出演者"],
  },
];

export const nishimuraFragments = [
  {
    date: "May 2, 2011",
    dateSlug: "2011-05-02-kenji-nishimura",
    locations: ["Shinjuku", "Koenji"],
    events: [
      "新潮社で仕事",
      "高円寺へ移動",
      "都丸書店に立ち寄る",
      "古書を購入",
      "ShowBoatでライブを見る",
    ],
    sourceTitle: "西村賢太の日記",
    sourceNote:
      "原文の長い引用は避ける。出来事の要約のみ。書誌の詳細版情報は確認中。",
    relatedEntityIds: [
      "entity-shinchosha",
      "entity-koenji",
      "entity-tomaru",
      "entity-showboat",
    ],
    coming: false,
  },
];

export const nishimuraGeography = [
  {
    id: "entity-oji-honcho",
    name: "Oji Honcho",
    nameJa: "王子本町",
    role: "Home / writing / daily life",
    roleJa: "生活・執筆の拠点",
    latitude: null as number | null,
    longitude: null as number | null,
  },
  {
    id: "entity-shinjuku",
    name: "Shinjuku",
    nameJa: "新宿",
    role: "Publishing / meetings / books",
    roleJa: "出版・打ち合わせ・本",
    latitude: null as number | null,
    longitude: null as number | null,
  },
  {
    id: "entity-iidabashi",
    name: "Iidabashi",
    nameJa: "飯田橋",
    role: "Broadcasters / publishing / work",
    roleJa: "放送・出版・仕事",
    latitude: null as number | null,
    longitude: null as number | null,
  },
  {
    id: "entity-koenji",
    name: "Koenji",
    nameJa: "高円寺",
    role: "Used bookstores / live music",
    roleJa: "古書店・ライブ",
    latitude: null as number | null,
    longitude: null as number | null,
  },
];

export const nishimuraMediaEcology = {
  title: "When television still visited writers",
  titleJa: "まだテレビが作家を訪ねてきた時代",
  flow: [
    "Writer",
    "Publisher",
    "Literary Prize",
    "Bookstore",
    "Newspaper / Magazine",
    "Television",
    "Public recognition",
  ],
  paragraphs: [
    "西村賢太の時代には、文学賞、出版社、書店、新聞、テレビが連動し、一人の作家を社会的な人物へ押し上げていた。",
    "現在は、YouTube、Netflix、SNS、推薦アルゴリズム、生成AIによって、文化消費の経路が分散している。",
    "これは文化の衰退ではなく、文化産業の構造変化である。",
  ],
};

export const nishimuraRelatedWriters = [
  {
    id: "writer-kafu",
    name: "Kafū Nagai",
    nameJa: "永井荷風",
    connection: "Tokyo / diary / urban disappearance",
    text: "荷風の日記には、近代東京が消えていく過程が残った。西村の日記には、平成の出版、テレビ、書店文化が消えていく直前の姿が残っている。",
    cta: "Open Kafū Writer Observatory",
    href: "/writers/kafu-nagai",
    status: "available" as const,
  },
  {
    id: "writer-bukowski",
    name: "Charles Bukowski",
    nameJa: "チャールズ・ブコウスキー",
    connection: "Alcohol / labor / private fiction / city",
    text: "西村が平成東京の出版文化を書いたように、ブコウスキーはロサンゼルスの労働、酒場、競馬、貧困、老いを書いた。",
    cta: "View Charles Bukowski",
    href: "/writers/charles-bukowski",
    status: "available" as const,
  },
  {
    id: "writer-hayashi",
    name: "Fumiko Hayashi",
    nameJa: "林芙美子",
    connection: "Publishing / livelihood / rooms / women’s work",
    text: "出版社と生活の回路。林は賃金労働・下宿・食事・版の変化を軸にし、西村は平成のメディア連鎖を軸にする。",
    cta: "Open Hayashi Writer Observatory",
    href: "/writers/fumiko-hayashi",
    status: "available" as const,
  },
  {
    id: "writer-roppa",
    name: "Roppa Furukawa",
    nameJa: "古川ロッパ",
    connection: "Media / popularity / performing body",
    text: "劇場・映画・ラジオから、平成のテレビ／出版社メディアへ。観客と人気が一日の条件になる点で接続する。",
    cta: "Open Roppa Writer Observatory",
    href: "/writers/furukawa-roppa",
    status: "available" as const,
  },
];

export const nishimuraSources: Source[] = [
  {
    id: "src-w-primary-diaries",
    category: "primary",
    status: "primary-unavailable",
    label: "西村賢太の公刊日記・日乗類",
    note: "正式な書名・巻数・版情報は書誌確認中。長い転載はしない。",
    needed: true,
  },
  {
    id: "src-w-primary-kueki",
    category: "primary",
    status: "verification-pending",
    label: "『苦役列車』（芥川賞受賞作）",
    note: "受賞事実の参照枠。版情報は確認後に補充。",
  },
  {
    id: "src-w-bio",
    category: "editorial",
    status: "needed",
    label: "公式略歴・出版社資料",
    needed: true,
    note: "Biographical sources — Source needed",
  },
  {
    id: "src-w-shinchosha",
    category: "verification",
    status: "verified",
    label: "新潮社 公式サイト",
    url: "https://www.shinchosha.co.jp/",
  },
  {
    id: "src-w-tokyo-mx",
    category: "verification",
    status: "verified",
    label: "TOKYO MX 公式サイト",
    url: "https://s.mxtv.jp/",
  },
  {
    id: "src-w-tomaru",
    category: "verification",
    status: "needed",
    label: "都丸書店の現況確認",
    needed: true,
  },
  {
    id: "src-w-showboat",
    category: "verification",
    status: "needed",
    label: "ShowBoat の会場同一性と現況",
    needed: true,
  },
  {
    id: "src-w-method",
    category: "editorial",
    status: "verified",
    label: "Diary Observatory editorial method",
    note: "Fact / Observation / Interpretation の区分。",
  },
];

export const nishimuraRelatedPages = {
  featuredObservation: {
    title: "平成の断腸亭日乗",
    href: "/observations/heisei-dancho-tei-nichijo",
  },
  essayObservation: {
    title: "三つの都市、三つの生活速度",
    href: "/observations/three-cities-three-speeds",
  },
  latestObservation: {
    title: "選ばれなかった原稿",
    href: "/observations/the-manuscripts-that-were-not-chosen",
  },
  editorObservation: {
    title: "編集者は消えたのか",
    href: "/observations/where-did-the-editor-go",
  },
  pressObservation: {
    title: "プラットフォーム以前の小出版",
    href: "/observations/before-the-platform-small-press",
  },
  moneyObservation: {
    title: "一日の値段",
    href: "/observations/the-price-of-an-ordinary-day",
  },
  maintenanceObservation: {
    title: "生活維持は、文学の背景ではない",
    href: "/observations/maintenance-is-not-background",
  },
  alcoholObservation: {
    title: "酒は、作家を説明しすぎる",
    href: "/observations/alcohol-explains-writers-too-easily",
  },
  entities: [
    { title: "都丸書店", href: "/entities/tomaru-shoten" },
    { title: "新潮社", href: "/entities/shinchosha" },
    { title: "ShowBoat", href: "/entities/showboat" },
    { title: "TOKYO MX", href: "/entities/tokyo-mx" },
  ],
  diaries: [
    {
      title: "西村賢太の日記",
      href: "/diaries/isshi-shosetsukaki-no-nichijo",
    },
  ],
  comparison: {
    title: "荷風から西村へ",
    href: "/compare/kafu-nishimura",
  },
  comparisonBukowski: {
    title: "西村賢太とブコウスキー",
    href: "/compare/nishimura-bukowski",
  },
  comparisonUrban: {
    title: "三人の都市記録者",
    href: "/compare/urban-diarists",
  },
  comparisonFour: {
    title: "四人の都市生活",
    href: "/compare/four-urban-lives",
  },
};

export function buildNishimuraWorldStatus(
  counts: Partial<Record<string, number>>,
): SurvivalSummaryData {
  const order = [
    "existing",
    "closed",
    "ended",
    "transformed",
    "deceased",
    "unknown",
  ] as const;

  return {
    label: "What remains",
    labelJa: "何が残っているか",
    buckets: order.map((status) => ({
      status: status === "transformed" ? "transformed" : status,
      count: counts[status] ?? 0,
    })),
    note: "This is not a score. It is a record of what remains, what has changed, and what can no longer be verified.",
    noteJa:
      "これは点数ではない。何が残り、何が変わり、何が確認できなくなったかを記録する。",
  };
}
