export function LiterarySystemComparison({
  title,
  titleJa,
  leftLabel,
  rightLabel,
  leftNodes,
  rightNodes,
  paragraphs,
}: {
  title: string;
  titleJa: string;
  leftLabel: string;
  rightLabel: string;
  leftNodes: string[];
  rightNodes: string[];
  paragraphs: string[];
}) {
  return (
    <section>
      <h2 className="editorial text-2xl text-text md:text-3xl">{title}</h2>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <FlowColumn label={leftLabel} nodes={leftNodes} />
        <FlowColumn label={rightLabel} nodes={rightNodes} />
      </div>
      <div className="jp-body mt-8 max-w-2xl space-y-3 text-sm text-text-soft">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}

function FlowColumn({ label, nodes }: { label: string; nodes: string[] }) {
  return (
    <div>
      <p className="label">{label}</p>
      <ol className="mt-4 flex flex-col">
        {nodes.map((node, index) => (
          <li key={node} className="flex flex-col items-start">
            <span className="border border-border px-3 py-2 text-sm text-text-soft">
              {node}
            </span>
            {index < nodes.length - 1 && (
              <span className="px-3 py-1 text-xs text-accent" aria-hidden="true">
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
