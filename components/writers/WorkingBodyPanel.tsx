export function WorkingBodyPanel({
  title,
  titleJa,
  paragraphs,
  axes,
  note,
}: {
  title: string;
  titleJa: string;
  paragraphs: string[];
  axes: Array<{ id: string; label: string; labelJa: string }>;
  note: string;
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
      <ul className="mt-8 flex flex-wrap gap-2">
        {axes.map((a) => (
          <li
            key={a.id}
            className="border border-border px-2.5 py-1 text-xs text-text-soft"
          >
            {a.label}
            <span className="text-text-faint"> / {a.labelJa}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-2xl text-xs text-text-faint">{note}</p>
    </section>
  );
}
