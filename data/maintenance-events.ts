import type { MaintenanceEvent } from "@/lib/types";

/**
 * Sparse Fact seeds only — do not invent actors, wages, or addresses.
 * Bukowski / Hayashi dated Entry events remain indexing / bibliographical.
 */
export const maintenanceEvents: MaintenanceEvent[] = [
  {
    id: "me-kafu-1918-01-01-heat",
    writerId: "writer-kafu",
    entryId: "entry-1918-01-01",
    date: "1918-01-01",
    category: "heating",
    action: "Waiting for an interior to warm / environmental response",
    actionJa: "室内が暖まるのを待つ／環境への応答",
    actorIds: [],
    actorStatus: "unknown",
    paidStatus: "unknown",
    evidenceLevel: "implied",
    verificationStatus: "partial",
    sourceIds: ["src-maint-kafu-entry"],
    notes:
      "Indexed day signal only. Do not invent fuel type or who managed heat.",
  },
  {
    id: "me-kafu-1918-01-01-cleaning",
    writerId: "writer-kafu",
    entryId: "entry-1918-01-01",
    date: "1918-01-01",
    category: "cleaning",
    action: "Domestic arrangement / cleaning noted in day structure",
    actionJa: "片づけ・掃除として日録に現れる生活配置",
    actorIds: [],
    actorStatus: "unknown",
    paidStatus: "unknown",
    evidenceLevel: "implied",
    verificationStatus: "partial",
    sourceIds: ["src-maint-kafu-entry"],
    notes: "Actor of domestic labor remains Unknown — not Self by default.",
  },
  {
    id: "me-nishimura-2011-05-02-movement",
    writerId: "writer-nishimura",
    entryId: "entry-2011-05-02",
    date: "2011-05-02",
    category: "movement",
    action: "Urban route maintenance (train / taxi / appointments)",
    actionJa: "都市動線の維持（鉄道・タクシー・予定）",
    actorIds: [],
    actorStatus: "unknown",
    paidStatus: "paid",
    evidenceLevel: "explicit",
    verificationStatus: "partial",
    sourceIds: ["src-maint-nishimura-entry"],
    notes: "Schedule visibility is stronger than domestic labor visibility.",
  },
  {
    id: "me-nishimura-2011-05-02-admin",
    writerId: "writer-nishimura",
    entryId: "entry-2011-05-02",
    date: "2011-05-02",
    category: "administration",
    action: "Publishing-schedule and media coordination",
    actionJa: "出版予定・メディア連絡の調整",
    actorIds: [],
    actorStatus: "not-indexed",
    paidStatus: "unknown",
    evidenceLevel: "explicit",
    verificationStatus: "partial",
    sourceIds: ["src-maint-nishimura-entry"],
    notes: "Editor persons may be named in entry data; do not invent managers.",
  },
  {
    id: "me-bukowski-wage-labor",
    writerId: "writer-bukowski",
    category: "money",
    action: "Wage labor as life maintenance (postal axis — bibliographic)",
    actionJa: "生活維持としての賃金労働（郵便労働軸・書誌確認中）",
    actorIds: [],
    actorStatus: "unknown",
    paidStatus: "paid",
    evidenceLevel: "contextual",
    verificationStatus: "indexing",
    sourceIds: ["src-maint-bukowski"],
    notes:
      "No dated Entry indexed yet. No invented wage tables or room addresses.",
  },
  {
    id: "me-hayashi-housing-axis",
    writerId: "writer-hayashi",
    category: "housing",
    action: "Housing sequence axis (lodging → later preserved house)",
    actionJa: "住居系列（下宿等→のちの保存住居）",
    actorIds: [],
    actorStatus: "unknown",
    relatedHousingRecordIds: [],
    paidStatus: "unknown",
    evidenceLevel: "implied",
    verificationStatus: "indexing",
    sourceIds: ["src-maint-hayashi"],
    notes:
      "Hōrōki is diary-derived with editions. Fact only when HousingRecord verified.",
  },
  {
    id: "me-hayashi-food-axis",
    writerId: "writer-hayashi",
    category: "food",
    action: "Food / hunger as writing condition (FoodRecord pending)",
    actionJa: "執筆条件としての食事・空腹（FoodRecord待ち）",
    actorIds: [],
    actorStatus: "unknown",
    paidStatus: "unknown",
    evidenceLevel: "implied",
    verificationStatus: "indexing",
    sourceIds: ["src-maint-hayashi"],
    notes: "Do not fix Hayashi as only a hunger myth.",
  },
];

export const MAINTENANCE_EVENT_IDS = maintenanceEvents.map((e) => e.id);

export function getMaintenanceEventsByWriter(writerId: string) {
  return maintenanceEvents.filter((e) => e.writerId === writerId);
}
