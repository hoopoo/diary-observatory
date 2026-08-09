import { BURDEN_LABELS, type BurdenDimension } from "@/lib/pain";

export function BurdenChips({
  dimensions,
  active,
}: {
  dimensions: BurdenDimension[];
  /** When set, render as an "all dimensions" row highlighting the active ones. */
  active?: BurdenDimension[];
}) {
  if (active) {
    return (
      <ul className="flex flex-wrap gap-1.5">
        {dimensions.map((dim) => {
          const on = active.includes(dim);
          return (
            <li key={dim}>
              <span
                data-active={on}
                className="filter-chip inline-flex text-[0.7rem]"
              >
                {BURDEN_LABELS[dim].ja}
                <span className="sr-only">
                  {on ? "（該当）" : "（非該当）"}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="flex flex-wrap gap-1.5">
      {dimensions.map((dim) => (
        <li key={dim}>
          <span className="filter-chip inline-flex text-[0.7rem]" data-active="true">
            {BURDEN_LABELS[dim].ja}
            <span className="text-text-faint/70"> · {BURDEN_LABELS[dim].en}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
