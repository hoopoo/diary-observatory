import Link from "next/link";
import type { ReactNode } from "react";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { ConceptQuote } from "@/components/observations/ConceptQuote";
import { FactObservationInterpretationBlock } from "@/components/observations/FactObservationInterpretationBlock";
import { ResearchBreadcrumb } from "@/components/research/ResearchBreadcrumb";
import { VerificationStatusBadge } from "@/components/research/VerificationStatusBadge";
import { WriterResearchQueue } from "@/components/writers/WriterResearchQueue";
import {
  architectureLevels,
  acquisitionTasks,
  baseEditionDecisions,
  baseEditionHardRequirements,
  baseEditionPreferred,
  bibliographicClaims,
  bibliographicConflicts,
  bibliographicSources,
  bibliographicSourcesCatalog,
  bibliographyLead,
  computeBibliographyStatus,
  computeResearchDependency,
  emptyStateSteps,
  entrySuitabilityAssessments,
  editionComparisons,
  FIRST_ENTRY_RESEARCH_URL,
  personNameRecords,
  publicResearchNotes,
  recommendedResearchOrder,
  relatedPages,
  relatedResearchTracks,
  rightsPrinciples,
  roppaEditionResearchSlots,
  roppaEditions,
  roppaSourceCopies,
  sourcePriorityOrder,
  tocRecords,
  volumeBoundaryVerifications,
} from "@/data/research/furukawa-roppa-bibliography";
import { roppaVolumeRecords } from "@/data/volumes/furukawa-roppa-showa-diary";

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="border border-border px-2 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
      {children}
    </span>
  );
}

function StageBadge({ status }: { status: string }) {
  return (
    <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
      {status}
    </span>
  );
}

export function RoppaBibliographyResearchWorkspace() {
  const status = computeBibliographyStatus();
  const dependency = computeResearchDependency();
  const baseDecision = baseEditionDecisions[0];
  const hasVerifiedEdition = status.verifiedEditions > 0;
  const suitability = entrySuitabilityAssessments[0];

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <ResearchBreadcrumb label="Furukawa Roppa Bibliography" />

      <header className="mt-8 border-b border-border pb-12">
        <p className="label">Bibliographic research</p>
        <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
          Establishing the Bibliographic Base for the Furukawa Roppa Shōwa
          Diary
        </h1>
        <p className="jp-heading mt-3 text-2xl md:text-3xl">
          古川ロッパ昭和日記｜底本を確定する
        </p>
        <p className="mt-4 text-sm text-text-soft">
          Verifying volumes, editions, covered periods, pagination, and source
          access
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          各篇、版、収録期間、ページ体系、利用可能性を照合する
        </p>

        <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
          {bibliographyLead.map((p) => (
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
            <dt className="label">Diary work</dt>
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
            <dd className="mt-1 text-text-soft">
              Bibliography / edition selection
            </dd>
          </div>
          <div>
            <dt className="label">Known editions</dt>
            <dd className="mt-1 text-text-soft">
              {status.knownEditions} registered
            </dd>
          </div>
          <div>
            <dt className="label">Verified editions</dt>
            <dd className="mt-1 text-text-soft">{status.verifiedEditions}</dd>
          </div>
          <div>
            <dt className="label">Verified volumes</dt>
            <dd className="mt-1 text-text-soft">
              {status.verifiedVolumes} / {status.knownVolumes}
            </dd>
          </div>
          <div>
            <dt className="label">Selected base edition</dt>
            <dd className="mt-1 text-text-soft">
              {status.selectedBaseEditionId ?? "None"}
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

      {/* Status dashboard */}
      <section className="my-10 border-b border-border pb-10">
        <h2 className="label">Bibliographic research status</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              label: "Known editions",
              value: status.knownEditions,
              note: "Registered EditionRecords — not verified count",
            },
            {
              label: "Verified editions",
              value: status.verifiedEditions,
              note: "None verified until colophon / imprint match",
            },
            {
              label: "Known volumes",
              value: status.knownVolumes,
              note: "Catalogued volume architecture",
            },
            {
              label: "Verified volume boundaries",
              value: status.verifiedVolumeBoundaries,
              note: "First/last diary headings not yet confirmed",
            },
            {
              label: "Accessible copies",
              value: status.accessibleCopies,
              note: "No SourceCopy registered yet",
            },
            {
              label: "Stable-page editions",
              value: status.stablePageEditions,
              note: "Pagination type unknown",
            },
            {
              label: "Rights-ready editions",
              value: status.rightsReadyEditions,
              note: "Under review",
            },
            {
              label: "Base editions selected",
              value: status.baseEditionsSelected,
              note: "Decision: not-selected",
            },
            {
              label: "Critical conflicts",
              value: status.criticalConflicts,
              note: "Unresolved bibliographic conflicts",
            },
          ].map((item) => (
            <li key={item.label} className="border border-border px-4 py-4">
              <p className="label">{item.label}</p>
              <p className="editorial mt-2 text-3xl text-text">{item.value}</p>
              <p className="mt-2 text-xs text-text-faint">{item.note}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Why edition matters */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Why does the edition matter?
        </h2>
        <p className="jp-heading mt-2 text-lg">
          なぜ、版を確定する必要があるのか
        </p>
        <div className="jp-body mt-6 max-w-2xl space-y-4 text-[0.98rem] text-text-soft">
          <p>日記のEntryには、日付だけでなくページが必要になる。</p>
          <p>しかし、ページ番号は版によって異なる。</p>
          <p>篇の区分が変わる可能性がある。</p>
          <p>編集注が追加されることがある。</p>
          <p>旧字体や表記が変更されることがある。</p>
          <p>索引が追加されることがある。</p>
          <p>本文の修正や校訂が行われることもある。</p>
          <p>
            使用版を示さなければ、同じ一日を第三者が再確認できない。
          </p>
        </div>
        <ConceptQuote
          en="A page number without an edition is not a reproducible reference."
          ja="版を伴わないページ番号は、再確認できる参照ではない。"
        />
      </section>

      {/* Architecture */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Bibliographic architecture
        </h2>
        <p className="jp-heading mt-2 text-lg">書誌アーキテクチャ</p>
        <ol className="mt-8 space-y-3">
          {architectureLevels.map((level, i) => (
            <li key={level.id} className="flex items-start gap-4">
              <span className="label w-8 shrink-0">{i + 1}</span>
              <div className="border border-border px-4 py-3">
                <p className="editorial text-lg text-text">{level.label}</p>
                <p className="jp-serif mt-1 text-sm text-text-faint">
                  {level.labelJa}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-text-faint">
          DiaryWork / VolumeRecord / EditionRecord / SourceCopy /
          PageReference を分離する。
        </p>
      </section>

      {/* Dependency graph */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Research dependency
        </h2>
        <p className="jp-heading mt-2 text-lg">研究の依存関係</p>
        <ol className="mt-8 space-y-3">
          {dependency.map((stage, i) => (
            <li
              key={stage.id}
              className="flex flex-wrap items-center gap-3 border border-border px-4 py-3"
            >
              <span className="label">{i + 1}</span>
              <span className="editorial text-text">{stage.label}</span>
              <span className="jp-serif text-sm text-text-faint">
                {stage.labelJa}
              </span>
              <StageBadge status={stage.status} />
              {stage.note && (
                <span className="w-full text-xs text-text-faint">
                  {stage.note}
                </span>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Empty verified state */}
      {!hasVerifiedEdition && (
        <section className="my-14 border border-border bg-bg px-5 py-8 md:px-8">
          <p className="label">Research empty state</p>
          <h2 className="editorial mt-3 text-2xl text-text">
            No verified edition has been registered.
          </h2>
          <p className="jp-heading mt-2 text-lg">
            確認済みの版は、まだ登録されていません。
          </p>
          <p className="mt-4 text-sm text-text-faint">
            Known editions may exist as Partial records. Verified requires
            colophon / title-page confirmation, not catalogue presence alone.
          </p>
          <p className="label mt-8">Required next action</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-text-soft">
            {emptyStateSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      )}

      {/* Edition matrix / cards */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Edition matrix
        </h2>
        <p className="jp-heading mt-2 text-lg">版一覧</p>

        <div className="mt-8 space-y-4 md:hidden">
          {roppaEditions.map((ed) => (
            <article key={ed.id} className="border border-border px-4 py-5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="editorial text-xl text-text">
                  {ed.titleJa ?? ed.title}
                </h3>
                <VerificationStatusBadge status={ed.verificationStatus} />
              </div>
              <dl className="mt-4 grid gap-2 text-xs text-text-faint">
                <div>
                  <dt className="label">Edition label</dt>
                  <dd className="mt-1 text-text-soft">
                    {ed.editionLabel ?? "—"}
                  </dd>
                </div>
                <div>
                  <dt className="label">Publisher</dt>
                  <dd className="mt-1 text-text-soft">
                    {ed.publisher ?? "Bibliographic verification needed"}
                  </dd>
                </div>
                <div>
                  <dt className="label">Publication date</dt>
                  <dd className="mt-1 text-text-soft">
                    {ed.publicationDate ??
                      ed.publicationYear?.toString() ??
                      "Bibliographic verification needed"}
                  </dd>
                </div>
                <div>
                  <dt className="label">ISBN</dt>
                  <dd className="mt-1 text-text-soft">
                    {ed.isbn ?? "Bibliographic verification needed"}
                  </dd>
                </div>
                <div>
                  <dt className="label">Pagination</dt>
                  <dd className="mt-1 text-text-soft">
                    {ed.paginationType ?? "unknown"}
                  </dd>
                </div>
                <div>
                  <dt className="label">Physical / digital access</dt>
                  <dd className="mt-1 text-text-soft">
                    No SourceCopy registered
                  </dd>
                </div>
                <div>
                  <dt className="label">Rights</dt>
                  <dd className="mt-1 text-text-soft">
                    {ed.rightsStatus ?? "Unknown"}
                  </dd>
                </div>
                <div>
                  <dt className="label">Entry suitability</dt>
                  <dd className="mt-1 text-text-soft">
                    {ed.entrySuitability ?? "unknown"}
                  </dd>
                </div>
              </dl>
              {ed.notes && (
                <p className="mt-3 text-xs text-text-faint">{ed.notes}</p>
              )}
              <Link
                href={`/editions/${ed.slug}`}
                className="focus-ring mt-4 inline-flex border border-text bg-text px-3 py-1.5 text-[0.65rem] text-bg"
              >
                Open Edition Observatory
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 hidden overflow-x-auto md:block">
          <table className="w-full min-w-[64rem] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-border text-text-faint">
                {[
                  "Edition",
                  "Volumes",
                  "Publisher",
                  "Publication date",
                  "Edition label",
                  "ISBN",
                  "Pagination",
                  "Access",
                  "Rights",
                  "Verification",
                  "Entry suitability",
                ].map((h) => (
                  <th key={h} className="px-2 py-2 font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {roppaEditions.map((ed) => (
                <tr key={ed.id} className="border-b border-border align-top">
                  <td className="px-2 py-3 text-text-soft">
                    {ed.titleJa ?? ed.title}
                  </td>
                  <td className="px-2 py-3 text-text-faint">
                    {ed.volumeIds?.length ?? 0}
                  </td>
                  <td className="px-2 py-3 text-text-soft">
                    {ed.publisher ?? "—"}
                  </td>
                  <td className="px-2 py-3 text-text-faint">
                    Source needed
                  </td>
                  <td className="px-2 py-3 text-text-faint">
                    {ed.editionLabel ?? "—"}
                  </td>
                  <td className="px-2 py-3 text-text-faint">Source needed</td>
                  <td className="px-2 py-3 text-text-faint">
                    {ed.paginationType}
                  </td>
                  <td className="px-2 py-3 text-text-faint">Not registered</td>
                  <td className="px-2 py-3 text-text-faint">
                    {ed.rightsReadiness ?? "unknown"}
                  </td>
                  <td className="px-2 py-3">
                    <VerificationStatusBadge status={ed.verificationStatus} />
                  </td>
                  <td className="px-2 py-3 text-text-faint">
                    {ed.entrySuitability}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="mt-4 space-y-2 text-sm">
            {roppaEditions.map((ed) => (
              <li key={`link-${ed.id}`}>
                <Link
                  href={`/editions/${ed.slug}`}
                  className="focus-ring text-text-soft underline-offset-4 hover:underline"
                >
                  View edition · {ed.titleJa ?? ed.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 space-y-3">
          <p className="label">Research slots (not EditionRecords)</p>
          {roppaEditionResearchSlots.map((slot) => (
            <div key={slot.id} className="border border-border px-4 py-3">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm text-text-soft">{slot.label}</p>
                <VerificationStatusBadge status={slot.status} />
              </div>
              <p className="jp-serif mt-1 text-xs text-text-faint">
                {slot.labelJa}
              </p>
              <p className="mt-2 text-xs text-text-faint">{slot.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Volumes */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Volume verification
        </h2>
        <p className="jp-heading mt-2 text-lg">篇の確認</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {roppaVolumeRecords.map((vol) => {
            const boundary = volumeBoundaryVerifications.find(
              (b) => b.volumeId === vol.id,
            );
            return (
              <article key={vol.id} className="border border-border px-5 py-5">
                <p className="label">{vol.volumeType}</p>
                <h3 className="editorial mt-2 text-xl text-text">
                  {vol.title}
                </h3>
                <p className="jp-serif mt-1 text-sm text-accent">
                  {vol.titleJa}
                </p>
                <dl className="mt-4 space-y-2 text-xs text-text-faint">
                  <div>
                    <dt className="label">Covered period (bibliographic)</dt>
                    <dd className="mt-1 text-text-soft">
                      {vol.coverageLabelJa ?? "Bibliographic verification needed"}
                    </dd>
                  </div>
                  <div>
                    <dt className="label">Covered date precision</dt>
                    <dd className="mt-1 text-text-soft">
                      {vol.coveredDatePrecision ?? "unknown"}
                    </dd>
                  </div>
                  <div>
                    <dt className="label">Coverage evidence</dt>
                    <dd className="mt-1 text-text-soft">
                      {vol.coverageEvidence ?? "—"}
                    </dd>
                  </div>
                  <div>
                    <dt className="label">ISO start / end</dt>
                    <dd className="mt-1 text-text-soft">
                      Not set — do not infer from labels
                    </dd>
                  </div>
                  <div>
                    <dt className="label">Text boundary</dt>
                    <dd className="mt-1 text-text-soft">
                      first/last diary headings:{" "}
                      {boundary?.verificationStatus ?? "needs-source"}
                    </dd>
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
            );
          })}
        </div>
      </section>

      {/* Claims */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Bibliographic claims
        </h2>
        <p className="jp-heading mt-2 text-lg">書誌クレーム</p>
        <p className="mt-4 max-w-2xl text-sm text-text-faint">
          EditionRecord に直接入れた値だけでなく、根拠となる Claim
          を並列で保持する。
        </p>
        <ul className="mt-8 space-y-3">
          {bibliographicClaims.map((claim) => (
            <li key={claim.id} className="border border-border px-4 py-4">
              <div className="flex flex-wrap items-center gap-2">
                <Pill>{claim.claimType}</Pill>
                <VerificationStatusBadge status={claim.verificationStatus} />
                <Pill>{claim.reliability}</Pill>
              </div>
              <p className="mt-2 text-sm text-text-soft">{claim.claimValue}</p>
              {claim.notes && (
                <p className="mt-2 text-xs text-text-faint">{claim.notes}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Sources registry */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Bibliographic sources
        </h2>
        <p className="jp-heading mt-2 text-lg">書誌情報源</p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {bibliographicSourcesCatalog.map((s) => (
            <li key={s.id} className="border border-border px-3 py-3 text-sm">
              <p className="text-text-soft">{s.label}</p>
              <p className="jp-serif mt-1 text-xs text-text-faint">
                {s.labelJa}
              </p>
              <p className="mt-2 text-[0.65rem] text-text-faint">
                {s.reliability}
              </p>
            </li>
          ))}
        </ul>
        <p className="label mt-8">Priority</p>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-text-soft">
          {sourcePriorityOrder.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-text-faint">
          書店情報だけで書誌を Verified にしない。
        </p>
        <div className="mt-8">
          <CategorizedSourceList sources={bibliographicSources} />
        </div>
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
          <Link
            href="/sources/shobunsha-furukawa-roppa-showa-diary-reprint"
            className="focus-ring inline-flex border border-border px-4 py-2 text-xs text-text-soft"
          >
            Shobunsha source
          </Link>
        </div>
      </section>

      {/* Access */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Access copies
        </h2>
        <p className="jp-heading mt-2 text-lg">閲覧可能な個体</p>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-sm text-text-soft">
          <p>
            正確な書誌が分かっても、本文を確認できなければ Entry
            は作れない。
          </p>
          <p>書誌上の存在と、研究上の利用可能性を分けて表示する。</p>
        </div>
        {roppaSourceCopies.length === 0 ? (
          <div className="mt-8 border border-border px-5 py-6">
            <p className="editorial text-xl text-text">
              No accessible copy has been registered.
            </p>
            <p className="jp-serif mt-2 text-sm text-text-faint">
              閲覧可能な個体は、まだ登録されていません。
            </p>
            <p className="mt-3 text-xs text-text-faint">
              Holding catalogues may exist. They are not treated as accessible
              SourceCopies until access method and status are checked.
            </p>
          </div>
        ) : (
          <ul className="mt-8 space-y-3">
            {roppaSourceCopies.map((copy) => (
              <li key={copy.id} className="border border-border px-4 py-3">
                {copy.id}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Page stability */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Can the page be cited reliably?
        </h2>
        <p className="jp-heading mt-2 text-lg">
          ページを安定して参照できるか
        </p>
        <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
          {[
            ["Strong", "印刷ページが安定"],
            ["Usable", "画像ページ等で位置を再確認可能"],
            ["Limited", "電子位置のみ"],
            ["Unsuitable", "表示位置が変動し、再確認困難"],
            ["Unknown", "未確認"],
          ].map(([en, ja]) => (
            <div key={en} className="border border-border px-4 py-3">
              <dt className="text-text-soft">{en}</dt>
              <dd className="jp-serif mt-1 text-xs text-text-faint">{ja}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm text-text-faint">
          Current registered edition pageReferenceStability:{" "}
          {roppaEditions[0]?.pageReferenceStability ?? "unknown"}
        </p>
      </section>

      {/* TOC / boundaries */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Volume boundaries and contents
        </h2>
        <p className="jp-heading mt-2 text-lg">篇の境界と収録内容</p>
        <p className="mt-4 text-sm text-text-faint">
          TOC records registered: {tocRecords.length}. Edition comparisons:{" "}
          {editionComparisons.length}.
        </p>
        <p className="mt-2 text-sm text-text-faint">
          目次に日付範囲が無い場合、本文から推測して Fact
          化しない。書誌上の収録期間と本文上の日付境界を分ける。
        </p>
      </section>

      {/* Suitability */}
      {suitability && (
        <section className="my-14 border-b border-border pb-14">
          <h2 className="editorial text-2xl text-text md:text-3xl">
            Entry suitability
          </h2>
          <p className="jp-heading mt-2 text-lg">Entry適合性</p>
          <p className="mt-4 text-sm text-text-soft">
            Overall: {suitability.suitability}
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {Object.entries(suitability.axes).map(([axis, value]) => (
              <li
                key={axis}
                className="flex items-center justify-between border border-border px-3 py-2 text-xs"
              >
                <span className="text-text-faint">{axis}</span>
                <span className="text-text-soft">{value}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-2 text-sm text-text-faint">
            {suitability.reasons.map((r) => (
              <li key={r}>· {r}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Base decision */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Which edition becomes the base text?
        </h2>
        <p className="jp-heading mt-2 text-lg">どの版を基準本文にするか</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="label">Hard requirements</p>
            <ul className="mt-3 space-y-2">
              {baseEditionHardRequirements.map((item) => (
                <li
                  key={item.id}
                  className="border border-border px-3 py-2 text-sm text-text-soft"
                >
                  {item.label}
                  <span className="jp-serif mt-1 block text-xs text-text-faint">
                    {item.labelJa}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">Preferred</p>
            <ul className="mt-3 space-y-2">
              {baseEditionPreferred.map((item) => (
                <li
                  key={item.id}
                  className="border border-border px-3 py-2 text-sm text-text-soft"
                >
                  {item.label}
                  <span className="jp-serif mt-1 block text-xs text-text-faint">
                    {item.labelJa}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {baseDecision && (
          <article className="mt-8 border border-border px-5 py-6">
            <p className="label">Base edition decision</p>
            <p className="editorial mt-3 text-2xl text-text">
              {baseDecision.decisionStatus}
            </p>
            <p className="mt-2 text-sm text-text-soft">
              Selected edition: {baseDecision.selectedEditionId ?? "None"}
            </p>
            <p className="label mt-6">Limitations</p>
            <ul className="mt-2 space-y-1 text-sm text-text-faint">
              {baseDecision.limitations?.map((l) => (
                <li key={l}>· {l}</li>
              ))}
            </ul>
            <p className="label mt-6">Unresolved issues</p>
            <ul className="mt-2 space-y-1 text-sm text-text-faint">
              {baseDecision.unresolvedIssues?.map((l) => (
                <li key={l}>· {l}</li>
              ))}
            </ul>
          </article>
        )}
      </section>

      {/* Name authority */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Roppa Furukawa / 古川ロッパ / 古川緑波
        </h2>
        <p className="jp-heading mt-2 text-lg">名称と典拠</p>
        <ul className="mt-6 space-y-3">
          {personNameRecords.map((n) => (
            <li
              key={`${n.name}-${n.nameType}`}
              className="border border-border px-4 py-3"
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm text-text-soft">{n.name}</p>
                <Pill>{n.nameType}</Pill>
                <VerificationStatusBadge status={n.verificationStatus} />
              </div>
              {n.notes && (
                <p className="mt-2 text-xs text-text-faint">{n.notes}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Rights */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Rights and quotation readiness
        </h2>
        <p className="jp-heading mt-2 text-lg">著作権と引用準備</p>
        <p className="mt-4 text-sm text-text-soft">
          Current rightsReadiness:{" "}
          {roppaEditions[0]?.rightsReadiness ?? "unknown"}
        </p>
        <ul className="mt-6 space-y-2 text-sm text-text-faint">
          {rightsPrinciples.map((p) => (
            <li key={p}>· {p}</li>
          ))}
        </ul>
      </section>

      {/* Conflicts */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Conflicts and ambiguities
        </h2>
        <p className="jp-heading mt-2 text-lg">書誌間の矛盾と曖昧さ</p>
        <ul className="mt-6 space-y-4">
          {bibliographicConflicts.map((c) => (
            <li key={c.id} className="border border-border px-4 py-4">
              <div className="flex flex-wrap items-center gap-2">
                <Pill>{c.topic}</Pill>
                <StageBadge status={c.resolutionStatus} />
              </div>
              <ul className="mt-3 space-y-1 text-sm text-text-soft">
                {c.sourcePositions.map((pos) => (
                  <li key={pos}>· {pos}</li>
                ))}
              </ul>
              {c.notes && (
                <p className="mt-3 text-xs text-text-faint">{c.notes}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Acquisition queue */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Source acquisition queue
        </h2>
        <p className="jp-heading mt-2 text-lg">資料取得キュー</p>
        <ul className="mt-6 space-y-3">
          {acquisitionTasks.map((task) => (
            <li
              key={task.id}
              className="flex flex-wrap items-start gap-3 border border-border px-4 py-3"
            >
              <span className="label">P{task.priority}</span>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-text-soft">{task.taskType}</p>
                {task.expectedResult && (
                  <p className="mt-1 text-xs text-text-faint">
                    {task.expectedResult}
                  </p>
                )}
                {task.targetSource && (
                  <p className="mt-1 text-xs text-text-faint">
                    {task.targetSource}
                  </p>
                )}
              </div>
              <StageBadge status={task.status} />
            </li>
          ))}
        </ul>
      </section>

      {/* Recommended order */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Recommended research order
        </h2>
        <p className="jp-heading mt-2 text-lg">推奨調査順</p>
        <ol className="mt-6 space-y-2">
          {recommendedResearchOrder.map((item) => (
            <li
              key={item.priority}
              className="border border-border px-4 py-3 text-sm"
            >
              <span className="label">Priority {item.priority}</span>
              <p className="mt-1 text-text-soft">{item.labelEn}</p>
              <p className="jp-serif mt-1 text-xs text-text-faint">
                {item.label}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA to first entry */}
      <section className="my-14 border border-text px-5 py-8 md:px-8">
        <p className="label">Connection to first entry research</p>
        <h2 className="editorial mt-3 text-2xl text-text md:text-3xl">
          Use the verified edition to select the first day
        </h2>
        <p className="jp-heading mt-2 text-lg">
          確認した底本から、最初の一日を選ぶ
        </p>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-sm text-text-soft">
          <p>
            The bibliography workspace determines which edition can be cited.
          </p>
          <p>
            The entry workspace determines which day should be indexed.
          </p>
          <p className="jp-serif text-text-faint">
            書誌Workspaceでは、どの版を参照できるかを決める。Entry
            Workspaceでは、どの一日を索引化するかを決める。
          </p>
        </div>
        <p className="mt-6 text-sm text-text-soft">
          Status:{" "}
          {status.baseEditionsSelected > 0
            ? "Ready for candidate research"
            : "Blocked by bibliography"}
        </p>
        <p className="jp-serif mt-1 text-xs text-text-faint">
          {status.baseEditionsSelected > 0
            ? "候補日調査へ進める状態"
            : "底本未確定のため候補日選定は保留"}
        </p>
        <Link
          href={FIRST_ENTRY_RESEARCH_URL}
          className="focus-ring mt-6 inline-flex border border-text bg-text px-4 py-2 text-xs text-bg"
        >
          Open first-entry research workspace
        </Link>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Related research tracks
        </h2>
        <WriterResearchQueue items={relatedResearchTracks} />
        {publicResearchNotes.length > 0 && (
          <div className="mt-8">
            <p className="label">Public research notes</p>
            <ul className="mt-3 space-y-2 text-sm text-text-faint">
              {publicResearchNotes.map((n) => (
                <li key={n.id}>· {n.note}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="my-14 border-b border-border pb-14">
        <FactObservationInterpretationBlock
          fact="『古川ロッパ昭和日記』は書誌上、複数巻（戦前篇・戦中篇・戦後篇・晩年篇）として現れ、出版社表示は晶文社である。CiNii Books NCID BN01451714 が作業用のカタログ標識として参照されている。版次・ISBN・頁体系・閲覧個体・基準版は未確定。"
          observation="カタログ上の存在は、Entry に使える基準本文の確定と同義ではない。収録期間ラベルと本文日付見出しも、まだ同一レイヤーではない。"
          interpretation="最初の一日を索引化する前に、版・個体・ページ参照の再現可能性を先に閉じることで、後続の Performance / Food / Body 接続の誤りを減らせる。"
        />
      </section>

      <section className="my-14">
        <h2 className="editorial text-2xl text-text">Related pages</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {relatedPages.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="focus-ring block border border-border px-4 py-4 hover:border-text-soft"
              >
                <p className="label">{page.group}</p>
                <p className="mt-2 text-sm text-text-soft">{page.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
