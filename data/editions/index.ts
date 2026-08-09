import type { EditionRecord } from "@/lib/types";
import { horokiEditions } from "@/data/editions/horoki";
import { roppaEditions } from "@/data/editions/furukawa-roppa-showa-diary";

/**
 * Central edition registry. Add work-specific arrays here as they gain
 * EditionRecords — do not invent placeholders for routing.
 */
export const allEditions: EditionRecord[] = [
  ...horokiEditions,
  ...roppaEditions,
];

export function listEditionSlugs(): string[] {
  return allEditions.map((e) => e.slug);
}
