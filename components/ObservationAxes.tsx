import Link from "next/link";
import type { ObservationAxis } from "@/lib/types";

export function ObservationAxes({ axes }: { axes: ObservationAxis[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {axes.map((axis) => {
        const inner = (
          <>
            <p className="editorial text-lg text-text">{axis.label}</p>
            <p className="jp-serif mt-1 text-sm text-accent">{axis.labelJa}</p>
            <p className="mt-3 text-sm text-text-soft">{axis.questionJa}</p>
            <p className="mt-1 text-xs text-text-faint">{axis.question}</p>
          </>
        );
        return (
          <li key={axis.id} className="paper-panel p-5">
            {axis.href ? (
              <Link
                href={axis.href}
                className="focus-ring block hover:opacity-90"
              >
                {inner}
              </Link>
            ) : (
              inner
            )}
          </li>
        );
      })}
    </ul>
  );
}
