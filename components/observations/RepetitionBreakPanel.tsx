export function RepetitionBreakPanel() {
  const items = [
    {
      label: "Routine",
      labelJa: "反復",
      text: "Repeated action — walking, working, drinking, writing, visiting.",
    },
    {
      label: "Change",
      labelJa: "変化",
      text: "Altered action — when the usual route or habit shifts.",
    },
    {
      label: "End",
      labelJa: "終了",
      text: "Action no longer possible — closure, illness, death, absence.",
    },
    {
      label: "Reason",
      labelJa: "理由",
      text: "Body / city / institution / death / unknown — not asserted without sources.",
    },
  ];

  return (
    <aside className="not-prose my-10">
      <p className="mb-4 text-xs text-text-faint">
        Conceptual frame — dated break events await further indexing.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.label} className="border border-border-soft px-4 py-4">
            <p className="editorial text-lg text-text">{item.label}</p>
            <p className="jp-serif text-xs text-accent">{item.labelJa}</p>
            <p className="mt-2 text-sm text-text-soft">{item.text}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
