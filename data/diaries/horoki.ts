import type { DiaryWork, EpistemicKind } from "@/lib/types";
import { horokiEditions } from "@/data/editions/horoki";
import { horokiPageSources, horokiResearchQueue } from "@/data/research/horoki";

export const HOROKI_SLUG = "horoki";
export const HOROKI_ID = "diary-horoki";

/**
 * Hōrōki is diary-derived / autobiographical — not a raw diary genre slot.
 * Edition specifics require bibliographic verification.
 */
export const horoki: DiaryWork = {
  id: HOROKI_ID,
  slug: HOROKI_SLUG,
  writerId: "writer-hayashi",
  title: "Hōrōki",
  titleOriginal: "放浪記",
  romanizedTitle: "Hōrōki",
  startYear: 1920,
  endYear: undefined,
  genre: "autofiction-adjacent",
  sourceForm: "diary-derived-work",
  language: "ja",
  publicationStatus: "published",
  rightsStatus: "Edition-specific verification required",
  description:
    "A diary-derived autobiographical work shaped through serialization, book publication, and later revision. Not treated as an unedited diary.",
  descriptionJa:
    "日記的素材を基礎にしつつ、掲載・刊行・改訂を経た自伝的作品。未加工の日記としては扱わない。",
  summary:
    "Lived experience, diary-like records, editorial selection, and revised editions must be kept distinct.",
  tagline: "One life, recorded, published, rearranged, and revised.",
  taglineJa: "一つの生活が、記録され、刊行され、並べ替えられ、書き直された。",
  themes: [
    "Movement",
    "Labor",
    "Housing",
    "Food",
    "Money",
    "Poverty",
    "Publishing",
    "Autobiographical Writing",
    "Revision",
    "Writer Persona",
  ],
  primaryCity: "Tokyo",
  editionIds: horokiEditions.map((e) => e.id),
  entryIds: [],
  researchQueueIds: horokiResearchQueue.map((q) => q.id),
  indexingStatus: "partial",
  verificationStatus: "partial",
  lastUpdated: "2026-08-03",
  copyrightNote:
    "Do not quote at length without edition ID and rights review. Version-sensitive. No full-text diffs.",
  sources: horokiPageSources,
};

export const horokiLead = [
  "『放浪記』は、",
  "一つの時点で完成した一冊ではない。",
  "生活の中で書かれた断片。",
  "日記的な記録。",
  "雑誌への掲載。",
  "単行本化。",
  "改訂。",
  "後世の復元。",
  "同じ生活は、",
  "版が変わるたびに、",
  "別の順序と別の強調で読者へ届いた。",
  "Diary Observatoryでは、",
  "『放浪記』を固定された本文としてではなく、",
  "生活記録が文学へ変わる過程として観測する。",
];

export const horokiMetadata = {
  writer: "Fumiko Hayashi",
  language: "Japanese",
  primaryPeriod: "Bibliographic verification needed",
  sourceForm: "diary-derived-work",
  textualStatus: "Version-sensitive",
  editionStatus: "Multiple editions",
  rightsStatus: "Edition-specific verification required",
  observationStatus: "Active",
  verificationStatus: "Partial",
  lastUpdated: "2026-08-03",
};

export const whatKindOfWork = {
  title: "What kind of work is Hōrōki?",
  titleJa: "『放浪記』は、何として読むべきか",
  badges: [
    { en: "Not simply a diary", ja: "単純な日記ではない" },
    { en: "Not simply a novel", ja: "単純な小説でもない" },
    {
      en: "Not an unedited life record",
      ja: "未編集の生活記録ではない",
    },
    {
      en: "A diary-derived autobiographical literary work",
      ja: "日記的素材をもとにした自伝的文学作品",
    },
  ],
  paragraphs: [
    "『放浪記』には、日付、移動、仕事、食事、恋愛、住居、金銭、感情が記録されている。",
    "しかし、刊行された本文は、生活記録そのものではない。選択。編集。順序変更。削除。追加。表現の調整。複数の工程を経ている。",
  ],
  concept: {
    en: "A diary records a day.\nA diary-derived work reconstructs a life from recorded days.",
    ja: "日記は一日を記録する。日記的作品は、記録された日々から人生を再構成する。",
  },
};

export const sourceFormClassification = {
  primary: "diary-derived-work",
  related: [
    { id: "autobiographical-work", label: "Autobiographical work", labelJa: "自伝的作品" },
    { id: "serialized-writing", label: "Serialized writing", labelJa: "連載作品" },
    { id: "revised-literary-work", label: "Revised literary work", labelJa: "改訂された文学作品" },
    { id: "memoir-like", label: "Memoir-like record", labelJa: "回想的記録" },
  ],
  uiBadges: [
    { id: "diary", label: "Diary", active: false },
    { id: "journal", label: "Journal", active: false },
    { id: "diary-derived", label: "Diary-derived work", active: true },
    { id: "auto", label: "Autobiographical work", active: true },
    { id: "fiction", label: "Fiction", active: false },
  ],
};

export const transformationPath = [
  {
    id: "lived",
    label: "Lived experience",
    labelJa: "生きた経験",
    survives: "場所、仕事、身体、食事、関係",
    mayChange: "記憶、順序、強調",
    actor: "Fumiko Hayashi",
    sourceType: "life",
    verificationStatus: "contextual",
  },
  {
    id: "immediate",
    label: "Immediate record",
    labelJa: "その時点の記録",
    survives: "日付、感情、出来事",
    mayChange: "省略、書き直し",
    actor: "Writer",
    sourceType: "record",
    verificationStatus: "indexing",
  },
  {
    id: "notebook",
    label: "Notebook / diary-like source",
    labelJa: "手帳・日記的素材",
    survives: "私的素材として残るもの",
    mayChange: "紛失、非公開、破棄",
    actor: "Writer",
    sourceType: "manuscript",
    verificationStatus: "indexing",
  },
  {
    id: "selection",
    label: "Selection",
    labelJa: "選択",
    survives: "選ばれた断片",
    mayChange: "除外された日々",
    actor: "Writer / editor",
    sourceType: "editorial",
    verificationStatus: "indexing",
  },
  {
    id: "serialization",
    label: "Serialization",
    labelJa: "雑誌掲載",
    survives: "媒体が選んだ部分",
    mayChange: "構成、表記、順序",
    actor: "Writer / editor / magazine",
    sourceType: "serialization",
    verificationStatus: "indexing",
  },
  {
    id: "book",
    label: "Book edition",
    labelJa: "単行本",
    survives: "刊行時に統合された本文",
    mayChange: "追加、削除、再配置",
    actor: "Writer / editor / publisher",
    sourceType: "book",
    verificationStatus: "partial",
  },
  {
    id: "revision",
    label: "Revision",
    labelJa: "改訂",
    survives: "改訂後に残る本文",
    mayChange: "語句、省略、強調",
    actor: "Author / editor",
    sourceType: "revision",
    verificationStatus: "indexing",
  },
  {
    id: "reconstruction",
    label: "Reconstruction",
    labelJa: "復元・校訂",
    survives: "復元方針に従う本文",
    mayChange: "底本解釈、編集注",
    actor: "Scholar / editor",
    sourceType: "reconstruction",
    verificationStatus: "indexing",
  },
  {
    id: "reader",
    label: "Reader’s Hōrōki",
    labelJa: "読者が読む『放浪記』",
    survives: "流通する版とその記憶",
    mayChange: "作家像、要約、神話化",
    actor: "Readers / media",
    sourceType: "reception",
    verificationStatus: "observation",
  },
];

export const versionMatrixRows = [
  "Date",
  "Place",
  "Work",
  "Food",
  "Money",
  "Relationship",
  "Body",
  "Emotion",
  "Sequence",
  "Expression",
];

export const versionMatrixCols = [
  "Source notes",
  "Serialization",
  "First edition",
  "Revised edition",
  "Reconstructed edition",
];

export const textualLayers: Array<{
  kind: EpistemicKind | "unknown";
  title: string;
  titleJa: string;
  text: string;
}> = [
  {
    kind: "fact",
    title: "Fact",
    titleJa: "確認できる書誌・日付・版",
    text: "確認できる書誌情報、日付、版、刊行、原資料。",
  },
  {
    kind: "observation",
    title: "Textual observation",
    titleJa: "本文差の観測",
    text: "版ごとの本文差、語句、順序、追加、削除。現時点は Not compared。",
  },
  {
    kind: "interpretation",
    title: "Interpretation",
    titleJa: "変更理由の解釈",
    text: "なぜ変更されたのか——作者、編集者、媒体、市場、自己検閲、記憶。断定しない。",
  },
  {
    kind: "unknown",
    title: "Unknown",
    titleJa: "不明",
    text: "原資料の不在、編集判断の理由、失われた版。",
  },
];

export const lifeCategories = [
  { id: "work", label: "Work", labelJa: "賃金労働、投稿、執筆" },
  { id: "housing", label: "Housing", labelJa: "下宿、借家、部屋" },
  { id: "food", label: "Food", labelJa: "食事、空腹、自炊、外食、贈与" },
  { id: "money", label: "Money", labelJa: "賃金、家賃、食費、原稿料" },
  { id: "movement", label: "Movement", labelJa: "鉄道、徒歩、船、引っ越し" },
  { id: "relationships", label: "Relationships", labelJa: "家族、恋人、友人、編集者" },
  { id: "body", label: "Body", labelJa: "空腹、疲労、病気、睡眠" },
  { id: "domestic", label: "Domestic labor", labelJa: "掃除、料理、洗濯、生活維持" },
  { id: "publishing", label: "Publishing", labelJa: "投稿、掲載、編集、刊行" },
  { id: "emotion", label: "Emotion", labelJa: "希望、怒り、寂しさ、不安" },
];

export const moneyCategories = [
  "Wages",
  "Rent",
  "Food",
  "Transport",
  "Postage",
  "Books",
  "Writing materials",
  "Medical",
  "Publishing income",
  "Gift / support",
  "Unknown",
];

export const peopleCategories = [
  { id: "family", label: "Family", labelJa: "家族" },
  { id: "partner", label: "Partner", labelJa: "恋人・配偶者" },
  { id: "friend", label: "Friend", labelJa: "友人" },
  { id: "employer", label: "Employer", labelJa: "雇用者" },
  { id: "coworker", label: "Coworker", labelJa: "同僚" },
  { id: "editor", label: "Editor", labelJa: "編集者" },
  { id: "publisher", label: "Publisher", labelJa: "出版者" },
  { id: "landlord", label: "Landlord", labelJa: "大家" },
  { id: "anonymous", label: "Anonymous person", labelJa: "匿名人物" },
  {
    id: "composite",
    label: "Composite or transformed figure",
    labelJa: "複合・変形された人物",
  },
];

export const laborLayers = [
  { id: "paid", label: "Paid labor", labelJa: "賃金を得る仕事" },
  { id: "domestic", label: "Domestic labor", labelJa: "料理、掃除、洗濯、住居維持" },
  {
    id: "emotional",
    label: "Emotional labor",
    labelJa: "関係の維持（具体的記録がある場合のみ）",
  },
  { id: "writing", label: "Writing labor", labelJa: "執筆、投稿、推敲" },
  { id: "recovery", label: "Recovery", labelJa: "睡眠、休息、食事" },
  { id: "unknown", label: "Unknown", labelJa: "記録されない時間" },
];

export const omissionPrompts = [
  "Was the date removed?",
  "Was the person anonymized?",
  "Was the sequence compressed?",
  "Was repetition reduced?",
  "Was poverty made more narratively coherent?",
  "Was private detail withheld?",
];

export const publicationAdds = [
  "題名",
  "章立て",
  "順序",
  "説明",
  "接続文",
  "人物紹介",
  "物語的な始まり",
  "物語的な終わり",
  "編集上の統一",
  "作家紹介",
  "帯・宣伝文",
  "作家像",
];

export const personaLayers = [
  { id: "documented", label: "Documented life", labelJa: "実生活" },
  { id: "published", label: "Published text", labelJa: "刊行本文" },
  { id: "publisher", label: "Publisher framing", labelJa: "出版上の位置づけ" },
  { id: "media", label: "Media framing", labelJa: "新聞・雑誌・映像" },
  { id: "reader", label: "Reader memory", labelJa: "読者の記憶" },
  { id: "myth", label: "Later mythology", labelJa: "後世の成功物語" },
];

export const successLayers = [
  {
    kind: "observation" as EpistemicKind,
    title: "Textual change",
    text: "確認された変更のみ登録する。現時点は Not indexed。",
  },
  {
    kind: "observation" as EpistemicKind,
    title: "Authorial context",
    text: "改訂時の作者状況——資料確認後。",
  },
  {
    kind: "observation" as EpistemicKind,
    title: "Publishing context",
    text: "再刊・市場——書誌確認後。",
  },
  {
    kind: "interpretation" as EpistemicKind,
    title: "Interpretation",
    text: "成功後の再構成という読み——断定しない。",
  },
];

export const entryResearchTarget = {
  emptyEn: "Selected entry: Not yet chosen",
  emptyJa: "最初に索引化する一日は、まだ選ばれていません。",
  status: "Primary-source research required",
  futureUrl: "/entries/YYYY-MM-DD-fumiko-hayashi",
  conditions: [
    "日付が明記されている",
    "版が明確",
    "場所が分かる",
    "一日の行動が抽出できる",
    "仕事・食事・住居・金額のいずれかがある",
    "別版との比較可能性がある",
    "長文転載なしで要約できる",
  ],
};

export {
  horokiEditions,
  horokiResearchQueue,
  horokiPageSources,
};
