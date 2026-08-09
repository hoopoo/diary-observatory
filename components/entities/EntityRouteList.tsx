import Link from "next/link";

export function EntityRouteList({
  steps,
}: {
  steps: Array<{
    label: string;
    labelJa?: string;
    href: string | null;
  }>;
}) {
  return (
    <ol className="mt-6 flex flex-col">
      {steps.map((step, index) => (
        <li key={`${step.label}-${index}`} className="flex flex-col items-start">
          {step.href ? (
            <Link
              href={step.href}
              className="focus-ring border border-border px-4 py-2 text-sm text-text-soft hover:border-text-faint"
            >
              {step.label}
              {step.labelJa && (
                <span className="text-text-faint"> / {step.labelJa}</span>
              )}
            </Link>
          ) : (
            <span className="border border-border-soft px-4 py-2 text-sm text-text-faint">
              {step.label}
              {step.labelJa && ` / ${step.labelJa}`}
            </span>
          )}
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
