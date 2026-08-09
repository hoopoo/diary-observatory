import Link from "next/link";
import { VerificationStatusBadge } from "@/components/research/VerificationStatusBadge";
import {
  getAllSources,
  getSourceDisplayTitle,
  getSourceIndexStatistics,
  getSourceUsage,
} from "@/lib/sources";

const KIND_LABEL: Record<string, string> = {
  "primary-text": "Primary textual",
  bibliography: "Bibliographic",
  archive: "Archival",
  performance: "Performance",
  "contemporary-media": "Contemporary media",
  institution: "Institutional",
  scholarly: "Scholarly",
  biography: "Biographical",
  commercial: "Commercial",
  "digital-platform": "Digital platform",
  other: "Other",
};

export function SourceIndex() {
  const sources = getAllSources();
  const stats = getSourceIndexStatistics();

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
          <li className="text-text-soft" aria-current="page">
            Sources
          </li>
        </ol>
      </nav>

      <header className="mt-8 border-b border-border pb-12">
        <p className="label">Source registry</p>
        <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
          Sources
        </h1>
        <p className="jp-heading mt-3 text-2xl">資料</p>
        <p className="mt-4 text-sm text-text-soft">
          The evidence behind entries, observations, editions, and claims.
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          Entry、Observation、Edition、事実主張を支える資料。
        </p>
        <p className="mt-4 text-xs">
          <Link
            href="/sources/link-rot"
            className="underline-offset-4 hover:underline"
          >
            Link Rot Register — 状態が変化した資料
          </Link>
          {" · "}
          <Link
            href="/observations/screenshot-is-not-provenance"
            className="underline-offset-4 hover:underline"
          >
            Screenshot evidence
          </Link>
          {" · "}
          <Link
            href="/observations/link-rot-is-archive-history"
            className="underline-offset-4 hover:underline"
          >
            Observation
          </Link>
        </p>
        <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem] text-text-soft">
          <p>Diary Observatoryは、日記の内容だけを保存しない。</p>
          <p>どの本を読んだか。どの版を使ったか。どのページを確認したか。</p>
          <p>
            資料から事実へ至る経路そのものを記録する。
          </p>
        </div>
      </header>

      <section className="my-10 border-b border-border pb-10">
        <h2 className="label">Source index statistics</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Total sources", stats.total],
            ["Primary sources", stats.primary],
            ["Secondary sources", stats.secondary],
            ["Verified sources", stats.verified],
            ["Partially verified", stats.partial],
            ["Source needed", stats.needed],
            ["Sources with captures", stats.withCaptures],
            ["Sources with conflicts", stats.withConflicts],
            ["Unused sources", stats.unused],
            ["Rights under review", stats.rightsReview],
            ["Unchecked links", stats.uncheckedLinks],
            ["Examined copies", stats.examinedCopies],
          ].map(([label, value]) => (
            <li key={label as string} className="border border-border px-4 py-4">
              <p className="label">{label}</p>
              <p className="editorial mt-2 text-3xl text-text">{value}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-text-faint">
          Filters for source state / broken / redirected / archive are available
          conceptually via{" "}
          <Link href="/sources/link-rot" className="underline-offset-4 hover:underline">
            /sources/link-rot
          </Link>
          . Web以外のSourceをBroken扱いしない。UncheckedはReachableにしない。
        </p>
      </section>

      {sources.length === 0 ? (
        <section className="my-14 border border-border px-5 py-8">
          <h2 className="editorial text-2xl text-text">
            No public sources have been registered.
          </h2>
          <p className="jp-heading mt-2 text-lg">
            公開資料は、まだ登録されていません。
          </p>
        </section>
      ) : (
        <section className="my-14">
          <h2 className="editorial text-2xl text-text">Registered sources</h2>
          <p className="jp-heading mt-2 text-lg">登録済み資料</p>
          <p className="mt-4 max-w-2xl text-sm text-text-faint">
            URL付きで書誌・機関が確認できる資料のみを掲載。needed
            プレースホルダや内部メモは公開しない。
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {sources.map((source) => {
              const usage = getSourceUsage(source.id);
              const claimCount =
                usage.factClaimCount +
                (source.bibliographicClaimIds?.length ?? 0);
              return (
                <li key={source.id}>
                  <article className="flex h-full flex-col border border-border px-5 py-5">
                    <div className="flex flex-wrap gap-2">
                      {source.status && (
                        <VerificationStatusBadge status={source.status} />
                      )}
                      {source.kind && (
                        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
                          {KIND_LABEL[source.kind] ?? source.kind}
                        </span>
                      )}
                      {source.sourceLevel && (
                        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
                          {source.sourceLevel}
                        </span>
                      )}
                    </div>
                    <h3 className="editorial mt-3 text-xl text-text">
                      {getSourceDisplayTitle(source)}
                    </h3>
                    <dl className="mt-4 space-y-2 text-xs text-text-faint">
                      <div>
                        <dt className="label">Publisher / institution</dt>
                        <dd className="mt-1 text-text-soft">
                          {source.publisher ??
                            source.institution ??
                            "—"}
                        </dd>
                      </div>
                      <div>
                        <dt className="label">Reliability</dt>
                        <dd className="mt-1 text-text-soft">
                          {source.reliability ?? "unknown"}
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
                        <dt className="label">Supported claims</dt>
                        <dd className="mt-1 text-text-soft">{claimCount}</dd>
                      </div>
                      <div>
                        <dt className="label">Used pages</dt>
                        <dd className="mt-1 text-text-soft">
                          {usage.researchWorkspaces.length +
                            usage.editions.length +
                            usage.diaryWorks.length}{" "}
                          linked surfaces
                        </dd>
                      </div>
                      <div>
                        <dt className="label">Last checked</dt>
                        <dd className="mt-1 text-text-soft">
                          {source.lastCheckedAt ?? "Not checked"}
                        </dd>
                      </div>
                    </dl>
                    <Link
                      href={`/sources/${source.slug}`}
                      className="focus-ring mt-6 inline-flex self-start border border-text bg-text px-4 py-2 text-xs text-bg"
                    >
                      View source
                    </Link>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}
