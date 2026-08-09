import Link from "next/link";
import { VERIFICATION_LABELS } from "@/lib/labels";
import type { RoutePoint } from "@/lib/types";

export function RouteTimeline({
  points,
  title = "Known route",
  titleJa = "確認できた経路",
}: {
  points: RoutePoint[];
  title?: string;
  titleJa?: string;
}) {
  return (
    <div>
      <p className="label">{title}</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">{titleJa}</p>
      <ol className="mt-6 flex flex-col">
        {points.map((point, index) => {
          const verification = VERIFICATION_LABELS[point.verificationStatus];
          const content = (
            <>
              <span className="text-sm text-text-soft">{point.label}</span>
              {point.labelJa && (
                <span className="text-sm text-text-faint">
                  {" "}
                  / {point.labelJa}
                </span>
              )}
            </>
          );

          return (
            <li key={point.id} className="flex flex-col items-start">
              <div className="border border-border px-4 py-3">
                {point.href ? (
                  <Link
                    href={point.href}
                    className="focus-ring hover:text-text"
                  >
                    {content}
                  </Link>
                ) : (
                  <span>{content}</span>
                )}
                <dl className="mt-2 grid gap-1 text-[0.65rem] tracking-wide text-text-faint sm:grid-cols-2">
                  <div>
                    <dt className="inline">Transport: </dt>
                    <dd className="inline">
                      {point.transportMode ?? "Unknown"}
                    </dd>
                  </div>
                  <div>
                    <dt className="inline">Coords: </dt>
                    <dd className="inline">
                      {point.latitude == null || point.longitude == null
                        ? "null"
                        : `${point.latitude}, ${point.longitude}`}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="inline">Verification: </dt>
                    <dd className="inline">
                      {verification.en} / {verification.ja}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="inline">routeOrder: </dt>
                    <dd className="inline">{point.order}</dd>
                  </div>
                </dl>
              </div>
              {index < points.length - 1 && (
                <span
                  className="px-3 py-1 text-xs text-accent"
                  aria-hidden="true"
                >
                  ↓
                </span>
              )}
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-xs text-text-faint">
        Map API is not used. Coordinates remain null until verified.
      </p>
    </div>
  );
}
