import { EpistemicLabel } from "@/components/EpistemicLabel";
import { gatekeepingTension } from "@/data/observations/where-did-the-editor-go";

export function GatekeepingTensionPanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Gatekeeping tension</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="interpretation" />
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          Structure, not personality
        </span>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <div className="border border-border px-4 py-4">
          <p className="label">Enables</p>
          <ul className="mt-3 space-y-1 text-sm text-text-soft">
            {gatekeepingTension.enables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="border border-border px-4 py-4">
          <p className="label">Excludes</p>
          <ul className="mt-3 space-y-1 text-sm text-text-soft">
            {gatekeepingTension.excludes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
