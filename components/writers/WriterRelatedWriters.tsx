import { CtaLink } from "@/components/ui/CtaLink";

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
            <CtaLink href={item.href} variant="ghost" className="mt-6 self-start">
              {item.cta}
              <span className="ml-2 border border-border px-1.5 py-0.5 text-[0.6rem] text-text-faint">
                Coming observation
              </span>
            </CtaLink>
          ) : (
            <CtaLink
              href={item.href}
              variant="text"
              arrow
              className="mt-6 self-start"
            >
              {item.cta}
            </CtaLink>
          )}
        </article>
      ))}
    </div>
  );
}
