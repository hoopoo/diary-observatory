import Link from "next/link";

export function ParallelDayCard({
  date,
  writer,
  summary,
  verification,
  href,
  coming,
}: {
  date: string;
  writer: string;
  summary: string;
  verification: string;
  href: string;
  coming?: boolean;
}) {
  return (
    <article className="flex h-full flex-col border border-border px-5 py-5">
      <p className="label">{date}</p>
      <h3 className="editorial mt-2 text-xl text-text">{writer}</h3>
      <p className="jp-serif mt-4 flex-1 text-sm text-text-soft">{summary}</p>
      <p className="mt-3 text-xs text-text-faint">Verification: {verification}</p>
      {coming ? (
        <Link
          href={href}
          className="focus-ring mt-5 inline-flex border border-border px-3 py-2 text-xs text-text-faint hover:border-text-faint"
        >
          No dated entry · open related source
        </Link>
      ) : (
        <Link
          href={href}
          className="focus-ring mt-5 inline-flex cta cta-secondary"
        >
          View this day
        </Link>
      )}
    </article>
  );
}
