import Link from "next/link";

export function WarEntryPreview({
  items,
}: {
  items: Array<{
    id: string;
    date: string;
    label: string;
    labelJa: string;
    comingHref: string;
    status: string;
  }>;
}) {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.id} className="border border-dashed border-border px-5 py-5">
          <p className="label">{item.date}</p>
          <p className="editorial mt-2 text-lg text-text">{item.label}</p>
          <p className="jp-serif mt-1 text-sm text-text-faint">{item.labelJa}</p>
          <p className="mt-4 border border-border px-2 py-1 text-[0.65rem] tracking-wide text-accent inline-block">
            {item.status}
          </p>
          <p className="mt-3 text-xs text-text-faint">
            Diary text location not yet confirmed — no concrete content.
          </p>
          <Link
            href={item.comingHref}
            className="focus-ring mt-4 inline-block text-xs text-text-soft underline-offset-4 hover:underline"
          >
            Related Same Day scaffold
          </Link>
        </li>
      ))}
    </ul>
  );
}
