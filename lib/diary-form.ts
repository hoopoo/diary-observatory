import type {
  DiaryFormProfile,
  DiaryQualification,
  FeedbackLoopRecord,
  ImpliedAudienceProfile,
  AudienceTransformationRecord,
  RecordAuthorshipProfile,
  RecordVisibilityEvent,
  SocialRecordCollection,
} from "@/lib/types";
import {
  aiAssistedRecords,
  audienceTransformationRecords,
  commercialSelfRecords,
  diaryFormProfiles,
  diaryQualifications,
  ephemeralRecordProfiles,
  feedbackLoopRecords,
  impliedAudienceProfiles,
  liveRecordProfiles,
  photoDiaryRecords,
  recordAuthorshipProfiles,
  recordInfrastructureActors,
  recordVisibilityEvents,
  socialDeletionRecords,
  socialRecordCollections,
} from "@/data/diary-form/registry";

export function getDiaryFormProfile(
  recordId: string,
): DiaryFormProfile | undefined {
  return diaryFormProfiles.find(
    (p) => p.id === recordId || p.recordType === recordId,
  );
}

export function getDiaryQualification(
  recordId: string,
): DiaryQualification | undefined {
  return diaryQualifications.find((q) => q.recordOrCollectionId === recordId);
}

export function getImpliedAudience(
  recordId: string,
): ImpliedAudienceProfile[] {
  return impliedAudienceProfiles.filter((a) => a.recordId === recordId);
}

export function getAudienceTransformation(
  recordId: string,
): AudienceTransformationRecord[] {
  return audienceTransformationRecords.filter((a) => a.recordId === recordId);
}

export function getFeedbackStructure(recordId: string): FeedbackLoopRecord[] {
  return feedbackLoopRecords.filter((f) => f.recordId === recordId);
}

export function getRecordVisibilityHistory(
  recordId: string,
): RecordVisibilityEvent[] {
  return recordVisibilityEvents.filter((v) => v.recordId === recordId);
}

export function getRecordAuthorshipProfile(
  recordId: string,
): RecordAuthorshipProfile | undefined {
  return recordAuthorshipProfiles.find((a) => a.recordId === recordId);
}

export function getSocialRecordCollection(
  accountId: string,
): SocialRecordCollection[] {
  return socialRecordCollections.filter((c) => c.accountId === accountId);
}

export function compareDiaryForms(ids: string[]): DiaryFormProfile[] {
  return ids
    .map((id) => getDiaryFormProfile(id))
    .filter((p): p is DiaryFormProfile => Boolean(p));
}

export function getDiaryFormAuditSummary() {
  return {
    formProfiles: diaryFormProfiles.length,
    qualifications: diaryQualifications.length,
    impliedAudiences: impliedAudienceProfiles.length,
    audienceTransformations: audienceTransformationRecords.length,
    feedbackLoops: feedbackLoopRecords.length,
    visibilityEvents: recordVisibilityEvents.length,
    deletions: socialDeletionRecords.length,
    photoDiary: photoDiaryRecords.length,
    ephemeral: ephemeralRecordProfiles.length,
    live: liveRecordProfiles.length,
    infrastructureActors: recordInfrastructureActors.length,
    commercial: commercialSelfRecords.length,
    aiAssisted: aiAssistedRecords.length,
    authorshipProfiles: recordAuthorshipProfiles.length,
    socialCollections: socialRecordCollections.length,
    indexedSocialCases: socialRecordCollections.length,
  };
}
