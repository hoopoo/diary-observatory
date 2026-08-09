export function IndoorConditionPanel({
  weather,
  outdoorTemperature,
  indoorCondition,
  subjectiveCondition,
  measuredWeather,
}: {
  weather: string;
  outdoorTemperature: string;
  indoorCondition: string;
  subjectiveCondition: string;
  measuredWeather: string;
}) {
  return (
    <dl className="mt-6 grid gap-3 sm:grid-cols-2 text-sm">
      <div className="border border-border px-4 py-3">
        <dt className="label">Weather</dt>
        <dd className="mt-1 text-text-soft">{weather}</dd>
      </div>
      <div className="border border-border px-4 py-3">
        <dt className="label">Outdoor temperature</dt>
        <dd className="mt-1 text-text-soft">{outdoorTemperature}</dd>
      </div>
      <div className="border border-border px-4 py-3">
        <dt className="label">Indoor condition</dt>
        <dd className="mt-1 text-text-soft">{indoorCondition}</dd>
      </div>
      <div className="border border-dashed border-border px-4 py-3">
        <dt className="label">Subjective condition</dt>
        <dd className="mt-1 text-xs text-text-faint">{subjectiveCondition}</dd>
      </div>
      <div className="border border-dashed border-border px-4 py-3 sm:col-span-2">
        <dt className="label">Measured weather</dt>
        <dd className="mt-1 text-xs text-text-faint">{measuredWeather}</dd>
      </div>
    </dl>
  );
}
