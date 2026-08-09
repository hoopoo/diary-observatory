import Link from "next/link";

export function ComingObservations({
  items,
}: {
  items: Array<{
    id: string;
    title: string;
    titleEn?: string;
    status: "coming" | "available";
    href?: string;
  }>;
}) {
  return (
    <section className="my-14" aria-labelledby="related-obs">
      <h2 id="related-obs" className="editorial text-2xl text-text">
        Related Observations
      </h2>
      <p className="jp-serif mt-2 text-sm text-text-faint">関連観測</p>
      <ul className="mt-6 grid gap-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-2 border border-border-soft px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              {item.status === "available" && item.href ? (
                <Link
                  href={item.href}
                  className="jp-serif text-sm text-text underline-offset-4 hover:underline"
                >
                  {item.title}
                </Link>
              ) : (
                <p className="jp-serif text-sm text-text">{item.title}</p>
              )}
              {item.titleEn && (
                <p className="mt-1 text-xs text-text-faint">{item.titleEn}</p>
              )}
            </div>
            <span className="shrink-0 border border-border px-2 py-1 text-[0.65rem] tracking-wide text-text-faint">
              {item.status === "available"
                ? "Published"
                : "Coming observation"}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
