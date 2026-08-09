export function SectionHeading({
  eyebrow,
  title,
  titleJa,
  description,
  descriptionJa,
}: {
  eyebrow?: string;
  title: string;
  titleJa?: string;
  description?: string;
  descriptionJa?: string;
}) {
  return (
    <div className="max-w-2xl space-y-3">
      {eyebrow && <p className="label">{eyebrow}</p>}
      <h2 className="editorial text-3xl text-text md:text-4xl">{title}</h2>
      {titleJa && <p className="jp-heading text-lg">{titleJa}</p>}
      {description && (
        <p className="text-sm leading-relaxed text-text-soft">{description}</p>
      )}
      {descriptionJa && (
        <p className="jp-serif text-sm text-text-faint">{descriptionJa}</p>
      )}
    </div>
  );
}
