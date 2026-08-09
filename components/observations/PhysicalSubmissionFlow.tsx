import { physicalSubmissionFlow } from "@/data/observations/before-the-platform-small-press";

export function PhysicalSubmissionFlow() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Physical submission flow</p>
      <ol className="mt-4 space-y-0">
        {physicalSubmissionFlow.map((step, index) => (
          <li key={step.id} className="relative border border-border-soft px-4 py-3">
            <p className="editorial text-lg text-text">{step.label}</p>
            <p className="jp-serif text-xs text-accent">{step.labelJa}</p>
            {index < physicalSubmissionFlow.length - 1 ? (
              <p className="mt-2 text-center text-text-faint" aria-hidden>
                ↓
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </aside>
  );
}
