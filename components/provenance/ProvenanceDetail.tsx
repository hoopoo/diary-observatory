import Link from "next/link";
import { notFound } from "next/navigation";
import { ProvenanceBadge } from "@/components/provenance/ProvenanceBadge";
import {
  getFactClaimById,
  getInterpretationClaimById,
  getObservationClaimById,
  getPublicProvenanceTrail,
  getSourcesForFact,
  resolveEntryForClaim,
} from "@/lib/provenance";

export function ProvenanceDetail({ id }: { id: string }) {
  const trail = getPublicProvenanceTrail(id);
  if (!trail) notFound();

  const fact = getFactClaimById(id);
  const obs = getObservationClaimById(id);
  const interp = getInterpretationClaimById(id);
  const claim =
    fact?.claim ?? obs?.observation ?? interp?.interpretation ?? id;
  const claimType = fact
    ? "FactClaim"
    : obs
      ? "ObservationClaim"
      : interp
        ? "InterpretationClaim"
        : "Unknown";

  if (fact && !fact.publicDisplay) notFound();
  if (obs && !obs.publicDisplay) notFound();
  if (interp && !interp.publicDisplay) notFound();

  const entry = resolveEntryForClaim(id);
  const sources = fact ? getSourcesForFact(id) : [];

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <nav aria-label="Breadcrumb" className="text-xs text-text-faint">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/" className="underline-offset-4 hover:underline">
              Diary Observatory
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/provenance"
              className="underline-offset-4 hover:underline"
            >
              Provenance
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="max-w-[12rem] truncate">{claim}</li>
        </ol>
      </nav>

      <header className="mt-8 border-b border-border pb-8">
        <p className="label">{claimType}</p>
        <h1 className="editorial mt-3 text-3xl text-text md:text-4xl">
          {claim}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProvenanceBadge completeness={trail.completeness} />
          {fact && (
            <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
              Verification: {fact.verificationStatus}
            </span>
          )}
          {fact && (
            <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
              Evidence: {fact.evidenceLevel}
            </span>
          )}
        </div>
        <p className="mt-4 text-xs text-text-faint">ID: {id}</p>
      </header>

      <section className="my-10">
        <h2 className="editorial text-xl text-text">Evidence ancestry</h2>
        <p className="jp-serif mt-1 text-sm text-text-faint">根拠を遡る</p>
        <ol className="mt-4 space-y-2">
          {trail.ancestry.map((n, i) => (
            <li key={n.id} className="border border-border px-4 py-3">
              <p className="label">
                {i + 1}. {n.nodeType}
                {n.isUnknown ? " · unknown" : ""}
              </p>
              <p className="mt-1 text-sm text-text-soft">
                {n.labelJa ?? n.label}
              </p>
              {n.isUnknown && (
                <p className="mt-1 text-xs text-accent">
                  Source path incomplete · 資料経路は未完成
                </p>
              )}
              {n.url && !n.isUnknown && (
                <Link
                  href={n.url}
                  className="mt-2 inline-flex text-[0.65rem] underline-offset-4 hover:underline"
                >
                  Open detail
                </Link>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="my-10">
        <h2 className="editorial text-xl text-text">Interpretive descendants</h2>
        <p className="jp-serif mt-1 text-sm text-text-faint">意味が広がる方向</p>
        {trail.descendants.length === 0 ? (
          <p className="mt-3 text-sm text-text-faint">No descendants indexed.</p>
        ) : (
          <ol className="mt-4 space-y-2">
            {trail.descendants.map((n) => (
              <li key={n.id} className="border border-border px-4 py-3">
                <p className="label">{n.nodeType}</p>
                <p className="mt-1 text-sm text-text-soft">
                  {n.labelJa ?? n.label}
                </p>
              </li>
            ))}
          </ol>
        )}
      </section>

      <section className="my-10">
        <h2 className="editorial text-xl text-text">Sources</h2>
        <ul className="mt-4 space-y-2">
          {sources.length === 0 && (
            <li className="text-sm text-text-faint">
              Source path incomplete · 資料経路は未完成
            </li>
          )}
          {sources.map((s) => (
            <li key={s.id} className="border border-border px-4 py-3 text-sm">
              <p className="text-text-soft">{s.titleJa ?? s.title ?? s.label}</p>
              <p className="mt-1 text-xs text-text-faint">
                Status: {s.status ?? "unknown"} · Level:{" "}
                {s.sourceLevel ?? s.category ?? "unspecified"}
              </p>
              {s.slug && (
                <Link
                  href={`/sources/${s.slug}`}
                  className="mt-2 inline-flex text-[0.65rem] underline-offset-4 hover:underline"
                >
                  View source
                </Link>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-10">
        <h2 className="editorial text-xl text-text">Unknowns</h2>
        <ul className="mt-3 space-y-1 text-sm text-text-faint">
          {trail.unknowns.map((u) => (
            <li key={u.id}>· {u.labelJa ?? u.label}</li>
          ))}
          {trail.unknowns.length === 0 && <li>· None recorded</li>}
        </ul>
      </section>

      <section className="my-10">
        <h2 className="editorial text-xl text-text">Conflicts</h2>
        <p className="mt-2 text-sm text-text-faint">
          {trail.conflicts.length
            ? trail.conflicts.join(" · ")
            : "No conflicting evidence indexed for this claim."}
        </p>
      </section>

      <section className="my-10">
        <h2 className="editorial text-xl text-text">Research issues</h2>
        <ul className="mt-3 space-y-1 text-sm text-text-faint">
          {trail.blockers.map((b) => (
            <li key={b.id}>
              · [{b.severity}] {b.messageJa ?? b.message}
            </li>
          ))}
          {trail.blockers.length === 0 &&
            trail.reasons.map((r) => <li key={r}>· {r}</li>)}
        </ul>
      </section>

      {entry?.slug && (
        <p className="mt-10 text-xs">
          <Link
            href={`/entries/${entry.slug}#${id}`}
            className="underline-offset-4 hover:underline"
          >
            View in Entry
          </Link>
        </p>
      )}
    </div>
  );
}
