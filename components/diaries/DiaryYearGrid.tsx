import Link from "next/link";
import type { DiaryYear } from "@/lib/types";

const STATUS_LABEL: Record<DiaryYear["researchStatus"], string> = {
  indexed: "Indexed",
  partial: "Partial",
  "not-indexed": "Not indexed",
  "research-queued": "Research queued",
};

export function DiaryYearGrid({
  years,
  yearPathBase,
  clickableYears = [],
}: {
  years: DiaryYear[];
  yearPathBase: string;
  /** Years that already have a year detail page */
  clickableYears?: number[];
}) {
  return (
    <ul className="mt-8 grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
      {years.map((y) => {
        const clickable = clickableYears.includes(y.year);
        const detail =
          y.researchStatus === "indexed"
            ? `${y.indexedCount} indexed entry${y.indexedCount === 1 ? "" : "ies"}`
            : y.researchStatus === "research-queued"
              ? "Research queued"
              : "Not yet indexed";

        const className = `focus-ring flex flex-col border border-border-soft px-2 py-2.5 text-left ${
          clickable
            ? "hover:border-text-faint"
            : "cursor-default opacity-90"
        } ${
          y.researchStatus === "indexed"
            ? "border-accent/40"
            : y.researchStatus === "research-queued"
              ? "border-border"
              : ""
        }`;

        const inner = (
          <>
            <span className="editorial text-sm text-text">{y.year}</span>
            <span className="mt-1 text-[0.6rem] leading-snug tracking-wide text-text-faint">
              {STATUS_LABEL[y.researchStatus]}
            </span>
            <span className="mt-0.5 text-[0.6rem] leading-snug text-text-faint">
              {detail}
            </span>
            {!clickable && (
              <span className="mt-1 text-[0.55rem] text-text-faint/80">
                Coming year
              </span>
            )}
          </>
        );

        return (
          <li key={y.id}>
            {clickable ? (
              <Link href={`${yearPathBase}/${y.year}`} className={className}>
                {inner}
              </Link>
            ) : (
              <div className={className} aria-disabled="true">
                {inner}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
