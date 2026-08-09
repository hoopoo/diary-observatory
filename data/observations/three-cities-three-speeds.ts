import type { MoneyFragmentData, Source } from "@/lib/types";
import { relatedEntityIds } from "@/data/comparisons/urban-diarists";

export const THREE_CITIES_SLUG = "three-cities-three-speeds";
export const THREE_CITIES_OBS_ID = "obs-three-cities-three-speeds";

export const THREE_CITIES_ENTITY_IDS = [
  ...relatedEntityIds.kafu,
  ...relatedEntityIds.nishimura,
  ...relatedEntityIds.bukowskiReal,
] as const;

export const threeCitiesLead = [
  "人は、自分の意思だけで一日を生きているわけではない。",
  "天候が行動を決める。",
  "仕事が時間を奪う。",
  "編集者から届いた連絡が予定を変える。",
  "電車が街をつなぐ。",
  "酒場が夜を延ばす。",
  "競馬場が期待と失望を繰り返す。",
  "日記を読むと、一人の生活の背後に、都市、制度、技術、身体が見えてくる。",
  "永井荷風。",
  "西村賢太。",
  "チャールズ・ブコウスキー。",
  "三人が書き残したのは、文学だけではなかった。",
  "それぞれの人間が、どのような速さで一日を生きていたかという記録だった。",
];

export const threeCitiesMeta = {
  writers: 3,
  cities: "Tokyo / Los Angeles",
  periods: "1917–1959 / Late Heisei / 20th-century Los Angeles",
  themes: "City / Body / Labor / Publishing / Movement / Repetition",
  articleStatus: "Published",
  verificationStatus: "Partial",
  lastUpdated: "2026-08-02",
};

export const threeCitiesRoutes = [
  {
    writerId: "writer-kafu",
    label: "Kafū",
    route: "Interior → Garden → Street → Home",
  },
  {
    writerId: "writer-nishimura",
    label: "Nishimura",
    route: "Publisher → Train → Bookstore → Live House",
  },
  {
    writerId: "writer-bukowski",
    label: "Bukowski",
    route: "Workplace → Bar / Racetrack → Room → Typewriter",
  },
];

export const threeCitiesBodies = [
  {
    writerId: "writer-kafu",
    label: "Kafū",
    items: ["寒さ", "歯痛", "歩行", "疲労", "老い"],
  },
  {
    writerId: "writer-nishimura",
    label: "Nishimura",
    items: ["飲酒", "睡眠", "二日酔い", "怒り", "病気"],
  },
  {
    writerId: "writer-bukowski",
    label: "Bukowski",
    items: ["立ち仕事", "疲労", "飲酒", "夜の執筆", "老い"],
  },
];

export const threeCitiesSystems = [
  {
    writerId: "writer-kafu",
    label: "Kafū",
    nodes: ["Writer", "Publisher", "Newspaper / magazine", "Bookstore", "Reader"],
  },
  {
    writerId: "writer-nishimura",
    label: "Nishimura",
    nodes: [
      "Writer",
      "Publisher",
      "Literary prize",
      "Bookstore",
      "Television",
      "Mass recognition",
    ],
  },
  {
    writerId: "writer-bukowski",
    label: "Bukowski",
    nodes: [
      "Worker / writer",
      "Typed manuscript",
      "Postal submission",
      "Small magazine",
      "Independent publisher",
      "Gradual recognition",
    ],
  },
];

export const moneyFragments: MoneyFragmentData[] = [
  {
    id: "money-indexing",
    amount: "—",
    currency: "—",
    context:
      "Confirmed prices, wages, postage, and fees remain Indexing in progress. No modern conversion or estimates.",
    writer: "All three",
    verificationStatus: "indexing",
  },
];

export const indexedDaysForEssay = [
  {
    writerId: "writer-kafu",
    writerName: "Kafū Nagai",
    date: "January 1, 1918",
    summary: "A New Year’s Day without celebration.",
    href: "/entries/1918-01-01-kafu-nagai",
    coming: false,
    verification: "Partial",
  },
  {
    writerId: "writer-nishimura",
    writerName: "Kenji Nishimura",
    date: "May 2, 2011",
    summary: "A publisher, a bookstore, a live house.",
    href: "/entries/2011-05-02-kenji-nishimura",
    coming: false,
    verification: "Partial",
  },
  {
    writerId: "writer-bukowski",
    writerName: "Charles Bukowski",
    date: "No dated entry",
    summary: "No dated entry indexed yet.",
    href: "/diaries/captain-is-out-to-lunch",
    coming: true,
    verification: "Bibliographic verification needed",
  },
];

export const relatedComingForEssay = [
  {
    id: "rel-diary-speed",
    title: "日記は、生活の速度を残す",
    status: "coming" as const,
  },
  {
    id: "rel-city-vanishes-again",
    title: "都市は、何度も消える",
    status: "coming" as const,
  },
];

export const threeCitiesSources: Source[] = [
  {
    id: "src-tcts-kafu",
    category: "primary",
    status: "verification-pending",
    label: "永井荷風『断腸亭日乗』",
    needed: true,
    note: "Primary diary — edition details needed. No long quotation.",
  },
  {
    id: "src-tcts-nishimura",
    category: "primary",
    status: "needed",
    label: "西村賢太の公刊日記・日乗類",
    needed: true,
    note: "Edition details needed.",
  },
  {
    id: "src-tcts-bukowski",
    category: "primary",
    status: "verification-pending",
    label:
      "Charles Bukowski, The Captain Is Out to Lunch and the Sailors Have Taken Over the Ship",
    needed: true,
    note: "Late diary — Edition / rights verification needed.",
  },
  {
    id: "src-tcts-works",
    category: "primary",
    status: "needed",
    label: "Published works — novels, poems, essays",
    needed: true,
  },
  {
    id: "src-tcts-letters",
    category: "primary",
    status: "needed",
    label: "Letter collections",
    needed: true,
  },
  {
    id: "src-tcts-bio",
    category: "verification",
    status: "needed",
    label: "Biographical sources",
    needed: true,
  },
  {
    id: "src-tcts-publishing",
    category: "verification",
    status: "verification-pending",
    label: "Publishing history — houses, prizes, small press",
    needed: true,
  },
  {
    id: "src-tcts-labor",
    category: "verification",
    status: "needed",
    label: "Labor history — postal system / wage labor",
    needed: true,
    note: "Do not invent facility names or exact employment years.",
  },
  {
    id: "src-tcts-media",
    category: "verification",
    status: "needed",
    label: "Media history — newspapers, television, readings",
    needed: true,
  },
  {
    id: "src-tcts-places",
    category: "verification",
    status: "verification-pending",
    label: "Place verification — shops, streets, racetracks, workplaces",
    needed: true,
  },
  {
    id: "src-tcts-urban",
    category: "verification",
    status: "needed",
    label: "Urban history — war, reconstruction, closures, redevelopment",
    needed: true,
  },
];
