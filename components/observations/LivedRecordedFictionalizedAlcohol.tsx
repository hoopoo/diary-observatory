import { EpistemicLabel } from "@/components/EpistemicLabel";
import { EntityNatureBadge } from "@/components/writers/EntityNatureBadge";
import { livedRecordedAlcohol } from "@/data/observations/alcohol-explains-writers-too-easily";
import Link from "next/link";

export function LivedRecordedFictionalizedAlcohol() {
  const columns = [
    { label: "Lived", labelJa: "実生活", items: livedRecordedAlcohol.lived },
    {
      label: "Recorded",
      labelJa: "記録",
      items: livedRecordedAlcohol.recorded,
    },
    {
      label: "Fictionalized",
      labelJa: "文学化",
      items: livedRecordedAlcohol.fictionalized,
    },
  ];

  return (
    <aside className="not-prose my-10">
      <div className="grid gap-3 md:grid-cols-3">
        {columns.map((col) => (
          <div key={col.label} className="border border-border-soft px-4 py-4">
            <p className="editorial text-lg text-text">{col.label}</p>
            <p className="jp-serif text-xs text-accent">{col.labelJa}</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="border border-border px-1.5 py-0.5 text-[0.65rem] text-text-faint">
          documented
        </span>
        <span className="border border-border px-1.5 py-0.5 text-[0.65rem] text-text-faint">
          probable
        </span>
        <span className="border border-border px-1.5 py-0.5 text-[0.65rem] text-text-faint">
          interpreted
        </span>
        <span className="border border-border px-1.5 py-0.5 text-[0.65rem] text-text-faint">
          unknown
        </span>
        <EntityNatureBadge nature="fictional" />
      </div>
      <p className="mt-3 text-xs text-text-faint">
        Henry Chinaski:{" "}
        <Link
          href="/entities/henry-chinaski"
          className="focus-ring underline-offset-4 hover:underline"
        >
          fictional entity
        </Link>
        . Not a real person.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <EpistemicLabel kind="fact" />
        <EpistemicLabel kind="observation" />
        <EpistemicLabel kind="interpretation" />
      </div>
    </aside>
  );
}
