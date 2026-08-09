import type {
  CurrentAccessInfo,
  EntityResearchQueueItem,
  EntityTimelineItem,
  Source,
} from "@/lib/types";

export const MEMORIAL_ENTITY_ID = "entity-hayashi-fumiko-memorial-hall";
export const MEMORIAL_SLUG = "hayashi-fumiko-memorial-hall";
export const MEMORIAL_ACCESS_ID = "access-hayashi-memorial";

export const memorialLead = [
  "林芙美子の生活には、多くの住居があった。",
  "家族と移動した場所。",
  "東京で借りた部屋。",
  "仕事をしながら暮らした下宿。",
  "家賃を気にした住居。",
  "そして、作家として成功したあとに得た家。",
  "現在残っているのは、その最後の側にある住居である。",
  "この家は、成功の象徴であると同時に、それ以前の失われた部屋を見えにくくする存在でもある。",
];

export const memorialMetadata = {
  entityId: MEMORIAL_SLUG,
  status: "Existing",
  nature: "Real",
  historicalFunction: "Residence / workplace",
  currentFunction: "Museum / preserved literary site",
  primaryWriter: "Fumiko Hayashi",
  observationStatus: "Active",
  verificationStatus: "Partial",
  lastUpdated: "2026-08-03",
};

export const whatKindOfPlace = {
  title: "What kind of place is this?",
  titleJa: "この場所は、何なのか",
  badges: [
    { en: "Historical residence", ja: "歴史的住居" },
    { en: "Writing place", ja: "執筆場所" },
    { en: "Domestic space", ja: "生活空間" },
    { en: "Preserved architecture", ja: "保存建築" },
    { en: "Museum", ja: "記念館" },
    { en: "Literary archive", ja: "文学的アーカイブ" },
  ],
  paragraphs: [
    "作家の家は、書斎だけでできているわけではない。",
    "食べる場所。眠る場所。客を迎える場所。家事をする場所。庭を見る場所。病気や疲労を抱える場所。原稿を書く場所。",
    "林芙美子記念館を、「有名作家の書斎」としてだけでなく、生活と執筆が同じ建物の中で行われた場所として扱う。",
  ],
};

export const historicalCurrentLayers = {
  title: "Historical place / Current place",
  titleJa: "かつての家と、現在の記念館",
  historical: [
    "林芙美子の住居",
    "執筆場所",
    "家事空間",
    "来客",
    "庭",
    "生活用品",
    "仕事と休息",
  ],
  current: [
    "記念館",
    "保存建築",
    "展示",
    "見学",
    "学習",
    "文化資源",
    "観光地点",
  ],
  paragraphs: [
    "現在訪れる人が見るのは、保存され、説明された家である。",
    "林芙美子が暮らしたときには、展示ケースも解説パネルもなかった。",
    "生活空間が記念館になると、雑然とした日常は整理され、意味のある場所として再構成される。",
  ],
  concept: {
    en: "A home becomes an archive\nby losing part of its ordinary life.",
    ja: "家は、日常の一部を失うことでアーカイブになる。",
  },
};

export const functionTransformation = [
  {
    id: "private",
    label: "Private residence",
    labelJa: "個人の住居",
    status: "original-function" as const,
  },
  {
    id: "preserved",
    label: "Preserved property",
    labelJa: "保存対象",
    status: "preserved-function" as const,
  },
  {
    id: "museum",
    label: "Museum",
    labelJa: "記念館",
    status: "museum-function" as const,
  },
];

export const houseTimeline: EntityTimelineItem[] = [
  {
    id: "tl-planning",
    entityId: MEMORIAL_ENTITY_ID,
    event: "Planning",
    eventJa: "住居計画",
    description: "Date verification needed",
    layer: "historical",
    verificationStatus: "indexing",
    sourceIds: ["src-memorial-official", "src-memorial-arch"],
  },
  {
    id: "tl-construction",
    entityId: MEMORIAL_ENTITY_ID,
    event: "Construction",
    eventJa: "建築",
    description: "Date verification needed",
    layer: "historical",
    verificationStatus: "indexing",
    sourceIds: ["src-memorial-arch"],
  },
  {
    id: "tl-residence",
    entityId: MEMORIAL_ENTITY_ID,
    event: "Residence period",
    eventJa: "林芙美子が暮らした期間",
    description: "Date verification needed — attach only after official chronology",
    layer: "historical",
    verificationStatus: "indexing",
    sourceIds: ["src-memorial-official", "src-memorial-biblio"],
  },
  {
    id: "tl-writing",
    entityId: MEMORIAL_ENTITY_ID,
    event: "Writing period",
    eventJa: "執筆に使用された期間",
    description: "Date verification needed",
    layer: "historical",
    verificationStatus: "indexing",
    sourceIds: ["src-memorial-primary", "src-memorial-official"],
  },
  {
    id: "tl-after-death",
    entityId: MEMORIAL_ENTITY_ID,
    event: "After her death",
    eventJa: "死後の扱い",
    description: "Date verification needed",
    layer: "preservation",
    verificationStatus: "indexing",
    sourceIds: ["src-memorial-preservation"],
  },
  {
    id: "tl-preservation",
    entityId: MEMORIAL_ENTITY_ID,
    event: "Preservation",
    eventJa: "保存",
    description: "Date verification needed",
    layer: "preservation",
    verificationStatus: "indexing",
    sourceIds: ["src-memorial-preservation"],
  },
  {
    id: "tl-museum",
    entityId: MEMORIAL_ENTITY_ID,
    event: "Museum opening",
    eventJa: "記念館として公開",
    description: "Date verification needed",
    layer: "museum",
    verificationStatus: "indexing",
    sourceIds: ["src-memorial-official"],
  },
  {
    id: "tl-present",
    entityId: MEMORIAL_ENTITY_ID,
    event: "Present",
    eventJa: "現在",
    description: "Existing building / museum function — opening details via CurrentAccessInfo only",
    layer: "present",
    verificationStatus: "partial",
    sourceIds: ["src-memorial-official"],
  },
];

export const workInfrastructure = [
  { id: "writing", label: "Writing room", labelJa: "書斎" },
  { id: "storage", label: "Storage", labelJa: "本・資料・原稿の保管" },
  { id: "reception", label: "Reception", labelJa: "来客" },
  { id: "rest", label: "Rest", labelJa: "休息" },
  { id: "food", label: "Food", labelJa: "食事・炊事" },
  { id: "bathing", label: "Bathing", labelJa: "入浴" },
  { id: "garden", label: "Garden", labelJa: "庭" },
  { id: "light", label: "Light", labelJa: "採光" },
  { id: "heat", label: "Heat", labelJa: "暖房" },
  { id: "ventilation", label: "Ventilation", labelJa: "通風" },
  { id: "movement", label: "Movement inside house", labelJa: "室内動線" },
];

export const domesticFunctions = [
  { id: "cooking", label: "Cooking", labelJa: "炊事" },
  { id: "cleaning", label: "Cleaning", labelJa: "掃除" },
  { id: "laundry", label: "Laundry", labelJa: "洗濯" },
  { id: "heating", label: "Heating", labelJa: "暖房" },
  { id: "hospitality", label: "Hospitality", labelJa: "来客対応" },
  { id: "maintenance", label: "Maintenance", labelJa: "住居・庭の維持" },
  { id: "rest", label: "Rest", labelJa: "休息" },
  { id: "writing-support", label: "Writing support", labelJa: "執筆を支える生活行為" },
];

export const domesticLaborModes = [
  { id: "documented", label: "Documented person", labelJa: "確認済み" },
  { id: "action", label: "Domestic action recorded", labelJa: "行動のみ確認" },
  { id: "context", label: "Historical context", labelJa: "時代背景" },
  { id: "unknown", label: "Unknown labor", labelJa: "担い手不明" },
];

export const roomCategories = [
  { id: "study", label: "Study", labelJa: "書斎" },
  { id: "living", label: "Living room", labelJa: "居間" },
  { id: "guest", label: "Guest room", labelJa: "客間" },
  { id: "kitchen", label: "Kitchen", labelJa: "台所" },
  { id: "dining", label: "Dining space", labelJa: "食事空間" },
  { id: "bedroom", label: "Bedroom", labelJa: "寝室" },
  { id: "bath", label: "Bath", labelJa: "浴室" },
  { id: "storage", label: "Storage", labelJa: "収納" },
  { id: "garden-facing", label: "Garden-facing room", labelJa: "庭に面した部屋" },
  { id: "unknown", label: "Unknown room", labelJa: "用途不明" },
];

/** No Fact RoomRecords until floor plans / official materials are attached. */
export const memorialRoomRecords: never[] = [];

export const houseRoute = [
  { id: "wake", label: "Wake", labelJa: "起床" },
  { id: "wash", label: "Wash / dress", labelJa: "身支度" },
  { id: "food", label: "Food", labelJa: "食事" },
  { id: "writing", label: "Writing room", labelJa: "執筆" },
  { id: "visitor", label: "Visitor / correspondence", labelJa: "来客・手紙" },
  { id: "garden", label: "Garden / rest", labelJa: "庭・休息" },
  { id: "more", label: "More work", labelJa: "再び仕事" },
  { id: "night", label: "Night", labelJa: "夜" },
];

export const objectCategories = [
  { id: "writing-tools", label: "Writing tools", labelJa: "執筆道具" },
  { id: "furniture", label: "Furniture", labelJa: "家具" },
  { id: "books", label: "Books", labelJa: "本" },
  { id: "manuscripts", label: "Manuscripts", labelJa: "原稿" },
  { id: "clothing", label: "Clothing", labelJa: "衣類" },
  { id: "kitchen", label: "Kitchen objects", labelJa: "生活用品" },
  { id: "travel", label: "Travel objects", labelJa: "旅行用品" },
  { id: "letters", label: "Letters", labelJa: "書簡" },
  { id: "photos", label: "Photographs", labelJa: "写真" },
  { id: "architecture", label: "Architectural elements", labelJa: "建具・設備" },
];

/** No Fact ObjectRecords until catalogues distinguish original / replica. */
export const memorialObjectRecords: never[] = [];

export const authenticityLayers = [
  { id: "original-structure", label: "Original structure", labelJa: "当時から残る建物・部材" },
  { id: "preserved", label: "Preserved structure", labelJa: "保存・修復された部分" },
  { id: "reconstructed-interior", label: "Reconstructed interior", labelJa: "再現された室内" },
  { id: "original-object", label: "Original object", labelJa: "本人使用品" },
  { id: "replica", label: "Replica", labelJa: "複製" },
  { id: "curatorial", label: "Curatorial arrangement", labelJa: "展示上の配置" },
  { id: "unknown", label: "Unknown", labelJa: "確認中" },
];

export const housingContrast = {
  memorialized: [
    "preserved",
    "named",
    "visited",
    "photographed",
    "explained",
  ],
  notMemorialized: [
    "demolished",
    "transformed",
    "unknown",
    "private",
    "address uncertain",
    "no surviving archive",
  ],
  concept: {
    en: "Success leaves architecture.\nPoverty often leaves only text.",
    ja: "成功は建物を残す。貧困は、しばしば文章しか残さない。",
  },
};

export const housingConnectionCards = [
  {
    id: "early-family",
    label: "Early family movement",
    labelJa: "家族との移動",
    status: "詳細確認中",
    housingType: "unknown",
    equalWeight: true,
  },
  {
    id: "onomichi",
    label: "Onomichi period",
    labelJa: "尾道期",
    status: "確認済み範囲 — 詳細は Writer housing",
    housingType: "family / research",
    equalWeight: true,
  },
  {
    id: "early-tokyo",
    label: "Early Tokyo lodging",
    labelJa: "東京の初期下宿",
    status: "Not indexed",
    housingType: "boarding",
    equalWeight: true,
  },
  {
    id: "rented",
    label: "Multiple rented rooms",
    labelJa: "複数の借家・借間",
    status: "Research needed",
    housingType: "rental",
    equalWeight: true,
  },
  {
    id: "ochiai",
    label: "Ochiai residence",
    labelJa: "落合の住居",
    status: "Verified / preserved (building) — dates partial",
    housingType: "owned / memorial",
    equalWeight: true,
    href: `#house-timeline`,
  },
];

export const moneyConnection = [
  { id: "land", label: "Land", labelJa: "土地", status: "Unknown" },
  { id: "construction", label: "Construction", labelJa: "建築", status: "Unknown" },
  { id: "furniture", label: "Furniture", labelJa: "家具", status: "Unknown" },
  { id: "maintenance", label: "Maintenance", labelJa: "維持", status: "Cost-bearing" },
  {
    id: "domestic",
    label: "Domestic labor",
    labelJa: "生活維持",
    status: "Unknown",
  },
  {
    id: "preservation",
    label: "Preservation",
    labelJa: "保存",
    status: "Institutionally supported",
  },
  {
    id: "operation",
    label: "Museum operation",
    labelJa: "運営",
    status: "Institutionally supported",
  },
];

export const privateToPublic = [
  { id: "private", label: "Private residence", labelJa: "私邸" },
  { id: "estate", label: "Family / estate", labelJa: "遺族・所有管理" },
  { id: "decision", label: "Preservation decision", labelJa: "保存判断" },
  { id: "institutional", label: "Institutional management", labelJa: "公的・組織的管理" },
  { id: "museum", label: "Museum", labelJa: "記念館" },
  { id: "visitors", label: "Visitors", labelJa: "来館者" },
  { id: "memory", label: "Cultural memory", labelJa: "文化的記憶" },
];

export const museumEditorialActions = [
  { id: "select", label: "Select", labelJa: "展示物を選ぶ" },
  { id: "arrange", label: "Arrange", labelJa: "配置する" },
  { id: "explain", label: "Explain", labelJa: "解説する" },
  { id: "reconstruct", label: "Reconstruct", labelJa: "復元する" },
  { id: "protect", label: "Protect", labelJa: "非公開にする" },
  { id: "contextualize", label: "Contextualize", labelJa: "時代背景を付ける" },
  { id: "omit", label: "Omit", labelJa: "展示しない" },
  { id: "update", label: "Update", labelJa: "展示を更新する" },
];

export const visitGuide = [
  "書斎だけでなく、台所や生活動線を見る",
  "庭と室内の関係を見る",
  "展示物が本人使用品か復元品か確認する",
  "現存する家以前の住居を想像で補完しない",
  "成功の証拠だけでなく、生活維持の仕事を見る",
  "記念館によって選ばれた物と、展示されていない物の両方を意識する",
  "建物が残った制度的理由を考える",
];

export const futureObservations: Array<{
  title: string;
  href?: string;
  available: boolean;
}> = [
  {
    title: "残った家、消えた部屋",
    href: "/observations/the-house-that-remained",
    available: true,
  },
  { title: "作家の家は、誰が保存するのか", available: false },
  { title: "書斎の外にある仕事", available: false },
  { title: "成功は建物を残す", available: false },
  { title: "記念館は人生をどう編集するか", available: false },
];

export const memorialAccess: CurrentAccessInfo = {
  id: MEMORIAL_ACCESS_ID,
  entityId: MEMORIAL_ENTITY_ID,
  status: "Source needed — do not hardcode opening hours",
  operator: "Source needed",
  openingHours: undefined,
  closureDays: undefined,
  admission: undefined,
  transport: undefined,
  accessibility: undefined,
  photographyPolicy: undefined,
  officialUrl: undefined,
  checkedAt: undefined,
  sourceIds: ["src-memorial-official"],
  verificationStatus: "needs-source",
  notes:
    "Variable public access fields stay outside the Entity Fact core. Attach official URL and checkedAt only after review.",
};

export const memorialResearchQueue: EntityResearchQueueItem[] = [
  {
    id: "rq-memorial-1",
    entityId: MEMORIAL_ENTITY_ID,
    title: "Official facility information",
    titleJa: "公式施設情報（名称・運営・所在地域・開館・公式URL）",
    priority: 1,
    status: "source-needed",
    sourceNeeded: true,
    note: "CurrentAccessInfo remains empty until official source is attached.",
  },
  {
    id: "rq-memorial-2",
    entityId: MEMORIAL_ENTITY_ID,
    title: "Construction and residence chronology",
    titleJa: "建築・居住年表",
    priority: 2,
    status: "source-needed",
    sourceNeeded: true,
  },
  {
    id: "rq-memorial-3",
    entityId: MEMORIAL_ENTITY_ID,
    title: "Design and architecture",
    titleJa: "設計と建築",
    priority: 3,
    status: "source-needed",
    sourceNeeded: true,
  },
  {
    id: "rq-memorial-4",
    entityId: MEMORIAL_ENTITY_ID,
    title: "Room functions",
    titleJa: "部屋の用途",
    priority: 4,
    status: "source-needed",
    sourceNeeded: true,
  },
  {
    id: "rq-memorial-5",
    entityId: MEMORIAL_ENTITY_ID,
    title: "Displayed objects authenticity",
    titleJa: "展示物（本人使用品／複製／復元）",
    priority: 5,
    status: "source-needed",
    sourceNeeded: true,
  },
  {
    id: "rq-memorial-6",
    entityId: MEMORIAL_ENTITY_ID,
    title: "Preservation history",
    titleJa: "保存経緯",
    priority: 6,
    status: "source-needed",
    sourceNeeded: true,
  },
  {
    id: "rq-memorial-7",
    entityId: MEMORIAL_ENTITY_ID,
    title: "Domestic labor records",
    titleJa: "家事と生活維持の担い手",
    priority: 7,
    status: "source-needed",
    sourceNeeded: true,
    note: "Do not invent who did housework.",
  },
  {
    id: "rq-memorial-8",
    entityId: MEMORIAL_ENTITY_ID,
    title: "Construction / maintenance costs",
    titleJa: "建築費・維持費（確認可能な場合のみ）",
    priority: 8,
    status: "source-needed",
    sourceNeeded: true,
    note: "Never estimate amounts.",
  },
];

export const memorialSources: Source[] = [
  {
    id: "src-memorial-official",
    category: "verification",
    status: "needed",
    label: "Official museum source — facility identity and access",
    needed: true,
    note: "No invented URL. Prefer official operator materials.",
  },
  {
    id: "src-memorial-municipal",
    category: "verification",
    status: "needed",
    label: "Municipal source — district / cultural property notes",
    needed: true,
  },
  {
    id: "src-memorial-arch",
    category: "verification",
    status: "needed",
    label: "Architectural source — design, materials, plan",
    needed: true,
  },
  {
    id: "src-memorial-biblio",
    category: "verification",
    status: "needed",
    label: "Bibliographic source — chronologies",
    needed: true,
  },
  {
    id: "src-memorial-primary",
    category: "primary",
    status: "needed",
    label: "Primary records — essays, letters, photographs (rights review)",
    needed: true,
  },
  {
    id: "src-memorial-catalogue",
    category: "verification",
    status: "needed",
    label: "Museum catalogue — originals vs replicas",
    needed: true,
  },
  {
    id: "src-memorial-preservation",
    category: "verification",
    status: "needed",
    label: "Preservation history — ownership, opening as museum",
    needed: true,
  },
  {
    id: "src-memorial-housing",
    category: "verification",
    status: "needed",
    label: "Housing history — earlier rooms contrast",
    needed: true,
  },
];
