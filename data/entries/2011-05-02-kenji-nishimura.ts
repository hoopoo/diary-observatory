import type {
  EntryLayer,
  EntryTimelineEvent,
  PurchasedItem,
  RoutePoint,
  Source,
} from "@/lib/types";

export const ENTRY_SLUG_2011_05_02 = "2011-05-02-kenji-nishimura";
export const ENTRY_ID_2011_05_02 = "entry-2011-05-02";

export const entry20110502Meta = {
  slug: ENTRY_SLUG_2011_05_02,
  date: "2011-05-02",
  dateEn: "May 2, 2011",
  dateJa: "2011年5月2日（月）",
  dayOfWeek: "Monday",
  writerId: "writer-nishimura",
  writerName: "Kenji Nishimura",
  writerNameJa: "西村賢太",
  writerHref: "/writers/kenji-nishimura",
  primaryLocations: ["Shinjuku", "Koenji"],
  themes: [
    "Publishing",
    "Used Bookstores",
    "Live Music",
    "Movement",
    "Books",
    "Literary Work",
  ],
  tagline: {
    en: "A publisher, a bookstore, a live house. One ordinary day in late-Heisei Tokyo.",
    ja: "出版社、古書店、ライブハウス。平成後期東京の、ある一日。",
  },
  lead: [
    "西村賢太はこの日、新潮社で仕事をし、高円寺へ向かい、待ち合わせまでの時間に都丸書店へ立ち寄った。",
    "古書を買い、その後、ShowBoatで友川カズキのライブを見た。",
    "本人にとっては、仕事と買い物と音楽が連続する一日だった。",
    "十五年後の現在から読むと、その動線は、当時の東京に存在した文化的なインフラを示している。",
  ],
  observationStatus: "Active",
  verificationStatus: "partial" as const,
  lastUpdated: "2026-08-02",
  entityIds: [
    "entity-shinchosha",
    "entity-koenji",
    "entity-tomaru",
    "entity-showboat",
    "entity-nishimura-person",
    "entity-tomikawa",
    "entity-editor-unnamed",
  ],
};

export const entrySourceNotice = {
  title: "About this entry",
  titleJa: "この日記項目について",
  paragraphs: [
    "このページは、著作権保護中の日記本文を転載するものではない。",
    "確認できた出来事を要約し、登場する人、場所、物、移動、現在状況を観測する。",
    "原文の表現、語調、文脈を確認する場合は、正規に刊行された書籍を参照する必要がある。",
  ],
  labels: [
    { en: "Primary text", ja: "Copyright protected" },
    { en: "Entry reconstruction", ja: "Editorial summary" },
    { en: "Verification", ja: "Partial" },
  ],
};

export const dayAtAGlance = [
  {
    id: "morning",
    label: "Morning / Early afternoon",
    labelJa: "午前〜昼過ぎ",
    items: [
      "起床",
      "新潮社へ向かう",
      "文庫解説または出版関連の仕事",
      "編集者と打ち合わせ",
    ],
  },
  {
    id: "afternoon",
    label: "Late afternoon",
    labelJa: "午後遅く",
    items: [
      "高円寺へ移動",
      "待ち合わせまで時間がある",
      "都丸書店へ立ち寄る",
      "古書を購入",
    ],
  },
  {
    id: "evening",
    label: "Evening",
    labelJa: "夜",
    items: [
      "ShowBoatへ向かう",
      "友川カズキのライブを見る",
      "会場で関係者と交流",
      "物販で本または歌詞集を購入",
    ],
  },
];

export const entryTimeline: EntryTimelineEvent[] = [
  {
    id: "tl-01",
    entryId: ENTRY_ID_2011_05_02,
    order: 1,
    approximateTime: "Unknown",
    locationId: null,
    placeLabel: "Tokyo",
    placeLabelJa: "東京",
    title: "Wake / prepare",
    titleJa: "起床・準備",
    description: "Exact departure point and clock time are not asserted.",
    actionType: "private",
    entityIds: ["entity-nishimura-person"],
    verificationStatus: "needs-source",
    sourceNote: "Exact time unknown.",
  },
  {
    id: "tl-02",
    entryId: ENTRY_ID_2011_05_02,
    order: 2,
    approximateTime: "Early afternoon",
    locationId: "entity-shinchosha",
    placeLabel: "Shinchosha",
    placeLabelJa: "新潮社",
    title: "Publishing work",
    titleJa: "出版関連の仕事",
    description: "Work related to publishing / editorial meeting.",
    actionType: "work",
    entityIds: ["entity-shinchosha", "entity-editor-unnamed"],
    verificationStatus: "needs-source",
  },
  {
    id: "tl-03",
    entryId: ENTRY_ID_2011_05_02,
    order: 3,
    approximateTime: "Afternoon",
    locationId: null,
    placeLabel: "Travel",
    placeLabelJa: "移動",
    title: "Travel toward Koenji",
    titleJa: "高円寺方面へ移動",
    description: "Movement from the Shinjuku publishing area toward Koenji.",
    actionType: "movement",
    entityIds: ["entity-koenji", "entity-shinjuku"],
    verificationStatus: "needs-source",
  },
  {
    id: "tl-04",
    entryId: ENTRY_ID_2011_05_02,
    order: 4,
    approximateTime: "Late afternoon",
    locationId: "entity-tomaru",
    placeLabel: "Tomaru Shoten",
    placeLabelJa: "都丸書店",
    title: "Bookstore stop before meeting",
    titleJa: "待ち合わせ前に立ち寄る / 古書を購入",
    description: "Visit before a meeting; used-book purchase.",
    actionType: "purchase",
    entityIds: ["entity-tomaru", "entity-koenji"],
    verificationStatus: "needs-source",
  },
  {
    id: "tl-05",
    entryId: ENTRY_ID_2011_05_02,
    order: 5,
    approximateTime: "Evening",
    locationId: "entity-showboat",
    placeLabel: "ShowBoat",
    placeLabelJa: "ShowBoat",
    title: "Live performance",
    titleJa: "友川カズキのライブを見る",
    description: "Attend a live performance.",
    actionType: "media",
    entityIds: ["entity-showboat", "entity-tomikawa"],
    verificationStatus: "needs-source",
  },
  {
    id: "tl-06",
    entryId: ENTRY_ID_2011_05_02,
    order: 6,
    approximateTime: "Evening / Night",
    locationId: "entity-showboat",
    placeLabel: "ShowBoat",
    placeLabelJa: "ShowBoat",
    title: "After the performance",
    titleJa: "出演者や関係者と交流 / 物販を購入",
    description: "Exchange with people around the venue; merchandise purchase.",
    actionType: "social",
    entityIds: ["entity-showboat", "entity-tomikawa"],
    verificationStatus: "needs-source",
  },
];

/** Known route only — no invented home departure. */
export const entryRoutePoints: RoutePoint[] = [
  {
    id: "rp-01",
    entryId: ENTRY_ID_2011_05_02,
    order: 1,
    entityId: "entity-shinchosha",
    label: "Shinchosha",
    labelJa: "新潮社",
    href: "/entities/shinchosha",
    transportMode: null,
    latitude: null,
    longitude: null,
    verificationStatus: "verified",
  },
  {
    id: "rp-02",
    entryId: ENTRY_ID_2011_05_02,
    order: 2,
    entityId: null,
    label: "Koenji Station",
    labelJa: "高円寺駅",
    href: null,
    transportMode: "train",
    latitude: null,
    longitude: null,
    verificationStatus: "needs-source",
  },
  {
    id: "rp-03",
    entryId: ENTRY_ID_2011_05_02,
    order: 3,
    entityId: "entity-tomaru",
    label: "Tomaru Shoten",
    labelJa: "都丸書店",
    href: "/entities/tomaru-shoten",
    transportMode: "walk",
    latitude: null,
    longitude: null,
    verificationStatus: "needs-source",
  },
  {
    id: "rp-04",
    entryId: ENTRY_ID_2011_05_02,
    order: 4,
    entityId: "entity-showboat",
    label: "ShowBoat",
    labelJa: "ShowBoat",
    href: "/entities/showboat",
    transportMode: "walk",
    latitude: null,
    longitude: null,
    verificationStatus: "needs-source",
  },
];

export const placesInDay = [
  {
    entityId: "entity-shinchosha",
    role: "Work / meeting",
    roleJa: "仕事・打ち合わせ",
  },
  {
    entityId: "entity-koenji",
    role: "Movement / waiting / books / music",
    roleJa: "移動・待ち時間・本・音楽",
  },
  {
    entityId: "entity-tomaru",
    role: "Used-book purchase",
    roleJa: "古書購入",
  },
  {
    entityId: "entity-showboat",
    role: "Live performance",
    roleJa: "ライブ鑑賞",
  },
];

export const peopleInDay = [
  {
    entityId: "entity-nishimura-person",
    role: "Writer / diarist",
    roleJa: "作家・日記の書き手",
    relationship: "Self",
    relationshipJa: "本人",
  },
  {
    entityId: "entity-tomikawa",
    role: "Musician / performer",
    roleJa: "ミュージシャン・出演者",
    relationship: "Performer of the evening",
    relationshipJa: "夜の出演者",
  },
  {
    entityId: "entity-editor-unnamed",
    role: "Publisher editor",
    roleJa: "編集者",
    relationship: "Work contact (identity unverified)",
    relationshipJa: "仕事上の相手（実名未確認）",
  },
];

/** Titles indexed; edition/price unverified — do not invent amounts. */
export const purchasedItems: PurchasedItem[] = [
  {
    id: "purchase-kyuketsuga",
    entryId: ENTRY_ID_2011_05_02,
    entityId: "entity-tomaru",
    type: "book",
    title: "吸血蛾",
    creator: "横溝正史",
    publisher: null,
    edition: null,
    price: null,
    currency: null,
    money: null,
    purchasedAtLabel: "Tomaru Shoten",
    purchasedAtLabelJa: "都丸書店",
    verificationStatus: "needs-source",
    sourceNote: "書名・版・価格は原典確認が必要。",
  },
  {
    id: "purchase-taibo",
    entryId: ENTRY_ID_2011_05_02,
    entityId: "entity-tomaru",
    type: "book",
    title: "大望",
    creator: "島田清次郎",
    publisher: null,
    edition: null,
    price: null,
    currency: null,
    money: null,
    purchasedAtLabel: "Tomaru Shoten",
    purchasedAtLabelJa: "都丸書店",
    verificationStatus: "needs-source",
    sourceNote: "書名・版・価格は確認中。",
  },
  {
    id: "purchase-sasaki",
    entryId: ENTRY_ID_2011_05_02,
    entityId: "entity-tomaru",
    type: "book",
    title: "佐々木茂索集",
    creator: null,
    publisher: null,
    edition: null,
    price: null,
    currency: null,
    money: null,
    purchasedAtLabel: "Tomaru Shoten",
    purchasedAtLabelJa: "都丸書店",
    verificationStatus: "needs-source",
    sourceNote: "書誌詳細は確認中。",
  },
  {
    id: "purchase-tomokawa-lyrics",
    entryId: ENTRY_ID_2011_05_02,
    entityId: "entity-showboat",
    type: "book",
    title: "友川カズキ歌詞集",
    creator: "友川カズキ",
    publisher: null,
    edition: null,
    price: null,
    currency: null,
    money: null,
    purchasedAtLabel: "ShowBoat (merch) — unverified",
    purchasedAtLabelJa: "ShowBoat物販（購入場所は確認中）",
    verificationStatus: "needs-source",
    sourceNote: "正確な書名・版・購入場所は原典確認が必要。",
  },
];

/** No verified prices — do not invent amounts. */
export const moneyRecord = {
  knownSpending: null as { amount: number; currency: string } | null,
  unverifiedSpendingCount: purchasedItems.length,
  note: "確認できていない金額は表示しない。合計も確認済み購入物のみで算出する。",
  paragraphs: [
    "日記に残る金額は、単なる出費の記録ではない。",
    "当時の古書の価格、作家の購買行動、街の文化へのアクセスコストを示す。",
  ],
};

export const entryLayers: EntryLayer[] = [
  {
    type: "fact",
    text: "2011年5月2日の日記項目である",
    claimId: "fact-nishimura-2011-05-02-001",
    sourceId: "src-entry-primary",
    verificationStatus: "unverified",
  },
  {
    type: "fact",
    text: "新潮社で仕事をした",
    claimId: "fact-nishimura-2011-05-02-002",
    sourceId: "src-entry-primary",
    verificationStatus: "unverified",
  },
  {
    type: "fact",
    text: "高円寺へ移動した",
    claimId: "fact-nishimura-2011-05-02-003",
    sourceId: "src-entry-primary",
    verificationStatus: "unverified",
  },
  {
    type: "fact",
    text: "都丸書店へ立ち寄った",
    claimId: "fact-nishimura-2011-05-02-004",
    sourceId: "src-entry-primary",
    verificationStatus: "unverified",
  },
  {
    type: "fact",
    text: "ShowBoatでライブを見た",
    claimId: "fact-nishimura-2011-05-02-005",
    sourceId: "src-entry-primary",
    verificationStatus: "unverified",
  },
  {
    type: "fact",
    text: "古書または関連書籍を購入した",
    claimId: "fact-nishimura-2011-05-02-006",
    sourceId: "src-entry-primary",
    verificationStatus: "unverified",
  },
  {
    type: "observation",
    text: "出版社、古書店、ライブハウスが一日の動線としてつながっている",
    claimId: "obs-nishimura-2011-05-02-001",
  },
  {
    type: "observation",
    text: "待ち合わせまでの空白時間が古書店で使われている",
    claimId: "obs-nishimura-2011-05-02-002",
  },
  {
    type: "observation",
    text: "仕事と文化消費が同じ街の移動の中にある",
    claimId: "obs-nishimura-2011-05-02-003",
  },
  {
    type: "observation",
    text: "店名、書名、価格が都市生活の細部を保存している",
    claimId: "obs-nishimura-2011-05-02-004",
  },
  {
    type: "interpretation",
    text: "平成後期の東京には、出版、書店、ライブ文化を歩いて接続できる文化的なインフラがあった",
    claimId: "interp-nishimura-2011-05-02-001",
  },
  {
    type: "interpretation",
    text: "日記は、場所だけでなく行動の可能性を保存する",
    claimId: "interp-nishimura-2011-05-02-002",
  },
  {
    type: "interpretation",
    text: "店が消えても、その日に可能だった動線は記録に残る",
    claimId: "interp-nishimura-2011-05-02-003",
  },
];

export const thenAndNow = {
  then: {
    year: 2011,
    items: [
      "西村賢太は現役の作家だった",
      "出版社との仕事があった",
      "古書店へ立ち寄れた",
      "ライブハウスで演奏を見られた",
      "テレビや出版を中心とした文化産業が強く残っていた",
    ],
  },
  now: {
    year: 2026,
    items: [
      "西村賢太はすでに亡くなっている",
      "新潮社は存続している",
      "都丸書店の現在状況は確認済み情報に従う（現時点では unknown）",
      "ShowBoatの現在状況は確認中",
      "日記は書籍として残る",
      "当時の文化的動線は一部変化または消滅している",
    ],
  },
};

export const culturalSystem = {
  title: "The system behind an ordinary day",
  titleJa: "一日を支えていた仕組み",
  nodes: [
    { label: "Publisher", labelJa: "新潮社", href: "/entities/shinchosha" },
    {
      label: "Writer",
      labelJa: "西村賢太",
      href: "/writers/kenji-nishimura",
    },
    {
      label: "Bookstore",
      labelJa: "都丸書店",
      href: "/entities/tomaru-shoten",
    },
    { label: "Live House", labelJa: "ShowBoat", href: "/entities/showboat" },
    {
      label: "Audience / community",
      labelJa: "観客、友人、文化的なつながり",
      href: null,
    },
  ],
  paragraphs: [
    "この日は、偶然に並んだ出来事の集まりではない。",
    "出版社が作家へ仕事を依頼する。作家が街を移動する。待ち時間に古書店へ入る。夜にはライブハウスへ行く。",
    "出版、書店、音楽、都市交通が、一人の生活の中で連続していた。",
    "日記は、その文化的なシステムを制度図ではなく生活として記録している。",
  ],
};

export const whatWouldBeDifferent = {
  title: "What would be different today?",
  titleJa: "同じ一日は、いま成立するだろうか",
  paragraphs: [
    "現在なら、打ち合わせはオンラインになるかもしれない。",
    "本は通販で買える。待ち時間にはスマートフォンを見る。音楽は配信で聴ける。",
    "移動しなくても、仕事、買い物、娯楽を完結できる。",
    "利便性は増えた。しかし、街を移動する途中で予定していなかった本や人に出会う可能性は、別の形へ変わった。",
  ],
  note: "過去を美化しすぎず、現在を劣化として描かない。構造変化として記述する。",
};

export const diaryAsEvidence = {
  title: "A diary is evidence of a lived day.",
  titleJa: "日記は、生きられた一日の証拠である。",
  paragraphs: [
    "AIは、2011年の高円寺らしい一日を生成できる。",
    "出版社、古書店、ライブハウスを配置し、西村賢太風の文体を書くこともできる。",
    "しかし、2011年5月2日に実際に何が起きたかを作り直すことはできない。",
    "日記の価値は、文体だけではなく、その日が一度だけ生きられたという事実にある。",
  ],
};

export const entrySources: Source[] = [
  {
    id: "src-entry-primary",
    category: "primary",
    status: "primary-unavailable",
    label: "西村賢太の日記（2011年5月2日）",
    note: "Primary text — copyright protected. No long quotation. Edition details needed.",
    needed: true,
  },
  {
    id: "src-entry-biblio",
    category: "primary",
    status: "needed",
    label: "正式な書名、巻、出版社、刊行年",
    needed: true,
    note: "Bibliographic source — Edition details needed",
  },
  {
    id: "src-entry-shinchosha",
    category: "verification",
    status: "verified",
    label: "新潮社 公式サイト",
    url: "https://www.shinchosha.co.jp/",
  },
  {
    id: "src-entry-tomaru",
    category: "verification",
    status: "needed",
    label: "都丸書店の現況確認",
    needed: true,
  },
  {
    id: "src-entry-showboat",
    category: "verification",
    status: "needed",
    label: "ShowBoat の会場同一性と現況",
    needed: true,
  },
  {
    id: "src-entry-tomikawa",
    category: "verification",
    status: "needed",
    label: "友川カズキの現況確認",
    needed: true,
  },
  {
    id: "src-entry-editorial",
    category: "editorial",
    status: "verification-pending",
    label: "出版文化・高円寺・古書店・ライブハウス文化の参考資料",
  },
];

export const relatedPages = [
  {
    group: "Writer",
    title: "Kenji Nishimura",
    href: "/writers/kenji-nishimura",
  },
  {
    group: "Entity",
    title: "Tomaru Shoten",
    href: "/entities/tomaru-shoten",
  },
  {
    group: "Observation",
    title: "平成の断腸亭日乗",
    href: "/observations/heisei-dancho-tei-nichijo",
  },
  {
    group: "Observation",
    title: "一日の値段",
    href: "/observations/the-price-of-an-ordinary-day",
  },
  { group: "Entity", title: "Shinchosha", href: "/entities/shinchosha" },
  { group: "Entity", title: "ShowBoat", href: "/entities/showboat" },
  {
    group: "Writer",
    title: "Kafū Nagai",
    href: "/writers/kafu-nagai",
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
  {
    group: "Comparison",
    title: "Three Urban Diarists",
    href: "/compare/urban-diarists",
  },
];

export const worldStatusMeta = {
  label: "The world of May 2, 2011",
  labelJa: "2011年5月2日の世界",
  date: "2011-05-02",
  note: "This is not a survival score. It records what remains, what has changed, and what can no longer be confirmed.",
  noteJa:
    "これは一日の残存率を競う点数ではない。何が残り、何が変わり、何が確認できなくなったかを記録する。",
};
