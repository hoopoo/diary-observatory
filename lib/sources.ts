import type {
  ArchiveCaptureRecord,
  CitationGhostRecord,
  DerivativeDistance,
  FactClaim,
  InterpretationClaim,
  ObservationClaim,
  ResearchConflict,
  SearchSnippetRecord,
  Source,
  SourceClaimReliability,
  SourceCollection,
  SourceCopy,
  SourceLinkCheck,
  SourceMaintenanceTask,
  SourceReadinessItem,
  SourceState,
  SourceStateEvent,
  SourceStateImpact,
  SourceSurvivalFragment,
  SourceUrlRecord,
  SourceUsage,
  SourceVersionRecord,
  UniqueSourceRisk,
} from "@/lib/types";
import { getAllEditions, getEditionById } from "@/lib/editions";
import {
  getPublicRegistrySources,
  registrySources,
  sourceClaimReliabilities,
  sourceCollections,
  sourceLinkChecks,
} from "@/data/sources/index";
import { archiveCaptureRecords } from "@/data/archive-captures";
import { sourceStateEvents } from "@/data/source-state-events";
import {
  sourceMaintenanceTasks,
  sourceVersionRecords,
} from "@/data/source-maintenance-tasks";
import {
  citationGhostRecords,
  searchSnippetRecords,
  sourceSurvivalFragments,
} from "@/data/source-survival-fragments";
import {
  redirectRecords,
  sourceUrlRecords,
} from "@/data/source-url-records";
import { getDiaryById } from "@/data/diaries";
import { getWriterById } from "@/data/writers";
import {
  bibliographicClaims as roppaClaims,
  bibliographicConflicts as roppaConflicts,
  roppaSourceCopies,
} from "@/data/research/furukawa-roppa-bibliography";

const emptyCaptures: never[] = [];
const emptyFacts: FactClaim[] = [];
const emptyObservations: ObservationClaim[] = [];
const emptyInterpretations: InterpretationClaim[] = [];

export function getAllSources(): Source[] {
  return getPublicRegistrySources();
}

export function getSourceById(id: string): Source | undefined {
  return (
    registrySources.find((s) => s.id === id) ??
    registrySources.find((s) => s.legacyIds?.includes(id))
  );
}

export function getSourceBySlug(slug: string): Source | undefined {
  return getPublicRegistrySources().find((s) => s.slug === slug);
}

export function getSourcesByWriterId(writerId: string): Source[] {
  return getAllSources().filter((s) => s.relatedWriterIds?.includes(writerId));
}

export function getSourcesByDiaryWorkId(workId: string): Source[] {
  return getAllSources().filter((s) =>
    s.relatedDiaryWorkIds?.includes(workId),
  );
}

export function getSourcesByEditionId(editionId: string): Source[] {
  const edition = getEditionById(editionId);
  if (!edition) return [];
  const related = new Set<string>([
    ...(edition.sourceIds ?? []),
    ...(edition.bibliographicClaimIds
      ?.map((cid) => roppaClaims.find((c) => c.id === cid)?.sourceIds ?? [])
      .flat() ?? []),
  ]);
  return getAllSources().filter(
    (s) =>
      related.has(s.id) ||
      s.legacyIds?.some((lid) => related.has(lid)) ||
      s.editionId === editionId ||
      (edition.workId && s.relatedDiaryWorkIds?.includes(edition.workId)),
  );
}

export function getSourcesByEntryId(entryId: string): Source[] {
  return getAllSources().filter((s) => s.relatedEntryIds?.includes(entryId));
}

export function getSourcesByEntityId(entityId: string): Source[] {
  return getAllSources().filter((s) => s.relatedEntityIds?.includes(entityId));
}

export function getSourcesByObservationId(observationId: string): Source[] {
  return getAllSources().filter((s) =>
    s.relatedObservationIds?.includes(observationId),
  );
}

export function getSourcesByComparisonId(comparisonId: string): Source[] {
  return getAllSources().filter((s) =>
    s.relatedComparisonIds?.includes(comparisonId),
  );
}

export function getSourceCopies(sourceId: string): SourceCopy[] {
  const source = getSourceById(sourceId);
  if (!source) return [];
  const ids = new Set([source.id, ...(source.legacyIds ?? [])]);
  // SourceCopy links to edition, not source — return empty until wired
  return roppaSourceCopies.filter(
    (c) => c.sourceIds?.some((sid) => ids.has(sid)),
  );
}

export function getSourceCaptures(sourceId: string) {
  void sourceId;
  return emptyCaptures;
}

export function getFactClaimsBySource(sourceId: string): FactClaim[] {
  void sourceId;
  return emptyFacts;
}

export function getObservationClaimsBySource(
  sourceId: string,
): ObservationClaim[] {
  void sourceId;
  return emptyObservations;
}

export function getInterpretationClaimsBySource(
  sourceId: string,
): InterpretationClaim[] {
  void sourceId;
  return emptyInterpretations;
}

export function getConflictsBySource(sourceId: string): ResearchConflict[] {
  const source = getSourceById(sourceId);
  if (!source) return [];
  const ids = new Set([source.id, ...(source.legacyIds ?? [])]);
  return roppaConflicts.filter((c) => c.sourceIds.some((sid) => ids.has(sid)));
}

export function getClaimReliabilitiesForSource(
  sourceId: string,
): SourceClaimReliability[] {
  return sourceClaimReliabilities.filter((r) => r.sourceId === sourceId);
}

export function getSourceLinkStatus(sourceId: string): SourceLinkCheck[] {
  return sourceLinkChecks.filter((c) => c.sourceId === sourceId);
}

export function getSourcesByCollectionId(collectionId: string): Source[] {
  const col = sourceCollections.find((c) => c.id === collectionId);
  if (!col) return [];
  return col.sourceIds
    .map((id) => getSourceById(id))
    .filter((s): s is Source => Boolean(s));
}

export function getCollectionsForSource(sourceId: string): SourceCollection[] {
  return sourceCollections.filter((c) => c.sourceIds.includes(sourceId));
}

export function getAllSourceCollections(): SourceCollection[] {
  return sourceCollections;
}

export function getSourceDisplayTitle(source: Source): string {
  return source.titleJa ?? source.title ?? source.label;
}

export function getSourceUsage(sourceId: string): SourceUsage {
  const source = getSourceById(sourceId);
  if (!source) {
    return {
      writers: [],
      diaryWorks: [],
      editions: [],
      entries: [],
      entities: [],
      observations: [],
      comparisons: [],
      researchWorkspaces: [],
      factClaimCount: 0,
      observationClaimCount: 0,
      interpretationClaimCount: 0,
    };
  }

  const writers = (source.relatedWriterIds ?? [])
    .map((id) => getWriterById(id))
    .filter(Boolean)
    .map((w) => ({ id: w!.id, slug: w!.slug, name: w!.name }));

  const diaryWorks = (source.relatedDiaryWorkIds ?? [])
    .map((id) => getDiaryById(id))
    .filter(Boolean)
    .map((d) => ({
      id: d!.id,
      slug: d!.slug,
      title: d!.titleOriginal ?? d!.title,
    }));

  const editions = getAllEditions()
    .filter((e) =>
      source.relatedDiaryWorkIds?.includes(e.workId) ||
      e.sourceIds.some(
        (sid) =>
          sid === source.id || source.legacyIds?.includes(sid),
      ),
    )
    .map((e) => ({
      id: e.id,
      slug: e.slug,
      title: e.titleJa ?? e.title,
    }));

  const researchWorkspaces = (source.researchWorkspaceIds ?? []).map((id) => {
    if (id.startsWith("/")) {
      return { id, href: id, title: id };
    }
    const href =
      id === "research-roppa-bibliography"
        ? "/research/furukawa-roppa-bibliography"
        : id === "research-roppa-first-entry"
          ? "/research/furukawa-roppa-first-entry"
          : `/research/${id}`;
    return { id, href, title: href };
  });

  // Known hard links for Roppa biblio sources
  if (
    source.id === "src-cinii-roppa-showa-diary" ||
    source.id === "src-shobunsha-roppa-reprint"
  ) {
    const known = [
      {
        id: "research-roppa-bibliography",
        href: "/research/furukawa-roppa-bibliography",
        title: "Furukawa Roppa bibliography",
      },
      {
        id: "research-roppa-first-entry",
        href: "/research/furukawa-roppa-first-entry",
        title: "Furukawa Roppa first entry research",
      },
    ];
    for (const k of known) {
      if (!researchWorkspaces.some((r) => r.href === k.href)) {
        researchWorkspaces.push(k);
      }
    }
  }

  return {
    writers,
    diaryWorks,
    editions,
    entries: [],
    entities: [],
    observations: [],
    comparisons: [],
    researchWorkspaces,
    factClaimCount: getFactClaimsBySource(sourceId).length,
    observationClaimCount: getObservationClaimsBySource(sourceId).length,
    interpretationClaimCount:
      getInterpretationClaimsBySource(sourceId).length,
  };
}

export function getSourceReadiness(sourceId: string): SourceReadinessItem[] {
  const source = getSourceById(sourceId);
  if (!source) return [];
  const copies = getSourceCopies(sourceId);
  const captures = getSourceCaptures(sourceId);
  const claims = getFactClaimsBySource(sourceId);
  const conflicts = getConflictsBySource(sourceId);
  const links = getSourceLinkStatus(sourceId);
  const reliabilities = getClaimReliabilitiesForSource(sourceId);

  return [
    {
      id: "identity",
      label: "Identity",
      labelJa: "資料識別",
      state: source.title || source.label ? "ready" : "blocked",
    },
    {
      id: "author-institution",
      label: "Author / institution",
      labelJa: "著者・機関",
      state:
        source.authorLabel || source.publisher || source.institution
          ? "partial"
          : "not-checked",
    },
    {
      id: "publication-date",
      label: "Publication date",
      labelJa: "刊行日",
      state: source.publicationDate ? "ready" : "not-checked",
    },
    {
      id: "edition-volume",
      label: "Edition / volume",
      labelJa: "版・巻",
      state: source.editionId || source.volumeId ? "partial" : "not-applicable",
    },
    {
      id: "access",
      label: "Access",
      labelJa: "閲覧",
      state:
        source.accessStatus === "accessible"
          ? "partial"
          : source.url
            ? "partial"
            : "blocked",
      note: "URL registered is not the same as examined access",
    },
    {
      id: "relevant-section",
      label: "Relevant section",
      labelJa: "該当箇所",
      state: captures.length ? "ready" : "not-checked",
    },
    {
      id: "capture",
      label: "Capture",
      labelJa: "根拠記録",
      state: captures.length ? "ready" : "not-checked",
    },
    {
      id: "rights",
      label: "Rights",
      labelJa: "権利",
      state:
        source.rightsReadiness === "quotation-ready" ||
        source.rightsReadiness === "paraphrase-only" ||
        source.rightsReadiness === "public-domain"
          ? "partial"
          : "not-checked",
    },
    {
      id: "claim-mapping",
      label: "Claim mapping",
      labelJa: "主張との接続",
      state: reliabilities.length || claims.length ? "partial" : "not-checked",
    },
    {
      id: "cross-check",
      label: "Cross-check",
      labelJa: "照合",
      state: "not-checked",
    },
    {
      id: "conflicts",
      label: "Conflicts",
      labelJa: "矛盾",
      state: conflicts.length ? "blocked" : "ready",
    },
    {
      id: "link-health",
      label: "Link health",
      labelJa: "リンク状態",
      state: links.some((l) => l.status === "not-checked")
        ? "not-checked"
        : links.length
          ? "partial"
          : "not-applicable",
    },
  ];
}

export function getSourceIndexStatistics() {
  const sources = getAllSources();
  const primary = sources.filter((s) => s.sourceLevel === "primary").length;
  const secondary = sources.filter((s) => s.sourceLevel === "secondary").length;
  const verified = sources.filter((s) => s.status === "verified").length;
  const partial = sources.filter(
    (s) => s.status === "verification-pending",
  ).length;
  const needed = sources.filter((s) => s.status === "needed").length;
  const withCaptures = sources.filter(
    (s) => (s.sourceCaptureIds?.length ?? 0) > 0,
  ).length;
  const withConflicts = sources.filter(
    (s) => getConflictsBySource(s.id).length > 0,
  ).length;
  const unused = sources.filter((s) => {
    const u = getSourceUsage(s.id);
    return (
      u.writers.length === 0 &&
      u.diaryWorks.length === 0 &&
      u.editions.length === 0 &&
      u.researchWorkspaces.length === 0 &&
      u.factClaimCount === 0
    );
  }).length;
  const rightsReview = sources.filter(
    (s) => s.rightsReadiness === "under-review",
  ).length;
  const uncheckedLinks = sourceLinkChecks.filter(
    (l) => l.status === "not-checked",
  ).length;

  return {
    total: sources.length,
    primary,
    secondary,
    verified,
    partial,
    needed,
    accessibleCopies: 0,
    examinedCopies: 0,
    withCaptures,
    withConflicts,
    unused,
    rightsReview,
    uncheckedLinks,
  };
}

export function getSourceDashboard(sourceId: string) {
  return {
    copiesLocated: getSourceCopies(sourceId).length,
    copiesExamined: 0,
    captures: getSourceCaptures(sourceId).length,
    factClaims: getFactClaimsBySource(sourceId).length,
    observations: getObservationClaimsBySource(sourceId).length,
    interpretations: getInterpretationClaimsBySource(sourceId).length,
    usedPages: 0,
    conflicts: getConflictsBySource(sourceId).length,
    rightsIssues:
      getSourceById(sourceId)?.rightsReadiness === "under-review" ||
      getSourceById(sourceId)?.rightsReadiness === "permission-required"
        ? 1
        : 0,
    linkIssues: getSourceLinkStatus(sourceId).filter(
      (l) =>
        l.status === "not-checked" ||
        l.status === "unavailable" ||
        l.status === "restricted",
    ).length,
  };
}

/* ── Link rot / Source state ── */

export function isWebLikeSource(source: Source): boolean {
  if (source.url?.startsWith("http://") || source.url?.startsWith("https://")) {
    return true;
  }
  return (
    source.format === "webpage" ||
    source.kind === "digital-platform" ||
    source.kind === "contemporary-media"
  );
}

export function getSourceStateHistory(sourceId: string): SourceStateEvent[] {
  return sourceStateEvents
    .filter((e) => e.sourceId === sourceId)
    .sort((a, b) => a.observedAt.localeCompare(b.observedAt));
}

/**
 * Current state. Never promotes unchecked URLs to active/reachable.
 * Non-Web sources without explicit state → unknown (callers may show N/A).
 */
export function getSourceState(sourceId: string): SourceState {
  const source = getSourceById(sourceId);
  if (!source) return "unknown";
  if (source.currentSourceState) return source.currentSourceState;

  const history = getSourceStateHistory(sourceId);
  if (history.length > 0) {
    return history[history.length - 1]!.state;
  }

  if (!isWebLikeSource(source)) return "unknown";

  const checks = getSourceLinkStatus(sourceId);
  if (checks.length === 0) return "unknown";

  const latest = [...checks].sort((a, b) =>
    (a.checkedAt ?? "").localeCompare(b.checkedAt ?? ""),
  )[checks.length - 1]!;

  switch (latest.status) {
    case "unavailable":
      return latest.httpStatus === 410 ? "gone" : "not-found";
    case "restricted":
      return "restricted";
    case "login-required":
      return "login-required";
    case "archived-available":
      return "archived";
    case "redirected":
      return "redirected";
    case "moved":
      return "moved";
    case "reachable":
      if (latest.contentAvailability === "generic-page") return "replaced";
      if (latest.contentAvailability === "modified-content") return "updated";
      if (latest.redirectedUrl) return "redirected";
      return "active";
    case "not-checked":
    default:
      return "unknown";
  }
}

export function getSourceUrlHistory(sourceId: string): SourceUrlRecord[] {
  return sourceUrlRecords.filter((r) => r.sourceId === sourceId);
}

export function getSourceVersions(sourceId: string): SourceVersionRecord[] {
  return sourceVersionRecords.filter((r) => r.sourceId === sourceId);
}

export function getSourceSurvivalFragments(
  sourceId: string,
): SourceSurvivalFragment[] {
  return sourceSurvivalFragments.filter(
    (f) => f.originalSourceId === sourceId,
  );
}

export function getArchiveCaptures(sourceId: string): ArchiveCaptureRecord[] {
  return archiveCaptureRecords.filter((r) => r.sourceId === sourceId);
}

export function getRedirectRecords(sourceId: string) {
  return redirectRecords.filter((r) => r.sourceId === sourceId);
}

export function getSearchSnippets(sourceId: string): SearchSnippetRecord[] {
  return searchSnippetRecords.filter((r) => r.sourceId === sourceId);
}

export function getCitationGhosts(sourceId: string): CitationGhostRecord[] {
  return citationGhostRecords.filter((r) => r.originalSourceId === sourceId);
}

export function getSourceMaintenanceTasks(
  sourceId: string,
): SourceMaintenanceTask[] {
  return sourceMaintenanceTasks.filter((t) => t.sourceId === sourceId);
}

/**
 * Derivative distance visualization helper.
 * Without registered SourceDependency edges, returns unknown — never invents score.
 */
export function getSourceDerivativeDistance(
  _sourceId: string,
): DerivativeDistance {
  return "unknown";
}

export function getSourceStateImpact(sourceId: string): SourceStateImpact {
  const source = getSourceById(sourceId);
  const usage = getSourceUsage(sourceId);
  const state = getSourceState(sourceId);
  const captures = getSourceCaptures(sourceId);
  const archives = getArchiveCaptures(sourceId);
  const fragments = getSourceSurvivalFragments(sourceId);

  const affectedFactClaimIds = source?.factClaimIds ?? [];
  const affectedEntryIds = [
    ...(source?.relatedEntryIds ?? []),
    ...usage.entries.map((e) => e.id),
  ];
  const affectedObservationIds = [
    ...(source?.relatedObservationIds ?? []),
    ...usage.observations.map((o) => o.id),
  ];

  let provenanceImpact: SourceStateImpact["provenanceImpact"] = "unknown";
  let severity: SourceStateImpact["severity"] = "unknown";
  const recommendedResearchActions: string[] = [];

  if (state === "unknown") {
    provenanceImpact = "unknown";
    severity = "unknown";
    if (isWebLikeSource(source ?? { id: sourceId, label: "" })) {
      recommendedResearchActions.push("Recheck URL");
    }
  } else if (state === "active" || state === "updated") {
    provenanceImpact =
      captures.length > 0 || archives.length > 0 ? "none" : "informational";
    severity = "none";
  } else if (
    state === "redirected" ||
    state === "moved" ||
    state === "restricted" ||
    state === "login-required" ||
    state === "paywalled" ||
    state === "geo-restricted"
  ) {
    provenanceImpact = "reduced-access";
    severity = "low";
    recommendedResearchActions.push(
      "Check redirect",
      "Find official new URL",
      "Capture current version",
    );
  } else if (
    state === "removed" ||
    state === "not-found" ||
    state === "gone" ||
    state === "domain-expired" ||
    state === "platform-closed" ||
    state === "account-deleted"
  ) {
    if (captures.length > 0 || archives.length > 0) {
      provenanceImpact = "reduced-access";
      severity = "medium";
      recommendedResearchActions.push(
        "Verify archive completeness",
        "Review affected FactClaims",
      );
    } else if (fragments.length > 0) {
      provenanceImpact = "weakened";
      severity = "medium";
      recommendedResearchActions.push(
        "Review survival fragments",
        "Find independent citation",
        "Review affected FactClaims",
      );
    } else {
      provenanceImpact = "weakened";
      severity = "high";
      recommendedResearchActions.push(
        "Check web archive",
        "Find independent citation",
        "Review affected FactClaims",
        "Do not automatically remove source",
      );
    }
  } else if (
    state === "screenshot-only" ||
    state === "citation-only" ||
    state === "search-index-only" ||
    state === "ai-trace-only"
  ) {
    provenanceImpact = "weakened";
    severity = "medium";
    recommendedResearchActions.push(
      "Label as fragment / trace, not original",
      "Review affected FactClaims",
    );
  } else if (state === "replaced") {
    provenanceImpact = "disputed";
    severity = "medium";
    recommendedResearchActions.push(
      "Compare previous version",
      "Review version conflict",
    );
  } else if (state === "archived") {
    provenanceImpact = "informational";
    severity = "low";
    recommendedResearchActions.push("Treat archive as preservation copy");
  }

  return {
    sourceId,
    affectedFactClaimIds: [...new Set(affectedFactClaimIds)],
    affectedEntryIds: [...new Set(affectedEntryIds)],
    affectedObservationIds: [...new Set(affectedObservationIds)],
    severity,
    provenanceImpact,
    recommendedResearchActions,
    truthStatusUnchanged: true,
  };
}

export function getAffectedClaimsBySourceState(sourceId: string) {
  return getSourceStateImpact(sourceId);
}

export function getSourcesWithChangedState(): Source[] {
  const ids = new Set(sourceStateEvents.map((e) => e.sourceId));
  return [...ids]
    .map((id) => getSourceById(id))
    .filter((s): s is Source => Boolean(s));
}

export function getSourcesNeedingMaintenance(): Source[] {
  const openIds = new Set(
    sourceMaintenanceTasks
      .filter((t) => t.status === "open" || t.status === "in-progress")
      .map((t) => t.sourceId),
  );
  return [...openIds]
    .map((id) => getSourceById(id))
    .filter((s): s is Source => Boolean(s));
}

export function getUniqueSourceRisk(sourceId: string): UniqueSourceRisk {
  const facts = getFactClaimsBySource(sourceId);
  if (facts.length === 0) return "unknown";
  // Without a full claim↔source independence graph, do not invent corroboration.
  return "unknown";
}

export function getUniqueSourceRisks(): Array<{
  sourceId: string;
  risk: UniqueSourceRisk;
}> {
  return getAllSources()
    .filter((s) => isWebLikeSource(s))
    .map((s) => ({ sourceId: s.id, risk: getUniqueSourceRisk(s.id) }));
}

export function getLinkRotAuditSummary() {
  const webSources = getAllSources().filter(isWebLikeSource);
  const checks = sourceLinkChecks;
  const checked = checks.filter((c) => c.status !== "not-checked");
  const unchecked = checks.filter((c) => c.status === "not-checked");
  const broken = checks.filter((c) => c.status === "unavailable");
  const redirected = checks.filter((c) => Boolean(c.redirectedUrl));
  const archived = checks.filter((c) => c.archiveAvailable === true);
  const mutable = webSources.filter(
    (s) =>
      s.freshnessPolicy === "frequently-updated" ||
      s.freshnessPolicy === "occasionally-updated" ||
      s.freshnessPolicy === "current-state",
  );
  const currentState = webSources.filter(
    (s) => s.freshnessPolicy === "current-state",
  );

  return {
    webSources: webSources.length,
    checkedLinks: checked.length,
    uncheckedLinks: unchecked.length,
    brokenLinks: broken.length,
    redirectedLinks: redirected.length,
    archivedLinks: archived.length,
    mutableSources: mutable.length,
    currentStateSources: currentState.length,
    unknownStatus: webSources.filter((s) => getSourceState(s.id) === "unknown")
      .length,
    stateEvents: sourceStateEvents.length,
    urlHistoryRecords: sourceUrlRecords.length,
    archiveCaptures: archiveCaptureRecords.length,
    survivalFragments: sourceSurvivalFragments.length,
    maintenanceTasks: sourceMaintenanceTasks.length,
  };
}

