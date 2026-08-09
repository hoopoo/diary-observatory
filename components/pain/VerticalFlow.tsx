export function VerticalFlow({
  steps,
  outcome,
}: {
  steps: { en: string; ja: string }[];
  outcome?: { en: string; ja: string };
}) {
  return (
    <figure className="not-prose my-8 max-w-md">
      <ol className="space-y-0">
        {steps.map((step, index) => (
          <li key={step.ja}>
            <div className="border border-border-soft bg-bg-raised px-4 py-3">
              <p className="text-sm text-text-soft">{step.ja}</p>
              <p className="mt-0.5 text-[0.7rem] tracking-wide text-text-faint">
                {step.en}
              </p>
            </div>
            {(index < steps.length - 1 || outcome) && (
              <div
                className="flex justify-center py-1 text-text-faint"
                aria-hidden="true"
              >
                ↓
              </div>
            )}
          </li>
        ))}
      </ol>
      {outcome && (
        <div className="border border-accent/50 bg-accent-soft px-4 py-4">
          <p className="text-sm font-medium text-accent">{outcome.ja}</p>
          <p className="mt-0.5 text-[0.7rem] tracking-wide text-text-faint">
            {outcome.en}
          </p>
        </div>
      )}
    </figure>
  );
}
