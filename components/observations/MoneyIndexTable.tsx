import Link from "next/link";
import { CostVisibilityBadge } from "@/components/observations/CostVisibilityBadge";
import { moneyRecords } from "@/data/money-records";

const WRITER_NAME: Record<string, string> = {
  "writer-nishimura": "Nishimura",
  "writer-bukowski": "Bukowski",
  "writer-kafu": "Kafū",
};

function formatAmount(amount: number | null, currency?: string | null) {
  if (amount == null) return "Not indexed";
  if (currency === "JPY") return `¥${amount}`;
  if (currency) return `${currency} ${amount}`;
  return String(amount);
}

export function MoneyIndexTable() {
  return (
    <aside className="not-prose my-14">
      <h3 className="editorial text-2xl text-text">Money index</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        Reusable table · independent /money page later
      </p>

      <div className="mt-6 space-y-3 md:hidden">
        {moneyRecords.map((r) => (
          <article key={r.id} className="border border-border px-4 py-4">
            <p className="text-xs text-text-faint">
              {r.date ?? "—"} · {WRITER_NAME[r.writerId] ?? r.writerId}
            </p>
            <p className="editorial mt-2 text-lg text-text">{r.category}</p>
            <p className="mt-1 text-sm text-text-soft">
              {formatAmount(r.amount, r.currency)}
            </p>
            <p className="mt-2 text-sm text-text-faint">{r.contextJa ?? r.context}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <CostVisibilityBadge visibility={r.costVisibility} />
              <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
                {r.evidenceLevel}
              </span>
              <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
                {r.verificationStatus}
              </span>
            </div>
            {r.placeHref ? (
              <Link
                href={r.placeHref}
                className="focus-ring mt-3 inline-block text-xs text-accent underline-offset-4 hover:underline"
              >
                {r.placeLabel}
              </Link>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mt-6 hidden overflow-x-auto md:block">
        <table className="w-full min-w-[56rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs tracking-wide text-text-faint">
              <th className="py-2 pr-3 font-normal">Date</th>
              <th className="py-2 pr-3 font-normal">Writer</th>
              <th className="py-2 pr-3 font-normal">Category</th>
              <th className="py-2 pr-3 font-normal">Amount</th>
              <th className="py-2 pr-3 font-normal">Currency</th>
              <th className="py-2 pr-3 font-normal">Context</th>
              <th className="py-2 pr-3 font-normal">Place</th>
              <th className="py-2 pr-3 font-normal">Evidence</th>
              <th className="py-2 font-normal">Verification</th>
            </tr>
          </thead>
          <tbody>
            {moneyRecords.map((r) => (
              <tr key={r.id} className="border-b border-border-soft align-top">
                <td className="py-3 pr-3 text-text-faint">{r.date ?? "—"}</td>
                <td className="py-3 pr-3">{WRITER_NAME[r.writerId] ?? r.writerId}</td>
                <td className="py-3 pr-3">{r.category}</td>
                <td className="py-3 pr-3 text-text-faint">
                  {formatAmount(r.amount, r.currency)}
                </td>
                <td className="py-3 pr-3 text-text-faint">{r.currency ?? "—"}</td>
                <td className="py-3 pr-3 text-text-soft">
                  {r.contextJa ?? r.context}
                </td>
                <td className="py-3 pr-3">
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
                </td>
                <td className="py-3 pr-3 text-text-faint">{r.evidenceLevel}</td>
                <td className="py-3 text-text-faint">{r.verificationStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </aside>
  );
}
