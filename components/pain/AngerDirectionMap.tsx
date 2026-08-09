import { angerDirections, type AngerDirection } from "@/data/pain";
import { CONFLICT_LABELS } from "@/lib/pain";

const VISIBILITY_LABEL: Record<AngerDirection["visibility"], string> = {
  high: "可視化されやすい",
  medium: "中程度",
  low: "可視化されにくい",
};

export function AngerDirectionMap({
  directions = angerDirections,
}: {
  directions?: AngerDirection[];
}) {
  return (
    <figure className="not-prose my-10">
      <figcaption className="sr-only">
        怒りの方向。上向き・水平・内向き・制度的の四方向と、その可視化されやすさ。
      </figcaption>
      <div className="grid gap-4 sm:grid-cols-2">
        {directions.map((dir) => {
          const label = CONFLICT_LABELS[dir.direction];
          const emphasized =
            dir.direction === "horizontal" || dir.direction === "institutional";
          return (
            <div
              key={dir.direction}
              className={`flex flex-col border px-5 py-5 ${
                emphasized ? "border-border" : "border-border-soft"
              }`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <p className="editorial text-lg text-text">{label.en}</p>
                <p className="jp-heading text-sm">{label.ja}</p>
              </div>
              <p className="jp-serif mt-2 text-xs text-text-faint">
                {label.note}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {dir.examples.map((ex) => (
                  <li key={ex.ja} className="filter-chip text-[0.7rem]">
                    {ex.ja}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-2">
                <span
                  className="h-1.5 flex-1 rounded-full bg-surface"
                  aria-hidden="true"
                >
                  <span
                    className="block h-full rounded-full bg-accent"
                    style={{
                      width:
                        dir.visibility === "high"
                          ? "90%"
                          : dir.visibility === "medium"
                            ? "45%"
                            : "18%",
                    }}
                  />
                </span>
                <span className="text-[0.68rem] text-text-faint">
                  SNS: {VISIBILITY_LABEL[dir.visibility]}
                </span>
              </div>
              <p className="mt-2 text-xs text-text-soft">{dir.visibilityNote}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-5 text-sm text-text-soft">
        Horizontal hostility is the most visible on SNS; upward and
        institutional demands are harder to see, and so harder to form.
      </p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        水平的敵意はSNSで最も可視化されやすい。一方、上向き・制度的な要求は構造が見えにくく、形成されづらい。
      </p>
    </figure>
  );
}
