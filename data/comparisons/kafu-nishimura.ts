import type {
  EpistemicKind,
  Source,
  WriterComparison,
  WriterComparisonMatrixRow,
} from "@/lib/types";

export const KAFU_NISHIMURA_COMPARE_SLUG = "kafu-nishimura";
export const KAFU_NISHIMURA_COMPARE_ID = "compare-kafu-nishimura";

export const KAFU_ID = "writer-kafu";
export const NISHIMURA_ID = "writer-nishimura";

export const kafuNishimuraComparison: WriterComparison = {
  id: KAFU_NISHIMURA_COMPARE_ID,
  slug: KAFU_NISHIMURA_COMPARE_SLUG,
  title: "From Kafū to Nishimura",
  titleJa: "荷風から西村へ",
  subtitle: "Tokyo disappears more than once inside diaries.",
  subtitleJa: "東京は、日記の中で何度も消える。",
  writerIds: [KAFU_ID, NISHIMURA_ID],
  diaryWorkIds: ["diary-kafu-dancho", "diary-nishimura-nichijo"],
  entryIds: [
    "entry-1945-03-10",
    "entry-1945-08-15",
    "entry-2011-05-02",
  ],
  entityIds: [],
  observationIds: ["obs-heisei-dancho"],
  themes: [
    "Diary",
    "Tokyo",
    "Urban Change",
    "Publishing",
    "Body",
    "Walking",
    "Television",
    "Bookstores",
    "War",
    "Disappearance",
  ],
  comparisonStatus: "active",
  verificationStatus: "partial",
  lastUpdated: "2026-08-02",
};

export const comparisonLead = [
  "永井荷風と西村賢太は、異なる時代の東京を生きた。",
  "荷風は、天候、庭、散歩、食事、出版、戦争を記録した。",
  "西村は、出版社、テレビ、古書店、ライブハウス、酒、原稿を記録した。",
  "二人とも、都市史を書こうとしたわけではない。",
  "しかし、自分の生活を書き続けた結果、その周囲にあった東京が残った。",
];

export const twoWritersCards = {
  kafu: {
    writerId: KAFU_ID,
    name: "Kafū Nagai",
    nameJa: "永井荷風",
    years: "1879–1959",
    primaryDiary: "断腸亭日乗",
    keywords: [
      "Weather",
      "Walking",
      "Garden",
      "War",
      "Old Tokyo",
      "Publishing",
      "Food",
      "Illness",
    ],
    tagline: "Forty-two years recording modern Tokyo as it vanished.",
    taglineJa: "消えていく近代東京を、四十二年にわたり記録した。",
    href: "/writers/kafu-nagai",
  },
  nishimura: {
    writerId: NISHIMURA_ID,
    name: "Kenji Nishimura",
    nameJa: "西村賢太",
    years: "1967–2022",
    primaryDiary: "西村賢太の日記",
    keywords: [
      "Publishing",
      "Television",
      "Used Bookstores",
      "Live Music",
      "Alcohol",
      "Private Fiction",
      "Late-Heisei Tokyo",
    ],
    tagline: "When television still visited writers at home.",
    taglineJa: "まだテレビが作家を訪ねてきた時代。",
    href: "/writers/kenji-nishimura",
  },
};

export const diaryPreservesConcept = {
  title: "A diary preserves more than a writer.",
  titleJa: "日記は、作家だけを残すのではない。",
  paragraphs: [
    "荷風の日記には、庭の木、空の色、歯痛、散歩道、出版社、街、戦争が残った。",
    "西村の日記には、編集者からのメール、テレビ局、古書店、ライブハウス、酒、原稿が残った。",
    "日記に残るのは、書いた本人だけではない。",
    "その人が生きるために必要だった人、店、制度、メディア、都市の動線まで残る。",
  ],
};

export const writerComparisonMatrixRows: WriterComparisonMatrixRow[] = [
  {
    id: "mx-period",
    key: "period",
    label: "Period",
    labelJa: "期間",
    valueByWriterId: {
      [KAFU_ID]: "1917–1959",
      [NISHIMURA_ID]: "Late Heisei / 2010s–2022",
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: "verified",
      [NISHIMURA_ID]: "partial",
    },
  },
  {
    id: "mx-form",
    key: "primary-form",
    label: "Primary form",
    labelJa: "主な形式",
    valueByWriterId: {
      [KAFU_ID]: "Long-term diary",
      [NISHIMURA_ID]: "Daily diary / private-fiction-related record",
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: "verified",
      [NISHIMURA_ID]: "partial",
    },
  },
  {
    id: "mx-tokyo",
    key: "tokyo",
    label: "Tokyo",
    labelJa: "東京",
    valueByWriterId: {
      [KAFU_ID]: "Modern Tokyo",
      [NISHIMURA_ID]: "Late-Heisei Tokyo",
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: "verified",
      [NISHIMURA_ID]: "verified",
    },
  },
  {
    id: "mx-movement",
    key: "movement",
    label: "Main movement",
    labelJa: "主な移動",
    valueByWriterId: {
      [KAFU_ID]: "Walking",
      [NISHIMURA_ID]: "Train / taxi / urban movement",
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: "partial",
      [NISHIMURA_ID]: "partial",
    },
  },
  {
    id: "mx-weather",
    key: "weather",
    label: "Weather",
    labelJa: "天候",
    valueByWriterId: {
      [KAFU_ID]: "Frequently observed",
      [NISHIMURA_ID]: "Occasionally recorded / not yet indexed",
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: "partial",
      [NISHIMURA_ID]: "not-indexed",
    },
  },
  {
    id: "mx-garden",
    key: "garden",
    label: "Garden",
    labelJa: "庭",
    valueByWriterId: {
      [KAFU_ID]: "Central motif",
      [NISHIMURA_ID]: "Not central",
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: "partial",
      [NISHIMURA_ID]: "unknown",
    },
  },
  {
    id: "mx-publishing",
    key: "publishing",
    label: "Publishing",
    labelJa: "出版",
    valueByWriterId: {
      [KAFU_ID]: "Publisher, manuscript, books",
      [NISHIMURA_ID]: "Publisher, editor, proofing, literary prize",
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: "partial",
      [NISHIMURA_ID]: "partial",
    },
  },
  {
    id: "mx-media",
    key: "media",
    label: "Media",
    labelJa: "メディア",
    valueByWriterId: {
      [KAFU_ID]: "Newspapers, print culture",
      [NISHIMURA_ID]: "Television, magazines, publishing",
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: "partial",
      [NISHIMURA_ID]: "partial",
    },
  },
  {
    id: "mx-bookstores",
    key: "bookstores",
    label: "Bookstores",
    labelJa: "書店",
    valueByWriterId: {
      [KAFU_ID]: "Booksellers and print culture",
      [NISHIMURA_ID]: "Used bookstores and book purchases",
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: "needs-source",
      [NISHIMURA_ID]: "partial",
    },
  },
  {
    id: "mx-food",
    key: "food",
    label: "Food and drink",
    labelJa: "食事と酒",
    valueByWriterId: {
      [KAFU_ID]: "Meals, sweets, alcohol",
      [NISHIMURA_ID]: "Alcohol, soba, late-night meals",
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: "partial",
      [NISHIMURA_ID]: "partial",
    },
  },
  {
    id: "mx-body",
    key: "body",
    label: "Body",
    labelJa: "身体",
    valueByWriterId: {
      [KAFU_ID]: "Dental pain, fatigue, illness, aging",
      [NISHIMURA_ID]: "Sleep, alcohol, fatigue, illness",
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: "partial",
      [NISHIMURA_ID]: "partial",
    },
  },
  {
    id: "mx-war",
    key: "war",
    label: "War",
    labelJa: "戦争",
    valueByWriterId: {
      [KAFU_ID]: "War, air raids, destruction",
      [NISHIMURA_ID]: "Not central to indexed period",
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: "partial",
      [NISHIMURA_ID]: "unknown",
    },
  },
  {
    id: "mx-disappearance",
    key: "urban-disappearance",
    label: "Urban disappearance",
    labelJa: "都市の消失",
    valueByWriterId: {
      [KAFU_ID]: "War, reconstruction, street change",
      [NISHIMURA_ID]: "Closures, media decline, cultural fragmentation",
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: "partial",
      [NISHIMURA_ID]: "partial",
    },
  },
  {
    id: "mx-tech",
    key: "technology",
    label: "Technology",
    labelJa: "技術",
    valueByWriterId: {
      [KAFU_ID]: "Letters, print, physical movement",
      [NISHIMURA_ID]: "Mobile email, television, digital transition",
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: "partial",
      [NISHIMURA_ID]: "partial",
    },
  },
  {
    id: "mx-visibility",
    key: "public-visibility",
    label: "Public visibility",
    labelJa: "社会的可視性",
    valueByWriterId: {
      [KAFU_ID]: "Literary figure in print culture",
      [NISHIMURA_ID]: "Literary prize winner in television culture",
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: "partial",
      [NISHIMURA_ID]: "partial",
    },
  },
];

export const dayShapes = {
  title: "The shape of an ordinary day",
  titleJa: "一日のかたち",
  layer: "interpretation" as EpistemicKind,
  note: "これは全日記を一般化した確定モデルではなく、現在の観測から見える傾向である。",
  kafu: [
    "Weather",
    "Garden",
    "Writing",
    "Walking",
    "Visitors",
    "Food",
    "Night",
  ],
  nishimura: [
    "Wake",
    "Publisher",
    "Editor",
    "Bookstore",
    "Television or live house",
    "Alcohol",
    "Writing",
  ],
  paragraphs: [
    "一日は、その時代の文化インフラによって形づくられる。",
    "荷風の日常は、徒歩、庭、書簡、出版社、街路によって構成された。",
    "西村の日常は、編集者、鉄道、テレビ局、古書店、ライブハウスによって構成された。",
  ],
};

export const movementSection = {
  title: "How they moved through Tokyo",
  titleJa: "二人は東京をどう移動したか",
  kafu: [
    { label: "Walking", labelJa: "散歩" },
    { label: "Street observation", labelJa: "街路観察" },
    { label: "Garden and neighborhood", labelJa: "庭と近隣" },
    {
      label: "Train and other transport",
      labelJa: "確認済み記録がある場合のみ",
    },
  ],
  nishimura: [
    { label: "Train", labelJa: "鉄道" },
    { label: "Taxi", labelJa: "タクシー" },
    { label: "Publisher visits", labelJa: "出版社" },
    { label: "Bookstores", labelJa: "古書店" },
    { label: "Broadcast studios", labelJa: "テレビ局" },
    { label: "Live houses", labelJa: "ライブハウス" },
  ],
  paragraphs: [
    "荷風の東京は、歩くことで細部へ近づく都市だった。",
    "西村の東京は、複数の文化拠点を移動する都市だった。",
    "ただし、単純な徒歩の時代／交通の時代という二分法にしない。二人の実際の記録に基づいて違いを観測する。",
  ],
};

export const publishingEcosystems = {
  title: "Two publishing ecosystems",
  titleJa: "二つの出版文化圏",
  kafu: [
    "Writer",
    "Publisher",
    "Newspaper / literary magazine",
    "Bookstore",
    "Reader",
  ],
  nishimura: [
    "Writer",
    "Publisher",
    "Literary prize",
    "Bookstore",
    "Newspaper / magazine",
    "Television",
    "Public recognition",
  ],
  paragraphs: [
    {
      layer: "observation" as EpistemicKind,
      text: "荷風の時代、出版は紙と都市の移動を通じて読者へ届いた。西村の時代、出版社と文学賞に加え、テレビが作家本人を社会的な人物へ変えた。",
    },
    {
      layer: "interpretation" as EpistemicKind,
      text: "現在では、SNS、YouTube、Netflix、推薦アルゴリズム、生成AIによって文化消費の経路はさらに分散している。",
    },
  ],
};

export const weatherMedia = {
  title: "From weather to media",
  titleJa: "天候からメディアへ",
  kafu: {
    title: "Weather as a daily condition",
    items: ["晴雨", "寒暖", "風", "光", "庭木", "季節"],
  },
  nishimura: {
    title: "Media as a daily condition",
    items: ["出版社", "雑誌", "テレビ", "携帯メール", "取材", "文学賞"],
  },
  paragraphs: [
    "荷風の日記では、天候が一日の行動を決める。",
    "西村の日記では、編集者やメディアから届く連絡が一日の予定を動かす。",
    "自然環境とメディア環境。異なる条件が、それぞれの生活の速度を決めていた。",
    "西村の日記にも天候が存在し、荷風の日記にもメディアが存在する。完全な対立ではなく、重心の違いとして扱う。",
  ],
};

export const bodySection = {
  title: "The body that sees the city",
  titleJa: "都市を見る身体",
  kafu: ["歯痛", "寒さ", "疲労", "老い", "食欲", "歩行", "病気"],
  nishimura: ["飲酒", "睡眠", "疲労", "二日酔い", "食事", "怒り", "病気"],
  paragraphs: [
    "都市は、身体から切り離して記録できない。",
    "歯が痛ければ、歩く距離や食事が変わる。酒を飲みすぎれば、翌日の仕事や人間関係が変わる。",
    "日記に残る都市は、健康な観察者が外から見た都市ではない。痛み、疲労、老い、欲望を抱えた身体が通過した都市である。",
  ],
  note: "未確認の診断や病名を追加しない。",
};

export const foodMoney = {
  title: "Food, alcohol, and the price of a day",
  titleJa: "食事、酒、一日の値段",
  axes: [
    { label: "Meals", labelJa: "食事", status: "Indexing in progress" },
    { label: "Alcohol", labelJa: "酒", status: "Indexing in progress" },
    {
      label: "Book purchases",
      labelJa: "本の購入",
      status: "Nishimura: prices unverified / Kafū: not indexed",
    },
    { label: "Transport", labelJa: "移動費", status: "Not indexed" },
    {
      label: "Entertainment",
      labelJa: "舞台、ライブ、歓楽",
      status: "Partial / not indexed",
    },
    { label: "Income", labelJa: "原稿料、印税、仕事", status: "Not indexed" },
    {
      label: "Debt or financial anxiety",
      labelJa: "借金・金銭不安",
      status: "Only when verified — currently not indexed",
    },
  ],
  paragraphs: [
    "日記に書かれた金額は、文学とは別の細部に見える。",
    "しかし、何を買えたか、どこへ行けたか、どれだけ酒を飲めたかは、作家の生活条件を示している。",
    "確認済みの価格だけを表示する。推測金額や現代換算は作らない。",
  ],
  knownSpendingNote:
    "Known verified prices on indexed entries: none yet for either writer.",
};

export const disappearedCopy = {
  title: "What disappeared from each Tokyo?",
  titleJa: "それぞれの東京から、何が消えたか",
  kafuThemes: [
    "戦災で失われた建物",
    "変化した街路",
    "再建された地域",
    "消えた風俗",
    "変容した歓楽街",
    "亡くなった知人",
  ],
  nishimuraThemes: [
    "閉店した古書店",
    "終了したテレビ番組",
    "縮小した雑誌文化",
    "変化した出版経済圏",
    "消えた飲食店",
    "亡くなった関係者",
  ],
  note: "具体名は登録済み Entity のみ動的表示。未確認の店名・番組名は追加しない。",
};

export const remainedSection = {
  title: "What remained?",
  titleJa: "何が残ったか",
  items: [
    { label: "Texts", labelJa: "日記、作品、書籍" },
    { label: "Publishers", labelJa: "出版社" },
    { label: "District names", labelJa: "地名" },
    { label: "Buildings", labelJa: "現存する建物" },
    { label: "Cultural memory", labelJa: "文学、映像、批評" },
    { label: "Routes", labelJa: "日記から再構成できる移動" },
    { label: "Language", labelJa: "その時代の語彙、表現" },
  ],
  paragraphs: [
    "都市は、完全に保存されるわけでも、完全に消えるわけでもない。",
    "建物がなくなっても、地名が残ることがある。店が閉じても、日記の中では営業している。人が亡くなっても、文章の中では街を歩き続ける。",
  ],
};

export const parallelDays = {
  title: "Two ordinary days",
  titleJa: "二つの平凡な一日",
  kafu: {
    date: "January 1, 1918",
    writer: "Kafū Nagai",
    summary:
      "例年通り特別なことはせず、家が暖まるのを待ちながら、片づけと掃除をする。",
    verification: "Partial / primary text available",
    href: "/entries/1918-01-01-kafu-nagai",
    coming: false,
  },
  nishimura: {
    date: "May 2, 2011",
    writer: "Kenji Nishimura",
    summary:
      "新潮社で仕事をし、高円寺の都丸書店へ立ち寄り、ShowBoatでライブを見る。",
    verification: "Partial",
    href: "/entries/2011-05-02-kenji-nishimura",
    coming: false,
  },
};

export const historyBeforeConcept = {
  title: "A diary preserves history before it is organized.",
  titleJa: "日記は、整理される前の歴史を残す。",
  paragraphs: [
    "歴史は、重要な出来事を選び、因果関係をつくる。",
    "日記は、その日に書き手が気にしたことを残す。",
    "天気。歯痛。原稿。酒。待ち合わせ。本の値段。来客。テレビの収録。",
    "後世の読者は、その細部から時代を読み直す。",
  ],
};

export const sharedToPersonalized = {
  title: "From shared culture to personalized culture",
  titleJa: "共有される文化から、個人化される文化へ",
  stages: [
    {
      label: "Kafū era",
      text: "Print / newspaper / literary circles",
    },
    {
      label: "Nishimura era",
      text: "Publishing / literary prizes / television",
    },
    {
      label: "Current era",
      text: "YouTube / Netflix / SNS / recommendation systems / generative AI",
    },
  ],
  paragraphs: [
    "荷風の時代には、新聞や出版が文化の共通回路だった。",
    "西村の時代には、テレビが作家を広い社会へ運んだ。",
    "現在は、コンテンツが個人の嗜好に合わせて届けられる。さらにAIによって、読者自身のための物語も生成できる。",
    "便利さは増えた。しかし、自分の好みとは異なる他者の生活へ出かける機会はどう変わるのか。",
  ],
  note: "過去を理想化せず、現在を否定せず、文化構造の変化として書く。",
};

export const excavationConcept = {
  title: "Not generation, but excavation.",
  titleJa: "生成ではなく、発掘。",
  paragraphs: [
    "AIは、荷風風の東京や、西村賢太風の一日を生成できる。",
    "しかし、1918年1月1日や2011年5月2日に、実際に何が起きたかを新しく作ることはできない。",
    "Diary Observatoryが扱うのは、もっともらしい過去ではない。一度だけ生きられた日の痕跡である。",
  ],
};

export const relatedEntityIds = {
  kafu: [
    "entity-tokyo",
    "entity-azabu",
    "entity-ginza",
    "entity-asakusa",
    "entity-ichikawa",
    "entity-dancho-tei",
  ],
  nishimura: [
    "entity-shinchosha",
    "entity-tomaru",
    "entity-koenji",
    "entity-showboat",
    "entity-tokyo-mx",
    "entity-oji-honcho",
  ],
};

export const relatedObservations = [
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
    id: "obs-heisei-dancho",
    title: "平成の断腸亭日乗",
    subtitle: "西村賢太の日記に残る、消えていく東京",
    status: "published" as const,
    href: "/observations/heisei-dancho-tei-nichijo",
  },
  {
    id: "coming-tokyo-vanishes",
    title: "東京は、日記の中で何度も消える",
    subtitle: "二つの日記から読む、都市の反復的消失",
    status: "coming" as const,
    href: null,
  },
  {
    id: "coming-weather",
    title: "天候という記録",
    subtitle: "永井荷風の日記から読む都市と身体",
    status: "coming" as const,
    href: null,
  },
  {
    id: "coming-tv",
    title: "まだテレビが作家を訪ねてきた",
    subtitle: "西村賢太と平成の文化産業",
    status: "coming" as const,
    href: null,
  },
];

export const comparisonSources: Source[] = [
  {
    id: "src-cmp-kafu-primary",
    category: "primary",
    status: "verification-pending",
    label: "永井荷風『断腸亭日乗』",
    note: "Primary text — edition details needed. No long quotation.",
    needed: true,
  },
  {
    id: "src-cmp-nishimura-primary",
    category: "primary",
    status: "needed",
    label: "西村賢太の日記",
    note: "Edition details needed.",
    needed: true,
  },
  {
    id: "src-cmp-bio",
    category: "editorial",
    status: "needed",
    label: "Biographical sources — publishers, literary records",
    needed: true,
  },
  {
    id: "src-cmp-urban",
    category: "verification",
    status: "needed",
    label: "Urban verification — buildings, shops, place names, streets",
    needed: true,
  },
  {
    id: "src-cmp-media",
    category: "verification",
    status: "verification-pending",
    label: "Media verification — programs, publishers, magazines",
    note: "Shinchosha official site verified; program identities may need sources.",
  },
  {
    id: "src-cmp-history",
    category: "editorial",
    status: "needed",
    label: "Historical context — war, air raids, urban history",
    needed: true,
  },
  {
    id: "src-cmp-editorial",
    category: "editorial",
    status: "verification-pending",
    label:
      "Editorial references — Kafū studies, Nishimura studies, diary literature, publishing history",
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
    group: "Diary",
    title: "断腸亭日乗",
    href: "/diaries/dancho-tei-nichijo",
  },
  {
    group: "Same Day",
    title: "January 1, 1918",
    href: "/same-day/1918-01-01",
  },
  {
    group: "Observation",
    title: "平成の断腸亭日乗",
    href: "/observations/heisei-dancho-tei-nichijo",
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
    group: "Writer",
    title: "Charles Bukowski",
    href: "/writers/charles-bukowski",
  },
  {
    group: "Same Day",
    title: "May 2, 2011",
    href: "/same-day/2011-05-02",
  },
  { group: "Same Day", title: "Same Day index", href: "/same-day" },
];
