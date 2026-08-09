import type { Source } from "@/lib/types";

export function SourceList({ sources }: { sources: Source[] }) {
  if (sources.length === 0) {
    return (
      <div className="border border-border px-4 py-3 text-sm text-text-faint">
        Source needed
      </div>
    );
  }

  return (
    <section aria-labelledby="sources-heading">
      <h2 id="sources-heading" className="label">
        Sources
      </h2>
      <ul className="mt-3 space-y-3">
        {sources.map((source) => (
          <li
            key={source.id}
            className="border border-border-soft px-4 py-3 text-sm text-text-soft"
          >
            <div className="flex flex-wrap items-center gap-2">
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring text-text underline-offset-4 hover:underline"
                >
                  {source.label}
                </a>
              ) : (
                <span className="text-text">{source.label}</span>
              )}
              {source.needed && (
                <span className="border border-border px-1.5 py-0.5 text-[0.65rem] tracking-wide text-accent">
                  Source needed
                </span>
              )}
            </div>
            {source.note && (
              <p className="mt-1 text-xs text-text-faint">{source.note}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
