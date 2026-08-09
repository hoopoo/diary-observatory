export function AfterSuccessPersonaBlock() {
  return (
    <aside className="not-prose my-10 border border-border px-5 py-6">
      <p className="label">After success</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <p className="editorial text-lg text-text">Nishimura</p>
          <p className="mt-2 text-sm text-text-soft">
            危うく、露悪的で、酒を飲む私小説家——理解しやすい像が反復される。
          </p>
        </div>
        <div>
          <p className="editorial text-lg text-text">Bukowski</p>
          <p className="mt-2 text-sm text-text-soft">
            酒場から語るアウトロー——労働と小出版の時間が後景へ退く。
          </p>
        </div>
      </div>
    </aside>
  );
}
