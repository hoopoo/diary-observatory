export function QuoteBlock({
  en,
  ja,
  note,
}: {
  en: string;
  ja?: string;
  note?: string;
}) {
  return (
    <blockquote className="border-l border-accent pl-4">
      <p className="editorial text-lg text-accent md:text-xl">{en}</p>
      {ja && <p className="jp-serif mt-2 text-sm text-text-soft">{ja}</p>}
      {note && (
        <p className="mt-3 text-xs text-text-faint">
          {note}
        </p>
      )}
    </blockquote>
  );
}
