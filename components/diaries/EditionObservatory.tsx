import Link from "next/link";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import {
  horokiEditionResearchSlots,
  horokiEditions,
} from "@/data/editions/horoki";

export function EditionObservatory() {
  return (
    <aside className="not-prose my-10">
      <h3 className="editorial text-2xl text-text">Edition observatory</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">版の観測</p>
      <Link
        href="/editions"
        className="focus-ring mt-3 inline-flex text-xs text-text-soft underline-offset-4 hover:underline"
      >
        Browse all editions
      </Link>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="observation" />
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          Version-sensitive · no invented imprints
        </span>
      </div>
      <div className="mt-6 grid gap-3">
        {horokiEditions.map((ed) => (
          <article key={ed.id} className="border border-border px-4 py-4">
            <p className="label">{ed.title}</p>
            <p className="jp-serif mt-1 text-sm text-text">{ed.titleJa}</p>
            <dl className="mt-3 grid gap-2 text-sm text-text-soft sm:grid-cols-2">
              <div>
                <dt className="text-[0.65rem] text-text-faint">Year / publisher</dt>
                <dd className="mt-1">
                  {ed.publicationYear ?? "—"} · {ed.publisher ?? "—"}
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] text-text-faint">Type</dt>
                <dd className="mt-1">{ed.editionType}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] text-text-faint">
                  Source text basis
                </dt>
                <dd className="mt-1">{ed.sourceTextBasis ?? ed.baseText ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] text-text-faint">
                  Editorial responsibility
                </dt>
                <dd className="mt-1">{ed.editorialResponsibility ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] text-text-faint">Known additions</dt>
                <dd className="mt-1">
                  {ed.knownAdditions ?? ed.additions ?? "—"}
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] text-text-faint">Known omissions</dt>
                <dd className="mt-1">
                  {ed.knownOmissions ?? ed.omissions ?? "—"}
                </dd>
              </div>
            </dl>
            <p className="mt-3 text-[0.65rem] tracking-wide text-text-faint">
              {ed.verificationStatus} · {ed.rightsStatus}
            </p>
            <Link
              href={`/editions/${ed.slug}`}
              className="focus-ring mt-4 inline-flex border border-text bg-text px-3 py-1.5 text-[0.65rem] text-bg"
            >
              Open Edition Observatory
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-6 border border-border-soft px-4 py-4">
        <p className="label">Research slots — not registered as EditionRecords</p>
        <ul className="mt-3 space-y-2 text-sm text-text-soft">
          {horokiEditionResearchSlots.map((slot) => (
            <li key={slot.id}>
              <span className="editorial text-base text-text">{slot.title}</span>
              <span className="jp-serif ml-2 text-text-faint">{slot.titleJa}</span>
              <p className="mt-1 text-xs text-text-faint">{slot.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
