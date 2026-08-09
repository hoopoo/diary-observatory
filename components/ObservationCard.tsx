import Link from "next/link";
import type { Observation } from "@/lib/types";

export function ObservationCard({
  observation,
  featured = false,
}: {
  observation: Observation;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/observations/${observation.slug}`}
      className={`focus-ring group block transition-colors hover:border-text-faint ${
        featured ? "paper-panel p-7 md:p-9" : "paper-panel p-6"
      }`}
    >
      <p className="label">
        {featured ? "Featured Observation" : "Observation"}
      </p>
      <h3
        className={`jp-heading mt-3 text-text group-hover:opacity-85 ${
          featured ? "text-2xl md:text-3xl" : "text-xl"
        }`}
      >
        {observation.title}
      </h3>
      {observation.subtitle && (
        <p className="jp-serif mt-2 text-base text-text-soft">
          {observation.subtitle}
        </p>
      )}
      <p className="mt-4 text-sm leading-relaxed text-text-soft">
        {observation.summary}
      </p>
      <p className="mt-5 text-xs tracking-wide text-text-faint">
        {observation.themes.slice(0, 4).join(" · ")}
      </p>
    </Link>
  );
}
