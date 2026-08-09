import type { Source } from "@/lib/types";
import {
  getLinkRotAuditSummary,
  getSourcesNeedingMaintenance,
  getSourcesWithChangedState,
} from "@/lib/sources";

export const LINK_ROT_OBS_SLUG = "link-rot-is-archive-history";
export const LINK_ROT_OBS_ID = "obs-link-rot-is-archive-history";

export const linkRotLead = [
  "紙の本が失われると、",
  "失われたことが分かる。",
  "燃えた。",
  "捨てられた。",
  "所在不明になった。",
  "しかしWebでは、",
  "消失がもっと曖昧に起こる。",
  "昨日まで開けたURLが、",
  "今日は404になる。",
  "記事は残っているが、",
  "URLだけ変わる。",
  "サイト全体が別ドメインへ移る。",
  "本文が更新される。",
  "ログインしなければ読めなくなる。",
  "元記事は消えたのに、",
  "検索結果やAI要約には文章の断片だけが残る。",
  "Web資料は、",
  "保存されるか消えるかの二択ではない。",
  "状態を変えながら残る。",
];

export const linkRotMeta = {
  themes:
    "Web Archive / Link Rot / Source / Provenance / Digital Preservation / Deletion / Migration / Platform / Archive / AI",
  articleStatus: "Published",
  verificationStatus: "Interpretive / evidence-backed",
  lastUpdated: "2026-08-09",
  axisLabel: "Observation Axis — Digital Archive",
};

export const sourceStateModel = [
  { id: "active", label: "Active", labelJa: "現在到達可能" },
  { id: "redirected", label: "Redirected", labelJa: "別URLへ転送" },
  { id: "moved", label: "Moved", labelJa: "公式に移転" },
  { id: "updated", label: "Updated", labelJa: "内容更新" },
  { id: "replaced", label: "Replaced", labelJa: "内容差し替え" },
  { id: "restricted", label: "Restricted", labelJa: "アクセス制限" },
  { id: "login-required", label: "Login required", labelJa: "ログイン必須" },
  { id: "paywalled", label: "Paywalled", labelJa: "有料化" },
  { id: "geo-restricted", label: "Geo-restricted", labelJa: "地域制限" },
  { id: "removed", label: "Removed", labelJa: "削除" },
  { id: "not-found", label: "404", labelJa: "存在しないURL" },
  { id: "gone", label: "410", labelJa: "削除明示" },
  { id: "domain-expired", label: "Domain expired", labelJa: "ドメイン失効" },
  { id: "platform-closed", label: "Platform closed", labelJa: "サービス終了" },
  { id: "account-deleted", label: "Account deleted", labelJa: "アカウント削除" },
  { id: "archived", label: "Archived", labelJa: "保存版あり" },
  { id: "screenshot-only", label: "Screenshot only", labelJa: "画像だけ残る" },
  { id: "citation-only", label: "Citation only", labelJa: "引用だけ残る" },
  {
    id: "search-index-only",
    label: "Search-index only",
    labelJa: "検索結果だけ残る",
  },
  { id: "ai-trace-only", label: "AI-trace only", labelJa: "AI要約等にだけ痕跡" },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
] as const;

export const webSourceTimelineSteps = [
  "Published",
  "Indexed",
  "Cited",
  "Updated",
  "Redirected",
  "Removed",
  "Archived",
  "Fragment survives elsewhere",
] as const;

export const availabilityIdentityRows = [
  {
    left: "URL reachable",
    right: "same content",
    note: "到達可能 ≠ 同一内容",
  },
  {
    left: "URL changed",
    right: "source lost",
    note: "URL変更 ≠ 資料喪失",
  },
  {
    left: "404",
    right: "no archive",
    note: "404 ≠ アーカイブなし",
  },
  {
    left: "archive exists",
    right: "full original context",
    note: "保存あり ≠ 文脈完全",
  },
] as const;

export const versionDiffDimensions = [
  "Title",
  "Date",
  "Author line",
  "Paragraphs",
  "Figures",
  "Links",
  "Quotes",
  "Sources",
  "Conclusion",
  "Unknown",
] as const;

export const soft404Definition = {
  en: "HTTP 200, but the original article is gone — replaced by a home, category, or “not found” page.",
  ja: "HTTP 200だが、元記事はなく、トップや「記事なし」ページへ置換されている状態。",
};

export const fragmentTypes = [
  { id: "web-archive", label: "Web archive", labelJa: "Webアーカイブ" },
  { id: "screenshot", label: "Screenshot", labelJa: "スクリーンショット" },
  { id: "quotation", label: "Quotation", labelJa: "引用" },
  { id: "repost", label: "Repost", labelJa: "転載" },
  { id: "rss", label: "RSS", labelJa: "RSS" },
  { id: "search-snippet", label: "Search snippet", labelJa: "検索断片" },
  { id: "cached-copy", label: "Cached copy", labelJa: "キャッシュ" },
  { id: "email-copy", label: "Email copy", labelJa: "メール" },
  { id: "pdf-copy", label: "PDF copy", labelJa: "PDF" },
  { id: "ai-summary", label: "AI summary", labelJa: "AI要約" },
  { id: "citation", label: "Citation", labelJa: "引用参照" },
  { id: "other", label: "Other", labelJa: "その他" },
] as const;

export const screenshotProvenanceLadder = {
  stronger: [
    "Original URL confirmed",
    "Original source still accessible",
    "Capture timestamp known",
    "Independent archive available",
    "Context preserved",
  ],
  weaker: [
    "URL missing",
    "Context missing",
    "Original deleted",
    "Capture date unknown",
    "Only repost survives",
    "Authenticity unverified",
  ],
};

export const accountStatuses = [
  "active",
  "renamed",
  "private",
  "suspended",
  "deleted",
  "migrated",
  "platform-ended",
  "unknown",
] as const;

export const linkRotDisplayStates = [
  { id: "live-original", label: "Live original", labelJa: "現行原文" },
  { id: "live-modified", label: "Live modified", labelJa: "現行・改変" },
  {
    id: "redirected-original",
    label: "Redirected original",
    labelJa: "転送・同一資料",
  },
  {
    id: "archived-original",
    label: "Archived original",
    labelJa: "アーカイブ原文",
  },
  { id: "fragment-only", label: "Fragment only", labelJa: "断片のみ" },
  { id: "metadata-only", label: "Metadata only", labelJa: "メタデータのみ" },
  { id: "citation-only", label: "Citation only", labelJa: "引用のみ" },
  { id: "ai-trace-only", label: "AI trace only", labelJa: "AI痕跡のみ" },
  {
    id: "completely-unlocated",
    label: "Completely unlocated",
    labelJa: "所在不明",
  },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
] as const;

export const mutationChainSteps = [
  "Original source",
  "Repost",
  "Screenshot",
  "News summary",
  "Search snippet",
  "AI synthesis",
  "Later article",
] as const;

export const mutationRisks = [
  "Context loss",
  "Editing",
  "Compression",
  "Attribution change",
  "Error propagation",
] as const;

export const derivativeDistanceLevels = [
  { distance: 0, label: "Original" },
  { distance: 1, label: "Direct quotation / archive copy" },
  { distance: 2, label: "Repost / summary" },
  { distance: 3, label: "Summary of summary" },
  { distance: "4+", label: "Further derivative" },
  { distance: "?", label: "Unknown" },
] as const;

export const goodLinkRotHandling = [
  "リンクが死んだ",
  "Sourceを残す",
  "SourceStateEvent追加",
  "Last known URL保存",
  "Archive確認",
  "Survival fragments確認",
  "Factへの依存関係維持",
  "Provenance status更新",
] as const;

export const badLinkRotHandling = [
  "リンクが死んだ",
  "Sourceから削除",
  "Factだけ残る",
] as const;

export const dateKinds = [
  {
    id: "publication",
    label: "Publication date",
    labelJa: "記事の日付",
  },
  { id: "updated", label: "Updated date", labelJa: "更新日" },
  {
    id: "archive-capture",
    label: "Archive capture date",
    labelJa: "保存された日",
  },
  {
    id: "research-access",
    label: "Research access date",
    labelJa: "研究で確認した日",
  },
] as const;

export const relatedComingLinkRot = [
  {
    id: "coming-screenshot-only",
    title: "スクリーンショットだけが残る",
    titleEn: "A Screenshot Is Not Provenance",
    status: "available" as const,
    href: "/observations/screenshot-is-not-provenance",
  },
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
    id: "coming-ai-under",
    title: "AI要約の下にあったページ",
    status: "coming" as const,
  },
  {
    id: "coming-url-less-memory",
    title: "URLのない記憶",
    status: "coming" as const,
  },
  {
    id: "coming-archive-not-past",
    title: "Web Archiveは、過去そのものではない",
    status: "coming" as const,
  },
];

export function getLinkRotRepositoryFacts() {
  const audit = getLinkRotAuditSummary();
  const changed = getSourcesWithChangedState();
  const maintenance = getSourcesNeedingMaintenance();
  return {
    audit,
    changedCount: changed.length,
    maintenanceCount: maintenance.length,
    caseStudiesIndexed: false,
  };
}

export const linkRotSources: Source[] = [
  {
    id: "src-lr-sources-registry",
    label: "Diary Observatory — Sources registry",
    category: "editorial",
    status: "verification-pending",
    url: "/sources",
    note: "Fact basis: registered SourceLinkCheck rows and empty state tables.",
  },
  {
    id: "src-lr-link-rot-register",
    label: "Diary Observatory — Link Rot Register",
    category: "editorial",
    status: "verification-pending",
    url: "/sources/link-rot",
    note: "Empty register until a real state change is observed.",
  },
  {
    id: "src-lr-more-sources",
    label: "Observation — more-sources-less-certainty",
    category: "editorial",
    status: "verification-pending",
    url: "/observations/more-sources-less-certainty",
    note: "Related Provenance observation in the same axis family.",
  },
  {
    id: "src-lr-provenance",
    label: "Diary Observatory — Provenance",
    category: "editorial",
    status: "verification-pending",
    url: "/provenance",
    note: "Traceability health is separate from truth status.",
  },
];
