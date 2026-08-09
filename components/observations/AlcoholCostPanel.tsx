import Link from "next/link";

export function AlcoholCostPanel() {
  return (
    <aside className="not-prose my-10 space-y-3">
      <div className="border border-dashed border-border px-4 py-4">
        <p className="label">Known spending</p>
        <p className="editorial mt-2 text-xl text-text-faint">
          Alcohol spending is not yet indexed.
        </p>
      </div>
      <div className="border border-border-soft px-4 py-4">
        <p className="label">Unknown amount</p>
        <p className="mt-2 text-sm text-text-faint">
          Amounts are not invented. No medical or moral evaluation.
        </p>
      </div>
      <div className="border border-border-soft px-4 py-4">
        <p className="label">Related context</p>
        <p className="mt-2 text-sm text-text-soft">
          Place / company / time / body next morning — see{" "}
          <Link
            href="/observations/alcohol-explains-writers-too-easily"
            className="focus-ring underline-offset-4 hover:underline"
          >
            Alcohol Explains Writers Too Easily
          </Link>
          .
        </p>
      </div>
    </aside>
  );
}
