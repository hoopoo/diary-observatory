/**
 * Pain Competition — shared observation model.
 *
 * A cross-page observation network on how a society, while its total burden
 * rises, sorts *whose* pain is "real" instead of reducing pain itself.
 *
 * Design principle: vulnerability is not a fixed attribute of a group.
 * It is a shifting overlap of burdens (income, housing, health, care, …).
 * No attribute is permanently coded as "weak" or "strong" in this model.
 */

import { SITE_NAME, SITE_URL } from "./site";

/* ------------------------------------------------------------------ */
/* Core enums                                                          */
/* ------------------------------------------------------------------ */

/** How a person's pain relates to formal / social recognition — a state, not an identity. */
export type VulnerabilityStatus =
  | "institutionally-recognized"
  | "socially-unrecognized"
  | "temporarily-vulnerable"
  | "structurally-exposed"
  | "contested";

/** Evidence strength for an observation. Keeps assertion and hypothesis separate. */
export type PainEvidenceLevel =
  | "explicit"
  | "observed"
  | "inferred"
  | "hypothesis";

/** Direction that grievance / anger travels. */
export type ConflictDirection =
  | "upward"
  | "horizontal"
  | "inward"
  | "institutional";

/** A dimension of lived burden. Deliberately condition-based, not attribute-based. */
export type BurdenDimension =
  | "income"
  | "assets"
  | "housing"
  | "health"
  | "disability"
  | "employment"
  | "childcare"
  | "caregiving"
  | "debt"
  | "isolation"
  | "residency"
  | "family"
  | "region"
  | "future-anxiety";

export interface PainCompetitionSignal {
  id: string;
  label: string;
  labelJa: string;
  description: string;
  descriptionJa: string;
  evidenceLevel: PainEvidenceLevel;
  conflictDirection: ConflictDirection;
  burdenDimensions: BurdenDimension[];
  /** Who the hostility is visibly pointed at (a neighbouring group). */
  visibleTarget?: string;
  /** The structural cause that is harder to see. */
  hiddenCause?: string;
}

/* ------------------------------------------------------------------ */
/* Bilingual label maps                                               */
/* ------------------------------------------------------------------ */

type Bi = { en: string; ja: string };

export const BURDEN_LABELS: Record<BurdenDimension, Bi> = {
  income: { en: "Income", ja: "所得" },
  assets: { en: "Assets", ja: "資産" },
  housing: { en: "Housing", ja: "住居" },
  health: { en: "Health", ja: "健康" },
  disability: { en: "Disability", ja: "障害" },
  employment: { en: "Employment", ja: "雇用" },
  childcare: { en: "Childcare", ja: "育児" },
  caregiving: { en: "Caregiving", ja: "介護" },
  debt: { en: "Debt", ja: "負債" },
  isolation: { en: "Isolation", ja: "孤立" },
  residency: { en: "Residency", ja: "在留資格" },
  family: { en: "Family", ja: "家族関係" },
  region: { en: "Region", ja: "地域環境" },
  "future-anxiety": { en: "Future anxiety", ja: "将来不安" },
};

export const CONFLICT_LABELS: Record<ConflictDirection, Bi & { note: string }> = {
  upward: {
    en: "Upward",
    ja: "上向き",
    note: "制度・政治・資本・雇用構造へ向かう要求",
  },
  horizontal: {
    en: "Horizontal",
    ja: "水平",
    note: "外国人・女性・高齢者・低所得者など隣接集団への敵意",
  },
  inward: {
    en: "Inward",
    ja: "内向き",
    note: "自己責任化・自己否定・諦め",
  },
  institutional: {
    en: "Institutional",
    ja: "制度的",
    note: "制度改正・再分配・普遍的支援の要求",
  },
};

export const PAIN_EVIDENCE_LABELS: Record<PainEvidenceLevel, Bi> = {
  explicit: { en: "Explicit", ja: "明示" },
  observed: { en: "Observed", ja: "観測" },
  inferred: { en: "Inferred", ja: "推論" },
  hypothesis: { en: "Hypothesis", ja: "仮説" },
};

export const VULNERABILITY_LABELS: Record<VulnerabilityStatus, Bi> = {
  "institutionally-recognized": {
    en: "Institutionally recognized",
    ja: "制度上認定",
  },
  "socially-unrecognized": {
    en: "Socially unrecognized",
    ja: "社会的に不可視",
  },
  "temporarily-vulnerable": {
    en: "Temporarily vulnerable",
    ja: "一時的に脆弱",
  },
  "structurally-exposed": {
    en: "Structurally exposed",
    ja: "構造的に露出",
  },
  contested: { en: "Contested", ja: "係争中" },
};

/* ------------------------------------------------------------------ */
/* Network registry (powers cross-links, listing cards, sitemap)      */
/* ------------------------------------------------------------------ */

export type PainNetworkKey =
  | "clean-society"
  | "market-signals"
  | "competition-of-pain";

export interface PainNetworkNode {
  key: PainNetworkKey;
  /** Observation layer label shown as eyebrow / tag. */
  layer: string;
  path: string;
  /** Primary display title (in the page's own primary language). */
  title: string;
  titleAlt: string;
  subtitle: string;
  cardBlurb: string;
  tags: string[];
  description: string;
  publishedAt: string;
  updatedAt: string;
}

export const PAIN_NETWORK: Record<PainNetworkKey, PainNetworkNode> = {
  "clean-society": {
    key: "clean-society",
    layer: "Clean Society",
    path: "/clean-society/authorized-vulnerability",
    title: "誰が「救済される弱者」なのか",
    titleAlt: "Who Is Allowed to Be Vulnerable?",
    subtitle:
      "社会は苦痛そのものではなく、苦痛を訴える資格を選別し始めている。",
    cardBlurb: "社会は苦痛そのものではなく、苦痛を訴える資格を選別する。",
    tags: ["Vulnerability", "Recognition", "Welfare", "Clean Society", "Support"],
    description:
      "社会は、誰の苦痛を本物と認め、誰の苦痛を疑うのか。「救済される弱者」の選別と水平的な敵意を観測する。",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-02",
  },
  "market-signals": {
    key: "market-signals",
    layer: "Market Signals",
    path: "/market-signals/grievance-economy",
    title: "The Grievance Economy",
    titleAlt: "被害感情の経済圏",
    subtitle:
      "「自分は不当に扱われている」という感情が、政治・メディア・プラットフォームの市場になる。",
    cardBlurb:
      "中間層の不安と被害感情が、政治・メディア・プラットフォームの市場へ変換される。",
    tags: [
      "Grievance",
      "Middle Class",
      "Market Signals",
      "Welfare",
      "Social Division",
    ],
    description:
      "中間層の不安と被害感情が、政治、メディア、広告、SNSプラットフォームの市場へ変換される構造を分析する。",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-02",
  },
  "competition-of-pain": {
    key: "competition-of-pain",
    layer: "The Competition of Pain",
    path: "/the-competition-of-pain",
    title: "The Competition of Pain",
    titleAlt: "痛みの競争",
    subtitle:
      "誰もが傷ついている社会で、私たちは傷を減らすのではなく、誰の傷が本物かを争っている。",
    cardBlurb: "誰もが傷ついている社会で、誰の傷が本物かが競われる。",
    tags: ["Pain", "Recognition", "Social Division", "Exclusion", "Support"],
    description:
      "誰もが傷ついている社会で、苦痛が共有されず、比較・順位づけされる構造を定義する。",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-02",
  },
};

export const PAIN_NETWORK_LIST: PainNetworkNode[] = [
  PAIN_NETWORK["clean-society"],
  PAIN_NETWORK["market-signals"],
  PAIN_NETWORK["competition-of-pain"],
];

/** The directed cross-links required between the three pages. */
export interface PainCrossLink {
  label: string;
  title: string;
  description: string;
  href: string;
}

export const PAIN_CROSS_LINKS: Record<PainNetworkKey, PainCrossLink> = {
  "clean-society": {
    label: "Observation",
    title: PAIN_NETWORK["clean-society"].title,
    description: "制度と社会が、支援される苦痛と疑われる苦痛を選別する。",
    href: PAIN_NETWORK["clean-society"].path,
  },
  "market-signals": {
    label: "Market Signal",
    title: "被害感情は、どのように市場になるのか",
    description:
      "認められない苦痛は、敵を与えられることで、視聴・拡散・投票・購買へ転換される。",
    href: PAIN_NETWORK["market-signals"].path,
  },
  "competition-of-pain": {
    label: "Concept",
    title: PAIN_NETWORK["competition-of-pain"].title,
    description: "社会が苦痛を減らすのではなく、苦痛の正当性を競わせる構造。",
    href: PAIN_NETWORK["competition-of-pain"].path,
  },
};

/** Ordered outbound cross-links for a given node (Phase 6 loop). */
export function crossLinksFor(key: PainNetworkKey): PainCrossLink[] {
  const order: Record<PainNetworkKey, PainNetworkKey[]> = {
    "clean-society": ["market-signals", "competition-of-pain"],
    "market-signals": ["competition-of-pain", "clean-society"],
    "competition-of-pain": ["clean-society", "market-signals"],
  };
  return order[key].map((k) => PAIN_CROSS_LINKS[k]);
}

/* ------------------------------------------------------------------ */
/* Structured data helpers                                            */
/* ------------------------------------------------------------------ */

export function painArticleJsonLd(node: PainNetworkNode) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: node.title,
    alternativeHeadline: node.titleAlt,
    description: node.description,
    datePublished: node.publishedAt,
    dateModified: node.updatedAt,
    inLanguage: "ja",
    keywords: node.tags.join(", "),
    author: {
      "@type": "Organization",
      name: "SHIRO & Co.",
      url: "https://shiroand.io",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}${node.path}`,
  };
}

export function painBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
