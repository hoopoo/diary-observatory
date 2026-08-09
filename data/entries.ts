import type { DiaryEntry } from "@/lib/types";

/**
 * Entry pages index dates and linked entities.
 * Long diary quotations are intentionally avoided.
 */
export const entries: DiaryEntry[] = [
  {
    id: "entry-2011-05-02",
    workId: "diary-nishimura-nichijo",
    date: "2011-05-02",
    slug: "2011-05-02-kenji-nishimura",
    writerId: "writer-nishimura",
    dayOfWeek: "Monday",
    title: "Late-Heisei literary day in Tokyo",
    titleJa: "平成後期東京の、ある一日",
    summary:
      "A publisher, a bookstore, a live house. One ordinary day in late-Heisei Tokyo.",
    lead: [
      "西村賢太はこの日、新潮社で仕事をし、高円寺へ向かい、待ち合わせまでの時間に都丸書店へ立ち寄った。",
      "古書を買い、その後、ShowBoatで友川カズキのライブを見た。",
    ],
    excerpt:
      "Summary only: publishing work, used-bookstore visit, and a live performance in Koenji. No long quotation reproduced.",
    source: "西村賢太の日記（当該日次。詳細書誌は出典欄で補充）",
    sourceType: "published-diary",
    copyrightStatus: "protected",
    locationIds: ["entity-shinjuku", "entity-koenji"],
    primaryLocationIds: ["entity-shinjuku", "entity-koenji"],
    personIds: [
      "entity-nishimura-person",
      "entity-tomikawa",
      "entity-editor-unnamed",
    ],
    entityIds: [
      "entity-nishimura-person",
      "entity-tomaru",
      "entity-shinchosha",
      "entity-koenji",
      "entity-showboat",
      "entity-tomikawa",
      "entity-editor-unnamed",
    ],
    purchasedItemIds: [
      "purchase-kyuketsuga",
      "purchase-taibo",
      "purchase-sasaki",
      "purchase-tomokawa-lyrics",
    ],
    timelineEventIds: [
      "tl-01",
      "tl-02",
      "tl-03",
      "tl-04",
      "tl-05",
      "tl-06",
    ],
    observationIds: ["obs-heisei-dancho"],
    themes: [
      "Publishing",
      "Used Bookstores",
      "Live Music",
      "Movement",
      "Books",
      "Literary Work",
    ],
    knownSpending: null,
    unverifiedSpendingCount: 4,
    verificationStatus: "partial",
    observationStatus: "Active",
    lastUpdated: "2026-08-02",
    bodyCondition: undefined,
    weather: undefined,
    notes:
      "Daily Observatory sample day. Exact clock times and prices remain unverified.",
    epistemicKind: "observation",
  },
  {
    id: "entry-1918-01-01",
    workId: "diary-kafu-dancho",
    date: "1918-01-01",
    slug: "1918-01-01-kafu-nagai",
    writerId: "writer-kafu",
    isReferenceEntry: false,
    referenceStatus: "none",
    referenceReason:
      "Bibliographic trail incomplete — Strong/Complete required for Reference Entry.",
    dayOfWeek: "Tuesday",
    title: "A New Year’s Day without celebration",
    titleJa: "祝わない正月",
    summary:
      "特別な行事をせず、室内が暖まるのを待ち、片づけと掃除をして過ごした一日。",
    lead: [
      "永井荷風は、正月だからといって特別な行事をするのではなく、家の中が暖かくなるのを待ち、片づけや掃除をして過ごした。",
    ],
    excerpt:
      "Summary only: New Year’s Day without ceremony — waiting for warmth, tidying, cleaning. No long quotation.",
    source: "断腸亭日乗（1918年1月1日。詳細書誌は出典欄で補充）",
    sourceType: "published-diary",
    copyrightStatus: "public-domain-status-to-verify",
    locationIds: ["entity-tokyo"],
    primaryLocationIds: ["entity-tokyo"],
    personIds: [],
    entityIds: ["entity-tokyo"],
    objectIds: [
      "obj-heating",
      "obj-cleaning-tools",
      "obj-room",
      "obj-household",
    ],
    timelineEventIds: [
      "tl-1918-01",
      "tl-1918-02",
      "tl-1918-03",
      "tl-1918-04",
    ],
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
    subjectiveWeather: null,
    measuredWeather: null,
    indoorCondition: "Cold before warming",
    bodyCondition: "Cold as a living condition — no clinical diagnosis asserted",
    householdActions: ["waiting for warmth", "tidying", "cleaning"],
    verificationStatus: "partial",
    observationStatus: "Active",
    lastUpdated: "2026-08-02",
    notes:
      "Daily Observatory — ordinary New Year. Heating appliance type not asserted.",
    epistemicKind: "observation",
  },
  {
    id: "entry-1945-03-10",
    workId: "diary-kafu-dancho",
    date: "1945-03-10",
    title: "Tokyo under air raid",
    excerpt:
      "Summary only: Kafū's diary records the Great Tokyo Air Raid night and its aftermath. Exact short citation pending edition check.",
    source: "断腸亭日乗（1945年3月10日前後。版情報を補充予定）",
    locationIds: ["entity-asamoya"],
    personIds: [],
    entityIds: ["entity-asamoya"],
    themes: ["War", "Urban Change", "Tokyo"],
    weather: undefined,
    notes: "Paired with Same Day comparison scaffold.",
    epistemicKind: "fact",
  },
  {
    id: "entry-1945-08-15",
    workId: "diary-kafu-dancho",
    date: "1945-08-15",
    title: "Surrender day, Tokyo",
    excerpt:
      "Summary only: end-of-war day as recorded from Tokyo. Cross-city comparison is planned, not yet filled with other diaries.",
    source: "断腸亭日乗（1945年8月15日。版情報を補充予定）",
    locationIds: [],
    personIds: [],
    entityIds: [],
    themes: ["War", "Tokyo"],
    notes: "Coming observation for multi-city same-day reading.",
    epistemicKind: "fact",
  },
];

export function getEntryById(id: string) {
  return entries.find((e) => e.id === id);
}

export function getEntryByDateOrId(dateOrId: string) {
  return (
    entries.find((e) => e.id === dateOrId) ||
    entries.find((e) => e.slug === dateOrId) ||
    entries.find((e) => e.date === dateOrId)
  );
}

export function getEntriesByWork(workId: string) {
  return entries.filter((e) => e.workId === workId);
}

export function getEntriesByWriterWorkIds(workIds: string[]) {
  return entries.filter((e) => workIds.includes(e.workId));
}
