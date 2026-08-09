import {
  EDITOR_OBS_ACTION_IDS,
  editorialActions,
  editorialSystemProfiles,
} from "@/data/editorial-actions";
import {
  EDITOR_OBS_FUNCTION_IDS,
  editorialFunctionNodes,
} from "@/data/editorial-functions";
import type { Source } from "@/lib/types";

export const EDITOR_OBS_SLUG = "where-did-the-editor-go";
export const EDITOR_OBS_ID = "obs-where-did-the-editor-go";

export const editorLead = [
  "編集者は、",
  "原稿を読む人だった。",
  "選ぶ。",
  "断る。",
  "削る。",
  "題名を変える。",
  "順番を組み替える。",
  "書き手を励ます。",
  "締切を迫る。",
  "読者を想像する。",
  "しかし現在、",
  "その仕事の一部は作者自身が担い、",
  "一部はアルゴリズムが担い、",
  "一部はAIが担うようになった。",
  "編集者が消えたのではない。",
  "編集という機能が、",
  "多くの場所へ分散した。",
];

export const editorMeta = {
  themes:
    "Editing / Publishing / Algorithms / AI / Selection / Distribution",
  relatedWriters: "Kafū Nagai / Kenji Nishimura / Charles Bukowski",
  articleStatus: "Published",
  verificationStatus: "Partial",
  lastUpdated: "2026-08-02",
};

export const editorialFunctionsPanel = [
  { id: "discovery", label: "Discovery", labelJa: "発見" },
  { id: "selection", label: "Selection", labelJa: "選考" },
  { id: "development", label: "Development", labelJa: "内容の発展" },
  { id: "structure", label: "Structure", labelJa: "構成" },
  { id: "language", label: "Language", labelJa: "文章調整" },
  { id: "context", label: "Context", labelJa: "媒体文脈" },
  { id: "positioning", label: "Positioning", labelJa: "位置づけ" },
  { id: "distribution", label: "Distribution", labelJa: "流通" },
  { id: "feedback", label: "Feedback", labelJa: "反応の回収" },
  { id: "archive", label: "Archive", labelJa: "記録保存" },
];

export const gatekeepingTension = {
  enables: [
    "品質管理",
    "媒体の一貫性",
    "読者の信頼",
    "書き手の発見",
    "作品の改善",
  ],
  excludes: [
    "新しい書き手",
    "少数派の声",
    "売れにくい作品",
    "媒体方針に合わない表現",
    "人間関係の外側にいる人",
  ],
};

export const nishimuraEditorialChain = [
  { id: "ms", label: "Manuscript", labelJa: "原稿" },
  { id: "editor", label: "Editor", labelJa: "編集者" },
  { id: "pub", label: "Publisher", labelJa: "出版社" },
  { id: "prize", label: "Literary prize", labelJa: "文学賞" },
  { id: "media", label: "Media", labelJa: "テレビ・新聞・雑誌" },
  { id: "persona", label: "Writer persona", labelJa: "作家像" },
];

export const selfEditingStack = [
  { id: "idea", label: "Idea", labelJa: "企画" },
  { id: "draft", label: "Draft", labelJa: "執筆" },
  { id: "revision", label: "Revision", labelJa: "推敲" },
  { id: "title", label: "Title", labelJa: "題名" },
  { id: "visual", label: "Visual", labelJa: "画像" },
  { id: "publication", label: "Publication", labelJa: "公開" },
  { id: "promotion", label: "Promotion", labelJa: "告知" },
  { id: "analytics", label: "Analytics", labelJa: "分析" },
  { id: "persona", label: "Persona", labelJa: "自己演出" },
];

export const algorithmicSelection = {
  input: [
    "閲覧履歴",
    "クリック",
    "滞在時間",
    "反応",
    "類似ユーザー",
    "商業目標",
  ],
  output: ["表示順位", "おすすめ", "通知", "トレンド", "非表示"],
  unknown: [
    "完全な選択理由",
    "重み",
    "商業的調整",
    "個別最適化の詳細",
  ],
};

export const humanAlgorithmMatrix = [
  {
    axis: "Judgment basis",
    axisJa: "判断根拠",
    human: "作品、媒体方針、市場、主観、関係",
    algorithm: "行動データ、予測、最適化目標",
  },
  {
    axis: "Explanation",
    axisJa: "説明",
    human: "理由を言語化できる場合がある",
    algorithm: "理由が利用者から見えにくい",
  },
  {
    axis: "Revision",
    axisJa: "修正",
    human: "書き手へ修正を返せる",
    algorithm: "露出の増減として反応する",
  },
  {
    axis: "Relationship",
    axisJa: "関係",
    human: "継続的な人間関係",
    algorithm: "利用履歴による継続最適化",
  },
  {
    axis: "Scale",
    axisJa: "規模",
    human: "読める量に限界",
    algorithm: "大規模処理",
  },
  {
    axis: "Bias",
    axisJa: "偏り",
    human: "個人的・組織的偏り",
    algorithm: "データ・設計・目標による偏り",
  },
];

export const aiEditorialCapability = {
  strong: [
    "誤字",
    "要約",
    "構成案",
    "重複検出",
    "タイトル案",
    "文体調整",
    "翻訳",
    "整合性確認",
  ],
  limited: [
    "作品の社会的意味",
    "倫理判断",
    "書き手との長期関係",
    "出版責任",
    "文化的文脈",
    "リスクの引き受け",
    "未知の才能への賭け",
  ],
};

export const readerEditingPanel = [
  { id: "amplify", label: "Amplify", labelJa: "拡散" },
  { id: "suppress", label: "Suppress", labelJa: "反応しない" },
  { id: "reframe", label: "Reframe", labelJa: "引用やコメントで意味を変える" },
  { id: "archive", label: "Archive", labelJa: "保存" },
  { id: "recommend", label: "Recommend", labelJa: "推薦" },
  {
    id: "reject",
    label: "Reject",
    labelJa: "低評価、離脱、購読解除",
  },
];

export const indexedEditorialRecords = [
  {
    id: "idx-kafu",
    writer: "Kafū Nagai",
    focus: "Print / publisher context",
    status: "Partial",
  },
  {
    id: "idx-nishimura",
    writer: "Kenji Nishimura",
    focus: "Publisher / literary prize / media amplification",
    status: "Partial",
  },
  {
    id: "idx-bukowski",
    writer: "Charles Bukowski",
    focus: "Small press / postal submission / independent publishing",
    status: "Bibliographic verification needed",
  },
  {
    id: "idx-ai-algo",
    writer: "AI / Algorithm",
    focus: "Conceptual comparison only",
    status: "No private platform data indexed",
  },
];

export const editorialTransparencyRows = [
  { actor: "Human editor", actorJa: "人間の編集者", level: "Sometimes" },
  { actor: "Publisher", actorJa: "出版社", level: "Sometimes" },
  {
    actor: "Literary prize",
    actorJa: "文学賞",
    level: "Partially through jury statements",
  },
  {
    actor: "Television producer",
    actorJa: "テレビ制作者",
    level: "Usually limited public explanation",
  },
  {
    actor: "Algorithm",
    actorJa: "アルゴリズム",
    level: "Usually opaque to the individual user",
  },
  {
    actor: "AI assistant",
    actorJa: "AIアシスタント",
    level:
      "Can generate an explanation, but that explanation may not reveal the full system process",
  },
  {
    actor: "Reader community",
    actorJa: "読者コミュニティー",
    level: "Distributed and inconsistent",
  },
];

export const relatedComingEditor = [
  {
    id: "rel-invisible-reject",
    title: "見えない不採用",
    status: "coming" as const,
  },
  {
    id: "rel-ai-little-mag",
    title: "AI時代のリトルマガジン",
    status: "coming" as const,
  },
  {
    id: "rel-reader-edits",
    title: "読者は作品をどう編集するか",
    status: "coming" as const,
  },
  {
    id: "rel-author-pr",
    title: "作家自身が広報になるとき",
    status: "coming" as const,
  },
];

export const editorEntityIds = [
  "entity-shinchosha",
  "entity-tokyo-mx",
  "entity-la-post-office",
  "entity-los-angeles",
];

export const editorActionIds = [...EDITOR_OBS_ACTION_IDS];
export const editorFunctionNodeIds = [...EDITOR_OBS_FUNCTION_IDS];

export {
  editorialActions,
  editorialFunctionNodes,
  editorialSystemProfiles,
};

export const editorSources: Source[] = [
  {
    id: "src-edit-kafu",
    category: "primary",
    status: "verification-pending",
    label: "Kafū — diaries, manuscripts, publishing context",
    needed: true,
    note: "Confirmed editor / magazine names only when sourced.",
  },
  {
    id: "src-edit-nishimura",
    category: "primary",
    status: "verification-pending",
    label: "Nishimura — publishing and diary records",
    needed: true,
  },
  {
    id: "src-edit-bukowski",
    category: "primary",
    status: "verification-pending",
    label: "Bukowski — letters, magazine appearances (bibliographic)",
    needed: true,
    note: "No long quotation of protected correspondence.",
  },
  {
    id: "src-edit-publishing",
    category: "verification",
    status: "needed",
    label: "Editorial history — editors, publishers, literary magazines",
    needed: true,
  },
  {
    id: "src-edit-prize",
    category: "verification",
    status: "needed",
    label: "Literary prize records — selection, jury statements",
    needed: true,
  },
  {
    id: "src-edit-media",
    category: "verification",
    status: "needed",
    label: "Media production — television, newspapers, magazines",
    needed: true,
  },
  {
    id: "src-edit-small",
    category: "verification",
    status: "needed",
    label: "Small press / independent publishing history",
    needed: true,
  },
  {
    id: "src-edit-platform",
    category: "verification",
    status: "needed",
    label: "Platform documentation — official recommendation descriptions",
    needed: true,
    note: "No invented platform URLs; prefer official docs.",
  },
  {
    id: "src-edit-ai",
    category: "verification",
    status: "needed",
    label: "AI documentation — official technical materials",
    needed: true,
  },
  {
    id: "src-edit-algo-research",
    category: "verification",
    status: "needed",
    label: "Algorithmic selection research — primary studies",
    needed: true,
  },
  {
    id: "src-edit-reader",
    category: "verification",
    status: "needed",
    label: "Reader behavior — reviews, recommendation, communities",
    needed: true,
  },
];
