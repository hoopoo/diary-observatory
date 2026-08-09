import Link from "next/link";
import { EntityStatusBadge } from "@/components/EntityStatusBadge";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { VERIFICATION_LABELS } from "@/lib/labels";
import type { Entity, EntryTimelineEvent } from "@/lib/types";

export function EntryTimeline({
  events,
  entitiesById,
}: {
  events: EntryTimelineEvent[];
  entitiesById: Map<string, Entity>;
}) {
  return (
    <ol className="mt-8 space-y-0">
      {events.map((event, index) => {
        const verification = VERIFICATION_LABELS[event.verificationStatus];
        const placeEntity = event.locationId
          ? entitiesById.get(event.locationId)
          : undefined;

        return (
          <li
            key={event.id}
            className="relative grid gap-4 border-l border-border py-6 pl-8 md:grid-cols-[4rem_1fr]"
          >
            <span
              className="absolute -left-[0.38rem] top-7 h-3 w-3 rounded-full border border-accent bg-bg"
              aria-hidden="true"
            />
            <p className="editorial text-3xl text-accent">
              {String(event.order).padStart(2, "0")}
            </p>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="editorial text-xl text-text">
                  {event.placeLabel}
                  {event.placeLabelJa && (
                    <span className="jp-serif text-base text-text-faint">
                      {" "}
                      / {event.placeLabelJa}
                    </span>
                  )}
                </h3>
                <span className="text-xs tracking-wide text-text-faint">
                  Time: {event.approximateTime}
                </span>
              </div>
              <p className="mt-2 text-sm text-text-soft">
                {event.titleJa ?? event.title}
              </p>
              <p className="mt-1 text-sm text-text-faint">{event.description}</p>

              {event.entityIds.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {event.entityIds.map((id) => {
                    const entity = entitiesById.get(id);
                    if (!entity) {
                      return (
                        <li
                          key={id}
                          className="border border-border-soft px-2 py-1 text-[0.7rem] text-text-faint"
                        >
                          Coming entity
                        </li>
                      );
                    }
                    return (
                      <li key={id}>
                        <Link
                          href={`/entities/${entity.slug}`}
                          className="focus-ring border border-border px-2 py-1 text-[0.7rem] text-text-soft hover:border-text-faint"
                        >
                          {entity.nameOriginal ?? entity.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}

              <div className="mt-3 flex flex-wrap items-center gap-2 text-[0.7rem] text-text-faint">
                {event.layer && <EpistemicLabel kind={event.layer} />}
                <span>
                  Verification: {verification.en} / {verification.ja}
                </span>
                {placeEntity && (
                  <EntityStatusBadge status={placeEntity.status} size="sm" />
                )}
                {event.sourceNote && (
                  <span className="text-text-faint">{event.sourceNote}</span>
                )}
              </div>
            </div>
            {index < events.length - 1 && (
              <span className="sr-only">Next event</span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
