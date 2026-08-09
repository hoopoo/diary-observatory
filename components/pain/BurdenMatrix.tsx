import { burdenMatrixDimensions, burdenPersonas } from "@/data/pain";
import { BURDEN_LABELS, type BurdenDimension } from "@/lib/pain";
import type { BurdenPersona } from "@/data/pain";

export function BurdenMatrix({
  dimensions = burdenMatrixDimensions,
  personas = burdenPersonas,
}: {
  dimensions?: BurdenDimension[];
  personas?: BurdenPersona[];
}) {
  return (
    <figure className="not-prose my-10">
      <figcaption className="sr-only">
        属性ではなく、生活負荷の重なりを示すマトリクス。行は事例、列は負荷の次元。
      </figcaption>

      {/* Desktop / tablet: grid matrix */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th
                scope="col"
                className="border-b border-border px-3 py-2 text-left align-bottom"
              >
                <span className="label">事例 / Case</span>
              </th>
              {dimensions.map((dim) => (
                <th
                  key={dim}
                  scope="col"
                  className="border-b border-border px-2 py-2 align-bottom"
                >
                  <span className="block text-[0.68rem] leading-tight text-text-faint">
                    {BURDEN_LABELS[dim].ja}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {personas.map((persona) => (
              <tr key={persona.id} className="align-top">
                <th
                  scope="row"
                  className="border-b border-border-soft px-3 py-3 text-left"
                >
                  <span className="text-sm font-medium text-text">
                    {persona.labelJa}
                  </span>
                  <span className="mt-1 block max-w-[16rem] text-xs text-text-faint">
                    {persona.note}
                  </span>
                </th>
                {dimensions.map((dim) => {
                  const on = persona.dimensions.includes(dim);
                  return (
                    <td
                      key={dim}
                      className="border-b border-border-soft px-2 py-3 text-center"
                    >
                      {on ? (
                        <span
                          className="inline-block h-2.5 w-2.5 rounded-full bg-accent"
                          role="img"
                          aria-label={`${BURDEN_LABELS[dim].ja}：該当`}
                        />
                      ) : (
                        <span
                          className="inline-block h-2.5 w-2.5 rounded-full border border-border-soft"
                          aria-hidden="true"
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards with chips */}
      <ul className="space-y-3 md:hidden">
        {personas.map((persona) => (
          <li
            key={persona.id}
            className="border border-border-soft bg-bg-raised px-4 py-4"
          >
            <p className="text-sm font-medium text-text">{persona.labelJa}</p>
            <p className="mt-1 text-xs text-text-faint">{persona.note}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {persona.dimensions.map((dim) => (
                <li
                  key={dim}
                  className="filter-chip text-[0.7rem]"
                  data-active="true"
                >
                  {BURDEN_LABELS[dim].ja}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-sm text-text-soft">
        The same person can carry several loads at once — across "middle",
        "recognized" and "healthy" alike.
      </p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        一人が複数の負荷を同時に抱えうる。中間層・現役世代・健常とされる人にも、負荷は重なる。
      </p>
    </figure>
  );
}
