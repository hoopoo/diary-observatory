import type {
  CorrespondenceRecord,
  CreativeTimeRecord,
  DayTimeProfile,
  FamilyTimeRecord,
  InstitutionalTimeRecord,
  InterruptionRecord,
  InvisibleTimeGap,
  MoneyTimeRelation,
  NightTimeRecord,
  SleepRecord,
  TimeControlProfile,
  TimeDebtRecord,
  TimeFragmentationProfile,
  TimeOwnershipRecord,
  TimeSupportRelation,
  UnclassifiedTimeRecord,
  WorkWritingRelation,
  WritingPlaceRecord,
  WritingSession,
  WritingSystemProfile,
} from "@/lib/types";

/** Empty until primary-source evidence is indexed. Never invent durations or hours. */
export const timeOwnershipRecords: TimeOwnershipRecord[] = [];
export const writingSessions: WritingSession[] = [];
export const sleepRecords: SleepRecord[] = [];
export const interruptionRecords: InterruptionRecord[] = [];
export const correspondenceRecords: CorrespondenceRecord[] = [];
export const writingSystemProfiles: WritingSystemProfile[] = [];
export const writingPlaceRecords: WritingPlaceRecord[] = [];
export const workWritingRelations: WorkWritingRelation[] = [];
export const institutionalTimeRecords: InstitutionalTimeRecord[] = [];
export const familyTimeRecords: FamilyTimeRecord[] = [];
export const invisibleTimeGaps: InvisibleTimeGap[] = [];
export const creativeTimeRecords: CreativeTimeRecord[] = [];
export const nightTimeRecords: NightTimeRecord[] = [];
export const timeDebtRecords: TimeDebtRecord[] = [];
export const moneyTimeRelations: MoneyTimeRelation[] = [];
export const timeSupportRelations: TimeSupportRelation[] = [];
export const timeFragmentationProfiles: TimeFragmentationProfile[] = [];
export const dayTimeProfiles: DayTimeProfile[] = [];
export const unclassifiedTimeRecords: UnclassifiedTimeRecord[] = [];

export const kafkaTimeControlProfile: TimeControlProfile = {
  writerId: "writer-kafka",
  paidWorkControl: "unknown",
  familyControl: "unknown",
  institutionalControl: "unknown",
  bodyControl: "unknown",
  selfDirectedTime: "unknown",
  unknownTime: "unknown",
  evidenceBasis:
    "No verified entry-level schedules indexed. Profile remains unknown-centered until sources are captured.",
  verificationStatus: "needs-source",
};

export function getTimeOwnershipByWriter(writerId: string) {
  return timeOwnershipRecords.filter((r) => r.writerId === writerId);
}

export function getWritingSessionsByWriter(writerId: string) {
  return writingSessions.filter((r) => r.writerId === writerId);
}

export function getSleepRecordsByWriter(writerId: string) {
  return sleepRecords.filter((r) => r.writerId === writerId);
}
