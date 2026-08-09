import { nishimuraAmplificationFlow } from "@/data/observations/before-the-platform-small-press";

export function NishimuraAmplificationFlow() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Nishimura amplification</p>
      <ol className="mt-4 flex flex-wrap items-center gap-2">
        {nishimuraAmplificationFlow.map((step, index) => (
          <li key={step.id} className="flex items-center gap-2">
            <span className="border border-border px-3 py-2 text-sm text-text-soft">
              <span className="editorial text-text">{step.label}</span>
              <span className="ml-2 text-xs text-text-faint">{step.labelJa}</span>
            </span>
            {index < nishimuraAmplificationFlow.length - 1 ? (
              <span className="text-text-faint" aria-hidden>
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </aside>
  );
}
