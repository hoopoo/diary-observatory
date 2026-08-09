import type { Source } from "@/lib/types";
import {
  kafu1918SourceLayers,
  kafu1918UnknownClaims,
} from "@/data/provenance/kafu-1918-01-01";
import { nishimura2011SourceLayers } from "@/data/provenance/nishimura-2011-05-02";
import {
  getEntryExcavationStatus,
  getEntryProvenanceSummary,
  getFactClaimsForEntry,
} from "@/lib/provenance";

export const MORE_SOURCES_OBS_SLUG = "more-sources-less-certainty";
export const MORE_SOURCES_OBS_ID = "obs-more-sources-less-certainty";

export const moreSourcesLead = [
  "一つの出来事について、",
  "資料が一つしかなければ不安になる。",
  "では、",
  "資料が十個あれば安心できるのか。",
  "日記。",
  "新聞。",
  "雑誌。",
  "私小説。",
  "インタビュー。",
  "テレビ。",
  "ブログ。",
  "SNS。",
  "動画。",
  "スクリーンショット。",
  "AIによる要約。",
  "記録が増えるほど、",
  "事実は明確になるように見える。",
  "しかし、",
  "資料は同じ出来事を",
  "同じようには記録しない。",
  "本人の日記。",
  "編集された文章。",
  "後年の回想。",
  "演出されたテレビ。",
  "削除されたSNS投稿。",
  "転載されたスクリーンショット。",
  "AIが再要約した文章。",
  "資料が増えるほど、",
  "「どの資料が何を証明しているのか」",
  "という問題も増えていく。",
];

export const moreSourcesMeta = {
  primaryComparison: "Two Days, Two Provenances",
  primaryComparisonHref: "/compare/two-days-two-provenances",
  themes:
    "Provenance / Evidence / Archive / Media / Diary / Fiction / Television / Web / Social Media / AI / Verification / Memory",
  articleStatus: "Published",
  verificationStatus: "Interpretive / evidence-backed",
  lastUpdated: "2026-08-09",
};

export function getKafuCaseStudy() {
  const entryId = "entry-1918-01-01";
  const summary = getEntryProvenanceSummary(entryId);
  const excavation = getEntryExcavationStatus(entryId);
  const facts = getFactClaimsForEntry(entryId);
  return {
    entryId,
    href: "/entries/1918-01-01-kafu-nagai",
    label: "Kafū 1918",
    labelJa: "荷風1918",
    problem: "missing bibliography",
    problemJa: "書誌経路の空白",
    completeness: excavation.completeness,
    provenanceLabel: excavation.label,
    primaryRisk: "Bibliographic gap",
    known: [
      "Writer",
      "Diary Work",
      "Entry",
      `FactClaims (${facts.length})`,
      "Observation / Interpretation mapped",
    ],
    missing: [
      "Edition",
      "Page",
      "SourceCopy",
      "SourceCapture",
      "DailyBoundary",
      "Rights review",
      "Cross-check",
    ],
    unknownCount: kafu1918UnknownClaims.length,
    sourceLayers: kafu1918SourceLayers.map((l) => ({
      id: l.id,
      layerType: l.layerType,
      role: l.role,
      verificationStatus: l.verificationStatus,
      notes: l.notes,
    })),
    factClaims: summary.factClaims,
    fullySourcedFacts: summary.fullySourcedFacts,
    partialPaths: summary.partialPaths,
  };
}

export function getNishimuraCaseStudy() {
  const entryId = "entry-2011-05-02";
  const summary = getEntryProvenanceSummary(entryId);
  const excavation = getEntryExcavationStatus(entryId);
  const facts = getFactClaimsForEntry(entryId);
  return {
    entryId,
    href: "/entries/2011-05-02-kenji-nishimura",
    label: "Nishimura 2011",
    labelJa: "西村2011",
    problem: "multiple source layers",
    problemJa: "複線的な資料層",
    completeness: excavation.completeness,
    provenanceLabel: excavation.label,
    primaryRisk: "Source-layer confusion risk (layers registered separately)",
    known: [
      "Writer",
      "Indexed Entry",
      `FactClaims (${facts.length})`,
      ...nishimura2011SourceLayers.map(
        (l) => `${l.layerType} · ${l.role} · ${l.verificationStatus}`,
      ),
    ],
    missing: [
      "Edition (primary diary)",
      "Page / SourceCapture",
      "Full rights review for diary text",
    ],
    sourceLayers: nishimura2011SourceLayers.map((l) => ({
      id: l.id,
      layerType: l.layerType,
      role: l.role,
      verificationStatus: l.verificationStatus,
      notes: l.notes,
      sourceIds: l.sourceIds,
      factClaimIds: l.factClaimIds,
    })),
    factClaims: summary.factClaims,
    fullySourcedFacts: summary.fullySourcedFacts,
    partialPaths: summary.partialPaths,
  };
}

export const selfRecordMatrix = [
  {
    medium: "Private diary",
    mediumJa: "私的日記",
    audience: "Often self / limited",
    editing: "Usually light / unknown",
    temporal: "Contemporary",
    publicness: "Low → may become public later",
    usefulFor: "dated self-record / sequence hints",
    cautionFor: "objective event / motive / completeness",
  },
  {
    medium: "Published diary",
    mediumJa: "刊行日記",
    audience: "Readers / market",
    editing: "Edited / editioned",
    temporal: "Contemporary → delayed",
    publicness: "High",
    usefulFor: "stated day / editorial presentation",
    cautionFor: "cuts, apparatus, edition variance",
  },
  {
    medium: "Essay",
    mediumJa: "随筆",
    audience: "Public readers",
    editing: "Edited",
    temporal: "Often retrospective",
    publicness: "High",
    usefulFor: "themes / self-presentation",
    cautionFor: "chronology / exact day events",
  },
  {
    medium: "Autofiction",
    mediumJa: "私小説",
    audience: "Literary public",
    editing: "Literary transformation",
    temporal: "Often delayed",
    publicness: "High",
    usefulFor: "represented life / motifs",
    cautionFor: "biography Fact without corroboration",
  },
  {
    medium: "Interview",
    mediumJa: "インタビュー",
    audience: "Public / media",
    editing: "Edited / framed",
    temporal: "Often retrospective",
    publicness: "High",
    usefulFor: "what was said in that frame",
    cautionFor: "memory edits / prompting / cuts",
  },
  {
    medium: "TV appearance",
    mediumJa: "テレビ出演",
    audience: "Broadcast public",
    editing: "Edited / timed",
    temporal: "Recording ≠ broadcast",
    publicness: "High",
    usefulFor: "recorded appearance / spoken lines if dated",
    cautionFor: "unedited truth / full duration / off-camera",
  },
  {
    medium: "Social post",
    mediumJa: "SNS投稿",
    audience: "Network / platform",
    editing: "Editable / deletable",
    temporal: "Often near-contemporary",
    publicness: "Semi-public → mutable",
    usefulFor: "dated self-record / visible claim",
    cautionFor: "private diary identity / deleted context",
  },
  {
    medium: "Memoir",
    mediumJa: "回想",
    audience: "Public",
    editing: "Heavily shaped",
    temporal: "Retrospective",
    publicness: "High",
    usefulFor: "later self-narration",
    cautionFor: "earlier day Facts without support",
  },
];

export const provenanceFailureModes = [
  {
    id: "bibliographic-gap",
    label: "Bibliographic gap",
    labelJa: "版・ページ不明",
  },
  { id: "source-loss", label: "Source loss", labelJa: "原資料消失" },
  {
    id: "source-layer-collapse",
    label: "Source-layer collapse",
    labelJa: "資料層混同",
  },
  {
    id: "retrospective-distortion",
    label: "Retrospective distortion",
    labelJa: "後年回想",
  },
  {
    id: "literary-transformation",
    label: "Literary transformation",
    labelJa: "作品化",
  },
  {
    id: "editorial-compression",
    label: "Editorial compression",
    labelJa: "編集",
  },
  { id: "context-loss", label: "Context loss", labelJa: "文脈消失" },
  {
    id: "derivative-duplication",
    label: "Derivative duplication",
    labelJa: "転載増殖",
  },
  { id: "link-rot", label: "Link rot", labelJa: "リンク切れ" },
  {
    id: "screenshot-isolation",
    label: "Screenshot isolation",
    labelJa: "スクリーンショット単独化",
  },
  { id: "ai-compression", label: "AI compression", labelJa: "AI要約" },
  {
    id: "conflict-suppression",
    label: "Conflict suppression",
    labelJa: "矛盾消失",
  },
  {
    id: "unknown-suppression",
    label: "Unknown suppression",
    labelJa: "不明の消失",
  },
];

export const historicalSourceStack = [
  {
    era: "1910s",
    forms: ["diary", "letters", "newspaper", "print", "institutional archive"],
  },
  {
    era: "1950s",
    forms: ["diary", "print", "radio", "film", "television begins"],
  },
  {
    era: "1990s",
    forms: ["print", "TV", "phone", "early digital records"],
  },
  {
    era: "2010s",
    forms: ["print", "TV", "web", "social media", "smartphones"],
  },
  {
    era: "2020s+",
    forms: ["all above", "cloud", "platform archives", "AI synthesis"],
  },
];

export const relatedComingMoreSources = [
  {
    id: "coming-link-rot",
    title: "リンク切れもまた資料史である",
    titleEn: "Link Rot Is Also Archive History",
    status: "available" as const,
    href: "/observations/link-rot-is-archive-history",
  },
  {
    id: "coming-sns-diary",
    title: "SNSは日記なのか",
    titleEn: "Is Social Media a Diary?",
    status: "available" as const,
    href: "/observations/is-social-media-a-diary",
  },
  {
    id: "coming-ai-under",
    title: "AI要約の下にある資料",
    status: "coming" as const,
  },
  {
    id: "coming-screenshot-only",
    title: "スクリーンショットだけが残る",
    titleEn: "A Screenshot Is Not Provenance",
    status: "available" as const,
    href: "/observations/screenshot-is-not-provenance",
  },
  {
    id: "coming-overrecorded-day",
    title: "記録されすぎた一日",
    status: "coming" as const,
  },
];

export const moreSourcesSources: Source[] = [
  {
    id: "src-mslc-kafu-entry",
    label: "Diary Observatory — Kafū 1918-01-01 Entry",
    category: "editorial",
    status: "verification-pending",
    url: "/entries/1918-01-01-kafu-nagai",
    note: "Fact basis: current repository ProvenanceSummary for this entry.",
  },
  {
    id: "src-mslc-nishimura-entry",
    label: "Diary Observatory — Nishimura 2011-05-02 Entry",
    category: "editorial",
    status: "verification-pending",
    url: "/entries/2011-05-02-kenji-nishimura",
    note: "Fact basis: EntrySourceLayers and claim mapping in repository.",
  },
  {
    id: "src-mslc-provenance",
    label: "Diary Observatory — Provenance health",
    category: "editorial",
    status: "verification-pending",
    url: "/provenance",
    note: "Observatory structure for trails, unknowns, completeness.",
  },
  {
    id: "src-mslc-compare",
    label: "Two Days, Two Provenances",
    category: "editorial",
    status: "verification-pending",
    url: "/compare/two-days-two-provenances",
    note: "Primary comparison for this Observation.",
  },
  {
    id: "src-mslc-horoki",
    label: "Hōrōki diary work page",
    category: "editorial",
    status: "verification-pending",
    url: "/diaries/horoki",
    note: "Case study context: diary-derived published text / edition layers.",
  },
  {
    id: "src-mslc-roppa-research",
    label: "Furukawa Roppa first-entry research",
    category: "editorial",
    status: "verification-pending",
    url: "/research/furukawa-roppa-first-entry",
    note: "Case study: primary-source research not yet complete.",
  },
];
