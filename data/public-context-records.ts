import type {
  DisasterContextRecord,
  PublicHealthContextRecord,
} from "@/lib/types";

/**
 * Institutional / historical context layers — separate from Diary Facts.
 * Empty until Sources and related Entries are indexed.
 */
export const publicHealthContextRecords: PublicHealthContextRecord[] = [];
export const disasterContextRecords: DisasterContextRecord[] = [];
