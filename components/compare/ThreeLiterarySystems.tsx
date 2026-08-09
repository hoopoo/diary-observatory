import type { LiterarySystem } from "@/lib/types";

export function ThreeLiterarySystems({
  title,
  titleJa,
  systems,
  labels,
  paragraphs,
}: {
  title: string;
  titleJa: string;
  systems: LiterarySystem[];
  labels: Record<string, string>;
  paragraphs: string[];
}) {
  return (
    <section>
      <h2 className="editorial text-2xl text-text md:text-3xl">{title}</h2>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {systems.map((system) => (
          <div key={system.id}>
            <p className="label">{labels[system.writerId] ?? system.writerId}</p>
            <ol className="mt-4 flex flex-col">
              {system.nodes.map((node, index) => (
                <li key={node} className="flex flex-col items-start">
                  <span className="border border-border px-3 py-2 text-sm text-text-soft">
                    {node}
                  </span>
                  {index < system.nodes.length - 1 && (
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
