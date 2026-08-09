import type { RedirectRecord, SourceUrlRecord } from "@/lib/types";

/**
 * URL history for Sources. Source.url remains the primary current pointer.
 * Empty until real former / alternate / archived URLs are evidenced.
 */
export const sourceUrlRecords: SourceUrlRecord[] = [];

/** Redirect observations with destinationMatch — never auto-assumed same-source. */
export const redirectRecords: RedirectRecord[] = [];
