import { buildMoneySummary } from "@/data/money-records";

const WRITERS = [
  { id: "writer-nishimura", name: "Kenji Nishimura" },
  { id: "writer-bukowski", name: "Charles Bukowski" },
  { id: "writer-kafu", name: "Kafū Nagai" },
];

export function MoneyIndexingStatus() {
  return (
    <aside className="not-prose my-14">
      <h3 className="editorial text-2xl text-text">Indexed money records</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        索引化された金銭記録
      </p>
      <ul className="mt-6 space-y-4">
        {WRITERS.map((w) => {
          const summary = buildMoneySummary(w.id);
          const hasVerified =
            Object.keys(summary.knownExpensesByCurrency).length > 0 ||
            Object.keys(summary.knownIncomeByCurrency).length > 0;
          return (
            <li key={w.id} className="border border-border px-4 py-4">
              <p className="editorial text-xl text-text">{w.name}</p>
              {w.id === "writer-nishimura" ? (
                <>
                  <p className="mt-2 text-sm text-text-soft">
                    Book purchases · 2011-05-02
                  </p>
                  <p className="mt-1 text-sm text-text-faint">
                    {hasVerified
                      ? "Verified amounts present"
                      : "No verified amount indexed yet · titles indexed, prices pending"}
                  </p>
                </>
              ) : w.id === "writer-bukowski" ? (
                <p className="mt-2 text-sm text-text-faint">
                  No verified amount indexed yet
                </p>
              ) : (
                <p className="mt-2 text-sm text-text-faint">
                  No priced amount indexed in current selected entry
                </p>
              )}
              <p className="mt-2 text-xs text-text-faint">
                Unknown / unverified records: {summary.unknownRecordCount}
              </p>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
