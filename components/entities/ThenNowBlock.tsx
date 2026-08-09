export function ThenNowBlock({
  then,
  now,
  note,
  title = "Then / Now",
  titleJa = "当時と現在",
}: {
  then: { year: number; items: string[] };
  now: { year: number; items: string[] };
  note?: string;
  title?: string;
  titleJa?: string;
}) {
  return (
    <section className="my-14" aria-labelledby="then-now">
      <h2 id="then-now" className="editorial text-2xl text-text md:text-3xl">
        {title}
      </h2>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="paper-panel p-6">
          <p className="label">Then</p>
          <p className="editorial mt-2 text-3xl text-text">{then.year}</p>
          <ul className="mt-5 space-y-3">
            {then.items.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-text-soft">
                <span className="text-accent" aria-hidden="true">
                  –
                </span>
                <span className="jp-serif">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="paper-panel p-6">
          <p className="label">Now</p>
          <p className="editorial mt-2 text-3xl text-text">{now.year}</p>
          <ul className="mt-5 space-y-3">
            {now.items.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-text-soft">
                <span className="text-accent" aria-hidden="true">
                  –
                </span>
                <span className="jp-serif">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {note && (
        <p className="mt-4 text-xs text-text-faint">{note}</p>
      )}
    </section>
  );
}
