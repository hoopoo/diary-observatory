import Link from "next/link";
import type { ReactNode } from "react";
import { ProvenanceBadge } from "@/components/provenance/ProvenanceBadge";
import {
  actorRoles,
  audienceTransformationSteps,
  audienceTypes,
  authorshipQuestions,
  authorshipSpectrum,
  deletionPath,
  diaryDimensions,
  diaryFeedbackSteps,
  diaryFormMatrixConceptual,
  diaryOrder,
  diarySpectrum,
  diaryWorkingDefinition,
  feedOrder,
  futureArchiveGaps,
  getSnsDiaryCaseStudies,
  getSnsDiaryRepositoryFacts,
  matrixRows,
  qualificationStatuses,
  recordActors,
  snsFeedbackSteps,
  socialDiaryProvenancePath,
} from "@/data/observations/is-social-media-a-diary";
import type { ProvenanceCompleteness } from "@/lib/types";

function Flow({ steps }: { steps: readonly string[] }) {
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

function EmptyNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 border border-dashed border-border px-3 py-3 text-xs text-text-faint">
      {children}
    </p>
  );
}

export function DiaryDefinitionDimensions() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Diary Dimensions</p>
      <p className="jp-heading mt-2 text-lg">日記を複数軸で見る</p>
      <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
        {diaryDimensions.map((d) => (
          <li key={d.id} className="border border-dashed border-border px-3 py-2">
            <span className="text-text-soft">{d.label}</span>
            <span className="jp-serif ml-2 text-text-faint">{d.labelJa}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-accent">
        low / medium / high / mixed / unknown · 価値スコアではない
      </p>
    </section>
  );
}

export function DiaryFormProfilePanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">DiaryFormProfile</p>
      <p className="jp-heading mt-2 text-lg">記録形式プロファイル</p>
      <EmptyNote>DiaryFormProfile instances: 0</EmptyNote>
    </section>
  );
}

export function ImpliedAudiencePanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">ImpliedAudienceProfile</p>
      <p className="jp-heading mt-2 text-lg">想定読者（根拠がある場合のみ）</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
        {audienceTypes.map((t) => (
          <li key={t} className="border border-border px-2 py-1">
            {t}
          </li>
        ))}
      </ul>
      <EmptyNote>
        明示根拠がない場合は Unknown。個別投稿の想定読者を推測しない。
      </EmptyNote>
    </section>
  );
}

export function AudienceTransformation() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Audience Transformation</p>
      <p className="jp-heading mt-2 text-lg">公開性は時間とともに変わりうる</p>
      <Flow steps={audienceTransformationSteps} />
      <EmptyNote>AudienceTransformationRecord instances: 0</EmptyNote>
    </section>
  );
}

export function AudienceFeedbackLoop() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">The record receives feedback</p>
      <p className="jp-heading mt-2 text-lg">記録そのものが反応を受ける</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <p className="label">Diary</p>
          <Flow steps={diaryFeedbackSteps} />
        </div>
        <div>
          <p className="label">SNS</p>
          <Flow steps={snsFeedbackSteps} />
        </div>
      </div>
      <EmptyNote>
        FeedbackLoopRecord instances: 0. Like数から心理を推測しない。
      </EmptyNote>
    </section>
  );
}

export function ChronologyVisibilitySplit() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Chronology / Visibility</p>
      <p className="jp-heading mt-2 text-lg">書いた順序と見える順序</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
        {[
          "chronological",
          "recommended",
          "resurfaced",
          "trending",
          "reposted",
          "search-discovered",
          "algorithmic-unknown",
          "unknown",
        ].map((t) => (
          <li key={t} className="border border-border px-2 py-1">
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-accent">
        プラットフォーム内部アルゴリズムを推測で説明しない。
      </p>
    </section>
  );
}

export function DiaryFeedOrderComparison() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Diary order vs Feed order</p>
      <p className="jp-heading mt-2 text-lg">日記帳とフィード</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <p className="label">Diary</p>
          <Flow steps={diaryOrder} />
        </div>
        <div>
          <p className="label">Feed</p>
          <Flow steps={feedOrder} />
        </div>
      </div>
    </section>
  );
}

export function DeletionRecordPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">SocialDeletionRecord</p>
      <p className="jp-heading mt-2 text-lg">削除できる日記</p>
      <Flow steps={deletionPath} />
      <EmptyNote>
        DeletionReasonは本人やPlatformが明示した場合のみ。心理推測しない。
      </EmptyNote>
    </section>
  );
}

export function EditedMemoryPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Edited memory</p>
      <p className="jp-heading mt-2 text-lg">編集できる過去</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
        {[
          "Posted at",
          "Edited at",
          "Version known",
          "Original preserved",
          "Unknown",
        ].map((s) => (
          <li key={s} className="border border-border px-2 py-1">
            {s}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-accent">
        SourceVersionRecord を再利用。編集前本文を資料なしに復元しない。
      </p>
    </section>
  );
}

export function PhotoDiaryPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">PhotoDiaryRecord</p>
      <p className="jp-heading mt-2 text-lg">写真が生活を代替するとき</p>
      <ul className="mt-4 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {[
          "capturedAt",
          "postedAt",
          "captionAvailable",
          "metadataAvailable",
          "contextAvailable",
        ].map((k) => (
          <li key={k} className="border border-dashed border-border px-3 py-2">
            {k}
          </li>
        ))}
      </ul>
      <EmptyNote>PhotoDiaryRecord instances: 0</EmptyNote>
    </section>
  );
}

export function EphemeralRecordPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">EphemeralRecordProfile</p>
      <p className="jp-heading mt-2 text-lg">消えることを前提にした記録</p>
      <EmptyNote>
        intendedLifetimeはPlatform仕様が確認できる場合のみ。仕様を確認なしにFact化しない。
      </EmptyNote>
    </section>
  );
}

export function LiveRecordPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">LiveRecordProfile</p>
      <p className="jp-heading mt-2 text-lg">現在形の記録</p>
      <div className="mt-4 space-y-2 text-sm text-text-soft">
        <p>Event ↔ Live record ↔ Audience</p>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
        {[
          "live",
          "archived-live",
          "edited-replay",
          "excerpt-only",
          "unavailable",
          "unknown",
        ].map((s) => (
          <li key={s} className="border border-border px-2 py-1">
            {s}
          </li>
        ))}
      </ul>
      <EmptyNote>Live配信を無編集記録と扱わない。</EmptyNote>
    </section>
  );
}

export function RecordActorNetwork() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Record Actor Network</p>
      <p className="jp-heading mt-2 text-lg">誰が記録を形づくるか</p>
      <ul className="mt-4 grid gap-2 text-sm text-text-soft sm:grid-cols-2">
        {recordActors.map((a) => (
          <li key={a} className="border border-border px-3 py-2">
            {a}
          </li>
        ))}
      </ul>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
        {actorRoles.map((r) => (
          <li key={r} className="border border-border px-2 py-1">
            {r}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CommercialSelfRecordPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">CommercialSelfRecord</p>
      <p className="jp-heading mt-2 text-lg">日記と広告の境界</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
        {[
          "non-commercial-confirmed",
          "sponsored",
          "affiliate",
          "self-promotion",
          "business-account-content",
          "mixed",
          "unknown",
        ].map((s) => (
          <li key={s} className="border border-border px-2 py-1">
            {s}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-accent">
        unknownを積極的に使う。商業関係を推測しない。二択にしない。
      </p>
    </section>
  );
}

export function AIAssistedDiarySpectrum() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Authorship spectrum</p>
      <p className="jp-heading mt-2 text-lg">AIが書く自己記録</p>
      <Flow steps={authorshipSpectrum} />
      <ul className="mt-6 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {authorshipQuestions.map((q) => (
          <li key={q} className="border border-dashed border-border px-3 py-2">
            {q}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-accent">
        「本物／偽物」の二択にしない。AI利用を見た目から推測しない。
      </p>
    </section>
  );
}

export function RecordAuthorshipProfilePanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Experience / Expression / Publication</p>
      <p className="jp-heading mt-2 text-lg">作者性の三層</p>
      <dl className="mt-4 grid gap-3 sm:grid-cols-3 text-sm">
        {[
          ["Experience Author", "経験主体"],
          ["Expression Author", "表現主体"],
          ["Publication Actor", "公開主体"],
        ].map(([en, ja]) => (
          <div key={en} className="border border-border px-3 py-3">
            <dt className="text-text-soft">{en}</dt>
            <dd className="jp-serif mt-1 text-text-faint">{ja}</dd>
          </div>
        ))}
      </dl>
      <EmptyNote>RecordAuthorshipProfile instances: 0</EmptyNote>
    </section>
  );
}

export function FutureSocialArchivePanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Future archive problem</p>
      <p className="jp-heading mt-2 text-lg">未来のSNS資料が欠けるところ</p>
      <ul className="mt-4 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {futureArchiveGaps.map((g) => (
          <li key={g} className="border border-dashed border-border px-3 py-2">
            {g}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SocialDiaryProvenance() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Social Diary Provenance</p>
      <p className="jp-heading mt-2 text-lg">理想的経路とUnknown Node</p>
      <Flow steps={socialDiaryProvenancePath} />
      <p className="mt-4 text-xs text-text-faint">
        Account missing / Post deleted / Thread missing / Screenshot only などが入りうる。
      </p>
    </section>
  );
}

export function DiaryQualificationPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Working definition</p>
      <p className="jp-heading mt-2 text-lg">Diary Observatoryは何をDiaryと呼ぶか</p>
      <p className="mt-3 text-sm text-text-soft">{diaryWorkingDefinition.en}</p>
      <p className="jp-serif mt-2 text-sm text-text-faint">
        {diaryWorkingDefinition.ja}
      </p>
      <ul className="mt-4 space-y-1 text-sm text-text-faint">
        {diaryWorkingDefinition.notRequired.map((item) => (
          <li key={item}>· {item}</li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-accent">{diaryWorkingDefinition.caution}</p>
      <div className="mt-6">
        <p className="label">DiaryQualification</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-xs text-text-faint">
          {qualificationStatuses.map((s) => (
            <li key={s} className="border border-border px-2 py-1">
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-accent">
          真偽スコアでも品質スコアでもない。編集上の分類。
        </p>
      </div>
      <p className="mt-4 text-sm text-text-soft">
        一つのSNS投稿：self-record · 複数年の連続投稿：diary-like archive となりうる。
        Record単体とCollection単位を分ける。
      </p>
    </section>
  );
}

export function DiarySpectrum() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Diary Spectrum</p>
      <p className="jp-heading mt-2 text-lg">優劣のない連続体</p>
      <Flow steps={diarySpectrum} />
      <p className="mt-4 text-xs text-accent">
        左右に優劣を付けない。「Diaryとの距離」の単純線形スコアにもしない。
      </p>
    </section>
  );
}

export function DiaryFormComparisonMatrix() {
  const { columns, cells, note } = diaryFormMatrixConceptual;
  return (
    <section className="my-8 border border-border px-5 py-6 overflow-x-auto">
      <p className="label">Diary Form Comparison Matrix</p>
      <p className="jp-heading mt-2 text-lg">形式比較（実データ／Conceptualを区別）</p>
      <table className="mt-6 w-full min-w-[40rem] border-collapse text-left text-xs">
        <thead>
          <tr>
            <th className="border border-border px-2 py-2 text-text-faint">Axis</th>
            {columns.map((c) => (
              <th key={c.id} className="border border-border px-2 py-2 text-text-soft">
                {c.label}
                <span className="mt-1 block text-[0.6rem] text-text-faint">
                  {c.basis}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrixRows.map((row) => (
            <tr key={row}>
              <th className="border border-border px-2 py-2 font-normal text-text-faint">
                {row}
              </th>
              {columns.map((c) => (
                <td key={c.id} className="border border-border px-2 py-2 text-text-soft">
                  {cells[row]?.[c.id] ?? "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-xs text-accent">{note}</p>
    </section>
  );
}

export function UnrecordedDayConcept() {
  return (
    <aside className="my-8 border border-border px-5 py-6">
      <p className="label">The Unrecorded Day</p>
      <p className="jp-heading mt-2 text-lg">記録されない日</p>
      <p className="mt-3 text-sm text-text-soft">
        投稿しなかった。写真を撮らなかった。スマホを置いた。削除した。非公開だった。何も起きなかった。
      </p>
      <p className="mt-4 text-xs text-accent">
        Diary Observatoryは、記録の多さだけで人生の密度を判断しない。
      </p>
    </aside>
  );
}

export function SnsDiaryCaseStudies() {
  const cases = getSnsDiaryCaseStudies();
  const list = [cases.kafu, cases.horoki, cases.nishimura, cases.social];
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Compare existing cases</p>
      <p className="jp-heading mt-2 text-lg">荷風・林・西村・SNS</p>
      <ul className="mt-6 space-y-4">
        {list.map((c) => (
          <li key={c.label} className="border border-border px-4 py-4">
            <div className="flex flex-wrap items-center gap-2">
              <p className="editorial text-lg text-text">{c.label}</p>
              <span className="jp-serif text-sm text-text-faint">{c.labelJa}</span>
              {c.dataBasis === "conceptual" ? (
                <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
                  Conceptual case only
                </span>
              ) : (
                <>
                  <ProvenanceBadge
                    completeness={
                      (c.provenance === "unknown"
                        ? "unknown"
                        : c.provenance) as ProvenanceCompleteness
                    }
                  />
                  <span className="text-xs text-text-faint">
                    {c.provenanceLabel}
                  </span>
                </>
              )}
            </div>
            <p className="mt-2 text-sm text-text-soft">
              Form: {c.form} · {c.work}
            </p>
            {c.href && (
              <p className="mt-2 text-xs">
                <Link href={c.href} className="underline-offset-4 hover:underline">
                  Open
                </Link>
                {c.diaryHref && (
                  <>
                    {" · "}
                    <Link
                      href={c.diaryHref}
                      className="underline-offset-4 hover:underline"
                    >
                      Diary work
                    </Link>
                  </>
                )}
              </p>
            )}
            {!c.href && (
              <p className="mt-2 text-xs text-text-faint">
                No indexed social-diary collection yet. 架空投稿は作らない。
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SnsDiaryRepositoryAudit() {
  const audit = getSnsDiaryRepositoryFacts();
  const rows: [string, number][] = [
    ["Form profiles", audit.formProfiles],
    ["Qualifications", audit.qualifications],
    ["Social collections", audit.socialCollections],
    ["Feedback loops", audit.feedbackLoops],
    ["Deletions", audit.deletions],
    ["AI-assisted", audit.aiAssisted],
    ["Indexed social cases", audit.indexedSocialCases],
  ];
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Repository audit</p>
      <p className="jp-heading mt-2 text-lg">Diary Form 索引の現状</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {rows.map(([label, value]) => (
          <li key={label} className="border border-border px-4 py-3">
            <p className="label">{label}</p>
            <p className="editorial mt-2 text-2xl text-text">{value}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
