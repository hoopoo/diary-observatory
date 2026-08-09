import type {
  LifeSpeedPattern,
  MaintenanceProfile,
  PreservationProfile,
  Source,
  UrbanLifeProfile,
  WriterComparison,
  WriterComparisonMatrixRow,
} from "@/lib/types";
import { HAYASHI_HOUSING_IDS } from "@/data/housing/fumiko-hayashi";

export const FOUR_URBAN_LIVES_SLUG = "four-urban-lives";
export const FOUR_URBAN_LIVES_ID = "compare-four-urban-lives";

export const KAFU_ID = "writer-kafu";
export const NISHIMURA_ID = "writer-nishimura";
export const BUKOWSKI_ID = "writer-bukowski";
export const HAYASHI_ID = "writer-hayashi";

export const fourUrbanLivesComparison: WriterComparison = {
  id: FOUR_URBAN_LIVES_ID,
  slug: FOUR_URBAN_LIVES_SLUG,
  title: "Four Urban Lives",
  titleJa: "四人の都市生活",
  subtitle: "Weather, media, labor, and the work of maintaining life",
  subtitleJa: "天候、メディア、労働、生活維持",
  writerIds: [KAFU_ID, NISHIMURA_ID, BUKOWSKI_ID, HAYASHI_ID],
  diaryWorkIds: [
    "diary-kafu-dancho",
    "diary-nishimura-nichijo",
    "diary-bukowski-captain",
    "diary-horoki",
  ],
  entryIds: ["entry-1918-01-01", "entry-2011-05-02"],
  entityIds: [
    "entity-tokyo",
    "entity-los-angeles",
    "entity-hayashi-fumiko-memorial-hall",
    "entity-tomaru",
    "entity-shinchosha",
  ],
  fictionalEntityIds: ["entity-henry-chinaski"],
  observationIds: [
    "obs-maintenance-is-not-background",
    "obs-three-cities-three-speeds",
    "obs-the-house-that-remained",
    "obs-the-price-of-an-ordinary-day",
    "obs-before-the-platform-small-press",
    "obs-where-did-the-editor-go",
  ],
  comparisonIds: [
    "compare-urban-diarists",
    "compare-kafu-nishimura",
    "compare-nishimura-bukowski",
  ],
  themes: [
    "Environment",
    "Media",
    "Labor",
    "Maintenance",
    "Housing",
    "Food",
    "Movement",
    "Publishing",
    "Body",
    "Money",
    "Urban Life",
    "Preservation",
  ],
  housingRecordIds: [...HAYASHI_HOUSING_IDS],
  literarySystemIds: [
    "ls-four-kafu",
    "ls-four-nishimura",
    "ls-four-bukowski",
    "ls-four-hayashi",
  ],
  writingBodyProfileIds: [
    "wbp-four-kafu",
    "wbp-four-nishimura",
    "wbp-four-bukowski",
    "wbp-four-hayashi",
  ],
  comparisonStatus: "active",
  verificationStatus: "partial",
  lastUpdated: "2026-08-04",
};

export const fourMeta = {
  writers: 4,
  countries: "Japan / United States",
  primaryCities: "Tokyo / Los Angeles",
  primaryRecordForms:
    "Diary / Diary-related records / Journal·letters / Diary-derived autobiographical work",
  comparisonStatus: "Active",
  verificationStatus: "Partial",
  lastUpdated: "2026-08-04",
  themes:
    "Environment / Media / Labor / Maintenance / Housing / Food / Movement / Publishing / Body / Money / Urban Life / Preservation",
};

export const fourLead = [
  "人の一日は、",
  "本人の意志だけでは作られない。",
  "永井荷風の一日には、",
  "天候、庭、散歩、身体が入り込む。",
  "西村賢太の一日には、",
  "出版社、編集者、テレビ、移動予定が入り込む。",
  "チャールズ・ブコウスキーの一日には、",
  "勤務、疲労、賃金、投稿が入り込む。",
  "林芙美子の一日には、",
  "仕事、食事、部屋、家事、",
  "生活を維持するための移動が入り込む。",
  "四人の日記と周辺記録は、",
  "作家の内面だけを残したのではない。",
  "一日を動かしていた",
  "都市と制度と身体の条件を残した。",
];

export const fourWriterCards = [
  {
    order: "01",
    writerId: KAFU_ID,
    name: "Kafū Nagai",
    nameJa: "永井荷風",
    years: "1879–1959",
    city: "Tokyo",
    primaryRecord: "Danchōtei Nichijō",
    primaryRecordJa: "断腸亭日乗",
    observationWeight: "Environment",
    observationWeightJa: "環境",
    keywords: [
      "Weather",
      "Walking",
      "Garden",
      "Interior",
      "Body",
      "War",
      "Long-term diary",
    ],
    tagline: "The day begins with the world outside the body.",
    taglineJa: "一日は、身体の外にある環境から始まる。",
    cta: "Open writer",
    href: "/writers/kafu-nagai",
  },
  {
    order: "02",
    writerId: NISHIMURA_ID,
    name: "Kenji Nishimura",
    nameJa: "西村賢太",
    years: "1967–2022",
    city: "Tokyo",
    primaryRecord: "Diary and private-fiction-related records",
    primaryRecordJa: "日記・私小説周辺記録",
    observationWeight: "Media",
    observationWeightJa: "メディア",
    keywords: [
      "Publisher",
      "Editor",
      "Literary Prize",
      "Television",
      "Bookstore",
      "Train",
      "Alcohol",
    ],
    tagline: "The day moves when messages and institutions call.",
    taglineJa: "連絡と制度が、一日を動かす。",
    cta: "Open writer",
    href: "/writers/kenji-nishimura",
  },
  {
    order: "03",
    writerId: BUKOWSKI_ID,
    name: "Charles Bukowski",
    nameJa: "チャールズ・ブコウスキー",
    years: "1920–1994",
    city: "Los Angeles",
    primaryRecord: "Late diary / letters / poetry / autobiographical fiction",
    primaryRecordJa: "後期日記・書簡・詩・自伝的フィクション",
    observationWeight: "Labor",
    observationWeightJa: "労働",
    keywords: [
      "Postal Work",
      "Shift",
      "Fatigue",
      "Small Press",
      "Bar",
      "Racing",
      "Typewriter",
    ],
    tagline: "Work divides the day before writing begins.",
    taglineJa: "書き始める前に、労働が一日を分割する。",
    cta: "Open writer",
    href: "/writers/charles-bukowski",
  },
  {
    order: "04",
    writerId: HAYASHI_ID,
    name: "Fumiko Hayashi",
    nameJa: "林芙美子",
    years: "1903–1951",
    city: "Tokyo",
    primaryRecord: "Hōrōki (diary-derived autobiographical work)",
    primaryRecordJa: "放浪記（日記的自伝作品）",
    observationWeight: "Maintenance",
    observationWeightJa: "生活維持",
    keywords: [
      "Paid Work",
      "Rooms",
      "Food",
      "Domestic Labor",
      "Movement",
      "Publishing",
      "Housing",
    ],
    tagline: "A life must be maintained before it can be written.",
    taglineJa: "生活は、書かれる前に維持されなければならない。",
    cta: "Open writer",
    href: "/writers/fumiko-hayashi",
  },
];

export const fourCenters = [
  {
    writerId: KAFU_ID,
    name: "Kafū Nagai",
    condition: "Environment",
    conditionJa: "環境",
    items: ["天候", "季節", "庭", "室内", "散歩", "身体"],
  },
  {
    writerId: NISHIMURA_ID,
    name: "Kenji Nishimura",
    condition: "Media",
    conditionJa: "メディア",
    items: ["編集者", "出版社", "文学賞", "携帯連絡", "テレビ", "予定"],
  },
  {
    writerId: BUKOWSKI_ID,
    name: "Charles Bukowski",
    condition: "Labor",
    conditionJa: "労働",
    items: ["勤務", "疲労", "賃金", "投稿", "酒場", "夜の執筆"],
  },
  {
    writerId: HAYASHI_ID,
    name: "Fumiko Hayashi",
    condition: "Maintenance",
    conditionJa: "生活維持",
    items: ["賃金労働", "食事", "家賃", "下宿", "家事", "移動", "投稿"],
  },
];

export const urbanLifeProfiles: UrbanLifeProfile[] = [
  {
    writerId: KAFU_ID,
    primaryCondition: "environment",
    secondaryConditions: ["media"],
    movementPattern: "Walking",
    housingCondition: "Long-term residence / wartime change — indexing",
    paidWorkVisibility: "historical-context",
    unpaidWorkVisibility: "not-indexed",
    foodVisibility: "implied",
    verificationStatus: "partial",
  },
  {
    writerId: NISHIMURA_ID,
    primaryCondition: "media",
    secondaryConditions: ["labor"],
    movementPattern: "Train / taxi / cultural route",
    housingCondition: "Not sufficiently indexed",
    paidWorkVisibility: "documented",
    unpaidWorkVisibility: "not-indexed",
    foodVisibility: "implied",
    verificationStatus: "partial",
  },
  {
    writerId: BUKOWSKI_ID,
    primaryCondition: "labor",
    secondaryConditions: ["media"],
    movementPattern: "Workplace / road / racetrack",
    housingCondition: "Working / rented rooms — verification needed",
    paidWorkVisibility: "documented",
    unpaidWorkVisibility: "not-indexed",
    foodVisibility: "implied",
    verificationStatus: "partial",
  },
  {
    writerId: HAYASHI_ID,
    primaryCondition: "maintenance",
    secondaryConditions: ["labor", "media"],
    movementPattern: "Housing / workplace / publication route",
    housingCondition: "Lodging / later preserved house",
    paidWorkVisibility: "implied",
    unpaidWorkVisibility: "implied",
    foodVisibility: "implied",
    verificationStatus: "partial",
  },
];

export const maintenanceProfiles: MaintenanceProfile[] = [
  {
    writerId: KAFU_ID,
    paidWork: "Historical context / Not indexed as daily wage record",
    domesticWork: "Not indexed — who maintained the household is unknown",
    foodWork: "Partial — hospitality / routine indexing",
    housingWork: "Partial — residence continuity",
    relationshipWork: "Partial",
    selfMaintenance: "Documented via body / weather response",
    verificationStatus: "indexing",
    sourceIds: ["src-four-kafu"],
  },
  {
    writerId: NISHIMURA_ID,
    paidWork: "Documented — publishing labor visibility",
    domesticWork: "Not indexed",
    foodWork: "Partial — food/alcohol with movement",
    housingWork: "Not indexed",
    relationshipWork: "Documented — editors / media",
    selfMaintenance: "Partial — sleep / alcohol / illness",
    verificationStatus: "indexing",
    sourceIds: ["src-four-nishimura"],
  },
  {
    writerId: BUKOWSKI_ID,
    paidWork: "Documented — postal / wage labor axis",
    domesticWork: "Not indexed",
    foodWork: "Partial",
    housingWork: "Implied — rooms / rent research needed",
    relationshipWork: "Partial",
    selfMaintenance: "Documented — fatigue / sleep / alcohol",
    verificationStatus: "indexing",
    sourceIds: ["src-four-bukowski"],
  },
  {
    writerId: HAYASHI_ID,
    paidWork: "Central research axis — verified jobs only as Fact",
    domesticWork: "Central research axis — do not invent assignees",
    foodWork: "Central research axis — FoodRecord pending",
    housingWork: "Central — lodging to memorial hall",
    relationshipWork: "Partial / research",
    selfMaintenance: "Hunger / fatigue / overwork context — partial",
    verificationStatus: "indexing",
    sourceIds: ["src-four-hayashi"],
  },
];

export const preservationProfiles: PreservationProfile[] = [
  {
    writerId: KAFU_ID,
    diaryContinuity: "High — long-term diary",
    editionDepth: "Partial — editions indexing",
    mediaArchive: "Low / print-centered",
    physicalSites: "Research status varies",
    institutionalArchives: "Partial",
    knownAbsences: "Wartime loss / incomplete maps",
    verificationStatus: "partial",
  },
  {
    writerId: NISHIMURA_ID,
    diaryContinuity: "Partial — published diaries",
    editionDepth: "Partial",
    mediaArchive: "High opportunity — TV / publishing",
    physicalSites: "Closed shops / ended programs",
    institutionalArchives: "Partial",
    knownAbsences: "Private life gaps",
    verificationStatus: "partial",
  },
  {
    writerId: BUKOWSKI_ID,
    diaryContinuity: "Partial — late diary / letters",
    editionDepth: "Multiple source forms",
    mediaArchive: "Mythology vs archival verification",
    physicalSites: "Not indexed / research needed",
    institutionalArchives: "Partial",
    knownAbsences: "Exact rooms / wage tables",
    verificationStatus: "partial",
  },
  {
    writerId: HAYASHI_ID,
    diaryContinuity: "Partial — diary-derived layers",
    editionDepth: "Central — serialization / revisions",
    mediaArchive: "Publishing success narrative",
    physicalSites: "Hayashi Fumiko Memorial Hall (existing)",
    institutionalArchives: "Museum + bibliographies — official URL pending",
    knownAbsences: "Lost lodging / missing rents / floor plans",
    verificationStatus: "partial",
  },
];

type Cell = [string, string, string, string];

function row(
  id: string,
  label: string,
  labelJa: string,
  values: Cell,
  verifications: Cell = ["partial", "partial", "partial", "partial"],
): WriterComparisonMatrixRow {
  return {
    id,
    key: id,
    label,
    labelJa,
    valueByWriterId: {
      [KAFU_ID]: values[0],
      [NISHIMURA_ID]: values[1],
      [BUKOWSKI_ID]: values[2],
      [HAYASHI_ID]: values[3],
    },
    verificationStatusByWriterId: {
      [KAFU_ID]: verifications[0] as WriterComparisonMatrixRow["verificationStatusByWriterId"][string],
      [NISHIMURA_ID]: verifications[1] as WriterComparisonMatrixRow["verificationStatusByWriterId"][string],
      [BUKOWSKI_ID]: verifications[2] as WriterComparisonMatrixRow["verificationStatusByWriterId"][string],
      [HAYASHI_ID]: verifications[3] as WriterComparisonMatrixRow["verificationStatusByWriterId"][string],
    },
  };
}

export const matrixColumns = [
  { writerId: KAFU_ID, label: "Kafū Nagai", labelJa: "永井荷風" },
  { writerId: NISHIMURA_ID, label: "Kenji Nishimura", labelJa: "西村賢太" },
  { writerId: BUKOWSKI_ID, label: "Charles Bukowski", labelJa: "ブコウスキー" },
  { writerId: HAYASHI_ID, label: "Fumiko Hayashi", labelJa: "林芙美子" },
];

export const fourMatrixRows: WriterComparisonMatrixRow[] = [
  row("country", "Country", "国", ["Japan", "Japan", "United States", "Japan"], ["verified", "verified", "verified", "verified"]),
  row("city", "Primary city", "主要都市", ["Tokyo", "Tokyo", "Los Angeles", "Tokyo"], ["verified", "verified", "verified", "verified"]),
  row("period", "Primary period", "主要時期", [
    "1917–1959",
    "Late Heisei / 2010s",
    "20th-century Los Angeles",
    "Early-to-mid 20th-century Japan",
  ]),
  row("record", "Primary record form", "主要記録形態", [
    "Long-term diary",
    "Diary / daily records / private fiction",
    "Journal / letters / poetry / autobiographical fiction",
    "Diary-derived autobiographical work",
  ]),
  row("condition", "Primary daily condition", "一日の重心", [
    "Environment",
    "Media",
    "Labor",
    "Maintenance",
  ], ["partial", "partial", "partial", "partial"]),
  row("movement", "Primary movement", "主な移動", [
    "Walking",
    "Train / taxi / cultural route",
    "Workplace / road / racetrack",
    "Housing / workplace / publication route",
  ]),
  row("nodes", "Primary urban nodes", "都市の接点", [
    "Garden / streets / publishers / shops",
    "Publishers / bookstores / studios / live houses",
    "Post office / bars / racetracks / rooms",
    "Rooms / workplaces / publishers / stations / food places",
  ]),
  row("publishing", "Publishing system", "出版経路", [
    "Print / newspaper / literary circles",
    "Publisher / prize / television",
    "Postal submission / small press",
    "Serialization / publisher / edition revision",
  ]),
  row("housing", "Housing condition", "住居条件", [
    "Long-term residence and wartime change",
    "Not sufficiently indexed",
    "Working and rented rooms require verification",
    "Family movement / lodging / later preserved house",
  ]),
  row("domestic", "Domestic labor visibility", "家事の可視性", [
    "Partial",
    "Low or not indexed",
    "Low or not indexed",
    "Central research axis",
  ], ["partial", "unknown", "unknown", "partial"]),
  row("food", "Food visibility", "食事の可視性", [
    "Recurring but indexing partial",
    "Partial",
    "Partial",
    "Central research axis",
  ]),
  row("money", "Money visibility", "金銭の可視性", [
    "Daily expenses / publishing",
    "Books / transport / alcohol / income",
    "Wages / rent / postage / betting",
    "Wages / food / rent / publishing income — amounts Not indexed",
  ]),
  row("body", "Body", "身体", [
    "Weather response / pain / walking / aging",
    "Alcohol / sleep / fatigue / illness",
    "Labor fatigue / alcohol / aging / illness",
    "Hunger / fatigue / travel / work / overwork context",
  ]),
  row("persona", "Public persona", "作家像", [
    "Urban diarist / cultural figure",
    "Private-fiction writer / television persona",
    "Outlaw writer",
    "Wandering woman / poverty-to-success narrative (critique needed)",
  ]),
  row("site", "Preserved physical site", "現存する物理的場", [
    "Research status varies",
    "Not indexed",
    "Not indexed",
    "Hayashi Fumiko Memorial Hall",
  ], ["unknown", "unknown", "unknown", "verified"]),
  row("version", "Textual version sensitivity", "本文の版依存", [
    "Long diary editions",
    "Diary and published works",
    "Multiple source forms",
    "Central: serialization / first edition / revisions",
  ]),
  row("depth", "Current indexing depth", "現在の索引深度", [
    "Partial — entries + places",
    "Partial — day + media nodes",
    "Partial — labor / myth separation",
    "Partial — housing / horoki / memorial",
  ]),
];

export const fourLifeSpeeds: LifeSpeedPattern[] = [
  {
    id: "speed-kafu",
    writerId: KAFU_ID,
    label: "Kafū",
    labelJa: "荷風",
    layer: "interpretation",
    verificationStatus: "partial",
    sourceIds: ["src-four-kafu"],
    steps: [
      { label: "Weather", labelJa: "天候" },
      { label: "Interior / garden", labelJa: "室内・庭" },
      { label: "Writing", labelJa: "執筆" },
      { label: "Walking", labelJa: "散歩" },
      { label: "Food / visitors", labelJa: "食事・来客" },
      { label: "Night", labelJa: "夜" },
    ],
  },
  {
    id: "speed-nishimura",
    writerId: NISHIMURA_ID,
    label: "Nishimura",
    labelJa: "西村",
    layer: "interpretation",
    verificationStatus: "partial",
    sourceIds: ["src-four-nishimura"],
    steps: [
      { label: "Message", labelJa: "連絡" },
      { label: "Publisher", labelJa: "出版社" },
      { label: "Train / taxi", labelJa: "電車・タクシー" },
      { label: "Bookstore / studio", labelJa: "古書店・テレビ局" },
      { label: "Food / alcohol", labelJa: "食事・酒" },
      { label: "Writing / sleep", labelJa: "執筆・睡眠" },
    ],
  },
  {
    id: "speed-bukowski",
    writerId: BUKOWSKI_ID,
    label: "Bukowski",
    labelJa: "ブコウスキー",
    layer: "interpretation",
    verificationStatus: "partial",
    sourceIds: ["src-four-bukowski"],
    steps: [
      { label: "Shift", labelJa: "勤務" },
      { label: "Fatigue", labelJa: "疲労" },
      { label: "Bar / racetrack", labelJa: "酒場・競馬場" },
      { label: "Room", labelJa: "部屋" },
      { label: "Typewriter", labelJa: "執筆" },
      { label: "Sleep / repeat", labelJa: "睡眠・反復" },
    ],
  },
  {
    id: "speed-hayashi",
    writerId: HAYASHI_ID,
    label: "Hayashi",
    labelJa: "林芙美子",
    layer: "interpretation",
    verificationStatus: "partial",
    sourceIds: ["src-four-hayashi"],
    steps: [
      { label: "Paid work", labelJa: "賃金労働" },
      { label: "Movement", labelJa: "移動" },
      { label: "Food / room", labelJa: "食事・住居" },
      { label: "Domestic maintenance", labelJa: "生活維持" },
      { label: "Writing / submission", labelJa: "執筆・投稿" },
      { label: "Rest / next work", labelJa: "休息・次の仕事" },
    ],
  },
];

export const conditionAxes = [
  {
    id: "environment",
    label: "Environment",
    labelJa: "環境",
    acts: [
      "temperature",
      "rain",
      "season",
      "daylight",
      "landscape",
      "physical condition",
    ],
  },
  {
    id: "media",
    label: "Media",
    labelJa: "メディア",
    acts: [
      "messages",
      "deadlines",
      "schedules",
      "invitations",
      "publicity",
      "institutional timing",
    ],
  },
  {
    id: "labor",
    label: "Labor",
    labelJa: "労働",
    acts: [
      "shifts",
      "wages",
      "supervision",
      "fatigue",
      "available writing time",
      "job security",
    ],
  },
  {
    id: "maintenance",
    label: "Maintenance",
    labelJa: "生活維持",
    acts: [
      "food",
      "rent",
      "cleaning",
      "housing",
      "clothing",
      "care",
      "recovery",
    ],
  },
];

export const paidUnpaidAxes = [
  "Paid labor",
  "Writing labor",
  "Domestic labor",
  "Relationship labor",
  "Self-maintenance",
  "Institutional labor",
] as const;

export const paidUnpaidByWriter: Record<
  string,
  Record<(typeof paidUnpaidAxes)[number], string>
> = {
  [KAFU_ID]: {
    "Paid labor": "Historical context",
    "Writing labor": "Documented",
    "Domestic labor": "Not indexed",
    "Relationship labor": "Partial / Implied",
    "Self-maintenance": "Documented",
    "Institutional labor": "Historical context",
  },
  [NISHIMURA_ID]: {
    "Paid labor": "Documented",
    "Writing labor": "Documented",
    "Domestic labor": "Not indexed",
    "Relationship labor": "Documented",
    "Self-maintenance": "Partial",
    "Institutional labor": "Documented",
  },
  [BUKOWSKI_ID]: {
    "Paid labor": "Documented",
    "Writing labor": "Documented",
    "Domestic labor": "Not indexed",
    "Relationship labor": "Partial",
    "Self-maintenance": "Documented",
    "Institutional labor": "Implied",
  },
  [HAYASHI_ID]: {
    "Paid labor": "Implied / research",
    "Writing labor": "Documented (published layers)",
    "Domestic labor": "Implied / research — no invented assignees",
    "Relationship labor": "Partial",
    "Self-maintenance": "Implied",
    "Institutional labor": "Implied / publishing",
  },
};

export const supportCategories = [
  { id: "self", label: "Self", labelJa: "本人" },
  { id: "family", label: "Family", labelJa: "家族" },
  { id: "partner", label: "Partner", labelJa: "配偶者・恋人" },
  { id: "domestic", label: "Domestic worker", labelJa: "使用人・家事労働者" },
  { id: "publisher", label: "Publisher", labelJa: "出版社" },
  { id: "employer", label: "Employer", labelJa: "雇用者" },
  { id: "friend", label: "Friend", labelJa: "友人" },
  { id: "institution", label: "Institution", labelJa: "制度・組織" },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
];

export const housingCompare = [
  {
    writerId: KAFU_ID,
    name: "Kafū",
    points: ["室内", "庭", "長期日記", "戦争による住居変化", "詳細は索引化中"],
  },
  {
    writerId: NISHIMURA_ID,
    name: "Nishimura",
    points: ["東京の生活圏", "住居と私生活", "詳細HousingRecordは不足"],
  },
  {
    writerId: BUKOWSKI_ID,
    name: "Bukowski",
    points: ["借りた部屋", "労働と住居", "成功前後の変化", "書誌確認が必要"],
  },
  {
    writerId: HAYASHI_ID,
    name: "Hayashi",
    points: [
      "家族との移動",
      "下宿",
      "借家",
      "住居不安定",
      "成功後の家",
      "記念館",
    ],
  },
];

export const housingMatrixRows: WriterComparisonMatrixRow[] = [
  row("hc-child", "Childhood housing", "幼少期住居", [
    "Not indexed",
    "Not indexed",
    "Not indexed",
    "Unknown",
  ], ["unknown", "unknown", "unknown", "unknown"]),
  row("hc-rental", "Working-age rental", "就労期の借家", [
    "Not indexed",
    "Not indexed",
    "Partial",
    "Partial",
  ]),
  row("hc-stable", "Stable residence", "安定住居", [
    "Partial",
    "Not indexed",
    "Not indexed",
    "Partial",
  ]),
  row("hc-room", "Dedicated writing room", "専用書斎", [
    "Partial",
    "Not indexed",
    "Not indexed",
    "Partial",
  ]),
  row("hc-garden", "Garden", "庭", [
    "Partial",
    "Not applicable",
    "Not indexed",
    "Partial",
  ], ["partial", "unknown", "unknown", "partial"]),
  row("hc-rent", "Rent record", "家賃記録", [
    "Not indexed",
    "Not indexed",
    "Not indexed",
    "Not indexed",
  ], ["unknown", "unknown", "unknown", "unknown"]),
  row("hc-move", "Move reason", "転居理由", [
    "Partial",
    "Not indexed",
    "Not indexed",
    "Partial",
  ]),
  row("hc-status", "Current status", "現況", [
    "Unknown",
    "Not indexed",
    "Unknown",
    "Existing / museum",
  ], ["unknown", "unknown", "unknown", "verified"]),
  row("hc-pres", "Preservation", "保存", [
    "Research",
    "Not applicable",
    "Not indexed",
    "Preserved",
  ]),
  row("hc-archive", "Archive depth", "アーカイブの厚さ", [
    "Partial",
    "Partial",
    "Partial",
    "Partial",
  ]),
];

export const foodCompare = [
  {
    name: "Kafū",
    text: "Food as routine, pleasure, hospitality, and bodily condition",
  },
  {
    name: "Nishimura",
    text: "Food and alcohol inside publishing and urban movement",
  },
  {
    name: "Bukowski",
    text: "Food, alcohol, labor, and limited money",
  },
  {
    name: "Hayashi",
    text: "Food, hunger, purchase, preparation, gift, and survival — not only hunger myth",
  },
];

export const moneyCategories = [
  "Income",
  "Housing",
  "Food",
  "Movement",
  "Books",
  "Communication",
  "Alcohol",
  "Leisure",
  "Health",
  "Domestic maintenance",
];

export const publishingPaths = [
  {
    name: "Kafū",
    steps: [
      "Daily record",
      "Print culture",
      "Newspaper / literary magazine",
      "Publisher",
      "Reader",
    ],
  },
  {
    name: "Nishimura",
    steps: [
      "Private experience",
      "Manuscript",
      "Publisher",
      "Literary prize",
      "Television",
      "Public persona",
    ],
  },
  {
    name: "Bukowski",
    steps: [
      "Labor and lived experience",
      "Typewriter",
      "Postal submission",
      "Small press",
      "Independent publisher",
      "Gradual readership",
    ],
  },
  {
    name: "Hayashi",
    steps: [
      "Lived experience",
      "Diary-like record",
      "Serialization",
      "Book edition",
      "Revision",
      "Public success narrative",
    ],
  },
];

export const livedLayers = [
  {
    name: "Kafū",
    layers: [
      { k: "Lived", v: "東京、庭、散歩、身体" },
      { k: "Recorded", v: "長期日記" },
      { k: "Published", v: "刊行された日記・作品" },
      { k: "Fictionalized", v: "具体的関係は要検証" },
    ],
  },
  {
    name: "Nishimura",
    layers: [
      { k: "Lived", v: "出版、古書、酒、人間関係" },
      { k: "Recorded", v: "日記、随筆" },
      { k: "Published", v: "私小説、記事" },
      { k: "Fictionalized", v: "私小説として変形" },
    ],
  },
  {
    name: "Bukowski",
    layers: [
      { k: "Lived", v: "労働、酒場、競馬、投稿" },
      { k: "Recorded", v: "日記、手紙、詩" },
      { k: "Published", v: "作品群" },
      { k: "Fictionalized", v: "Henry Chinaski 等（架空）" },
    ],
  },
  {
    name: "Hayashi",
    layers: [
      { k: "Lived", v: "労働、食事、下宿、移動" },
      { k: "Recorded", v: "日記的素材" },
      { k: "Published", v: "『放浪記』" },
      { k: "Revised", v: "複数版で再構成" },
    ],
  },
];

export const writingBodies = [
  {
    name: "Kafū",
    items: ["寒さ", "歯痛", "歩行", "疲労", "老い"],
  },
  {
    name: "Nishimura",
    items: ["飲酒", "睡眠", "二日酔い", "怒り", "病気"],
  },
  {
    name: "Bukowski",
    items: ["賃金労働", "立ち仕事", "疲労", "飲酒", "夜の執筆", "老い"],
  },
  {
    name: "Hayashi",
    items: ["空腹", "賃金労働", "家事", "移動", "睡眠", "旅行", "仕事量"],
  },
];

export const successCompare = [
  {
    name: "Kafū",
    changes: ["Cultural standing", "Publication", "Residence"],
    remains: ["Aging and war remain"],
  },
  {
    name: "Nishimura",
    changes: ["Prize", "Television", "Income opportunities"],
    remains: ["Alcohol, body, isolation remain"],
  },
  {
    name: "Bukowski",
    changes: [
      "Full-time writing",
      "Larger readership",
      "Better housing possibilities",
    ],
    remains: ["Aging and established persona remain"],
  },
  {
    name: "Hayashi",
    changes: ["Publication success", "Income", "House"],
    remains: ["Increased workload and public role remain"],
  },
];

export const cityPreserved = [
  {
    name: "Kafū’s Tokyo",
    items: [
      "place names",
      "diary routes",
      "rebuilt districts",
      "lost streets",
      "partial physical sites",
    ],
  },
  {
    name: "Nishimura’s Tokyo",
    items: [
      "publishers",
      "stations",
      "media archives",
      "closed shops",
      "ended programs",
    ],
  },
  {
    name: "Bukowski’s Los Angeles",
    items: [
      "postal institutions",
      "roads",
      "transformed racetracks",
      "bars and rooms requiring research",
      "literary mythology",
    ],
  },
  {
    name: "Hayashi’s Tokyo",
    items: [
      "museum",
      "publishing records",
      "partial housing history",
      "lost lodging",
      "work and food sites requiring research",
    ],
  },
];

export const entryReadiness = [
  {
    name: "Kafū Nagai",
    date: "January 1, 1918",
    href: "/entries/1918-01-01-kafu-nagai",
    status: "Ready / indexed",
  },
  {
    name: "Kenji Nishimura",
    date: "May 2, 2011",
    href: "/entries/2011-05-02-kenji-nishimura",
    status: "Ready / indexed",
  },
  {
    name: "Charles Bukowski",
    date: "No dated entry indexed yet",
    href: null as string | null,
    status: "Date and edition verification required",
  },
  {
    name: "Fumiko Hayashi",
    date: "No edition-verified dated entry indexed yet",
    href: null as string | null,
    status:
      "Date, source layer, and edition verification required (not diary alone)",
  },
];

export const relatedComparisonsFour = {
  published: [
    {
      title: "Three Urban Diarists",
      titleJa: "三人の都市記録者",
      href: "/compare/urban-diarists",
    },
    {
      title: "From Kafū to Nishimura",
      titleJa: "荷風から西村へ",
      href: "/compare/kafu-nishimura",
    },
    {
      title: "Nishimura and Bukowski",
      titleJa: "西村賢太とブコウスキー",
      href: "/compare/nishimura-bukowski",
    },
  ],
  coming: [
    { title: "Kafū and Hayashi", subtitle: "Two records of Tokyo" },
    { title: "Hayashi and Bukowski", subtitle: "Work before recognition" },
    { title: "Writers’ Houses", subtitle: "Rooms, work, and preservation" },
    {
      title: "Five daily systems",
      subtitle: "Performance as a fifth lived-day condition (Coming)",
    },
  ],
};

export const relatedObservationsFour = {
  published: [
    {
      title: "生活維持は、文学の背景ではない",
      href: "/observations/maintenance-is-not-background",
    },
    {
      title: "三つの都市、三つの生活速度",
      href: "/observations/three-cities-three-speeds",
    },
    {
      title: "残った家、消えた部屋",
      href: "/observations/the-house-that-remained",
    },
    {
      title: "一日の値段",
      href: "/observations/the-price-of-an-ordinary-day",
    },
    {
      title: "プラットフォーム以前の小出版",
      href: "/observations/before-the-platform-small-press",
    },
    {
      title: "編集者は消えたのか",
      href: "/observations/where-did-the-editor-go",
    },
  ],
  coming: [
    "書く時間を支えた人々",
    "誰が作家の食事を用意したのか",
    "女性の日記が見せる、男性作家の空白",
  ],
};

export const fourSources: Source[] = [
  {
    id: "src-four-kafu",
    category: "primary",
    status: "verification-pending",
    label: "Kafū — Danchōtei Nichijō and place indexing",
    needed: true,
  },
  {
    id: "src-four-nishimura",
    category: "primary",
    status: "verification-pending",
    label: "Nishimura — diary day and media nodes",
    needed: true,
  },
  {
    id: "src-four-bukowski",
    category: "primary",
    status: "needed",
    label: "Bukowski — diary/letters bibliography before dated Entry",
    needed: true,
  },
  {
    id: "src-four-hayashi",
    category: "primary",
    status: "needed",
    label: "Hayashi — Hōrōki edition layers + memorial official materials",
    needed: true,
  },
  {
    id: "src-four-cross",
    category: "editorial",
    status: "needed",
    label: "Cross-city housing / wage / food Fact extraction",
    needed: true,
  },
];

/** Group / pair comparison cards for /compare index */
export const writerGroupComparisons = [
  {
    id: FOUR_URBAN_LIVES_ID,
    category: "Group comparison" as const,
    title: "Four Urban Lives",
    titleJa: "四人の都市生活",
    subtitle: "Kafū / Nishimura / Bukowski / Hayashi",
    description:
      "Weather, media, labor, and the work of maintaining life.",
    themes: [
      "Urban life",
      "Maintenance",
      "Work",
      "Housing",
      "Publishing",
      "Body",
    ],
    href: `/compare/${FOUR_URBAN_LIVES_SLUG}`,
    status: "available" as const,
  },
  {
    id: "compare-urban-diarists",
    category: "Group comparison" as const,
    title: "Three Urban Diarists",
    titleJa: "三人の都市記録者",
    subtitle: "Kafū / Nishimura / Bukowski",
    description: "Three cities, three speeds of life.",
    themes: ["Urban life", "Media", "Labor", "Body"],
    href: "/compare/urban-diarists",
    status: "available" as const,
  },
  {
    id: "compare-kafu-nishimura",
    category: "Pair comparison" as const,
    title: "From Kafū to Nishimura",
    titleJa: "荷風から西村へ",
    subtitle: "Tokyo across eras",
    description: "Two Tokyo diaries under different media conditions.",
    themes: ["Tokyo", "Publishing", "Movement"],
    href: "/compare/kafu-nishimura",
    status: "available" as const,
  },
  {
    id: "compare-nishimura-bukowski",
    category: "Pair comparison" as const,
    title: "Nishimura and Bukowski",
    titleJa: "西村賢太とブコウスキー",
    subtitle: "Media and labor",
    description: "Publishing systems, myth, and the working day.",
    themes: ["Labor", "Media", "Myth"],
    href: "/compare/nishimura-bukowski",
    status: "available" as const,
  },
];
