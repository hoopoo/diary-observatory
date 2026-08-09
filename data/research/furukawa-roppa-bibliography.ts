import type {
  AcquisitionTask,
  BaseEditionDecision,
  BibliographicClaim,
  EditionComparisonRecord,
  EntrySuitabilityAssessment,
  PersonNameRecord,
  ResearchConflict,
  ResearchDependencyStage,
  ResearchNote,
  Source,
  SourceCopy,
  TOCRecord,
  VolumeBoundaryVerification,
  WriterResearchQueueItem,
} from "@/lib/types";
import {
  ROPPA_EDITION_SHOUBUNSHA_SET_ID,
  roppaEditionResearchSlots,
  roppaEditions,
} from "@/data/editions/furukawa-roppa-showa-diary";
import { roppaVolumeRecords } from "@/data/volumes/furukawa-roppa-showa-diary";

export const ROPPA_BIBLIOGRAPHY_SLUG = "furukawa-roppa-bibliography";
export const ROPPA_BIBLIOGRAPHY_ID = "research-roppa-bibliography";
export const BIBLIOGRAPHY_URL = `/research/${ROPPA_BIBLIOGRAPHY_SLUG}`;
export const FIRST_ENTRY_RESEARCH_URL = "/research/furukawa-roppa-first-entry";

export {
  ROPPA_EDITION_SHOUBUNSHA_SET_ID,
  roppaEditionResearchSlots,
  roppaEditions,
};

export const bibliographyLead = [
  "同じ題名の本でも、同じ資料とは限らない。",
  "出版社が違う。",
  "刊行年が違う。",
  "篇の分け方が違う。",
  "収録期間が違う。",
  "ページ番号が違う。",
  "注釈が違う。",
  "底本が違う。",
  "Entryの日付とページを示すには、まず、どの版を読んだのかを確定する必要がある。",
];

export const bibliographicSourcesCatalog = [
  {
    id: "src-type-national",
    label: "National library catalogue",
    labelJa: "国立図書館書誌",
    reliability: "authoritative-catalogue" as const,
  },
  {
    id: "src-type-public",
    label: "Public library catalogue",
    labelJa: "公共図書館",
    reliability: "institutional-catalogue" as const,
  },
  {
    id: "src-type-university",
    label: "University library catalogue",
    labelJa: "大学図書館",
    reliability: "institutional-catalogue" as const,
  },
  {
    id: "src-type-publisher",
    label: "Publisher catalogue",
    labelJa: "出版社",
    reliability: "official-publisher" as const,
  },
  {
    id: "src-type-colophon",
    label: "Book colophon",
    labelJa: "奥付",
    reliability: "primary-copy" as const,
  },
  {
    id: "src-type-titlepage",
    label: "Title page",
    labelJa: "標題紙",
    reliability: "primary-copy" as const,
  },
  {
    id: "src-type-toc",
    label: "Table of contents",
    labelJa: "目次",
    reliability: "primary-copy" as const,
  },
  {
    id: "src-type-physical",
    label: "Physical copy",
    labelJa: "現物",
    reliability: "primary-copy" as const,
  },
  {
    id: "src-type-digital",
    label: "Digital copy",
    labelJa: "電子資料",
    reliability: "unknown" as const,
  },
  {
    id: "src-type-scholarly",
    label: "Academic bibliography",
    labelJa: "研究書誌",
    reliability: "scholarly-secondary" as const,
  },
  {
    id: "src-type-bookseller",
    label: "Bookseller listing",
    labelJa: "書店情報",
    reliability: "commercial-listing" as const,
  },
  {
    id: "src-type-secondary",
    label: "Secondary reference",
    labelJa: "二次資料",
    reliability: "scholarly-secondary" as const,
  },
];

export const sourcePriorityOrder = [
  "現物の標題紙・奥付",
  "国立図書館等の正式書誌",
  "出版社公式情報",
  "大学・公共図書館書誌",
  "学術書誌",
  "書店・古書情報",
];

export const bibliographicClaims: BibliographicClaim[] = [
  {
    id: "claim-title",
    editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
    claimType: "title",
    claimValue: "古川ロッパ昭和日記",
    normalizedValue: "Furukawa Roppa Shōwa Diary",
    sourceIds: ["src-bib-cinii", "src-bib-shobunsha"],
    sourceLocation: "Catalogue title / publisher announcement",
    reliability: "authoritative-catalogue",
    verificationStatus: "partial",
    notes: "Work title is catalogued. Exact title-page wording per volume remains copy-needed.",
  },
  {
    id: "claim-publisher",
    editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
    claimType: "publisher",
    claimValue: "晶文社",
    sourceIds: ["src-bib-cinii", "src-bib-shobunsha"],
    reliability: "authoritative-catalogue",
    verificationStatus: "partial",
    notes: "Publisher display confirmed in catalogue sources; imprint statements per volume need colophon check.",
  },
  {
    id: "claim-author-roppa",
    editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
    claimType: "author-name",
    claimValue: "古川ロッパ",
    sourceIds: ["src-bib-cinii"],
    reliability: "authoritative-catalogue",
    verificationStatus: "partial",
    notes: "Display / popular name as used on the diary set. Do not overwrite with authority heading.",
  },
  {
    id: "claim-canonical-midoriha",
    claimType: "canonical-name",
    claimValue: "古川緑波",
    sourceIds: ["src-bib-authority"],
    reliability: "authoritative-catalogue",
    verificationStatus: "partial",
    notes: "Authority / legal-name heading. Kept separate from stage/popular name 古川ロッパ.",
  },
  ...roppaVolumeRecords.map(
    (vol): BibliographicClaim => ({
      id: `claim-vol-title-${vol.id}`,
      editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
      volumeId: vol.id,
      claimType: "volume-title",
      claimValue: vol.titleJa,
      normalizedValue: vol.title,
      sourceIds: ["src-bib-cinii", "src-bib-shobunsha"],
      reliability: "authoritative-catalogue",
      verificationStatus: "partial",
      conflictIds: vol.id === "vol-roppa-late" ? ["conflict-late-volume-label"] : undefined,
      notes:
        vol.id === "vol-roppa-late"
          ? "Label forms 晩年篇 / 補巻・晩年篇 may differ by catalogue; confirm against copy."
          : "Volume title from bibliographic architecture; confirm against title page.",
    }),
  ),
  ...roppaVolumeRecords.map(
    (vol): BibliographicClaim => ({
      id: `claim-coverage-${vol.id}`,
      editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
      volumeId: vol.id,
      claimType: "covered-start-date",
      claimValue: vol.coverageLabelJa ?? vol.coverageLabel ?? "Bibliographic verification needed",
      sourceIds: vol.sourceIds.map((id) =>
        id === "src-roppa-cinii-ncid"
          ? "src-bib-cinii"
          : id === "src-roppa-shobunsha"
            ? "src-bib-shobunsha"
            : id,
      ),
      reliability: "institutional-catalogue",
      verificationStatus: "needs-source",
      notes:
        "Coverage label only (year-range style). Not Fact-converted from inferred diary date headings.",
    }),
  ),
];

export const roppaSourceCopies: SourceCopy[] = [];

export const tocRecords: TOCRecord[] = [];

export const volumeBoundaryVerifications: VolumeBoundaryVerification[] =
  roppaVolumeRecords.map((vol) => ({
    volumeId: vol.id,
    editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
    boundaryConfidence: "uncertain",
    sourceCaptureIds: [],
    verificationStatus: "needs-source",
    notes:
      "First/last printed diary date headings not yet verified against a specific copy.",
  }));

export const editionComparisons: EditionComparisonRecord[] = [];

export const bibliographicConflicts: ResearchConflict[] = [
  {
    id: "conflict-late-volume-label",
    editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
    volumeId: "vol-roppa-late",
    topic: "volume-structure",
    sourcePositions: [
      "Catalogue / bibliographic forms use 晩年篇",
      "Some bibliographic notes also mention 補巻・晩年篇 wording",
    ],
    significance: "Affects volume identity and citation label",
    resolutionStatus: "unresolved",
    sourceIds: ["src-bib-cinii", "src-bib-shobunsha"],
    notes:
      "Do not merge labels. Resolve against title page of the held copy before selecting a base volume label.",
  },
];

export const baseEditionDecisions: BaseEditionDecision[] = [
  {
    id: "base-decision-work",
    diaryWorkId: "diary-furukawa-roppa-showa",
    selectedEditionId: null,
    selectedCopyId: null,
    decisionStatus: "not-selected",
    limitations: [
      "No copy-in-hand verification",
      "Pagination unknown",
      "Per-volume imprint not separated",
      "Rights readiness under review",
    ],
    unresolvedIssues: [
      "Confirm imprint year and edition statement per volume",
      "Establish stable page reference",
      "Separate 新装復刊 from the catalogued set if distinct",
      "Resolve late-volume label conflict",
    ],
    sourceIds: ["src-bib-cinii", "src-bib-shobunsha"],
    verificationStatus: "needs-source",
    notes:
      "Catalogued set is known. It is not selected as base text until Hard requirements are met.",
  },
];

export const entrySuitabilityAssessments: EntrySuitabilityAssessment[] = [
  {
    editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
    suitability: "not-reviewed",
    axes: {
      dateHeadings: "unknown",
      pageStability: "unknown",
      volumeClarity: "limited",
      textCompleteness: "unknown",
      accessibility: "unknown",
      citationReproducibility: "unknown",
      rightsHandling: "unknown",
      crossSourceAvailability: "limited",
    },
    reasons: [
      "Volume architecture is catalogued (prewar / wartime / postwar / late years).",
      "No verified printed-page stability yet.",
      "No registered accessible SourceCopy.",
      "Date headings and completeness require copy-in-hand or equivalent digital access.",
    ],
  },
];

export const personNameRecords: PersonNameRecord[] = [
  {
    personId: "writer-furukawa-roppa",
    name: "Roppa Furukawa",
    language: "en",
    script: "Latn",
    nameType: "romanized",
    verificationStatus: "partial",
    notes: "Site display romanization.",
  },
  {
    personId: "writer-furukawa-roppa",
    name: "古川ロッパ",
    language: "ja",
    script: "Jpan",
    nameType: "stage-name",
    verificationStatus: "partial",
    notes: "Popular / stage-name form used on the diary set.",
  },
  {
    personId: "writer-furukawa-roppa",
    name: "古川緑波",
    language: "ja",
    script: "Jpan",
    nameType: "authority-heading",
    verificationStatus: "partial",
    notes: "Authority heading. Keep distinct from 古川ロッパ in bibliographic claims.",
  },
];

export const acquisitionTasks: AcquisitionTask[] = [
  {
    id: "acq-1",
    editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
    taskType: "locate-catalogue",
    targetSource: "NDL / CiNii — per-volume records",
    priority: 1,
    status: "researching",
    expectedResult: "Separated bibliographic records for each volume",
    notes: "CiNii work-level NCID known; deepen to volume-level imprint fields.",
    createdAt: "2026-08-05",
    updatedAt: "2026-08-05",
  },
  {
    id: "acq-2",
    editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
    taskType: "access-physical-copy",
    priority: 2,
    status: "queued",
    expectedResult: "Readable SourceCopy with stable pages",
    createdAt: "2026-08-05",
    updatedAt: "2026-08-05",
  },
  {
    id: "acq-3",
    editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
    taskType: "verify-title-page",
    priority: 3,
    status: "queued",
    expectedResult: "Exact title-page wording per volume",
    createdAt: "2026-08-05",
    updatedAt: "2026-08-05",
  },
  {
    id: "acq-4",
    editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
    taskType: "verify-colophon",
    priority: 3,
    status: "queued",
    expectedResult: "Publisher, year, edition statement, editor",
    createdAt: "2026-08-05",
    updatedAt: "2026-08-05",
  },
  {
    id: "acq-5",
    editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
    taskType: "verify-volume-boundary",
    priority: 4,
    status: "queued",
    expectedResult: "First/last diary date headings and pages",
    createdAt: "2026-08-05",
    updatedAt: "2026-08-05",
  },
  {
    id: "acq-6",
    editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
    taskType: "verify-pagination",
    priority: 5,
    status: "queued",
    expectedResult: "PaginationType and PageReferenceStability",
    createdAt: "2026-08-05",
    updatedAt: "2026-08-05",
  },
  {
    id: "acq-7",
    editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
    taskType: "capture-toc",
    priority: 6,
    status: "queued",
    expectedResult: "TOCRecord entries without inferred coverage dates",
    createdAt: "2026-08-05",
    updatedAt: "2026-08-05",
  },
  {
    id: "acq-8",
    editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
    taskType: "compare-editions",
    priority: 7,
    status: "queued",
    expectedResult: "Separation or identity of 新装復刊 vs catalogued set",
    createdAt: "2026-08-05",
    updatedAt: "2026-08-05",
  },
  {
    id: "acq-9",
    editionId: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
    taskType: "verify-rights",
    priority: 8,
    status: "queued",
    expectedResult: "RightsReadiness for paraphrase / minimal quotation",
    createdAt: "2026-08-05",
    updatedAt: "2026-08-05",
  },
];

export const recommendedResearchOrder = [
  { priority: 1, label: "各篇の正式書誌", labelEn: "Authoritative records for each volume" },
  { priority: 2, label: "閲覧可能な版・個体の確定", labelEn: "Accessible edition / copy" },
  { priority: 3, label: "標題紙・奥付の確認", labelEn: "Title page and colophon" },
  { priority: 4, label: "収録期間と本文境界", labelEn: "Coverage and text boundaries" },
  { priority: 5, label: "ページ体系", labelEn: "Pagination system" },
  { priority: 6, label: "索引・注釈の有無", labelEn: "Indexes and editorial notes" },
  { priority: 7, label: "版間差", labelEn: "Inter-edition differences" },
  { priority: 8, label: "権利方針", labelEn: "Rights policy" },
  { priority: 9, label: "Base edition選定", labelEn: "Base edition selection" },
  { priority: 10, label: "候補日探索", labelEn: "Candidate day research" },
];

export const emptyStateSteps = [
  "正式書誌を取得する",
  "篇ごとの書誌を分離する",
  "現物または電子版を確認する",
  "標題紙と奥付を記録する",
  "最初と最後の日付を確認する",
  "ページ体系を確認する",
  "利用可能性と権利方針を設定する",
  "基準版を暫定選定する",
];

export const baseEditionHardRequirements = [
  { id: "edition", label: "Edition identified", labelJa: "版が特定できる" },
  { id: "publisher", label: "Publisher confirmed", labelJa: "出版社確認" },
  { id: "pubdate", label: "Publication date confirmed", labelJa: "刊行日確認" },
  { id: "coverage", label: "Volume coverage confirmed", labelJa: "篇・収録範囲確認" },
  { id: "stable", label: "Stable reference", labelJa: "ページ参照可能" },
  { id: "access", label: "Full text accessible", labelJa: "本文確認可能" },
  { id: "rights", label: "Rights policy set", labelJa: "権利方針設定" },
  { id: "repro", label: "Source reproducible", labelJa: "第三者が再確認可能" },
];

export const baseEditionPreferred = [
  { id: "index", label: "Index available", labelJa: "索引あり" },
  { id: "notes", label: "Editorial notes available", labelJa: "注釈あり" },
  { id: "chrono", label: "Chronology available", labelJa: "年譜あり" },
  { id: "catalogue", label: "Institutional catalogue", labelJa: "正式書誌あり" },
  { id: "cross", label: "Physical and digital cross-check", labelJa: "複数形式で照合可能" },
];

export const rightsPrinciples = [
  "要約中心",
  "最小限の引用",
  "版・ページ明記",
  "写真転載なし",
  "注釈の長文転載なし",
];

export const architectureLevels = [
  { id: "work", label: "Diary Work", labelJa: "古川ロッパ昭和日記" },
  { id: "volume", label: "Volume", labelJa: "戦前篇・戦中篇・戦後篇・晩年篇等" },
  { id: "edition", label: "Edition", labelJa: "初版・再版・新装版・電子版等" },
  { id: "copy", label: "Physical or digital copy", labelJa: "実際に確認した個体・表示形式" },
  { id: "page", label: "Page or location", labelJa: "ページ・電子位置" },
  { id: "entry", label: "Daily entry", labelJa: "日付単位" },
];

export const bibliographicSources: Source[] = [
  {
    id: "src-bib-cinii",
    category: "verification",
    status: "verification-pending",
    label: "CiNii Books — 古川ロッパ昭和日記 (NCID BN01451714)",
    url: "https://ci.nii.ac.jp/ncid/BN01451714",
    needed: true,
    note: "Work-level catalogue evidence. Per-volume imprint fields still needed.",
  },
  {
    id: "src-bib-shobunsha",
    category: "verification",
    status: "verification-pending",
    label: "晶文社 — 『古川ロッパ昭和日記』新装復刊案内",
    url: "https://www.shobunsha.co.jp/?p=1886",
    needed: true,
    note: "Official publisher announcement. Not a substitute for colophon verification.",
  },
  {
    id: "src-bib-primary",
    category: "primary",
    status: "needed",
    label: "Physical or stable digital copy — title page + colophon",
    needed: true,
    note: "Required before BaseEditionDecision can leave not-selected.",
  },
  {
    id: "src-bib-authority",
    category: "verification",
    status: "needed",
    label: "NDL / authority — 古川緑波（1903–1961）",
    needed: true,
  },
];

export const publicResearchNotes: ResearchNote[] = [
  {
    id: "bib-note-1",
    note: "書店情報だけでは Edition を Verified にしない。標題紙・奥付、または権威ある書誌で支える。",
    noteType: "bibliographic",
    visibility: "public",
    createdAt: "2026-08-05",
    updatedAt: "2026-08-05",
  },
  {
    id: "bib-note-2",
    note: "書誌上の収録期間ラベルと、本文の最初／最後の日付見出しは別レイヤーとして扱う。",
    noteType: "bibliographic",
    visibility: "public",
    createdAt: "2026-08-05",
    updatedAt: "2026-08-05",
  },
];

export const relatedResearchTracks: WriterResearchQueueItem[] = [
  {
    id: "bib-rr-volumes",
    title: "Per-volume catalogues",
    titleJa: "篇ごとの正式書誌",
    type: "bibliography",
    priority: 1,
    status: "source-needed",
    sourceNeeded: true,
  },
  {
    id: "bib-rr-copy",
    title: "Accessible copy registration",
    titleJa: "閲覧可能個体の登録",
    type: "bibliography",
    priority: 2,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "bib-rr-boundary",
    title: "Volume date boundaries",
    titleJa: "篇の日付境界",
    type: "bibliography",
    priority: 3,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "bib-rr-first-entry",
    title: "First indexed day selection",
    titleJa: "最初の一日の選定",
    type: "entry",
    priority: 10,
    status: "queued",
    sourceNeeded: true,
    note: "Blocked until base edition requirements progress.",
  },
];

export const relatedPages = [
  {
    group: "Sources",
    title: "Source Observatory",
    href: "/sources",
  },
  {
    group: "Editions",
    title: "Edition Observatory index",
    href: "/editions",
  },
  {
    group: "Editions",
    title: "Furukawa Roppa Shōwa Diary — Shobunsha set",
    href: "/editions/furukawa-roppa-showa-diary-shobunsha-set",
  },
  {
    group: "Writer",
    title: "Roppa Furukawa",
    href: "/writers/furukawa-roppa",
  },
  {
    group: "Diary",
    title: "Furukawa Roppa Shōwa Diary",
    href: "/diaries/furukawa-roppa-showa-diary",
  },
  {
    group: "Research",
    title: "First Entry Research",
    href: FIRST_ENTRY_RESEARCH_URL,
  },
  {
    group: "Observation",
    title: "Backstage Is Not Recorded",
    href: "/observations/backstage-is-not-recorded",
  },
];

export function computeBibliographyStatus() {
  const verifiedEditions = roppaEditions.filter(
    (e) => e.verificationStatus === "verified",
  ).length;
  const verifiedVolumes = roppaVolumeRecords.filter(
    (v) => v.verificationStatus === "verified",
  ).length;
  const verifiedBoundaries = volumeBoundaryVerifications.filter(
    (b) => b.verificationStatus === "verified",
  ).length;
  const accessibleCopies = roppaSourceCopies.filter(
    (c) =>
      c.accessStatus === "accessible" ||
      c.accessStatus === "limited" ||
      c.accessStatus === "onsite-only",
  ).length;
  const stablePageEditions = roppaEditions.filter(
    (e) =>
      e.pageReferenceStability === "stable-printed-page" ||
      e.pageReferenceStability === "stable-image-page",
  ).length;
  const rightsReady = roppaEditions.filter(
    (e) =>
      e.rightsReadiness === "quotation-ready" ||
      e.rightsReadiness === "paraphrase-only",
  ).length;
  const selectedBases = baseEditionDecisions.filter(
    (d) =>
      d.decisionStatus === "selected" || d.decisionStatus === "provisional",
  ).length;
  const criticalConflicts = bibliographicConflicts.filter(
    (c) =>
      c.resolutionStatus === "unresolved" ||
      c.resolutionStatus === "disputed",
  ).length;

  return {
    knownEditions: roppaEditions.length,
    verifiedEditions,
    knownVolumes: roppaVolumeRecords.length,
    verifiedVolumes,
    verifiedVolumeBoundaries: verifiedBoundaries,
    accessibleCopies,
    stablePageEditions,
    rightsReadyEditions: rightsReady,
    baseEditionsSelected: selectedBases,
    criticalConflicts,
    researchSlots: roppaEditionResearchSlots.length,
    researchStatus: "Active" as const,
    verificationStatus: "Partial" as const,
    selectedBaseEditionId:
      baseEditionDecisions.find(
        (d) =>
          d.decisionStatus === "selected" ||
          d.decisionStatus === "provisional",
      )?.selectedEditionId ?? null,
    lastUpdated: "2026-08-05",
  };
}

export function computeResearchDependency(): ResearchDependencyStage[] {
  const status = computeBibliographyStatus();
  const baseSelected = status.baseEditionsSelected > 0;
  const boundariesReady = status.verifiedVolumeBoundaries > 0;
  const hasAccessible = status.accessibleCopies > 0;

  return [
    {
      id: "bibliography",
      label: "Bibliography",
      labelJa: "書誌",
      status: status.verifiedEditions > 0 ? "ready" : "partial",
      note: "Multi-volume set catalogued; imprint details source-needed.",
    },
    {
      id: "base-edition",
      label: "Base edition",
      labelJa: "基準版",
      status: baseSelected ? "partial" : "blocked",
      note: "Decision status: not-selected.",
    },
    {
      id: "volume-boundary",
      label: "Volume boundary",
      labelJa: "篇境界",
      status: boundariesReady ? "ready" : "not-started",
    },
    {
      id: "candidate-day",
      label: "Candidate day",
      labelJa: "候補日",
      status: baseSelected && hasAccessible ? "partial" : "blocked",
      note: "Blocked by bibliography until base edition and access progress.",
    },
    {
      id: "source-capture",
      label: "Source capture",
      labelJa: "根拠採取",
      status: "not-started",
    },
    {
      id: "entry-package",
      label: "Entry research package",
      labelJa: "Entry研究パッケージ",
      status: "not-started",
    },
    {
      id: "published-entry",
      label: "Published Entry",
      labelJa: "公開Entry",
      status: "not-started",
    },
  ];
}

/** Diary Work consumption surface — verified vs partial fields only. */
export function getDiaryWorkBibliographySummary() {
  const status = computeBibliographyStatus();
  return {
    researchUrl: BIBLIOGRAPHY_URL,
    researchStatus: status.researchStatus,
    verificationStatus: status.verificationStatus,
    volumes: roppaVolumeRecords.map((v) => ({
      id: v.id,
      titleJa: v.titleJa,
      coverageLabelJa: v.coverageLabelJa,
      coveredDatePrecision: v.coveredDatePrecision,
      verificationStatus: v.verificationStatus,
      rightsStatus: v.rightsStatus,
    })),
    editions: roppaEditions.map((e) => ({
      id: e.id,
      titleJa: e.titleJa ?? e.title,
      publisher: e.publisher,
      editionLabel: e.editionLabel,
      verificationStatus: e.verificationStatus,
      rightsStatus: e.rightsStatus,
      entrySuitability: e.entrySuitability,
      rightsReadiness: e.rightsReadiness,
    })),
    selectedBaseEditionId: status.selectedBaseEditionId,
    criticalConflicts: status.criticalConflicts,
  };
}
