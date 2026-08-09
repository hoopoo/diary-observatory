import type { Source } from "@/lib/types";
import { getScreenshotAuditSummary } from "@/lib/screenshots";

export const SCREENSHOT_OBS_SLUG = "screenshot-is-not-provenance";
export const SCREENSHOT_OBS_ID = "obs-screenshot-is-not-provenance";

export const screenshotObsLead = [
  "「証拠あるよ」",
  "と言って、",
  "スクリーンショットが貼られる。",
  "投稿。",
  "広告。",
  "チャット。",
  "ニュース記事。",
  "商品ページ。",
  "謝罪文。",
  "削除された発言。",
  "確かに、",
  "そこには何かが写っている。",
  "しかし、",
  "その画像だけで分かることと、",
  "分からないことがある。",
  "誰が撮ったのか。",
  "いつ撮ったのか。",
  "元URLはどこか。",
  "本当にそのページだったのか。",
  "投稿は編集されたのか。",
  "前後に何が書かれていたのか。",
  "今も元資料へ戻れるのか。",
  "スクリーンショットは、",
  "証拠になりうる。",
  "しかし、",
  "証拠経路そのものではない。",
];

export const screenshotObsMeta = {
  themes:
    "Screenshot / Evidence / Provenance / Social Media / Web Archive / Context / Authenticity / Deletion / Verification / Digital Record",
  articleStatus: "Published",
  verificationStatus: "Interpretive / evidence-backed",
  lastUpdated: "2026-08-09",
  axisLabel: "Observation Axis — Evidence",
};

export const evidenceStackLayers = [
  {
    id: "1",
    label: "Visible pixels",
    labelJa: "見えている文字・画像・UI",
  },
  {
    id: "2",
    label: "Visible metadata",
    labelJa: "画面上の日時、名前、URL断片",
  },
  {
    id: "3",
    label: "Claimed origin",
    labelJa: "どのサイト・投稿から撮ったと言われているか",
  },
  {
    id: "4",
    label: "Verified origin",
    labelJa: "実際の元URL・元Sourceとの一致",
  },
  {
    id: "5",
    label: "Context",
    labelJa: "前後の投稿、スレッド、記事全文、コメント等",
  },
  {
    id: "6",
    label: "History",
    labelJa: "編集、削除、更新、リダイレクト",
  },
  {
    id: "7",
    label: "Capture provenance",
    labelJa: "誰が、いつ、どの状態で取得したか",
  },
] as const;

export const appearanceItems = [
  "pixels",
  "typography",
  "visual hierarchy",
  "visible text",
  "visible image",
] as const;

export const structureItems = [
  "HTML",
  "link targets",
  "hidden metadata",
  "canonical URL",
  "edit history",
  "reply graph",
  "account ID",
  "source file",
  "dynamic state",
] as const;

export const outsideTheFrame = [
  "Original URL",
  "Previous paragraph",
  "Next paragraph",
  "Replies",
  "Thread parent",
  "Quote-post origin",
  "Edit history",
  "Deletion status",
  "Account state",
  "Page source",
  "Embedded links",
  "Hover text",
  "Alt text",
  "Video context",
  "Audio",
  "Interaction",
  "Publication history",
  "Capture time",
  "Device time accuracy",
] as const;

export const originalPathStates = [
  "Original still available",
  "Original moved",
  "Original archived",
  "Original updated",
  "Original removed",
  "Unknown",
] as const;

export const relationTypes = [
  "direct-capture",
  "repost-capture",
  "archive-capture",
  "cropped-capture",
  "annotated-capture",
  "forwarded-capture",
  "unknown-origin",
] as const;

export const modificationTypes = [
  "crop",
  "redact",
  "blur",
  "highlight",
  "annotate",
  "stitch",
  "resize",
  "color-adjust",
  "composite",
  "ai-edit",
  "unknown",
] as const;

export const cascadeSteps = [
  "Original post",
  "Screenshot",
  "Quote post",
  "News article",
  "Reaction video",
  "Second screenshot",
  "AI summary",
] as const;

export const contextCollapseTypes = [
  "parent-missing",
  "reply-chain-missing",
  "quote-origin-missing",
  "comment-context-missing",
  "platform-context-missing",
  "temporal-context-missing",
  "identity-context-missing",
  "unknown",
] as const;

export const timestampTypes = [
  "absolute-post-time",
  "relative-post-time",
  "device-clock",
  "message-time",
  "publication-time",
  "unknown",
] as const;

export const cropStatuses = [
  "uncropped-confirmed",
  "cropped",
  "likely-cropped",
  "unknown",
] as const;

export const offerStates = [
  "active-at-capture",
  "expired",
  "removed",
  "changed",
  "unknown",
] as const;

export const generationStatuses = [
  "captured",
  "edited",
  "generated",
  "composite",
  "disputed",
  "unknown",
] as const;

export const evidenceStatuses = [
  { id: "traceable", label: "Traceable screenshot", labelJa: "辿れる" },
  {
    id: "partially-traceable",
    label: "Partially traceable",
    labelJa: "部分的に辿れる",
  },
  { id: "isolated", label: "Isolated screenshot", labelJa: "孤立" },
  { id: "disputed", label: "Disputed screenshot", labelJa: "争点あり" },
  { id: "modified", label: "Modified screenshot", labelJa: "改変あり" },
  {
    id: "original-recovered",
    label: "Original source recovered",
    labelJa: "元資料回復",
  },
  {
    id: "original-unavailable",
    label: "Original source unavailable",
    labelJa: "元資料不可",
  },
  { id: "unknown-origin", label: "Unknown origin", labelJa: "出所不明" },
] as const;

export const traceabilityLadder = [
  { level: "A", label: "Screenshot only" },
  { level: "B", label: "Screenshot + visible origin" },
  { level: "C", label: "Screenshot + original URL" },
  { level: "D", label: "Screenshot + original source verified" },
  {
    level: "E",
    label: "Original source + archived copy + capture history",
  },
  {
    level: "F",
    label: "Multiple independent corroborations + full provenance",
  },
] as const;

export const supportedClaimExamples = [
  "Visible text exists",
  "Visible account label",
  "Visible timestamp",
  "Visible image",
  "Displayed price",
  "Displayed headline",
] as const;

export const unsupportedClaimExamples = [
  "Account ownership",
  "Original publication date",
  "Unedited context",
  "Objective event",
  "Intent",
  "Deletion reason",
  "Current offer state",
] as const;

export const goodScreenshotHandling = [
  "スクリーンショットがある",
  "保存する",
  "Sourceとして登録",
  "元Sourceを探す",
  "元URLを記録",
  "SourceState確認",
  "Archive確認",
  "CaptureContext記録",
  "Modification確認",
  "FactClaimを限定",
  "Unknownを残す",
] as const;

export const badScreenshotHandling = [
  "Screenshot exists",
  "Fact verified",
] as const;

export const relatedComingScreenshot = [
  {
    id: "coming-sns-diary",
    title: "SNSは日記なのか",
    titleEn: "Is Social Media a Diary?",
    status: "available" as const,
    href: "/observations/is-social-media-a-diary",
  },
  {
    id: "coming-deleted-post",
    title: "削除された投稿の人生",
    status: "coming" as const,
  },
  {
    id: "coming-citation-only",
    title: "引用だけが残る",
    status: "coming" as const,
  },
  {
    id: "coming-headline-walks",
    title: "ニュースの見出しだけが歩き出す",
    status: "coming" as const,
  },
  {
    id: "coming-ai-under",
    title: "AI要約の下にあった資料",
    status: "coming" as const,
  },
  {
    id: "coming-crop-work",
    title: "切り抜きは、いつ別の作品になるのか",
    status: "coming" as const,
  },
];

export function getScreenshotObsRepositoryFacts() {
  return getScreenshotAuditSummary();
}

export const screenshotObsSources: Source[] = [
  {
    id: "src-ss-link-rot",
    label: "Observation — link-rot-is-archive-history",
    category: "editorial",
    status: "verification-pending",
    url: "/observations/link-rot-is-archive-history",
    note: "Related Digital Archive observation on survival fragments.",
  },
  {
    id: "src-ss-more-sources",
    label: "Observation — more-sources-less-certainty",
    category: "editorial",
    status: "verification-pending",
    url: "/observations/more-sources-less-certainty",
    note: "Related Provenance observation.",
  },
  {
    id: "src-ss-sources",
    label: "Diary Observatory — Sources",
    category: "editorial",
    status: "verification-pending",
    url: "/sources",
    note: "Fact basis: screenshot registry is currently empty.",
  },
  {
    id: "src-ss-provenance",
    label: "Diary Observatory — Provenance",
    category: "editorial",
    status: "verification-pending",
    url: "/provenance",
    note: "Traceability health separate from truth status.",
  },
];
