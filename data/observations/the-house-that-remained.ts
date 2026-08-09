import type { ArchiveAbsence, HousingObservation, Source } from "@/lib/types";
import { HAYASHI_HOUSING_IDS } from "@/data/housing/fumiko-hayashi";

export const HOUSE_OBS_SLUG = "the-house-that-remained";
export const HOUSE_OBS_ID = "obs-the-house-that-remained";

export const houseLead = [
  "作家の家は、",
  "その人の人生を説明しているように見える。",
  "机。",
  "本棚。",
  "庭。",
  "窓。",
  "客間。",
  "使っていた道具。",
  "しかし、",
  "残った家は、",
  "その人が暮らしたすべての部屋ではない。",
  "林芙美子には、",
  "家族と移動した場所があった。",
  "上京後の下宿があった。",
  "仕事をしながら暮らした借家があった。",
  "家賃を払えたかどうかが、",
  "生活を左右した時期があった。",
  "現在残っているのは、",
  "作家として成功したあとの家である。",
  "一つの家が残ることで、",
  "その前にあった多くの部屋が、",
  "かえって見えにくくなる。",
];

export const houseMeta = {
  primaryWriter: "Fumiko Hayashi",
  primaryEntity: "Hayashi Fumiko Memorial Hall",
  primaryDiaryWork: "Hōrōki",
  themes: "Housing / Work / Domestic Life / Success / Preservation / Archive",
  articleStatus: "Published",
  verificationStatus: "Partial",
  lastUpdated: "2026-08-04",
};

export const housingSequence = [
  { id: "childhood", label: "Childhood housing", labelJa: "幼少期", status: "Unknown" },
  { id: "family", label: "Family movement", labelJa: "家族との移動", status: "Partial" },
  { id: "temporary", label: "Temporary room", labelJa: "一時的な部屋", status: "Not indexed" },
  { id: "rented", label: "Rented housing", labelJa: "下宿・借家", status: "Partial" },
  { id: "stable", label: "Stable residence", labelJa: "安定した住居", status: "Partial" },
  { id: "preserved", label: "Preserved house", labelJa: "保存された家", status: "Verified / preserved" },
];

export const roomConditions = [
  "Sleep",
  "Food",
  "Heat",
  "Light",
  "Noise",
  "Privacy",
  "Writing",
  "Domestic work",
  "Movement",
  "Visitors",
];

export const housingLayers = [
  { id: "lived", label: "Lived housing", labelJa: "実際の住居" },
  { id: "recorded", label: "Recorded housing", labelJa: "日記的素材に残る住居" },
  { id: "published", label: "Published housing", labelJa: "刊行版に現れる住居" },
  { id: "revised", label: "Revised housing", labelJa: "改訂によって変化した記述" },
  { id: "unknown", label: "Unknown housing", labelJa: "所在・時期不明" },
];

export const earlierLater = {
  earlier: [
    "rented",
    "temporary",
    "shared or uncertain",
    "frequently moved",
    "limited records",
    "rent-sensitive",
    "often not preserved",
  ],
  later: [
    "stable residence",
    "writing infrastructure",
    "garden",
    "publicly documented",
    "preserved",
    "museum",
    "culturally interpreted",
  ],
};

export const survivalBias = {
  moreLikely: [
    { id: "ownership", label: "Ownership", labelJa: "所有" },
    { id: "funding", label: "Financial resources", labelJa: "資金" },
    { id: "recognition", label: "Cultural recognition", labelJa: "文化的評価" },
    { id: "estate", label: "Family or estate", labelJa: "遺族・財団" },
    { id: "institution", label: "Institutional support", labelJa: "行政・組織" },
    { id: "architecture", label: "Architectural value", labelJa: "建築的評価" },
    { id: "access", label: "Public accessibility", labelJa: "公開可能性" },
    { id: "local", label: "Local interest", labelJa: "地域の関心" },
  ],
  lessLikely: [
    { id: "rental", label: "Rental", labelJa: "賃貸" },
    { id: "temporary", label: "Temporary use", labelJa: "短期利用" },
    { id: "redev", label: "Redevelopment", labelJa: "再開発" },
    { id: "unclear", label: "Unclear address", labelJa: "住所不明" },
    { id: "private", label: "Private ownership", labelJa: "現所有者の事情" },
    { id: "low", label: "Low cultural recognition", labelJa: "文化的評価の不足" },
    { id: "no-archive", label: "No archive", labelJa: "資料不足" },
  ],
};

export const domesticWorkMap = [
  { id: "kitchen", label: "Kitchen", labelJa: "炊事" },
  { id: "laundry", label: "Laundry area", labelJa: "洗濯" },
  { id: "storage", label: "Storage", labelJa: "整理・保管" },
  { id: "reception", label: "Reception", labelJa: "来客対応" },
  { id: "garden", label: "Garden", labelJa: "庭の維持" },
  { id: "heating", label: "Heating", labelJa: "暖房" },
  { id: "cleaning", label: "Cleaning", labelJa: "掃除" },
  { id: "writing", label: "Writing room", labelJa: "執筆" },
];

export const preservationProcess = [
  { id: "private", label: "Private home", labelJa: "私邸" },
  { id: "estate", label: "Estate or ownership transition", labelJa: "所有移行" },
  { id: "decision", label: "Preservation decision", labelJa: "保存判断" },
  { id: "restore", label: "Restoration / adaptation", labelJa: "修復・用途変更" },
  { id: "operate", label: "Institutional operation", labelJa: "組織運営" },
  { id: "museum", label: "Public museum", labelJa: "記念館" },
];

export const preservationCosts = [
  { id: "land", label: "Land", labelJa: "土地", visibility: "Unknown" },
  { id: "maintain", label: "Building maintenance", labelJa: "建物維持", visibility: "Cost-bearing" },
  { id: "restore", label: "Restoration", labelJa: "修復", visibility: "Cost-bearing" },
  { id: "climate", label: "Climate control", labelJa: "資料保存環境", visibility: "Unknown" },
  { id: "staff", label: "Staff", labelJa: "職員", visibility: "Institutionally supported" },
  { id: "exhibit", label: "Exhibition", labelJa: "展示", visibility: "Cost-bearing" },
  { id: "security", label: "Security", labelJa: "防災・防犯", visibility: "Cost-bearing" },
  { id: "garden", label: "Garden", labelJa: "庭の維持", visibility: "Cost-bearing" },
  { id: "access", label: "Public access", labelJa: "来館対応", visibility: "Institutionally supported" },
  { id: "digital", label: "Digital archive", labelJa: "デジタル化", visibility: "Unknown" },
];

export const museumEditorialFunctions = [
  { id: "select", label: "Select", labelJa: "選ぶ" },
  { id: "order", label: "Order", labelJa: "順番をつける" },
  { id: "explain", label: "Explain", labelJa: "説明する" },
  { id: "reconstruct", label: "Reconstruct", labelJa: "再現する" },
  { id: "protect", label: "Protect", labelJa: "非公開にする" },
  { id: "omit", label: "Omit", labelJa: "省く" },
  { id: "update", label: "Update", labelJa: "更新する" },
  { id: "contextualize", label: "Contextualize", labelJa: "時代背景を加える" },
];

export const fourWriterHousing = [
  {
    id: "kafu",
    name: "Kafū Nagai",
    points: ["長期日記", "庭", "室内", "戦争", "住居の変化"],
  },
  {
    id: "nishimura",
    name: "Kenji Nishimura",
    points: ["東京の生活圏", "私生活", "書籍", "酒", "住居情報は索引化中"],
  },
  {
    id: "bukowski",
    name: "Charles Bukowski",
    points: ["安い部屋", "賃金労働", "酒場", "成功後の住居", "詳細は書誌確認中"],
  },
  {
    id: "hayashi",
    name: "Fumiko Hayashi",
    points: [
      "家族との移動",
      "下宿",
      "借家",
      "女性の仕事",
      "成功後の家",
      "記念館",
    ],
  },
];

/** Matrix cells: Verified | Partial | Not indexed | Unknown | Not applicable */
export const housingStatusMatrixRows = [
  {
    id: "childhood",
    label: "Childhood housing",
    cells: {
      kafu: "Not indexed",
      nishimura: "Not indexed",
      bukowski: "Not indexed",
      hayashi: "Unknown",
    },
  },
  {
    id: "early-work",
    label: "Early working housing",
    cells: {
      kafu: "Not indexed",
      nishimura: "Not indexed",
      bukowski: "Partial",
      hayashi: "Partial",
    },
  },
  {
    id: "rented",
    label: "Rented rooms",
    cells: {
      kafu: "Not indexed",
      nishimura: "Not indexed",
      bukowski: "Partial",
      hayashi: "Partial",
    },
  },
  {
    id: "stable",
    label: "Stable residence",
    cells: {
      kafu: "Partial",
      nishimura: "Not indexed",
      bukowski: "Not indexed",
      hayashi: "Partial",
    },
  },
  {
    id: "writing",
    label: "Writing room",
    cells: {
      kafu: "Partial",
      nishimura: "Not indexed",
      bukowski: "Not indexed",
      hayashi: "Partial",
    },
  },
  {
    id: "garden",
    label: "Garden",
    cells: {
      kafu: "Partial",
      nishimura: "Not applicable",
      bukowski: "Not indexed",
      hayashi: "Partial",
    },
  },
  {
    id: "cost",
    label: "Housing cost",
    cells: {
      kafu: "Not indexed",
      nishimura: "Not indexed",
      bukowski: "Not indexed",
      hayashi: "Not indexed",
    },
  },
  {
    id: "preserved",
    label: "Current preserved site",
    cells: {
      kafu: "Unknown",
      nishimura: "Not applicable",
      bukowski: "Unknown",
      hayashi: "Verified",
    },
  },
  {
    id: "museum",
    label: "Museum status",
    cells: {
      kafu: "Not applicable",
      nishimura: "Not applicable",
      bukowski: "Not applicable",
      hayashi: "Verified",
    },
  },
  {
    id: "address",
    label: "Address certainty",
    cells: {
      kafu: "Partial",
      nishimura: "Not indexed",
      bukowski: "Not indexed",
      hayashi: "Partial",
    },
  },
  {
    id: "archive",
    label: "Archive depth",
    cells: {
      kafu: "Partial",
      nishimura: "Partial",
      bukowski: "Partial",
      hayashi: "Partial",
    },
  },
];

export const houseHousingObservations: HousingObservation[] = [
  {
    id: "ho-hayashi-disappearance",
    writerId: "writer-hayashi",
    housingRecordId: "house-hayashi-early-boarding",
    observationType: "disappearance",
    summary: "Early boarding rooms often leave only textual traces",
    summaryJa: "初期下宿は文章痕跡しか残らないことが多い",
    layer: "observation",
    verificationStatus: "indexing",
    sourceIds: ["src-house-housing"],
  },
  {
    id: "ho-hayashi-preservation",
    writerId: "writer-hayashi",
    housingRecordId: "house-hayashi-ochiai",
    observationType: "preservation",
    summary: "Later Ochiai residence survives as memorial hall",
    summaryJa: "落合の後年住居は記念館として現存",
    layer: "fact",
    verificationStatus: "partial",
    sourceIds: ["src-house-museum", "src-house-housing"],
  },
];

export const housingArchiveAbsences: ArchiveAbsence[] = [
  {
    id: "aa-hayashi-missing-address",
    writerId: "writer-hayashi",
    relatedWorkId: "diary-horoki",
    absenceType: "missing-address",
    description: "Early Tokyo lodging — exact address unknown",
    descriptionJa: "東京の初期下宿 — 正確な住所不明",
    evidence: "Referenced in diary-derived work / biographical materials — specifics source-needed",
    verificationStatus: "indexing",
    sourceIds: ["src-house-housing", "src-house-primary"],
    notes: "Research needed. Do not invent as Entity.",
  },
  {
    id: "aa-hayashi-undocumented-room",
    writerId: "writer-hayashi",
    absenceType: "undocumented-room",
    description: "Interior of early rented rooms poorly documented",
    descriptionJa: "初期借間の室内資料が薄い",
    evidence: "Few floor plans or interior images attached",
    verificationStatus: "indexing",
    sourceIds: ["src-house-housing"],
  },
  {
    id: "aa-hayashi-missing-rent",
    writerId: "writer-hayashi",
    absenceType: "missing-rent-record",
    description: "No verified rent amounts indexed yet",
    descriptionJa: "確認済み家賃額は未索引",
    evidence: "MoneyRecord index empty for Hayashi rents",
    verificationStatus: "indexing",
    sourceIds: ["src-house-housing"],
  },
  {
    id: "aa-hayashi-missing-floor-plan",
    writerId: "writer-hayashi",
    relatedWorkId: undefined,
    absenceType: "missing-floor-plan",
    description: "Early rooms — floor plans not indexed",
    descriptionJa: "初期住居の間取りは未索引",
    evidence: "Official plans for memorial house pending separate attachment",
    verificationStatus: "indexing",
    sourceIds: ["src-house-arch"],
  },
];

export const relatedComingHouse = [
  { id: "rel-who-preserves", title: "作家の家は、誰が保存するのか", status: "coming" as const },
  { id: "rel-outside-study", title: "書斎の外にある仕事", status: "coming" as const },
  { id: "rel-success-building", title: "成功は建物を残す", status: "coming" as const },
  { id: "rel-boarding-lit", title: "下宿の文学史", status: "coming" as const },
  { id: "rel-rent-lit", title: "家賃のある文学", status: "coming" as const },
  { id: "rel-museum-edit", title: "記念館は人生をどう編集するか", status: "coming" as const },
];

export const houseEntityIds = ["entity-hayashi-fumiko-memorial-hall"];
export const houseHousingRecordIds = [...HAYASHI_HOUSING_IDS];
export const houseAbsenceIds = housingArchiveAbsences.map((a) => a.id);
export const houseObservationIds = houseHousingObservations.map((o) => o.id);

export const houseSources: Source[] = [
  {
    id: "src-house-primary",
    category: "primary",
    status: "needed",
    label: "Primary literary records — Hōrōki, essays, letters",
    needed: true,
  },
  {
    id: "src-house-housing",
    category: "verification",
    status: "needed",
    label: "Housing records — address / rent / periods",
    needed: true,
  },
  {
    id: "src-house-museum",
    category: "verification",
    status: "needed",
    label: "Official museum sources — Hayashi Fumiko Memorial Hall",
    needed: true,
    note: "No invented URL. Prefer official operator materials.",
  },
  {
    id: "src-house-municipal",
    category: "verification",
    status: "needed",
    label: "Municipal records — cultural property / district",
    needed: true,
  },
  {
    id: "src-house-arch",
    category: "verification",
    status: "needed",
    label: "Architectural records — plans, preservation",
    needed: true,
  },
  {
    id: "src-house-bio",
    category: "verification",
    status: "needed",
    label: "Biographical sources — chronologies",
    needed: true,
  },
  {
    id: "src-house-publishing",
    category: "verification",
    status: "needed",
    label: "Publishing records — income after success",
    needed: true,
  },
  {
    id: "src-house-preservation",
    category: "verification",
    status: "needed",
    label: "Preservation history — ownership, opening",
    needed: true,
  },
  {
    id: "src-house-domestic",
    category: "verification",
    status: "needed",
    label: "Domestic history — housework, facilities",
    needed: true,
  },
  {
    id: "src-house-urban",
    category: "verification",
    status: "needed",
    label: "Urban history — Tokyo housing / redevelopment",
    needed: true,
  },
];
