import Link from "next/link";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import type { DiaryEntry, Entity } from "@/lib/types";

export function EntryMetadata({
  entry,
  entities,
}: {
  entry: DiaryEntry;
  entities: Entity[];
}) {
  return (
    <dl className="grid gap-4 text-sm sm:grid-cols-2">
      <div>
        <dt className="label">Date</dt>
        <dd className="mt-1 editorial text-xl text-text">{entry.date}</dd>
      </div>
      {entry.epistemicKind && (
        <div>
          <dt className="label">Epistemic</dt>
          <dd className="mt-2">
            <EpistemicLabel kind={entry.epistemicKind} />
          </dd>
        </div>
      )}
      {entry.weather && (
        <div>
          <dt className="label">Weather</dt>
          <dd className="mt-1 text-text-soft">{entry.weather}</dd>
        </div>
      )}
      {entry.bodyCondition && (
        <div>
          <dt className="label">Body</dt>
          <dd className="mt-1 text-text-soft">{entry.bodyCondition}</dd>
        </div>
      )}
      <div className="sm:col-span-2">
        <dt className="label">Themes</dt>
        <dd className="mt-2 flex flex-wrap gap-2">
          {entry.themes.map((theme) => (
            <span
              key={theme}
              className="border border-border px-2 py-0.5 text-xs text-text-faint"
            >
              {theme}
            </span>
          ))}
        </dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="label">Linked entities</dt>
        <dd className="mt-2 flex flex-wrap gap-2">
          {entities.map((entity) => (
            <Link
              key={entity.id}
              href={`/entities/${entity.slug}`}
              className="focus-ring border border-border px-2 py-1 text-xs text-text-soft hover:border-text-faint"
            >
              {entity.nameOriginal ?? entity.name}
            </Link>
          ))}
        </dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="label">Source</dt>
        <dd className="mt-1 text-text-soft">{entry.source}</dd>
      </div>
    </dl>
  );
}
