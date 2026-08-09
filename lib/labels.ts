import type {
  EntityStatus,
  EntityType,
  EpistemicKind,
  VerificationStatus,
} from "./types";

export const ENTITY_STATUS_LABELS: Record<
  EntityStatus,
  { en: string; ja: string; icon: string }
> = {
  existing: { en: "Existing", ja: "現存", icon: "●" },
  closed: { en: "Closed", ja: "閉店・閉鎖", icon: "○" },
  demolished: { en: "Demolished", ja: "解体", icon: "△" },
  destroyed: { en: "Destroyed by war", ja: "戦災焼失", icon: "×" },
  rebuilt: { en: "Reconstructed", ja: "再建", icon: "▣" },
  deceased: { en: "Deceased", ja: "故人", icon: "†" },
  ended: { en: "Ended", ja: "終了", icon: "■" },
  renamed: { en: "Renamed", ja: "改称", icon: "↻" },
  relocated: { en: "Relocated", ja: "移転", icon: "→" },
  transformed: { en: "Changed / district transformed", ja: "変容・地域変容", icon: "◇" },
  unknown: { en: "Unknown", ja: "不明", icon: "?" },
};

export const ENTITY_TYPE_LABELS: Record<EntityType, { en: string; ja: string }> =
  {
    person: { en: "Person", ja: "人物" },
    bookstore: { en: "Bookstore", ja: "書店" },
    publisher: { en: "Publisher", ja: "出版社" },
    restaurant: { en: "Restaurant", ja: "飲食店" },
    bar: { en: "Bar", ja: "バー" },
    theater: { en: "Theater", ja: "劇場" },
    liveHouse: { en: "Live House", ja: "ライブハウス" },
    televisionProgram: { en: "TV Program", ja: "テレビ番組" },
    magazine: { en: "Magazine", ja: "雑誌" },
    newspaper: { en: "Newspaper", ja: "新聞" },
    hospital: { en: "Hospital", ja: "病院" },
    station: { en: "Station", ja: "駅" },
    company: { en: "Company", ja: "企業" },
    broadcaster: { en: "Broadcaster", ja: "放送局" },
    publishingImprint: { en: "Publishing Imprint", ja: "レーベル／文庫" },
    building: { en: "Building", ja: "建物" },
    street: { en: "Street", ja: "通り" },
    object: { en: "Object", ja: "事物" },
    book: { en: "Book", ja: "本" },
    food: { en: "Food & Drink", ja: "食事・酒" },
    neighborhood: { en: "Neighborhood", ja: "街・地区" },
    district: { en: "District", ja: "地区" },
    museum: { en: "Museum", ja: "記念館・博物館" },
    residence: { en: "Residence", ja: "住居" },
    "literary-archive": { en: "Literary archive", ja: "文学アーカイブ" },
    other: { en: "Other", ja: "その他" },
  };

export const SOURCE_STATUS_LABELS: Record<
  import("./types").SourceStatus,
  { en: string; ja: string }
> = {
  verified: { en: "Verified source", ja: "確認済み出典" },
  needed: { en: "Source needed", ja: "出典が必要" },
  "primary-unavailable": {
    en: "Primary text unavailable",
    ja: "原典本文は未掲出",
  },
  "verification-pending": {
    en: "Verification pending",
    ja: "検証待ち",
  },
};

export const SOURCE_CATEGORY_LABELS: Record<
  import("./types").SourceCategory,
  { en: string; ja: string }
> = {
  primary: { en: "Primary source", ja: "一次資料" },
  verification: { en: "Verification sources", ja: "現況確認" },
  editorial: { en: "Editorial references", ja: "編集参考" },
};

export const EPISTEMIC_LABELS: Record<
  EpistemicKind,
  { en: string; ja: string }
> = {
  fact: { en: "Fact", ja: "事実" },
  observation: { en: "Observation", ja: "観測" },
  interpretation: { en: "Interpretation", ja: "解釈" },
};

export const VERIFICATION_LABELS: Record<
  VerificationStatus,
  { en: string; ja: string }
> = {
  verified: { en: "Verified", ja: "確認済み" },
  "needs-source": { en: "Source needed", ja: "出典が必要" },
  unverified: { en: "Unverified", ja: "未確認" },
};
