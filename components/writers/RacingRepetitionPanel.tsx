export function RacingRepetitionPanel({
  title,
  titleJa,
  paragraphs,
  axes,
  statusEn,
  statusJa,
}: {
  title: string;
  titleJa: string;
  paragraphs: string[];
  axes: Array<{ id: string; label: string; labelJa: string }>;
  statusEn: string;
  statusJa: string;
}) {
  return (
    <section>
      <h2 className="editorial text-2xl text-text md:text-3xl">{title}</h2>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>
      <div className="jp-body mt-8 max-w-2xl space-y-3 text-[0.98rem]">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {axes.map((a) => (
          <li key={a.id} className="border border-border-soft px-4 py-3">
            <p className="text-sm text-text-soft">{a.label}</p>
            <p className="jp-serif mt-1 text-xs text-text-faint">{a.labelJa}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-text-soft">{statusEn}</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">{statusJa}</p>
    </section>
  );
}
