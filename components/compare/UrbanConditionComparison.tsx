export function UrbanConditionComparison({
  title,
  titleJa,
  conditions,
  paragraphs,
  caution,
}: {
  title: string;
  titleJa: string;
  conditions: Array<{
    writerId: string;
    label: string;
    condition: string;
    conditionJa: string;
    detail: string;
  }>;
  paragraphs: string[];
  caution: string;
}) {
  return (
    <section>
      <h2 className="editorial text-2xl text-text md:text-3xl">{title}</h2>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {conditions.map((item) => (
          <article
            key={item.writerId}
            className="border border-border px-5 py-8 text-center md:text-left"
          >
            <p className="label">{item.label}</p>
            <p className="editorial mt-4 text-3xl text-accent md:text-4xl">
              {item.condition}
            </p>
            <p className="jp-heading mt-2 text-lg">{item.conditionJa}</p>
            <p className="mt-4 text-sm text-text-soft">{item.detail}</p>
          </article>
        ))}
      </div>
      <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <p className="mt-4 max-w-2xl text-xs text-text-faint">{caution}</p>
    </section>
  );
}
