import { THREE_CITIES_ENTITY_IDS } from "@/data/observations/three-cities-three-speeds";
import { getEntitiesByIds } from "@/data/entities";
import type { EntityStatus } from "@/lib/types";

const STATUS_ORDER: EntityStatus[] = [
  "existing",
  "closed",
  "destroyed",
  "rebuilt",
  "transformed",
  "ended",
  "renamed",
  "demolished",
  "deceased",
  "unknown",
];

export function EntityStatusSummaryInline() {
  const entities = getEntitiesByIds([...THREE_CITIES_ENTITY_IDS]);
  const counts = entities.reduce(
    (acc, entity) => {
      acc[entity.status] = (acc[entity.status] ?? 0) + 1;
      return acc;
    },
    {} as Partial<Record<EntityStatus, number>>,
  );

  return (
    <aside className="not-prose my-10">
      <p className="label">Entity status summary</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        登録済み Entity から自動集計
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {STATUS_ORDER.map((status) => (
          <li
            key={status}
            className="border border-border px-2.5 py-1 text-xs text-text-soft"
          >
            {status}: {counts[status] ?? 0}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-text-faint">
        Total indexed entities in this essay: {entities.length}
      </p>
    </aside>
  );
}
