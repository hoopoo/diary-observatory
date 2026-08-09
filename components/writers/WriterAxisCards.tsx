import Link from "next/link";

export function WriterAxisCards({
  writerSlug,
  axes,
  activeAxis,
}: {
  writerSlug: string;
  axes: Array<{
    id: string;
    label: string;
    labelJa: string;
    items: string[];
  }>;
  activeAxis?: string;
}) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {axes.map((axis) => {
        const active = activeAxis === axis.id;
        return (
          <li key={axis.id}>
            <Link
              href={`/writers/${writerSlug}?axis=${axis.id}`}
              className={`focus-ring paper-panel block h-full p-5 transition-colors hover:border-text-faint ${
                active ? "border-text" : ""
              }`}
              aria-current={active ? "page" : undefined}
            >
              <p className="editorial text-lg text-text">{axis.label}</p>
              <p className="jp-serif mt-1 text-sm text-accent">{axis.labelJa}</p>
              <p className="mt-3 text-xs leading-relaxed text-text-faint">
                {axis.items.join(" · ")}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
