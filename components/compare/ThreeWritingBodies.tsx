export function ThreeWritingBodies({
  title,
  titleJa,
  columns,
  paragraphs,
}: {
  title: string;
  titleJa: string;
  columns: Array<{ writerId: string; label: string; items: string[] }>;
  paragraphs: string[];
}) {
  return (
    <section>
      <h2 className="editorial text-2xl text-text md:text-3xl">{title}</h2>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {columns.map((col) => (
          <div
            key={col.writerId}
            className="border border-border-soft px-4 py-4"
          >
            <p className="label">{col.label}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-text-soft">
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
