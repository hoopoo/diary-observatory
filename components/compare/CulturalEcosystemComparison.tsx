export function CulturalEcosystemComparison({
  leftLabel,
  rightLabel,
  left,
  right,
}: {
  leftLabel: string;
  rightLabel: string;
  left: string[];
  right: string[];
}) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      <FlowColumn label={leftLabel} steps={left} />
      <FlowColumn label={rightLabel} steps={right} />
    </div>
  );
}

function FlowColumn({ label, steps }: { label: string; steps: string[] }) {
  return (
    <div>
      <p className="label">{label}</p>
      <ol className="mt-4 flex flex-col">
        {steps.map((step, index) => (
          <li key={step} className="flex flex-col items-start">
            <span className="border border-border px-3 py-2 text-sm text-text-soft">
              {step}
            </span>
            {index < steps.length - 1 && (
              <span className="px-3 py-1 text-xs text-accent" aria-hidden="true">
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
