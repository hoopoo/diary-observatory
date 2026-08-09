import Link from "next/link";
import { CtaLink } from "@/components/ui/CtaLink";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import {
  controlKinds,
  creativeTimeTypes,
  dayWithoutPercentages,
  epistemicSplit,
  institutionalFootprint,
  maintenanceTypes,
  ownershipAxes,
  timeBlocks,
  timeFramework,
  whoOwnsDayTheses,
  writerTimeQuestions,
  writerTimeSummaries,
} from "@/data/observations/who-owns-the-day";

export function TimeOwnershipModel() {
  return (
    <aside className="not-prose my-8 space-y-6 border border-border px-5 py-6">
      <p className="label">Time Ownership Model</p>
      <div className="flex flex-wrap gap-2">
        {ownershipAxes.map((a) => (
          <span
            key={a.en}
            className="border border-border px-2.5 py-1 text-xs text-text-soft"
          >
            {a.en}
            <span className="text-text-faint"> / {a.ja}</span>
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {timeBlocks.map((b) => (
          <span
            key={b}
            className="border border-border-soft px-2.5 py-1 text-xs text-text-faint"
          >
            {b}
          </span>
        ))}
      </div>
      <p className="text-xs text-text-faint">
        Duration未知のとき、割合グラフは作らない。Presence / Sequence / Control /
        Visibility で示す。
      </p>
    </aside>
  );
}

export function DayWithoutPercentages() {
  return (
    <aside className="not-prose my-8 border border-border px-5 py-6">
      <p className="label">A Day Without Percentages</p>
      <p className="mt-2 text-xs text-text-faint">
        False Precision を避ける。円グラフは資料なしに作らない。
      </p>
      <ul className="mt-5 space-y-3">
        {dayWithoutPercentages.map((row) => (
          <li
            key={row.block}
            className="grid gap-1 border border-border-soft px-3 py-3 sm:grid-cols-3"
          >
            <span className="text-sm text-text">{row.block}</span>
            <span className="text-xs text-text-soft">{row.control}</span>
            <span className="text-xs text-text-faint">{row.status}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function ControlKindsPanel() {
  return (
    <div className="not-prose my-6 flex flex-wrap gap-2">
      {controlKinds.map((k) => (
        <span
          key={k}
          className="border border-border px-2.5 py-1 text-xs text-text-soft"
        >
          {k}
        </span>
      ))}
    </div>
  );
}

export function InstitutionalFootprint() {
  return (
    <aside className="not-prose my-8 border border-border px-5 py-6">
      <p className="label">Institutional footprint</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">制度が一日に残す足跡</p>
      <ol className="mt-5 max-w-md space-y-2 text-sm text-text-soft">
        {institutionalFootprint.map((step, i) => (
          <li key={step}>
            {step}
            {i < institutionalFootprint.length - 1 ? (
              <span className="mt-1 block text-xs text-text-faint">↓</span>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="editorial mt-6 text-base text-accent">
        The footprint of work can be larger than paid hours.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-soft">
        仕事が占有する時間は、給与が発生する時間より大きい場合がある。
      </p>
    </aside>
  );
}

export function MaintenanceTimeVisibility() {
  return (
    <aside className="not-prose my-8 border border-border px-5 py-6">
      <p className="label">Maintenance time types</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {maintenanceTypes.map((t) => (
          <span
            key={t}
            className="border border-border-soft px-2.5 py-1 text-xs text-text-faint"
          >
            {t}
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs text-text-faint">
        Recorded / Unrecorded / Outsourced / Supported — Actor を性別等で推測しない。
      </p>
    </aside>
  );
}

export function CreativeTimeTypes() {
  return (
    <aside className="not-prose my-8 border border-border px-5 py-6">
      <p className="label">Creative time types</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {creativeTimeTypes.map((t) => (
          <li
            key={t.id}
            className="border border-border-soft px-3 py-2 text-sm text-text-soft"
          >
            {t.label}
            <span className="mt-0.5 block text-xs text-text-faint">{t.labelJa}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function TimeObservatoryFramework() {
  return (
    <aside className="not-prose my-8 border border-border px-5 py-6">
      <p className="label">Time Observatory Framework</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {timeFramework.map((layer) => (
          <div key={layer.id} className="border border-border-soft px-3 py-3">
            <p className="text-sm text-text">{layer.label}</p>
            <p className="mt-2 text-xs text-text-faint">{layer.items.join(" · ")}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-text-faint">
        一つの Block が複数 Layer に属してよい（例: Dinner with editor）。
      </p>
    </aside>
  );
}

export function SevenWriterTimeComparison() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Seven writers · Time questions</p>
      <p className="mt-2 text-xs text-text-faint">
        Comparison questions — not Facts. No ranking. Duration shares are not
        invented.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {writerTimeQuestions.map((w, i) => {
          const summary = writerTimeSummaries[i];
          return (
            <article key={w.slug} className="paper-panel flex h-full flex-col p-5">
              <p className="label">{w.primaryCondition}</p>
              <h3 className="editorial mt-2 text-xl text-text">{w.name}</h3>
              <p className="jp-serif text-sm text-accent">{w.nameJa}</p>
              <p className="mt-3 text-sm text-text-soft">{w.question}</p>
              <p className="mt-3 text-xs text-text-faint">{w.dataStatus}</p>
              <p className="mt-2 text-xs text-text-faint">
                Indexed time records: {summary?.indexedTimeRecords ?? 0} ·{" "}
                {summary?.status === "no-indexed-time-records"
                  ? "No indexed time records"
                  : summary?.status}
              </p>
              <CtaLink
                href={`/writers/${w.slug}`}
                variant="text"
                arrow
                className="mt-4 self-start"
              >
                Open writer
              </CtaLink>
            </article>
          );
        })}
      </div>
      <p className="mt-6 border-l border-accent pl-4 text-sm text-text-soft">
        Diary Observatoryは「誰が一番時間を持っていたか」を競わせない。資料密度が異なるため単純比較不能。
      </p>
    </aside>
  );
}

export function WhoOwnsDayEpistemic() {
  return (
    <aside className="not-prose my-10 space-y-3">
      <div className="border border-border-soft px-4 py-3">
        <EpistemicLabel kind="fact" />
        <p className="mt-2 text-sm text-text-soft">{epistemicSplit.fact}</p>
        <p className="mt-1 text-xs text-text-faint">{epistemicSplit.factJa}</p>
      </div>
      <div className="border border-border-soft px-4 py-3">
        <EpistemicLabel kind="observation" />
        <p className="mt-2 text-sm text-text-soft">{epistemicSplit.observation}</p>
        <p className="mt-1 text-xs text-text-faint">{epistemicSplit.observationJa}</p>
      </div>
      <div className="border border-border-soft px-4 py-3">
        <EpistemicLabel kind="interpretation" />
        <p className="mt-2 text-sm text-text-soft">{epistemicSplit.interpretation}</p>
        <p className="mt-1 text-xs text-text-faint">{epistemicSplit.interpretationJa}</p>
      </div>
      <p className="text-xs text-text-faint">{whoOwnsDayTheses.caution}</p>
    </aside>
  );
}

export function WhoOwnsDayRelatedLinks() {
  return (
    <aside className="not-prose my-10 space-y-3">
      <p className="label">Related published observations</p>
      {[
        {
          href: "/observations/maintenance-is-not-background",
          title: "生活維持は、文学の背景ではない",
          note: "Time becomes visible when maintenance becomes visible.",
        },
        {
          href: "/observations/backstage-is-not-recorded",
          title: "楽屋は、歴史に映らない",
          note: "Performance time extends before and after the visible show.",
        },
        {
          href: "/observations/the-price-of-an-ordinary-day",
          title: "普通の一日の値段",
          note: "An ordinary day has both a monetary cost and a time cost.",
        },
      ].map((item) => (
        <article key={item.href} className="border border-border px-4 py-4">
          <Link
            href={item.href}
            className="focus-ring jp-serif text-base text-text underline-offset-4 hover:underline"
          >
            {item.title}
          </Link>
          <p className="mt-2 text-xs text-text-faint">{item.note}</p>
        </article>
      ))}
    </aside>
  );
}
