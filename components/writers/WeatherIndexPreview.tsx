export function WeatherIndexPreview({
  weatherTerms,
  seasonal,
  bodyRelation,
}: {
  weatherTerms: string[];
  seasonal: string[];
  bodyRelation: string[];
}) {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      <div className="border border-border px-4 py-4">
        <p className="label">Weather terms</p>
        <p className="mt-3 text-sm text-text-soft">{weatherTerms.join(" / ")}</p>
        <p className="mt-4 text-xs text-text-faint">Indexing in progress</p>
      </div>
      <div className="border border-border px-4 py-4">
        <p className="label">Seasonal observations</p>
        <p className="mt-3 text-sm text-text-soft">{seasonal.join(" / ")}</p>
        <p className="mt-4 text-xs text-text-faint">Indexing in progress</p>
      </div>
      <div className="border border-border px-4 py-4">
        <p className="label">Body relation</p>
        <p className="mt-3 text-sm text-text-soft">{bodyRelation.join(" / ")}</p>
        <p className="mt-4 text-xs text-text-faint">Indexing in progress</p>
      </div>
    </div>
  );
}
