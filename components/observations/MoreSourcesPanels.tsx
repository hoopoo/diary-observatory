import Link from "next/link";
import { ProvenanceBadge } from "@/components/provenance/ProvenanceBadge";
import {
  getKafuCaseStudy,
  getNishimuraCaseStudy,
  historicalSourceStack,
  provenanceFailureModes,
  selfRecordMatrix,
} from "@/data/observations/more-sources-less-certainty";
import type { ProvenanceCompleteness } from "@/lib/types";

function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-4 flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2 text-sm text-text-soft">
          <span className="border border-border px-3 py-2">{step}</span>
          {i < steps.length - 1 && (
            <span className="hidden text-text-faint md:inline" aria-hidden>
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

export function ScarcityModel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">When evidence is scarce</p>
      <p className="jp-heading mt-2 text-lg">資料が少ないとき</p>
      <Flow
        steps={["Event", "Record", "Surviving copy", "Edition", "Researcher"]}
      />
      <ul className="mt-6 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {[
          ["Missing record", "記録されなかった"],
          ["Lost record", "失われた"],
          ["Unknown edition", "版不明"],
          ["Missing page", "ページ不明"],
          ["No independent confirmation", "照合不能"],
          ["Unknown context", "文脈不明"],
        ].map(([en, ja]) => (
          <li key={en} className="border border-dashed border-border px-3 py-2">
            {en} · {ja}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-accent">
        Scarcity risk · 不足による不確実性
      </p>
    </section>
  );
}

export function AbundanceModel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">When evidence multiplies</p>
      <p className="jp-heading mt-2 text-lg">資料が増えるとき</p>
      <div className="mt-4 space-y-2 text-sm text-text-soft">
        <p>Event</p>
        <p className="pl-4">↓ Diary / Interview / Television / Publisher / Web / Social</p>
        <p className="pl-4">→ Public fact candidate</p>
        <p className="pl-4">↓ Observation → Interpretation</p>
      </div>
      <ul className="mt-6 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {[
          "Source collision",
          "Context loss",
          "Editing",
          "Self-presentation",
          "Retrospection",
          "Deletion",
          "Reposting",
          "Algorithmic resurfacing",
          "AI summarization",
        ].map((item) => (
          <li key={item} className="border border-dashed border-border px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-accent">
        Abundance risk · 過剰による不確実性
      </p>
    </section>
  );
}

export function KafuScarcityCase() {
  const c = getKafuCaseStudy();
  return (
    <aside className="my-8 border border-border px-5 py-6">
      <p className="label">Case · {c.label}</p>
      <p className="jp-heading mt-2 text-lg">{c.labelJa}：資料経路の空白</p>
      <div className="mt-3">
        <ProvenanceBadge
          completeness={c.completeness as ProvenanceCompleteness}
        />
      </div>
      <p className="mt-3 text-sm text-text-soft">
        Current Provenance: {c.provenanceLabel}
      </p>
      <p className="mt-1 text-xs text-text-faint">
        Primary risk: {c.primaryRisk} · Unknowns: {c.unknownCount}
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <p className="label">Known</p>
          <ul className="mt-2 space-y-1 text-sm text-text-soft">
            {c.known.map((k) => (
              <li key={k}>· {k}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label">Missing</p>
          <ul className="mt-2 space-y-1 text-sm text-text-faint">
            {c.missing.map((k) => (
              <li key={k}>· {k}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-xs text-text-faint">
        Concept: Sparse path · Incomplete bibliography · Unknown nodes. This
        describes current traceability — not that the day itself is “false.”
      </p>
      <Link
        href={c.href}
        className="focus-ring mt-4 inline-flex text-xs underline-offset-4 hover:underline"
      >
        Open entry →
      </Link>
    </aside>
  );
}

export function NishimuraAbundanceCase() {
  const c = getNishimuraCaseStudy();
  return (
    <aside className="my-8 border border-border px-5 py-6">
      <p className="label">Case · {c.label}</p>
      <p className="jp-heading mt-2 text-lg">{c.labelJa}：複線の問題</p>
      <div className="mt-3">
        <ProvenanceBadge
          completeness={c.completeness as ProvenanceCompleteness}
        />
      </div>
      <p className="mt-3 text-sm text-text-soft">
        Current Provenance: {c.provenanceLabel}
      </p>
      <p className="mt-1 text-xs text-text-faint">
        Concept: Branching provenance · Primary risk: {c.primaryRisk}
      </p>
      <ul className="mt-4 space-y-2">
        {c.sourceLayers.map((l) => (
          <li key={l.id} className="border border-border px-3 py-3 text-sm">
            <p className="text-text-soft">
              {l.layerType} · {l.role} · {l.verificationStatus}
            </p>
            {l.notes && (
              <p className="mt-1 text-xs text-text-faint">{l.notes}</p>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-text-faint">
        Layers are registered separately — not collapsed into one Source type.
        Autofiction / TV / SNS are not invented here when absent from the
        repository.
      </p>
      <Link
        href={c.href}
        className="focus-ring mt-4 inline-flex text-xs underline-offset-4 hover:underline"
      >
        Open entry →
      </Link>
    </aside>
  );
}

export function SelfRecordMatrix() {
  return (
    <section className="my-8 overflow-x-auto">
      <p className="label">One person, multiple self-records</p>
      <p className="jp-heading mt-2 text-lg">一人の人間、複数の自己記録</p>
      <table className="mt-4 w-full min-w-[48rem] border-collapse text-left text-xs">
        <thead>
          <tr className="border-b border-border text-text-faint">
            <th className="px-2 py-2 font-normal">Medium</th>
            <th className="px-2 py-2 font-normal">Audience</th>
            <th className="px-2 py-2 font-normal">Editing</th>
            <th className="px-2 py-2 font-normal">Temporal</th>
            <th className="px-2 py-2 font-normal">Useful for</th>
            <th className="px-2 py-2 font-normal">Caution for</th>
          </tr>
        </thead>
        <tbody>
          {selfRecordMatrix.map((row) => (
            <tr key={row.medium} className="border-b border-border align-top">
              <td className="px-2 py-3 text-text-soft">
                {row.medium}
                <span className="mt-1 block text-text-faint">{row.mediumJa}</span>
              </td>
              <td className="px-2 py-3 text-text-faint">{row.audience}</td>
              <td className="px-2 py-3 text-text-faint">{row.editing}</td>
              <td className="px-2 py-3 text-text-faint">{row.temporal}</td>
              <td className="px-2 py-3 text-text-soft">{row.usefulFor}</td>
              <td className="px-2 py-3 text-text-faint">{row.cautionFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-xs text-text-faint">
        SourcePurpose / EditingDistance / TemporalDistance are descriptive axes
        — not authenticity scores.
      </p>
    </section>
  );
}

export function MediaEvidencePanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">MediaSourceRecord · concept</p>
      <p className="mt-2 text-sm text-text-soft">
        Fields: mediaType · recordingDate · broadcastDate · liveOrRecorded ·
        editingStatus · archiveStatus · transcriptStatus · sourcePurpose
      </p>
      <p className="mt-3 text-xs text-text-faint">
        Recorded does not mean unedited. 記録されていることと、無編集であることは同じではない。
        Concrete programs are registered only when real data exists — none
        invented for this article.
      </p>
    </section>
  );
}

export function MutableSourcePanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">A web page can change after citation</p>
      <p className="jp-heading mt-2 text-lg">Web資料は、参照したあとにも変わる</p>
      <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        {[
          "First checked",
          "Last checked",
          "Current status",
          "Archived copy",
          "Content changed (if verified)",
          "Redirected",
          "Removed",
          "Unknown",
        ].map((item) => (
          <li key={item} className="border border-border px-3 py-2 text-text-soft">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-text-faint">
        SourceVersionRecord may hold contentHash only for actually fetched
        content — no fake hashes.
      </p>
    </section>
  );
}

export function SocialSourceConcept() {
  return (
    <section className="my-8 border border-dashed border-border px-5 py-6">
      <p className="label">SocialSourceRecord · type ready</p>
      <p className="mt-2 text-sm text-text-soft">
        A social post is a dated self-record, but not necessarily a diary.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-faint">
        SNS投稿は、日付を持つ自己記録ではある。しかし、それだけで日記とは限らない。
      </p>
      <p className="mt-3 text-xs text-text-faint">
        No fabricated SNS posts are registered in this repository.
      </p>
    </section>
  );
}

export function ScreenshotEvidencePanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Screenshot Evidence Panel</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <p className="label">Known (sometimes)</p>
          <ul className="mt-2 space-y-1 text-sm text-text-soft">
            <li>· Image content</li>
            <li>· Visible account</li>
            <li>· Visible timestamp (case by case)</li>
          </ul>
        </div>
        <div>
          <p className="label">Unknown (often)</p>
          <ul className="mt-2 space-y-1 text-sm text-text-faint">
            <li>· Original URL</li>
            <li>· Thread context</li>
            <li>· Edit history</li>
            <li>· Deletion reason</li>
            <li>· Authenticity if unverified</li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-xs text-accent">
        A screenshot can preserve appearance without preserving provenance.
      </p>
    </section>
  );
}

export function AISourceOrInterface() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Is AI a source?</p>
      <p className="jp-heading mt-2 text-lg">AIは、資料なのか</p>
      <ul className="mt-4 space-y-2 text-sm text-text-soft">
        <li>· Primary source — generally no (except studying AI outputs)</li>
        <li>· Secondary synthesis — possible</li>
        <li>· Research interface — search / organization aid</li>
        <li>· Interpretive layer — summary / meaning</li>
        <li>· Generated artifact — output object</li>
      </ul>
      <p className="mt-4 text-xs text-text-faint">
        Do not use an AI answer alone as Historical Fact Source. Prefer linking
        back to underlying sources when citations are available
        (AIProvenanceTraceability: claim-level / source-level / partial /
        opaque).
      </p>
    </section>
  );
}

export function AICompressionDiagram() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Provenance Compression</p>
      <p className="jp-heading mt-2 text-lg">根拠経路の圧縮</p>
      <Flow steps={["10 sources", "AI synthesis", "1 paragraph", "reader"]} />
      <p className="mt-4 text-sm text-text-soft">
        AI can shorten the text while lengthening the provenance problem.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-faint">
        AIは文章を短くできる。しかし、根拠経路の問題まで短くできるとは限らない。
      </p>
      <ul className="mt-4 grid gap-2 text-xs text-text-faint sm:grid-cols-2">
        {[
          "Edition differences",
          "Page locations",
          "Source purpose",
          "Temporal distance",
          "Editing distance",
          "Conflict",
          "Unknown",
          "Alternative interpretation",
          "Rights context",
          "Quotation context",
        ].map((item) => (
          <li key={item} className="border border-dashed border-border px-3 py-2">
            May be lost: {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function EvidenceQuantityTraceabilityMatrix() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Quantity ≠ Traceability</p>
      <p className="mt-2 text-sm text-text-soft">
        Axes: Source quantity (few → many) × Traceability (low → high). Not a
        quality score. Writers are not force-placed into a quadrant without
        data.
      </p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm">
        {[
          ["Few / low", "Gaps dominate"],
          ["Few / high", "Sparse but well traced"],
          ["Many / low", "False abundance / opacity"],
          ["Many / high", "Rich and accountable"],
        ].map(([q, note]) => (
          <li key={q} className="border border-border px-3 py-3">
            <p className="text-text-soft">{q}</p>
            <p className="mt-1 text-xs text-text-faint">{note}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 grid gap-3 md:grid-cols-2 text-xs text-text-faint">
        <p>
          Kafū 1918 (repo): few registered bibliographic nodes · current trail
          Partial — not plotted as a hard score.
        </p>
        <p>
          Nishimura 2011 (repo): more surrounding layer types registered ·
          still Partial pending edition/capture — not “higher score.”
        </p>
      </div>
    </section>
  );
}

export function FalseAbundanceDiagram() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">False abundance</p>
      <p className="jp-heading mt-2 text-lg">見かけ上の資料過多</p>
      <Flow
        steps={[
          "Original article",
          "Syndication × N",
          "Blog summaries",
          "AI summary",
          "Social reposts",
        ]}
      />
      <p className="mt-4 text-sm text-text-soft">
        Ten links may still be one source · 10本のリンクがあっても、資料は一つかもしれない
      </p>
      <p className="mt-2 text-xs text-text-faint">
        SourceIndependence / SourceDependency distinguish independent,
        syndicated, and derivative layers. Do not count derivatives as N
        confirmations.
      </p>
    </section>
  );
}

export function EvidenceEcology() {
  const nodes = [
    "Diary",
    "Book",
    "Edition",
    "Newspaper",
    "Television",
    "Web",
    "Social media",
    "Screenshot",
    "Archive",
    "Database",
    "AI synthesis",
    "Human interpretation",
  ];
  const edges = [
    "Records",
    "Edits",
    "Quotes",
    "Reposts",
    "Summarizes",
    "Contradicts",
    "Confirms",
    "Deletes",
    "Archives",
    "Transforms",
  ];
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Evidence ecology</p>
      <p className="jp-heading mt-2 text-lg">証拠の生態系</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {nodes.map((n) => (
          <li
            key={n}
            className="border border-border px-2.5 py-1 text-[0.7rem] text-text-soft"
          >
            {n}
          </li>
        ))}
      </ul>
      <ul className="mt-4 flex flex-wrap gap-2">
        {edges.map((e) => (
          <li
            key={e}
            className="border border-dashed border-border px-2.5 py-1 text-[0.65rem] text-text-faint"
          >
            {e}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function HistoricalSourceStack() {
  return (
    <section className="my-8">
      <p className="label">Historical context · media forms</p>
      <p className="mt-1 text-xs text-text-faint">
        Separated from Entry Facts for specific writers/days.
      </p>
      <ul className="mt-4 space-y-2">
        {historicalSourceStack.map((row) => (
          <li key={row.era} className="border border-border px-4 py-3 text-sm">
            <p className="text-text-soft">{row.era}</p>
            <p className="mt-1 text-xs text-text-faint">{row.forms.join(" · ")}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ArchiveFragilityPanel() {
  return (
    <section className="my-8 grid gap-4 md:grid-cols-3">
      {[
        {
          t: "Paper fragility",
          items: ["Fire", "War", "Decay", "Loss", "Private disposal"],
        },
        {
          t: "Digital fragility",
          items: [
            "Deletion",
            "Account closure",
            "Platform shutdown",
            "Link rot",
            "Format change",
            "Algorithmic invisibility",
          ],
        },
        {
          t: "AI-era fragility",
          items: [
            "Source opacity",
            "Synthetic repetition",
            "Citation loss",
            "Summary drift",
            "Context compression",
          ],
        },
      ].map((col) => (
        <article key={col.t} className="border border-border px-4 py-4">
          <p className="label">{col.t}</p>
          <ul className="mt-3 space-y-1 text-sm text-text-faint">
            {col.items.map((i) => (
              <li key={i}>· {i}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export function ProvenanceFailureModes() {
  return (
    <section className="my-8">
      <p className="label">Provenance failure modes</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {provenanceFailureModes.map((m) => (
          <li key={m.id} className="border border-border px-3 py-3 text-sm">
            <p className="text-text-soft">{m.label}</p>
            <p className="mt-1 text-xs text-text-faint">{m.labelJa}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProvenanceCaseStudies() {
  const kafu = getKafuCaseStudy();
  const nishi = getNishimuraCaseStudy();
  const cases = [
    {
      title: "Kafū 1918",
      problem: kafu.problem,
      href: kafu.href,
      status: kafu.provenanceLabel,
    },
    {
      title: "Nishimura 2011",
      problem: nishi.problem,
      href: nishi.href,
      status: nishi.provenanceLabel,
    },
    {
      title: "Fumiko Hayashi / Hōrōki",
      problem: "diary-derived published text / edition layers",
      href: "/diaries/horoki",
      status: "Edition indexing in progress (repo)",
    },
    {
      title: "Roppa Furukawa",
      problem: "primary-source research not yet complete",
      href: "/research/furukawa-roppa-first-entry",
      status: "0 fabricated entry days · research workspace",
    },
  ];
  return (
    <section className="my-8">
      <p className="label">Related case studies · live status</p>
      <ul className="mt-4 space-y-3">
        {cases.map((c) => (
          <li key={c.href} className="border border-border px-4 py-4">
            <p className="text-sm text-text-soft">{c.title}</p>
            <p className="mt-1 text-xs text-text-faint">Problem: {c.problem}</p>
            <p className="mt-1 text-xs text-text-faint">Status: {c.status}</p>
            <Link
              href={c.href}
              className="focus-ring mt-2 inline-flex text-xs underline-offset-4 hover:underline"
            >
              Open →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TwoDaysProvenanceCta() {
  return (
    <aside className="my-10 border border-text px-5 py-6">
      <p className="label">Primary comparison</p>
      <h3 className="editorial mt-2 text-2xl text-text">
        Two Days, Two Provenances
      </h3>
      <p className="jp-heading mt-2 text-lg">二つの一日、二つの根拠</p>
      <p className="mt-3 text-sm text-text-soft">
        See how the abstract argument changes when applied to two actual indexed
        days.
      </p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        この議論を、実際に索引化された二つの一日に適用して見る。
      </p>
      <Link
        href="/compare/two-days-two-provenances"
        className="focus-ring mt-5 inline-flex cta cta-secondary"
      >
        Open comparison →
      </Link>
    </aside>
  );
}

export function ArticleEvidenceBasis() {
  return (
    <section className="my-10 border border-border px-5 py-6">
      <p className="label">Evidence basis of this article</p>
      <p className="jp-heading mt-2 text-lg">この記事自身の根拠構造</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm">
        <div>
          <p className="label">Fact basis</p>
          <ul className="mt-2 space-y-1 text-text-soft">
            <li>· Kafū 1918 current provenance state</li>
            <li>· Nishimura 2011 current provenance state</li>
            <li>· Repository source-layer structures</li>
          </ul>
        </div>
        <div>
          <p className="label">Historical context</p>
          <ul className="mt-2 space-y-1 text-text-faint">
            <li>· Media forms across periods (general)</li>
            <li>· Not assigned as Entry Facts</li>
          </ul>
        </div>
        <div>
          <p className="label">Interpretation</p>
          <ul className="mt-2 space-y-1 text-text-soft">
            <li>· Scarcity vs abundance</li>
            <li>· Provenance ecology</li>
            <li>· False abundance</li>
            <li>· AI compression</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
