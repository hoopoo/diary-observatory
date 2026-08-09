import { EntityStatusBadge } from "@/components/EntityStatusBadge";
import type { EntityStatus } from "@/lib/types";

export function EntityPlacePortrait({
  name,
  nameJa,
  area,
  date,
  typeLabel,
  status,
}: {
  name: string;
  nameJa: string;
  area: string;
  date: string;
  typeLabel: string;
  status: EntityStatus;
}) {
  return (
    <div
      className="paper-panel relative overflow-hidden px-6 py-8 md:px-8"
      aria-hidden="true"
    >
      <p className="label">Text place portrait</p>
      <p className="editorial mt-4 text-3xl text-text">{name}</p>
      <p className="jp-heading mt-2 text-xl">{nameJa}</p>
      <p className="mt-4 text-xs tracking-[0.18em] text-text-faint">
        {area} · {date}
      </p>
      <p className="mt-2 text-xs text-text-soft">{typeLabel}</p>
      <div className="mt-4">
        <EntityStatusBadge status={status} size="sm" />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-1.5" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-8 border border-border-soft bg-surface/40"
            style={{ opacity: 0.45 + (i % 3) * 0.15 }}
          />
        ))}
      </div>
      <p className="mt-4 font-serif text-[0.7rem] leading-relaxed tracking-wide text-text-faint">
        ¥— · 書名確認中 · shelf / spine / dust
      </p>
      <div className="pointer-events-none absolute -right-1 bottom-2 select-none font-serif text-[5rem] leading-none text-border opacity-50">
        店
      </div>
    </div>
  );
}
