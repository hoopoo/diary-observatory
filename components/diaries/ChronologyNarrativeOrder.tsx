export function ChronologyNarrativeOrder() {
  return (
    <aside className="not-prose my-10">
      <h3 className="editorial text-2xl text-text">
        Lived order / published order
      </h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        生きた順序と、刊行された順序
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="border border-border px-4 py-4">
          <p className="label">Lived chronology</p>
          <p className="jp-serif mt-2 text-sm text-text-soft">生きた順序</p>
          <p className="mt-3 text-sm text-text-faint">一日ずつ進む時間</p>
        </div>
        <div className="border border-border px-4 py-4">
          <p className="label">Reordering zone</p>
          <p className="jp-serif mt-2 text-sm text-text-soft">
            Reordering / omission / compression
          </p>
          <p className="mt-3 text-sm text-text-faint">確認済み対応なし</p>
        </div>
        <div className="border border-border px-4 py-4">
          <p className="label">Published sequence</p>
          <p className="jp-serif mt-2 text-sm text-text-soft">刊行された順序</p>
          <p className="mt-3 text-sm text-text-faint">版ごとに異なり得る</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-text-soft">
        No verified sequence mapping indexed yet.
      </p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        確認済みの順序対応は、まだ索引化されていません。
      </p>
    </aside>
  );
}
