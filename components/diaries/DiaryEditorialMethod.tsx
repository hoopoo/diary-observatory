export function DiaryEditorialMethod({
  steps,
}: {
  steps: Array<{ step: number; en: string; ja: string }>;
}) {
  return (
    <ol className="mt-8 space-y-4">
      {steps.map((s) => (
        <li key={s.step} className="flex gap-4 border-b border-border-soft pb-4">
          <span className="editorial text-xl text-accent">{s.step}</span>
          <div>
            <p className="text-sm text-text-soft">{s.en}</p>
            <p className="jp-serif mt-1 text-sm text-text-faint">{s.ja}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
