import type {
  AcquisitionTask,
  BaseEditionDecision,
  BibliographicClaim,
  EditionComparisonRecord,
  EditionReadinessItem,
  EditionRecord,
  FactClaim,
  ResearchConflict,
  ResearchLogEntry,
  SourceCopy,
  VolumeBoundaryVerification,
  VolumeRecord,
} from "@/lib/types";
import { allEditions } from "@/data/editions/index";
import {
  acquisitionTasks as roppaAcquisitionTasks,
  baseEditionDecisions as roppaBaseDecisions,
  bibliographicClaims as roppaClaims,
  bibliographicConflicts as roppaConflicts,
  editionComparisons as roppaComparisons,
  entrySuitabilityAssessments as roppaSuitability,
  personNameRecords as roppaPersonNames,
  roppaSourceCopies,
  volumeBoundaryVerifications as roppaBoundaries,
} from "@/data/research/furukawa-roppa-bibliography";
import { roppaVolumeRecords } from "@/data/volumes/furukawa-roppa-showa-diary";
import { getDiaryById } from "@/data/diaries";
import { getWriterById } from "@/data/writers";

const researchLogs: ResearchLogEntry[] = [];
const factClaimsByEdition: FactClaim[] = [];

export function getAllEditions(): EditionRecord[] {
  return allEditions;
}

export function getEditionById(id: string): EditionRecord | undefined {
  return allEditions.find((e) => e.id === id);
}

export function getEditionBySlug(slug: string): EditionRecord | undefined {
  return allEditions.find((e) => e.slug === slug);
}

export function getEditionsByWorkId(workId: string): EditionRecord[] {
  return allEditions.filter((e) => e.workId === workId);
}

export function getEditionsByWriterId(writerId: string): EditionRecord[] {
  return allEditions.filter((e) => e.writerIds?.includes(writerId));
}

export function getBaseEditionForWork(
  workId: string,
): EditionRecord | undefined {
  const decision = getBaseEditionDecisions().find(
    (d) =>
      d.diaryWorkId === workId &&
      (d.decisionStatus === "selected" || d.decisionStatus === "provisional") &&
      d.selectedEditionId,
  );
  if (decision?.selectedEditionId) {
    return getEditionById(decision.selectedEditionId);
  }
  return allEditions.find(
    (e) =>
      e.workId === workId &&
      (e.baseEditionStatus === "selected" ||
        e.baseEditionStatus === "provisional"),
  );
}

export function getBaseEditionForVolume(
  volumeId: string,
): EditionRecord | undefined {
  const decision = getBaseEditionDecisions().find(
    (d) =>
      d.volumeId === volumeId &&
      (d.decisionStatus === "selected" || d.decisionStatus === "provisional") &&
      d.selectedEditionId,
  );
  if (decision?.selectedEditionId) {
    return getEditionById(decision.selectedEditionId);
  }
  return allEditions.find((e) => e.volumeIds?.includes(volumeId));
}

export function getSourceCopiesForEdition(editionId: string): SourceCopy[] {
  return getAllSourceCopies().filter((c) => c.editionId === editionId);
}

export function getBibliographicClaimsForEdition(
  editionId: string,
): BibliographicClaim[] {
  return getAllBibliographicClaims().filter((c) => c.editionId === editionId);
}

export function getConflictsForEdition(editionId: string): ResearchConflict[] {
  return getAllConflicts().filter((c) => c.editionId === editionId);
}

export function getFactClaimsByEdition(editionId: string): FactClaim[] {
  return factClaimsByEdition.filter(
    (f) =>
      // FactClaim has no editionId yet — reserved hook via future SourceCapture
      (f as FactClaim & { editionId?: string }).editionId === editionId,
  );
}

export function getEntriesByEdition(_editionId: string): string[] {
  return [];
}

export function getEntryCandidatesByEdition(_editionId: string): string[] {
  return [];
}

export function getSourceCapturesByEdition(_editionId: string): string[] {
  return [];
}

export function getVolumesForEdition(edition: EditionRecord): VolumeRecord[] {
  if (!edition.volumeIds?.length) return [];
  return getAllVolumes().filter((v) => edition.volumeIds?.includes(v.id));
}

export function getVolumeBoundariesForEdition(
  editionId: string,
): VolumeBoundaryVerification[] {
  return getAllVolumeBoundaries().filter((b) => b.editionId === editionId);
}

export function getComparisonsForEdition(
  editionId: string,
): EditionComparisonRecord[] {
  return getAllComparisons().filter(
    (c) => c.editionAId === editionId || c.editionBId === editionId,
  );
}

export function getAcquisitionTasksForEdition(
  editionId: string,
): AcquisitionTask[] {
  return getAllAcquisitionTasks().filter((t) => t.editionId === editionId);
}

export function getResearchLogsForEdition(
  editionId: string,
): ResearchLogEntry[] {
  return researchLogs.filter((l) => l.editionId === editionId);
}

export function getBaseEditionDecisionsForWork(
  workId: string,
): BaseEditionDecision[] {
  return getBaseEditionDecisions().filter((d) => d.diaryWorkId === workId);
}

export function getEditionContext(edition: EditionRecord) {
  const work = getDiaryById(edition.workId);
  const writers = (edition.writerIds ?? (work ? [work.writerId] : []))
    .map((id) => getWriterById(id))
    .filter(Boolean);
  return { work, writers };
}

export function getEditionSuitabilityAssessment(editionId: string) {
  return roppaSuitability.find((a) => a.editionId === editionId);
}

export function getPersonNamesForEdition(edition: EditionRecord) {
  if (edition.workId === "diary-furukawa-roppa-showa") {
    return roppaPersonNames;
  }
  return [];
}

function stateFromPresence(
  present: boolean,
  partial?: boolean,
): EditionReadinessItem["state"] {
  if (present) return "ready";
  if (partial) return "partial";
  return "blocked";
}

export function getEditionReadiness(
  editionId: string,
): EditionReadinessItem[] {
  const edition = getEditionById(editionId);
  if (!edition) return [];

  const copies = getSourceCopiesForEdition(editionId);
  const examined = copies.some(
    (c) => c.verificationStatus === "verified" || c.accessStatus === "accessible",
  );
  const boundaries = getVolumeBoundariesForEdition(editionId);
  const boundaryOk = boundaries.some((b) => b.verificationStatus === "verified");
  const claims = getBibliographicClaimsForEdition(editionId);
  const conflicts = getConflictsForEdition(editionId).filter(
    (c) =>
      c.resolutionStatus === "unresolved" || c.resolutionStatus === "disputed",
  );
  const decision = getBaseEditionDecisions().find(
    (d) => d.selectedEditionId === editionId || d.diaryWorkId === edition.workId,
  );
  const identityPartial =
    edition.verificationStatus === "partial" ||
    edition.verificationStatus === "indexing";

  return [
    {
      id: "identity",
      label: "Identity",
      labelJa: "版識別",
      state: edition.verificationStatus === "verified" ? "ready" : identityPartial ? "partial" : "blocked",
    },
    {
      id: "publisher",
      label: "Publisher",
      labelJa: "出版社",
      state: edition.publisher ? (edition.verificationStatus === "verified" ? "ready" : "partial") : "blocked",
    },
    {
      id: "publication-date",
      label: "Publication date",
      labelJa: "刊行日",
      state: edition.publicationDate || edition.publicationYear != null ? "partial" : "blocked",
      note: "Confirmed imprint date required for Ready",
    },
    {
      id: "volume-coverage",
      label: "Volume coverage",
      labelJa: "収録範囲",
      state: edition.volumeIds?.length
        ? claims.some((c) => c.claimType.startsWith("covered"))
          ? "partial"
          : "partial"
        : "not-started",
    },
    {
      id: "pagination",
      label: "Pagination",
      labelJa: "ページ体系",
      state:
        edition.paginationType && edition.paginationType !== "unknown"
          ? "partial"
          : "blocked",
    },
    {
      id: "source-copy",
      label: "Source copy",
      labelJa: "閲覧個体",
      state: copies.length ? (examined ? "ready" : "partial") : "blocked",
    },
    {
      id: "text-access",
      label: "Text access",
      labelJa: "本文アクセス",
      state: examined ? "ready" : "blocked",
    },
    {
      id: "date-boundaries",
      label: "Date boundaries",
      labelJa: "日付境界",
      state: boundaryOk ? "ready" : boundaries.length ? "partial" : "not-started",
    },
    {
      id: "rights",
      label: "Rights",
      labelJa: "権利",
      state:
        edition.rightsReadiness === "quotation-ready" ||
        edition.rightsReadiness === "paraphrase-only"
          ? "ready"
          : edition.rightsReadiness === "under-review"
            ? "partial"
            : "blocked",
    },
    {
      id: "entry-suitability",
      label: "Entry suitability",
      labelJa: "Entry適合性",
      state:
        edition.entrySuitability === "ideal" ||
        edition.entrySuitability === "usable"
          ? "ready"
          : edition.entrySuitability === "not-reviewed" ||
              edition.entrySuitability === "unknown"
            ? "not-started"
            : "partial",
    },
    {
      id: "base-decision",
      label: "Base edition decision",
      labelJa: "基準版判断",
      state:
        decision?.decisionStatus === "selected" ||
        decision?.decisionStatus === "provisional"
          ? "ready"
          : decision
            ? "partial"
            : "not-started",
    },
    {
      id: "conflicts",
      label: "Conflicts",
      labelJa: "矛盾",
      state: conflicts.length ? "blocked" : "ready",
      note: conflicts.length
        ? `${conflicts.length} unresolved bibliographic conflict(s)`
        : undefined,
    },
    {
      id: "fact-dependency",
      label: "Fact dependency",
      labelJa: "Fact依存",
      state: getFactClaimsByEdition(editionId).length ? "partial" : "not-started",
    },
  ];
}

export function isEditionBaseReady(editionId: string): boolean {
  const items = getEditionReadiness(editionId);
  const hard = [
    "identity",
    "publisher",
    "publication-date",
    "pagination",
    "source-copy",
    "text-access",
    "rights",
  ];
  return hard.every((id) => items.find((i) => i.id === id)?.state === "ready");
}

export function getEditionVerificationSummary(editionId: string) {
  const edition = getEditionById(editionId);
  if (!edition) return [];
  const copies = getSourceCopiesForEdition(editionId);
  const physical = copies.some(
    (c) =>
      c.copyType === "owned-copy" ||
      c.copyType === "library-copy" ||
      c.copyType === "archive-copy",
  );
  const digital = copies.some(
    (c) =>
      c.copyType === "digital-library" ||
      c.copyType === "commercial-ebook" ||
      c.copyType === "scanned-copy",
  );
  const boundaries = getVolumeBoundariesForEdition(editionId);
  const decision = getBaseEditionDecisions().find(
    (d) => d.diaryWorkId === edition.workId,
  );

  const mapStatus = (
    cond: "verified" | "partial" | "source-needed" | "not-checked" | "unknown" | "conflicting" | "not-applicable",
  ) => cond;

  return [
    {
      id: "identity",
      label: "Identity verified",
      labelJa: "版識別",
      status: mapStatus(
        edition.verificationStatus === "verified"
          ? "verified"
          : edition.verificationStatus === "partial" ||
              edition.verificationStatus === "indexing"
            ? "partial"
            : "source-needed",
      ),
    },
    {
      id: "publisher",
      label: "Publisher verified",
      labelJa: "出版社",
      status: mapStatus(
        !edition.publisher
          ? "source-needed"
          : edition.verificationStatus === "verified"
            ? "verified"
            : "partial",
      ),
    },
    {
      id: "pubdate",
      label: "Publication date verified",
      labelJa: "刊行日",
      status: mapStatus(
        edition.publicationDate || edition.publicationYear != null
          ? "partial"
          : "source-needed",
      ),
    },
    {
      id: "coverage",
      label: "Volume coverage verified",
      labelJa: "収録範囲",
      status: mapStatus(edition.volumeIds?.length ? "partial" : "not-checked"),
    },
    {
      id: "pagination",
      label: "Pagination verified",
      labelJa: "ページ体系",
      status: mapStatus(
        edition.paginationType && edition.paginationType !== "unknown"
          ? "partial"
          : "source-needed",
      ),
    },
    {
      id: "physical",
      label: "Physical copy accessed",
      labelJa: "現物確認",
      status: mapStatus(physical ? "verified" : "not-checked"),
    },
    {
      id: "digital",
      label: "Digital copy accessed",
      labelJa: "電子版確認",
      status: mapStatus(digital ? "partial" : "not-checked"),
    },
    {
      id: "boundary",
      label: "Text boundary verified",
      labelJa: "本文境界",
      status: mapStatus(
        boundaries.some((b) => b.verificationStatus === "verified")
          ? "verified"
          : boundaries.length
            ? "partial"
            : "not-checked",
      ),
    },
    {
      id: "rights",
      label: "Rights reviewed",
      labelJa: "権利確認",
      status: mapStatus(
        edition.rightsReadiness === "quotation-ready" ||
          edition.rightsReadiness === "paraphrase-only"
          ? "verified"
          : edition.rightsReadiness === "under-review"
            ? "partial"
            : "not-checked",
      ),
    },
    {
      id: "suitability",
      label: "Entry suitability reviewed",
      labelJa: "Entry適合性",
      status: mapStatus(
        edition.entrySuitability === "not-reviewed" ||
          edition.entrySuitability === "unknown"
          ? "not-checked"
          : "partial",
      ),
    },
    {
      id: "base",
      label: "Base edition status",
      labelJa: "基準版状態",
      status: mapStatus(
        decision?.decisionStatus === "selected"
          ? "verified"
          : decision?.decisionStatus === "provisional"
            ? "partial"
            : decision?.decisionStatus === "not-selected"
              ? "not-checked"
              : "unknown",
      ),
    },
  ];
}

/* ── Private registries (extend as editions grow) ── */

function getAllSourceCopies(): SourceCopy[] {
  return [...roppaSourceCopies];
}

function getAllBibliographicClaims(): BibliographicClaim[] {
  return [...roppaClaims];
}

function getAllConflicts(): ResearchConflict[] {
  return [...roppaConflicts];
}

function getBaseEditionDecisions(): BaseEditionDecision[] {
  return [...roppaBaseDecisions];
}

function getAllVolumes(): VolumeRecord[] {
  return [...roppaVolumeRecords];
}

function getAllVolumeBoundaries(): VolumeBoundaryVerification[] {
  return [...roppaBoundaries];
}

function getAllComparisons(): EditionComparisonRecord[] {
  return [...roppaComparisons];
}

function getAllAcquisitionTasks(): AcquisitionTask[] {
  return [...roppaAcquisitionTasks];
}

// silence unused helper if tree-shaken checks complain
void stateFromPresence;
