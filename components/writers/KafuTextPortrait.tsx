export function KafuTextPortrait({
  name,
  nameJa,
  years,
  city,
  motifs,
}: {
  name: string;
  nameJa: string;
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
      <div className="mt-4 border border-border-soft px-4 py-5">
        <p className="text-[0.65rem] tracking-[0.28em] text-text-faint">
          KAFŪ NAGAI
        </p>
        <p className="editorial mt-3 text-3xl text-text md:text-4xl">{name}</p>
        <p className="jp-heading mt-2 text-xl">{nameJa}</p>
        <div className="mt-5 h-px w-full bg-border" />
        <p className="mt-4 text-sm tracking-[0.2em] text-text-faint">{years}</p>
        <p className="mt-2 text-xs tracking-wide text-text-soft">{city}</p>
        <p className="mt-6 text-[0.7rem] leading-relaxed tracking-wide text-text-faint">
          {motifs.join(" / ")}
        </p>
        <div className="mt-6 space-y-1 border-t border-border-soft pt-4 font-serif text-[0.7rem] text-text-faint">
          <p>大正七年正月 · 晴 · 麻布</p>
          <p>庭の樹影 · 散歩 · 来客</p>
          <p>昭和二十年 · 焼失 · 東京</p>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-1 bottom-2 select-none font-serif text-[5rem] leading-none text-border opacity-50">
        日
      </div>
    </div>
  );
}
