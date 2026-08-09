import { writerConditions } from "@/data/writers/ichiyo-higuchi";

/** Six-axis strip — shows Diary Observatory compares life structures, not celebrities. */
export function WriterConditionsRow() {
  return (
    <div className="border border-border-soft px-4 py-4 md:px-5">
      <p className="label">Six conditions</p>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
        {writerConditions.map((c) => (
          <li key={c.id} className="text-xs tracking-wide text-text-soft">
            <span className="text-text">{c.label}</span>
            <span className="text-text-faint"> · {c.writer}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
