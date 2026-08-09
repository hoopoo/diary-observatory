import Link from "next/link";

export function SameDayBreadcrumb({ dateLabel }: { dateLabel: string }) {
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
          <Link href="/same-day" className="focus-ring hover:text-text-soft">
            Same Day
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-text-soft" aria-current="page">
          {dateLabel}
        </li>
      </ol>
    </nav>
  );
}
