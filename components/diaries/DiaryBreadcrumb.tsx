import Link from "next/link";

export function DiaryBreadcrumb({
  title,
  titleJa,
}: {
  title: string;
  titleJa: string;
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
          <Link href="/diaries" className="focus-ring hover:text-text-soft">
            Diaries
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-text-soft" aria-current="page">
          {title}
          <span className="text-text-faint"> / {titleJa}</span>
        </li>
      </ol>
    </nav>
  );
}
