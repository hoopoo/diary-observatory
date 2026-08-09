export function DiaryTextPortrait({
  titleJa,
  years,
  city,
  motifs,
}: {
  titleJa: string;
  years: string;
  city: string;
  motifs: string[];
}) {
  return (
    <div
      className="paper-panel relative overflow-hidden px-6 py-8 md:px-8 md:py-10"
      aria-hidden="true"
    >
      <p className="label">Diary portrait</p>
      <div className="mt-4 border border-border-soft px-5 py-6">
        <p className="jp-heading text-2xl text-text md:text-3xl">{titleJa}</p>
        <p className="mt-4 text-sm tracking-[0.22em] text-text-faint">{years}</p>
        <p className="mt-2 text-xs tracking-[0.28em] text-text-soft">{city}</p>
        <p className="mt-6 text-[0.7rem] leading-relaxed tracking-wide text-text-faint">
          {motifs.join(" / ")}
        </p>

        {/* Decade spine */}
        <div className="mt-8 flex h-24 items-stretch gap-px">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-px flex-1 bg-border"
              style={{ opacity: 0.35 + (i % 4) * 0.12 }}
            />
          ))}
        </div>

        {/* Date-grid suggestion */}
        <div className="mt-6 grid grid-cols-7 gap-1.5 opacity-60">
          {Array.from({ length: 21 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square border border-border-soft"
              style={{ opacity: i === 0 || i === 14 ? 0.9 : 0.35 }}
            />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute -right-1 bottom-2 select-none font-serif text-[5rem] leading-none text-border opacity-40">
        乗
      </div>
    </div>
  );
}
