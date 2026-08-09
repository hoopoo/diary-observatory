import type {
  ProvenanceIssue,
  ScreenshotClaimBoundary,
  ScreenshotContextProfile,
  ScreenshotEvidenceStatus,
  ScreenshotModificationRecord,
  ScreenshotPreservationBundle,
  ScreenshotRelation,
  ScreenshotSourceRecord,
  ScreenshotTraceabilityLevel,
  Source,
} from "@/lib/types";
import { getFactClaimsBySource, getSourceById } from "@/lib/sources";
import {
  accountIdentityEvidenceRecords,
  cropRecords,
  frameSourceRecords,
  generationProvenanceRecords,
  headlineEvidenceRecords,
  screenshotCascades,
  screenshotClaimBoundaries,
  screenshotContextProfiles,
  screenshotModificationRecords,
  screenshotPreservationBundles,
  screenshotRelations,
  screenshotSourceRecords,
  screenshotTimeEvidenceRecords,
  transactionalScreenshotProfiles,
} from "@/data/screenshots/registry";

export function getAllScreenshotSourceRecords(): ScreenshotSourceRecord[] {
  return screenshotSourceRecords;
}

export function getScreenshotSource(
  sourceId: string,
): ScreenshotSourceRecord | undefined {
  return screenshotSourceRecords.find((r) => r.sourceId === sourceId);
}

export function getScreenshotRecordById(
  id: string,
): ScreenshotSourceRecord | undefined {
  return screenshotSourceRecords.find((r) => r.id === id);
}

export function isScreenshotLikeSource(source: Source): boolean {
  if (source.format === "image") return true;
  if (getScreenshotSource(source.id)) return true;
  return false;
}

export function getScreenshotContextProfile(
  sourceId: string,
): ScreenshotContextProfile | undefined {
  const record = getScreenshotSource(sourceId);
  if (!record) return undefined;
  return screenshotContextProfiles.find(
    (p) => p.screenshotSourceId === record.id || p.screenshotSourceId === sourceId,
  );
}

export function getScreenshotRelation(
  sourceId: string,
): ScreenshotRelation | undefined {
  const record = getScreenshotSource(sourceId);
  const key = record?.id ?? sourceId;
  return screenshotRelations.find(
    (r) => r.screenshotSourceId === key || r.screenshotSourceId === sourceId,
  );
}

export function getOriginalSourceForScreenshot(
  sourceId: string,
): Source | undefined {
  const relation = getScreenshotRelation(sourceId);
  if (!relation?.originalSourceId) {
    const record = getScreenshotSource(sourceId);
    // Without registered relation / originalSourceId, do not invent a link.
    if (!record?.originalUrl) return undefined;
    return undefined;
  }
  return getSourceById(relation.originalSourceId);
}

export function getScreenshotModificationHistory(
  sourceId: string,
): ScreenshotModificationRecord[] {
  const record = getScreenshotSource(sourceId);
  const key = record?.id ?? sourceId;
  return screenshotModificationRecords.filter(
    (m) => m.screenshotSourceId === key || m.screenshotSourceId === sourceId,
  );
}

export function getScreenshotClaimBoundary(
  sourceId: string,
): ScreenshotClaimBoundary | undefined {
  const record = getScreenshotSource(sourceId);
  const key = record?.id ?? sourceId;
  return screenshotClaimBoundaries.find(
    (b) => b.screenshotSourceId === key || b.screenshotSourceId === sourceId,
  );
}

export function getScreenshotPreservationBundle(
  sourceId: string,
): ScreenshotPreservationBundle | undefined {
  const record = getScreenshotSource(sourceId);
  const key = record?.id ?? sourceId;
  return screenshotPreservationBundles.find(
    (b) => b.screenshotSourceId === key || b.screenshotSourceId === sourceId,
  );
}

/**
 * Traceability ladder A–F. Not a quality score.
 * Without registered screenshot evidence, returns unknown.
 */
export function getScreenshotTraceability(
  sourceId: string,
): ScreenshotTraceabilityLevel {
  const record = getScreenshotSource(sourceId);
  if (!record) return "unknown";

  const relation = getScreenshotRelation(sourceId);
  const original = getOriginalSourceForScreenshot(sourceId);
  const context = getScreenshotContextProfile(sourceId);
  const bundle = getScreenshotPreservationBundle(sourceId);
  const hasUrl = Boolean(record.originalUrl || relation?.originalUrl);
  const hasVisibleOrigin = Boolean(
    record.visibleAccount || record.originalPlatform,
  );
  const verified =
    relation?.relationConfidence === "verified" ||
    relation?.relationConfidence === "strong" ||
    record.authenticityStatus === "original-verified" ||
    record.authenticityStatus === "corroborated";
  const archived =
    record.archiveAvailable === true ||
    (bundle?.archiveCaptureIds?.length ?? 0) > 0;
  const captureHistory = Boolean(record.capturedAt || bundle?.capturedAt);
  const independent =
    (bundle?.relatedFactClaimIds?.length ?? 0) > 1 && verified && archived;

  if (independent) return "F";
  if (original && archived && captureHistory) return "E";
  if (original && verified) return "D";
  if (hasUrl) return "C";
  if (hasVisibleOrigin || context?.originalUrlKnown) return "B";
  return "A";
}

export function getScreenshotEvidenceStatus(
  sourceId: string,
): ScreenshotEvidenceStatus {
  const record = getScreenshotSource(sourceId);
  if (!record) return "unknown-origin";

  const mods = getScreenshotModificationHistory(sourceId);
  const original = getOriginalSourceForScreenshot(sourceId);
  const relation = getScreenshotRelation(sourceId);
  const level = getScreenshotTraceability(sourceId);

  if (record.authenticityStatus === "disputed") return "disputed";
  if (mods.some((m) => m.modificationType !== "unknown")) return "modified";
  if (original) return "original-recovered";
  if (record.originalStillAvailable === false) return "original-unavailable";
  if (level === "A" && !relation?.originalSourceId) return "isolated";
  if (level === "B" || level === "C") return "partially-traceable";
  if (level === "D" || level === "E" || level === "F") return "traceable";
  return "unknown-origin";
}

export function getScreenshotResearchIssues(
  sourceId: string,
): ProvenanceIssue[] {
  const record = getScreenshotSource(sourceId);
  if (!record) return [];

  const issues: ProvenanceIssue[] = [];
  const nodeId = `screenshot:${sourceId}`;
  const push = (
    issueType: ProvenanceIssue["issueType"],
    message: string,
    messageJa: string,
    severity: ProvenanceIssue["severity"] = "warning",
  ) => {
    issues.push({
      id: `${nodeId}:${issueType}`,
      nodeId,
      issueType,
      severity,
      message,
      messageJa,
      blocking: severity === "critical",
    });
  };

  if (!record.originalUrl) {
    push(
      "missing-original-url",
      "Original URL not recorded for this screenshot.",
      "スクリーンショットに元URLが記録されていない。",
    );
  }
  if (!getOriginalSourceForScreenshot(sourceId)) {
    push(
      "missing-original-source",
      "Original Source not linked.",
      "元Sourceが紐づいていない。",
    );
  }
  if (!record.capturedAt) {
    push(
      "missing-capture-time",
      "Capture time unknown.",
      "取得日時が不明。",
      "info",
    );
  }
  if (!record.contextAvailable) {
    push(
      "missing-context",
      "Surrounding context not available.",
      "前後文脈が利用できない。",
    );
  }
  if (!record.visibleAccount) {
    push(
      "missing-account-identity",
      "Account identity not evidenced beyond pixels.",
      "アカウント識別が画像上の表示を超えて確認できない。",
      "info",
    );
  }
  if (record.authenticityStatus === "unverified" || record.authenticityStatus === "unknown") {
    push(
      "screenshot-authenticity-unreviewed",
      "Authenticity not reviewed.",
      "真正性が未レビュー。",
      "info",
    );
  }
  if (record.originalStillAvailable === false && !record.archiveAvailable) {
    push(
      "original-source-removed",
      "Original source unavailable; archive not flagged.",
      "元資料が到達不可で、アーカイブも未確認。",
    );
  }

  return issues;
}

export function getFactsSupportedByScreenshot(sourceId: string) {
  return getFactClaimsBySource(sourceId);
}

/**
 * Conceptual detector for claim-exceeds-image.
 * Without registered claim boundaries, returns empty (do not invent).
 */
export function getClaimsExceedingScreenshotEvidence(sourceId: string): string[] {
  const boundary = getScreenshotClaimBoundary(sourceId);
  if (!boundary) return [];
  // Structural hook only — requires curated unsupportedClaimTypes.
  return boundary.unsupportedClaimTypes;
}

export function getScreenshotAuditSummary() {
  return {
    screenshotRecords: screenshotSourceRecords.length,
    contextProfiles: screenshotContextProfiles.length,
    relations: screenshotRelations.length,
    timeEvidence: screenshotTimeEvidenceRecords.length,
    cropRecords: cropRecords.length,
    modifications: screenshotModificationRecords.length,
    frameSources: frameSourceRecords.length,
    cascades: screenshotCascades.length,
    transactionalProfiles: transactionalScreenshotProfiles.length,
    headlineEvidence: headlineEvidenceRecords.length,
    generationProvenance: generationProvenanceRecords.length,
    claimBoundaries: screenshotClaimBoundaries.length,
    preservationBundles: screenshotPreservationBundles.length,
    accountIdentity: accountIdentityEvidenceRecords.length,
    indexedCases: screenshotSourceRecords.length,
  };
}
