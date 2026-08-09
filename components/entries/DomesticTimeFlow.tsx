export function DomesticTimeFlow({
  steps,
}: {
  steps: Array<{ label: string; labelJa?: string }>;
}) {
  return (
    <ol className="mt-6 flex max-w-md flex-col">
      {steps.map((step, index) => (
        <li key={step.label} className="flex flex-col items-start">
          <div className="border border-border px-4 py-3 text-sm">
            <p className="text-text-soft">{step.label}</p>
            {step.labelJa && (
              <p className="jp-serif mt-1 text-xs text-text-faint">
                {step.labelJa}
              </p>
            )}
          </div>
          {index < steps.length - 1 && (
            <span className="px-3 py-1 text-xs text-accent" aria-hidden="true">
              ↓
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
