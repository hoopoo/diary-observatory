export function ConceptQuote({ en, ja }: { en: string; ja: string }) {
  return (
    <figure className="my-10 border border-border px-5 py-6 md:px-6">
      <p className="label">Concept</p>
      <blockquote className="editorial mt-3 whitespace-pre-line text-xl text-accent md:text-2xl">
        {en}
      </blockquote>
      <figcaption className="jp-serif mt-3 text-sm text-text-soft">{ja}</figcaption>
    </figure>
  );
}
