export function MediaEcologyFlow({
  title,
  titleJa,
  flow,
  paragraphs,
}: {
  title: string;
  titleJa: string;
  flow: string[];
  paragraphs: string[];
}) {
  return (
    <section className="paper-panel p-6 md:p-8">
      <p className="label">Media Ecology</p>
      <h2 className="editorial mt-3 text-2xl text-text md:text-3xl">{title}</h2>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>

      <ol className="mt-8 flex flex-col gap-0">
        {flow.map((step, index) => (
          <li key={step} className="flex flex-col items-start">
            <div className="border border-border px-4 py-2 text-sm text-text-soft">
              {step}
            </div>
            {index < flow.length - 1 && (
              <span
                className="px-3 py-1 text-xs text-accent"
                aria-hidden="true"
              >
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>

      <div className="jp-body mt-8 max-w-2xl space-y-4 text-sm">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
