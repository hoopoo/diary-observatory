import Link from "next/link";
import {
  audienceBackstageLoop,
  audienceEvidenceLevels,
  bodyCollectiveFlow,
  careBackstageActors,
  careGaps,
  firstEntryCriteria,
  foodPerformanceRelations,
  foodTimings,
  indexedBackstageStatus,
  individualCollective,
  mediaBackstage,
  performanceOutcomes,
  preparationStack,
  supportNetwork,
  visibleInvisiblePerformance,
  waitingCosts,
  waitingLaborTypes,
  wartimeBackstage,
  backstageRecords,
  preparationRecords,
} from "@/data/observations/backstage-is-not-recorded";

function EmptyNote({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="mt-4 border border-dashed border-border px-4 py-4">
      <p className="text-sm text-text-soft">{en}</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">{ja}</p>
    </div>
  );
}

export function VisibleInvisiblePerformance() {
  return (
    <aside className="not-prose my-10">
      <h3 className="editorial text-2xl text-text">
        Visible performance / Invisible performance
      </h3>
      <p className="jp-heading mt-1 text-lg">見える上演／見えない上演</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="border border-border px-4 py-4">
          <p className="label">Visible</p>
          <ul className="mt-3 space-y-2">
            {visibleInvisiblePerformance.visible.map((item) => (
              <li key={item.id} className="text-sm text-text-soft">
                {item.label}
                <span className="jp-serif ml-2 text-xs text-text-faint">
                  {item.labelJa}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-border px-4 py-4">
          <p className="label">Invisible</p>
          <ul className="mt-3 space-y-2">
            {visibleInvisiblePerformance.invisible.map((item) => (
              <li key={item.id} className="text-sm text-text-soft">
                {item.label}
                <span className="jp-serif ml-2 text-xs text-text-faint">
                  {item.labelJa}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-xs text-text-faint">
        見えない側も上演の一部である。記録がない行動を推測で追加しない。
      </p>
    </aside>
  );
}

export function PerformancePreparationStack() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Performance preparation stack</p>
      <ol className="mt-4 flex flex-col">
        {preparationStack.map((step, i) => (
          <li key={step.id} className="flex flex-col items-start">
            <span className="border border-border px-3 py-2 text-sm text-text-soft">
              {step.label}
              <span className="jp-serif mt-0.5 block text-xs text-text-faint">
                {step.labelJa}
              </span>
            </span>
            {i < preparationStack.length - 1 && (
              <span className="px-3 py-1 text-xs text-accent" aria-hidden>
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs text-text-faint">
        PreparationRecord indexed: {preparationRecords.length} · 時間不明なら補完しない
      </p>
    </aside>
  );
}

export function WaitingIsLaborPanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Waiting is labor</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {waitingLaborTypes.map((t) => (
          <li
            key={t.id}
            className="border border-border px-3 py-3 text-sm text-text-soft"
          >
            {t.label}
            <span className="jp-serif mt-1 block text-xs text-text-faint">
              {t.labelJa}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-text-faint">
        WaitingRecord duration は確認済みのみ。推定時間を表示しない。
      </p>
    </aside>
  );
}

export function WaitingCostPanel() {
  return (
    <aside className="not-prose my-10">
      <h3 className="editorial text-xl text-text">Waiting cost</h3>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {waitingCosts.map((c) => (
          <li
            key={c.id}
            className="border border-border px-3 py-3 text-sm text-text-soft"
          >
            {c.label}
            <span className="jp-serif mt-1 block text-xs text-text-faint">
              {c.labelJa}
            </span>
            <span className="mt-2 block text-[0.65rem] text-text-faint">
              CostVisibility: {c.visibility}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function BackstageRecordObservatory() {
  return (
    <aside className="not-prose my-10">
      <h3 className="editorial text-xl text-text">
        Backstage record observatory
      </h3>
      <p className="mt-2 text-xs text-text-faint">
        Aggregates Rehearsal / Waiting / Food / Body / Maintenance /
        Audience / Performance — without double-counting the same event.
      </p>
      <p className="mt-2 text-xs text-text-faint">
        Filters ready: Period · Volume · Category · Venue · Performance type ·
        Evidence · Verification
      </p>
      {backstageRecords.length === 0 ? (
        <EmptyNote
          en="No edition-verified backstage entry indexed yet."
          ja="版確認済みの舞台裏 Entry は、まだ索引化されていません。"
        />
      ) : null}
    </aside>
  );
}

export function PerformanceFoodTiming() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Performance food timing</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {foodTimings.map((t) => (
          <li
            key={t.id}
            className="border border-border px-3 py-3 text-sm text-text-soft"
          >
            {t.label}
            <span className="jp-serif mt-1 block text-xs text-text-faint">
              {t.labelJa}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function FoodPerformanceRelationPanel() {
  return (
    <aside className="not-prose my-8">
      <p className="label">Food / performance relation</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {foodPerformanceRelations.map((r) => (
          <li
            key={r.id}
            className="border border-border px-3 py-3 text-sm text-text-soft"
          >
            {r.label}
            <span className="jp-serif mt-1 block text-xs text-text-faint">
              {r.labelJa}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-text-faint">
        因果を資料なしに断定しない（例:「この食事のおかげで出演できた」）。
      </p>
    </aside>
  );
}

export function PerformanceSupportNetwork() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Performance support network</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {supportNetwork.map((n) => (
          <li
            key={n.id}
            className="border border-border px-3 py-3 text-sm text-text-soft"
          >
            {n.label}
            <span className="jp-serif mt-1 block text-xs text-text-faint">
              {n.labelJa}
            </span>
            <span className="mt-2 block text-[0.65rem] text-text-faint">
              Actor type · verified Entity only if sourced
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function IndividualCollectiveLabor() {
  return (
    <aside className="not-prose my-10">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border border-border px-4 py-4">
          <p className="label">Public credit</p>
          <ul className="mt-3 space-y-1 text-sm text-text-faint">
            {individualCollective.publicCredit.map((item) => (
              <li key={item}>· {item}</li>
            ))}
          </ul>
        </div>
        <div className="border border-border px-4 py-4">
          <p className="label">Collective labor</p>
          <ul className="mt-3 space-y-1 text-sm text-text-faint">
            {individualCollective.collectiveLabor.map((item) => (
              <li key={item}>· {item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-xs text-text-faint">
        報酬格差や契約条件は資料確認なしに断定しない。
      </p>
    </aside>
  );
}

export function PerformanceOutcomePanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Performance outcome</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {performanceOutcomes.map((o) => (
          <li
            key={o.id}
            className="border border-border px-3 py-3 text-sm text-text-soft"
          >
            {o.label}
            <span className="jp-serif mt-1 block text-xs text-text-faint">
              {o.labelJa}
            </span>
          </li>
        ))}
      </ul>
      <EmptyNote
        en="No verified performance outcomes indexed. Success-only indexing is not used."
        ja="確認済み outcome は未索引。成功公演だけを索引化しない。"
      />
    </aside>
  );
}

export function BodyCollectiveImpactFlow() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Body / collective impact flow</p>
      <ol className="mt-4 flex flex-col">
        {bodyCollectiveFlow.map((step, i) => (
          <li key={step.label} className="flex flex-col items-start">
            <span className="border border-border px-3 py-2 text-sm text-text-soft">
              {step.label}
              <span className="jp-serif mt-0.5 block text-xs text-text-faint">
                {step.labelJa}
              </span>
            </span>
            {i < bodyCollectiveFlow.length - 1 && (
              <span className="px-3 py-1 text-xs text-accent" aria-hidden>
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs text-text-faint">
        確認できない段階は Unknown。因果の自動判定はしない。
      </p>
    </aside>
  );
}

export function CareBackstagePanel() {
  return (
    <aside className="not-prose my-10">
      <h3 className="editorial text-xl text-text">
        Who cared for the performer?
      </h3>
      <p className="jp-heading mt-1 text-base">誰が、演者を支えたのか</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {careBackstageActors.map((a) => (
          <li
            key={a.id}
            className="border border-border px-3 py-3 text-sm text-text-soft"
          >
            {a.label}
            <span className="jp-serif mt-1 block text-xs text-text-faint">
              {a.labelJa}
            </span>
          </li>
        ))}
      </ul>
      <p className="label mt-6">Maintenance gaps</p>
      <ul className="mt-3 space-y-1 text-sm text-text-faint">
        {careGaps.map((g) => (
          <li key={g}>· {g}</li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-text-faint">
        推測で人物を割り当てない。
      </p>
    </aside>
  );
}

export function AudienceBackstageFeedbackLoop() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Audience backstage feedback loop</p>
      <ol className="mt-4 flex flex-col">
        {audienceBackstageLoop.map((step, i) => (
          <li key={step.label} className="flex flex-col items-start">
            <span className="border border-border px-3 py-2 text-sm text-text-soft">
              {step.label}
              <span className="jp-serif mt-0.5 block text-xs text-text-faint">
                {step.labelJa}
              </span>
            </span>
            {i < audienceBackstageLoop.length - 1 && (
              <span className="px-3 py-1 text-xs text-accent" aria-hidden>
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs text-text-faint">
        日記上の印象と、実際の観客数・売上を区別する。
      </p>
    </aside>
  );
}

export function AudienceEvidencePanel() {
  return (
    <aside className="not-prose my-8">
      <p className="label">Audience evidence levels</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {audienceEvidenceLevels.map((e) => (
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
        「大入り」などを根拠なく座席数へ換算しない。
      </p>
    </aside>
  );
}

export function WartimeBackstagePanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Wartime backstage</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {wartimeBackstage.map((w) => (
          <li
            key={w.id}
            className="border border-border px-3 py-3 text-sm text-text-soft"
          >
            {w.label}
            <span className="jp-serif mt-1 block text-xs text-text-faint">
              {w.labelJa}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-text-faint">
        制度資料と個人の日記を分けて表示する。資料なしに断定しない。
      </p>
    </aside>
  );
}

export function MediaBackstageComparison() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Media backstage comparison</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {mediaBackstage.map((m) => (
          <article key={m.id} className="border border-border px-4 py-4">
            <p className="editorial text-lg text-text">{m.label}</p>
            <ul className="mt-3 space-y-1 text-sm text-text-faint">
              {m.items.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-3 text-xs text-text-faint">
        具体出演歴は確認済みデータのみ接続する。
      </p>
    </aside>
  );
}

export function IndexedBackstageRecords() {
  return (
    <aside className="not-prose my-10">
      <h3 className="editorial text-2xl text-text">
        Indexed backstage records
      </h3>
      <p className="jp-heading mt-1 text-lg">索引化された舞台裏記録</p>
      <dl className="mt-6 space-y-3 text-sm">
        <div className="border border-border px-4 py-3">
          <dt className="label">Writer</dt>
          <dd className="mt-1 text-text-soft">{indexedBackstageStatus.writer}</dd>
        </div>
        <div className="border border-border px-4 py-3">
          <dt className="label">Diary</dt>
          <dd className="mt-1 text-text-soft">{indexedBackstageStatus.diary}</dd>
        </div>
        {indexedBackstageStatus.rows.map((row) => (
          <div key={row.label} className="border border-border px-4 py-3">
            <dt className="label">{row.label}</dt>
            <dd className="mt-1 text-text-soft">{row.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-xs text-text-faint">
        概念モデルを Fact 件数へ含めない。BackstageRecord:{" "}
        {backstageRecords.length}
      </p>
    </aside>
  );
}

export function BackstageEntryCriteria() {
  return (
    <aside className="not-prose my-10">
      <h3 className="editorial text-2xl text-text">
        What kind of day should be indexed first?
      </h3>
      <p className="jp-heading mt-1 text-lg">
        最初に、どの一日を索引化するか
      </p>
      <p className="label mt-6">Required</p>
      <ul className="mt-3 space-y-1 text-sm text-text-faint">
        {firstEntryCriteria.required.map((c) => (
          <li key={c}>· {c}</li>
        ))}
      </ul>
      <p className="label mt-6">Priority</p>
      <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-text-faint">
        {firstEntryCriteria.priorities.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ol>
      <p className="mt-4 text-xs text-text-faint">具体的な日付を推測しない。</p>
      <Link
        href="/research/furukawa-roppa-first-entry"
        className="focus-ring mt-6 inline-flex cta cta-secondary"
      >
        Open first-entry research workspace
      </Link>
    </aside>
  );
}

export function BackstageRelatedCta() {
  return (
    <aside className="not-prose my-12">
      <p className="label">Related pages</p>
      <ul className="mt-4 space-y-2 text-sm">
        {[
          {
            href: "/writers/furukawa-roppa",
            title: "Roppa Furukawa / 古川ロッパ",
          },
          {
            href: "/diaries/furukawa-roppa-showa-diary",
            title: "Furukawa Roppa Shōwa Diary / 古川ロッパ昭和日記",
          },
          {
            href: "/observations/maintenance-is-not-background",
            title: "生活維持は、文学の背景ではない",
          },
          {
            href: "/observations/where-did-the-editor-go",
            title: "編集者は消えたのか",
          },
          {
            href: "/observations/the-price-of-an-ordinary-day",
            title: "一日の値段",
          },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="focus-ring text-accent underline-offset-4 hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
