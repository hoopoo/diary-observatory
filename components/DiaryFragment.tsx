import Link from "next/link";
import { getEntityById } from "@/data/entities";

export type DiaryFragmentProps = {
  date: string;
  locations: string[];
  events: string[];
  sourceTitle: string;
  sourceNote?: string;
  relatedEntityIds?: string[];
  entryHref?: string;
};

export function DiaryFragment({
  date,
  locations,
  events,
  sourceTitle,
  sourceNote,
  relatedEntityIds = [],
  entryHref,
}: DiaryFragmentProps) {
  const related = relatedEntityIds
    .map((id) => getEntityById(id))
    .filter(Boolean);

  return (
    <aside className="my-10 border border-border bg-surface/40 px-5 py-6 md:px-6">
      <p className="label">Diary Fragment</p>
      <p className="editorial mt-3 text-2xl text-text">{date}</p>
      <p className="mt-2 text-xs tracking-wide text-text-faint">
        {locations.join(" / ")}
      </p>

      <ul className="mt-5 space-y-2 text-sm text-text-soft">
        {events.map((event) => (
          <li key={event} className="flex gap-2">
            <span className="text-accent" aria-hidden="true">
              –
            </span>
            <span className="jp-serif">{event}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 border-t border-border-soft pt-4 text-xs text-text-faint">
        <p>
          <span className="label mr-2">Source</span>
          {sourceTitle}
        </p>
        {sourceNote && <p className="mt-2 leading-relaxed">{sourceNote}</p>}
      </div>

      {related.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {related.map(
            (entity) =>
              entity && (
                <Link
                  key={entity.id}
                  href={`/entities/${entity.slug}`}
                  className="focus-ring border border-border px-2 py-1 text-[0.7rem] text-text-soft hover:border-text-faint"
                >
                  {entity.nameOriginal ?? entity.name}
                </Link>
              ),
          )}
        </div>
      )}

      {entryHref && (
        <Link
          href={entryHref}
          className="focus-ring mt-5 inline-flex border border-text bg-text px-4 py-2 text-xs text-bg"
        >
          Open Daily Observatory
        </Link>
      )}
    </aside>
  );
}
