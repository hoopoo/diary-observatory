import Link from "next/link";

export function ThreeWriterHeader({
  cards,
  gridClassName = "md:grid-cols-3",
}: {
  cards: Array<{
    order: string;
    writerId: string;
    name: string;
    nameJa: string;
    years: string;
    city: string;
    primaryRecord: string;
    primaryRecordJa: string;
    observationWeight?: string;
    observationWeightJa?: string;
    keywords: string[];
    tagline: string;
    taglineJa: string;
    cta: string;
    href: string;
  }>;
  /** Default keeps Three Urban Diarists layout; use sm:grid-cols-2 xl:grid-cols-4 for four writers. */
  gridClassName?: string;
}) {
  return (
    <div className={`grid gap-4 ${gridClassName}`}>
      {cards.map((card) => (
        <article key={card.writerId} className="border border-border px-5 py-7">
          <p className="label">{card.order}</p>
          <h2 className="editorial mt-3 text-2xl text-text md:text-[1.65rem]">
            {card.name}
          </h2>
          <p className="jp-heading mt-1 text-lg">{card.nameJa}</p>
          <p className="mt-3 text-sm text-text-faint">{card.years}</p>
          <p className="mt-1 text-xs text-text-faint">
            Primary city: {card.city}
          </p>
          <p className="mt-4 text-xs text-text-faint">Primary record</p>
          <p className="mt-1 text-sm text-text-soft">{card.primaryRecord}</p>
          <p className="jp-serif text-xs text-text-faint">
            {card.primaryRecordJa}
          </p>
          {card.observationWeight && (
            <div className="mt-4">
              <p className="text-xs text-text-faint">Observation weight</p>
              <p className="mt-1 text-sm text-accent">{card.observationWeight}</p>
              {card.observationWeightJa && (
                <p className="jp-serif text-xs text-text-faint">
                  {card.observationWeightJa}
                </p>
              )}
            </div>
          )}
          <ul className="mt-5 flex flex-wrap gap-2">
            {card.keywords.map((k) => (
              <li
                key={k}
                className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint"
              >
                {k}
              </li>
            ))}
          </ul>
          <p className="editorial mt-6 text-lg text-accent">{card.tagline}</p>
          <p className="jp-serif mt-1 text-sm text-text-soft">{card.taglineJa}</p>
          <Link
            href={card.href}
            className="focus-ring mt-8 inline-flex cta cta-secondary"
          >
            {card.cta}
          </Link>
        </article>
      ))}
    </div>
  );
}
