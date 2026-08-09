import Link from "next/link";
import { ProvenanceBadge } from "@/components/provenance/ProvenanceBadge";
import {
  getKafuCaseStudy,
  getNishimuraCaseStudy,
} from "@/data/observations/more-sources-less-certainty";
import type { ProvenanceCompleteness } from "@/lib/types";

export function TwoDaysTwoProvenances() {
  const kafu = getKafuCaseStudy();
  const nishi = getNishimuraCaseStudy();

  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-14 md:px-8 md:py-20">
      <nav aria-label="Breadcrumb" className="text-xs text-text-faint">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/" className="underline-offset-4 hover:underline">
              Diary Observatory
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/compare" className="underline-offset-4 hover:underline">
              Compare
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>Two Days, Two Provenances</li>
        </ol>
      </nav>

      <header className="mt-8 border-b border-border pb-10">
        <p className="label">Comparison · Provenance</p>
        <h1 className="editorial mt-3 text-4xl text-text md:text-5xl">
          Two Days, Two Provenances
        </h1>
        <p className="jp-heading mt-3 text-2xl">二つの一日、二つの根拠</p>
        <p className="mt-6 max-w-2xl text-sm text-text-soft">
          More evidence can increase clarity. More evidence can also increase
          the number of possible paths.
        </p>
        <p className="jp-serif mt-2 max-w-2xl text-sm text-text-faint">
          資料が増えることで明確になることはある。しかし同時に、事実へ至る経路そのものが増えることもある。
        </p>
      </header>

      <section className="my-12 grid gap-6 md:grid-cols-2">
        {[kafu, nishi].map((c) => (
          <article key={c.entryId} className="border border-border px-5 py-6">
            <p className="label">{c.label}</p>
            <p className="jp-heading mt-2 text-lg">{c.labelJa}</p>
            <div className="mt-3">
              <ProvenanceBadge
                completeness={c.completeness as ProvenanceCompleteness}
              />
            </div>
            <p className="mt-3 text-sm text-text-soft">{c.provenanceLabel}</p>
            <p className="mt-2 text-xs text-text-faint">Problem: {c.problem}</p>
            <p className="mt-1 text-xs text-text-faint">{c.problemJa}</p>
            <p className="mt-3 text-xs text-text-faint">
              Primary risk: {c.primaryRisk}
            </p>
            <ul className="mt-4 space-y-1 text-xs text-text-soft">
              {c.known.slice(0, 5).map((k) => (
                <li key={k}>· {k}</li>
              ))}
            </ul>
            <ul className="mt-3 space-y-1 text-xs text-text-faint">
              {c.missing.slice(0, 5).map((k) => (
                <li key={k}>· Missing: {k}</li>
              ))}
            </ul>
            <Link
              href={c.href}
              className="focus-ring mt-5 inline-flex cta cta-secondary"
            >
              Open day →
            </Link>
          </article>
        ))}
      </section>

      <section className="my-12 border-t border-border pt-10">
        <h2 className="editorial text-2xl text-text">Reading note</h2>
        <ul className="mt-4 space-y-2 text-sm text-text-soft">
          <li>· Kafū 1918 — sparse / bibliographic gap (Partial)</li>
          <li>· Nishimura 2011 — branching layers registered (still Partial)</li>
          <li>· Source count is not a confidence score</li>
          <li>· Neither day is marked Complete without Edition / Page / Capture</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3 text-xs">
          <Link
            href="/observations/more-sources-less-certainty"
            className="underline-offset-4 hover:underline"
          >
            Observation: Do More Sources Make Facts Simpler?
          </Link>
          <Link href="/provenance" className="underline-offset-4 hover:underline">
            Provenance health
          </Link>
          <Link
            href="/compare/kafu-nishimura"
            className="underline-offset-4 hover:underline"
          >
            Related: Kafū → Nishimura
          </Link>
        </div>
      </section>
    </div>
  );
}
