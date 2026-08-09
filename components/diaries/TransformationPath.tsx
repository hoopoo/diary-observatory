import Link from "next/link";
import { transformationPath } from "@/data/diaries/horoki";

export function TransformationPath() {
  return (
    <aside className="not-prose my-10">
      <h3 className="editorial text-2xl text-text">
        From lived life to published work
      </h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        生活から刊行作品へ
      </p>
      <ol className="mt-6 space-y-3">
        {transformationPath.map((step, i) => (
          <li key={step.id} className="border border-border px-4 py-4 text-sm">
            <p className="label">{step.label}</p>
            <p className="jp-serif mt-1 text-text-soft">{step.labelJa}</p>
            <dl className="mt-3 grid gap-2 text-text-soft sm:grid-cols-2">
              <div>
                <dt className="text-[0.65rem] text-text-faint">What survives</dt>
                <dd className="mt-1">{step.survives}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] text-text-faint">What may change</dt>
                <dd className="mt-1">{step.mayChange}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] text-text-faint">Who intervenes</dt>
                <dd className="mt-1">{step.actor}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] text-text-faint">Status</dt>
                <dd className="mt-1 text-[0.65rem] tracking-wide text-text-faint">
                  {step.sourceType} · {step.verificationStatus}
                </dd>
              </div>
            </dl>
            {i < transformationPath.length - 1 ? (
              <p className="mt-2 text-text-faint">↓</p>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs text-text-faint">
        Related:{" "}
        <Link
          href="/writers/fumiko-hayashi"
          className="underline-offset-4 hover:underline"
        >
          Fumiko Hayashi Writer Observatory
        </Link>
      </p>
    </aside>
  );
}
