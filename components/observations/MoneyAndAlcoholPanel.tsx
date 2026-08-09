export function MoneyAndAlcoholPanel() {
  const related = ["食事", "交通", "本", "賭け", "家賃", "投稿", "医療"];

  return (
    <aside className="not-prose my-10 space-y-4">
      <div className="border border-dashed border-border px-4 py-5">
        <p className="label">Known alcohol spending</p>
        <p className="editorial mt-3 text-xl text-text-faint">
          Alcohol spending is not yet indexed.
        </p>
        <p className="jp-serif mt-2 text-sm text-text-faint">
          酒に関する支出は現在索引化中。
        </p>
      </div>
      <div className="border border-border-soft px-4 py-4">
        <p className="label">Related spending</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {related.map((item) => (
            <li
              key={item}
              className="border border-border px-2 py-0.5 text-xs text-text-soft"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-border-soft px-4 py-4">
        <p className="label">Unknown spending</p>
        <p className="mt-2 text-sm text-text-faint">
          Amounts, frequencies, and modern conversions are not invented.
          Verification status: Indexing in progress.
        </p>
      </div>
    </aside>
  );
}
