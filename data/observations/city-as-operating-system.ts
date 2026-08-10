import type { Source } from "@/lib/types";
import { cityOsLayers } from "@/data/urban/registry";
import { compareWriterUrbanProfiles } from "@/lib/urban-observatory";

export const CITY_OBS_SLUG = "city-as-operating-system";
export const CITY_OBS_ID = "obs-city-as-operating-system";

export const cityObsLead = [
  "朝、",
  "家を出る。",
  "仕事へ向かう。",
  "電車に乗る。",
  "店へ寄る。",
  "出版社へ行く。",
  "劇場へ入る。",
  "病院へ向かう。",
  "誰かの家へ行く。",
  "帰宅する。",
  "一日の行動は、本人の意思だけでできているわけではない。",
  "そこに道がある。",
  "交通がある。",
  "店が開いている。",
  "職場がある。",
  "出版社がある。",
  "劇場がある。",
  "行政機関がある。",
  "住める家がある。",
  "都市は、生活の背景ではない。",
  "日常を実行するための Operating System のように働いている。",
];

export const cityObsMeta = {
  themes:
    "City / Urban Life / Infrastructure / Movement / Housing / Work / Transport / Publishing / Performance / Administration / Maintenance",
  articleStatus: "Published",
  verificationStatus: "Interpretive / evidence-backed",
  lastUpdated: "2026-08-10",
  axisLabel: "Observation Axis — City",
};

export const cityObsTheses = {
  primary: {
    en: "A city is not merely where a day happens. It helps determine what can happen in that day.",
    ja: "都市は、一日が起きる場所であるだけではない。その日に何ができるかを決める仕組みの一部である。",
  },
  secondary: {
    en: "The city enters the diary as distance, cost, access, waiting, noise, opportunity, and interruption.",
    ja: "都市は日記の中へ、距離、費用、アクセス、待機、騒音、機会、中断として入り込む。",
  },
  caution:
    "“Operating System” is an interpretive metaphor — not a technical claim or Fact about institutions.",
};

export { cityOsLayers };

export const cityOsFlow = [
  "PERSON",
  "HOME",
  "MOBILITY NETWORK",
  "WORK / SHOP / PUBLISHER / THEATER / OFFICE / HOSPITAL / OTHER PERSON",
  "RETURN / NEXT DESTINATION",
];

export const distanceDimensions = [
  { en: "Physical", ja: "地理的" },
  { en: "Temporal", ja: "時間的" },
  { en: "Financial", ja: "金銭的" },
  { en: "Institutional", ja: "制度的" },
  { en: "Bodily", ja: "身体的" },
  { en: "Social", ja: "社会的" },
];

export const movementModes = [
  "walk",
  "rail",
  "tram",
  "bus",
  "carriage",
  "automobile",
  "bicycle",
  "boat",
  "taxi",
  "other",
  "unknown",
];

export const publishingLocationRoles = [
  "publisher-office",
  "editorial-office",
  "printer",
  "bookseller",
  "distribution",
  "meeting-place",
  "residence",
  "correspondence-only",
  "unknown",
];

export const venueLayers = [
  "Performance",
  "Rehearsal",
  "Waiting",
  "Food",
  "Body preparation",
  "Audience",
  "Money",
  "Administration",
  "Social network",
  "Entertainment",
];

export const disruptionLayers = [
  "Transport interruption",
  "Venue closure",
  "Housing damage",
  "Food access",
  "Public health",
  "Communication",
  "Work",
  "Administration",
  "Publishing",
  "Audience",
];

export const cityWorkingPrinciple = {
  enQuestions: [
    "What function did the place perform?",
    "How was it reached?",
    "What did it cost?",
    "Who could enter?",
    "What happened while waiting?",
    "What other activities depended on it?",
    "What changed when access failed?",
  ],
  ja: "「どこで起きたか」だけでなく、その場所は何を可能にしたか。どうやって行ったか。いくらかかったか。誰が入れたか。どれだけ待ったか。何がその場所に依存していたか。アクセス不能になると何が変わったか。を観測する。",
};

export const cityVisibilityRows = [
  "Housing",
  "Workplace",
  "Transport",
  "Shop",
  "Food",
  "Publisher",
  "Theater",
  "Administration",
  "Healthcare",
  "Social meeting",
  "Money",
  "Waiting",
  "Public event",
  "Unknown",
] as const;

export const writerUrbanCards = compareWriterUrbanProfiles([
  "writer-kafu",
  "writer-nishimura",
  "writer-bukowski",
  "writer-hayashi",
  "writer-roppa",
  "writer-ichiyo",
  "writer-kafka",
  "writer-woolf",
  "writer-pepys",
]);

export const epistemicSplit = {
  fact: "Repository Entities by Writer; Hayashi HousingRecords; Money / Publishing / Maintenance traces where present; empty MovementCapability / CityInfrastructure / UrbanFunction day-networks.",
  factJa:
    "WriterごとのEntity登録。林芙美子HousingRecord。存在するMoney / Publishing / Maintenance。移動能力・都市インフラ・UrbanFunctionの一日ネットワークは未索引。",
  observation:
    "Urban functions appear to condition what an ordinary day can do — through access, distance, cost, waiting, and interruption.",
  observationJa:
    "都市機能は、アクセス・距離・費用・待機・中断を通じて、普通の一日に何ができるかを条件づけているように見える。",
  interpretation:
    "City as operating system is a useful metaphor for comparing infrastructure conditions — not a ranking of cities or writers.",
  interpretationJa:
    "city as operating systemは、インフラ条件を比較する有用な比喩である（都市／作家のランキングではない）。",
};

export const relatedComingCity = [
  {
    id: "coming-station-diary",
    title: "駅は日記に何を残すのか",
    titleEn: "What Does a Station Leave in a Diary?",
    status: "coming" as const,
  },
  {
    id: "coming-shop-closes",
    title: "店がなくなると、一日はどう変わるか",
    titleEn: "When a Shop Closes, How Does the Day Change?",
    status: "coming" as const,
  },
  {
    id: "coming-manuscript-transport",
    title: "出版社まで原稿をどう運んだのか",
    titleEn: "How Did Manuscripts Reach the Publisher?",
    status: "coming" as const,
  },
  {
    id: "coming-urban-noise",
    title: "都市の騒音は創作を邪魔したのか",
    titleEn: "Did Urban Noise Interrupt Writing?",
    status: "coming" as const,
  },
  {
    id: "coming-hospital-distance",
    title: "病院までの距離",
    titleEn: "Distance to Care",
    status: "coming" as const,
  },
  {
    id: "coming-same-tokyo",
    title: "同じ東京、違う一日",
    titleEn: "Same Tokyo Name, Different Days",
    status: "coming" as const,
  },
  {
    id: "coming-place-survives",
    title: "場所が残り、生活だけが消える",
    titleEn: "When Place Survives and Life Does Not",
    status: "coming" as const,
  },
  {
    id: "coming-travel-is-work",
    title: "移動時間は仕事なのか",
    titleEn: "Is Travel Time Also Work?",
    status: "coming" as const,
  },
];

export const futureComparison = {
  href: "/compare/two-cities-inside-two-diaries",
  title: "二つの日記の中の、二つの都市",
  titleEn: "Two Cities Inside Two Diaries",
  primary: "Kafū / Pepys",
  status: "Future comparison — not created in this release",
};

export const cityObsSources: Source[] = [
  {
    id: "src-city-obs-repo",
    label: "Diary Observatory repository state (City Observatory)",
    category: "editorial",
    status: "verified",
    note: "Counts derived from registered Entities, HousingRecords, Money / Publishing / Maintenance registries. No invented routes, addresses, or historical venue functions from memory.",
  },
];
