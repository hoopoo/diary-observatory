import { EpistemicLabel } from "@/components/EpistemicLabel";
import type { LifeTextRelation } from "@/lib/types";

export function LifeTextFictionPanel({
  title,
  titleJa,
  lived,
  written,
  fictionalized,
  caution,
  relations,
}: {
  title: string;
  titleJa: string;
  lived: { label: string; labelJa: string; items: string[] };
  written: { label: string; labelJa: string; items: string[] };
  fictionalized: { label: string; labelJa: string; items: string[] };
  caution: string;
  relations: LifeTextRelation[];
}) {
  const columns = [lived, written, fictionalized];

  return (
    <div>
      <h2 className="editorial text-2xl text-text md:text-3xl">{title}</h2>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {columns.map((col) => (
          <div key={col.label} className="border border-border-soft px-4 py-5">
            <p className="editorial text-xl text-text">{col.label}</p>
            <p className="jp-serif mt-1 text-sm text-accent">{col.labelJa}</p>
            <ul className="mt-4 space-y-2">
              {col.items.map((item) => (
                <li key={item} className="text-sm text-text-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-6 max-w-2xl text-xs text-text-faint">{caution}</p>

      {relations.length > 0 && (
        <ul className="mt-8 space-y-3">
          {relations.map((rel) => (
            <li
              key={rel.id}
              className="border border-border-soft px-4 py-3 text-sm"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="border border-border px-1.5 py-0.5 text-[0.65rem] text-text-faint">
                  {rel.relationType}
                </span>
                <span className="text-[0.65rem] text-text-faint">
                  {rel.verificationStatus}
                </span>
              </div>
              <p className="mt-2 text-text-soft">{rel.livedContext}</p>
              <p className="mt-1 text-xs text-text-faint">{rel.summary}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <EpistemicLabel kind="fact" />
        <EpistemicLabel kind="observation" />
        <EpistemicLabel kind="interpretation" />
      </div>
    </div>
  );
}
