export function DiaryIndexingStatus({
  stats,
}: {
  stats: Array<{ label: string; labelJa?: string; count: number }>;
}) {
  return (
    <div className="mt-8">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => (
          <li
            key={s.label}
            className="flex items-center justify-between gap-3 border border-border-soft px-4 py-3"
          >
            <div>
              <p className="text-sm text-text-soft">{s.label}</p>
              {s.labelJa && (
                <p className="jp-serif text-xs text-text-faint">{s.labelJa}</p>
              )}
            </div>
            <span className="editorial text-2xl text-text">{s.count}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-2xl text-sm text-text-soft">
        This page is not a completed edition.
      </p>
      <p className="mt-2 max-w-2xl text-sm text-text-soft">
        It is a growing index of a forty-two-year diary.
      </p>
      <p className="jp-serif mt-4 max-w-2xl text-sm text-text-faint">
        このページは、『断腸亭日乗』の完成版データベースではない。
      </p>
      <p className="jp-serif mt-1 max-w-2xl text-sm text-text-faint">
        四十二年の日記を、少しずつ読み解くための成長する索引である。
      </p>
    </div>
  );
}
