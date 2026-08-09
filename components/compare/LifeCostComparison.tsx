export function LifeCostComparison({
  title,
  titleJa,
  axes,
  paragraphs,
}: {
  title: string;
  titleJa: string;
  axes: Array<{
    id: string;
    label: string;
    labelJa: string;
    nishimura: string;
    bukowski: string;
  }>;
  paragraphs: string[];
}) {
  return (
    <section>
      <h2 className="editorial text-2xl text-text md:text-3xl">{title}</h2>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>
      <ul className="mt-8 space-y-3">
        {axes.map((axis) => (
          <li
            key={axis.id}
            className="grid gap-2 border-b border-border-soft py-4 text-sm md:grid-cols-[10rem_1fr_1fr]"
          >
            <div>
              <p className="text-text-soft">{axis.label}</p>
              <p className="jp-serif text-xs text-text-faint">{axis.labelJa}</p>
            </div>
            <p className="text-text-soft">{axis.nishimura}</p>
            <p className="text-text-soft">{axis.bukowski}</p>
          </li>
        ))}
      </ul>
      <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
