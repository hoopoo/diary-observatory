import type { MoneyRecord, MoneySummary } from "@/lib/types";

export const NISHIMURA_ID = "writer-nishimura";
export const BUKOWSKI_ID = "writer-bukowski";
export const KAFU_ID = "writer-kafu";

/**
 * Money records for Diary Observatory.
 * Never invent amounts. Null amount ≠ 0.
 * Do not sum across currencies or eras.
 */
export const moneyRecords: MoneyRecord[] = [
  {
    id: "money-nishimura-2011-05-02-kyuketsuga",
    writerId: NISHIMURA_ID,
    entryId: "entry-2011-05-02",
    diaryWorkId: "diary-nishimura-nichijo",
    date: "2011-05-02",
    category: "books",
    subcategory: "used-book",
    amount: null,
    currency: "JPY",
    originalTextValue: null,
    context: "Book purchase at Tomaru Shoten — title indexed, price unverified",
    contextJa: "都丸書店での古書購入——書名は索引化、価格は未確認",
    relatedEntityIds: ["entity-tomaru"],
    relatedItemIds: ["purchase-kyuketsuga"],
    incomeOrExpense: "expense",
    costVisibility: "priced",
    evidenceLevel: "explicit",
    verificationStatus: "needs-source",
    sourceIds: ["src-money-nishimura-entry"],
    notes: "Candidate amounts exist in research notes only; not displayed as Fact.",
    deduplicationKey: "entry-2011-05-02:purchase-kyuketsuga",
    sourceRecordId: "purchase-kyuketsuga",
    placeLabel: "都丸書店",
    placeHref: "/entities/tomaru-shoten",
    objectLabel: "吸血蛾",
  },
  {
    id: "money-nishimura-2011-05-02-taibo",
    writerId: NISHIMURA_ID,
    entryId: "entry-2011-05-02",
    diaryWorkId: "diary-nishimura-nichijo",
    date: "2011-05-02",
    category: "books",
    subcategory: "used-book",
    amount: null,
    currency: "JPY",
    context: "Book purchase at Tomaru Shoten — price unverified",
    contextJa: "都丸書店での古書購入——価格未確認",
    relatedEntityIds: ["entity-tomaru"],
    relatedItemIds: ["purchase-taibo"],
    incomeOrExpense: "expense",
    costVisibility: "priced",
    evidenceLevel: "explicit",
    verificationStatus: "needs-source",
    sourceIds: ["src-money-nishimura-entry"],
    deduplicationKey: "entry-2011-05-02:purchase-taibo",
    sourceRecordId: "purchase-taibo",
    placeLabel: "都丸書店",
    placeHref: "/entities/tomaru-shoten",
    objectLabel: "大望",
  },
  {
    id: "money-nishimura-2011-05-02-sasaki",
    writerId: NISHIMURA_ID,
    entryId: "entry-2011-05-02",
    diaryWorkId: "diary-nishimura-nichijo",
    date: "2011-05-02",
    category: "books",
    subcategory: "used-book",
    amount: null,
    currency: "JPY",
    context: "Book purchase at Tomaru Shoten — price unverified",
    contextJa: "都丸書店での古書購入——価格未確認",
    relatedEntityIds: ["entity-tomaru"],
    relatedItemIds: ["purchase-sasaki"],
    incomeOrExpense: "expense",
    costVisibility: "priced",
    evidenceLevel: "explicit",
    verificationStatus: "needs-source",
    sourceIds: ["src-money-nishimura-entry"],
    deduplicationKey: "entry-2011-05-02:purchase-sasaki",
    sourceRecordId: "purchase-sasaki",
    placeLabel: "都丸書店",
    placeHref: "/entities/tomaru-shoten",
    objectLabel: "佐々木茂索集",
  },
  {
    id: "money-nishimura-2011-05-02-movement",
    writerId: NISHIMURA_ID,
    entryId: "entry-2011-05-02",
    date: "2011-05-02",
    category: "movement",
    amount: null,
    currency: "JPY",
    context: "Urban movement (publisher / Koenji) — fare not indexed",
    contextJa: "出版社・高円寺への移動——運賃は未索引",
    incomeOrExpense: "expense",
    costVisibility: "cost-bearing",
    evidenceLevel: "contextual",
    verificationStatus: "indexing",
    sourceIds: ["src-money-transport"],
    deduplicationKey: "entry-2011-05-02:movement",
  },
  {
    id: "money-bukowski-wage",
    writerId: BUKOWSKI_ID,
    category: "income",
    subcategory: "wage-labor",
    amount: null,
    currency: "USD",
    context: "Postal / wage labor income — amount not indexed",
    contextJa: "郵便等の賃金労働——金額未索引",
    relatedEntityIds: ["entity-la-post-office"],
    incomeOrExpense: "income",
    costVisibility: "priced",
    evidenceLevel: "contextual",
    verificationStatus: "indexing",
    sourceIds: ["src-money-labor"],
    notes: "Bibliographic verification needed. No invented contract figures.",
    deduplicationKey: "bukowski:wage-labor",
  },
  {
    id: "money-bukowski-postage",
    writerId: BUKOWSKI_ID,
    category: "communication",
    subcategory: "postage",
    amount: null,
    currency: "USD",
    context: "Manuscript postage / mailing — amount not indexed",
    contextJa: "投稿郵送料——金額未索引",
    incomeOrExpense: "expense",
    costVisibility: "priced",
    evidenceLevel: "contextual",
    verificationStatus: "indexing",
    sourceIds: ["src-money-postal"],
    deduplicationKey: "bukowski:postage",
  },
  {
    id: "money-bukowski-rent",
    writerId: BUKOWSKI_ID,
    category: "housing",
    amount: null,
    currency: "USD",
    context: "Rent — amount not indexed",
    contextJa: "家賃——金額未索引",
    incomeOrExpense: "expense",
    costVisibility: "priced",
    evidenceLevel: "contextual",
    verificationStatus: "indexing",
    sourceIds: ["src-money-housing"],
    deduplicationKey: "bukowski:rent",
  },
  {
    id: "money-bukowski-betting",
    writerId: BUKOWSKI_ID,
    category: "leisure",
    subcategory: "racing",
    amount: null,
    currency: "USD",
    context: "Racetrack betting — amount not indexed",
    contextJa: "競馬の賭け金——金額未索引",
    relatedEntityIds: ["entity-ebony-park"],
    incomeOrExpense: "expense",
    costVisibility: "priced",
    evidenceLevel: "contextual",
    verificationStatus: "indexing",
    sourceIds: ["src-money-leisure"],
    deduplicationKey: "bukowski:betting",
  },
  {
    id: "money-bukowski-alcohol",
    writerId: BUKOWSKI_ID,
    category: "alcohol",
    amount: null,
    currency: "USD",
    context: "Alcohol spending — amount not indexed",
    contextJa: "酒代——金額未索引",
    incomeOrExpense: "expense",
    costVisibility: "priced",
    evidenceLevel: "contextual",
    verificationStatus: "indexing",
    sourceIds: ["src-money-alcohol"],
    deduplicationKey: "bukowski:alcohol",
  },
  {
    id: "money-kafu-1918-01-01-heating",
    writerId: KAFU_ID,
    entryId: "entry-1918-01-01",
    diaryWorkId: "diary-dancho-tei-nichijo",
    date: "1918-01-01",
    category: "energy",
    subcategory: "heating",
    amount: null,
    currency: null,
    context: "Warming the room — cost-bearing resource, no priced amount in entry",
    contextJa: "部屋を暖める——費用を伴うが金額は日記にない",
    incomeOrExpense: "expense",
    costVisibility: "cost-bearing",
    evidenceLevel: "implied",
    verificationStatus: "partial",
    sourceIds: ["src-money-kafu-entry"],
    deduplicationKey: "entry-1918-01-01:heating",
  },
  {
    id: "money-kafu-1918-01-01-housing",
    writerId: KAFU_ID,
    entryId: "entry-1918-01-01",
    date: "1918-01-01",
    category: "housing",
    amount: null,
    currency: null,
    context: "Dwelling as living condition — no rent figure in selected entry",
    contextJa: "住居という生活条件——当該Entryに家賃額なし",
    incomeOrExpense: "unknown",
    costVisibility: "cost-bearing",
    evidenceLevel: "contextual",
    verificationStatus: "partial",
    sourceIds: ["src-money-housing"],
    deduplicationKey: "entry-1918-01-01:housing",
  },
  {
    id: "money-kafu-1918-01-01-cleaning",
    writerId: KAFU_ID,
    entryId: "entry-1918-01-01",
    date: "1918-01-01",
    category: "work",
    subcategory: "domestic",
    amount: null,
    currency: null,
    context: "Cleaning / ordering the house — unpaid or unpriced labor",
    contextJa: "掃除・片づけ——金銭化されていない家事労働",
    incomeOrExpense: "unknown",
    costVisibility: "unpaid-labor",
    evidenceLevel: "explicit",
    verificationStatus: "partial",
    sourceIds: ["src-money-kafu-entry"],
    deduplicationKey: "entry-1918-01-01:cleaning",
  },
  {
    id: "money-kafu-1918-01-01-food",
    writerId: KAFU_ID,
    entryId: "entry-1918-01-01",
    date: "1918-01-01",
    category: "food",
    amount: null,
    currency: null,
    context: "Meals as living resource — no priced amount in selected entry",
    contextJa: "食事——当該Entryに金額なし",
    incomeOrExpense: "expense",
    costVisibility: "cost-bearing",
    evidenceLevel: "contextual",
    verificationStatus: "partial",
    sourceIds: ["src-money-kafu-entry"],
    deduplicationKey: "entry-1918-01-01:food",
  },
];

export function getMoneyRecordById(id: string) {
  return moneyRecords.find((r) => r.id === id);
}

export function getMoneyRecordsByIds(ids: string[]) {
  const set = new Set(ids);
  return moneyRecords.filter((r) => set.has(r.id));
}

export function getMoneyRecordsByWriter(writerId: string) {
  return moneyRecords.filter((r) => r.writerId === writerId);
}

/** Deduplicated verified amounts only — never invent totals. */
export function getVerifiedExpenseTotal(
  writerId: string,
  currency: string,
): number | null {
  const seen = new Set<string>();
  let total = 0;
  let has = false;
  for (const r of moneyRecords) {
    if (r.writerId !== writerId) continue;
    if (r.incomeOrExpense !== "expense") continue;
    if (r.verificationStatus !== "verified") continue;
    if (r.amount == null || r.currency !== currency) continue;
    const key = r.deduplicationKey ?? r.id;
    if (seen.has(key)) continue;
    seen.add(key);
    total += r.amount;
    has = true;
  }
  return has ? total : null;
}

export function buildMoneySummary(writerId: string): MoneySummary {
  const records = getMoneyRecordsByWriter(writerId);
  const knownIncomeByCurrency: Record<string, number> = {};
  const knownExpensesByCurrency: Record<string, number> = {};
  const seen = new Set<string>();
  let unknownRecordCount = 0;

  for (const r of records) {
    const key = r.deduplicationKey ?? r.id;
    if (seen.has(key)) continue;
    seen.add(key);

    if (r.amount == null || r.verificationStatus !== "verified" || !r.currency) {
      unknownRecordCount += 1;
      continue;
    }
    if (r.incomeOrExpense === "income") {
      knownIncomeByCurrency[r.currency] =
        (knownIncomeByCurrency[r.currency] ?? 0) + r.amount;
    } else if (r.incomeOrExpense === "expense") {
      knownExpensesByCurrency[r.currency] =
        (knownExpensesByCurrency[r.currency] ?? 0) + r.amount;
    }
  }

  return {
    writerId,
    knownIncomeByCurrency,
    knownExpensesByCurrency,
    unknownRecordCount,
    verificationStatus: "indexing",
  };
}

export const PRICE_OBS_MONEY_IDS = moneyRecords.map((r) => r.id);
