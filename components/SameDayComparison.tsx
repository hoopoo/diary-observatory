import Link from "next/link";
import type { Comparison } from "@/lib/types";

function hrefFor(item: Comparison) {
  if (item.href) return item.href;
  if (item.status === "available") return `/same-day/${item.date}`;
  return `/compare#${item.id}`;
}

export function SameDayComparison({ items }: { items: Comparison[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.id}
          className="paper-panel flex h-full flex-col gap-3 p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="label">{item.date}</p>
            {item.status === "coming" ? (
              <span className="border border-border px-2 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
                Coming observation
              </span>
            ) : (
              <span className="border border-accent/40 px-2 py-0.5 text-[0.65rem] tracking-wide text-accent">
                Open comparison
              </span>
            )}
          </div>
          <h3 className="editorial text-xl text-text">{item.title}</h3>
          {item.titleJa && (
            <p className="jp-serif text-sm text-accent">{item.titleJa}</p>
          )}
          <p className="text-xs text-text-faint">
            {item.cities.join(" / ")}
          </p>
          {typeof item.indexedLives === "number" && (
            <p className="text-xs text-text-faint">
              Indexed lives: {item.indexedLives}
            </p>
          )}
          <p className="text-sm text-text-soft">
            {item.summaryJa ?? item.summary}
          </p>
          <Link
            href={hrefFor(item)}
            className="focus-ring mt-auto pt-2 text-xs tracking-wide text-accent underline-offset-4 hover:underline"
          >
            {item.status === "available" ? "Open Same Day" : "Open in Same Day"}
          </Link>
        </article>
      ))}
    </div>
  );
}
