export function ComparisonStatusSummary({
  verifiedFacts,
  partialObservations,
  unknownEntities,
  entriesByWriter,
  entitiesByWriter,
  sourcesNeeded,
}: {
  verifiedFacts: number;
  partialObservations: number;
  unknownEntities: number;
  entriesByWriter: Array<{ name: string; count: number }>;
  entitiesByWriter: Array<{ name: string; count: number }>;
  sourcesNeeded: number;
}) {
  return (
    <div className="border border-border px-5 py-6 md:px-6">
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Stat label="Verified facts" value={verifiedFacts} />
        <Stat label="Partial observations" value={partialObservations} />
        <Stat label="Unknown entities" value={unknownEntities} />
        <div>
          <dt className="label">Entries indexed</dt>
          <dd className="mt-2 space-y-1 text-sm text-text-soft">
            {entriesByWriter.map((item) => (
              <p key={item.name}>
                {item.name}: {item.count}
              </p>
            ))}
          </dd>
        </div>
        <div>
          <dt className="label">Entities indexed</dt>
          <dd className="mt-2 space-y-1 text-sm text-text-soft">
            {entitiesByWriter.map((item) => (
              <p key={item.name}>
                {item.name}: {item.count}
              </p>
            ))}
          </dd>
        </div>
        <Stat label="Sources needed" value={sourcesNeeded} />
      </dl>
      <p className="mt-6 text-sm text-text-soft">
        This comparison is provisional. It will change as more diary entries,
        entities, and sources are indexed.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-faint">
        この比較は暫定的なものである。日記項目、場所、人、出典が追加されるたびに、比較の見え方も変わる。
      </p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <dt className="label">{label}</dt>
      <dd className="editorial mt-1 text-3xl text-text">{value}</dd>
    </div>
  );
}
