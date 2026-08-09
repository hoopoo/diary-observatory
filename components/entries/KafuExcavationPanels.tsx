import Link from "next/link";
import { ProvenanceBadge } from "@/components/provenance/ProvenanceBadge";
import {
  getEntryExcavationStatus,
  getEntryProvenanceSummary,
  getEntryQualityProfile,
  getUnknownClaimsForEntry,
} from "@/lib/provenance";

const AUDIT_ROWS: { label: string; status: string; note: string }[] = [
  { label: "Date", status: "Partial", note: "Indexed day · Capture pending" },
  { label: "Writer", status: "Partial", note: "Kafū Nagai · needs-source" },
  {
    label: "Diary Work",
    status: "Partial",
    note: "断腸亭日乗 · editionIds empty",
  },
  { label: "Volume", status: "Missing", note: "Not registered" },
  { label: "Edition", status: "Missing", note: "Edition not yet verified" },
  { label: "Source", status: "Partial", note: "Title-level primary diary" },
  {
    label: "SourceCopy",
    status: "Missing",
    note: "Source copy not yet indexed",
  },
  {
    label: "Daily boundary",
    status: "Missing",
    note: "Start/end page not registered",
  },
  { label: "Page", status: "Missing", note: "Page reference not yet indexed" },
  { label: "Capture", status: "Missing", note: "No SourceCapture" },
  { label: "Facts", status: "Partial", note: "Mapped · source-linked" },
  {
    label: "Observations",
    status: "Partial",
    note: "Supported by FactClaims",
  },
  {
    label: "Interpretations",
    status: "Partial",
    note: "Supported by Observation / Fact",
  },
  { label: "Rights", status: "Partial", note: "PD status to verify" },
  {
    label: "Conflicts",
    status: "Not applicable",
    note: "No registered conflicts",
  },
  { label: "Unknowns", status: "Complete", note: "Explicit register" },
];

export function KafuExcavationPanels({ entryId }: { entryId: string }) {
  const excavation = getEntryExcavationStatus(entryId);
  const summary = getEntryProvenanceSummary(entryId);
  const quality = getEntryQualityProfile(entryId);
  const unknowns = getUnknownClaimsForEntry(entryId);

  return (
    <div className="space-y-14">
      <section className="border border-border px-5 py-6">
        <p className="label">Excavation status</p>
        <p className="jp-heading mt-2 text-lg">発掘状態</p>
        <div className="mt-3">
          <ProvenanceBadge completeness={excavation.completeness} />
        </div>
        <h2 className="editorial mt-4 text-2xl text-text">{excavation.label}</h2>
        <p className="jp-serif mt-2 text-sm text-text-faint">
          {excavation.labelJa}
        </p>
        <p className="mt-4 text-sm text-text-soft">
          This entry is assembled from traceable records.
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          このEntryは、追跡可能な資料だけから構成されています。
        </p>
        <p className="editorial mt-6 text-lg text-accent">
          This is not a reconstructed day. It is an excavated day.
        </p>
        <p className="jp-serif mt-2 text-sm text-text-faint">
          これは、再構成された一日ではない。資料から発掘された一日である。
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <p className="label">Because</p>
            <ul className="mt-2 space-y-1 text-xs text-text-soft">
              {excavation.because.map((b) => (
                <li key={b}>· {b}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">But — blocking Complete / Strong</p>
            <ul className="mt-2 space-y-1 text-xs text-text-faint">
              {excavation.but.map((b) => (
                <li key={b}>· {b}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-xs text-text-faint">
          Provenance measures trail completeness — not “verified truth” or
          100% historical certainty. Reference Entry:{" "}
          {excavation.isReferenceEntry ? "yes" : "no"} ·{" "}
          {excavation.referenceReason}
        </p>
      </section>

      <section className="border border-border px-5 py-6">
        <h2 className="editorial text-2xl text-text">Source for this day</h2>
        <p className="jp-heading mt-2 text-lg">この一日を支える資料</p>
        <p className="mt-3 text-sm text-text-soft">
          This day is indexed, but its bibliographic trail is incomplete.
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          この日は索引化されていますが、書誌上の根拠経路はまだ完成していません。
        </p>
        <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
          {[
            ["Diary Work", "断腸亭日乗", "/diaries/dancho-tei-nichijo"],
            ["Volume", "Not indexed", null],
            ["Edition", "Edition not yet verified", "/editions"],
            ["Source", "断腸亭日乗（題名レベル）", "/sources"],
            ["Source Copy", "Source copy not yet indexed", null],
            ["Page / location", "Page reference not yet indexed", null],
            ["Daily boundary", "Not registered", null],
            ["Rights", "public-domain-status-to-verify", null],
            ["Verification", `Partial · ${summary.overall}`, "/provenance"],
          ].map(([label, value, href]) => (
            <div key={label as string} className="border border-border px-3 py-3">
              <dt className="label">{label}</dt>
              <dd className="mt-1 text-text-soft">{value}</dd>
              {href && (
                <Link
                  href={href as string}
                  className="mt-2 inline-flex text-[0.65rem] underline-offset-4 hover:underline"
                >
                  Open
                </Link>
              )}
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="editorial text-2xl text-text">What we can verify</h2>
        <p className="jp-heading mt-2 text-lg">確認できること / 分からないこと</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="border border-border px-5 py-5">
            <p className="label">What we can verify</p>
            <ul className="mt-4 space-y-2 text-sm text-text-soft">
              <li>· The calendar date 1918-01-01 is the indexed day</li>
              <li>· Writer: Kafū Nagai · Diary work: 断腸亭日乗</li>
              <li>· Textual facts: New Year, no special celebration, warmth-wait, tidying/cleaning</li>
              <li>· Fact / Observation / Interpretation are separated</li>
              <li>· No registered ResearchConflict for this entry</li>
            </ul>
          </article>
          <article className="border border-dashed border-border px-5 py-5">
            <p className="label">What remains unknown</p>
            <ul className="mt-4 space-y-2 text-sm text-text-faint">
              <li>· Edition · page · SourceCapture · SourceCopy</li>
              <li>· Daily boundary positions</li>
              <li>· Exact clock times · heating device · fuel</li>
              <li>· Who performed domestic labor</li>
              <li>· Objective weather measurements</li>
              <li>· Meal provider / food items</li>
            </ul>
          </article>
        </div>
      </section>

      <section>
        <h2 className="editorial text-2xl text-text">Unknown register</h2>
        <p className="jp-heading mt-2 text-lg">Unknown 一覧</p>
        <ul className="mt-6 space-y-2">
          {unknowns.map((u) => (
            <li key={u.id} className="border border-border px-4 py-3 text-sm">
              <p className="text-text-soft">{u.questionJa ?? u.question}</p>
              <p className="mt-1 text-xs text-text-faint">
                {u.category} · {u.reasonUnknown}
                {u.sourceNeeded ? " · Source needed" : ""}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="editorial text-2xl text-text">Research dependency</h2>
        <p className="jp-heading mt-2 text-lg">根拠依存図</p>
        <ol className="mt-4 space-y-2 text-sm">
          {[
            ["Diary Work", "Partial · identified"],
            ["Edition", "Blocked · Missing"],
            ["Source Copy", "Blocked · Missing"],
            ["Source Capture", "Blocked · Missing"],
            ["Fact", "Partial · mapped without capture"],
            ["Observation", "Partial · fact-supported"],
            ["Interpretation", "Partial · observation-supported"],
          ].map(([node, status]) => (
            <li key={node} className="border border-border px-3 py-2">
              <span className="text-text-soft">{node}</span>
              <span className="ml-2 text-xs text-text-faint">{status}</span>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="editorial text-2xl text-text">Provenance audit</h2>
        <p className="jp-heading mt-2 text-lg">根拠監査</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {AUDIT_ROWS.map((row) => (
            <li key={row.label} className="border border-border px-3 py-3 text-sm">
              <p className="label">{row.label}</p>
              <p className="mt-1 text-text-soft">{row.status}</p>
              <p className="mt-1 text-xs text-text-faint">{row.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-text-soft">
          Final result: Partial Provenance — because primary diary and claim
          mapping exist, but Edition / Page / Capture / Copy remain Missing.
        </p>
        <p className="mt-2 text-xs text-text-faint">
          Conflicts: No registered conflicts. This is not a claim that no
          conflict exists in the world.
        </p>
      </section>

      {quality && (
        <section>
          <h2 className="editorial text-2xl text-text">Entry quality profile</h2>
          <p className="mt-2 text-xs text-text-faint">
            単一信用スコアは作らない。
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {(
              [
                ["Source quality", quality.sourceQuality],
                ["Bibliographic completeness", quality.bibliographicCompleteness],
                ["Daily boundary clarity", quality.dailyBoundaryClarity],
                ["Fact traceability", quality.factTraceability],
                ["Cross-check depth", quality.crossCheckDepth],
                ["Interpretive separation", quality.interpretiveSeparation],
                ["Rights readiness", quality.rightsReadiness],
                ["Unknown visibility", quality.unknownVisibility],
              ] as const
            ).map(([label, level]) => (
              <li key={label} className="border border-border px-3 py-3">
                <p className="label">{label}</p>
                <p className="mt-1 text-sm capitalize text-text-soft">{level}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="border border-border px-5 py-5">
        <h2 className="editorial text-xl text-text">How to cite this entry</h2>
        <p className="jp-heading mt-2 text-base">このEntryを参照する場合</p>
        <ul className="mt-4 space-y-1 text-sm text-text-soft">
          <li>· January 1, 1918 — Kafū Nagai</li>
          <li>· Diary Work: Danchōtei Nichijō / 断腸亭日乗</li>
          <li>· Diary Observatory Entry</li>
          <li>· Last updated: 2026-08-02</li>
          <li>
            · URL:{" "}
            <Link
              href="/entries/1918-01-01-kafu-nagai"
              className="underline-offset-4 hover:underline"
            >
              /entries/1918-01-01-kafu-nagai
            </Link>
          </li>
        </ul>
        <p className="mt-4 text-xs text-text-faint">
          Primary source used (Edition citation): not displayed — Edition not
          yet verified. Observatory Entry citation ≠ diary imprint bibliography.
        </p>
      </section>

      <section>
        <h2 className="editorial text-xl text-text">Interpretation guardrail</h2>
        <p className="mt-3 text-sm text-text-soft">
          This entry shows one recorded day. It does not by itself establish a
          lifelong pattern.
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          これは記録された一日であり、それだけで生涯の習慣を証明するものではない。
        </p>
      </section>

      <section>
        <h2 className="editorial text-xl text-text">Textual vs historical weather</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <article className="border border-border px-4 py-4 text-sm">
            <p className="label">Textual Fact</p>
            <p className="mt-2 text-text-soft">
              Diary records waiting for interior warmth (coldness as written
              condition).
            </p>
          </article>
          <article className="border border-dashed border-border px-4 py-4 text-sm">
            <p className="label">Historical Fact</p>
            <p className="mt-2 text-text-faint">
              Objective Tokyo temperature / precipitation — Not indexed. Not
              invented from the diary phrasing.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
