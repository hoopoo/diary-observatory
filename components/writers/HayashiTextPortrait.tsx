export function HayashiTextPortrait({
  years,
}: {
  years: string;
}) {
  return (
    <div
      className="paper-panel relative overflow-hidden px-6 py-8 md:px-8 md:py-10"
      aria-hidden="true"
    >
      <p className="label">Text portrait</p>
      <div className="mt-4 border border-border-soft px-5 py-6 font-mono text-[0.8rem] leading-relaxed tracking-wide">
        <p className="text-[0.65rem] tracking-[0.28em] text-text-faint">
          FUMIKO HAYASHI
        </p>
        <p className="mt-4 text-sm tracking-[0.2em] text-text-soft">{years}</p>
        <p className="mt-6 text-[0.7rem] text-text-faint">
          WORK / ROOMS / FOOD / ROADS / WRITING
        </p>
        <div className="mt-8 space-y-2 border-t border-border-soft pt-5 text-[0.7rem] text-text-faint">
          <p className="border-b border-dotted border-border pb-1">
            ledger · fare · address change
          </p>
          <p className="border-b border-dotted border-border pb-1">
            manuscript paper · submission · wait
          </p>
          <p className="border-b border-dotted border-border pb-1">
            rent · kitchen · shared room
          </p>
          <p className="border-b border-dotted border-border pb-1">
            meal cost · hunger · rewrite
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-1 bottom-2 select-none font-serif text-[5rem] leading-none text-border opacity-40">
        旅
      </div>
    </div>
  );
}
