import Link from "next/link";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import {
  bodyMaintenance,
  breakdownTypes,
  foodProvisionModes,
  fourMaintenanceCards,
  indexedMaintenanceStatus,
  infrastructureCompare,
  maintenanceFunctions,
  maintenanceGaps,
  maintenanceLayers,
  maintenanceObservationProfiles,
  paidUnpaidRows,
  studyHousehold,
  successShift,
  supportActors,
} from "@/data/observations/maintenance-is-not-background";
import { maintenanceEvents } from "@/data/maintenance-events";

const WRITER_COLS = [
  { key: "kafu", label: "Kafū" },
  { key: "nishimura", label: "Nishimura" },
  { key: "bukowski", label: "Bukowski" },
  { key: "hayashi", label: "Hayashi" },
] as const;

const PROFILE_NAMES: Record<string, string> = {
  "writer-kafu": "Kafū",
  "writer-nishimura": "Nishimura",
  "writer-bukowski": "Bukowski",
  "writer-hayashi": "Hayashi",
};

export function MaintenanceFunctionsPanel() {
  return (
    <aside className="not-prose my-10">
      <div className="flex flex-wrap items-center gap-3">
        <p className="label">What counts as maintenance?</p>
      </div>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        何を、生活維持と呼ぶのか
      </p>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {maintenanceFunctions.map((fn) => (
          <li
            key={fn.id}
            className="border border-border px-4 py-3 text-sm text-text-soft"
          >
            <span className="editorial text-base text-text">{fn.label}</span>
            <span className="jp-serif mt-1 block text-xs text-text-faint">
              {fn.labelJa}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 max-w-2xl text-xs text-text-faint">
        Maintenance を家事だけに限定しない。記録と時代によって可視性が異なる。
      </p>
    </aside>
  );
}

export function MaintenanceLayerModel() {
  return (
    <aside className="not-prose my-12 border border-border px-5 py-6 md:px-6">
      <div className="flex flex-wrap items-center gap-3">
        <p className="label">The layers beneath writing</p>
        <EpistemicLabel kind="interpretation" />
      </div>
      <p className="jp-serif mt-1 text-sm text-text-faint">執筆の下にある層</p>
      <ol className="mt-6 flex flex-col">
        {maintenanceLayers.map((layer, i) => (
          <li key={layer.id} className="flex flex-col items-start">
            <span className="border border-border px-3 py-2 text-sm text-text-soft">
              <span className="block">{layer.label}</span>
              <span className="jp-serif mt-0.5 block text-xs text-text-faint">
                {layer.labelJa}
              </span>
            </span>
            {i < maintenanceLayers.length - 1 && (
              <span className="px-3 py-1 text-xs text-accent" aria-hidden>
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>
    </aside>
  );
}

export function FourMaintenanceProfiles() {
  return (
    <aside className="not-prose my-12">
      <p className="label">Four maintenance profiles</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">四人の生活維持プロファイル</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {fourMaintenanceCards.map((card) => {
          const profile = maintenanceObservationProfiles.find(
            (p) => p.writerId === card.writerId,
          );
          return (
            <article
              key={card.writerId}
              className="border border-border px-4 py-5 text-sm"
            >
              <p className="label">{card.name}</p>
              <p className="mt-3 text-xs text-text-faint">
                Primary visible maintenance
              </p>
              <p className="mt-1 text-text-soft">{card.primary}</p>
              <p className="jp-serif text-xs text-accent">{card.primaryJa}</p>
              <ul className="mt-4 space-y-1 text-xs text-text-faint">
                {card.items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-text-faint">
                Unknown: {card.unknown}
              </p>
              {profile && (
                <dl className="mt-4 space-y-1 border-t border-border-soft pt-3 text-[0.65rem] text-text-faint">
                  <div>Paid work: {profile.paidWork}</div>
                  <div>Domestic: {profile.domesticWork}</div>
                  <div>Self: {profile.selfMaintenance}</div>
                </dl>
              )}
            </article>
          );
        })}
      </div>
    </aside>
  );
}

export function FoodProvisionPanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Food provision panel</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {foodProvisionModes.map((mode) => (
          <li
            key={mode.id}
            className="border border-border px-3 py-3 text-sm text-text-soft"
          >
            {mode.label}
            <span className="jp-serif mt-1 block text-xs text-text-faint">
              {mode.labelJa}
            </span>
            <span className="mt-2 block text-[0.65rem] text-text-faint">
              Actor Facts: Not indexed across writers
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function MaintenanceSupportMap() {
  return (
    <aside className="not-prose my-12">
      <p className="label">Who supported the writer’s day?</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        誰が、作家の一日を支えたのか
      </p>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {supportActors.map((actor) => (
          <li
            key={actor.id}
            className="border border-border px-3 py-3 text-sm text-text-soft"
          >
            <span className="editorial text-base text-text">{actor.label}</span>
            <span className="jp-serif mt-1 block text-xs text-text-faint">
              {actor.labelJa}
            </span>
            <span className="mt-2 block text-[0.65rem] text-text-faint">
              {actor.status}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 max-w-2xl text-xs text-text-faint">
        Known support / Possible system support / Unknown person / Not indexed
        を推測で埋めない。
      </p>
    </aside>
  );
}

export function StudyHouseholdComparison() {
  return (
    <aside className="not-prose my-10 grid gap-4 md:grid-cols-2">
      <div className="border border-border px-4 py-5">
        <p className="label">Study</p>
        <p className="jp-serif mt-1 text-xs text-text-faint">書斎</p>
        <ul className="mt-4 space-y-1 text-sm text-text-soft">
          {studyHousehold.study.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </div>
      <div className="border border-border px-4 py-5">
        <p className="label">Household</p>
        <p className="jp-serif mt-1 text-xs text-text-faint">生活空間</p>
        <ul className="mt-4 space-y-1 text-sm text-text-soft">
          {studyHousehold.household.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function PaidUnpaidVisibilityMatrix() {
  return (
    <aside className="not-prose my-12">
      <p className="label">Paid / unpaid visibility matrix</p>
      <div className="mt-6 hidden overflow-x-auto lg:block">
        <table className="min-w-[42rem] w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-3 py-3 text-xs text-text-faint">Axis</th>
              {WRITER_COLS.map((c) => (
                <th key={c.key} className="px-3 py-3 text-xs text-text-soft">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paidUnpaidRows.map((row) => (
              <tr key={row.id} className="border-b border-border-soft">
                <th className="px-3 py-3 align-top text-xs text-text-faint">
                  {row.label}
                </th>
                {WRITER_COLS.map((c) => (
                  <td
                    key={c.key}
                    className="px-3 py-3 align-top text-text-soft"
                  >
                    {row.cells[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 space-y-3 lg:hidden">
        {WRITER_COLS.map((c) => (
          <article key={c.key} className="border border-border px-4 py-4">
            <p className="editorial text-lg">{c.label}</p>
            <dl className="mt-4 space-y-3">
              {paidUnpaidRows.map((row) => (
                <div key={row.id}>
                  <dt className="text-xs text-text-faint">{row.label}</dt>
                  <dd className="mt-1 text-sm text-text-soft">
                    {row.cells[c.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </aside>
  );
}

export function MaintenanceBreakdownPanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Maintenance breakdown panel</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {breakdownTypes.map((b) => (
          <li
            key={b.id}
            className="border border-border px-3 py-3 text-sm text-text-soft"
          >
            {b.label}
            <span className="jp-serif mt-1 block text-xs text-text-faint">
              {b.labelJa}
            </span>
            {"note" in b && b.note && (
              <span className="mt-2 block text-[0.65rem] text-text-faint">
                {b.note}
              </span>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-text-faint">
        医学的・心理的因果は推測しない。壊れたときに見える層として扱う。
      </p>
    </aside>
  );
}

export function BodyMaintenancePanel() {
  return (
    <aside className="not-prose my-10">
      <p className="label">The body must also be maintained</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        身体もまた、維持されなければならない
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {bodyMaintenance.map((b) => (
          <article key={b.name} className="border border-border px-4 py-4">
            <p className="label">{b.name}</p>
            <ul className="mt-3 space-y-1 text-sm text-text-faint">
              {b.items.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </aside>
  );
}

export function SuccessMaintenanceShiftPanel() {
  return (
    <aside className="not-prose my-10 grid gap-4 md:grid-cols-2">
      <div className="border border-border px-4 py-5">
        <p className="label">Before success</p>
        <ul className="mt-4 space-y-1 text-sm text-text-soft">
          {successShift.before.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </div>
      <div className="border border-border px-4 py-5">
        <p className="label">After success</p>
        <ul className="mt-4 space-y-1 text-sm text-text-soft">
          {successShift.after.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </div>
      <p className="md:col-span-2 text-xs text-text-faint">
        作家ごとの支援移行は、確認済み資料がある場合のみ Fact。モデルは
        Interpretation。
      </p>
    </aside>
  );
}

export function VisibleInvisibleInfrastructure() {
  return (
    <aside className="not-prose my-10 grid gap-4 md:grid-cols-2">
      <div className="border border-border px-4 py-5">
        <p className="label">Visible infrastructure</p>
        <ul className="mt-4 space-y-1 text-sm text-text-soft">
          {infrastructureCompare.visible.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </div>
      <div className="border border-border px-4 py-5">
        <p className="label">Less visible infrastructure</p>
        <ul className="mt-4 space-y-1 text-sm text-text-soft">
          {infrastructureCompare.lessVisible.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function IndexedMaintenanceRecords() {
  return (
    <aside className="not-prose my-12">
      <h3 className="editorial text-2xl text-text">Indexed maintenance records</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        索引化された生活維持記録
      </p>
      <ul className="mt-6 space-y-3">
        {indexedMaintenanceStatus.map((row) => (
          <li key={row.writer} className="border border-border px-4 py-4">
            <p className="label">{row.writer}</p>
            <p className="mt-2 text-sm text-text-soft">{row.focus}</p>
            {row.href ? (
              <Link
                href={row.href}
                className="focus-ring mt-2 inline-block text-sm text-accent underline-offset-4 hover:underline"
              >
                {row.date}
              </Link>
            ) : (
              <p className="mt-2 text-sm text-text-faint">{row.date}</p>
            )}
            <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
              {row.status}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <p className="label">Maintenance events (seed)</p>
        <ul className="mt-4 space-y-2">
          {maintenanceEvents.map((e) => (
            <li
              key={e.id}
              className="border border-border-soft px-3 py-3 text-xs text-text-faint"
            >
              <span className="text-text-soft">
                {PROFILE_NAMES[e.writerId] ?? e.writerId}
              </span>
              {" · "}
              {e.category}
              {" · "}
              {e.action}
              {" · actor: "}
              {e.actorStatus}
              {" · "}
              {e.verificationStatus}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <p className="label">Maintenance gaps</p>
        <ul className="mt-4 space-y-2">
          {maintenanceGaps.map((g) => (
            <li
              key={g.id}
              className="border border-dashed border-border px-3 py-3 text-xs text-text-faint"
            >
              <span className="text-text-soft">{g.questionJa}</span>
              {" — "}
              {g.verificationStatus}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function MaintenanceRelatedCta() {
  return (
    <aside className="not-prose my-14 border border-border px-6 py-8 md:px-8">
      <p className="label">Related comparison</p>
      <h3 className="editorial mt-3 text-2xl text-text md:text-3xl">
        See the four-life comparison
      </h3>
      <p className="jp-heading mt-2 text-lg">四人の生活構造を見る</p>
      <p className="mt-4 max-w-2xl text-sm text-text-soft">
        This essay interprets maintenance as infrastructure. The comparison page
        exposes the data structure behind the argument.
      </p>
      <p className="jp-serif mt-2 max-w-2xl text-sm text-text-faint">
        この記事は、生活維持をインフラとして読む。比較ページでは、その背後のデータ構造を確認できる。
      </p>
      <Link
        href="/compare/four-urban-lives"
        className="focus-ring mt-8 inline-flex cta cta-secondary"
      >
        Open Four Urban Lives
      </Link>
      <ul className="mt-10 space-y-2 text-sm">
        {[
          {
            href: "/observations/the-house-that-remained",
            title: "残った家、消えた部屋",
          },
          {
            href: "/observations/the-price-of-an-ordinary-day",
            title: "一日の値段",
          },
          {
            href: "/observations/three-cities-three-speeds",
            title: "三つの都市、三つの生活速度",
          },
          {
            href: "/observations/before-the-platform-small-press",
            title: "プラットフォーム以前の小出版",
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
