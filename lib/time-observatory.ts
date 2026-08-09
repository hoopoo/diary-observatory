import {
  creativeTimeRecords,
  dayTimeProfiles,
  familyTimeRecords,
  getTimeOwnershipByWriter,
  institutionalTimeRecords,
  invisibleTimeGaps,
  timeFragmentationProfiles,
  timeOwnershipRecords,
  timeSupportRelations,
} from "@/data/time/registry";
import { interruptionRecords } from "@/data/time/registry";
import { writingSessions } from "@/data/time/registry";
import type { TimeOwnershipRecord } from "@/lib/types";

/** Never synthesize percentage allocations when durations are missing. */
export function getTimeRecordsByEntry(entryId: string) {
  return timeOwnershipRecords.filter((r) => r.entryId === entryId);
}

export function getTimeRecordsByWriter(writerId: string) {
  return getTimeOwnershipByWriter(writerId);
}

export function getTimeOwnershipSummary(entryId: string) {
  const records = getTimeRecordsByEntry(entryId);
  const withDuration = records.filter((r) => r.duration);
  return {
    entryId,
    recordCount: records.length,
    durationKnownCount: withDuration.length,
    canComputeShare: false as const,
    presentBlockTypes: [...new Set(records.map((r) => r.timeBlockType))],
    note:
      withDuration.length === 0
        ? "No verified durations — presence/control only."
        : "Durations incomplete — shares are not computed.",
  };
}

export function getInstitutionalTime(entryId: string) {
  return institutionalTimeRecords.filter((r) => r.entryId === entryId);
}

export function getMaintenanceTime(entryId: string) {
  return timeOwnershipRecords.filter(
    (r) =>
      r.entryId === entryId &&
      (r.layerTypes?.includes("maintenance") ||
        r.timeBlockType === "meal" ||
        r.controlledBy === "family"),
  );
}

export function getBodyControlledTime(entryId: string) {
  return timeOwnershipRecords.filter(
    (r) => r.entryId === entryId && r.controlledBy === "body",
  );
}

export function getWaitingTime(entryId: string) {
  return timeOwnershipRecords.filter(
    (r) => r.entryId === entryId && r.timeBlockType === "waiting",
  );
}

export function getCreativeTime(entryId: string) {
  return creativeTimeRecords.filter((r) => r.entryId === entryId);
}

export function getInvisibleTimeGaps(entryId?: string) {
  if (!entryId) return invisibleTimeGaps;
  return invisibleTimeGaps.filter((g) => g.recordId === entryId);
}

export function getTimeSupportNetwork(entryId: string) {
  return timeSupportRelations.filter((r) => r.entryId === entryId);
}

export function getTimeFragmentation(entryId: string) {
  return timeFragmentationProfiles.find((p) => p.entryId === entryId) ?? null;
}

export function getDayTimeProfile(entryId: string) {
  return dayTimeProfiles.find((p) => p.entryId === entryId) ?? null;
}

export function getFamilyTime(entryId: string) {
  return familyTimeRecords.filter((r) => r.entryId === entryId);
}

export function getWritingSessionsForEntry(entryId: string) {
  return writingSessions.filter((r) => r.entryId === entryId);
}

export function getInterruptionsForEntry(entryId: string) {
  return interruptionRecords.filter((r) => r.entryId === entryId);
}

export type WriterTimeProfileSummary = {
  writerId: string;
  indexedTimeRecords: number;
  indexedWritingSessions: number;
  indexedCreativeTime: number;
  indexedFamilyTime: number;
  indexedInstitutionalTime: number;
  status: "no-indexed-time-records" | "partial" | "indexed";
};

export function compareWriterTimeProfiles(writerIds: string[]): WriterTimeProfileSummary[] {
  return writerIds.map((writerId) => {
    const ownership = getTimeOwnershipByWriter(writerId);
    const sessions = writingSessions.filter((r) => r.writerId === writerId);
    const creative = creativeTimeRecords.filter((r) => r.writerId === writerId);
    const family = familyTimeRecords.filter((r) => r.writerId === writerId);
    const institutional = institutionalTimeRecords.filter(
      (r) => r.writerId === writerId,
    );
    const total =
      ownership.length +
      sessions.length +
      creative.length +
      family.length +
      institutional.length;
    return {
      writerId,
      indexedTimeRecords: ownership.length,
      indexedWritingSessions: sessions.length,
      indexedCreativeTime: creative.length,
      indexedFamilyTime: family.length,
      indexedInstitutionalTime: institutional.length,
      status: total === 0 ? "no-indexed-time-records" : "partial",
    };
  });
}

export function describeControl(record: TimeOwnershipRecord) {
  return {
    block: record.timeBlockType,
    control: record.controlledBy,
    durationKnown: Boolean(record.duration),
    layers: record.layerTypes ?? [],
  };
}
