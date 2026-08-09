import Link from "next/link";
import type { PrimaryCondition, Writer } from "@/lib/types";

const CONDITION_LABEL: Record<PrimaryCondition, string> = {
  environment: "Environment",
  media: "Media",
  labor: "Labor",
  maintenance: "Maintenance",
  performance: "Performance",
  "household-economy": "Household Economy",
  mixed: "Mixed",
  unknown: "Unknown",
};

export function WriterCard({ writer }: { writer: Writer }) {
  const years = writer.deathYear
    ? `${writer.birthYear}–${writer.deathYear}`
    : `${writer.birthYear}–`;
  const condition = writer.primaryCondition
    ? CONDITION_LABEL[writer.primaryCondition]
    : null;

  return (
    <Link
      href={`/writers/${writer.slug}`}
      className="focus-ring group paper-panel flex h-full flex-col gap-4 p-6 transition-colors hover:border-text-faint"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="editorial text-2xl text-text transition-opacity group-hover:opacity-80">
            {writer.name}
          </h3>
          <p className="jp-serif mt-1 text-sm text-accent">{writer.nameJa}</p>
        </div>
        <p className="label shrink-0">{years}</p>
      </div>

      {condition ? (
        <p className="inline-flex w-fit border border-border px-2 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
          {condition}
        </p>
      ) : null}

      <p className="text-xs tracking-wide text-text-faint">
        {writer.city} / {writer.themes.slice(0, 4).join(" / ")}
      </p>

      <p className="jp-serif text-sm text-text-soft">{writer.taglineJa}</p>
      <p className="text-sm text-text-faint">{writer.tagline}</p>

      <p className="mt-auto pt-2 text-xs tracking-wide text-accent underline-offset-4 group-hover:underline">
        Open writer →
      </p>
    </Link>
  );
}
