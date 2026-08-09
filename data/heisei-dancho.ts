import type {
  ChronologyItem,
  EntityStatus,
  EpistemicKind,
  Source,
  SurvivalSummaryData,
} from "@/lib/types";

export const HEISEI_SLUG = "heisei-dancho-tei-nichijo";

export const HEISEI_ENTITY_IDS = [
  "entity-nishimura-person",
  "entity-shinchosha",
  "entity-tomaru",
  "entity-koenji",
  "entity-showboat",
  "entity-tomikawa",
  "entity-zip",
  "entity-tokyo-mx",
  "entity-oji-honcho",
  "entity-shincho-bunko",
] as const;

export const observationSummary = {
  observedWorld:
    "Tokyo’s literary and media ecosystem in the early 2010s",
  observedWorldJa: "2010年代前半の東京の文学・メディア生態系",
  mainQuestion: "日記に書かれた世界は、現在どれほど残っているか。",
  mainQuestionEn:
    "How much of the world written into the diary still remains today?",
  findings: [
    {
      kind: "observation" as EpistemicKind,
      text: "一部の古書店は閉店している（個別店舗は出典確認が必要）",
    },
    {
      kind: "observation" as EpistemicKind,
      text: "一部のテレビ番組は終了している（番組ごとに検証）",
    },
    {
      kind: "fact" as EpistemicKind,
      text: "出版社（新潮社）は存続している",
    },
    {
      kind: "observation" as EpistemicKind,
      text: "ライブハウスや文化施設は個別確認が必要",
    },
    {
      kind: "fact" as EpistemicKind,
      text: "作家本人は2022年に死去",
    },
    {
      kind: "interpretation" as EpistemicKind,
      text: "日記に記録された出版文化の仕組み自体が変化している",
    },
  ],
  legend: [
    {
      kind: "fact" as EpistemicKind,
      en: "Confirmable fact",
      ja: "確認可能な事実",
    },
    {
      kind: "observation" as EpistemicKind,
      en: "Change seen by comparing diary and present",
      ja: "日記本文と現在を照合して見える変化",
    },
    {
      kind: "interpretation" as EpistemicKind,
      en: "Meaning assigned by the essay",
      ja: "記事執筆者による意味づけ",
    },
  ],
};

export const heiseiTimeline: ChronologyItem[] = [
  {
    year: 2011,
    event: "After the Akutagawa Prize, television appearances and interviews increase.",
    eventJa: "芥川賞受賞後、テレビ出演や取材が増える",
    kind: "fact",
  },
  {
    year: 2011,
    event:
      "A life moving between publishers, used bookstores and live houses remains in the diary.",
    eventJa: "出版社、古書店、ライブハウスを往復する生活が日記に残る",
    kind: "observation",
  },
  {
    year: 2020,
    event:
      "Some shops and programs that appear in the diary begin to disappear from the city and media.",
    eventJa: "日記に登場した一部の店や番組が姿を消す",
    kind: "observation",
  },
  {
    year: 2022,
    event: "Kenji Nishimura dies.",
    eventJa: "西村賢太死去",
    kind: "fact",
  },
  {
    year: 2026,
    event:
      "The diaries are reread from the present, and the survival of their world is observed.",
    eventJa:
      "日記を現在から再読し、登場する世界の残存状況を観測する",
    kind: "observation",
  },
];

export const relatedComingObservations = [
  {
    id: "rel-shop-still-open",
    title: "日記の中では、店はまだ開いている",
    titleEn: "Inside the diary, the shop is still open",
    status: "coming" as const,
  },
  {
    id: "rel-tv-visited",
    title: "まだテレビが作家を訪ねてきた",
    titleEn: "When television still visited writers",
    status: "coming" as const,
  },
  {
    id: "rel-others-stories",
    title: "他人の物語を読む時代",
    titleEn: "An age of reading other people’s stories",
    status: "coming" as const,
  },
  {
    id: "rel-kafu-tokyo",
    title: "永井荷風と消えた東京",
    titleEn: "Kafū Nagai and the Tokyo that vanished",
    status: "coming" as const,
  },
  {
    id: "rel-bukowski-body",
    title: "Charles Bukowski and the working body",
    titleEn: "Charles Bukowski and the working body",
    status: "coming" as const,
  },
];

export const categorizedSources: Source[] = [
  {
    id: "src-primary-nishimura",
    category: "primary",
    status: "primary-unavailable",
    label: "西村賢太の公刊日記・日乗類",
    note: "長い原文転載は行わない。出来事の要約と短い確認可能な引用のみ。",
    needed: false,
  },
  {
    id: "src-primary-kafu",
    category: "primary",
    status: "primary-unavailable",
    label: "永井荷風『断腸亭日乗』",
    note: "比較章の参照枠。短い引用は版確認後に追加。",
  },
  {
    id: "src-ver-shinchosha",
    category: "verification",
    status: "verified",
    label: "新潮社 公式サイト",
    url: "https://www.shinchosha.co.jp/",
  },
  {
    id: "src-ver-tokyo-mx",
    category: "verification",
    status: "verified",
    label: "TOKYO MX 公式サイト",
    url: "https://s.mxtv.jp/",
  },
  {
    id: "src-ver-zip",
    category: "verification",
    status: "verification-pending",
    label: "日本テレビ ZIP! 公式ページ",
    url: "https://www.ntv.co.jp/zip/",
    note: "番組存続の指標。日記登場箇所との対応は別途書誌確認が必要。",
  },
  {
    id: "src-ver-tomaru",
    category: "verification",
    status: "needed",
    label: "都丸書店の現況確認",
    needed: true,
    note: "閉店・存続を断定する出典が未整備。",
  },
  {
    id: "src-ver-showboat",
    category: "verification",
    status: "needed",
    label: "ShowBoat の会場同一性と現況",
    needed: true,
  },
  {
    id: "src-ver-tomikawa",
    category: "verification",
    status: "needed",
    label: "友川カズキの現況確認",
    needed: true,
    note: "存命・活動状況を推測で断定しない。",
  },
  {
    id: "src-ed-method",
    category: "editorial",
    status: "verified",
    label: "Diary Observatory editorial method",
    note: "Fact / Observation / Interpretation の区分と、生成ではなく発掘という方針。",
  },
];

const WORLD_STATUS_ORDER: EntityStatus[] = [
  "existing",
  "closed",
  "transformed",
  "deceased",
  "unknown",
];

export function buildMay2011WorldStatus(
  statusCounts: Partial<Record<EntityStatus, number>>,
): SurvivalSummaryData {
  return {
    label: "The world recorded on May 2, 2011",
    labelJa: "2011年5月2日に記録された世界",
    date: "2011-05-02",
    buckets: WORLD_STATUS_ORDER.map((status) => ({
      status,
      count: statusCounts[status] ?? 0,
    })),
    note: "This is not a score. It is a record of what remains, what has changed, and what can no longer be verified.",
    noteJa:
      "これは残存率の優劣を示す点数ではない。何が残り、何が変わり、何が確認できなくなったかを記録する。",
  };
}

export const may2Fragment = {
  date: "2011-05-02",
  locations: ["Tokyo", "Shinjuku", "Koenji"],
  events: [
    "新潮社で仕事",
    "高円寺へ移動",
    "都丸書店に立ち寄る",
    "古書を購入",
    "ShowBoatで友川カズキのライブを見る",
  ],
  sourceTitle: "西村賢太の日記",
  sourceNote:
    "著作権保護中の本文は長く転載しない。原文引用ではなく、出来事の要約として示す。",
  relatedEntityIds: [
    "entity-shinchosha",
    "entity-koenji",
    "entity-tomaru",
    "entity-showboat",
    "entity-tomikawa",
  ],
};
