import Link from "next/link";
import type { ReactNode } from "react";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { ConceptQuote } from "@/components/observations/ConceptQuote";
import { FactObservationInterpretationBlock } from "@/components/observations/FactObservationInterpretationBlock";
import { ResearchBreadcrumb } from "@/components/research/ResearchBreadcrumb";
import { VerificationStatusBadge } from "@/components/research/VerificationStatusBadge";
import { WriterResearchQueue } from "@/components/writers/WriterResearchQueue";
import {
  RESEARCH_URL,
  audienceVerificationItems,
  bodyVerificationItems,
  computeResearchStatus,
  crossSourceChecklist,
  editionVerificationCards,
  emptyStateSteps,
  entityVerificationTypes,
  entryReadinessChecklist,
  entryResearchPackageShape,
  excerptPolicyDefault,
  foodVerificationItems,
  hardRequirementKeys,
  hardRequirements,
  performanceVerificationChecklist,
  publicResearchNotes,
  rejectionReasonsCatalog,
  relatedPages,
  relatedResearchTracks,
  researchSources,
  researchValueCriteria,
  researchValueKeys,
  roppaEntryCandidates,
  roppaFirstEntryLead,
  selectionRequirements,
  textHandlingPrinciples,
  volumeVerificationRows,
  waitingVerificationTypes,
} from "@/data/research/furukawa-roppa-first-entry";

function StatusPill({ children }: { children: ReactNode }) {
  return (
    <span className="border border-border px-2 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
      {children}
    </span>
  );
}

export function RoppaFirstEntryResearchWorkspace() {
  const status = computeResearchStatus(roppaEntryCandidates);
  const readinessBlocked = entryReadinessChecklist.some(
    (item) => item.kind === "hard" && item.state === "blocked",
  );

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <ResearchBreadcrumb label="Roppa Furukawa First Entry" />

      {/* Header */}
      <header className="mt-8 border-b border-border pb-12">
        <p className="label">Primary-source research</p>
        <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
          Selecting Roppa Furukawa’s First Indexed Day
        </h1>
        <p className="jp-heading mt-3 text-2xl md:text-3xl">
          古川ロッパ｜最初の一日を選ぶ
        </p>
        <p className="mt-4 text-sm text-text-soft">
          Verifying edition, volume, page, date, performance, food, and body
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          底本、篇、ページ、日付、舞台、食事、身体を照合する
        </p>

        <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
          {roppaFirstEntryLead.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="label">Writer</dt>
            <dd className="mt-1 text-text-soft">
              <Link
                href="/writers/furukawa-roppa"
                className="focus-ring underline-offset-4 hover:underline"
              >
                Roppa Furukawa
              </Link>
            </dd>
          </div>
          <div>
            <dt className="label">Diary</dt>
            <dd className="mt-1 text-text-soft">
              <Link
                href="/diaries/furukawa-roppa-showa-diary"
                className="focus-ring underline-offset-4 hover:underline"
              >
                Furukawa Roppa Shōwa Diary
              </Link>
            </dd>
          </div>
          <div>
            <dt className="label">Research type</dt>
            <dd className="mt-1 text-text-soft">Entry selection</dd>
          </div>
          <div>
            <dt className="label">Current candidate count</dt>
            <dd className="mt-1 text-text-soft">
              {status.candidatesRegistered} registered
            </dd>
          </div>
          <div>
            <dt className="label">Edition-verified candidates</dt>
            <dd className="mt-1 text-text-soft">{status.qualifiedCandidates}</dd>
          </div>
          <div>
            <dt className="label">Selected candidate</dt>
            <dd className="mt-1 text-text-soft">
              {status.selectedCandidateId ?? "None"}
            </dd>
          </div>
          <div>
            <dt className="label">Research status</dt>
            <dd className="mt-1 text-text-soft">{status.researchStatus}</dd>
          </div>
          <div>
            <dt className="label">Verification status</dt>
            <dd className="mt-1 text-text-soft">{status.verificationStatus}</dd>
          </div>
          <div>
            <dt className="label">Last updated</dt>
            <dd className="mt-1 text-text-soft">{status.lastUpdated}</dd>
          </div>
        </dl>
      </header>

      {/* Status strip */}
      <section className="my-10 border-b border-border pb-10">
        <h2 className="label">Research status</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Sources acquired",
              value: status.sourcesAcquired,
              note: status.sourcesLabel,
            },
            {
              label: "Editions verified",
              value: `${status.editionsVerified} / ${status.editionsTotal}`,
              note: "Registered cards — not copy-in-hand count",
            },
            {
              label: "Volumes verified",
              value: `${status.volumesVerified} / ${status.volumesTotal}`,
              note: "Fully verified imprint rows",
            },
            {
              label: "Candidates registered",
              value: status.candidatesRegistered,
              note: "Not “none exist” — none registered yet",
            },
            {
              label: "Qualified candidates",
              value: status.qualifiedCandidates,
              note: "Hard requirements + review",
            },
            {
              label: "Selected candidates",
              value: status.selectedCandidates,
              note: "SelectionStatus = selected",
            },
            {
              label: "Critical conflicts",
              value: status.criticalConflicts,
              note: "Unresolved critical ResearchConflict",
            },
          ].map((item) => (
            <li
              key={item.label}
              className="border border-border px-4 py-4 text-sm text-text-soft"
            >
              <p className="label">{item.label}</p>
              <p className="editorial mt-2 text-2xl text-text">{item.value}</p>
              <p className="mt-2 text-[0.65rem] text-text-faint">{item.note}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Why */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Why not create an entry immediately?
        </h2>
        <p className="jp-heading mt-2 text-lg">なぜ、すぐにEntryを作らないのか</p>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-[0.98rem]">
          <p>
            古川ロッパの日記には、長期間にわたる大量の記録がある。印象的な一文だけを見つけて一日を作ることはできる。
          </p>
          <p>
            しかし、それでは日付の誤認、別の篇との混同、版の混同、ページ情報の欠落、公演名や劇場名の取り違え、食事と公演の時間関係の誤読、後世の年譜との混同、著作権上の過剰引用が起きやすい。
          </p>
          <p>
            Entryは記事ではなくデータの結節点である。一度公開すると、人物、劇場、食事、身体、観客、比較ページへ接続される。そのため、最初の一日は慎重に選ぶ。
          </p>
        </div>
        <ConceptQuote
          en={"An entry is small in size,\nbut large in consequences."}
          ja={"Entryは小さい。\n\nしかし、\nそこから広がる影響は大きい。"}
        />
      </section>

      {/* Criteria */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Entry selection criteria
        </h2>
        <p className="jp-heading mt-2 text-lg">Entry選定基準</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <p className="label">Hard requirements</p>
            <ul className="mt-3 space-y-2">
              {hardRequirements.map((c) => (
                <li
                  key={c.id}
                  className="border border-border px-3 py-3 text-sm text-text-soft"
                >
                  {c.label}
                  <span className="jp-serif mt-1 block text-xs text-text-faint">
                    {c.labelJa}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">Recommended research value</p>
            <ul className="mt-3 space-y-2">
              {researchValueCriteria.map((c) => (
                <li
                  key={c.id}
                  className="border border-border px-3 py-3 text-sm text-text-soft"
                >
                  {c.label}
                  <span className="jp-serif mt-1 block text-xs text-text-faint">
                    {c.labelJa}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hard / value */}
      <section className="my-14 border-b border-border pb-14">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="border border-border px-5 py-5">
            <p className="label">Hard requirements</p>
            <p className="mt-2 text-xs text-text-faint">
              満たさなければ Entry にできない
            </p>
            <ul className="mt-4 space-y-1 text-sm text-text-soft">
              {hardRequirementKeys.map((k) => (
                <li key={k}>· {k}</li>
              ))}
            </ul>
          </article>
          <article className="border border-border px-5 py-5">
            <p className="label">Research value</p>
            <p className="mt-2 text-xs text-text-faint">
              含まれるほど観測価値が高い
            </p>
            <ul className="mt-4 space-y-1 text-sm text-text-soft">
              {researchValueKeys.map((k) => (
                <li key={k}>· {k}</li>
              ))}
            </ul>
          </article>
        </div>
        <p className="mt-4 max-w-2xl text-sm text-text-faint">
          Research value が高くても、Hard requirements を満たさない候補は
          Selected にできない。
        </p>
      </section>

      {/* Candidates */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Candidate days
        </h2>
        <p className="jp-heading mt-2 text-lg">候補日</p>
        <p className="mt-3 text-xs text-text-faint">
          Columns ready: Date · Volume · Edition · Pages · Type · Performance ·
          Waiting · Food · Body · Audience · Historical context · Qualification ·
          Selection · Verification
        </p>
        <p className="mt-2 text-xs text-text-faint">
          Filters ready: Volume · Period · Candidate type · Qualification ·
          Selection · Record presence · Verification · Rights status
        </p>

        {roppaEntryCandidates.length === 0 ? (
          <div className="mt-8 border border-dashed border-border px-6 py-8">
            <p className="editorial text-xl text-text">
              No edition-verified candidate day has been registered yet.
            </p>
            <p className="jp-serif mt-2 text-sm text-text-faint">
              底本、篇、ページまで確認できた候補日は、まだ登録されていません。
            </p>
            <p className="mt-6 text-sm text-text-soft">
              No candidate day has been registered.
            </p>
            <p className="jp-serif mt-1 text-sm text-text-faint">
              候補日は、まだ登録されていません。
            </p>
            <p className="label mt-8">Required next action</p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-text-faint">
              {emptyStateSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-6 text-xs text-text-faint">
              Research instructions only — no administrative action buttons.
            </p>
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[48rem] border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-border">
                  {[
                    "Date",
                    "Volume",
                    "Edition",
                    "Pages",
                    "Type",
                    "Qualification",
                    "Selection",
                    "Verification",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-2 py-2 font-normal text-text-faint"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {roppaEntryCandidates.map((c) => (
                  <tr key={c.id} className="border-b border-border-soft">
                    <td className="px-2 py-2 text-text-soft">
                      {c.date ?? "—"}
                    </td>
                    <td className="px-2 py-2 text-text-faint">
                      {c.volumeId ?? "—"}
                    </td>
                    <td className="px-2 py-2 text-text-faint">
                      {c.editionId ?? "—"}
                    </td>
                    <td className="px-2 py-2 text-text-faint">
                      {c.startPage != null
                        ? `${c.startPage}${c.endPage != null ? `–${c.endPage}` : ""}`
                        : "—"}
                    </td>
                    <td className="px-2 py-2 text-text-faint">
                      {c.candidateType}
                    </td>
                    <td className="px-2 py-2 text-text-faint">
                      {c.qualificationStatus}
                    </td>
                    <td className="px-2 py-2 text-text-faint">
                      {c.selectionStatus}
                    </td>
                    <td className="px-2 py-2">
                      <VerificationStatusBadge
                        status={c.verificationStatus}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Edition */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Edition verification
        </h2>
        <p className="jp-heading mt-2 text-lg">版の確認</p>
        <div className="mt-8 space-y-4">
          {editionVerificationCards.map((ed) => (
            <article key={ed.id} className="border border-border px-5 py-5">
              <div className="flex flex-wrap items-center gap-2">
                <p className="editorial text-xl text-text">{ed.bookTitle}</p>
                <VerificationStatusBadge status={ed.status} />
              </div>
              {ed.volumeTitle && (
                <p className="mt-2 text-sm text-text-soft">{ed.volumeTitle}</p>
              )}
              <dl className="mt-4 grid gap-2 text-xs text-text-faint sm:grid-cols-2">
                <div>
                  <dt className="label">Publisher</dt>
                  <dd className="mt-1 text-text-soft">
                    {ed.publisher ?? "Bibliographic verification needed"}
                  </dd>
                </div>
                <div>
                  <dt className="label">Publication date</dt>
                  <dd className="mt-1 text-text-soft">
                    {ed.publicationDate ?? "Bibliographic verification needed"}
                  </dd>
                </div>
                <div>
                  <dt className="label">Editor</dt>
                  <dd className="mt-1 text-text-soft">
                    {ed.editor ?? "Bibliographic verification needed"}
                  </dd>
                </div>
                <div>
                  <dt className="label">ISBN</dt>
                  <dd className="mt-1 text-text-soft">
                    {ed.isbn ?? "Bibliographic verification needed"}
                  </dd>
                </div>
                <div>
                  <dt className="label">Library record</dt>
                  <dd className="mt-1 text-text-soft">
                    {ed.libraryRecord ?? "—"}
                  </dd>
                </div>
                <div>
                  <dt className="label">Access</dt>
                  <dd className="mt-1 text-text-soft">
                    {ed.accessMethod ?? "—"}
                  </dd>
                </div>
                <div>
                  <dt className="label">Pagination</dt>
                  <dd className="mt-1 text-text-soft">
                    {ed.pagination ?? "Bibliographic verification needed"}
                  </dd>
                </div>
                <div>
                  <dt className="label">Rights</dt>
                  <dd className="mt-1 text-text-soft">
                    {ed.rightsStatus ?? "Unknown"}
                  </dd>
                </div>
              </dl>
              {ed.notes && (
                <p className="mt-3 text-xs text-text-faint">{ed.notes}</p>
              )}
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm text-text-faint">
          版を確定できていない場合、EntryCandidate を qualified にできない。
        </p>
        <p className="mt-4 text-sm text-text-soft">
          Status: Blocked by bibliography · 底本未確定のため候補日選定は保留
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/research/furukawa-roppa-bibliography"
            className="focus-ring inline-flex cta cta-secondary"
          >
            Open bibliography workspace
          </Link>
          <Link
            href="/editions/furukawa-roppa-showa-diary-shobunsha-set"
            className="focus-ring inline-flex border border-border px-4 py-2 text-xs text-text-soft"
          >
            Open registered edition
          </Link>
        </div>
      </section>

      {/* Volumes */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Which volume contains the day?
        </h2>
        <p className="jp-heading mt-2 text-lg">
          その日は、どの篇に収録されているか
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {volumeVerificationRows.map((vol) => (
            <article key={vol.id} className="border border-border px-5 py-5">
              <p className="label">{vol.volumeType}</p>
              <h3 className="editorial mt-2 text-xl text-text">{vol.title}</h3>
              <p className="jp-serif mt-1 text-sm text-accent">{vol.titleJa}</p>
              <dl className="mt-4 space-y-2 text-xs text-text-faint">
                <div>
                  <dt className="label">Covered period</dt>
                  <dd className="mt-1 text-text-soft">{vol.coveredPeriod}</dd>
                </div>
                <div>
                  <dt className="label">Publication information</dt>
                  <dd className="mt-1 text-text-soft">{vol.publicationInfo}</dd>
                </div>
                <div>
                  <dt className="label">Entry candidate count</dt>
                  <dd className="mt-1 text-text-soft">{vol.candidateCount}</dd>
                </div>
                <div>
                  <dt className="label">Verification</dt>
                  <dd className="mt-1">
                    <VerificationStatusBadge
                      status={vol.verificationStatus}
                    />
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm text-text-faint">収録期間を推測しない。</p>
      </section>

      {/* Boundary / source / rights */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Where does the day begin and end?
        </h2>
        <p className="jp-heading mt-2 text-lg">その一日は、どこからどこまでか</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Date heading",
            "Start page",
            "End page",
            "Continues from previous page",
            "Continues to next page",
            "Multiple dates on same page",
            "Editorial footnotes",
            "Missing pages",
            "Illegible text",
          ].map((item) => (
            <li
              key={item}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {item}
              <span className="mt-1 block text-[0.65rem] text-text-faint">
                Not checked — no candidate
              </span>
            </li>
          ))}
        </ul>

        <h3 className="editorial mt-12 text-xl text-text">
          Source capture policy
        </h3>
        <p className="mt-3 max-w-2xl text-sm text-text-soft">
          SourceCapture は全文コピーではなく、claim を支える最小根拠だけを管理する。shortExcerpt
          は最小限。要約・パラフレーズを優先する。
        </p>
        <p className="mt-2 text-xs text-text-faint">
          Captures registered: 0
        </p>

        <h3 className="editorial mt-12 text-xl text-text">
          Text handling policy
        </h3>
        <p className="jp-heading mt-1 text-base">本文の扱い</p>
        <ul className="mt-4 space-y-1 text-sm text-text-faint">
          {textHandlingPrinciples.map((p) => (
            <li key={p}>· {p}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-text-faint">
          Default ExcerptPolicy: {excerptPolicyDefault}
        </p>
      </section>

      {/* Verification domains */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Was there a performance?
        </h2>
        <p className="jp-heading mt-2 text-lg">その日に、公演はあったか</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {performanceVerificationChecklist.map((item) => (
            <li
              key={item}
              className="border border-border px-2.5 py-1 text-xs text-text-faint"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-text-faint">
          日記本文に出演記述があっても、演目・劇場・回数を推測しない。
        </p>

        <h3 className="editorial mt-10 text-xl text-text">
          Waiting and backstage
        </h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {waitingVerificationTypes.map((item) => (
            <li
              key={item}
              className="border border-border px-2.5 py-1 text-xs text-text-faint"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-text-faint">
          Explicit / Implied のみ Fact の WaitingRecord 候補。Contextual は
          Interpretation に分離。
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div>
            <p className="label">Food verification</p>
            <ul className="mt-3 space-y-1 text-sm text-text-faint">
              {foodVerificationItems.map((i) => (
                <li key={i}>· {i}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">Body verification</p>
            <ul className="mt-3 space-y-1 text-sm text-text-faint">
              {bodyVerificationItems.map((i) => (
                <li key={i}>· {i}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">Audience verification</p>
            <ul className="mt-3 space-y-1 text-sm text-text-faint">
              {audienceVerificationItems.map((i) => (
                <li key={i}>· {i}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-xs text-text-faint">
          「大入り」を満席と自動変換しない。症状から病名を診断しない。
        </p>

        <h3 className="editorial mt-10 text-xl text-text">Entity verification</h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {entityVerificationTypes.map((e) => (
            <li
              key={e.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              {e.label}
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {e.labelJa}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-text-faint">
          名称が曖昧なら UnresolvedMention のまま。自動で Entity に昇格しない。
        </p>
      </section>

      {/* Cross-check / conflicts */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Cross-check the day
        </h2>
        <p className="jp-heading mt-2 text-lg">一日を別資料と照合する</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {crossSourceChecklist.map((item) => (
            <li
              key={item}
              className="border border-border px-2.5 py-1 text-xs text-text-faint"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-text-faint">
          CrossSourceCheck registered: 0 · 資料に見つからないことを日記の誤りと即断しない。
        </p>

        <h3 className="editorial mt-10 text-xl text-text">
          Conflicts and ambiguities
        </h3>
        <p className="jp-heading mt-1 text-base">資料間の矛盾と曖昧さ</p>
        <div className="mt-4 border border-dashed border-border px-4 py-4 text-sm text-text-faint">
          ResearchConflict register is empty — no day registered to conflict
          against.
        </div>

        <h3 className="editorial mt-10 text-xl text-text">
          Candidate rejection reasons
        </h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {rejectionReasonsCatalog.map((r) => (
            <li
              key={r}
              className="border border-border px-2.5 py-1 text-[0.65rem] text-text-faint"
            >
              {r}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-text-faint">
          外した候補は削除せず研究履歴として残す。
        </p>
      </section>

      {/* Selection */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Selection decision
        </h2>
        <p className="jp-heading mt-2 text-lg">選定判断</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="border border-border px-4 py-4">
            <p className="label">Required</p>
            <ul className="mt-3 space-y-1 text-sm text-text-faint">
              {selectionRequirements.required.map((r) => (
                <li key={r}>· {r}</li>
              ))}
            </ul>
          </div>
          <div className="border border-border px-4 py-4">
            <p className="label">Recommended</p>
            <ul className="mt-3 space-y-1 text-sm text-text-faint">
              {selectionRequirements.recommended.map((r) => (
                <li key={r}>· {r}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-xs text-text-faint">
          Reviewer field uses “Editorial review” when no public name is appropriate.
          架空の人物名を作らない。
        </p>

        <div className="mt-10 border border-dashed border-border px-6 py-8">
          <h3 className="editorial text-2xl text-text">Selected first day</h3>
          <p className="jp-heading mt-2 text-lg">最初に索引化する一日</p>
          <p className="mt-6 text-sm text-text-soft">No day selected yet.</p>
          <p className="jp-serif mt-1 text-sm text-text-faint">
            選定された日は、まだありません。
          </p>
          <p className="mt-4 text-sm text-text-soft">Research remains open.</p>
          <p className="jp-serif mt-1 text-sm text-text-faint">調査は継続中です。</p>
          <p className="mt-4 text-xs text-text-faint">
            Future URL after selection: /entries/YYYY-MM-DD-furukawa-roppa
          </p>
        </div>
      </section>

      {/* Readiness */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Ready to become an Entry?
        </h2>
        <p className="jp-heading mt-2 text-lg">Entryへ進める状態か</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {entryReadinessChecklist.map((item) => (
            <li
              key={item.id}
              className="border border-border px-3 py-3 text-sm text-text-soft"
            >
              <span className="label">{item.kind}</span>
              <span className="mt-1 block">
                {item.label}
                {item.labelJa && (
                  <span className="jp-serif ml-1 text-xs text-text-faint">
                    {item.labelJa}
                  </span>
                )}
              </span>
              <span className="mt-2 block">
                <StatusPill>{item.state}</StatusPill>
              </span>
              {item.note && (
                <span className="mt-2 block text-[0.65rem] text-text-faint">
                  {item.note}
                </span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-text-faint">
          Overall readiness:{" "}
          {readinessBlocked ? "Blocked (hard requirement)" : "Partial"} · Hard
          requirements に Blocked があれば Ready にしない。
        </p>
      </section>

      {/* Package / claims */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Future Entry research package
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-text-soft">
          Entry ページは EntryResearchPackage から生成できる構造にする。現在
          package 件数: 0。
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {entryResearchPackageShape.map((f) => (
            <li
              key={f}
              className="border border-border px-2 py-1 text-[0.65rem] text-text-faint"
            >
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {(
            [
              ["FactClaim register", "0", "fact"],
              ["ObservationClaim register", "0", "observation"],
              ["InterpretationClaim register", "0", "interpretation"],
            ] as const
          ).map(([title, count, kind]) => (
            <article key={title} className="border border-border px-4 py-4">
              <EpistemicLabel kind={kind} />
              <p className="editorial mt-3 text-lg text-text">{title}</p>
              <p className="mt-2 text-sm text-text-faint">{count} registered</p>
            </article>
          ))}
        </div>
      </section>

      {/* Notes policy */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Research notes (public)
        </h2>
        <p className="mt-2 text-xs text-text-faint">
          visibility = public のみ表示。内部メモと公開本文を分離する。
        </p>
        <ul className="mt-6 space-y-3">
          {publicResearchNotes.map((n) => (
            <li
              key={n.id}
              className="border border-border px-4 py-4 text-sm text-text-soft"
            >
              <StatusPill>{n.noteType}</StatusPill>
              <p className="mt-3">{n.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <WriterResearchQueue items={relatedResearchTracks} />

      {/* Related */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text">Related pages</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {relatedPages.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="focus-ring flex flex-col border border-border px-4 py-3 hover:border-text-faint"
              >
                <span className="label">{page.group}</span>
                <span className="mt-2 text-sm text-text-soft">{page.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <FactObservationInterpretationBlock
        fact="版確認済み・頁付きの EntryCandidate は未登録。書誌上、『古川ロッパ昭和日記』は戦前篇・戦中篇・戦後篇・晩年篇の複数巻として現れ、出版社表示は晶文社（版差確認中）。"
        observation="Entry 選定には日付だけでなく篇・版・ページ・権利方針・一日境界が必須である。"
        interpretation="候補が 0 件でも Research Workspace は成立する。空状態は調査手順を示すための状態である。"
      />

      <CategorizedSourceList sources={researchSources} />
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/sources"
          className="focus-ring inline-flex border border-border px-4 py-2 text-xs text-text-soft"
        >
          Open Source Observatory
        </Link>
        <Link
          href="/sources/cinii-furukawa-roppa-showa-diary"
          className="focus-ring inline-flex border border-border px-4 py-2 text-xs text-text-soft"
        >
          CiNii source
        </Link>
      </div>

      <p className="mt-8 text-[0.65rem] text-text-faint">
        Workspace: {RESEARCH_URL}
      </p>
    </div>
  );
}
