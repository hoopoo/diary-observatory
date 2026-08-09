import Link from "next/link";

export function WriterRelatedWriters({
  items,
}: {
  items: Array<{
    id: string;
    name: string;
    nameJa: string;
    connection: string;
    text: string;
    cta: string;
    href: string;
    status: "coming" | "available";
  }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.id} className="paper-panel flex h-full flex-col p-6">
          <p className="label">Related writer</p>
          <h3 className="editorial mt-3 text-2xl text-text">{item.name}</h3>
          <p className="jp-serif mt-1 text-sm text-accent">{item.nameJa}</p>
          <p className="mt-3 text-xs text-text-faint">{item.connection}</p>
          <p className="jp-serif mt-4 flex-1 text-sm text-text-soft">{item.text}</p>
          {item.status === "coming" ? (
            <Link
              href={item.href}
              className="focus-ring mt-6 inline-flex items-center gap-2 border border-border px-3 py-2 text-xs text-text-faint"
            >
              {item.cta}
              <span className="border border-border px-1.5 py-0.5 text-[0.6rem]">
                Coming observation
              </span>
            </Link>
          ) : (
            <Link
              href={item.href}
              className="focus-ring mt-6 inline-flex border border-text bg-text px-4 py-2 text-xs text-bg"
            >
              {item.cta}
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}
