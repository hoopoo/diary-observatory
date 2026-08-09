import { EpistemicLabel } from "@/components/EpistemicLabel";
import type { LifeSpeedPattern } from "@/lib/types";

export function ThreeLifeSpeeds({
  title,
  titleJa,
  patterns,
  noteEn,
  noteJa,
  caution,
  columnsClassName = "md:grid-cols-3",
}: {
  title: string;
  titleJa: string;
  patterns: LifeSpeedPattern[];
  noteEn: string;
  noteJa: string;
  caution: string;
  /** Safe extension for 4+ writers — default keeps Three Urban Diarists layout. */
  columnsClassName?: string;
}) {
  return (
    <section>
      <div className="flex flex-wrap items-center gap-3">
        <h2 className="editorial text-2xl text-text md:text-3xl">{title}</h2>
        <EpistemicLabel kind="interpretation" />
      </div>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>
      <div className={`mt-8 grid gap-6 ${columnsClassName}`}>
        {patterns.map((pattern) => (
          <div key={pattern.id}>
            <p className="label">{pattern.label}</p>
            <p className="jp-serif mt-1 text-sm text-accent">{pattern.labelJa}</p>
            <ol className="mt-4 flex flex-col">
              {pattern.steps.map((step, index) => (
                <li key={step.label} className="flex flex-col items-start">
                  <span className="border border-border px-3 py-2 text-sm text-text-soft">
                    <span className="block">{step.label}</span>
                    {step.labelJa && (
                      <span className="mt-0.5 block jp-serif text-xs text-text-faint">
                        {step.labelJa}
                      </span>
                    )}
                  </span>
                  {index < pattern.steps.length - 1 && (
                    <span
                      className="px-3 py-1 text-xs text-accent"
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-sm text-text-soft">{noteEn}</p>
      <p className="jp-serif mt-1 max-w-2xl text-sm text-text-faint">{noteJa}</p>
      <p className="mt-4 max-w-2xl text-xs text-text-faint">{caution}</p>
    </section>
  );
}
