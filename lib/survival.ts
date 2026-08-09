import type { Entity, EntityStatus, SurvivalSummaryData } from "./types";

const ORDER: EntityStatus[] = [
  "existing",
  "closed",
  "demolished",
  "destroyed",
  "rebuilt",
  "deceased",
  "ended",
  "renamed",
  "relocated",
  "transformed",
  "unknown",
];

export function summarizeSurvival(
  entities: Entity[],
  meta: {
    label: string;
    labelJa: string;
    date?: string;
    note?: string;
    noteJa?: string;
  },
): SurvivalSummaryData {
  const counts = new Map<EntityStatus, number>();
  for (const status of ORDER) counts.set(status, 0);
  for (const entity of entities) {
    counts.set(entity.status, (counts.get(entity.status) ?? 0) + 1);
  }

  return {
    ...meta,
    buckets: ORDER.filter((status) => (counts.get(status) ?? 0) > 0).map(
      (status) => ({
        status,
        count: counts.get(status) ?? 0,
      }),
    ),
  };
}
