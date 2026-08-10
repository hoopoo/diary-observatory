import type { ReactNode } from "react";
import Link from "next/link";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { CtaLink } from "@/components/ui/CtaLink";
import {
  adminLaborTypes,
  archiveBiasProfiles,
  epistemicSplit,
  hiddenLaborTypes,
  incomeEcologyBuckets,
  multilayerExamples,
  occupationActivityIncome,
  paidStatusValues,
  performanceBoundary,
  publishingLaborRoles,
  roleExpansion,
  unpaidCandidates,
  visibleInvisibleWork,
  workClasses,
  workDefinition,
  workObsTheses,
  workVisibilityRows,
  writerWorkCards,
  writingWorkTypes,
} from "@/data/observations/what-did-diarists-do-for-work";

function PanelShell({
  title,
  titleJa,
  children,
}: {
  title: string;
  titleJa?: string;
  children: ReactNode;
}) {
  return (
    <div className="my-8 border border-border-soft px-4 py-5 md:px-5">
      <p className="label">{title}</p>
      {titleJa ? (
        <p className="jp-serif mt-1 text-sm text-text-soft">{titleJa}</p>
      ) : null}
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function WorkThesisBlock() {
  return (
    <PanelShell title="Central theses" titleJa="中心命題">
      <p className="editorial text-xl text-accent">{workObsTheses.primary.en}</p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        {workObsTheses.primary.ja}
      </p>
      <p className="editorial mt-6 text-lg text-text">{workObsTheses.secondary.en}</p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        {workObsTheses.secondary.ja}
      </p>
      <p className="mt-4 text-xs text-text-faint">{workObsTheses.caution}</p>
    </PanelShell>
  );
}

export function RoleExpansionPanel() {
  return (
    <PanelShell title="Roles inside one life" titleJa="一つの人物の複数Role">
      <ul className="flex flex-wrap gap-2">
        {roleExpansion.map((role) => (
          <li
            key={role}
            className="border border-border px-2.5 py-1 text-xs text-text-faint"
          >
            {role}
          </li>
        ))}
      </ul>
    </PanelShell>
  );
}

export function OccupationActivityIncomeSplit() {
  return (
    <PanelShell
      title="Occupation / Activity / Income"
      titleJa="職業・行為・収入源泉を分離する"
    >
      <div className="grid gap-3 md:grid-cols-3">
        {occupationActivityIncome.map((row) => (
          <div key={row.layer} className="border border-border-soft p-4">
            <p className="label">{row.layer}</p>
            <p className="mt-2 text-sm text-text-soft">{row.en}</p>
            <p className="jp-serif mt-1 text-xs text-text-faint">{row.ja}</p>
            <p className="mt-3 text-xs text-text-faint">e.g. {row.example}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-text-soft">
        これらを同一フィールドにしない。Known occupation と day-level indexed
        work も分離する。
      </p>
    </PanelShell>
  );
}

export function WritingWorkTypesPanel() {
  return (
    <PanelShell title="WritingWorkType" titleJa="「書く」を統合しない">
      <ul className="flex flex-wrap gap-2">
        {writingWorkTypes.map((t) => (
          <li
            key={t}
            className="border border-border px-2.5 py-1 text-xs text-text-faint"
          >
            {t}
          </li>
        ))}
      </ul>
    </PanelShell>
  );
}

export function SalariedWorkPanel() {
  return (
    <PanelShell title="Salaried work" titleJa="給与をもらう仕事">
      <p className="editorial text-lg text-accent">
        A salary pays for labor. It also structures the day.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        給与は労働への支払いである。同時に、一日の構造を作る。
      </p>
      <p className="mt-4 text-sm text-text-soft">
        Primary cases: Kafka · Bukowski — only when WorkRecords are indexed.
      </p>
      <p className="mt-2 text-xs text-text-faint">
        Indexed salaried WorkRecords across repository: 0. Employer / wage /
        schedule remain Research needed.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <CtaLink href="/writers/franz-kafka" variant="text" arrow>
          Franz Kafka
        </CtaLink>
        <CtaLink href="/writers/charles-bukowski" variant="text" arrow>
          Charles Bukowski
        </CtaLink>
      </div>
    </PanelShell>
  );
}

export function LiteraryIncomePanel() {
  return (
    <PanelShell title="Literary income" titleJa="原稿料で暮らす仕事">
      <p className="text-sm text-text-soft">
        Manuscript payment · Royalty · Advance · Article fee · Book income ·
        Review fee · Commission · Unknown literary income
      </p>
      <p className="mt-3 text-sm text-text-soft">
        「作家だから印税で暮らした」と推測しない。作品が売れたことと生活費構造を同一視しない。
      </p>
      <p className="mt-2 text-xs text-text-faint">
        LiteraryIncomeRelations indexed: 0. MoneyRecords may exist without
        literary-income linkage.
      </p>
    </PanelShell>
  );
}

export function PublishingLaborNetwork() {
  return (
    <PanelShell title="Publishing labor network" titleJa="出版労働ネットワーク">
      <p className="editorial text-lg text-accent">
        A book is not finished when the manuscript is finished.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        原稿が終わっても、本の仕事は終わらない。
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {publishingLaborRoles.map((role) => (
          <li
            key={role}
            className="border border-border px-2.5 py-1 text-xs text-text-faint"
          >
            {role}
            <span className="ml-2 text-text-faint/70">Role</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-text-faint">
        Confirmed Actors only become Entities. Unconfirmed = Role display.
        PublishingActivityRecords: 0 · Primary case:{" "}
        <Link
          href="/writers/virginia-woolf"
          className="underline-offset-4 hover:underline"
        >
          Virginia Woolf
        </Link>
      </p>
    </PanelShell>
  );
}

export function PerformanceLaborBoundary() {
  return (
    <PanelShell title="Performance labor boundary" titleJa="上演労働の境界">
      <p className="editorial text-lg text-accent">
        The visible performance is only part of that work.
      </p>
      <dl className="mt-4 grid gap-2 sm:grid-cols-2">
        {performanceBoundary.map((row) => (
          <div
            key={row.layer}
            className="flex items-baseline justify-between gap-3 border border-border-soft px-3 py-2"
          >
            <dt className="text-sm text-text-soft">{row.layer}</dt>
            <dd className="shrink-0 text-xs text-text-faint">{row.status}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-xs text-text-faint">
        Do not infer unpaid status. Primary case:{" "}
        <Link
          href="/writers/furukawa-roppa"
          className="underline-offset-4 hover:underline"
        >
          Roppa Furukawa
        </Link>
      </p>
    </PanelShell>
  );
}

export function AdministrativeLaborPanel() {
  return (
    <PanelShell title="Administrative labor" titleJa="行政労働">
      <p className="editorial text-lg text-accent">
        Institutions are built from ordinary workdays.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        制度は、誰かの普通の勤務日からできている。
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {adminLaborTypes.map((t) => (
          <li
            key={t}
            className="border border-border px-2.5 py-1 text-xs text-text-faint"
          >
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-text-faint">
        AdministrationRecords: 0. Do not auto-link Great Fire / Plague. Primary
        case:{" "}
        <Link
          href="/writers/samuel-pepys"
          className="underline-offset-4 hover:underline"
        >
          Samuel Pepys
        </Link>
      </p>
    </PanelShell>
  );
}

export function HouseholdEconomyWorkPanel() {
  return (
    <PanelShell title="Household economy is work" titleJa="家計維持も仕事である">
      <p className="editorial text-lg text-accent">
        Money management is also labor.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        お金を管理することも、生活を維持する仕事である。
      </p>
      <p className="mt-3 text-xs text-text-faint">
        RetailRecords: 0. Amounts only when sourced. Primary case:{" "}
        <Link
          href="/writers/ichiyo-higuchi"
          className="underline-offset-4 hover:underline"
        >
          Ichiyō Higuchi
        </Link>
      </p>
    </PanelShell>
  );
}

export function PaidStatusPanel() {
  return (
    <PanelShell title="PaidStatus" titleJa="有給・無給・不明">
      <ul className="flex flex-wrap gap-2">
        {paidStatusValues.map((s) => (
          <li
            key={s}
            className="border border-border px-2.5 py-1 text-xs text-text-faint"
          >
            {s}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-text-soft">
        Unpaid ≠ Valueless。「家事だから unpaid」と自動判定しない。不明なら
        Unknown。
      </p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {unpaidCandidates.map((c) => (
          <li
            key={c}
            className="border border-border-soft px-3 py-2 text-sm text-text-soft"
          >
            {c}
          </li>
        ))}
      </ul>
    </PanelShell>
  );
}

export function HiddenLaborPanel() {
  return (
    <PanelShell title="Hidden / adjacent labor" titleJa="見えにくい仕事">
      <p className="editorial text-lg text-accent">
        Work can disappear when only the final output is counted.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        成果物だけを数えると、仕事の一部は消える。
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {hiddenLaborTypes.map((t) => (
          <li
            key={t}
            className="border border-border px-2.5 py-1 text-xs text-text-faint"
          >
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-text-faint">
        HiddenLaborRecords: 0 — do not assign by biography alone.
      </p>
    </PanelShell>
  );
}

export function MultiRoleDayPanel() {
  return (
    <PanelShell title="Multi-role day" titleJa="一つの人に複数の仕事">
      <p className="text-sm text-text-soft">
        Role stacking: Work + Family + Maintenance + Creative. Durationなしでも
        Role presence は表示可能 — ただし実データがある場合のみ。
      </p>
      <p className="mt-3 text-xs text-text-faint">
        MultiRoleDayProfiles indexed: 0. Example sequences are not Facts.
      </p>
    </PanelShell>
  );
}

export function WorkFootprintPanel() {
  return (
    <PanelShell title="Work footprint" titleJa="仕事の足跡（時間）">
      <p className="editorial text-lg text-accent">
        Job hours and job footprint are not identical.
      </p>
      <p className="mt-3 text-sm text-text-soft">
        Formal work · adjacent preparation · commute · waiting · recovery ·
        related maintenance · unknown adjacent time
      </p>
      <p className="mt-2 text-xs text-text-faint">
        Duration不足時は数値化しない。Related:{" "}
        <Link
          href="/observations/who-owns-the-day"
          className="underline-offset-4 hover:underline"
        >
          Who Owns the Day?
        </Link>
      </p>
    </PanelShell>
  );
}

export function WorkBodyPanel() {
  return (
    <PanelShell title="Work / Body" titleJa="仕事は身体へ残る">
      <p className="text-sm text-text-soft">
        Fatigue · Pain · Voice · Sleep · Hunger · Illness · Recovery ·
        Performance capacity
      </p>
      <p className="mt-3 text-sm text-text-soft">
        WorkBodyRelation: explicit / supported / possible / unknown.
        仕事→病気の因果を自動判定しない。
      </p>
    </PanelShell>
  );
}

export function WorkMobilityPanel() {
  return (
    <PanelShell title="Work mobility" titleJa="仕事は都市を移動させる">
      <p className="text-sm text-text-soft">
        Workplace · Publisher · Theater · Office · Shop · Meeting · Home · City
        infrastructure — 確認済み Entity のみ将来ネットワーク表示。
      </p>
      <p className="mt-2 text-xs text-text-faint">
        推測位置で地図を埋めない。
      </p>
    </PanelShell>
  );
}

export function IncomeEcologyPanel() {
  return (
    <PanelShell title="Income ecology" titleJa="収入の生態系">
      <ul className="flex flex-wrap gap-2">
        {incomeEcologyBuckets.map((b) => (
          <li
            key={b}
            className="border border-border px-2.5 py-1 text-xs text-text-faint"
          >
            {b}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-text-soft">
        Occupation A + Income B + Unpaid labor C + Creative activity D
        を同時に持ちうる。Job = Income モデルを避ける。
      </p>
      <p className="mt-2 text-xs text-text-faint">
        Person-specific composition only from confirmed MoneyRecords.
        primaryIncomeType defaults to unset when evidence is insufficient.
      </p>
    </PanelShell>
  );
}

export function WorkSilencePanel() {
  return (
    <PanelShell title="Work silence" titleJa="日記に仕事が書かれないとき">
      <p className="editorial text-lg text-accent">
        Routine can become invisible because it is routine.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        日常であるがゆえに、記録から消える仕事もある。
      </p>
      <p className="mt-4 border-l border-accent pl-4 text-sm text-text-soft">
        No work record does not mean free time.
        <span className="mt-1 block text-xs text-text-faint">
          仕事の記録がないことは、自由時間があったことを意味しない。
        </span>
      </p>
      <p className="mt-3 text-xs text-text-faint">
        SilenceType: no-mention / sparse-mention / episodic-only / not-indexed /
        source-gap / unknown — No mention ≠ No work.
      </p>
    </PanelShell>
  );
}

export function WorkDefinitionPanel() {
  return (
    <PanelShell
      title="Working definition"
      titleJa="Diary Observatoryでの「仕事」"
    >
      <p className="editorial text-base text-text">{workDefinition.en}</p>
      <p className="jp-serif mt-3 text-sm text-text-soft">{workDefinition.ja}</p>
      <p className="mt-3 text-xs text-text-faint">{workDefinition.caution}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {workClasses.map((c) => (
          <li
            key={c}
            className="border border-border px-2.5 py-1 text-xs text-text-faint"
          >
            {c}
          </li>
        ))}
      </ul>
    </PanelShell>
  );
}

export function WorkIsMultiLayered() {
  return (
    <PanelShell title="Work is multi-layered" titleJa="仕事は多層である">
      <div className="grid gap-3 sm:grid-cols-2">
        {multilayerExamples.map((ex) => (
          <div key={ex.title} className="border border-border-soft p-4">
            <p className="text-sm text-text">{ex.title}</p>
            <p className="mt-2 text-xs text-text-faint">{ex.layers.join(" + ")}</p>
          </div>
        ))}
      </div>
    </PanelShell>
  );
}

export function NineWriterWorkGrid() {
  return (
    <PanelShell
      title="Nine writer work cards"
      titleJa="九つの生活における仕事の入口"
    >
      <p className="mb-4 text-xs text-text-faint">
        No productivity / income / freedom ranking. Known occupation ≠ day-level
        Fact.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {writerWorkCards.map((card) => (
          <article
            key={card.writerId}
            className="flex h-full flex-col border border-border-soft p-4"
          >
            <p className="label">{card.primaryConditionShort}</p>
            <h3 className="editorial mt-2 text-xl text-text">{card.name}</h3>
            <p className="jp-serif text-sm text-accent">{card.nameJa}</p>
            <p className="mt-3 text-xs leading-relaxed text-text-soft">
              {card.workQuestion}
            </p>
            <dl className="mt-4 space-y-1.5 text-[0.7rem] text-text-faint">
              <div className="flex justify-between gap-2">
                <dt>Known occupation</dt>
                <dd className="text-right text-text-soft">
                  {card.knownOccupation}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Occupation status</dt>
                <dd className="text-right">{card.knownOccupationStatus}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>WorkRecords</dt>
                <dd>{card.workRecordCount}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Money / Income</dt>
                <dd>
                  {card.moneyRecordCount} / {card.moneyIncomeCount}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Maintenance</dt>
                <dd>{card.maintenanceEventCount}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Publishing</dt>
                <dd>
                  {card.publishingRecordCount} · act{" "}
                  {card.publishingActivityCount}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Admin / Retail</dt>
                <dd>
                  {card.administrationRecordCount} / {card.retailRecordCount}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Indexed classes</dt>
                <dd className="max-w-[55%] text-right">
                  {card.indexedWorkClasses.join(", ")}
                </dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Source coverage</dt>
                <dd className="max-w-[55%] text-right">{card.sourceCoverage}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt>Main gap</dt>
                <dd className="max-w-[55%] text-right">{card.mainResearchGap}</dd>
              </div>
            </dl>
            <CtaLink
              href={`/writers/${card.slug}`}
              variant="text"
              arrow
              className="mt-4 self-start"
            >
              Open writer
            </CtaLink>
          </article>
        ))}
      </div>
    </PanelShell>
  );
}

export function WorkVisibilityMatrix() {
  return (
    <PanelShell title="Work visibility matrix" titleJa="仕事の可視性">
      <p className="mb-3 text-xs text-text-faint">
        Repository-wide day-level status for cross classes — no writer ranking.
      </p>
      <dl className="grid gap-2 sm:grid-cols-2">
        {workVisibilityRows.map((row) => (
          <div
            key={row}
            className="flex items-baseline justify-between gap-3 border border-border-soft px-3 py-2"
          >
            <dt className="text-sm text-text-soft">{row}</dt>
            <dd className="shrink-0 text-xs text-text-faint">
              {row === "Publishing" ||
              row === "Maintenance" ||
              row === "Money management"
                ? "Partial"
                : "Not indexed"}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-xs text-text-faint">
        Partial = related Money / Publishing / Maintenance registries exist for
        some writers; not occupation-complete.
      </p>
    </PanelShell>
  );
}

export function VisibleInvisibleWork() {
  return (
    <PanelShell title="Visible / Invisible work" titleJa="見える仕事・見えにくい仕事">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <p className="label">Visible output</p>
          <ul className="mt-3 space-y-1 text-sm text-text-soft">
            {visibleInvisibleWork.visible.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label">Less visible labor</p>
          <ul className="mt-3 space-y-1 text-sm text-text-soft">
            {visibleInvisibleWork.invisible.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
    </PanelShell>
  );
}

export function ArchiveBiasPanel() {
  return (
    <PanelShell title="Archive bias (conceptual)" titleJa="アーカイブの偏り">
      <p className="editorial text-lg text-accent">
        Institutions record work that households may leave unrecorded.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        制度は仕事を記録する。家庭内の仕事は、同じ密度では残らないことがある。
      </p>
      <p className="mt-3 text-xs text-text-faint">
        Conceptual model — not an absolute law; do not auto-apply to Writers.
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {archiveBiasProfiles.map((p) => (
          <li key={p.id} className="border border-border-soft p-3">
            <p className="text-sm text-text">{p.workClass}</p>
            <p className="mt-1 text-xs text-text-faint">
              visibility {p.visibility} · survival {p.survivalLikelihood}
            </p>
            <p className="mt-2 text-xs text-text-soft">{p.notes}</p>
          </li>
        ))}
      </ul>
    </PanelShell>
  );
}

export function WorkEpistemicPanel() {
  return (
    <PanelShell
      title="Fact / Observation / Interpretation"
      titleJa="この記事自身の層"
    >
      <div className="space-y-4">
        <div className="border border-border-soft px-4 py-3">
          <EpistemicLabel kind="fact" />
          <p className="mt-2 text-sm text-text-soft">{epistemicSplit.fact}</p>
          <p className="jp-serif mt-1 text-xs text-text-faint">
            {epistemicSplit.factJa}
          </p>
        </div>
        <div className="border border-border-soft px-4 py-3">
          <EpistemicLabel kind="observation" />
          <p className="mt-2 text-sm text-text-soft">
            {epistemicSplit.observation}
          </p>
          <p className="jp-serif mt-1 text-xs text-text-faint">
            {epistemicSplit.observationJa}
          </p>
        </div>
        <div className="border border-border-soft px-4 py-3">
          <EpistemicLabel kind="interpretation" />
          <p className="mt-2 text-sm text-text-soft">
            {epistemicSplit.interpretation}
          </p>
          <p className="jp-serif mt-1 text-xs text-text-faint">
            {epistemicSplit.interpretationJa}
          </p>
        </div>
      </div>
    </PanelShell>
  );
}

export function WorkRelatedCta() {
  return (
    <div className="my-10 grid gap-4 md:grid-cols-2">
      {[
        {
          href: "/observations/who-owns-the-day",
          title: "一日は、誰のものなのか",
          note: "仕事を、時間の支配から読む。",
        },
        {
          href: "/observations/maintenance-is-not-background",
          title: "生活維持は、文学の背景ではない",
          note: "仕事を、見えない維持労働から読む。",
        },
        {
          href: "/observations/backstage-is-not-recorded",
          title: "楽屋は、歴史に映らない",
          note: "仕事を、完成成果の外側から読む。",
        },
        {
          href: "/observations/the-price-of-an-ordinary-day",
          title: "普通の一日の値段",
          note: "What does an ordinary workday cost?",
        },
      ].map((item) => (
        <article key={item.href} className="paper-panel flex flex-col p-5">
          <p className="label">Related observation</p>
          <h3 className="jp-serif mt-3 text-lg text-text">{item.title}</h3>
          <p className="mt-2 text-sm text-text-faint">{item.note}</p>
          <CtaLink href={item.href} variant="secondary" arrow className="mt-5">
            Read observation
          </CtaLink>
        </article>
      ))}
    </div>
  );
}
