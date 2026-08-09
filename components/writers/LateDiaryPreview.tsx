export function LateDiaryPreview({
  title,
  titleJa,
  workTitle,
  themes,
  paragraphs,
  note,
}: {
  title: string;
  titleJa: string;
  workTitle: string;
  themes: Array<{ id: string; label: string; labelJa: string }>;
  paragraphs: string[];
  note: string;
}) {
  return (
    <section>
      <h2 className="editorial text-2xl text-text md:text-3xl">{title}</h2>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>
      <p className="mt-6 text-sm text-text-faint">Primary source</p>
      <p className="editorial mt-1 text-xl text-text">{workTitle}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {themes.map((t) => (
          <li
            key={t.id}
            className="border border-border px-2.5 py-1 text-xs text-text-soft"
          >
            {t.label}
            <span className="text-text-faint"> / {t.labelJa}</span>
          </li>
        ))}
      </ul>
      <div className="jp-body mt-8 max-w-2xl space-y-3 text-[0.98rem]">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-xs text-text-faint">{note}</p>
    </section>
  );
}
