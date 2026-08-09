export function PainHero({
  labels,
  title,
  titleAlt,
  subtitle,
  lead,
  primary = "ja",
}: {
  labels: string[];
  title: string;
  titleAlt: string;
  subtitle?: string;
  lead?: string[];
  /** Which title carries heading weight. */
  primary?: "ja" | "en";
}) {
  return (
    <header className="border-b border-border pb-10">
      <ul className="flex flex-wrap gap-2" aria-label="Observation labels">
        {labels.map((label) => (
          <li key={label} className="label border border-border-soft px-2 py-1">
            {label}
          </li>
        ))}
      </ul>

      {primary === "ja" ? (
        <>
          <h1 className="jp-heading mt-6 text-3xl leading-tight md:text-[2.4rem]">
            {title}
          </h1>
          <p className="editorial mt-4 text-lg text-accent md:text-xl">
            {titleAlt}
          </p>
        </>
      ) : (
        <>
          <h1 className="editorial mt-6 text-4xl leading-tight text-text md:text-5xl">
            {title}
          </h1>
          <p className="jp-heading mt-4 text-lg">{titleAlt}</p>
        </>
      )}

      {subtitle && (
        <p className="jp-serif mt-5 max-w-2xl text-base text-text-soft md:text-lg">
          {subtitle}
        </p>
      )}

      {lead && (
        <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
          {lead.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
    </header>
  );
}
