import Link from "next/link";
import type { ReactNode } from "react";
import { ConceptQuote } from "@/components/observations/ConceptQuote";
import { FactObservationInterpretationBlock } from "@/components/observations/FactObservationInterpretationBlock";
import { VerificationStatusBadge } from "@/components/research/VerificationStatusBadge";
import {
  getArchiveCaptures,
  getClaimReliabilitiesForSource,
  getCollectionsForSource,
  getConflictsBySource,
  getFactClaimsBySource,
  getInterpretationClaimsBySource,
  getObservationClaimsBySource,
  getSourceCaptures,
  getSourceCopies,
  getSourceDashboard,
  getSourceDisplayTitle,
  getSourceLinkStatus,
  getSourceMaintenanceTasks,
  getSourceReadiness,
  getSourceState,
  getSourceStateHistory,
  getSourceStateImpact,
  getSourceSurvivalFragments,
  getSourceUrlHistory,
  getSourceUsage,
  getSourceVersions,
  isWebLikeSource,
} from "@/lib/sources";
import {
  getScreenshotClaimBoundary,
  getScreenshotContextProfile,
  getScreenshotEvidenceStatus,
  getScreenshotModificationHistory,
  getScreenshotPreservationBundle,
  getScreenshotRelation,
  getScreenshotResearchIssues,
  getScreenshotSource,
  getScreenshotTraceability,
  isScreenshotLikeSource,
} from "@/lib/screenshots";
import type { Source } from "@/lib/types";

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="border border-border px-2 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
      {children}
    </span>
  );
}

const DEPENDENCY = [
  "Source",
  "Source Copy",
  "Source Capture",
  "Fact Claim",
  "Observation",
  "Interpretation",
  "Entry / Observation / Comparison",
];

const RIGHTS_PRINCIPLES = [
  "要約を優先",
  "引用は必要最小限",
  "版とページを必ず表示",
  "本文ページ画像を無断掲載しない",
  "注釈と作品本文の権利を分ける",
];

export function SourceObservatory({ source }: { source: Source }) {
  const title = getSourceDisplayTitle(source);
  const usage = getSourceUsage(source.id);
  const dashboard = getSourceDashboard(source.id);
  const reliabilities = getClaimReliabilitiesForSource(source.id);
  const copies = getSourceCopies(source.id);
  const captures = getSourceCaptures(source.id);
  const facts = getFactClaimsBySource(source.id);
  const observations = getObservationClaimsBySource(source.id);
  const interpretations = getInterpretationClaimsBySource(source.id);
  const conflicts = getConflictsBySource(source.id);
  const links = getSourceLinkStatus(source.id);
  const readiness = getSourceReadiness(source.id);
  const collections = getCollectionsForSource(source.id);
  const webLike = isWebLikeSource(source);
  const sourceState = webLike ? getSourceState(source.id) : null;
  const stateHistory = getSourceStateHistory(source.id);
  const urlHistory = getSourceUrlHistory(source.id);
  const versions = getSourceVersions(source.id);
  const archives = getArchiveCaptures(source.id);
  const fragments = getSourceSurvivalFragments(source.id);
  const impact = webLike ? getSourceStateImpact(source.id) : null;
  const maintenance = getSourceMaintenanceTasks(source.id);
  const screenshotLike = isScreenshotLikeSource(source);
  const screenshotRecord = getScreenshotSource(source.id);
  const screenshotContext = screenshotLike
    ? getScreenshotContextProfile(source.id)
    : undefined;
  const screenshotRelation = screenshotLike
    ? getScreenshotRelation(source.id)
    : undefined;
  const screenshotMods = screenshotLike
    ? getScreenshotModificationHistory(source.id)
    : [];
  const screenshotBoundary = screenshotLike
    ? getScreenshotClaimBoundary(source.id)
    : undefined;
  const screenshotBundle = screenshotLike
    ? getScreenshotPreservationBundle(source.id)
    : undefined;
  const screenshotLadder = screenshotLike
    ? getScreenshotTraceability(source.id)
    : null;
  const screenshotStatus = screenshotLike
    ? getScreenshotEvidenceStatus(source.id)
    : null;
  const screenshotIssues = screenshotLike
    ? getScreenshotResearchIssues(source.id)
    : [];
  const used =
    usage.writers.length +
      usage.diaryWorks.length +
      usage.editions.length +
      usage.researchWorkspaces.length +
      usage.factClaimCount >
    0;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <nav aria-label="Breadcrumb" className="text-xs text-text-faint">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="focus-ring hover:text-text-soft">
              Diary Observatory
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/sources" className="focus-ring hover:text-text-soft">
              Sources
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-text-soft" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>

      <header className="mt-8 border-b border-border pb-12">
        <p className="label">Source observatory</p>
        <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
          {source.title ?? source.label}
        </h1>
        {source.titleJa && (
          <p className="jp-heading mt-3 text-2xl md:text-3xl">
            {source.titleJa}
          </p>
        )}
        <p className="mt-4 text-sm text-text-soft">
          The document behind the claim.
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          事実主張の背後にある資料。
        </p>

        <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem] text-text-soft">
          <p>この資料は、Diary Observatoryのどの事実を支えているのか。</p>
          <p>どの版・個体を確認したのか。どのページを参照したのか。</p>
          <p>
            資料の存在だけでなく、資料がどのように使用されたかを表示する。
          </p>
        </div>

        <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="label">Publisher / institution</dt>
            <dd className="mt-1 text-text-soft">
              {source.publisher ?? source.institution ?? "—"}
            </dd>
          </div>
          <div>
            <dt className="label">Source kind</dt>
            <dd className="mt-1 text-text-soft">{source.kind ?? "other"}</dd>
          </div>
          <div>
            <dt className="label">Format</dt>
            <dd className="mt-1 text-text-soft">{source.format ?? "—"}</dd>
          </div>
          <div>
            <dt className="label">Primary / secondary</dt>
            <dd className="mt-1 text-text-soft">
              {source.sourceLevel ?? "unknown"}
            </dd>
          </div>
          <div>
            <dt className="label">Reliability</dt>
            <dd className="mt-1 text-text-soft">
              {source.reliability ?? "unknown"}
            </dd>
          </div>
          <div>
            <dt className="label">Verification</dt>
            <dd className="mt-1">
              {source.status ? (
                <VerificationStatusBadge status={source.status} />
              ) : (
                "—"
              )}
            </dd>
          </div>
          <div>
            <dt className="label">Access</dt>
            <dd className="mt-1 text-text-soft">
              {source.accessStatus ?? "not-checked"}
            </dd>
          </div>
          <div>
            <dt className="label">Rights</dt>
            <dd className="mt-1 text-text-soft">
              {source.rightsReadiness ?? "unknown"}
            </dd>
          </div>
          <div>
            <dt className="label">Language</dt>
            <dd className="mt-1 text-text-soft">{source.language ?? "—"}</dd>
          </div>
        </dl>
      </header>

      <section className="my-10 border-b border-border pb-10">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["Copies located", dashboard.copiesLocated],
            ["Copies examined", dashboard.copiesExamined],
            ["Captures", dashboard.captures],
            ["Fact claims", dashboard.factClaims],
            ["Conflicts", dashboard.conflicts],
            ["Link issues", dashboard.linkIssues],
            ["Rights issues", dashboard.rightsIssues],
            ["Observations", dashboard.observations],
            ["Interpretations", dashboard.interpretations],
            ["Used pages", dashboard.usedPages],
          ].map(([label, value]) => (
            <li key={label as string} className="border border-border px-4 py-3">
              <p className="label">{label}</p>
              <p className="editorial mt-2 text-2xl text-text">{value}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <ConceptQuote
          en={
            "A claim is only as traceable\nas the source path behind it."
          }
          ja={
            "事実の信頼性は、\nその背後の資料経路を\nどこまでたどれるかで決まる。"
          }
        />
      </section>

      {/* Identity */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Source identity
        </h2>
        <p className="jp-heading mt-2 text-lg">資料の識別情報</p>
        <dl className="mt-8 grid gap-3 sm:grid-cols-2 text-sm">
          {[
            ["Title", source.title ?? source.label],
            ["Alternate title", source.alternateTitles?.join(" · ") ?? "—"],
            ["Author", source.authorLabel ?? "—"],
            ["Editor", source.editorLabel ?? "—"],
            ["Publisher", source.publisher ?? "—"],
            ["Institution", source.institution ?? "—"],
            ["Publication date", source.publicationDate ?? "Source needed"],
            ["Identifiers", source.identifiers?.join(" · ") ?? "—"],
            ["Language", source.language ?? "—"],
            ["Format", source.format ?? "—"],
            ["URL", source.url ?? "—"],
            ["Accessed at", source.accessedAt ?? "Not recorded"],
            ["Last checked", source.lastCheckedAt ?? "Not checked"],
          ].map(([label, value]) => (
            <div key={label} className="border border-border px-4 py-3">
              <dt className="label">{label}</dt>
              <dd className="mt-2 break-all text-text-soft">{value}</dd>
              <dd className="mt-2">
                {source.status && (
                  <VerificationStatusBadge status={source.status} />
                )}
              </dd>
            </div>
          ))}
        </dl>
        {source.url && (
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-6 inline-flex border border-border px-4 py-2 text-xs text-text-soft"
          >
            Open external URL
          </a>
        )}
      </section>

      {/* Reliability by claim */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          How reliable is this source for this claim?
        </h2>
        <p className="jp-heading mt-2 text-lg">
          この資料は、その主張に対してどの程度有効か
        </p>
        <p className="mt-4 max-w-2xl text-sm text-text-faint">
          資料全体へ一つの絶対的な信頼度を付けない。同じ資料でも、主張によって有効性が異なる。
        </p>
        {reliabilities.length === 0 ? (
          <p className="mt-6 text-sm text-text-faint">
            No claim-specific reliability rows registered.
          </p>
        ) : (
          <ul className="mt-8 space-y-3">
            {reliabilities.map((row) => (
              <li key={row.id} className="border border-border px-4 py-4">
                <div className="flex flex-wrap gap-2">
                  <Pill>{row.claimType}</Pill>
                  <Pill>{row.reliability}</Pill>
                  <VerificationStatusBadge status={row.verificationStatus} />
                  {row.crossCheckRequired && <Pill>cross-check required</Pill>}
                </div>
                {row.scope && (
                  <p className="mt-2 text-sm text-text-soft">{row.scope}</p>
                )}
                {row.limitations?.length ? (
                  <ul className="mt-2 space-y-1 text-xs text-text-faint">
                    {row.limitations.map((l) => (
                      <li key={l}>· {l}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Dependency graph */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          From document to public argument
        </h2>
        <p className="jp-heading mt-2 text-lg">資料から公開された議論まで</p>
        <ol className="mt-8 space-y-2">
          {DEPENDENCY.map((node, i) => (
            <li
              key={node}
              className="flex items-center gap-3 border border-border px-4 py-3"
            >
              <span className="label w-6">{i + 1}</span>
              <span className="editorial text-text">{node}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Copies */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Copies and access points
        </h2>
        <p className="jp-heading mt-2 text-lg">確認個体とアクセス先</p>
        <p className="mt-4 text-sm text-text-faint">
          Located / Accessed / Examined / Captured / Cited
          を一つの boolean で管理しない。所在確認と本文確認を区別する。
        </p>
        {copies.length === 0 ? (
          <p className="mt-6 text-sm text-text-faint">
            No SourceCopy linked. Catalogue or website reachability is not
            examined copy status.
          </p>
        ) : (
          <ul className="mt-6 space-y-3">
            {copies.map((c) => (
              <li key={c.id} className="border border-border px-4 py-3 text-sm">
                {c.copyType} · {c.accessStatus}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Captures */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Captured evidence
        </h2>
        <p className="jp-heading mt-2 text-lg">確認した根拠箇所</p>
        {captures.length === 0 ? (
          <p className="mt-6 text-sm text-text-faint">
            No SourceCapture registered. Do not store long excerpts here.
          </p>
        ) : (
          <p className="mt-6 text-sm text-text-soft">
            {captures.length} capture(s)
          </p>
        )}
      </section>

      {/* Supported claims */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Claims supported by this source
        </h2>
        <p className="jp-heading mt-2 text-lg">この資料が支える主張</p>
        {facts.length === 0 ? (
          <p className="mt-6 text-sm text-text-faint">
            No FactClaim currently depends on this source. Claim-type reliability
            rows above describe intended use ranges.
          </p>
        ) : (
          <ul className="mt-6 space-y-2">
            {facts.map((f) => (
              <li key={f.id} className="border border-border px-4 py-3 text-sm">
                {f.claim}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* FOI */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          What was observed and interpreted?
        </h2>
        <p className="jp-heading mt-2 text-lg">
          この資料から、何を観測し、どう解釈したか
        </p>
        <p className="mt-4 text-sm text-text-faint">
          Fact {facts.length} · Observation {observations.length} ·
          Interpretation {interpretations.length}
        </p>
        {interpretations.length > 0 && facts.length === 0 && (
          <p className="mt-4 border border-border px-4 py-3 text-sm text-text-soft">
            Warning: Interpretation rows exist without attached FactClaims for
            this source.
          </p>
        )}
      </section>

      {/* Usage */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Where is this source used?
        </h2>
        <p className="jp-heading mt-2 text-lg">この資料は、どこで使用されているか</p>
        {!used ? (
          <p className="mt-6 text-sm text-text-faint">
            Registered but not yet used.
            <span className="jp-serif mt-1 block">登録済み・未使用</span>
          </p>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {(
              [
                {
                  label: "Writers",
                  items: usage.writers.map((w) => ({
                    href: `/writers/${w.slug}`,
                    label: w.name,
                  })),
                },
                {
                  label: "Diary Works",
                  items: usage.diaryWorks.map((d) => ({
                    href: `/diaries/${d.slug}`,
                    label: d.title,
                  })),
                },
                {
                  label: "Editions",
                  items: usage.editions.map((e) => ({
                    href: `/editions/${e.slug}`,
                    label: e.title,
                  })),
                },
                {
                  label: "Research Workspaces",
                  items: usage.researchWorkspaces.map((r) => ({
                    href: r.href,
                    label: r.title,
                  })),
                },
              ] as const
            ).map((group) => (
              <div key={group.label}>
                <p className="label">{group.label}</p>
                {group.items.length === 0 ? (
                  <p className="mt-2 text-xs text-text-faint">None</p>
                ) : (
                  <ul className="mt-2 space-y-2 text-sm">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="focus-ring text-text-soft underline-offset-4 hover:underline"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Conflicts */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Conflicts involving this source
        </h2>
        <p className="jp-heading mt-2 text-lg">この資料が関係する矛盾</p>
        {conflicts.length === 0 ? (
          <p className="mt-6 text-sm text-text-faint">
            No conflicts currently attach this source.
          </p>
        ) : (
          <ul className="mt-6 space-y-3">
            {conflicts.map((c) => (
              <li key={c.id} className="border border-border px-4 py-4">
                <div className="flex flex-wrap gap-2">
                  <Pill>{c.topic}</Pill>
                  <Pill>{c.resolutionStatus}</Pill>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-text-soft">
                  {c.sourcePositions.map((pos) => (
                    <li key={pos}>· {pos}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Purpose / limitations */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Source purpose and limitations
        </h2>
        <p className="mt-4 text-sm text-text-soft">
          Purpose: {source.purpose ?? "unknown"}
        </p>
        <p className="mt-4 max-w-2xl text-sm text-text-faint">
          資料は中立な容器ではない。宣伝、公式書誌、私的日記では、記録する目的と省略するものが異なる。
        </p>
        {source.limitations?.length ? (
          <ul className="mt-6 space-y-2 text-sm text-text-faint">
            {source.limitations.map((l) => (
              <li key={l}>· {l}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-sm text-text-faint">
            No confirmed limitations registered.
          </p>
        )}
      </section>

      {/* Rights */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Rights and public use
        </h2>
        <p className="jp-heading mt-2 text-lg">権利と公開利用</p>
        <dl className="mt-6 grid gap-3 sm:grid-cols-2 text-sm">
          <div className="border border-border px-4 py-3">
            <dt className="label">Rights status</dt>
            <dd className="mt-2 text-text-soft">
              {source.rightsStatus ?? "Unknown"}
            </dd>
          </div>
          <div className="border border-border px-4 py-3">
            <dt className="label">Quotation readiness</dt>
            <dd className="mt-2 text-text-soft">
              {source.rightsReadiness ?? "unknown"}
            </dd>
          </div>
        </dl>
        <ul className="mt-6 space-y-2 text-sm text-text-faint">
          {RIGHTS_PRINCIPLES.map((p) => (
            <li key={p}>· {p}</li>
          ))}
        </ul>
      </section>

      {/* Link health / freshness */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Access and link health
        </h2>
        <p className="mt-4 text-sm text-text-faint">
          Freshness: {source.freshnessPolicy ?? "unknown"} · Last checked:{" "}
          {source.lastCheckedAt ?? "Not checked"}
        </p>
        <p className="mt-2 text-sm text-text-faint">
          自動監視がない場合、未チェック状態を Reachable にしない。
        </p>
        <ul className="mt-6 space-y-3">
          {links.map((l) => (
            <li key={l.id} className="border border-border px-4 py-3 text-sm">
              <div className="flex flex-wrap gap-2">
                <Pill>{l.status}</Pill>
                {l.contentAvailability && <Pill>{l.contentAvailability}</Pill>}
              </div>
              <p className="mt-2 break-all text-text-soft">{l.url}</p>
              {l.note && (
                <p className="mt-2 text-xs text-text-faint">{l.note}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Source state / link rot */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Source state history
        </h2>
        <p className="jp-heading mt-2 text-lg">資料状態とURL履歴</p>
        {!webLike ? (
          <p className="mt-4 text-sm text-text-faint">Not applicable</p>
        ) : (
          <>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2 text-sm">
              <div className="border border-border px-4 py-3">
                <dt className="label">Current source state</dt>
                <dd className="mt-2 text-text-soft">{sourceState}</dd>
              </div>
              <div className="border border-border px-4 py-3">
                <dt className="label">Provenance impact</dt>
                <dd className="mt-2 text-text-soft">
                  {impact?.provenanceImpact ?? "unknown"}
                  <span className="ml-2 text-xs text-text-faint">
                    (traceability · truth unchanged)
                  </span>
                </dd>
              </div>
            </dl>
            <ul className="mt-6 grid gap-2 text-xs text-text-faint sm:grid-cols-2">
              <li className="border border-dashed border-border px-3 py-2">
                State history events: {stateHistory.length}
              </li>
              <li className="border border-dashed border-border px-3 py-2">
                URL history records: {urlHistory.length}
              </li>
              <li className="border border-dashed border-border px-3 py-2">
                Version records: {versions.length}
              </li>
              <li className="border border-dashed border-border px-3 py-2">
                Archive captures: {archives.length}
              </li>
              <li className="border border-dashed border-border px-3 py-2">
                Survival fragments: {fragments.length}
              </li>
              <li className="border border-dashed border-border px-3 py-2">
                Maintenance tasks: {maintenance.length}
              </li>
              <li className="border border-dashed border-border px-3 py-2">
                Affected claims: {impact?.affectedFactClaimIds.length ?? 0}
              </li>
            </ul>
            <p className="mt-4 text-xs">
              <Link
                href="/sources/link-rot"
                className="underline-offset-4 hover:underline"
              >
                Link Rot Register
              </Link>
              {" · "}
              <Link
                href="/observations/link-rot-is-archive-history"
                className="underline-offset-4 hover:underline"
              >
                Observation
              </Link>
            </p>
          </>
        )}
      </section>

      {/* Screenshot provenance */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Screenshot provenance
        </h2>
        <p className="jp-heading mt-2 text-lg">スクリーンショット根拠経路</p>
        {!screenshotLike ? (
          <p className="mt-4 text-sm text-text-faint">Not applicable</p>
        ) : (
          <>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2 text-sm">
              <div className="border border-border px-4 py-3">
                <dt className="label">Evidence status</dt>
                <dd className="mt-2 text-text-soft">
                  {screenshotStatus ?? "unknown-origin"}
                </dd>
              </div>
              <div className="border border-border px-4 py-3">
                <dt className="label">Traceability ladder</dt>
                <dd className="mt-2 text-text-soft">
                  Level {screenshotLadder ?? "unknown"}
                  <span className="ml-2 text-xs text-text-faint">
                    (not a quality score)
                  </span>
                </dd>
              </div>
              <div className="border border-border px-4 py-3">
                <dt className="label">Original URL</dt>
                <dd className="mt-2 break-all text-text-soft">
                  {screenshotRecord?.originalUrl ??
                    screenshotRelation?.originalUrl ??
                    "Unknown"}
                </dd>
              </div>
              <div className="border border-border px-4 py-3">
                <dt className="label">Authenticity</dt>
                <dd className="mt-2 text-text-soft">
                  {screenshotRecord?.authenticityStatus ?? "unknown"}
                </dd>
              </div>
            </dl>
            <ul className="mt-6 grid gap-2 text-xs text-text-faint sm:grid-cols-2">
              <li className="border border-dashed border-border px-3 py-2">
                Context profile: {screenshotContext ? "registered" : "none"}
              </li>
              <li className="border border-dashed border-border px-3 py-2">
                Relation: {screenshotRelation?.relationType ?? "none"}
              </li>
              <li className="border border-dashed border-border px-3 py-2">
                Modifications: {screenshotMods.length}
              </li>
              <li className="border border-dashed border-border px-3 py-2">
                Claim boundary: {screenshotBoundary ? "registered" : "none"}
              </li>
              <li className="border border-dashed border-border px-3 py-2">
                Preservation bundle: {screenshotBundle ? "registered" : "none"}
              </li>
              <li className="border border-dashed border-border px-3 py-2">
                Research issues: {screenshotIssues.length}
              </li>
            </ul>
            <p className="mt-4 text-xs">
              <Link
                href="/observations/screenshot-is-not-provenance"
                className="underline-offset-4 hover:underline"
              >
                Observation: A Screenshot Is Not Provenance
              </Link>
            </p>
          </>
        )}
      </section>

      {/* Readiness */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Source readiness
        </h2>
        <p className="jp-heading mt-2 text-lg">資料の確認状況</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {readiness.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border border-border px-3 py-2 text-xs"
            >
              <span>
                <span className="text-text-soft">{item.label}</span>
                {item.labelJa && (
                  <span className="jp-serif ml-2 text-text-faint">
                    {item.labelJa}
                  </span>
                )}
              </span>
              <Pill>{item.state}</Pill>
            </li>
          ))}
        </ul>
      </section>

      {/* Collections */}
      {collections.length > 0 && (
        <section className="my-14 border-b border-border pb-14">
          <h2 className="editorial text-2xl text-text md:text-3xl">
            Collections
          </h2>
          <ul className="mt-6 space-y-3">
            {collections.map((c) => (
              <li key={c.id} className="border border-border px-4 py-4">
                <p className="editorial text-lg text-text">{c.title}</p>
                {c.titleJa && (
                  <p className="jp-serif mt-1 text-sm text-text-faint">
                    {c.titleJa}
                  </p>
                )}
                {c.description && (
                  <p className="mt-2 text-sm text-text-soft">{c.description}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="my-14 border-b border-border pb-14">
        <FactObservationInterpretationBlock
          fact={`${title} is registered in the public Source registry${source.url ? ` with URL ${source.url}` : ""}.`}
          observation="A registered web or catalogue source can support bibliographic or institutional claims without proving diary-day Facts."
          interpretation="Keeping claim-type reliability separate from wholesale source scores prevents overstating what a homepage or catalogue can show."
        />
      </section>

      <section className="my-14 flex flex-wrap gap-3">
        <Link
          href="/sources"
          className="focus-ring inline-flex border border-border px-4 py-2 text-xs text-text-soft"
        >
          All sources
        </Link>
        <Link
          href="/editions"
          className="focus-ring inline-flex border border-border px-4 py-2 text-xs text-text-soft"
        >
          Editions
        </Link>
      </section>
    </div>
  );
}
