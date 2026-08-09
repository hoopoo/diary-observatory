import { painLadderSteps, type LadderStep } from "@/data/pain";

export function PainLadder({
  steps = painLadderSteps,
}: {
  steps?: LadderStep[];
}) {
  return (
    <figure className="not-prose my-10">
      <figcaption className="sr-only">
        「自分もつらい」から「自分のほうがつらい」へ変化する六つの段階。
      </figcaption>
      <ol className="space-y-0">
        {steps.map((step, index) => (
          <li key={step.order}>
            <div className="flex gap-4 border border-border-soft bg-bg-raised px-4 py-4">
              <span
                className="editorial shrink-0 text-2xl text-accent"
                aria-hidden="true"
              >
                {String(step.order).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-medium text-text">
                  {step.ja}
                  <span className="ml-2 text-[0.7rem] font-normal tracking-wide text-text-faint">
                    {step.en}
                  </span>
                </p>
                <p className="jp-serif mt-1.5 text-sm text-text-soft">
                  {step.note}
                </p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className="flex pl-8 text-text-faint"
                aria-hidden="true"
              >
                <span className="py-1">↓</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}
