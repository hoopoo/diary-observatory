import type {
  EntityAppearance,
  EntityStatusEvent,
  EpistemicKind,
  PurchasedItem,
  Source,
} from "@/lib/types";

export const TOMARU_SLUG = "tomaru-shoten";
export const TOMARU_ENTITY_ID = "entity-tomaru";

export const tomaruLead = [
  "西村賢太の日記には、高円寺での待ち合わせ前に都丸書店へ立ち寄った一日が記録されている。",
  "古書を手に取り、値段を確かめ、その後ライブハウスへ向かった。",
  "店が閉じたあとも、その一日は日記の中で繰り返される。",
];

export const tomaruTagline = {
  en: "The shop is gone. The visit remains.",
  ja: "店はなくなった。立ち寄った一日は残っている。",
};

export const tomaruEpistemic = {
  fact: [
    "都丸書店という名称の書店が高円寺に存在した",
    "西村賢太の日記に登場する",
    "2011年5月2日に立ち寄った記録がある",
  ],
  observation: [
    "待ち合わせ前に立ち寄れる生活動線の中に古書店があった",
    "出版社での仕事、古書店、ライブハウスが同じ一日の中でつながっていた",
    "店名と購入記録が都市の文化的な動線を保存している",
  ],
  interpretation: [
    "店が消えると、場所だけでなく時間の使い方も失われる",
    "日記は、閉店後も一日の動線を保存する",
    "都丸書店は平成東京の文化インフラの一部として読める",
  ],
};

export const tomaruAppearance: EntityAppearance = {
  id: "appear-tomaru-2011-05-02",
  entityId: TOMARU_ENTITY_ID,
  entryId: "entry-2011-05-02",
  writerId: "writer-nishimura",
  date: "2011-05-02",
  context: "Koenji, before meeting / ShowBoat",
  summary:
    "新潮社での仕事のあと高円寺へ移動し、待ち合わせ前に都丸書店へ立ち寄り、古書を購入してShowBoatへ向かった。",
  sourceId: "src-tomaru-primary-diary",
  verificationStatus: "needs-source",
};

export const tomaruFragment = {
  date: "May 2, 2011",
  writerName: "Kenji Nishimura",
  writerHref: "/writers/kenji-nishimura",
  locations: ["Koenji", "Tokyo"],
  events: [
    "新潮社で仕事",
    "高円寺へ移動",
    "待ち合わせ前に都丸書店へ立ち寄る",
    "古書を購入",
    "ShowBoatへ向かう",
    "友川カズキのライブを見る",
  ],
  sourceTitle: "西村賢太の日記",
  sourceNote:
    "原文の長い転載は避ける。出来事の要約として表示する。書誌の詳細は確認中。",
  relatedEntityIds: [
    "entity-shinchosha",
    "entity-koenji",
    "entity-tomaru",
    "entity-showboat",
    "entity-tomikawa",
  ],
  observationHref: "/observations/heisei-dancho-tei-nichijo",
  entryHref: "/entries/2011-05-02-kenji-nishimura",
  entryAvailable: true,
};

/** Candidates only — unverified fields stay null. */
export const tomaruPurchasedItems: PurchasedItem[] = [
  {
    id: "purchase-kyuketsuga",
    entryId: "entry-2011-05-02",
    entityId: TOMARU_ENTITY_ID,
    type: "book",
    title: "吸血蛾",
    creator: "横溝正史",
    publisher: null,
    edition: null,
    price: null,
    currency: null,
    verificationStatus: "needs-source",
    sourceNote: "画像または原典での書名・版・価格確認が必要。",
  },
  {
    id: "purchase-taibo",
    entryId: "entry-2011-05-02",
    entityId: TOMARU_ENTITY_ID,
    type: "book",
    title: "大望",
    creator: "島田清次郎",
    publisher: null,
    edition: null,
    price: null,
    currency: null,
    verificationStatus: "needs-source",
    sourceNote: "書名・版・価格は確認中。",
  },
  {
    id: "purchase-sasaki",
    entryId: "entry-2011-05-02",
    entityId: TOMARU_ENTITY_ID,
    type: "book",
    title: "佐々木茂索集",
    creator: null,
    publisher: null,
    edition: null,
    price: null,
    currency: null,
    verificationStatus: "needs-source",
    sourceNote: "書誌詳細は確認中。",
  },
  {
    id: "purchase-tomokawa-lyrics",
    entryId: "entry-2011-05-02",
    entityId: TOMARU_ENTITY_ID,
    type: "book",
    title: "友川カズキ歌詞集",
    creator: "友川カズキ",
    publisher: null,
    edition: null,
    price: null,
    currency: null,
    verificationStatus: "needs-source",
    sourceNote: "正確な書名・版は原典確認が必要。",
  },
];

export const tomaruLocationContext = {
  title: "Koenji, before the venue",
  titleJa: "ライブハウスへ向かう前の高円寺",
  paragraphs: [
    "この日の都丸書店は、目的地そのものではなかった。",
    "待ち合わせまで少し時間があり、その空白を埋めるために立ち寄った場所だった。",
    "出版社での仕事。電車での移動。古書店。ライブハウス。物販。食事。",
    "一つの街の中で、文化的な行動が連続していた。",
  ],
  route: [
    { label: "Shinchosha", labelJa: "新潮社", href: "/entities/shinchosha" },
    { label: "Koenji Station", labelJa: "高円寺駅", href: null },
    {
      label: "Tomaru Shoten",
      labelJa: "都丸書店",
      href: "/entities/tomaru-shoten",
    },
    { label: "ShowBoat", labelJa: "ShowBoat", href: "/entities/showboat" },
  ],
  latitude: null as number | null,
  longitude: null as number | null,
};

export const tomaruThenNow = {
  then: {
    year: 2011,
    items: [
      "高円寺の生活動線に古書店があった",
      "待ち合わせ前に立ち寄れる場所だった",
      "本をその場で手に取り、状態と価格を確認できた",
      "出版社、書店、ライブハウスが同じ文化圏としてつながっていた",
    ],
  },
  now: {
    year: 2026,
    items: [
      "現在状況を確認中",
      "閉店が確認できた場合は閉店年を表示",
      "跡地が確認できた場合は現在用途を表示",
      "後継店、蔵書の移動先、関係者の証言があれば追加",
      "未確認の場合は unknown を維持する",
    ],
  },
  note: "過去を美化しすぎず、現在を単純な劣化として描かない。文化的行動の構造の変化を観測する。",
};

export const tomaruWhatDisappeared = {
  title: "What disappears when a bookstore closes?",
  titleJa: "書店が閉じると、何が消えるのか",
  items: [
    { id: "place", label: "Place", labelJa: "店そのもの" },
    { id: "inventory", label: "Inventory", labelJa: "棚に並んでいた本" },
    {
      id: "encounter",
      label: "Encounter",
      labelJa: "偶然の一冊との出会い",
    },
    {
      id: "waiting",
      label: "Waiting Time",
      labelJa: "待ち合わせ前の時間の使い方",
    },
    { id: "route", label: "Route", labelJa: "街の中での文化的な動線" },
    {
      id: "memory",
      label: "Memory",
      labelJa: "店員、客、匂い、音、棚の配置",
    },
  ],
  paragraphs: [
    "店が閉じると、建物や看板だけが消えるのではない。",
    "少し早く着いたときに、目的を決めずに本棚を見る時間も消える。",
    "Diary Observatoryは、場所だけでなく、その場所で可能だった行動も記録する。",
  ],
};

export const tomaruStatusHistory: EntityStatusEvent[] = [
  {
    id: "evt-tomaru-2011",
    entityId: TOMARU_ENTITY_ID,
    date: "2011-05-02",
    year: 2011,
    status: "existing",
    label: "Appears in Kenji Nishimura’s diary",
    labelJa: "西村賢太の日記に登場",
    description: "Diary appearance indexed. Operating status that day is not independently verified here.",
    sourceId: "src-tomaru-primary-diary",
    verificationStatus: "needs-source",
  },
  {
    id: "evt-tomaru-change",
    entityId: TOMARU_ENTITY_ID,
    year: "unknown",
    status: "unknown",
    label: "Store status changed",
    labelJa: "店舗状態の変化（年未確認）",
    description: "Closure or relocation year is not asserted without sources.",
    verificationStatus: "needs-source",
  },
  {
    id: "evt-tomaru-2026",
    entityId: TOMARU_ENTITY_ID,
    year: 2026,
    date: "2026-08-02",
    status: "unknown",
    label: "Current status under verification",
    labelJa: "現在状況を検証中",
    description: "Keep status unknown until a reliable source confirms survival or closure.",
    verificationStatus: "needs-source",
  },
];

export const tomaruRelatedEntities = [
  {
    entityId: "entity-nishimura-person",
    relationship: "Writer whose diary records the visit",
    relationshipJa: "立ち寄りを日記に残した作家",
  },
  {
    entityId: "entity-koenji",
    relationship: "District of the visit",
    relationshipJa: "立ち寄り先の地区",
  },
  {
    entityId: "entity-shinchosha",
    relationship: "Earlier stop on the same day",
    relationshipJa: "同日の前段（仕事）",
  },
  {
    entityId: "entity-showboat",
    relationship: "Destination after the bookstore",
    relationshipJa: "書店のあとの目的地",
  },
  {
    entityId: "entity-tomikawa",
    relationship: "Musician associated with the evening",
    relationshipJa: "夜のライブに結びつく人物",
  },
];

export const tomaruEcosystem = {
  title: "A literary route in late-Heisei Tokyo",
  titleJa: "平成後期東京の文学的な動線",
  flow: ["Publisher", "Writer", "Bookstore", "Live House", "Audience"],
  paragraphs: [
    "都丸書店を単独の店舗として見るだけでは、この日の意味は分からない。",
    "西村賢太は、出版社で仕事をし、古書店へ立ち寄り、ライブハウスへ向かった。",
    "書くこと、本を買うこと、音楽を聴くこと、人に会うことが、街の中で連続していた。",
    "都丸書店は、その動線を支える一つの節点だった。",
  ],
};

export const tomaruConcept = {
  title: "In the diary, it is still open.",
  titleJa: "日記の中では、まだ開いている。",
  paragraphs: [
    "現実の店には、開店日と閉店日がある。",
    "しかし日記の中では、その日の店だけが保存される。",
    "ページを開くたびに、西村賢太は高円寺へ着き、待ち合わせまでの時間に店を覗く。",
    "これは店の復元ではない。",
    "一度だけ生きられた時間の再生である。",
  ],
};

export const tomaruSources: Source[] = [
  {
    id: "src-tomaru-primary-diary",
    category: "primary",
    status: "primary-unavailable",
    label: "西村賢太の日記（2011年5月2日周辺）",
    note: "Primary text — 長い転載はしない。書誌詳細は Edition details needed。",
    needed: true,
  },
  {
    id: "src-tomaru-store-history",
    category: "verification",
    status: "needed",
    label: "店舗の沿革・閉店・移転・関係者記録",
    needed: true,
    note: "Store history — Source needed",
  },
  {
    id: "src-tomaru-location",
    category: "verification",
    status: "needed",
    label: "住所・地図・商店街資料・自治体資料",
    needed: true,
    note: "Location verification — Source needed",
  },
  {
    id: "src-tomaru-editorial",
    category: "editorial",
    status: "verification-pending",
    label: "古書店文化・高円寺・出版文化の参考資料",
    note: "Editorial references — to be attached after review.",
  },
];

export const tomaruRelatedObservations = [
  {
    id: "obs-heisei-dancho",
    title: "平成の断腸亭日乗",
    subtitle: "西村賢太の日記に残る、消えていく東京",
    href: "/observations/heisei-dancho-tei-nichijo",
    status: "available" as const,
  },
  {
    id: "rel-still-open",
    title: "日記の中では、店はまだ開いている",
    subtitle: undefined,
    href: null,
    status: "coming" as const,
  },
  {
    id: "rel-koenji-route",
    title: "高円寺の文化動線",
    subtitle: undefined,
    href: null,
    status: "coming" as const,
  },
  {
    id: "rel-bookstores-diaries",
    title: "Bookstores That Remain Only in Diaries",
    subtitle: undefined,
    href: null,
    status: "coming" as const,
  },
];

export type TomaruEpistemicKind = EpistemicKind;
