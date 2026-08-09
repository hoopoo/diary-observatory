import type {
  CropRecord,
  FrameSourceRecord,
  GenerationProvenance,
  HeadlineEvidenceRecord,
  ScreenshotCascade,
  ScreenshotClaimBoundary,
  ScreenshotContextProfile,
  ScreenshotModificationRecord,
  ScreenshotPreservationBundle,
  ScreenshotRelation,
  ScreenshotSourceRecord,
  ScreenshotTimeEvidence,
  TransactionalScreenshotProfile,
  AccountIdentityEvidence,
} from "@/lib/types";

/** Empty until a real ScreenshotSourceRecord is evidenced. */
export const screenshotSourceRecords: ScreenshotSourceRecord[] = [];

export const screenshotContextProfiles: ScreenshotContextProfile[] = [];

export const screenshotRelations: ScreenshotRelation[] = [];

export const screenshotTimeEvidenceRecords: ScreenshotTimeEvidence[] = [];

export const cropRecords: CropRecord[] = [];

export const screenshotModificationRecords: ScreenshotModificationRecord[] =
  [];

export const frameSourceRecords: FrameSourceRecord[] = [];

export const screenshotCascades: ScreenshotCascade[] = [];

export const transactionalScreenshotProfiles: TransactionalScreenshotProfile[] =
  [];

export const headlineEvidenceRecords: HeadlineEvidenceRecord[] = [];

export const generationProvenanceRecords: GenerationProvenance[] = [];

export const screenshotClaimBoundaries: ScreenshotClaimBoundary[] = [];

export const screenshotPreservationBundles: ScreenshotPreservationBundle[] =
  [];

export const accountIdentityEvidenceRecords: AccountIdentityEvidence[] = [];
