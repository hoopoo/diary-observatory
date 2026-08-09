export function RepetitionIndex({
  axes,
}: {
  axes: ReadonlyArray<{ id: string; label: string; labelJa: string }>;
}) {
  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {axes.map((axis) => (
        <li
          key={axis.id}
          className="border border-border-soft px-4 py-4"
          data-axis={axis.id}
        >
          <p className="editorial text-base text-text">{axis.label}</p>
          <p className="jp-serif mt-1 text-sm text-text-soft">{axis.labelJa}</p>
          <p className="mt-3 text-[0.7rem] tracking-wide text-text-faint">
            Indexing in progress
          </p>
          <p className="jp-serif mt-0.5 text-xs text-text-faint">索引化中</p>
          {/* Future: yearCount, monthCount, seasonalFrequency, streak, first/last */}
        </li>
      ))}
    </ul>
  );
}
