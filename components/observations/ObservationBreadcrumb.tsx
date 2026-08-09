import Link from "next/link";

export function ObservationBreadcrumb({ label }: { label: string }) {
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
          <Link
            href="/observations"
            className="focus-ring hover:text-text-soft"
          >
            Observations
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-text-soft" aria-current="page">
          {label}
        </li>
      </ol>
    </nav>
  );
}
