export function HistoricalAmountNotice() {
  return (
    <aside className="not-prose my-10 border border-border px-5 py-6">
      <p className="label">Conversion policy</p>
      <p className="editorial mt-3 text-2xl text-accent">
        Historical amount only
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">原額のみ表示</p>
      <p className="mt-4 text-sm text-text-faint">
        Modern conversion is not implemented in MVP. If added later: index,
        base year, method, region, limits, and calculation date must be shown.
      </p>
    </aside>
  );
}
