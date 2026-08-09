import { EpistemicLabel } from "@/components/EpistemicLabel";
import { womenWorkLayers } from "@/data/writers/fumiko-hayashi";

export function WomenWorkPanel() {
  return (
    <aside className="not-prose my-8 border border-border px-5 py-6">
      <p className="label">Women’s work layers</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="observation" />
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          Do not invent domestic acts from gender alone
        </span>
      </div>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {womenWorkLayers.map((item) => (
          <li
            key={item.id}
            className="border border-border px-3 py-2 text-sm text-text-soft"
          >
            <span className="block text-[0.65rem] tracking-wide text-text-faint">
              {item.label}
            </span>
            {item.labelJa}
          </li>
        ))}
      </ul>
    </aside>
  );
}
