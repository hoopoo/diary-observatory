import { MS_OBS_ABSENCE_IDS } from "@/data/archive-absences";
import { MS_OBS_MANUSCRIPT_IDS } from "@/data/manuscripts";
import { MS_OBS_SUBMISSION_IDS } from "@/data/submissions";
import type { Source } from "@/lib/types";

export const MS_OBS_SLUG = "the-manuscripts-that-were-not-chosen";
export const MS_OBS_ID = "obs-the-manuscripts-that-were-not-chosen";

export const msLead = [
  "文学史に残るのは、",
  "選ばれた文章である。",
  "掲載された原稿。",
  "刊行された本。",
  "受賞した作品。",
  "引用された一節。",
  "しかし、",
  "一人の作家が書いた文章の多くは、",
  "世界へ入らなかった。",
  "返送された。",
  "返事が来なかった。",
  "書き直された。",
  "途中で捨てられた。",
  "編集者の机で止まった。",
  "作者自身が破った。",
  "選ばれなかった文章は、",
  "存在しなかった文章ではない。",
];

export const msMeta = {
  themes:
    "Rejection / Unpublished Work / Editing / Silence / Archive / Publishing",
  relatedWriters: "Kafū Nagai / Kenji Nishimura / Charles Bukowski",
  articleStatus: "Published",
  verificationStatus: "Partial",
  lastUpdated: "2026-08-02",
};

export const rejectionTypes = [
  { id: "formal", label: "Formal rejection", labelJa: "明確な不採用通知" },
  { id: "return", label: "Return", labelJa: "原稿返送" },
  { id: "silence", label: "Silence", labelJa: "未返信" },
  { id: "revision", label: "Revision request", labelJa: "改稿要求" },
  { id: "deferred", label: "Deferred", labelJa: "保留・掲載延期" },
  { id: "cancelled", label: "Cancelled", labelJa: "出版中止" },
  { id: "withdrawn", label: "Self-withdrawn", labelJa: "作者による取り下げ" },
  { id: "abandoned", label: "Abandoned", labelJa: "途中放棄" },
  { id: "destroyed", label: "Destroyed", labelJa: "破棄" },
  { id: "lost", label: "Lost", labelJa: "紛失" },
  {
    id: "posthumous",
    label: "Posthumous discovery",
    labelJa: "死後発見",
  },
  { id: "unknown", label: "Unknown outcome", labelJa: "結果不明" },
];

export const submissionCycle = [
  { id: "write", label: "Write", labelJa: "書く" },
  { id: "submit", label: "Submit", labelJa: "投稿する" },
  { id: "wait", label: "Wait", labelJa: "待つ" },
  {
    id: "outcome",
    label: "Reject / Return / Silence",
    labelJa: "不採用／返送／沈黙",
  },
  {
    id: "revise",
    label: "Revise or resubmit",
    labelJa: "書き直す／再送する",
  },
  { id: "again", label: "Write again", labelJa: "また書く" },
];

export const rejectionCost = {
  money: ["紙", "封筒", "切手", "複写"],
  time: ["執筆", "清書", "郵送", "待機"],
  emotion: ["期待", "落胆", "怒り", "羞恥"],
  opportunity: ["別媒体への投稿遅延"],
  archive: ["返送原稿", "手紙", "封筒"],
  amountNoteEn: "No verified rejection cost indexed yet.",
  amountNoteJa: "確認済みの不採用関連費用は、まだ索引化されていません。",
};

export const returnArtifacts = [
  { id: "ms", label: "Returned manuscript", labelJa: "返送原稿" },
  { id: "letter", label: "Rejection letter", labelJa: "不採用通知" },
  { id: "envelope", label: "Envelope", labelJa: "封筒" },
  { id: "postmark", label: "Postmark", labelJa: "消印" },
  { id: "note", label: "Editorial note", labelJa: "編集者の書き込み" },
  { id: "unknown", label: "Unknown", labelJa: "所在不明" },
];

export const silenceClasses = [
  {
    id: "unread",
    label: "Unread",
    labelJa: "未読",
    verificationStatus: "indexing" as const,
  },
  {
    id: "read-unanswered",
    label: "Read but unanswered",
    labelJa: "既読・未返信",
    verificationStatus: "indexing" as const,
  },
  {
    id: "algo-unseen",
    label: "Algorithmically unseen",
    labelJa: "表示されない",
    verificationStatus: "indexing" as const,
  },
  {
    id: "backlog",
    label: "Editorial backlog",
    labelJa: "処理待ち",
    verificationStatus: "indexing" as const,
  },
  {
    id: "no-notice",
    label: "Rejected without notice",
    labelJa: "通知なし不採用",
    verificationStatus: "indexing" as const,
  },
  {
    id: "lost",
    label: "Lost submission",
    labelJa: "送信・管理上の消失",
    verificationStatus: "indexing" as const,
  },
  {
    id: "unknown",
    label: "Unknown",
    labelJa: "不明",
    verificationStatus: "indexing" as const,
  },
];

export const revisionTension = {
  improvement: ["明瞭化", "構成改善", "読者への接続"],
  compromise: ["媒体都合", "市場都合", "表現の抑制"],
  collaboration: ["作者と編集者の共同作業"],
  conflict: ["意図の不一致"],
  withdrawal: ["作者が取り下げる"],
  unknown: ["結果不明"],
};

export const selfRejection = [
  { id: "abandoned", label: "Abandoned draft", labelJa: "途中放棄" },
  { id: "destroyed", label: "Destroyed draft", labelJa: "破棄" },
  { id: "private", label: "Private writing", labelJa: "非公開" },
  { id: "embargo", label: "Embargoed", labelJa: "公開時期指定" },
  { id: "withheld", label: "Withheld", labelJa: "取り下げ" },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
];

export const posthumousEditorial = [
  { id: "intent", label: "Author intent", labelJa: "作者の意思" },
  { id: "family", label: "Family decision", labelJa: "遺族" },
  { id: "editor", label: "Editor / scholar", labelJa: "編集者・研究者" },
  { id: "publisher", label: "Publisher", labelJa: "出版社" },
  { id: "public", label: "Public interest", labelJa: "公共的価値" },
  { id: "privacy", label: "Privacy", labelJa: "私生活" },
  { id: "market", label: "Commercial value", labelJa: "市場性" },
  { id: "rights", label: "Rights", labelJa: "著作権・所有" },
];

export const indexedManuscriptStatus = [
  {
    id: "idx-kafu",
    writer: "Kafū Nagai",
    focus: "Published and surviving records indexed",
    status: "Unpublished manuscript data not yet indexed",
  },
  {
    id: "idx-nishimura",
    writer: "Kenji Nishimura",
    focus: "Published records indexed",
    status: "Rejected or unpublished manuscript data not yet indexed",
  },
  {
    id: "idx-bukowski",
    writer: "Charles Bukowski",
    focus: "Postal submission history partially indexed",
    status: "Specific rejected manuscripts require bibliographic verification",
  },
];

export const outcomeMatrixColumns = [
  { id: "published", label: "Published", labelJa: "刊行" },
  { id: "rejected", label: "Rejected", labelJa: "不採用" },
  { id: "returned", label: "Returned", labelJa: "返送" },
  { id: "unanswered", label: "Unanswered", labelJa: "未返信" },
  { id: "revised", label: "Revised", labelJa: "改稿" },
  { id: "abandoned", label: "Abandoned", labelJa: "放棄" },
  { id: "destroyed", label: "Destroyed", labelJa: "破棄" },
  { id: "posthumous", label: "Posthumous", labelJa: "死後刊行" },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
];

/** Only cells with indexed signal; others = Not indexed */
export const outcomeMatrixRows = [
  {
    writer: "Kafū",
    cells: {
      published: "Partial",
      rejected: "Not indexed",
      returned: "Not indexed",
      unanswered: "Not indexed",
      revised: "Not indexed",
      abandoned: "Not indexed",
      destroyed: "Not indexed",
      posthumous: "Not indexed",
      unknown: "Archive gaps possible",
    },
  },
  {
    writer: "Nishimura",
    cells: {
      published: "Partial",
      rejected: "Not indexed",
      returned: "Not indexed",
      unanswered: "Not indexed",
      revised: "Contextual (editing)",
      abandoned: "Not indexed",
      destroyed: "Not indexed",
      posthumous: "Not indexed",
      unknown: "Unseen pitches possible",
    },
  },
  {
    writer: "Bukowski",
    cells: {
      published: "Partial",
      rejected: "Pattern / needs bibliography",
      returned: "Pattern / needs bibliography",
      unanswered: "Possible / not counted",
      revised: "Not indexed",
      abandoned: "Not indexed",
      destroyed: "Not indexed",
      posthumous: "Not indexed",
      unknown: "Many individual outcomes",
    },
  },
];

export const relatedComingMs = [
  {
    id: "rel-returned-envelope",
    title: "返送された封筒",
    status: "coming" as const,
  },
  {
    id: "rel-unfinished-work",
    title: "未完という作品",
    status: "coming" as const,
  },
  {
    id: "rel-posthumous-diary",
    title: "死後に公開される日記",
    status: "coming" as const,
  },
  {
    id: "rel-unwritten",
    title: "作家が書かなかったこと",
    status: "coming" as const,
  },
  {
    id: "rel-silence-reject",
    title: "沈黙としての不採用",
    status: "coming" as const,
  },
];

export const msEntityIds = [
  "entity-shinchosha",
  "entity-la-post-office",
  "entity-los-angeles",
];

export const msManuscriptIds = [...MS_OBS_MANUSCRIPT_IDS];
export const msSubmissionIds = [...MS_OBS_SUBMISSION_IDS];
export const msAbsenceIds = [...MS_OBS_ABSENCE_IDS];

export const msSources: Source[] = [
  {
    id: "src-ms-kafu",
    category: "primary",
    status: "verification-pending",
    label: "Kafū — diaries, manuscripts, correspondence",
    needed: true,
    note: "No long quotation of protected drafts.",
  },
  {
    id: "src-ms-nishimura",
    category: "primary",
    status: "needed",
    label: "Nishimura — diaries, publishing commissions",
    needed: true,
  },
  {
    id: "src-ms-bukowski",
    category: "primary",
    status: "verification-pending",
    label: "Bukowski — letters, magazine appearances (bibliographic)",
    needed: true,
    note: "No invented rejection letters or long quotation.",
  },
  {
    id: "src-ms-submission",
    category: "verification",
    status: "needed",
    label: "Submission records — postal / magazine archives",
    needed: true,
  },
  {
    id: "src-ms-rejection",
    category: "verification",
    status: "needed",
    label: "Rejection letters / return artifacts",
    needed: true,
    note: "Copyright caution on letter bodies.",
  },
  {
    id: "src-ms-publishing",
    category: "verification",
    status: "needed",
    label: "Publishing archives — houses, magazines",
    needed: true,
  },
  {
    id: "src-ms-archive",
    category: "verification",
    status: "needed",
    label: "Archive catalogues — libraries, literary museums",
    needed: true,
  },
  {
    id: "src-ms-posthumous",
    category: "verification",
    status: "needed",
    label: "Posthumous editions — editorial notes",
    needed: true,
  },
  {
    id: "src-ms-bio",
    category: "verification",
    status: "needed",
    label: "Biographical sources",
    needed: true,
  },
  {
    id: "src-ms-platform",
    category: "editorial",
    status: "needed",
    label: "Digital platform records — official status docs only",
    needed: true,
    note: "No invented platform URLs.",
  },
];
