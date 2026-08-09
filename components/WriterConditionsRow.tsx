import {
  getPrimaryConditionDefinition,
  primaryConditionDefinitions,
  writerConditionAssignments,
} from "@/data/primary-conditions";

/** Data-driven strip — compares life structures, not celebrities. */
export function WriterConditionsRow() {
  const count = primaryConditionDefinitions.length;

  return (
    <div className="border border-border-soft px-4 py-4 md:px-5">
      <p className="label">{count} conditions</p>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
        {writerConditionAssignments.map((assignment) => {
          const def = getPrimaryConditionDefinition(assignment.conditionId);
          if (!def) return null;
          const short = def.shortLabel ?? def.label;
          return (
            <li
              key={assignment.conditionId}
              className="text-xs tracking-wide text-text-soft"
              title={def.label}
            >
              <span className="text-text">{short}</span>
              <span className="text-text-faint"> · {assignment.writer}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Compact nine-axis grid — Observation Axis is the subject, not the person.
 * Responsive; no hard-coded “exactly nine” layout rules.
 */
export function PrimaryConditionsGrid() {
  return (
    <div className="border border-border-soft px-4 py-5 md:px-5">
      <p className="label">Nine Primary Conditions</p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        観測軸。人物の本質ではなく、比較のための入口。
      </p>
      <ul className="mt-5 grid gap-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {primaryConditionDefinitions.map((def) => (
          <li
            key={def.id}
            className="border border-border-soft px-3 py-3"
            title={def.label}
          >
            <p className="text-sm text-text">{def.shortLabel ?? def.label}</p>
            <p className="jp-serif mt-1 text-xs text-text-faint">
              {def.shortLabelJa ?? def.labelJa}
            </p>
            {def.shortLabel && def.shortLabel !== def.label ? (
              <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
                {def.label}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
