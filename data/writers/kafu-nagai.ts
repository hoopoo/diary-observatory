import type {
  ChronologyItem,
  EpistemicKind,
  EntityStatus,
  Source,
  SurvivalSummaryData,
} from "@/lib/types";

export const KAFU_SLUG = "kafu-nagai";
export const KAFU_WRITER_ID = "writer-kafu";

export const kafuLead = [
  "永井荷風の『断腸亭日乗』には、文学者としての思索だけでなく、天候、庭木、歯痛、食事、来客、出版社、街歩き、戦争、空襲、東京の変化が記録されている。",
  "本人は都市史を書くつもりではなかった。",
  "しかし、日々の細部を書き続けた結果、日記は近代東京の巨大な生活記録になった。",
];

export const kafuOverview = {
  title: "A city recorded through repetition",
  titleJa: "反復によって記録された都市",
  paragraphs: [
    {
      kind: "observation" as EpistemicKind,
      text: "荷風の日記には、同じような一日が何度も現れる。天気を見る。庭の木を見る。散歩に出る。知人と会う。本を読む。原稿を書く。食事をする。身体の不調を記す。",
    },
    {
      kind: "observation" as EpistemicKind,
      text: "その反復の中へ、都市の変化、戦争、空襲、建物の消失、人間関係の変化が入ってくる。",
    },
    {
      kind: "interpretation" as EpistemicKind,
      text: "大事件だけを追わず、平凡な一日を積み重ねたことで、変化の速度が見える。",
    },
  ],
};

export const kafuTimeline: ChronologyItem[] = [
  {
    year: 1879,
    event: "Born in Tokyo.",
    eventJa: "東京に生まれる",
    kind: "fact",
    verificationStatus: "verified",
  },
  {
    year: 1917,
    event: "Begins keeping Danchōtei Nichijō.",
    eventJa: "『断腸亭日乗』の記録が始まる",
    kind: "fact",
    verificationStatus: "verified",
  },
  {
    year: 1920,
    yearLabel: "1920s–1930s",
    event:
      "Continuously records Tokyo streets, publishing, relationships, garden, walks, and meals.",
    eventJa: "東京の街、出版、人間関係、庭、散歩、食事を継続的に記録",
    kind: "observation",
    verificationStatus: "partial",
  },
  {
    year: 1940,
    yearLabel: "1940s",
    event: "Records wartime Tokyo, air raids, and changes in living conditions.",
    eventJa: "戦時下の東京、空襲、生活環境の変化を記録",
    kind: "observation",
    verificationStatus: "partial",
  },
  {
    year: 1945,
    event: "Records urban life around the end of the war.",
    eventJa: "敗戦前後の都市と生活を記録",
    kind: "fact",
    verificationStatus: "partial",
  },
  {
    year: 1959,
    event: "Dies. The diary record ends.",
    eventJa: "死去。日記の記録も終わる",
    kind: "fact",
    verificationStatus: "verified",
  },
  {
    year: 2026,
    event:
      "Diary Observatory begins matching Tokyo in the diary against the present.",
    eventJa: "Diary Observatoryで、日記に残る東京を現在と照合する",
    kind: "observation",
    verificationStatus: "verified",
  },
];

export const kafuAxes = [
  {
    id: "weather",
    label: "Weather",
    labelJa: "晴雨、寒暖、季節、風、光",
    items: ["晴", "雨", "雪", "風", "寒", "暑"],
  },
  {
    id: "garden",
    label: "Garden",
    labelJa: "庭木、花、鳥、落葉、樹影",
    items: ["庭木", "花", "鳥", "落葉", "樹影"],
  },
  {
    id: "walking",
    label: "Walking",
    labelJa: "散歩、街路、橋、駅、寺社",
    items: ["散歩", "街路", "橋", "駅", "寺社"],
  },
  {
    id: "body",
    label: "Body",
    labelJa: "歯痛、疲労、病気、老い、睡眠",
    items: ["歯痛", "疲労", "病気", "老い", "睡眠"],
  },
  {
    id: "food",
    label: "Food & Drink",
    labelJa: "食事、酒、菓子、外食",
    items: ["食事", "酒", "菓子", "外食"],
  },
  {
    id: "publishing",
    label: "Publishing",
    labelJa: "原稿、出版社、書店、編集者",
    items: ["原稿", "出版社", "書店", "編集者"],
  },
  {
    id: "people",
    label: "People",
    labelJa: "来客、知人、作家、芸術家",
    items: ["来客", "知人", "作家", "芸術家"],
  },
  {
    id: "city",
    label: "City",
    labelJa: "東京の街、店、建物、歓楽街",
    items: ["店", "建物", "歓楽街", "街路"],
  },
  {
    id: "war",
    label: "War",
    labelJa: "統制、空襲、焼失、敗戦",
    items: ["統制", "空襲", "焼失", "敗戦"],
  },
  {
    id: "time",
    label: "Time",
    labelJa: "同じ場所、同じ季節、反復する習慣",
    items: ["季節", "習慣", "反復"],
  },
];

export const kafuSelectedDays = [
  {
    date: "January 1, 1918",
    dateSlug: "1918-01-01-kafu-nagai",
    city: "Tokyo",
    summary:
      "例年通り特別なことはせず、家の中が暖かくなるのを待ち、片づけと掃除をする。",
    sourceNote:
      "原文引用ではない。確認済み内容の要約のみ。Daily Observatory へ接続。",
    coming: false,
    relatedEntityIds: ["entity-tokyo", "entity-azabu"],
  },
  {
    date: "January 2, 1918",
    dateSlug: "1918-01-02-kafu-nagai",
    city: "Tokyo",
    summary: "将来追加できる構造のためのプレースホルダ。本文要約は未登録。",
    sourceNote: "Coming entry — not yet summarized from a verified edition.",
    coming: true,
    relatedEntityIds: [],
  },
  {
    date: "January 3, 1918",
    dateSlug: "1918-01-03-kafu-nagai",
    city: "Tokyo",
    summary: "将来追加できる構造のためのプレースホルダ。本文要約は未登録。",
    sourceNote: "Coming entry — not yet summarized from a verified edition.",
    coming: true,
    relatedEntityIds: [],
  },
];

export const kafuRepetitionAxes = [
  { id: "weather", label: "Weather observed", labelJa: "天候を記した日" },
  { id: "garden", label: "Garden observed", labelJa: "庭を見た日" },
  { id: "walk", label: "Walk taken", labelJa: "散歩した日" },
  { id: "visitors", label: "Visitors", labelJa: "来客があった日" },
  { id: "pain", label: "Pain or illness", labelJa: "身体不調を記した日" },
  { id: "writing", label: "Writing", labelJa: "原稿、書簡、執筆" },
  { id: "food", label: "Food and drink", labelJa: "食事、酒" },
];

export const kafuGeography = [
  {
    id: "entity-azabu",
    name: "Azabu",
    nameJa: "麻布",
    type: "District",
    relationship: "Lived / recorded geography",
    relationshipJa: "居住・記録の地理",
    period: "Diary period — details source-needed",
    statusNote: "District persists; shop-level survival is separate",
    href: "/entities/azabu",
    verificationStatus: "needs-source" as const,
    relatedEntryCount: null as number | null,
  },
  {
    id: "entity-ginza",
    name: "Ginza",
    nameJa: "銀座",
    type: "District",
    relationship: "Urban walking / cultural geography",
    relationshipJa: "街歩き・文化地理",
    period: "Diary appearances — source-needed per entry",
    statusNote: "District exists; specific venues unverified here",
    href: "/entities/ginza",
    verificationStatus: "needs-source" as const,
    relatedEntryCount: null as number | null,
  },
  {
    id: "entity-asakusa",
    name: "Asakusa",
    nameJa: "浅草",
    type: "District",
    relationship: "Downtown / pleasure geography in diary",
    relationshipJa: "下町・歓楽の地理",
    period: "Diary period",
    statusNote: "Transformed urban tissue — not a single shop",
    href: "/entities/asakusa",
    verificationStatus: "needs-source" as const,
    relatedEntryCount: null as number | null,
  },
  {
    id: "entity-mukojima",
    name: "Mukojima",
    nameJa: "向島",
    type: "District",
    relationship: "Recorded place in diary geography",
    relationshipJa: "日記地理に登場",
    period: "Diary appearances — source-needed",
    statusNote: "Place-name verified as Tokyo district; diary links pending",
    href: "/entities/mukojima",
    verificationStatus: "needs-source" as const,
    relatedEntryCount: null as number | null,
  },
  {
    id: "entity-ichikawa",
    name: "Ichikawa",
    nameJa: "市川",
    type: "City",
    relationship: "Residence / living geography (details source-needed)",
    relationshipJa: "居住・生活地理（詳細は出典確認）",
    period: "Source-needed for exact years",
    statusNote: "Administrative place exists",
    href: "/entities/ichikawa",
    verificationStatus: "needs-source" as const,
    relatedEntryCount: null as number | null,
  },
];

export const kafuCityLayers = [
  {
    id: "1910s",
    label: "1910s",
    text: "近代都市の生活、庭、出版、交友",
    note: "Connected to the diary’s opening years — details per entry source-needed.",
    verificationStatus: "partial" as const,
  },
  {
    id: "1920s",
    label: "1920s",
    text: "震災後の都市変化",
    note: "Only when diary or verified research is attached. source-needed.",
    verificationStatus: "needs-source" as const,
  },
  {
    id: "1930s",
    label: "1930s",
    text: "歓楽街、街歩き、文化環境",
    note: "General literary geography — entry-level verification pending.",
    verificationStatus: "needs-source" as const,
  },
  {
    id: "1940s",
    label: "1940s",
    text: "戦時統制、空襲、焼失、敗戦",
    note: "War entries require confirmed diary text location before detail.",
    verificationStatus: "partial" as const,
  },
  {
    id: "1950s",
    label: "1950s",
    text: "戦後の都市、老い、生活の変化",
    note: "Late diary years — body and city change; details source-needed.",
    verificationStatus: "partial" as const,
  },
];

export const kafuWeatherArchive = {
  title: "Weather as archive",
  titleJa: "天候という記録",
  paragraphs: [
    "荷風は、晴雨、寒暖、風、樹影、日暮れの時刻、季節の変化を繰り返し記した。",
    "天候は背景ではない。",
    "身体の調子、外出の可否、庭の見え方、街の歩き方を決める条件だった。",
    "日記に残る天候を年単位で索引化すると、都市の生活感覚を再構成できる。",
  ],
  weatherTerms: ["晴", "雨", "雪", "風", "寒", "暑"],
  seasonal: ["花", "落葉", "樹影", "鳥", "日照"],
  bodyRelation: ["歯痛", "疲労", "外出", "睡眠"],
};

export const kafuBodyArchive = {
  title: "The body inside the diary",
  titleJa: "日記の中の身体",
  paragraphs: [
    "都市は目で見るだけではない。",
    "歯が痛ければ、歩く距離も食事も変わる。寒ければ、外出せず家の中で過ごす。老いれば、同じ街も違って見える。",
    "荷風の日記には、都市の変化と同時に、それを見る身体の変化が残る。",
  ],
  items: [
    { id: "dental", label: "Dental pain", labelJa: "歯痛" },
    { id: "fatigue", label: "Fatigue", labelJa: "疲労" },
    { id: "sleep", label: "Sleep", labelJa: "睡眠" },
    { id: "appetite", label: "Appetite", labelJa: "食欲" },
    { id: "mobility", label: "Mobility", labelJa: "歩行、外出" },
    { id: "aging", label: "Aging", labelJa: "老い" },
    { id: "medical", label: "Medical care", labelJa: "医師、治療、薬" },
  ],
  note: "未確認の病名や診断を推測しない。Indexing in progress.",
};

export const kafuWarEntries = [
  {
    id: "war-1945-03-10",
    date: "March 10, 1945",
    label: "Tokyo air raid",
    labelJa: "東京大空襲",
    href: "/same-day/1945-03-10",
    comingHref: "/compare#compare-1945-03-10",
    status: "Archive research needed" as const,
  },
  {
    id: "war-1945-08-15",
    date: "August 15, 1945",
    label: "End of war",
    labelJa: "敗戦",
    href: "/compare#compare-1945-08-15",
    comingHref: "/compare#compare-1945-08-15",
    status: "Archive research needed" as const,
  },
];

export const kafuWarCopy = {
  title: "When war enters an ordinary day",
  titleJa: "戦争が日常へ入ってくるとき",
  paragraphs: [
    "戦争は、日記の中へ最初から大事件として現れるとは限らない。",
    "物資が減る。街灯が暗くなる。店が閉まる。知人の消息が途絶える。建物が焼ける。移動できる範囲が変わる。",
    "日記は、戦争が生活の細部へ侵入する過程を記録する。",
  ],
};

export const kafuComparison = {
  title: "From Kafū to Nishimura",
  titleJa: "荷風から西村へ",
  kafu: {
    name: "Kafū Nagai",
    period: "1917–1959",
    themes: "Weather / Walking / Garden / War / Old Tokyo",
  },
  nishimura: {
    name: "Kenji Nishimura",
    period: "Late-Heisei",
    themes: "Publishing / Television / Used Bookstores / Urban Change",
  },
  copy: [
    "荷風の日記には、近代東京が消えていく過程が残った。",
    "西村の日記には、平成の出版、テレビ、書店文化が消えていく直前の姿が残っている。",
  ],
  shared: [
    "東京",
    "日々の移動",
    "出版",
    "食事",
    "身体",
    "不機嫌",
    "店",
    "失われる都市",
  ],
  differences: [
    "荷風：長期、反復、天候、戦争",
    "西村：出版産業、テレビ、古書店、平成文化",
  ],
  href: "/compare/kafu-nishimura",
};

export const kafuFeaturedObservations = [
  {
    id: "obs-the-manuscripts-that-were-not-chosen",
    title: "選ばれなかった原稿",
    subtitle: "不採用、返送、沈黙、公開されなかった文章",
    status: "published" as const,
    href: "/observations/the-manuscripts-that-were-not-chosen",
  },
  {
    id: "obs-where-did-the-editor-go",
    title: "編集者は消えたのか",
    subtitle: "人間、アルゴリズム、AIに分散する「選ぶ仕事」",
    status: "published" as const,
    href: "/observations/where-did-the-editor-go",
  },
  {
    id: "obs-before-the-platform-small-press",
    title: "プラットフォーム以前の小出版",
    subtitle: "原稿、封筒、切手、編集者、少数の読者",
    status: "published" as const,
    href: "/observations/before-the-platform-small-press",
  },
  {
    id: "obs-the-price-of-an-ordinary-day",
    title: "一日の値段",
    subtitle: "日記に残る本、酒、食事、賃金、家賃",
    status: "published" as const,
    href: "/observations/the-price-of-an-ordinary-day",
  },
  {
    id: "coming-tokyo-vanishes",
    title: "東京は、日記の中で何度も消える",
    subtitle: "永井荷風と、街の反復記録",
    status: "coming" as const,
    href: null,
  },
  {
    id: "obs-heisei-dancho",
    title: "平成の断腸亭日乗",
    subtitle: "西村賢太の日記に残る、消えていく東京",
    status: "published" as const,
    href: "/observations/heisei-dancho-tei-nichijo",
  },
];

export const kafuPrimaryTextAccess = {
  title: "Read the primary text",
  titleJa: "原典を読む",
  publicDomain: {
    label: "Public-domain text",
    note: "Source verification pending",
    url: null as string | null,
  },
  modernEditions: {
    label: "Modern editions",
    note: "Edition details needed — no invented bibliography or URLs.",
  },
  copyrightNote:
    "原典（作品）と現代の編集版・校訂版の権利を分けて扱う。長文転載はしない。",
};

export const kafuRelatedEntities = [
  {
    id: "entity-dancho-tei",
    name: "Danchōtei",
    nameJa: "断腸亭",
    type: "Place / residence or diary-title context",
    note: "詳細確認が必要",
    href: "/entities/dancho-tei",
    coming: false,
  },
  {
    id: "entity-tokyo",
    name: "Tokyo",
    nameJa: "東京",
    type: "City",
    note: "Primary city",
    href: "/entities/tokyo",
    coming: false,
  },
  {
    id: "entity-azabu",
    name: "Azabu",
    nameJa: "麻布",
    type: "District",
    note: "source-needed for diary linkage density",
    href: "/entities/azabu",
    coming: false,
  },
  {
    id: "entity-asakusa",
    name: "Asakusa",
    nameJa: "浅草",
    type: "District",
    note: "source-needed",
    href: "/entities/asakusa",
    coming: false,
  },
  {
    id: "entity-ginza",
    name: "Ginza",
    nameJa: "銀座",
    type: "District",
    note: "source-needed",
    href: "/entities/ginza",
    coming: false,
  },
  {
    id: "entity-ichikawa",
    name: "Ichikawa",
    nameJa: "市川",
    type: "City",
    note: "Residence years source-needed",
    href: "/entities/ichikawa",
    coming: false,
  },
  {
    id: "publishing-ecosystem",
    name: "Publishing ecosystem",
    nameJa: "出版社",
    type: "Publishing",
    note: "Coming entity — specific houses added only with sources",
    href: null,
    coming: true,
  },
];

export const kafuRelatedWriters = [
  {
    id: "writer-nishimura",
    name: "Kenji Nishimura",
    nameJa: "西村賢太",
    connection: "Tokyo / diary / publishing / urban disappearance",
    href: "/writers/kenji-nishimura",
    coming: false,
  },
  {
    id: "writer-bukowski",
    name: "Charles Bukowski",
    nameJa: "チャールズ・ブコウスキー",
    connection: "Los Angeles / labor / bars / racing / writing body",
    href: "/writers/charles-bukowski",
    coming: false,
  },
  {
    id: "writer-hayashi",
    name: "Fumiko Hayashi",
    nameJa: "林芙美子",
    connection: "Tokyo / labor / rooms / food / diary-derived writing",
    href: "/writers/fumiko-hayashi",
    coming: false,
  },
  {
    id: "writer-roppa",
    name: "Roppa Furukawa",
    nameJa: "古川ロッパ",
    connection: "Performance labor / audience / wartime entertainment",
    href: "/writers/furukawa-roppa",
    coming: false,
  },
  {
    id: "writer-kiyosawa",
    name: "Kiyosawa Kiyoshi",
    nameJa: "清沢洌",
    connection: "Coming writer",
    href: null,
    coming: true,
  },
  {
    id: "writer-takami",
    name: "Takami Jun",
    nameJa: "高見順",
    connection: "Coming writer",
    href: null,
    coming: true,
  },
];

export const kafuRelatedPages = [
  { group: "Diary", title: "断腸亭日乗", href: "/diaries/dancho-tei-nichijo" },
  {
    group: "Same Day",
    title: "January 1, 1918",
    href: "/same-day/1918-01-01",
  },
  {
    group: "Writer",
    title: "Fumiko Hayashi",
    href: "/writers/fumiko-hayashi",
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
    title: "生活維持は、文学の背景ではない",
    href: "/observations/maintenance-is-not-background",
  },
  {
    group: "Observation",
    title: "一日の値段",
    href: "/observations/the-price-of-an-ordinary-day",
  },
  {
    group: "Observation",
    title: "三つの都市、三つの生活速度",
    href: "/observations/three-cities-three-speeds",
  },
  {
    group: "Observation",
    title: "平成の断腸亭日乗",
    href: "/observations/heisei-dancho-tei-nichijo",
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
    title: "Kafū to Nishimura",
    href: "/compare/kafu-nishimura",
  },
  {
    group: "Comparison",
    title: "Nishimura and Bukowski",
    href: "/compare/nishimura-bukowski",
  },
  { group: "Writer", title: "Kenji Nishimura", href: "/writers/kenji-nishimura" },
  {
    group: "Writer",
    title: "Charles Bukowski",
    href: "/writers/charles-bukowski",
  },
  { group: "Writer", title: "Fumiko Hayashi", href: "/writers/fumiko-hayashi" },
  { group: "Writer", title: "Roppa Furukawa", href: "/writers/furukawa-roppa" },
  { group: "Same Day", title: "Same Day index", href: "/same-day" },
];

export const kafuSources: Source[] = [
  {
    id: "src-kafu-primary",
    category: "primary",
    status: "verification-pending",
    label: "永井荷風『断腸亭日乗』",
    note: "Primary text — edition details needed. No long quotation.",
    needed: true,
  },
  {
    id: "src-kafu-bio",
    category: "editorial",
    status: "needed",
    label: "Biographical sources — publishers, literary museums, official records",
    needed: true,
  },
  {
    id: "src-kafu-place",
    category: "verification",
    status: "needed",
    label: "Place verification — addresses, buildings, streets, shop change",
    needed: true,
  },
  {
    id: "src-kafu-history",
    category: "editorial",
    status: "needed",
    label: "Historical context — earthquake, war, air raids, urban history",
    needed: true,
    note: "Attach only verified public-history sources; do not invent events.",
  },
  {
    id: "src-kafu-research",
    category: "editorial",
    status: "verification-pending",
    label: "Editorial references — diary literature, Kafū studies, Tokyo essays",
  },
];

export const KAFU_ENTITY_IDS = [
  "entity-tokyo",
  "entity-azabu",
  "entity-ginza",
  "entity-asakusa",
  "entity-mukojima",
  "entity-ichikawa",
  "entity-dancho-tei",
  "entity-asamoya",
] as const;

export function buildKafuWorldStatus(
  statusCounts: Partial<Record<EntityStatus, number>>,
): SurvivalSummaryData {
  const order: EntityStatus[] = [
    "existing",
    "demolished",
    "destroyed",
    "rebuilt",
    "renamed",
    "relocated",
    "transformed",
    "unknown",
  ];
  return {
    label: "What remains from Kafū’s Tokyo?",
    labelJa: "荷風の東京から、何が残っているか",
    buckets: order.map((status) => ({
      status,
      count: statusCounts[status] ?? 0,
    })),
    note: "This is not a score of preservation. It records how a city survives through reconstruction, renaming, memory, and disappearance.",
    noteJa:
      "これは保存状態の優劣を測る点数ではない。都市が、再建、改名、記憶、消失を通じてどのように残るかを記録する。",
  };
}
