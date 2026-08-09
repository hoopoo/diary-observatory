export function ThenNowRejectionBlock() {
  return (
    <aside className="not-prose my-10 grid gap-3 md:grid-cols-2">
      <div className="border border-border px-4 py-4">
        <p className="label">Then</p>
        <p className="editorial mt-3 text-xl text-text">Returned manuscript</p>
        <p className="jp-serif mt-2 text-sm text-text-soft">返送された原稿</p>
      </div>
      <div className="border border-border px-4 py-4">
        <p className="label">Now</p>
        <p className="editorial mt-3 text-xl text-text">
          No reply / no reach / no visibility
        </p>
        <p className="jp-serif mt-2 text-sm text-text-soft">
          未返信／届かない／見えない
        </p>
      </div>
      <p className="md:col-span-2 text-sm text-text-faint">
        昔も未返信はあった。紙の返送が常だったと一般化しない。
      </p>
    </aside>
  );
}
