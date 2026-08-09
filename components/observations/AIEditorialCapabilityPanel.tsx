import { EpistemicLabel } from "@/components/EpistemicLabel";
import { aiEditorialCapability } from "@/data/observations/where-did-the-editor-go";

export function AIEditorialCapabilityPanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">AI editorial capability</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="observation" />
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          Current observation — not a verdict
        </span>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <div className="border border-border px-4 py-4">
          <p className="label">Strong or useful for</p>
          <ul className="mt-3 space-y-1 text-sm text-text-soft">
            {aiEditorialCapability.strong.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="border border-border px-4 py-4">
          <p className="label">Limited or responsibility-sensitive</p>
          <ul className="mt-3 space-y-1 text-sm text-text-soft">
            {aiEditorialCapability.limited.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
