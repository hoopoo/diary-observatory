import Link from "next/link";

export function EntityBreadcrumb({
  name,
  nameJa,
}: {
  name: string;
  nameJa?: string;
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
          <Link href="/entities" className="focus-ring hover:text-text-soft">
            Entities
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-text-soft" aria-current="page">
          {name}
          {nameJa && nameJa !== name && (
            <span className="text-text-faint"> / {nameJa}</span>
          )}
        </li>
      </ol>
    </nav>
  );
}
