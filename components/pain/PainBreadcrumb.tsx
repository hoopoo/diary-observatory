import Link from "next/link";

export interface PainBreadcrumbItem {
  label: string;
  href?: string;
}

export function PainBreadcrumb({ items }: { items: PainBreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-text-faint">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="focus-ring hover:text-text-soft">
            Diary Observatory
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="focus-ring hover:text-text-soft">
                {item.label}
              </Link>
            ) : (
              <span className="text-text-soft" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
