import Link from "next/link";

export function EntryBreadcrumb({
  year,
  monthDay,
  writerName,
}: {
  year: string;
  monthDay: string;
  writerName: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-text-faint">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="focus-ring hover:text-text-soft">
            Diary Observatory
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <span className="text-text-faint">Entries</span>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <span className="text-text-faint">{year}</span>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <span className="text-text-faint">{monthDay}</span>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-text-soft" aria-current="page">
          {writerName}
        </li>
      </ol>
    </nav>
  );
}
