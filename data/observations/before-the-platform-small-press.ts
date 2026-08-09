import { PRESS_OBS_PUBLISHING_IDS } from "@/data/publishing-records";
import type { Source } from "@/lib/types";

export const PRESS_OBS_SLUG = "before-the-platform-small-press";
export const PRESS_OBS_ID = "obs-before-the-platform-small-press";

export const pressLead = [
  "いま、文章は投稿ボタン一つで公開できる。",
  "読者へ届くまでに、封筒も切手もいらない。",
  "編集者に会わなくてもいい。",
  "書店を通らなくてもいい。",
  "しかし、プラットフォーム以前、文章は物理的に移動していた。",
  "紙に打つ。",
  "折る。",
  "封筒へ入れる。",
  "宛名を書く。",
  "切手を貼る。",
  "郵便局へ持っていく。",
  "編集者が読む。",
  "返事を待つ。",
  "多くは断られる。",
  "それでも、小さな雑誌と少数の読者が、一人の書き手を支えることがあった。",
];

export const pressMeta = {
  primaryWriter: "Charles Bukowski",
  relatedWriters: "Kafū Nagai / Kenji Nishimura",
  themes:
    "Small Press / Publishing / Postage / Editing / Distribution / Platforms",
  articleStatus: "Published",
  verificationStatus: "Partial",
  lastUpdated: "2026-08-02",
};

export const physicalSubmissionFlow = [
  { id: "write", label: "Write", labelJa: "書く" },
  { id: "type", label: "Type / copy", labelJa: "清書・タイプ" },
  { id: "envelope", label: "Envelope", labelJa: "封筒" },
  { id: "postage", label: "Postage", labelJa: "切手" },
  { id: "postal", label: "Postal system", labelJa: "郵便" },
  { id: "editor", label: "Editor", labelJa: "編集者" },
  {
    id: "outcome",
    label: "Publication or rejection",
    labelJa: "掲載または返却",
  },
  { id: "reader", label: "Reader", labelJa: "読者" },
];

export const smallPressFunctions = [
  { id: "discovery", label: "Discovery", labelJa: "書き手の発見" },
  { id: "selection", label: "Selection", labelJa: "選考" },
  { id: "editing", label: "Editing", labelJa: "編集" },
  { id: "production", label: "Production", labelJa: "制作・印刷" },
  { id: "distribution", label: "Distribution", labelJa: "流通" },
  { id: "audience", label: "Audience", labelJa: "読者形成" },
  {
    id: "payment",
    label: "Payment",
    labelJa: "原稿料・印税・無償掲載",
  },
  { id: "archive", label: "Archive", labelJa: "バックナンバー" },
  {
    id: "community",
    label: "Community",
    labelJa: "書き手、編集者、読者",
  },
];

export const submissionCostItems = [
  { id: "paper", label: "Paper", labelJa: "紙" },
  { id: "envelope", label: "Envelope", labelJa: "封筒" },
  { id: "postage", label: "Postage", labelJa: "郵送料" },
  { id: "typing", label: "Typing supplies", labelJa: "タイプ用品" },
  { id: "copies", label: "Copies", labelJa: "複写" },
  {
    id: "return",
    label: "Return postage",
    labelJa: "返信用切手・返送費",
  },
  { id: "time", label: "Time", labelJa: "作業時間" },
  { id: "waiting", label: "Waiting", labelJa: "返事を待つ時間" },
];

export const editorRelationshipAxes = [
  { id: "selection", label: "Selection", labelJa: "選考" },
  { id: "editing", label: "Editing", labelJa: "編集" },
  { id: "correspondence", label: "Correspondence", labelJa: "書簡" },
  { id: "advocacy", label: "Advocacy", labelJa: "推薦" },
  { id: "payment", label: "Payment", labelJa: "原稿料" },
  { id: "conflict", label: "Conflict", labelJa: "衝突" },
  { id: "dependency", label: "Dependency", labelJa: "依存" },
  { id: "archive", label: "Archive", labelJa: "記録保存" },
];

export const audienceScaleItems = [
  { id: "mass", label: "Mass audience", labelJa: "大規模" },
  { id: "niche", label: "Niche audience", labelJa: "専門的・限定的" },
  {
    id: "community",
    label: "Community audience",
    labelJa: "共同体",
  },
  { id: "personal", label: "Personal audience", labelJa: "個人間" },
  { id: "unknown", label: "Unknown audience", labelJa: "不明" },
];

export const nishimuraAmplificationFlow = [
  { id: "ms", label: "Manuscript", labelJa: "原稿" },
  { id: "pub", label: "Publisher", labelJa: "出版社" },
  { id: "prize", label: "Literary prize", labelJa: "文学賞" },
  { id: "book", label: "Bookstore", labelJa: "書店" },
  { id: "tv", label: "Television", labelJa: "テレビ" },
  { id: "persona", label: "Writer persona", labelJa: "作家像" },
];

export const platformGainLoss = {
  gained: [
    "即時公開",
    "低コスト",
    "国際到達",
    "独立性",
    "多様な書き手",
  ],
  changedOrLost: [
    "編集工程",
    "待ち時間",
    "媒体文脈",
    "物理的記録",
    "読者の集中",
    "選考の可視性",
  ],
};

export const creatorStack = [
  { id: "writing", label: "Writing", labelJa: "執筆" },
  { id: "editing", label: "Editing", labelJa: "編集" },
  { id: "design", label: "Design", labelJa: "デザイン" },
  { id: "publishing", label: "Publishing", labelJa: "公開" },
  { id: "distribution", label: "Distribution", labelJa: "告知" },
  { id: "community", label: "Community", labelJa: "読者対応" },
  { id: "analytics", label: "Analytics", labelJa: "分析" },
  { id: "monetization", label: "Monetization", labelJa: "収益化" },
];

export const algorithmEditorAxes = {
  editor: ["作品の質", "媒体方針", "読者像", "関係", "商業性", "主観"],
  algorithm: [
    "クリック",
    "滞在時間",
    "反応",
    "類似ユーザー",
    "広告",
    "成長指標",
  ],
};

export const relatedComingPress = [
  {
    id: "rel-before-after-button",
    title: "投稿ボタンの前と後",
    status: "coming" as const,
  },
  {
    id: "rel-value-of-few-readers",
    title: "読者が少ないことの価値",
    status: "coming" as const,
  },
  {
    id: "rel-ai-little-magazine",
    title: "AI時代のリトルマガジン",
    status: "coming" as const,
  },
];

export const pressEntityIds = [
  "entity-shinchosha",
  "entity-tokyo-mx",
  "entity-la-post-office",
  "entity-los-angeles",
];

export const pressPublishingRecordIds = [...PRESS_OBS_PUBLISHING_IDS];

export const pressSources: Source[] = [
  {
    id: "src-press-bukowski",
    category: "primary",
    status: "verification-pending",
    label: "Bukowski primary records — diary, letters, works",
    needed: true,
    note: "No long quotation of protected letters.",
  },
  {
    id: "src-press-kafu",
    category: "primary",
    status: "verification-pending",
    label: "永井荷風『断腸亭日乗』および周辺出版記録",
    needed: true,
  },
  {
    id: "src-press-nishimura",
    category: "primary",
    status: "needed",
    label: "西村賢太の公刊日記・出版関連記録",
    needed: true,
  },
  {
    id: "src-press-small",
    category: "verification",
    status: "needed",
    label: "Small press / little magazine history",
    needed: true,
  },
  {
    id: "src-press-postal",
    category: "verification",
    status: "needed",
    label: "Postal history — postage and submission costs",
    needed: true,
  },
  {
    id: "src-press-publishing",
    category: "verification",
    status: "needed",
    label: "Publishing history — newspapers, magazines, houses, prizes",
    needed: true,
  },
  {
    id: "src-press-media",
    category: "verification",
    status: "needed",
    label: "Media history — television, readings, interviews",
    needed: true,
  },
  {
    id: "src-press-platform",
    category: "editorial",
    status: "needed",
    label: "Platform history — blogs, SNS, newsletters",
    needed: true,
  },
  {
    id: "src-press-ai",
    category: "editorial",
    status: "needed",
    label: "AI and digital publishing — primary / official sources",
    needed: true,
  },
  {
    id: "src-press-bio",
    category: "verification",
    status: "needed",
    label: "Biographical sources",
    needed: true,
  },
];
