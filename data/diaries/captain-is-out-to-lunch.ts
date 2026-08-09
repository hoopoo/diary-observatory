import type { DiaryWork } from "@/lib/types";

export const CAPTAIN_DIARY_ID = "diary-bukowski-captain";
export const CAPTAIN_DIARY_SLUG = "captain-is-out-to-lunch";

export const captainIsOutToLunch: DiaryWork = {
  id: CAPTAIN_DIARY_ID,
  slug: CAPTAIN_DIARY_SLUG,
  writerId: "writer-bukowski",
  title: "The Captain Is Out to Lunch and the Sailors Have Taken Over the Ship",
  titleOriginal:
    "The Captain Is Out to Lunch and the Sailors Have Taken Over the Ship",
  genre: "journal",
  sourceForm: "journal",
  /** Exact covering years — edition confirmation needed before asserting. */
  startYear: 1991,
  endYear: 1993,
  language: "en",
  publicationStatus: "published",
  rightsStatus:
    "Likely copyright-protected. No long quotations. Short citations only after fair-use review.",
  description:
    "Late diary / journal recording aging, racing, writing, fame, illness, and ordinary routine. Used as a bodily and urban index — not mythology.",
  descriptionJa:
    "晩年の生活、競馬、執筆、名声、老い、病気、死への接近が記録された日記的作品。神話化ではなく、身体と都市の索引として扱う。",
  summary:
    "晩年の生活、競馬、執筆、名声、老い、病気、死への接近が記録された日記的作品。",
  themes: [
    "Aging",
    "Illness",
    "Fame",
    "Writing",
    "Racing",
    "Death",
    "Ordinary routine",
  ],
  entryIds: [],
  entryCount: null,
  entryCountVerification: "needs-source",
  indexingStatus: "in-progress",
  verificationStatus: "needs-source",
  copyrightNote:
    "Copyright-protected source likely. Do not reproduce long passages. Japanese edition title pending bibliographic confirmation.",
  sourceAvailability:
    "Edition details needed — publisher, imprint year, and dated-entry mapping pending.",
  lastUpdated: "2026-08-02",
  sources: [
    {
      id: "src-captain-primary",
      category: "primary",
      status: "verification-pending",
      label:
        "Charles Bukowski, The Captain Is Out to Lunch and the Sailors Have Taken Over the Ship",
      needed: true,
      note: "Edition details needed. Rights verification needed. No invented ISBN or URL.",
    },
  ],
};

export const captainDiaryCard = {
  title: "The Captain Is Out to Lunch and the Sailors Have Taken Over the Ship",
  titleEn: undefined as string | undefined,
  titleJa: "日本語版の正式名称は書誌確認後に表示",
  type: "Late diary / Journal",
  periodLabel: "Period — edition verification needed",
  language: "English",
  description:
    "晩年の生活、競馬、執筆、名声、老い、病気、死への接近が記録された日記的作品。",
  statusLabel: "Primary diary-related source",
  verificationLabel: "Edition details needed",
  href: `/diaries/${CAPTAIN_DIARY_SLUG}`,
};
