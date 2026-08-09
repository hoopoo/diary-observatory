import { threeCitiesSystems } from "@/data/observations/three-cities-three-speeds";

export function LiterarySystemMiniDiagram() {
  return (
    <aside className="not-prose my-12 border-t border-border pt-10">
      <p className="label">Literary systems</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">三つの文学制度</p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {threeCitiesSystems.map((system) => (
          <div key={system.writerId}>
            <p className="label">{system.label}</p>
            <ol className="mt-3 flex flex-col">
              {system.nodes.map((node, index) => (
                <li key={node} className="flex flex-col items-start">
                  <span className="border border-border px-2.5 py-1.5 text-xs text-text-soft">
                    {node}
                  </span>
                  {index < system.nodes.length - 1 && (
                    <span className="px-2 py-0.5 text-xs text-accent" aria-hidden>
                      ↓
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </aside>
  );
}
