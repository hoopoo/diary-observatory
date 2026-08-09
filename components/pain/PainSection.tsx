import type { ReactNode } from "react";

export function PainSection({
  index,
  title,
  titleJa,
  children,
}: {
  index?: string;
  title: string;
  titleJa?: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border-soft pt-10">
      <div className="flex items-baseline gap-3">
        {index && (
          <span className="editorial text-sm text-accent" aria-hidden="true">
            {index}
          </span>
        )}
        <h2 className="editorial text-2xl text-text md:text-[1.7rem]">
          {title}
        </h2>
      </div>
      {titleJa && <p className="jp-heading mt-2 text-base">{titleJa}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}

/** A quiet, centered "core sentence" pull-quote used across the network. */
export function PainCoreQuote({
  children,
  en,
}: {
  children: ReactNode;
  en?: string;
}) {
  return (
    <blockquote className="my-8 border-l border-accent bg-accent-soft px-5 py-4">
      <p className="jp-serif text-base text-text md:text-lg">{children}</p>
      {en && <p className="mt-2 text-sm text-text-faint">{en}</p>}
    </blockquote>
  );
}
