import type {
  AIAssistedRecord,
  AudienceTransformationRecord,
  CommercialSelfRecord,
  DiaryFormProfile,
  DiaryQualification,
  EphemeralRecordProfile,
  FeedbackLoopRecord,
  ImpliedAudienceProfile,
  LiveRecordProfile,
  PhotoDiaryRecord,
  RecordAuthorshipProfile,
  RecordInfrastructureActor,
  RecordVisibilityEvent,
  SocialDeletionRecord,
  SocialRecordCollection,
} from "@/lib/types";

/** Empty until real diary-form / social-record evidence is registered. */
export const diaryFormProfiles: DiaryFormProfile[] = [];

export const impliedAudienceProfiles: ImpliedAudienceProfile[] = [];

export const audienceTransformationRecords: AudienceTransformationRecord[] =
  [];

export const feedbackLoopRecords: FeedbackLoopRecord[] = [];

export const recordVisibilityEvents: RecordVisibilityEvent[] = [];

export const socialDeletionRecords: SocialDeletionRecord[] = [];

export const photoDiaryRecords: PhotoDiaryRecord[] = [];

export const ephemeralRecordProfiles: EphemeralRecordProfile[] = [];

export const liveRecordProfiles: LiveRecordProfile[] = [];

export const recordInfrastructureActors: RecordInfrastructureActor[] = [];

export const commercialSelfRecords: CommercialSelfRecord[] = [];

export const aiAssistedRecords: AIAssistedRecord[] = [];

export const recordAuthorshipProfiles: RecordAuthorshipProfile[] = [];

export const diaryQualifications: DiaryQualification[] = [];

export const socialRecordCollections: SocialRecordCollection[] = [];
