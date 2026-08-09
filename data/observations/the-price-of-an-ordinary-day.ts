import { PRICE_OBS_MONEY_IDS } from "@/data/money-records";
import type { Source } from "@/lib/types";

export const PRICE_OBS_SLUG = "the-price-of-an-ordinary-day";
export const PRICE_OBS_ID = "obs-the-price-of-an-ordinary-day";

export const priceLead = [
  "一日は、無料ではない。",
  "起きる。",
  "部屋を暖める。",
  "食べる。",
  "電車に乗る。",
  "本を買う。",
  "酒を飲む。",
  "原稿を送る。",
  "家賃を払う。",
  "日記に記された金額は、文学とは関係のない細部に見える。",
  "しかし、何を買えたか。",
  "どこへ行けたか。",
  "働かずに書けたか。",
  "暖かい部屋にいられたか。",
  "それらはすべて、作品が生まれる前提だった。",
];

export const priceMeta = {
  primaryWriters: "Kafū Nagai / Kenji Nishimura / Charles Bukowski",
  cities: "Tokyo / Los Angeles",
  themes: "Money / Work / Food / Books / Housing / Publishing / Body",
  articleStatus: "Published",
  verificationStatus: "Partial",
  lastUpdated: "2026-08-02",
};

export const dailyCostStructure = [
  {
    id: "housing",
    label: "Housing",
    labelJa: "家賃、宿泊、部屋",
    status: "indexing" as const,
  },
  {
    id: "energy",
    label: "Energy",
    labelJa: "暖房、燃料、電気",
    status: "indexing" as const,
  },
  {
    id: "food",
    label: "Food",
    labelJa: "食事、菓子、飲料",
    status: "indexing" as const,
  },
  {
    id: "alcohol",
    label: "Alcohol",
    labelJa: "酒",
    status: "indexing" as const,
  },
  {
    id: "movement",
    label: "Movement",
    labelJa: "電車、タクシー、徒歩以外の移動",
    status: "indexing" as const,
  },
  {
    id: "books",
    label: "Books",
    labelJa: "新刊、古書、雑誌",
    status: "partial" as const,
  },
  {
    id: "communication",
    label: "Communication",
    labelJa: "郵便、電話、携帯、通信",
    status: "indexing" as const,
  },
  {
    id: "work",
    label: "Work",
    labelJa: "道具、紙、タイプライター、印刷、投稿",
    status: "indexing" as const,
  },
  {
    id: "leisure",
    label: "Leisure",
    labelJa: "競馬、舞台、ライブ、歓楽",
    status: "indexing" as const,
  },
  {
    id: "health",
    label: "Health",
    labelJa: "医療、薬",
    status: "indexing" as const,
  },
  {
    id: "income",
    label: "Income",
    labelJa: "賃金、原稿料、印税、出演料",
    status: "indexing" as const,
  },
];

export const writerEconomicConditions = [
  {
    writerId: "writer-kafu",
    name: "Kafū",
    items: ["資産", "出版収入", "住居", "家事"],
    note: "確認済み範囲のみ。詳細は出典なしに断定しない。",
    verificationStatus: "partial" as const,
  },
  {
    writerId: "writer-nishimura",
    name: "Nishimura",
    items: ["原稿", "印税", "出演", "出版仕事"],
    note: "確認済み範囲のみ。金額は indexing in progress。",
    verificationStatus: "partial" as const,
  },
  {
    writerId: "writer-bukowski",
    name: "Bukowski",
    items: ["賃金労働", "小出版", "出版支援"],
    note: "確認済み範囲のみ。契約額を記憶から補完しない。",
    verificationStatus: "indexing" as const,
  },
];

export const booksEconomyAxes = [
  { id: "buy", label: "Buy", labelJa: "購入" },
  { id: "borrow", label: "Borrow", labelJa: "借りる" },
  { id: "receive", label: "Receive", labelJa: "贈呈" },
  { id: "review", label: "Review", labelJa: "書評・紹介" },
  { id: "write", label: "Write", labelJa: "執筆" },
  { id: "publish", label: "Publish", labelJa: "刊行" },
  { id: "sell", label: "Sell", labelJa: "販売" },
];

export const movementCostRows = [
  {
    writer: "Kafū",
    modes: "Walking / food / shops / publishing",
    cost: "Not indexed",
    route: "Indoor / neighborhood",
    purpose: "Daily life",
    verification: "partial",
  },
  {
    writer: "Nishimura",
    modes: "Train / taxi / bookstore / live house / food",
    cost: "Not indexed",
    route: "Publisher → Koenji",
    purpose: "Work / culture",
    verification: "indexing",
  },
  {
    writer: "Bukowski",
    modes: "Work commute / road / bar / racetrack / room",
    cost: "Not indexed",
    route: "Los Angeles circuits",
    purpose: "Labor / leisure / writing",
    verification: "indexing",
  },
];

export const costVisibilityExamples = [
  {
    label: "古書購入",
    visibility: "priced" as const,
    note: "金額が記録されうる支出（現在は未確認）",
  },
  {
    label: "暖房",
    visibility: "cost-bearing" as const,
    note: "費用を伴うが金額不明",
  },
  {
    label: "掃除",
    visibility: "unpaid-labor" as const,
    note: "金銭化されていない家事・労働",
  },
];

export const relatedComingPrice = [
  {
    id: "rel-who-buys-writing-time",
    title: "書く時間は、誰が買うのか",
    status: "coming" as const,
  },
  {
    id: "rel-how-writers-bought-books",
    title: "作家は本をどう買ったか",
    status: "coming" as const,
  },
  {
    id: "rel-literature-with-rent",
    title: "家賃のある文学",
    status: "coming" as const,
  },
  {
    id: "rel-price-of-warmth",
    title: "暖かさの値段",
    status: "coming" as const,
  },
];

export const priceEntityIds = [
  "entity-tomaru",
  "entity-shinchosha",
  "entity-los-angeles",
  "entity-la-post-office",
  "entity-ebony-park",
];

export const priceMoneyRecordIds = [...PRICE_OBS_MONEY_IDS];

export const priceSources: Source[] = [
  {
    id: "src-money-nishimura-entry",
    category: "primary",
    status: "needed",
    label: "西村賢太 2011-05-02 日記——購入記録",
    needed: true,
    note: "Prices not displayed until verified against primary text.",
  },
  {
    id: "src-money-kafu-entry",
    category: "primary",
    status: "verification-pending",
    label: "永井荷風『断腸亭日乗』1918-01-01",
    needed: true,
    note: "Selected entry has no priced amounts; cost-bearing resources only.",
  },
  {
    id: "src-money-bukowski-diary",
    category: "primary",
    status: "verification-pending",
    label:
      "Charles Bukowski, The Captain Is Out to Lunch and the Sailors Have Taken Over the Ship",
    needed: true,
  },
  {
    id: "src-money-labor",
    category: "verification",
    status: "needed",
    label: "Labor and wage sources — postal work / employment",
    needed: true,
  },
  {
    id: "src-money-publishing",
    category: "verification",
    status: "needed",
    label: "Publishing records — fees, royalties, support",
    needed: true,
    note: "Do not invent famous contract amounts.",
  },
  {
    id: "src-money-housing",
    category: "verification",
    status: "needed",
    label: "Housing and energy history — rent, heating, fuel",
    needed: true,
  },
  {
    id: "src-money-postal",
    category: "verification",
    status: "needed",
    label: "Postal history — postage, submission costs",
    needed: true,
  },
  {
    id: "src-money-transport",
    category: "verification",
    status: "needed",
    label: "Transport history — fares",
    needed: true,
  },
  {
    id: "src-money-alcohol",
    category: "verification",
    status: "needed",
    label: "Alcohol spending records",
    needed: true,
  },
  {
    id: "src-money-leisure",
    category: "verification",
    status: "needed",
    label: "Leisure / racing spending",
    needed: true,
  },
  {
    id: "src-money-economic-context",
    category: "editorial",
    status: "needed",
    label: "Economic context — prices, wages, living history",
    needed: true,
    note: "MVP does not implement modern conversion.",
  },
];
