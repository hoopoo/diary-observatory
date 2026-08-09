export function WriterTextPortrait({
  name,
  nameJa,
  years,
  areas,
  tagline,
}: {
  name: string;
  nameJa: string;
  years: string;
  areas: string[];
  tagline: string;
}) {
  return (
    <div
      className="paper-panel relative overflow-hidden px-6 py-8 md:px-8 md:py-10"
      aria-hidden="true"
    >
      <p className="label">Text portrait</p>
      <p className="editorial mt-4 text-3xl text-text md:text-4xl">{name}</p>
      <p className="jp-heading mt-2 text-xl">{nameJa}</p>
      <p className="mt-4 text-sm tracking-[0.2em] text-text-faint">{years}</p>
      <p className="mt-6 text-xs leading-relaxed tracking-wide text-text-soft">
        {areas.join(" · ")}
      </p>
      <p className="editorial mt-8 border-l border-accent pl-4 text-lg text-accent">
        “{tagline.replace(/\.$/, "")}”
      </p>
      <div className="pointer-events-none absolute -right-2 bottom-3 select-none font-serif text-[5.5rem] leading-none text-border opacity-60">
        日
      </div>
    </div>
  );
}
