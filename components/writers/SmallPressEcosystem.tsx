export function SmallPressEcosystem({
  title,
  titleJa,
  steps,
  paragraphs,
}: {
  title: string;
  titleJa: string;
  steps: Array<{ label: string; labelJa: string }>;
  paragraphs: string[];
}) {
  return (
    <section>
      <h2 className="editorial text-2xl text-text md:text-3xl">{title}</h2>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>
      <ol className="mt-8 flex max-w-md flex-col">
        {steps.map((step, index) => (
          <li key={step.label} className="flex flex-col items-start">
            <div className="border border-border px-4 py-3 text-sm">
              <p className="label">{step.label}</p>
              <p className="jp-serif mt-1 text-text-soft">{step.labelJa}</p>
            </div>
            {index < steps.length - 1 && (
              <span className="px-3 py-1 text-xs text-accent" aria-hidden="true">
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>
      <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
