export function RoppaTextPortrait({ years }: { years: string }) {
  return (
    <div
      className="paper-panel relative overflow-hidden px-6 py-8 md:px-8 md:py-10"
      aria-hidden="true"
    >
      <p className="label">Text portrait</p>
      <div className="mt-4 border border-border-soft px-5 py-6 font-mono text-[0.8rem] leading-relaxed tracking-wide">
        <p className="text-[0.65rem] tracking-[0.28em] text-text-faint">
          ROPPA FURUKAWA
        </p>
        <p className="mt-2 text-[0.65rem] tracking-[0.18em] text-text-faint">
          古川緑波 / 古川ロッパ
        </p>
        <p className="mt-4 text-sm tracking-[0.2em] text-text-soft">{years}</p>
        <p className="mt-6 text-[0.7rem] text-text-faint">
          STAGE / FOOD / BODY / WAR / AUDIENCE
        </p>
        <div className="mt-8 space-y-2 border-t border-border-soft pt-5 text-[0.7rem] text-text-faint">
          <p className="border-b border-dotted border-border pb-1">
            call sheet · cue · waiting room
          </p>
          <p className="border-b border-dotted border-border pb-1">
            dressing-room board · curtain
          </p>
          <p className="border-b border-dotted border-border pb-1">
            diary page · menu · weight line
          </p>
          <p className="border-b border-dotted border-border pb-1">
            house · laugh · empty seat
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-1 bottom-2 select-none font-serif text-[5rem] leading-none text-border opacity-40">
        楽
      </div>
    </div>
  );
}
