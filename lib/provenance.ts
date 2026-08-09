import {
  allEntrySourceLayers,
  allPublicFactClaims,
  allPublicInterpretationClaims,
  allPublicObservationClaims,
  kafu1918QualityProfile,
  kafu1918UnknownClaims,
} from "@/data/provenance/index";
import { getDiaryById } from "@/data/diaries";
import { getWriterById } from "@/data/writers";
import { entries, getEntryByDateOrId } from "@/data/entries";
import { getSourceById } from "@/lib/sources";
import { getEditionById } from "@/lib/editions";
import { entrySources as kafuSources } from "@/data/entries/1918-01-01-kafu-nagai";
import { entrySources as nishimuraSources } from "@/data/entries/2011-05-02-kenji-nishimura";
import type {
  DiaryEntry,
  FactClaim,
  InterpretationClaim,
  ObservationClaim,
  ProvenanceCompleteness,
  ProvenanceEdge,
  ProvenanceIssue,
  ProvenanceNode,
  ProvenanceTrail,
  Source,
} from "@/lib/types";

const LOCAL_SOURCES: Source[] = [...kafuSources, ...nishimuraSources];

function resolveSource(id: string): Source | undefined {
  return getSourceById(id) ?? LOCAL_SOURCES.find((s) => s.id === id);
}

export function getFactClaimById(id: string): FactClaim | undefined {
  return allPublicFactClaims.find((f) => f.id === id);
}

export function getObservationClaimById(
  id: string,
): ObservationClaim | undefined {
  return allPublicObservationClaims.find((o) => o.id === id);
}

export function getInterpretationClaimById(
  id: string,
): InterpretationClaim | undefined {
  return allPublicInterpretationClaims.find((i) => i.id === id);
}

export function getPublicFactClaims(): FactClaim[] {
  return allPublicFactClaims.filter((f) => f.publicDisplay);
}

export function getFactClaimsForEntry(entryId: string): FactClaim[] {
  return allPublicFactClaims.filter(
    (f) => f.entryId === entryId && f.publicDisplay,
  );
}

export function getObservationClaimsForEntry(
  entryId: string,
): ObservationClaim[] {
  return allPublicObservationClaims.filter(
    (o) => o.entryId === entryId && o.publicDisplay,
  );
}

export function getInterpretationClaimsForEntry(
  entryId: string,
): InterpretationClaim[] {
  return allPublicInterpretationClaims.filter(
    (i) => i.entryId === entryId && i.publicDisplay,
  );
}

export function getSourcesForFact(factClaimId: string): Source[] {
  const fact = getFactClaimById(factClaimId);
  if (!fact) return [];
  return (fact.sourceIds ?? [])
    .map((id) => resolveSource(id))
    .filter((s): s is Source => Boolean(s));
}

export function getCapturesForFact(factClaimId: string) {
  const fact = getFactClaimById(factClaimId);
  return fact?.sourceCaptureIds ?? [];
}

export function getEditionForCapture(_sourceCaptureId: string) {
  return undefined;
}

export function getDiaryWorkForEdition(editionId: string) {
  const edition = getEditionById(editionId);
  if (!edition) return undefined;
  return getDiaryById(edition.workId);
}

function unknownNode(
  key: string,
  label: string,
  labelJa: string,
): ProvenanceNode {
  return {
    id: `unknown-${key}`,
    nodeType: "unknown",
    entityId: key,
    label,
    labelJa,
    isUnknown: true,
    verificationStatus: "unverified",
    description: "Source path incomplete",
  };
}

function pushUnique(
  nodes: Map<string, ProvenanceNode>,
  edges: ProvenanceEdge[],
  node: ProvenanceNode,
) {
  if (!nodes.has(node.id)) nodes.set(node.id, node);
}

function edge(
  from: string,
  to: string,
  relationType: ProvenanceEdge["relationType"],
  notes?: string,
): ProvenanceEdge {
  return {
    id: `edge-${from}-${relationType}-${to}`,
    fromNodeId: from,
    toNodeId: to,
    relationType,
    notes,
  };
}

export function getProvenanceIssuesForFact(
  factClaimId: string,
): ProvenanceIssue[] {
  const fact = getFactClaimById(factClaimId);
  if (!fact) return [];
  const issues: ProvenanceIssue[] = [];
  const sources = getSourcesForFact(factClaimId);
  const captures = getCapturesForFact(factClaimId);

  if (sources.length === 0 && captures.length === 0) {
    issues.push({
      id: `issue-${factClaimId}-missing-source`,
      nodeId: factClaimId,
      issueType: "missing-source",
      severity: "critical",
      message: "Public fact has no linked source",
      messageJa: "公開FactにSourceが接続されていない",
      blocking: true,
      recommendedAction: "Attach Source or SourceCapture",
    });
  }
  if (captures.length === 0) {
    issues.push({
      id: `issue-${factClaimId}-missing-capture`,
      nodeId: factClaimId,
      issueType: "missing-source-capture",
      severity: "warning",
      message: "SourceCapture not registered",
      messageJa: "根拠箇所（SourceCapture）が未登録",
      blocking: false,
      recommendedAction: "Capture relevant passage with page/location",
    });
  }
  issues.push({
    id: `issue-${factClaimId}-missing-edition`,
    nodeId: factClaimId,
    issueType: "missing-edition",
    severity: "warning",
    message: "Edition not identified",
    messageJa: "版が特定されていない",
    blocking: false,
    recommendedAction: "Verify edition",
  });
  issues.push({
    id: `issue-${factClaimId}-missing-page`,
    nodeId: factClaimId,
    issueType: "missing-page",
    severity: "warning",
    message: "Page reference not indexed",
    messageJa: "ページ参照が未索引",
    blocking: false,
    recommendedAction: "Verify page range",
  });

  for (const s of sources) {
    if (s.status === "needed" || s.status === "primary-unavailable") {
      issues.push({
        id: `issue-${factClaimId}-source-${s.id}`,
        nodeId: factClaimId,
        issueType:
          s.status === "primary-unavailable"
            ? "inaccessible-source"
            : "unverified-source",
        severity: "warning",
        message: `Source ${s.label} is ${s.status}`,
        messageJa: `資料「${s.label}」は ${s.status}`,
        blocking: false,
        relatedNodeIds: [s.id],
      });
    }
  }

  return issues;
}

export function getProvenanceCompleteness(
  factClaimId: string,
): {
  completeness: ProvenanceCompleteness;
  reasons: string[];
} {
  const fact = getFactClaimById(factClaimId);
  if (!fact) return { completeness: "unknown", reasons: ["Claim not found"] };

  const sources = getSourcesForFact(factClaimId);
  const captures = getCapturesForFact(factClaimId);
  const hasSource = sources.length > 0;
  const hasCapture = captures.length > 0;
  const hasEdition = false; // No edition wired for published entries yet
  const hasPage = false;

  if (!hasSource && !hasCapture) {
    return {
      completeness: "broken",
      reasons: ["Public claim has no linked evidence"],
    };
  }
  if (hasSource && hasCapture && hasEdition && hasPage) {
    return {
      completeness: "complete",
      reasons: [
        "primary source identified",
        "edition identified",
        "source capture available",
        "page available",
      ],
    };
  }
  if (hasSource && hasCapture && (hasEdition || hasPage)) {
    return {
      completeness: "strong",
      reasons: [
        "source identified",
        "source capture available",
        hasEdition ? "edition identified" : "page available",
      ],
    };
  }
  if (hasSource && !hasCapture) {
    const hasNamedPrimary = sources.some(
      (s) => s.category === "primary" || s.sourceLevel === "primary",
    );
    if (hasNamedPrimary) {
      return {
        completeness: "partial",
        reasons: [
          "primary diary source identified by title",
          "edition unknown",
          "page missing",
          "source capture missing",
          "source copy not examined",
        ],
      };
    }
    const onlyTitle =
      sources.every(
        (s) =>
          s.status === "needed" ||
          s.status === "verification-pending" ||
          s.status === "primary-unavailable",
      ) && !sources.some((s) => s.url);
    if (onlyTitle) {
      return {
        completeness: "minimal",
        reasons: ["bibliographic / diary source title only", "edition unknown", "page missing"],
      };
    }
    return {
      completeness: "partial",
      reasons: [
        "source identified",
        "edition unknown",
        "page missing",
        "source capture missing",
      ],
    };
  }
  return {
    completeness: "partial",
    reasons: ["source path incomplete"],
  };
}

export function getProvenanceBlockers(
  factClaimId: string,
): ProvenanceIssue[] {
  return getProvenanceIssuesForFact(factClaimId).filter((i) => i.blocking);
}

export function getProvenanceConflicts(_nodeId: string): string[] {
  return [];
}

export function buildFactAncestry(factClaimId: string): {
  nodes: ProvenanceNode[];
  edges: ProvenanceEdge[];
} {
  const fact = getFactClaimById(factClaimId);
  const nodes = new Map<string, ProvenanceNode>();
  const edges: ProvenanceEdge[] = [];
  if (!fact) return { nodes: [], edges: [] };

  const factNode: ProvenanceNode = {
    id: `node-fact-${fact.id}`,
    nodeType: "fact-claim",
    entityId: fact.id,
    label: fact.claim,
    verificationStatus: fact.verificationStatus,
    evidenceLevel: fact.evidenceLevel,
    url: fact.entryId
      ? `/provenance/${fact.id}`
      : undefined,
    visibility: fact.publicDisplay ? "public" : "internal",
  };
  pushUnique(nodes, edges, factNode);

  const sources = getSourcesForFact(factClaimId);
  if (sources.length === 0) {
    const u = unknownNode("source", "Source not linked", "資料未接続");
    pushUnique(nodes, edges, u);
    edges.push(edge(factNode.id, u.id, "supports"));
  } else {
    for (const s of sources) {
      const sn: ProvenanceNode = {
        id: `node-source-${s.id}`,
        nodeType: "source",
        entityId: s.id,
        label: s.titleJa ?? s.title ?? s.label,
        url: s.slug ? `/sources/${s.slug}` : s.url,
        visibility: s.visibility ?? "public",
        metadata: {
          status: s.status ?? null,
          level: s.sourceLevel ?? null,
        },
      };
      pushUnique(nodes, edges, sn);
      edges.push(edge(factNode.id, sn.id, "supports"));
    }
  }

  // Capture / edition / page unknowns (do not invent)
  if (getCapturesForFact(factClaimId).length === 0) {
    const cap = unknownNode(
      `capture-${factClaimId}`,
      "Source capture not registered",
      "根拠箇所は未登録",
    );
    pushUnique(nodes, edges, cap);
    edges.push(edge(factNode.id, cap.id, "captured-from"));
  }

  const ed = unknownNode(
    `edition-${factClaimId}`,
    "Edition not identified",
    "版が特定されていない",
  );
  pushUnique(nodes, edges, ed);
  edges.push(edge(factNode.id, ed.id, "edition-of"));

  const page = unknownNode(
    `page-${factClaimId}`,
    "Page reference not indexed",
    "ページ参照が未索引",
  );
  pushUnique(nodes, edges, page);
  edges.push(edge(factNode.id, page.id, "references"));

  const copy = unknownNode(
    `copy-${factClaimId}`,
    "Source copy not examined",
    "確認個体は未登録",
  );
  pushUnique(nodes, edges, copy);
  edges.push(edge(factNode.id, copy.id, "copy-of"));

  // Entry / diary / writer
  if (fact.entryId) {
    const entry = getEntryByDateOrId(fact.entryId);
    if (entry) {
      const en: ProvenanceNode = {
        id: `node-entry-${entry.id}`,
        nodeType: "entry",
        entityId: entry.id,
        label: entry.title ?? entry.date,
        labelJa: entry.titleJa,
        url: `/entries/${entry.slug ?? entry.date}`,
        verificationStatus: entry.verificationStatus,
      };
      pushUnique(nodes, edges, en);
      edges.push(edge(factNode.id, en.id, "summarized-in"));

      const work = getDiaryById(entry.workId);
      if (work) {
        const wn: ProvenanceNode = {
          id: `node-work-${work.id}`,
          nodeType: "diary-work",
          entityId: work.id,
          label: work.title,
          labelJa: work.titleOriginal,
          url: `/diaries/${work.slug}`,
        };
        pushUnique(nodes, edges, wn);
        edges.push(edge(en.id, wn.id, "contained-in"));

        if (entry.writerId) {
          const writer = getWriterById(entry.writerId);
          if (writer) {
            const wr: ProvenanceNode = {
              id: `node-writer-${writer.id}`,
              nodeType: "writer",
              entityId: writer.id,
              label: writer.name,
              labelJa: writer.nameJa,
              url: `/writers/${writer.slug}`,
            };
            pushUnique(nodes, edges, wr);
            edges.push(edge(wn.id, wr.id, "authored-by"));
          }
        }
      }
    }
  }

  return { nodes: [...nodes.values()], edges };
}

export function buildFactDescendants(factClaimId: string): {
  nodes: ProvenanceNode[];
  edges: ProvenanceEdge[];
} {
  const fact = getFactClaimById(factClaimId);
  const nodes = new Map<string, ProvenanceNode>();
  const edges: ProvenanceEdge[] = [];
  if (!fact) return { nodes: [], edges: [] };

  const factNodeId = `node-fact-${fact.id}`;
  pushUnique(nodes, edges, {
    id: factNodeId,
    nodeType: "fact-claim",
    entityId: fact.id,
    label: fact.claim,
    verificationStatus: fact.verificationStatus,
    evidenceLevel: fact.evidenceLevel,
  });

  const obs = allPublicObservationClaims.filter(
    (o) =>
      o.publicDisplay && o.supportingFactClaimIds.includes(factClaimId),
  );
  for (const o of obs) {
    const on: ProvenanceNode = {
      id: `node-obs-${o.id}`,
      nodeType: "observation-claim",
      entityId: o.id,
      label: o.observation,
      url: `/provenance/${o.id}`,
    };
    pushUnique(nodes, edges, on);
    edges.push(edge(on.id, factNodeId, "observed-from"));

    const interps = allPublicInterpretationClaims.filter(
      (i) =>
        i.publicDisplay &&
        (i.supportingObservationIds?.includes(o.id) ||
          i.supportingFactClaimIds.includes(factClaimId)),
    );
    for (const i of interps) {
      const inn: ProvenanceNode = {
        id: `node-interp-${i.id}`,
        nodeType: "interpretation-claim",
        entityId: i.id,
        label: i.interpretation,
        url: `/provenance/${i.id}`,
      };
      pushUnique(nodes, edges, inn);
      edges.push(edge(inn.id, on.id, "interpreted-from"));
    }
  }

  if (fact.entryId) {
    const entry = getEntryByDateOrId(fact.entryId);
    if (entry) {
      const en: ProvenanceNode = {
        id: `node-entry-${entry.id}`,
        nodeType: "entry",
        entityId: entry.id,
        label: entry.title ?? entry.date,
        url: `/entries/${entry.slug ?? entry.date}`,
      };
      pushUnique(nodes, edges, en);
      edges.push(edge(en.id, factNodeId, "used-by"));
    }
  }

  return { nodes: [...nodes.values()], edges };
}

export function getProvenanceTrailForFact(
  factClaimId: string,
): ProvenanceTrail | undefined {
  const fact = getFactClaimById(factClaimId);
  if (!fact || !fact.publicDisplay) return undefined;

  const ancestry = buildFactAncestry(factClaimId);
  const descendants = buildFactDescendants(factClaimId);
  const { completeness, reasons } = getProvenanceCompleteness(factClaimId);
  const blockers = getProvenanceIssuesForFact(factClaimId);

  const nodeMap = new Map<string, ProvenanceNode>();
  for (const n of [...ancestry.nodes, ...descendants.nodes]) {
    nodeMap.set(n.id, n);
  }
  const edgeMap = new Map<string, ProvenanceEdge>();
  for (const e of [...ancestry.edges, ...descendants.edges]) {
    edgeMap.set(e.id, e);
  }

  return {
    id: `trail-${factClaimId}`,
    rootNodeId: `node-fact-${factClaimId}`,
    ancestryNodeIds: ancestry.nodes.map((n) => n.id),
    ancestryEdgeIds: ancestry.edges.map((e) => e.id),
    descendantNodeIds: descendants.nodes.map((n) => n.id),
    descendantEdgeIds: descendants.edges.map((e) => e.id),
    nodes: [...nodeMap.values()],
    edges: [...edgeMap.values()],
    completeness,
    completenessReasons: reasons,
    blockers,
    conflicts: getProvenanceConflicts(factClaimId),
  };
}

export function getProvenanceTrailForObservation(
  observationClaimId: string,
): ProvenanceTrail | undefined {
  const obs = getObservationClaimById(observationClaimId);
  if (!obs?.publicDisplay) return undefined;
  const firstFact = obs.supportingFactClaimIds[0];
  if (!firstFact) {
    return {
      id: `trail-${observationClaimId}`,
      rootNodeId: `node-obs-${observationClaimId}`,
      ancestryNodeIds: [],
      ancestryEdgeIds: [],
      descendantNodeIds: [],
      descendantEdgeIds: [],
      nodes: [
        {
          id: `node-obs-${observationClaimId}`,
          nodeType: "observation-claim",
          entityId: observationClaimId,
          label: obs.observation,
        },
      ],
      edges: [],
      completeness: "broken",
      completenessReasons: ["Observation without supporting facts"],
      blockers: [
        {
          id: `issue-${observationClaimId}-no-facts`,
          nodeId: observationClaimId,
          issueType: "observation-without-facts",
          severity: "critical",
          message: "Observation without facts",
          messageJa: "ObservationにFactが接続されていない",
          blocking: true,
        },
      ],
      conflicts: [],
    };
  }
  // Merge ancestry from supporting facts (visited set via Map)
  const trail = getProvenanceTrailForFact(firstFact);
  if (!trail) return undefined;
  return {
    ...trail,
    id: `trail-${observationClaimId}`,
    rootNodeId: `node-obs-${observationClaimId}`,
  };
}

export function getProvenanceTrailForInterpretation(
  interpretationClaimId: string,
): ProvenanceTrail | undefined {
  const interp = getInterpretationClaimById(interpretationClaimId);
  if (!interp?.publicDisplay) return undefined;
  if (
    (!interp.supportingObservationIds ||
      interp.supportingObservationIds.length === 0) &&
    interp.supportingFactClaimIds.length === 0
  ) {
    return {
      id: `trail-${interpretationClaimId}`,
      rootNodeId: `node-interp-${interpretationClaimId}`,
      ancestryNodeIds: [],
      ancestryEdgeIds: [],
      descendantNodeIds: [],
      descendantEdgeIds: [],
      nodes: [
        {
          id: `node-interp-${interpretationClaimId}`,
          nodeType: "interpretation-claim",
          entityId: interpretationClaimId,
          label: interp.interpretation,
        },
      ],
      edges: [],
      completeness: "broken",
      completenessReasons: ["Interpretation without observation/fact support"],
      blockers: [
        {
          id: `issue-${interpretationClaimId}-no-support`,
          nodeId: interpretationClaimId,
          issueType: "interpretation-without-observation",
          severity: "critical",
          message: "Interpretation without observation/fact support",
          blocking: true,
        },
      ],
      conflicts: [],
    };
  }
  const factId =
    interp.supportingFactClaimIds[0] ??
    getObservationClaimById(interp.supportingObservationIds?.[0] ?? "")
      ?.supportingFactClaimIds[0];
  if (!factId) return undefined;
  const trail = getProvenanceTrailForFact(factId);
  if (!trail) return undefined;
  return {
    ...trail,
    id: `trail-${interpretationClaimId}`,
    rootNodeId: `node-interp-${interpretationClaimId}`,
  };
}

export function getProvenanceTrailForEntry(
  entryId: string,
): ProvenanceTrail | undefined {
  const facts = getFactClaimsForEntry(entryId);
  if (facts.length === 0) return undefined;
  return getProvenanceTrailForFact(facts[0].id);
}

export function getEvidenceAncestors(nodeId: string): ProvenanceNode[] {
  if (nodeId.startsWith("fact-") || nodeId.startsWith("node-fact-")) {
    const id = nodeId.replace(/^node-fact-/, "");
    return buildFactAncestry(id).nodes;
  }
  return [];
}

export function getInterpretiveDescendants(nodeId: string): ProvenanceNode[] {
  if (nodeId.startsWith("fact-") || nodeId.startsWith("node-fact-")) {
    const id = nodeId.replace(/^node-fact-/, "");
    return buildFactDescendants(id).nodes;
  }
  return [];
}

export function getPublicProvenanceTrail(id: string) {
  const trail =
    getProvenanceTrailForFact(id) ??
    getProvenanceTrailForObservation(id) ??
    getProvenanceTrailForInterpretation(id) ??
    getProvenanceTrailForEntry(id);
  if (!trail) return undefined;
  return {
    root: trail.rootNodeId,
    ancestry: trail.nodes.filter((n) =>
      trail.ancestryNodeIds.includes(n.id),
    ),
    descendants: trail.nodes.filter((n) =>
      trail.descendantNodeIds.includes(n.id),
    ),
    completeness: trail.completeness,
    conflicts: trail.conflicts,
    unknowns: trail.nodes.filter((n) => n.isUnknown),
    sources: trail.nodes.filter((n) => n.nodeType === "source"),
    lastVerifiedAt: trail.lastVerifiedAt,
    blockers: trail.blockers,
    reasons: trail.completenessReasons,
  };
}

export function getSuggestedResearchTasks(issue: ProvenanceIssue) {
  const map: Record<string, string> = {
    "missing-edition": "Verify edition",
    "missing-page": "Verify page range",
    "missing-source-capture": "Capture relevant passage",
    "conflicting-sources": "Cross-source review",
    "rights-unreviewed": "Rights review",
    "missing-source": "Attach primary source",
    "inaccessible-source": "Locate accessible copy",
  };
  return {
    title: map[issue.issueType] ?? issue.recommendedAction ?? "Research review",
    issue,
  };
}

export function getEntryProvenanceSummary(entryId: string) {
  const facts = getFactClaimsForEntry(entryId);
  const observations = getObservationClaimsForEntry(entryId);
  const interpretations = getInterpretationClaimsForEntry(entryId);
  const trails = facts.map((f) => getProvenanceCompleteness(f.id));

  const fully = trails.filter((t) =>
    t.completeness === "complete" || t.completeness === "strong",
  ).length;
  const partial = trails.filter((t) => t.completeness === "partial").length;
  const minimal = trails.filter((t) => t.completeness === "minimal").length;
  const broken = trails.filter((t) => t.completeness === "broken").length;

  const factsWithSource = facts.filter(
    (f) => (f.sourceIds?.length ?? 0) > 0 || f.sourceCaptureIds.length > 0,
  ).length;
  const factsWithCapture = facts.filter(
    (f) => f.sourceCaptureIds.length > 0,
  ).length;

  const obsWithFacts = observations.filter(
    (o) => o.supportingFactClaimIds.length > 0,
  ).length;
  const interpWithObs = interpretations.filter(
    (i) => (i.supportingObservationIds?.length ?? 0) > 0,
  ).length;

  let audit: "Strong" | "Partial" | "Needs research" = "Needs research";
  if (broken === 0 && fully > 0 && partial === 0 && minimal === 0) {
    audit = "Strong";
  } else if (factsWithSource > 0) {
    audit = "Partial";
  }

  const overall: ProvenanceCompleteness =
    broken === facts.length && facts.length > 0
      ? "broken"
      : fully === facts.length && facts.length > 0
        ? "strong"
        : factsWithSource > 0
          ? "partial"
          : facts.length === 0
            ? "unknown"
            : "minimal";

  return {
    entryId,
    overall,
    factClaims: facts.length,
    fullySourcedFacts: fully,
    partialPaths: partial + minimal,
    unsupportedPublicClaims: broken,
    conflicts: 0,
    primarySources: allEntrySourceLayers
      .filter(
        (l) =>
          l.entryId === entryId &&
          (l.layerType === "primary-diary" || l.role === "primary-evidence"),
      )
      .flatMap((l) => l.sourceIds).length,
    secondarySources: allEntrySourceLayers
      .filter(
        (l) =>
          l.entryId === entryId &&
          l.role !== "primary-evidence",
      )
      .flatMap((l) => l.sourceIds).length,
    editionVerified: 0,
    pageReferences: 0,
    lastVerified: undefined as string | undefined,
    audit,
    factsWithSource,
    factsWithCapture,
    factsWithEdition: 0,
    factsWithPage: 0,
    crossCheckedFacts: facts.filter(
      (f) => (f.sourceIds?.length ?? 0) > 1,
    ).length,
    conflictedFacts: 0,
    observationsWithFactSupport: obsWithFacts,
    interpretationsWithObservationSupport: interpWithObs,
    observationCount: observations.length,
    interpretationCount: interpretations.length,
    rightsReviewed: 0,
  };
}

export function getProvenanceHealthOverview() {
  const publishedEntries = entries.filter(
    (e) => e.slug === "1918-01-01-kafu-nagai" || e.slug === "2011-05-02-kenji-nishimura",
  );
  const facts = getPublicFactClaims();
  const completeness = facts.map((f) => getProvenanceCompleteness(f.id));

  return {
    publishedEntries: publishedEntries.length,
    publicFactClaims: facts.length,
    strongTrails: completeness.filter(
      (c) => c.completeness === "strong" || c.completeness === "complete",
    ).length,
    partialTrails: completeness.filter((c) => c.completeness === "partial")
      .length,
    minimalTrails: completeness.filter((c) => c.completeness === "minimal")
      .length,
    brokenTrails: completeness.filter((c) => c.completeness === "broken")
      .length,
    missingEditions: facts.length, // all currently missing editions
    missingPages: facts.length,
    missingCaptures: facts.filter((f) => f.sourceCaptureIds.length === 0)
      .length,
    conflictedClaims: 0,
    rightsIssues: 0,
    orphanClaims: facts.filter(
      (f) => !f.entryId && !f.candidateId,
    ).length,
    interpretationsWithoutSupport: allPublicInterpretationClaims.filter(
      (i) =>
        i.publicDisplay &&
        i.supportingFactClaimIds.length === 0 &&
        (i.supportingObservationIds?.length ?? 0) === 0,
    ).length,
    observationsWithoutFacts: allPublicObservationClaims.filter(
      (o) => o.publicDisplay && o.supportingFactClaimIds.length === 0,
    ).length,
  };
}

export function getWriterProvenanceHealth() {
  const writers = [
    { id: "writer-kafu", name: "Kafū Nagai", entryIds: ["entry-1918-01-01"] },
    {
      id: "writer-nishimura",
      name: "Kenji Nishimura",
      entryIds: ["entry-2011-05-02"],
    },
    { id: "writer-bukowski", name: "Charles Bukowski", entryIds: [] as string[] },
    { id: "writer-hayashi", name: "Fumiko Hayashi", entryIds: [] as string[] },
    {
      id: "writer-roppa",
      name: "Roppa Furukawa",
      entryIds: [] as string[],
      note: "0 entries · Research in progress",
    },
  ];

  return writers.map((w) => {
    const facts = w.entryIds.flatMap((id) => getFactClaimsForEntry(id));
    const trails = facts.map((f) => getProvenanceCompleteness(f.id));
    return {
      ...w,
      facts: facts.length,
      strong: trails.filter(
        (t) => t.completeness === "strong" || t.completeness === "complete",
      ).length,
      partial: trails.filter(
        (t) =>
          t.completeness === "partial" || t.completeness === "minimal",
      ).length,
      broken: trails.filter((t) => t.completeness === "broken").length,
      entries: w.entryIds.length,
      editionCoverage: 0,
      sourceCaptureCoverage: facts.filter((f) => f.sourceCaptureIds.length > 0)
        .length,
      conflicts: 0,
    };
  });
}

export function getDiaryProvenanceHealth() {
  const rows = [
    {
      id: "diary-dancho-tei-nichijo",
      title: "Danchōtei Nichijō",
      entryIds: ["entry-1918-01-01"],
    },
    {
      id: "diary-horoki",
      title: "Hōrōki",
      entryIds: [] as string[],
    },
    {
      id: "diary-furukawa-roppa-showa",
      title: "Furukawa Roppa Shōwa Diary",
      entryIds: [] as string[],
    },
    {
      id: "diary-nishimura-indexed",
      title: "Nishimura indexed diary day (2011-05-02)",
      entryIds: ["entry-2011-05-02"],
    },
  ];

  return rows.map((d) => {
    const facts = d.entryIds.flatMap((id) => getFactClaimsForEntry(id));
    const withCapture = facts.filter((f) => f.sourceCaptureIds.length > 0)
      .length;
    const cross = facts.filter((f) => (f.sourceIds?.length ?? 0) > 1).length;
    const unknowns = d.entryIds.flatMap((id) => getUnknownClaimsForEntry(id));
    return {
      id: d.id,
      title: d.title,
      editionCoverage: 0,
      entryCount: d.entryIds.length,
      factCount: facts.length,
      captureCoverage: withCapture,
      pageCoverage: 0,
      crossCheckCoverage: cross,
      rightsReadiness: "unreviewed",
      unknownCount: unknowns.length || facts.length * 3,
    };
  });
}

export function getProvenanceNode(id: string): ProvenanceNode | undefined {
  const fact = getFactClaimById(id);
  if (fact) {
    return {
      id: `node-fact-${fact.id}`,
      nodeType: "fact-claim",
      entityId: fact.id,
      label: fact.claim,
      verificationStatus: fact.verificationStatus,
      evidenceLevel: fact.evidenceLevel,
      url: `/provenance/${fact.id}`,
    };
  }
  const obs = getObservationClaimById(id);
  if (obs) {
    return {
      id: `node-obs-${obs.id}`,
      nodeType: "observation-claim",
      entityId: obs.id,
      label: obs.observation,
      url: `/provenance/${obs.id}`,
    };
  }
  const interp = getInterpretationClaimById(id);
  if (interp) {
    return {
      id: `node-interp-${interp.id}`,
      nodeType: "interpretation-claim",
      entityId: interp.id,
      label: interp.interpretation,
      url: `/provenance/${interp.id}`,
    };
  }
  return undefined;
}

export function resolveEntryForClaim(id: string): DiaryEntry | undefined {
  const fact = getFactClaimById(id);
  if (fact?.entryId) return getEntryByDateOrId(fact.entryId);
  const obs = getObservationClaimById(id);
  if (obs?.entryId) return getEntryByDateOrId(obs.entryId);
  const interp = getInterpretationClaimById(id);
  if (interp?.entryId) return getEntryByDateOrId(interp.entryId);
  return getEntryByDateOrId(id);
}

export function getUnknownClaimsForEntry(entryId: string) {
  if (entryId === "entry-1918-01-01") {
    return kafu1918UnknownClaims;
  }
  return [];
}

export function getEntryQualityProfile(entryId: string) {
  if (entryId === "entry-1918-01-01") {
    return kafu1918QualityProfile;
  }
  return undefined;
}

/** Honest excavation verdict for a published entry — no vanity Complete/Strong. */
export function getEntryExcavationStatus(entryId: string) {
  const summary = getEntryProvenanceSummary(entryId);
  const unknowns = getUnknownClaimsForEntry(entryId);
  const facts = getFactClaimsForEntry(entryId);
  const issues = facts.flatMap((f) => getProvenanceIssuesForFact(f.id));

  const blocking = [
    "Edition not identified",
    "Page reference not indexed",
    "SourceCapture not registered",
    "Source copy not examined",
    "Daily boundary not registered",
    "Rights policy not fully reviewed",
    "External cross-check incomplete",
  ];

  const overall = summary.overall as ProvenanceCompleteness;

  const because =
    overall === "partial"
      ? [
          "primary diary identified (断腸亭日乗)",
          "date of entry indexed",
          "Fact / Observation / Interpretation mapped",
          "Unknowns explicitly listed",
          "interpretive layers separated",
        ]
      : overall === "strong" || overall === "complete"
        ? summary.audit === "Strong"
          ? ["trail meets strong thresholds"]
          : ["trail meets complete thresholds"]
        : ["trail incomplete"];

  return {
    entryId,
    completeness: overall,
    label:
      overall === "complete"
        ? "Complete provenance"
        : overall === "strong"
          ? "Strong provenance"
          : overall === "partial"
            ? "Partial provenance"
            : overall === "minimal"
              ? "Minimal provenance"
              : "Provenance in progress",
    labelJa:
      overall === "complete"
        ? "根拠経路・完成"
        : overall === "strong"
          ? "根拠経路・強い"
          : overall === "partial"
            ? "根拠経路・部分"
            : overall === "minimal"
              ? "根拠経路・最小"
              : "根拠経路・進行中",
    because,
    but: blocking,
    unknowns: unknowns.length,
    issues: issues.length,
    isReferenceEntry: false,
    referenceReason:
      "Reference Entry requires Strong or Complete provenance. Bibliographic trail incomplete.",
  };
}
