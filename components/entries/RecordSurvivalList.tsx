import type { RecordSurvival } from "@/lib/types";

export function RecordSurvivalList({ items }: { items: RecordSurvival[] }) {
  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.id} className="border border-border px-4 py-4 text-sm">
          <p className="label">{item.type}</p>
          <h3 className="mt-2 text-text-soft">{item.label}</h3>
          {item.labelJa && (
            <p className="jp-serif mt-1 text-xs text-text-faint">
              {item.labelJa}
            </p>
          )}
          <p className="mt-2 text-xs text-text-faint">{item.description}</p>
          <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
            {item.verificationStatus}
          </p>
        </li>
      ))}
    </ul>
  );
}
