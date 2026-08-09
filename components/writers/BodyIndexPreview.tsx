export function BodyIndexPreview({
  items,
  note,
}: {
  items: Array<{ id: string; label: string; labelJa: string }>;
  note: string;
}) {
  return (
    <div>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="border border-dashed border-border px-4 py-3"
          >
            <p className="text-sm text-text-soft">{item.label}</p>
            <p className="jp-serif mt-1 text-xs text-text-faint">{item.labelJa}</p>
            <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
              Indexing in progress
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-text-faint">{note}</p>
    </div>
  );
}
