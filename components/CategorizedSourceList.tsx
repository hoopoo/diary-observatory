import {
  SOURCE_CATEGORY_LABELS,
  SOURCE_STATUS_LABELS,
} from "@/lib/labels";
import type { Source, SourceCategory } from "@/lib/types";

const ORDER: SourceCategory[] = ["primary", "verification", "editorial"];

export function CategorizedSourceList({ sources }: { sources: Source[] }) {
  return (
    <section aria-labelledby="sources-heading" className="my-14">
      <h2 id="sources-heading" className="editorial text-2xl text-text">
        Sources
      </h2>
      <p className="jp-serif mt-2 text-sm text-text-faint">出典</p>

      <div className="mt-8 space-y-8">
        {ORDER.map((category) => {
          const items = sources.filter((s) => s.category === category);
          const labels = SOURCE_CATEGORY_LABELS[category];
          return (
            <div key={category}>
              <h3 className="label">
                {labels.en} / {labels.ja}
              </h3>
              {items.length === 0 ? (
                <p className="mt-3 border border-border-soft px-4 py-3 text-sm text-text-faint">
                  Source needed
                </p>
              ) : (
                <ul className="mt-3 space-y-3">
                  {items.map((source) => {
                    const status = source.status
                      ? SOURCE_STATUS_LABELS[source.status]
                      : source.needed
                        ? SOURCE_STATUS_LABELS.needed
                        : undefined;
                    return (
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
                          {status && (
                            <span className="border border-border px-1.5 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
                              {status.en}
                            </span>
                          )}
                        </div>
                        {source.note && (
                          <p className="mt-1 text-xs text-text-faint">
                            {source.note}
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
