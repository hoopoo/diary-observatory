export function ThreeCitiesPanel({
  title,
  titleJa,
  panels,
  paragraphs,
}: {
  title: string;
  titleJa: string;
  panels: Array<{
    writerId: string;
    label: string;
    labelJa: string;
    items: Array<{ en: string; ja: string }>;
  }>;
  paragraphs: string[];
}) {
  return (
    <section>
      <h2 className="editorial text-2xl text-text md:text-3xl">{title}</h2>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {panels.map((panel) => (
          <div
            key={panel.writerId}
            className="border border-border-soft px-4 py-5"
          >
            <p className="editorial text-xl text-text">{panel.label}</p>
            <p className="jp-serif mt-1 text-sm text-accent">{panel.labelJa}</p>
            <ul className="mt-4 space-y-2">
              {panel.items.map((item) => (
                <li key={item.en} className="text-sm text-text-soft">
                  <span>{item.en}</span>
                  <span className="mt-0.5 block jp-serif text-xs text-text-faint">
                    {item.ja}
                  </span>
                </li>
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
