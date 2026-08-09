import type { Metadata } from "next";
import Link from "next/link";
import {
  getLinkRotAuditSummary,
  getSourcesNeedingMaintenance,
  getSourcesWithChangedState,
} from "@/lib/sources";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Link Rot Register｜Diary Observatory" },
  description:
    "Sources that changed state — redirects, removals, archives, and fragments. Empty until a real state change is observed.",
  openGraph: {
    title: "Link Rot Register｜Diary Observatory",
    description:
      "状態が変化した資料のレジスタ。架空の broken URL は登録しない。",
    type: "website",
    url: `${SITE_URL}/sources/link-rot`,
  },
};

export default function LinkRotRegisterPage() {
  const changed = getSourcesWithChangedState();
  const maintenance = getSourcesNeedingMaintenance();
  const audit = getLinkRotAuditSummary();

  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-14 md:px-8 md:py-20">
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
            Link Rot
          </li>
        </ol>
      </nav>

      <header className="mt-8 border-b border-border pb-10">
        <p className="label">Sources that changed state</p>
        <h1 className="editorial mt-3 text-4xl text-text md:text-5xl">
          Link Rot Register
        </h1>
        <p className="jp-heading mt-3 text-2xl">状態が変化した資料</p>
        <p className="mt-4 max-w-2xl text-sm text-text-soft">
          リンク切れを歴史から削除しない。その死と移転と断片を記録する。
        </p>
        <p className="mt-2 text-xs text-text-faint">
          Related observation:{" "}
          <Link
            href="/observations/link-rot-is-archive-history"
            className="underline-offset-4 hover:underline"
          >
            リンク切れもまた資料史である
          </Link>
        </p>
      </header>

      <section className="my-10">
        <h2 className="editorial text-2xl text-text">Audit snapshot</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(
            [
              ["Unchecked links", audit.uncheckedLinks],
              ["Broken links", audit.brokenLinks],
              ["Redirected links", audit.redirectedLinks],
              ["State events", audit.stateEvents],
              ["Archive captures", audit.archiveCaptures],
              ["Survival fragments", audit.survivalFragments],
            ] as const
          ).map(([label, value]) => (
            <li key={label} className="border border-border px-4 py-4">
              <p className="label">{label}</p>
              <p className="editorial mt-2 text-3xl text-text">{value}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-accent">
          ネットワーク到達確認をこのページで実行していない。Unchecked を Reachable にしない。
        </p>
      </section>

      <section className="my-10">
        <h2 className="editorial text-2xl text-text">Register</h2>
        {changed.length === 0 ? (
          <div className="mt-6 border border-dashed border-border px-5 py-8">
            <p className="editorial text-xl text-text">
              No sources with registered state changes yet.
            </p>
            <p className="jp-heading mt-2 text-lg">
              状態変化が記録された資料は、まだありません。
            </p>
            <p className="mt-4 text-sm text-text-faint">
              Source · Previous state · Current state · Last known URL · Archive
              status · Affected claims · Affected entries · Last checked ·
              Research action — が表示される予定です。架空の404は作りません。
            </p>
          </div>
        ) : (
          <ul className="mt-6 space-y-3">
            {changed.map((s) => (
              <li key={s.id} className="border border-border px-4 py-3 text-sm">
                <Link
                  href={s.slug ? `/sources/${s.slug}` : "/sources"}
                  className="underline-offset-4 hover:underline"
                >
                  {s.titleJa ?? s.title ?? s.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="my-10">
        <h2 className="editorial text-2xl text-text">Maintenance queue</h2>
        {maintenance.length === 0 ? (
          <p className="mt-4 text-sm text-text-faint">
            Open SourceMaintenanceTask: 0
          </p>
        ) : (
          <ul className="mt-4 space-y-2 text-sm">
            {maintenance.map((s) => (
              <li key={s.id}>{s.label}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
