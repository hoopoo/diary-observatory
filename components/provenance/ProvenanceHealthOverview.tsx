import Link from "next/link";
import { ProvenanceBadge } from "@/components/provenance/ProvenanceBadge";
import {
  getDiaryProvenanceHealth,
  getProvenanceCompleteness,
  getProvenanceHealthOverview,
  getPublicFactClaims,
  getWriterProvenanceHealth,
} from "@/lib/provenance";
import { getLinkRotAuditSummary } from "@/lib/sources";
import { getScreenshotAuditSummary } from "@/lib/screenshots";

export function ProvenanceHealthOverview() {
  const health = getProvenanceHealthOverview();
  const writers = getWriterProvenanceHealth();
  const diaries = getDiaryProvenanceHealth();
  const sampleFacts = getPublicFactClaims().slice(0, 12);
  const linkRot = getLinkRotAuditSummary();
  const screenshots = getScreenshotAuditSummary();


  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-14 md:px-8 md:py-20">
      <nav aria-label="Breadcrumb" className="text-xs text-text-faint">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/" className="underline-offset-4 hover:underline">
              Diary Observatory
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>Provenance</li>
        </ol>
      </nav>

      <header className="mt-8 border-b border-border pb-10">
        <p className="label">Provenance</p>
        <h1 className="editorial mt-3 text-4xl text-text md:text-5xl">
          Not generation, but excavation.
        </h1>
        <p className="jp-heading mt-4 text-xl text-text-soft">
          Diary Observatoryは、どんな物語を書けるかから始めない。
        </p>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-sm text-text-soft">
          <p>
            Diary Observatory does not begin by asking what story can be
            written. It begins by asking what can be traced.
          </p>
          <p>
            どこまで資料をたどれるかから始める。そのうえで Fact / Observation /
            Interpretation を分離する。
          </p>
          <p className="text-accent">
            A fact without a trail is only a sentence. ·
            根拠への道を持たない事実は、ただの文章である。
          </p>
        </div>
      </header>

      <section className="my-12" aria-labelledby="health">
        <h2 id="health" className="editorial text-2xl text-text">
          Provenance health overview
        </h2>
        <p className="mt-2 text-sm text-text-faint">
          データの多さを品質と同一視しない。グラフの存在は真実の保証ではない。
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(
            [
              ["Published entries", health.publishedEntries],
              ["Public fact claims", health.publicFactClaims],
              ["Strong trails", health.strongTrails],
              ["Partial trails", health.partialTrails],
              ["Minimal trails", health.minimalTrails],
              ["Broken trails", health.brokenTrails],
              ["Missing editions", health.missingEditions],
              ["Missing pages", health.missingPages],
              ["Missing source captures", health.missingCaptures],
              ["Conflicted claims", health.conflictedClaims],
              ["Rights issues", health.rightsIssues],
              ["Orphan claims", health.orphanClaims],
              [
                "Interpretations without support",
                health.interpretationsWithoutSupport,
              ],
              ["Observations without facts", health.observationsWithoutFacts],
            ] as const
          ).map(([label, value]) => (
            <li key={label} className="border border-border px-4 py-3">
              <p className="label">{label}</p>
              <p className="editorial mt-2 text-2xl text-text">{value}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-12" aria-labelledby="by-writer">
        <h2 id="by-writer" className="editorial text-2xl text-text">
          Provenance health by writer
        </h2>
        <ul className="mt-6 space-y-3">
          {writers.map((w) => (
            <li key={w.id} className="border border-border px-4 py-4">
              <p className="text-sm text-text-soft">{w.name}</p>
              <p className="mt-2 text-xs text-text-faint">
                Facts {w.facts} · Strong {w.strong} · Partial {w.partial} ·
                Broken {w.broken} · Entries {w.entries} · Edition coverage{" "}
                {w.editionCoverage} · Capture coverage {w.sourceCaptureCoverage}{" "}
                · Conflicts {w.conflicts}
              </p>
              {"note" in w && w.note && (
                <p className="mt-2 text-xs text-accent">{w.note}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="my-12" aria-labelledby="by-diary">
        <h2 id="by-diary" className="editorial text-2xl text-text">
          Provenance health by diary
        </h2>
        <ul className="mt-6 space-y-3">
          {diaries.map((d) => (
            <li key={d.id} className="border border-border px-4 py-4">
              <p className="text-sm text-text-soft">{d.title}</p>
              <p className="mt-2 text-xs text-text-faint">
                Edition coverage {d.editionCoverage} · Entries {d.entryCount} ·
                Facts {d.factCount} · Capture coverage {d.captureCoverage} ·
                Page coverage {d.pageCoverage} · Cross-check{" "}
                {d.crossCheckCoverage} · Rights readiness {d.rightsReadiness} ·
                Unknowns {d.unknownCount}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-12" aria-labelledby="sample">
        <h2 id="sample" className="editorial text-2xl text-text">
          Indexed public claims
        </h2>
        <p className="mt-2 text-sm text-text-faint">
          巨大一覧にはしない。接続済み Entry から公開 Fact のサンプルのみ。
        </p>
        <ul className="mt-6 space-y-2">
          {sampleFacts.map((f) => {
            const { completeness } = getProvenanceCompleteness(f.id);
            return (
              <li
                key={f.id}
                className="flex flex-wrap items-center gap-3 border border-border px-4 py-3"
              >
                <Link
                  href={`/provenance/${f.id}`}
                  className="focus-ring text-sm text-text-soft underline-offset-4 hover:underline"
                >
                  {f.claim}
                </Link>
                <ProvenanceBadge completeness={completeness} />
              </li>
            );
          })}
        </ul>
      </section>

      <section className="my-12" aria-labelledby="traceability">
        <h2 id="traceability" className="editorial text-2xl text-text">
          Traceability issues (link rot)
        </h2>
        <p className="mt-2 text-sm text-text-faint">
          Broken / changed / archived-only / fragment-only paths are
          traceability issues — not automatic truth falsification.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(
            [
              ["Unchecked web links", linkRot.uncheckedLinks],
              ["Broken links (registered)", linkRot.brokenLinks],
              ["Redirected links", linkRot.redirectedLinks],
              ["State change events", linkRot.stateEvents],
              ["Archive captures", linkRot.archiveCaptures],
              ["Survival fragments", linkRot.survivalFragments],
            ] as const
          ).map(([label, value]) => (
            <li key={label} className="border border-border px-4 py-4">
              <p className="label">{label}</p>
              <p className="editorial mt-2 text-3xl text-text">{value}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-accent">Label: Traceability issue</p>
      </section>

      <section className="my-12" aria-labelledby="screenshot-health">
        <h2 id="screenshot-health" className="editorial text-2xl text-text">
          Screenshot evidence health
        </h2>
        <p className="mt-2 text-sm text-text-faint">
          Screenshot-only / modified / unknown-origin paths are provenance
          states — not truth labels. Counts are zero until records are indexed.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(
            [
              ["Screenshot records", screenshots.screenshotRecords],
              ["Context profiles", screenshots.contextProfiles],
              ["Relations to original", screenshots.relations],
              ["Modifications", screenshots.modifications],
              ["Claim boundaries", screenshots.claimBoundaries],
              ["Preservation bundles", screenshots.preservationBundles],
            ] as const
          ).map(([label, value]) => (
            <li key={label} className="border border-border px-4 py-4">
              <p className="label">{label}</p>
              <p className="editorial mt-2 text-3xl text-text">{value}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-12 border-t border-border pt-10">
        <h2 className="editorial text-xl text-text">Related</h2>
        <ul className="mt-4 flex flex-wrap gap-3 text-xs">
          <li>
            <Link
              href="/observations/screenshot-is-not-provenance"
              className="underline-offset-4 hover:underline"
            >
              Observation: A Screenshot Is Not Provenance
            </Link>
          </li>
          <li>
            <Link
              href="/observations/link-rot-is-archive-history"
              className="underline-offset-4 hover:underline"
            >
              Observation: Link Rot Is Also Archive History
            </Link>
          </li>
          <li>
            <Link
              href="/sources/link-rot"
              className="underline-offset-4 hover:underline"
            >
              Link Rot Register
            </Link>
          </li>
          <li>
            <Link
              href="/observations/more-sources-less-certainty"
              className="underline-offset-4 hover:underline"
            >
              Observation: Do More Sources Make Facts Simpler?
            </Link>
          </li>
          <li>
            <Link
              href="/compare/two-days-two-provenances"
              className="underline-offset-4 hover:underline"
            >
              Two Days, Two Provenances
            </Link>
          </li>
          <li>
            <Link
              href="/entries/1918-01-01-kafu-nagai"
              className="underline-offset-4 hover:underline"
            >
              Kafū 1918-01-01
            </Link>
          </li>
          <li>
            <Link
              href="/entries/2011-05-02-kenji-nishimura"
              className="underline-offset-4 hover:underline"
            >
              Nishimura 2011-05-02
            </Link>
          </li>
          <li>
            <Link
              href="/sources"
              className="underline-offset-4 hover:underline"
            >
              Sources
            </Link>
          </li>
          <li>
            <Link
              href="/editions"
              className="underline-offset-4 hover:underline"
            >
              Editions
            </Link>
          </li>
          <li>
            <Link href="/about" className="underline-offset-4 hover:underline">
              About / Methodology
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
