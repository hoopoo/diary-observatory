import Link from "next/link";
import { ProvenanceBadge } from "@/components/provenance/ProvenanceBadge";
import { getEntryProvenanceSummary } from "@/lib/provenance";

export function EntryProvenanceSummary({ entryId }: { entryId: string }) {
  const s = getEntryProvenanceSummary(entryId);

  return (
    <section className="my-10 border border-border px-5 py-6">
      <div className="flex flex-wrap items-center gap-3">
        <p className="label">Provenance status</p>
        <ProvenanceBadge completeness={s.overall} />
      </div>
      <p className="jp-heading mt-2 text-lg">根拠経路の状態</p>
      <p className="mt-3 text-sm text-text-faint">
        Source path incomplete when edition, page, or SourceCapture is missing.
        資料経路は未完成 — 版・ページ・根拠箇所が未登録の場合。
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Fact claims", s.factClaims],
          ["Fully sourced facts", s.fullySourcedFacts],
          ["Partial source paths", s.partialPaths],
          ["Unsupported public claims", s.unsupportedPublicClaims],
          ["Conflicts", s.conflicts],
          ["Primary sources", s.primarySources],
          ["Secondary sources", s.secondarySources],
          ["Edition verified", s.editionVerified],
          ["Page references", s.pageReferences],
        ].map(([label, value]) => (
          <li key={label as string} className="border border-border px-3 py-3">
            <p className="label">{label}</p>
            <p className="editorial mt-1 text-2xl text-text">{value}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-text-faint">
        Audit result: {s.audit} · Last verified:{" "}
        {s.lastVerified ?? "Not recorded"}
      </p>
      <Link
        href="/provenance"
        className="focus-ring mt-4 inline-flex text-xs text-text-soft underline-offset-4 hover:underline"
      >
        Explore provenance health
      </Link>
    </section>
  );
}
