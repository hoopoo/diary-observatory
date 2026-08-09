export function RepetitionCalendar({
  axes,
}: {
  axes: Array<{ id: string; label: string; labelJa: string }>;
}) {
  return (
    <div className="border border-dashed border-border px-5 py-6 md:px-6">
      <p className="label">RepetitionCalendar</p>
      <p className="mt-3 text-sm text-text-soft">Indexing in progress</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">索引化中</p>
      <p className="mt-3 max-w-2xl text-xs text-text-faint">
        No sample counts. Future heatmaps by month/year will attach when entry
        indexes exist.
      </p>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {axes.map((axis) => (
          <li
            key={axis.id}
            className="border border-border-soft px-3 py-3 text-xs text-text-faint"
          >
            <span className="text-text-soft">{axis.label}</span>
            <span className="mt-1 block jp-serif">{axis.labelJa}</span>
            <span className="mt-2 block tracking-wide">—</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
