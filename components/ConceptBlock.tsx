export function ConceptBlock({
  title,
  titleJa,
  paragraphs,
}: {
  title: string;
  titleJa?: string;
  paragraphs: string[];
}) {
  return (
    <section className="my-14 border border-border px-6 py-8 md:px-8">
      <p className="label">Concept</p>
      <h2 className="editorial mt-3 text-2xl text-accent md:text-3xl">{title}</h2>
      {titleJa && (
        <p className="jp-serif mt-2 text-base text-text-soft">{titleJa}</p>
      )}
      <div className="jp-body mt-6 space-y-4 text-[0.95rem]">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
