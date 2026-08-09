import type { HousingRecord } from "@/lib/types";

export const HAYASHI_ID = "writer-hayashi";

/**
 * Housing timeline — only public / confirmed slots.
 * Private exact addresses are not displayed.
 */
export const hayashiHousingRecords: HousingRecord[] = [
  {
    id: "house-hayashi-early-boarding",
    writerId: HAYASHI_ID,
    label: "Early boarding / rented rooms (pre-success)",
    labelJa: "成功前の下宿・借間",
    housingType: "boarding",
    addressLevel: "unknown",
    domesticFeatures: ["Not indexed"],
    writingUse: "Possible writing space — specifics source-needed",
    sourceIds: ["src-hayashi-housing"],
    verificationStatus: "indexing",
    notes: "Lost rooms remain on the timeline as Unknown, not erased by the surviving house.",
  },
  {
    id: "house-hayashi-tokyo-rooms",
    writerId: HAYASHI_ID,
    label: "Tokyo rooms (district-level only until verified)",
    labelJa: "東京の部屋（確認まで地区レベル）",
    housingType: "rental",
    addressLevel: "district-only",
    sourceIds: ["src-hayashi-housing"],
    verificationStatus: "indexing",
  },
  {
    id: "house-hayashi-ochiai",
    writerId: HAYASHI_ID,
    placeId: "entity-hayashi-fumiko-memorial-hall",
    label: "Ochiai residence (later memorial hall)",
    labelJa: "落合の住居（のち記念館）",
    startDate: "1941",
    housingType: "owned",
    addressLevel: "exact-public",
    writingUse: "Home and workplace",
    domesticFeatures: ["Garden / domestic space — details from official sources only"],
    sourceIds: ["src-hayashi-museum", "src-hayashi-housing"],
    verificationStatus: "partial",
    notes:
      "1941 start commonly associated with Ochiai life — confirm with official memorial materials. Present: /entities/hayashi-fumiko-memorial-hall.",
  },
];

export const HAYASHI_HOUSING_IDS = hayashiHousingRecords.map((h) => h.id);
