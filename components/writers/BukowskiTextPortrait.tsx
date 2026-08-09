export function BukowskiTextPortrait({
  years,
  city,
  motifs,
}: {
  years: string;
  city: string;
  motifs: string[];
}) {
  return (
    <div
      className="paper-panel relative overflow-hidden px-6 py-8 md:px-8 md:py-10"
      aria-hidden="true"
    >
      <p className="label">Text portrait</p>
      <div className="mt-4 border border-border-soft px-5 py-6 font-mono text-[0.8rem] leading-relaxed tracking-wide">
        <p className="text-[0.65rem] tracking-[0.28em] text-text-faint">
          CHARLES BUKOWSKI
        </p>
        <p className="mt-4 text-sm tracking-[0.2em] text-text-soft">{years}</p>
        <p className="mt-2 text-xs tracking-[0.28em] text-text-faint">{city}</p>
        <p className="mt-6 text-[0.7rem] text-text-faint">
          {motifs.join(" / ")}
        </p>

        {/* Typewriter ruling */}
        <div className="mt-8 space-y-2 border-t border-border-soft pt-5 text-[0.7rem] text-text-faint">
          <p className="border-b border-dotted border-border pb-1">
            shift · clock · stamp · fatigue
          </p>
          <p className="border-b border-dotted border-border pb-1">
            bar · beer · quiet corner · late
          </p>
          <p className="border-b border-dotted border-border pb-1">
            track · bet · wait · return
          </p>
          <p className="border-b border-dotted border-border pb-1">
            type · mail · reject · rewrite
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-1 bottom-2 select-none font-serif text-[5rem] leading-none text-border opacity-40">
        LA
      </div>
    </div>
  );
}
