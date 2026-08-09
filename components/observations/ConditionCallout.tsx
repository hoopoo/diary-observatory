export function ConditionCallout({
  label,
  condition,
  conditionJa,
}: {
  label: string;
  condition: string;
  conditionJa: string;
}) {
  return (
    <aside className="my-8 border border-border px-5 py-6">
      <p className="label">{label}</p>
      <p className="editorial mt-3 text-3xl text-accent">{condition}</p>
      <p className="jp-serif mt-2 text-sm text-text-soft">{conditionJa}</p>
    </aside>
  );
}
