import Link from "next/link";
import { EntityStatusBadge } from "@/components/EntityStatusBadge";
import { ENTITY_TYPE_LABELS, VERIFICATION_LABELS } from "@/lib/labels";
import type { Entity } from "@/lib/types";

export function WriterEntityCard({
  entity,
  relatedObservationCount = 0,
}: {
  entity: Entity;
  relatedObservationCount?: number;
}) {
  const type = ENTITY_TYPE_LABELS[entity.type];
  const verification = VERIFICATION_LABELS[entity.verificationStatus];

  return (
    <article className="paper-panel flex h-full flex-col gap-3 p-5">
      <div className="flex flex-wrap items-center gap-2">
        <EntityStatusBadge status={entity.status} size="sm" />
        <span className="text-[0.65rem] tracking-wide text-text-faint">
          {type.en} / {type.ja}
        </span>
      </div>
      <h3 className="editorial text-xl text-text">
        {entity.nameOriginal ?? entity.name}
      </h3>
      {entity.nameOriginal && entity.nameOriginal !== entity.name && (
        <p className="text-xs text-text-faint">{entity.name}</p>
      )}
      <dl className="mt-1 space-y-1 text-xs text-text-faint">
        <div>
          <dt className="inline">Verification: </dt>
          <dd className="inline text-text-soft">
            {verification.en}
            {entity.sourceNeeded ? " · Source needed" : ""}
          </dd>
        </div>
        <div>
          <dt className="inline">Appears in diary: </dt>
          <dd className="inline text-text-soft">
            {entity.entryIds.length > 0 ? "Yes" : "Indexed / pending link"}
          </dd>
        </div>
        <div>
          <dt className="inline">Related observations: </dt>
          <dd className="inline text-text-soft">{relatedObservationCount}</dd>
        </div>
      </dl>
      <Link
        href={`/entities/${entity.slug}`}
        className="focus-ring mt-auto pt-2 text-xs tracking-wide text-accent underline-offset-4 hover:underline"
      >
        View entity
      </Link>
    </article>
  );
}
