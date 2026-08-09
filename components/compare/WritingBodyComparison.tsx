export function WritingBodyComparison({
  title,
  titleJa,
  leftLabel,
  rightLabel,
  leftItems,
  rightItems,
  paragraphs,
}: {
  title: string;
  titleJa: string;
  leftLabel: string;
  rightLabel: string;
  leftItems: string[];
  rightItems: string[];
  paragraphs: string[];
}) {
  return (
    <section>
      <h2 className="editorial text-2xl text-text md:text-3xl">{title}</h2>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Side label={leftLabel} items={leftItems} />
        <Side label={rightLabel} items={rightItems} />
      </div>
      <div className="jp-body mt-8 max-w-2xl space-y-3 text-[0.98rem]">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}

function Side({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="border border-border-soft px-4 py-4">
      <p className="label">{label}</p>
      <ul className="mt-3 space-y-1.5 text-sm text-text-soft">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
