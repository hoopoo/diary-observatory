import Link from "next/link";
import type { ReactNode } from "react";
import { ConceptQuote } from "@/components/observations/ConceptQuote";
import { FactObservationInterpretationBlock } from "@/components/observations/FactObservationInterpretationBlock";
import { VerificationStatusBadge } from "@/components/research/VerificationStatusBadge";
import {
  getAcquisitionTasksForEdition,
  getBibliographicClaimsForEdition,
  getComparisonsForEdition,
  getConflictsForEdition,
  getEditionContext,
  getEditionReadiness,
  getEditionSuitabilityAssessment,
  getEditionVerificationSummary,
  getEntriesByEdition,
  getEntryCandidatesByEdition,
  getFactClaimsByEdition,
  getPersonNamesForEdition,
  getResearchLogsForEdition,
  getSourceCapturesByEdition,
  getSourceCopiesForEdition,
  getVolumeBoundariesForEdition,
  getVolumesForEdition,
  isEditionBaseReady,
} from "@/lib/editions";
import { getSourcesByEditionId } from "@/lib/sources";
import type { EditionRecord } from "@/lib/types";

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="border border-border px-2 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
      {children}
    </span>
  );
}

const ARCHITECTURE = [
  { label: "Work", labelJa: "作品" },
  { label: "Volume", labelJa: "篇・巻" },
  { label: "Edition", labelJa: "版" },
  { label: "Source copy", labelJa: "確認した個体" },
  { label: "Page reference", labelJa: "ページ" },
  { label: "Source capture", labelJa: "根拠断片" },
  { label: "Fact claim", labelJa: "事実" },
  { label: "Entry", labelJa: "一日" },
];

const SOURCE_HIERARCHY = [
  "Physical title page / 現物の標題紙",
  "Physical colophon / 現物の奥付",
  "Authoritative national bibliography / 国立図書館等",
  "Official publisher record / 出版社公式",
  "Institutional library catalogue / 大学・公共図書館",
  "Scholarly bibliography / 学術書誌",
  "Commercial listing / 書店・古書情報",
  "Unverified secondary mention / 未確認二次情報",
];

const RIGHTS_PRINCIPLES = [
  "要約を優先",
  "引用は必要最小限",
  "版とページを必ず表示",
  "本文ページ画像を無断掲載しない",
  "注釈を大量転載しない",
  "電子サービスの利用規約も確認する",
];

const BASE_STATUS_LABEL: Record<string, { en: string; ja: string }> = {
  selected: { en: "Selected base edition", ja: "正式選定" },
  provisional: { en: "Provisional base edition", ja: "暫定選定" },
  alternative: { en: "Alternative edition", ja: "代替版" },
  comparison: { en: "Comparison edition", ja: "比較用" },
  rejected: { en: "Rejected as base", ja: "基準版として不採用" },
  "under-review": { en: "Under review", ja: "検討中" },
  "not-evaluated": { en: "Not evaluated", ja: "未評価" },
};

function identityValue(
  value: string | number | null | undefined,
  fallback = "Source needed",
) {
  if (value === null || value === undefined || value === "") return fallback;
  return String(value);
}

export function EditionObservatory({ edition }: { edition: EditionRecord }) {
  const { work, writers } = getEditionContext(edition);
  const writer = writers[0];
  const volumes = getVolumesForEdition(edition);
  const claims = getBibliographicClaimsForEdition(edition.id);
  const copies = getSourceCopiesForEdition(edition.id);
  const boundaries = getVolumeBoundariesForEdition(edition.id);
  const conflicts = getConflictsForEdition(edition.id);
  const tasks = getAcquisitionTasksForEdition(edition.id);
  const logs = getResearchLogsForEdition(edition.id);
  const comparisons = getComparisonsForEdition(edition.id);
  const readiness = getEditionReadiness(edition.id);
  const verification = getEditionVerificationSummary(edition.id);
  const suitability = getEditionSuitabilityAssessment(edition.id);
  const names = getPersonNamesForEdition(edition);
  const factClaims = getFactClaimsByEdition(edition.id);
  const entries = getEntriesByEdition(edition.id);
  const candidates = getEntryCandidatesByEdition(edition.id);
  const captures = getSourceCapturesByEdition(edition.id);
  const baseReady = isEditionBaseReady(edition.id);
  const baseLabel =
    BASE_STATUS_LABEL[edition.baseEditionStatus ?? "not-evaluated"];
  const linkedSources = getSourcesByEditionId(edition.id);

  const displayTitle = edition.titleJa ?? edition.title;

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
            <Link href="/editions" className="focus-ring hover:text-text-soft">
              Editions
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-text-soft" aria-current="page">
            {displayTitle}
          </li>
        </ol>
      </nav>

      <header className="mt-8 border-b border-border pb-12">
        <p className="label">Edition observatory</p>
        <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
          {edition.title}
        </h1>
        {edition.titleJa && (
          <p className="jp-heading mt-3 text-2xl md:text-3xl">
            {edition.titleJa}
          </p>
        )}
        <p className="mt-4 text-sm text-text-soft">
          This is the text behind the page reference.
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          ページ番号の背後にある、実際の本文。
        </p>

        <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem] text-text-soft">
          <p>
            Diary Observatoryで表示される日付、ページ、引用、要約は、抽象的な作品名だけに依存していない。
          </p>
          <p>
            どの出版社の、どの版の、どの篇の、どのページを確認したのか。
          </p>
          <p>このページは、Entryを支える本文の単位を記録する。</p>
        </div>

        <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="label">Original work</dt>
            <dd className="mt-1 text-text-soft">
              {work ? (
                <Link
                  href={`/diaries/${work.slug}`}
                  className="focus-ring underline-offset-4 hover:underline"
                >
                  {work.titleOriginal ?? work.title}
                </Link>
              ) : (
                edition.workId
              )}
            </dd>
          </div>
          <div>
            <dt className="label">Writer</dt>
            <dd className="mt-1 text-text-soft">
              {writer ? (
                <Link
                  href={`/writers/${writer.slug}`}
                  className="focus-ring underline-offset-4 hover:underline"
                >
                  {writer.name} / {writer.nameJa}
                </Link>
              ) : (
                "—"
              )}
            </dd>
          </div>
          <div>
            <dt className="label">Volume</dt>
            <dd className="mt-1 text-text-soft">
              {volumes.length
                ? volumes.map((v) => v.titleJa).join(" · ")
                : "Not attached / source needed"}
            </dd>
          </div>
          <div>
            <dt className="label">Publisher</dt>
            <dd className="mt-1 text-text-soft">
              {identityValue(edition.publisher)}
            </dd>
          </div>
          <div>
            <dt className="label">Publication date</dt>
            <dd className="mt-1 text-text-soft">
              {identityValue(
                edition.publicationDate ?? edition.publicationYear,
              )}
            </dd>
          </div>
          <div>
            <dt className="label">Edition label</dt>
            <dd className="mt-1 text-text-soft">
              {identityValue(edition.editionLabel ?? edition.editionType)}
            </dd>
          </div>
          <div>
            <dt className="label">Format</dt>
            <dd className="mt-1 text-text-soft">
              {[edition.physicalFormat, edition.digitalFormat]
                .filter((v) => v && v !== "unknown")
                .join(" · ") || "Unknown"}
            </dd>
          </div>
          {edition.isbn && (
            <div>
              <dt className="label">ISBN</dt>
              <dd className="mt-1 text-text-soft">{edition.isbn}</dd>
            </div>
          )}
          <div>
            <dt className="label">Verification</dt>
            <dd className="mt-1">
              <VerificationStatusBadge status={edition.verificationStatus} />
            </dd>
          </div>
          <div>
            <dt className="label">Entry suitability</dt>
            <dd className="mt-1 text-text-soft">
              {edition.entrySuitability ?? "unknown"}
            </dd>
          </div>
          <div>
            <dt className="label">Rights readiness</dt>
            <dd className="mt-1 text-text-soft">
              {edition.rightsReadiness ?? "unknown"}
            </dd>
          </div>
        </dl>
      </header>

      <section className="my-14 border-b border-border pb-14">
        <ConceptQuote
          en={"A work title does not identify a text.\n\nAn edition does."}
          ja={
            "作品名だけでは、\n読んだ本文を特定できない。\n\n本文を特定するのは、版である。"
          }
        />
      </section>

      {/* Architecture */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Work / Volume / Edition / Copy
        </h2>
        <ol className="mt-8 space-y-2">
          {ARCHITECTURE.map((item, i) => (
            <li
              key={item.label}
              className="flex items-center gap-3 border border-border px-4 py-3"
            >
              <span className="label w-6">{i + 1}</span>
              <span className="editorial text-text">{item.label}</span>
              <span className="jp-serif text-sm text-text-faint">
                {item.labelJa}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-2xl text-sm text-text-faint">
          Workは概念的な作品単位。Volumeは篇・巻・収録範囲。Editionは出版社と刊行形態を持つ本文単位。SourceCopyは実際に閲覧した現物・電子個体。これらを混同しない。
        </p>
      </section>

      {/* Verification summary */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Edition verification summary
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {verification.map((item) => (
            <li key={item.id} className="border border-border px-4 py-4">
              <p className="label">{item.label}</p>
              <p className="jp-serif mt-1 text-xs text-text-faint">
                {item.labelJa}
              </p>
              <div className="mt-3">
                <VerificationStatusBadge status={item.status} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Identity */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Edition identity
        </h2>
        <p className="jp-heading mt-2 text-lg">版の識別情報</p>
        <dl className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
          {[
            ["Work title", work?.titleOriginal ?? work?.title ?? edition.workId],
            ["Edition title", edition.titleJa ?? edition.title],
            [
              "Volume title",
              volumes.map((v) => v.titleJa).join(" · ") || "—",
            ],
            [
              "Author display name",
              writer ? `${writer.name} / ${writer.nameJa}` : "—",
            ],
            [
              "Author name as printed",
              edition.printedAuthorName ?? "Source needed",
            ],
            ["Publisher", identityValue(edition.publisher)],
            [
              "Publication date",
              identityValue(
                edition.publicationDate ?? edition.publicationYear,
              ),
            ],
            ["Edition statement", identityValue(edition.editionLabel)],
            ["ISBN", edition.isbn ?? "Not registered"],
            ["Language", identityValue(edition.language, "Unknown")],
            ["Script style", identityValue(edition.scriptStyle, "Unknown")],
            [
              "Physical format",
              identityValue(edition.physicalFormat, "Unknown"),
            ],
            [
              "Digital format",
              identityValue(edition.digitalFormat, "Unknown"),
            ],
            [
              "Total pages",
              edition.totalPages != null
                ? String(edition.totalPages)
                : "Source needed",
            ],
            [
              "Pagination type",
              identityValue(edition.paginationType, "Unknown"),
            ],
          ].map(([label, value]) => (
            <div key={label} className="border border-border px-4 py-3">
              <dt className="label">{label}</dt>
              <dd className="mt-2 text-text-soft">{value}</dd>
              <dd className="mt-2">
                <VerificationStatusBadge status={edition.verificationStatus} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Claims */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Bibliographic claims
        </h2>
        <p className="jp-heading mt-2 text-lg">書誌上の主張</p>
        {claims.length === 0 ? (
          <p className="mt-6 text-sm text-text-faint">
            No bibliographic claims registered for this edition yet.
          </p>
        ) : (
          <ul className="mt-8 space-y-3">
            {claims.map((claim) => (
              <li key={claim.id} className="border border-border px-4 py-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Pill>{claim.claimType}</Pill>
                  <VerificationStatusBadge status={claim.verificationStatus} />
                  <Pill>{claim.reliability}</Pill>
                  {claim.conflictIds?.length ? (
                    <Pill>conflict</Pill>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-text-soft">{claim.claimValue}</p>
                {claim.normalizedValue && (
                  <p className="mt-1 text-xs text-text-faint">
                    Normalized: {claim.normalizedValue}
                  </p>
                )}
                {claim.sourceLocation && (
                  <p className="mt-1 text-xs text-text-faint">
                    Location: {claim.sourceLocation}
                  </p>
                )}
                {claim.notes && (
                  <p className="mt-2 text-xs text-text-faint">{claim.notes}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Source hierarchy */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          How was this edition verified?
        </h2>
        <p className="jp-heading mt-2 text-lg">
          この版は、どの資料で確認されたか
        </p>
        <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm text-text-soft">
          {SOURCE_HIERARCHY.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-text-faint">
          Commercial listingだけでは Verified にしない。
        </p>
      </section>

      {/* Volumes */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          What does this edition contain?
        </h2>
        <p className="jp-heading mt-2 text-lg">この版は、何を収録しているか</p>
        {volumes.length === 0 ? (
          <p className="mt-6 text-sm text-text-faint">
            Covered period not verified / no volume attached.
          </p>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {volumes.map((vol) => (
              <article key={vol.id} className="border border-border px-5 py-5">
                <p className="label">{vol.volumeType}</p>
                <h3 className="editorial mt-2 text-xl text-text">
                  {vol.titleJa}
                </h3>
                <dl className="mt-4 space-y-2 text-xs text-text-faint">
                  <div>
                    <dt className="label">Covered period</dt>
                    <dd className="mt-1 text-text-soft">
                      {vol.coverageLabelJa ?? "Covered period not verified"}
                    </dd>
                  </div>
                  <div>
                    <dt className="label">ISO dates</dt>
                    <dd className="mt-1 text-text-soft">
                      {vol.coveredStartDate && vol.coveredEndDate
                        ? `${vol.coveredStartDate} – ${vol.coveredEndDate}`
                        : "Covered period not verified"}
                    </dd>
                  </div>
                  <div>
                    <dt className="label">Date precision</dt>
                    <dd className="mt-1 text-text-soft">
                      {vol.coveredDatePrecision ?? "unknown"}
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
            ))}
          </div>
        )}
      </section>

      {/* Text boundary */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Where does the diary text begin and end?
        </h2>
        <p className="jp-heading mt-2 text-lg">
          日記本文は、どこからどこまでか
        </p>
        {boundaries.length === 0 ? (
          <p className="mt-6 text-sm text-text-faint">
            Text boundaries not checked.
          </p>
        ) : (
          <ul className="mt-6 space-y-3">
            {boundaries.map((b) => (
              <li
                key={`${b.volumeId}-${b.editionId}`}
                className="border border-border px-4 py-4 text-sm"
              >
                <p className="text-text-soft">Volume: {b.volumeId}</p>
                <p className="mt-2 text-xs text-text-faint">
                  First / last diary dates:{" "}
                  {b.verificationStatus === "verified" && b.firstDiaryDate
                    ? `${b.firstDiaryDate} – ${b.lastDiaryDate}`
                    : "Only show concrete dates when verified"}
                </p>
                <div className="mt-2">
                  <VerificationStatusBadge status={b.verificationStatus} />
                </div>
                {b.notes && (
                  <p className="mt-2 text-xs text-text-faint">{b.notes}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Pagination */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Can the page be cited?
        </h2>
        <p className="jp-heading mt-2 text-lg">ページを参照できるか</p>
        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="border border-border px-4 py-3">
            <dt className="label">Pagination type</dt>
            <dd className="mt-2 text-text-soft">
              {edition.paginationType ?? "unknown"}
            </dd>
          </div>
          <div className="border border-border px-4 py-3">
            <dt className="label">Stability</dt>
            <dd className="mt-2 text-text-soft">
              {edition.pageReferenceStability ?? "unknown"}
            </dd>
          </div>
        </dl>
        <p className="mt-6 max-w-2xl text-sm text-text-faint">
          Entryでページを使用するには、第三者が同じ位置へ到達できる必要がある。電子版の位置番号を、紙版ページとして扱わない。
        </p>
      </section>

      {/* Source copies */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Copies examined or located
        </h2>
        <p className="jp-heading mt-2 text-lg">確認・所在把握した個体</p>
        {copies.length === 0 ? (
          <p className="mt-6 text-sm text-text-faint">
            No SourceCopy registered. Catalogue presence is not treated as
            examined access.
          </p>
        ) : (
          <ul className="mt-6 space-y-3">
            {copies.map((copy) => (
              <li key={copy.id} className="border border-border px-4 py-4">
                <Pill>{copy.copyType}</Pill>
                <p className="mt-2 text-sm text-text-soft">
                  {copy.accessMethod} · {copy.accessStatus}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Suitability */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Can this edition support an Entry?
        </h2>
        <p className="jp-heading mt-2 text-lg">
          この版は、Entryの根拠に使えるか
        </p>
        <p className="mt-4 text-sm text-text-soft">
          Overall: {edition.entrySuitability ?? "unknown"}
        </p>
        {suitability ? (
          <>
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
          </>
        ) : (
          <p className="mt-4 text-sm text-text-faint">
            Suitability axes not reviewed for this edition.
          </p>
        )}
      </section>

      {/* Base edition */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Is this the base edition?
        </h2>
        <p className="jp-heading mt-2 text-lg">この版を基準本文にするか</p>
        <p className="editorial mt-4 text-2xl text-text">{baseLabel.en}</p>
        <p className="jp-serif mt-1 text-sm text-text-faint">{baseLabel.ja}</p>
        <p className="mt-4 text-sm text-text-faint">
          Base readiness: {baseReady ? "Ready" : "Not ready"}
        </p>
      </section>

      {/* Limitations */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Known limitations
        </h2>
        <p className="jp-heading mt-2 text-lg">確認されている制約</p>
        {edition.limitations?.length ? (
          <ul className="mt-6 space-y-2 text-sm text-text-faint">
            {edition.limitations.map((l) => (
              <li key={l}>· {l}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-sm text-text-faint">
            No confirmed limitations registered (unknown remains unknown).
          </p>
        )}
      </section>

      {/* Rights */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Text use policy
        </h2>
        <p className="jp-heading mt-2 text-lg">本文利用方針</p>
        <dl className="mt-6 grid gap-3 sm:grid-cols-2 text-sm">
          <div className="border border-border px-4 py-3">
            <dt className="label">Rights status</dt>
            <dd className="mt-2 text-text-soft">
              {edition.rightsStatus ?? "Unknown"}
            </dd>
          </div>
          <div className="border border-border px-4 py-3">
            <dt className="label">Quotation readiness</dt>
            <dd className="mt-2 text-text-soft">
              {edition.rightsReadiness ?? "unknown"}
            </dd>
          </div>
        </dl>
        <ul className="mt-6 space-y-2 text-sm text-text-faint">
          {RIGHTS_PRINCIPLES.map((p) => (
            <li key={p}>· {p}</li>
          ))}
        </ul>
      </section>

      {/* Dependencies */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Entries supported by this edition
        </h2>
        <p className="jp-heading mt-2 text-lg">この版に依存するEntry</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm">
          {[
            ["Published Entries", entries.length],
            ["Entry Candidates", candidates.length],
            ["Source Captures", captures.length],
            ["Fact Claims", factClaims.length],
          ].map(([label, count]) => (
            <li key={label as string} className="border border-border px-4 py-3">
              <p className="label">{label}</p>
              <p className="editorial mt-2 text-2xl text-text">{count}</p>
            </li>
          ))}
        </ul>
        {entries.length === 0 && (
          <p className="mt-6 text-sm text-text-faint">
            No Entry currently depends on this edition.
            <span className="jp-serif mt-1 block">
              この版を根拠とするEntryは、まだ登録されていません。
            </span>
          </p>
        )}
      </section>

      {/* Fact dependency */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Which facts depend on this edition?
        </h2>
        <p className="jp-heading mt-2 text-lg">
          どの事実が、この版に依存しているか
        </p>
        {factClaims.length === 0 ? (
          <p className="mt-6 text-sm text-text-faint">
            No FactClaim currently depends on this edition.
          </p>
        ) : (
          <ul className="mt-6 space-y-2">
            {factClaims.map((f) => (
              <li key={f.id} className="border border-border px-4 py-3 text-sm">
                {f.claim}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Comparison */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Compare with another edition
        </h2>
        <p className="jp-heading mt-2 text-lg">他版との比較</p>
        <p className="mt-4 text-sm text-text-faint">
          Text difference status:{" "}
          {comparisons.length ? "Bibliographic comparison only" : "Not compared"}
        </p>
        {comparisons.length === 0 && (
          <p className="mt-2 text-sm text-text-faint">
            「同じ作品だから同じ本文」と扱わない。未比較は Unknown。
          </p>
        )}
      </section>

      {/* Conflicts */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Bibliographic conflicts
        </h2>
        <p className="jp-heading mt-2 text-lg">書誌上の矛盾</p>
        {conflicts.length === 0 ? (
          <p className="mt-6 text-sm text-text-faint">
            No conflicts registered for this edition.
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
                  {c.sourcePositions.map((p) => (
                    <li key={p}>· {p}</li>
                  ))}
                </ul>
                {c.notes && (
                  <p className="mt-2 text-xs text-text-faint">{c.notes}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Name authority */}
      {names.length > 0 && (
        <section className="my-14 border-b border-border pb-14">
          <h2 className="editorial text-2xl text-text md:text-3xl">
            Name authority
          </h2>
          <ul className="mt-6 space-y-3">
            {names.map((n) => (
              <li
                key={`${n.name}-${n.nameType}`}
                className="border border-border px-4 py-3"
              >
                <div className="flex flex-wrap gap-2">
                  <p className="text-sm text-text-soft">{n.name}</p>
                  <Pill>{n.nameType}</Pill>
                </div>
                {n.notes && (
                  <p className="mt-2 text-xs text-text-faint">{n.notes}</p>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-text-faint">
            Edition上の表記を、Writerの表示名へ勝手に置換しない。
          </p>
        </section>
      )}

      {/* Research history */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Research history
        </h2>
        <p className="jp-heading mt-2 text-lg">調査履歴</p>
        {logs.length === 0 ? (
          <p className="mt-6 text-sm text-text-faint">
            No research log entries registered (do not invent history).
          </p>
        ) : (
          <ul className="mt-6 space-y-2">
            {logs.map((log) => (
              <li key={log.id} className="border border-border px-4 py-3 text-sm">
                {log.date} · {log.action}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Acquisition */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Remaining acquisition tasks
        </h2>
        <p className="jp-heading mt-2 text-lg">残っている資料取得タスク</p>
        {tasks.length === 0 ? (
          <p className="mt-6 text-sm text-text-faint">
            No acquisition tasks linked to this edition.
          </p>
        ) : (
          <ul className="mt-6 space-y-3">
            {tasks.map((task) => (
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
                </div>
                <Pill>{task.status}</Pill>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Readiness */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Research readiness
        </h2>
        <p className="jp-heading mt-2 text-lg">調査準備状況</p>
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

      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Primary sources and bibliography
        </h2>
        <p className="jp-heading mt-2 text-lg">書誌根拠・資料</p>
        {linkedSources.length === 0 ? (
          <p className="mt-6 text-sm text-text-faint">
            No public Source Observatory records linked yet.
          </p>
        ) : (
          <ul className="mt-6 space-y-3">
            {linkedSources.map((s) => (
              <li key={s.id} className="border border-border px-4 py-4">
                <p className="text-sm text-text-soft">
                  {s.titleJa ?? s.title ?? s.label}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {s.kind && <Pill>{s.kind}</Pill>}
                  {s.sourceLevel && <Pill>{s.sourceLevel}</Pill>}
                </div>
                {s.slug && (
                  <Link
                    href={`/sources/${s.slug}`}
                    className="focus-ring mt-3 inline-flex border border-text bg-text px-3 py-1.5 text-[0.65rem] text-bg"
                  >
                    View source
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
        <Link
          href="/sources"
          className="focus-ring mt-6 inline-flex text-xs text-text-soft underline-offset-4 hover:underline"
        >
          Browse Source Observatory
        </Link>
      </section>

      <section className="my-14 border-b border-border pb-14">
        <FactObservationInterpretationBlock
          fact={`${displayTitle} is registered as an EditionRecord linked to work ${edition.workId}. Verification status: ${edition.verificationStatus}.`}
          observation="A registered EditionRecord is not automatically a verified base text. Pagination, copy access, and rights remain separable checks."
          interpretation="Keeping edition identity separate from the work title prevents page citations from drifting when imprints differ."
        />
      </section>

      <section className="my-14 flex flex-wrap gap-3">
        {work && (
          <Link
            href={`/diaries/${work.slug}`}
            className="focus-ring inline-flex border border-border px-4 py-2 text-xs text-text-soft"
          >
            Open diary work
          </Link>
        )}
        {edition.workId === "diary-furukawa-roppa-showa" && (
          <>
            <Link
              href="/research/furukawa-roppa-bibliography"
              className="focus-ring inline-flex border border-border px-4 py-2 text-xs text-text-soft"
            >
              Open bibliographic research
            </Link>
            <Link
              href="/research/furukawa-roppa-first-entry"
              className="focus-ring inline-flex border border-text bg-text px-4 py-2 text-xs text-bg"
            >
              Open first-entry research
            </Link>
          </>
        )}
      </section>
    </div>
  );
}
