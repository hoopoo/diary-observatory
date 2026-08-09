import type {
  EntryLayer,
  EntryObject,
  EntryTimelineEvent,
  RecordSurvival,
  Source,
} from "@/lib/types";

export const ENTRY_SLUG_1918_01_01 = "1918-01-01-kafu-nagai";
export const ENTRY_ID_1918_01_01 = "entry-1918-01-01";

export const entry19180101Meta = {
  slug: ENTRY_SLUG_1918_01_01,
  date: "1918-01-01",
  dateEn: "January 1, 1918",
  dateJa: "1918年1月1日（火）",
  dayOfWeek: "Tuesday",
  writerId: "writer-kafu",
  writerName: "Kafū Nagai",
  writerNameJa: "永井荷風",
  writerHref: "/writers/kafu-nagai",
  primaryLocation: "Tokyo",
  locationDetail: null as string | null,
  themes: [
    "New Year",
    "Domestic Life",
    "Weather",
    "Heating",
    "Cleaning",
    "Routine",
    "Body",
    "Early Taishō Tokyo",
  ],
  tagline: {
    en: "A New Year’s Day without celebration.",
    ja: "祝わない正月。",
  },
  lead: [
    "1918年1月1日。",
    "永井荷風は、正月だからといって特別な行事をするのではなく、家の中が暖かくなるのを待ち、片づけや掃除をして過ごした。",
    "大事件は起きない。来客も祝宴も、華やかな新年の描写も前面には出ない。",
    "しかし、何をせず、何を待ち、どのように身体を動かしたかを読むと、当時の住居、寒さ、習慣、荷風自身の生活態度が見えてくる。",
  ],
  observationStatus: "Active",
  verificationStatus: "partial" as const,
  lastUpdated: "2026-08-02",
  entityIds: ["entity-tokyo"],
  subjectiveWeather: null as string | null,
  measuredWeather: null as string | null,
  indoorCondition: "Cold before warming",
  bodyCondition: "Cold as a living condition — no clinical diagnosis asserted",
  householdActions: ["waiting for warmth", "tidying", "cleaning"],
};

export const entrySourceNotice = {
  title: "About this entry",
  titleJa: "この日記項目について",
  paragraphs: [
    "このページは、『断腸亭日乗』の原文を長く転載するものではない。",
    "正規に確認できた本文をもとに、出来事を要約し、その日に現れる生活条件、身体、物、習慣、時代背景を観測する。",
    "原文の文体や語調を確認する場合は、正規公開された原典または刊行版を参照する必要がある。",
  ],
  labels: [
    { en: "Primary text", ja: "Public-domain text status to be verified" },
    { en: "Modern edition", ja: "Edition copyright may apply" },
    { en: "Entry reconstruction", ja: "Editorial summary" },
    { en: "Verification", ja: "Partial" },
  ],
  note: "作品自体の著作権状態と、現代の校訂版・編集版の権利を区別する。",
};

export const dayAtAGlance = [
  {
    id: "morning",
    label: "Morning",
    labelJa: "朝",
    items: [
      "正月",
      "特別な行事は行わない",
      "室内が暖まるのを待つ",
    ],
  },
  {
    id: "later",
    label: "Later",
    labelJa: "その後",
    items: ["片づけ", "掃除", "室内で過ごす"],
  },
  {
    id: "unknown",
    label: "Unknown / not recorded",
    labelJa: "未記載",
    items: ["食事", "来客", "外出", "執筆", "天候の詳細"],
    noteEn: "Not recorded in the indexed summary",
    noteJa: "現在の要約には記録されていない",
  },
];

export const entryTimeline: EntryTimelineEvent[] = [
  {
    id: "tl-1918-01",
    entryId: ENTRY_ID_1918_01_01,
    order: 1,
    approximateTime: "Morning",
    locationId: "entity-tokyo",
    placeLabel: "Tokyo / Home",
    placeLabelJa: "東京／室内",
    title: "New Year’s Day",
    titleJa: "正月",
    description:
      "特別な祝い事をせず、例年と大きく変わらない一日として始める。",
    actionType: "calendar",
    entityIds: ["entity-tokyo"],
    layer: "fact",
    verificationStatus: "needs-source",
    sourceNote:
      "Fact / Partial — primary text summary only. TimePrecision: sequence-only (not a clock time).",
  },
  {
    id: "tl-1918-02",
    entryId: ENTRY_ID_1918_01_01,
    order: 2,
    approximateTime: "Later",
    locationId: null,
    placeLabel: "Interior",
    placeLabelJa: "室内",
    title: "Waiting for warmth",
    titleJa: "室内が暖まるのを待つ",
    description:
      "暖房または火によって室内が暖まるまで待つ。Heating appliance type is not identified.",
    actionType: "domestic",
    entityIds: [],
    layer: "fact",
    verificationStatus: "needs-source",
    sourceNote:
      "Do not invent hibachi / stove without sources. TimePrecision: sequence-only.",
  },
  {
    id: "tl-1918-03",
    entryId: ENTRY_ID_1918_01_01,
    order: 3,
    approximateTime: "Later",
    locationId: null,
    placeLabel: "Interior",
    placeLabelJa: "室内",
    title: "Tidying",
    titleJa: "片づけ",
    description: "身の回りまたは室内を整える。",
    actionType: "domestic",
    entityIds: [],
    layer: "fact",
    verificationStatus: "needs-source",
    sourceNote: "TimePrecision: sequence-only. Actor of labor Unknown.",
  },
  {
    id: "tl-1918-04",
    entryId: ENTRY_ID_1918_01_01,
    order: 4,
    approximateTime: "Later",
    locationId: null,
    placeLabel: "Interior",
    placeLabelJa: "室内",
    title: "Cleaning",
    titleJa: "掃除",
    description: "室内の掃除をする。",
    actionType: "domestic",
    entityIds: [],
    layer: "fact",
    verificationStatus: "needs-source",
    sourceNote: "TimePrecision: sequence-only. Actor of labor Unknown.",
  },
];

export const newYearWithoutCeremony = {
  title: "A New Year without ceremony",
  titleJa: "儀式のない正月",
  paragraphs: [
    {
      layer: "observation" as const,
      text: "正月の日記には、初詣、祝い膳、年賀、来客、家族の集まりが書かれることが多い。しかし、この日の荷風は、特別な一日を特別な形式で過ごそうとしない。",
    },
    {
      layer: "observation" as const,
      text: "家が暖まるのを待ち、片づけ、掃除をする。新年を祝うというより、生活を通常の状態へ戻す。",
    },
    {
      layer: "interpretation" as const,
      text: "ここには、社会的な暦と、個人の時間のずれがある。",
    },
  ],
  caution:
    "この一日だけから、荷風が正月一般を否定していた／孤独だった／祝祭嫌いだったと断定しない。",
};

export const waitingForWarmth = {
  title: "Waiting for warmth",
  titleJa: "部屋が暖まるのを待つ",
  paragraphs: [
    "現在の住宅では、暖房を入れれば比較的短時間で室温を上げることができる。",
    "1918年の住居では、暖かさはすぐに得られるものではなかった。",
    "火を入れ、空間が暖まるのを待つ。その待ち時間が、一日の始まりに組み込まれていた。",
  ],
  caution:
    "具体的な暖房設備、住宅構造、室温については、原典や住居資料を確認するまで断定しない。",
  items: [
    { id: "body", label: "Body", labelJa: "寒さを感じる身体" },
    { id: "house", label: "House", labelJa: "暖まるまで時間のかかる住居" },
    { id: "energy", label: "Energy", labelJa: "熱を得るための燃料" },
    { id: "time", label: "Time", labelJa: "暖房のために必要な待ち時間" },
    { id: "routine", label: "Routine", labelJa: "待つことを前提とした生活" },
  ],
  statusLabel: "Historical context — Research needed",
};

export const entryObjects: EntryObject[] = [
  {
    id: "obj-heating",
    entryId: ENTRY_ID_1918_01_01,
    name: "Heating source",
    nameJa: "暖房または火",
    type: "heating",
    evidenceLevel: "implied",
    entityId: null,
    description: "Warmth is waited for; appliance type is not identified.",
    verificationStatus: "needs-source",
  },
  {
    id: "obj-cleaning-tools",
    entryId: ENTRY_ID_1918_01_01,
    name: "Cleaning tools",
    nameJa: "掃除道具",
    type: "tool",
    evidenceLevel: "implied",
    entityId: null,
    description: "Cleaning is recorded; tools are not named.",
    verificationStatus: "needs-source",
  },
  {
    id: "obj-room",
    entryId: ENTRY_ID_1918_01_01,
    name: "Room",
    nameJa: "居室",
    type: "space",
    evidenceLevel: "contextual",
    entityId: null,
    description: "Interior domestic space as recorded context.",
    verificationStatus: "needs-source",
  },
  {
    id: "obj-household",
    entryId: ENTRY_ID_1918_01_01,
    name: "Household items",
    nameJa: "片づけられた物",
    type: "object",
    evidenceLevel: "unknown",
    entityId: null,
    description: "Tidied items are not specified in the indexed summary.",
    verificationStatus: "needs-source",
  },
];

export const entryLayers: EntryLayer[] = [
  {
    type: "fact",
    text: "1918年1月1日の日記項目である",
    claimId: "fact-kafu-1918-01-01-001",
    sourceId: "src-1918-primary",
    verificationStatus: "needs-source",
  },
  {
    type: "fact",
    text: "正月である",
    claimId: "fact-kafu-1918-01-01-002",
    sourceId: "src-1918-primary",
    verificationStatus: "needs-source",
  },
  {
    type: "fact",
    text: "特別なことをしない旨が記されている",
    claimId: "fact-kafu-1918-01-01-003",
    sourceId: "src-1918-primary",
    verificationStatus: "needs-source",
  },
  {
    type: "fact",
    text: "室内が暖まるのを待った",
    claimId: "fact-kafu-1918-01-01-004",
    sourceId: "src-1918-primary",
    verificationStatus: "needs-source",
  },
  {
    type: "fact",
    text: "片づけまたは掃除をした",
    claimId: "fact-kafu-1918-01-01-005",
    sourceId: "src-1918-primary",
    verificationStatus: "needs-source",
  },
  {
    type: "observation",
    text: "正月が祝祭ではなく生活の一日として記録されている",
    claimId: "obs-kafu-1918-01-01-001",
  },
  {
    type: "observation",
    text: "暖房には待ち時間が存在する",
    claimId: "obs-kafu-1918-01-01-002",
  },
  {
    type: "observation",
    text: "室内を整える行動が一日の中心になっている",
    claimId: "obs-kafu-1918-01-01-003",
  },
  {
    type: "observation",
    text: "日記は行動だけでなく、生活の速度を保存している",
    claimId: "obs-kafu-1918-01-01-004",
  },
  {
    type: "interpretation",
    text: "社会的な暦と個人の時間は一致しない",
    claimId: "interp-kafu-1918-01-01-001",
  },
  {
    type: "interpretation",
    text: "近代の日常では、暖かさを得ること自体が行動だった",
    claimId: "interp-kafu-1918-01-01-002",
  },
  {
    type: "interpretation",
    text: "平凡な一日は、住宅、エネルギー、身体の歴史を含んでいる",
    claimId: "interp-kafu-1918-01-01-003",
  },
];

export const thenAndNow = {
  then: {
    year: 1918,
    items: [
      "室内が暖まるのを待つ",
      "掃除と片づけを自分で行う",
      "正月でも日常の時間が続く",
      "暖房、住居、生活動作が身体の行動を決める",
      "日記は紙に書かれる",
    ],
  },
  now: {
    year: 2026,
    items: [
      "暖房は短時間で室温を変えられる場合が多い",
      "掃除家電や外部サービスを利用できる",
      "正月の過ごし方はさらに多様化している",
      "日記はSNS、ブログ、動画、アプリにも分散する",
      "AIが日記の要約や生成を行える",
    ],
  },
  note: "1918年の生活を一様に不便と断定しない。現代を進歩として単純化しない。生活の速度、身体負荷、記録媒体の違いとして比較する。",
};

export const domesticTimeFlow = {
  title: "The shape of domestic time",
  titleJa: "家の中の時間のかたち",
  steps: [
    { label: "Cold room", labelJa: "寒い室内" },
    { label: "Waiting", labelJa: "暖まるのを待つ" },
    { label: "Tidying", labelJa: "片づける" },
    { label: "Cleaning", labelJa: "掃除する" },
    { label: "Ordinary day", labelJa: "日常へ戻る" },
  ],
  paragraphs: [
    "現代の時間は、待ち時間を減らす方向へ設計されている。暖房、調理、掃除、通信、移動。",
    "しかし日記には、効率化される前の待ち時間が残っている。",
    "何もしない時間ではない。身体と環境が整うまでの時間である。",
  ],
  layer: "interpretation" as const,
};

export const weatherInterior = {
  title: "Weather outside, temperature inside",
  titleJa: "外の天候と、内側の温度",
  weather: "Not indexed",
  outdoorTemperature: "Unknown",
  indoorCondition: "Cold before warming",
  subjectiveCondition: "本人が感じた寒さ — recorded as waiting for warmth",
  measuredWeather: "公的観測データ — not yet attached",
  futureItems: [
    "気象庁等の歴史気象記録",
    "日記本文の天候表現",
    "当時の住居と暖房資料",
  ],
};

export const bodyInColdRoom = {
  title: "The body in a cold room",
  titleJa: "寒い部屋の中の身体",
  paragraphs: [
    "「部屋が寒い」ということは、背景情報ではない。",
    "起きる時間。動き始める時間。服装。掃除。食事。外出。すべてに関わる生活条件である。",
    "荷風の日記は、都市の記録であると同時に、環境に反応する身体の記録でもある。",
  ],
  items: [
    { id: "cold", label: "Cold", labelJa: "寒さ" },
    { id: "mobility", label: "Mobility", labelJa: "動き始めるまでの時間" },
    { id: "hands", label: "Hands", labelJa: "掃除、片づけ" },
    { id: "comfort", label: "Comfort", labelJa: "暖かさ" },
    { id: "energy", label: "Energy", labelJa: "燃料と熱" },
  ],
  note: "未確認の症状や健康状態を追加しない。",
};

export const publicPrivateConcept = {
  title: "The calendar says New Year. The diary says ordinary life.",
  titleJa: "暦は正月と言う。日記は日常を記す。",
  paragraphs: [
    "社会は、一月一日を特別な日として定める。",
    "しかし個人の身体は、暦に合わせて自動的に変わらない。",
    "寒い。部屋が暖まらない。片づける必要がある。掃除をする。",
    "日記は、祝日という公共の時間の内側に、別の私的な時間が流れていることを残す。",
  ],
};

export const parallelNishimura = {
  title: "Two ordinary days",
  titleJa: "二つの平凡な一日",
  kafu: {
    date: "January 1, 1918",
    writer: "Kafū Nagai",
    items: ["正月", "室内", "暖房を待つ", "片づけ", "掃除"],
  },
  nishimura: {
    date: "May 2, 2011",
    writer: "Kenji Nishimura",
    items: ["出版社", "移動", "古書店", "ライブハウス", "本の購入"],
    href: "/entries/2011-05-02-kenji-nishimura",
  },
  paragraphs: [
    "荷風の一日は、家の内側で始まる。",
    "西村の一日は、都市の複数の拠点を移動する。",
    "どちらも大事件ではない。しかし、一日の形を決めている住居、都市、技術、文化産業が異なる。",
  ],
  compareHref: "/compare/kafu-nishimura",
};

export const sameDateAcrossYears = {
  title: "January 1 across years",
  titleJa: "別の年の1月1日",
  items: [
    {
      date: "January 1, 1918",
      writer: "Kafū Nagai",
      status: "indexed" as const,
      href: `/entries/${ENTRY_SLUG_1918_01_01}`,
    },
    {
      date: "January 1, other years",
      writer: "—",
      status: "not-indexed" as const,
      href: null,
    },
  ],
  futureNote:
    "将来: 荷風の別年の元日、古川ロッパ、武田百合子、現代作家の元日など。架空 Entry は追加しない。",
};

export const recordSurvival: RecordSurvival[] = [
  {
    id: "rs-text",
    entryId: ENTRY_ID_1918_01_01,
    label: "Text",
    labelJa: "日記本文",
    type: "text-survives",
    description: "Primary diary text survives in editions; not reproduced here.",
    verificationStatus: "partial",
  },
  {
    id: "rs-date",
    entryId: ENTRY_ID_1918_01_01,
    label: "Date",
    labelJa: "一月一日という暦",
    type: "practice-survives",
    description: "The calendar day remains readable as New Year.",
    verificationStatus: "verified",
  },
  {
    id: "rs-routine",
    entryId: ENTRY_ID_1918_01_01,
    label: "Routine",
    labelJa: "掃除、片づけ",
    type: "practice-survives",
    description: "Domestic routines remain as recorded practices.",
    verificationStatus: "partial",
  },
  {
    id: "rs-warmth",
    entryId: ENTRY_ID_1918_01_01,
    label: "Need for warmth",
    labelJa: "身体が暖かさを必要とすること",
    type: "practice-survives",
    description: "The bodily need for warmth remains a living condition.",
    verificationStatus: "partial",
  },
  {
    id: "rs-household-time",
    entryId: ENTRY_ID_1918_01_01,
    label: "Household time",
    labelJa: "住居を整える時間",
    type: "practice-survives",
    description: "Time spent ordering the house remains in the record.",
    verificationStatus: "partial",
  },
  {
    id: "rs-room",
    entryId: ENTRY_ID_1918_01_01,
    label: "Specific room",
    labelJa: "当時の具体的な部屋",
    type: "place-unknown",
    description: "Exact room identity unknown.",
    verificationStatus: "partial",
  },
  {
    id: "rs-heater",
    entryId: ENTRY_ID_1918_01_01,
    label: "Heating appliance",
    labelJa: "暖房器具",
    type: "object-unknown",
    description: "Appliance type not identified.",
    verificationStatus: "partial",
  },
  {
    id: "rs-tools",
    entryId: ENTRY_ID_1918_01_01,
    label: "Cleaning tools",
    labelJa: "掃除道具",
    type: "object-unknown",
    description: "Tools not named.",
    verificationStatus: "partial",
  },
  {
    id: "rs-meals",
    entryId: ENTRY_ID_1918_01_01,
    label: "Meals / visitors / weather",
    labelJa: "食事・来客・天候",
    type: "context-research-needed",
    description: "Not recorded in the indexed summary.",
    verificationStatus: "partial",
  },
];

export const diaryAsEvidence = {
  title: "A diary preserves the speed of life.",
  titleJa: "日記は、生活の速度を残す。",
  paragraphs: [
    "暖まるのを待つ。片づける。掃除をする。",
    "どれも、歴史年表には残らない。",
    "しかし、人が一日をどのような速さで生きていたかは、こうした行動の中に残る。",
    "日記は、出来事だけでなく、待ち時間を保存する。",
  ],
};

export const entrySources: Source[] = [
  {
    id: "src-1918-primary",
    category: "primary",
    status: "verification-pending",
    label: "永井荷風『断腸亭日乗』1918年1月1日",
    note: "Primary source — no long quotation. Edition details needed.",
    needed: true,
  },
  {
    id: "src-1918-pd",
    category: "primary",
    status: "needed",
    label: "Public-domain text source — 正規公開本文",
    needed: true,
    note: "Copyright note: work vs modern edition rights must be distinguished.",
  },
  {
    id: "src-1918-modern",
    category: "primary",
    status: "needed",
    label: "Modern editions — 刊行版・校訂版",
    needed: true,
    note: "Edition copyright may apply.",
  },
  {
    id: "src-1918-housing",
    category: "editorial",
    status: "needed",
    label: "Historical context — 1918年の住居、暖房、正月習慣",
    needed: true,
  },
  {
    id: "src-1918-weather",
    category: "verification",
    status: "needed",
    label: "Weather data — 歴史気象記録",
    needed: true,
    note: "Keep subjective cold and measured weather separate.",
  },
  {
    id: "src-1918-editorial",
    category: "editorial",
    status: "verification-pending",
    label: "Editorial references — 荷風研究、生活史、住宅史",
  },
];

export const relatedPages = [
  {
    group: "Observation",
    title: "一日の値段",
    href: "/observations/the-price-of-an-ordinary-day",
  },
  { group: "Writer", title: "Kafū Nagai", href: "/writers/kafu-nagai" },
  {
    group: "Diary",
    title: "断腸亭日乗",
    href: "/diaries/dancho-tei-nichijo",
  },
  {
    group: "Comparison",
    title: "荷風から西村へ",
    href: "/compare/kafu-nishimura",
  },
  {
    group: "Comparison",
    title: "Three Urban Diarists",
    href: "/compare/urban-diarists",
  },
  {
    group: "Entry",
    title: "May 2, 2011 — Kenji Nishimura",
    href: "/entries/2011-05-02-kenji-nishimura",
  },
  {
    group: "Same Day",
    title: "January 1, 1918",
    href: "/same-day/1918-01-01",
  },
  {
    group: "Observation",
    title: "東京は、日記の中で何度も消える",
    href: null,
    coming: true,
  },
];
