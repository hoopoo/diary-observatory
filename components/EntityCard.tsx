import Link from "next/link";
import { EntityStatusBadge } from "@/components/EntityStatusBadge";
import { ENTITY_TYPE_LABELS, VERIFICATION_LABELS } from "@/lib/labels";
import type { Entity } from "@/lib/types";

export function EntityCard({ entity }: { entity: Entity }) {
  const type = ENTITY_TYPE_LABELS[entity.type];
  const verification = VERIFICATION_LABELS[entity.verificationStatus];

  return (
    <Link
      href={`/entities/${entity.slug}`}
      className="focus-ring group paper-panel flex h-full flex-col gap-3 p-5 transition-colors hover:border-text-faint"
    >
      <div className="flex flex-wrap items-center gap-2">
        <EntityStatusBadge status={entity.status} size="sm" />
        <span className="text-[0.65rem] tracking-wide text-text-faint">
          {type.en} / {type.ja}
        </span>
      </div>
      <h3 className="editorial text-xl text-text group-hover:opacity-80">
        {entity.name}
      </h3>
      {entity.nameOriginal && entity.nameOriginal !== entity.name && (
        <p className="jp-serif text-sm text-accent">{entity.nameOriginal}</p>
      )}
      <p className="text-sm text-text-soft line-clamp-3">
        {entity.descriptionJa ?? entity.description}
      </p>
      <div className="mt-auto space-y-1 pt-2 text-xs text-text-faint">
        <p>
          {entity.city ?? "—"} / {entity.country ?? "—"}
        </p>
        <p>
          Last verified: {entity.lastVerified ?? "—"} · {verification.en}
        </p>
        {entity.sourceNeeded && <p>Source needed</p>}
      </div>
    </Link>
  );
}
