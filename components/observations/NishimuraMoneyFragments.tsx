import Link from "next/link";
import { CostVisibilityBadge } from "@/components/observations/CostVisibilityBadge";
import { getMoneyRecordsByWriter } from "@/data/money-records";
import { moneyRecord as entryMoney } from "@/data/entries/2011-05-02-kenji-nishimura";

export function NishimuraMoneyFragments() {
  const records = getMoneyRecordsByWriter("writer-nishimura").filter(
    (r) => r.date === "2011-05-02" && r.category === "books",
  );
  const known = entryMoney.knownSpending;

  return (
    <aside className="not-prose my-10 space-y-4">
      <div className="border border-border px-4 py-4">
        <p className="label">Known spending</p>
        <p className="editorial mt-2 text-2xl text-text-faint">
          {known
            ? `${known.currency === "JPY" ? "¥" : ""}${known.amount}`
            : "No verified amount indexed"}
        </p>
        <p className="mt-2 text-sm text-text-faint">
          Unverified items: {entryMoney.unverifiedSpendingCount}
        </p>
      </div>
      <ul className="space-y-3">
        {records.map((r) => (
          <li key={r.id} className="border border-border-soft px-4 py-4">
            <p className="label">Money fragment</p>
            <p className="editorial mt-2 text-xl text-text-faint">
              Amount: Not indexed
            </p>
            <dl className="mt-3 grid gap-2 text-sm text-text-soft sm:grid-cols-2">
              <div>
                <dt className="text-xs text-text-faint">Object</dt>
                <dd>{r.objectLabel ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-xs text-text-faint">Place</dt>
                <dd>
                  {r.placeHref ? (
                    <Link
                      href={r.placeHref}
                      className="focus-ring underline-offset-4 hover:underline"
                    >
                      {r.placeLabel}
                    </Link>
                  ) : (
                    (r.placeLabel ?? "—")
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-text-faint">Date</dt>
                <dd>{r.date ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-xs text-text-faint">Verification</dt>
                <dd>{r.verificationStatus}</dd>
              </div>
            </dl>
            <div className="mt-3">
              <CostVisibilityBadge visibility={r.costVisibility} />
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
