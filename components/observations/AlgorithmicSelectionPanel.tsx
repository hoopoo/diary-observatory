import { EpistemicLabel } from "@/components/EpistemicLabel";
import { algorithmicSelection } from "@/data/observations/where-did-the-editor-go";

export function AlgorithmicSelectionPanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Algorithmic selection</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="observation" />
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          No private platform internals claimed
        </span>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {(
          [
            ["Input", algorithmicSelection.input],
            ["Output", algorithmicSelection.output],
            ["Unknown", algorithmicSelection.unknown],
          ] as const
        ).map(([title, items]) => (
          <div key={title} className="border border-border px-4 py-4">
            <p className="label">{title}</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
