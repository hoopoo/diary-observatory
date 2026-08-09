import Link from "next/link";
import { VerificationStatusBadge } from "@/components/research/VerificationStatusBadge";
import { getAllEditions, getEditionContext } from "@/lib/editions";

const BASE_LABEL: Record<string, string> = {
  selected: "Selected base",
  provisional: "Provisional base",
  alternative: "Alternative",
  comparison: "Comparison",
  rejected: "Rejected as base",
  "under-review": "Under review",
  "not-evaluated": "Not evaluated",
};

export function EditionIndex() {
  const editions = getAllEditions();
  const verifiedCount = editions.filter(
    (e) => e.verificationStatus === "verified",
  ).length;

  const byWriter = new Map<string, typeof editions>();
  for (const edition of editions) {
    const { writers, work } = getEditionContext(edition);
    const key =
      writers[0]?.nameJa ?? writers[0]?.name ?? work?.writerId ?? "Unknown";
    const list = byWriter.get(key) ?? [];
    list.push(edition);
    byWriter.set(key, list);
  }

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
            Editions
          </li>
        </ol>
      </nav>

      <header className="mt-8 border-b border-border pb-12">
        <p className="label">Edition observatory</p>
        <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
          Editions
        </h1>
        <p className="jp-heading mt-3 text-2xl">版</p>
        <p className="mt-6 max-w-2xl text-sm text-text-soft">
          A work title does not identify a text. An edition does.
        </p>
        <p className="jp-serif mt-2 max-w-2xl text-sm text-text-faint">
          作品名だけでは読んだ本文を特定できない。本文を特定するのは、版である。
        </p>
        <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-3">
          <div>
            <dt className="label">Registered editions</dt>
            <dd className="mt-1 text-text-soft">{editions.length}</dd>
          </div>
          <div>
            <dt className="label">Verified editions</dt>
            <dd className="mt-1 text-text-soft">{verifiedCount}</dd>
          </div>
          <div>
            <dt className="label">Writers with editions</dt>
            <dd className="mt-1 text-text-soft">{byWriter.size}</dd>
          </div>
        </dl>
      </header>

      {verifiedCount === 0 && (
        <section className="my-10 border border-border px-5 py-8">
          <h2 className="editorial text-2xl text-text">
            No verified editions have been registered.
          </h2>
          <p className="jp-heading mt-2 text-lg">
            確認済みの版は、まだ登録されていません。
          </p>
          <p className="mt-4 text-sm text-text-faint">
            Partial / indexing EditionRecords may appear below as research
            targets. They are not treated as verified base texts.
          </p>
        </section>
      )}

      {editions.length === 0 ? null : (
        <section className="my-14">
          <h2 className="editorial text-2xl text-text">By writer</h2>
          <p className="jp-heading mt-2 text-lg">作家別</p>
          {[...byWriter.entries()].map(([writerLabel, list]) => (
            <div key={writerLabel} className="mt-10">
              <h3 className="label">{writerLabel}</h3>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {list.map((edition) => {
                  const { work } = getEditionContext(edition);
                  return (
                    <li key={edition.id}>
                      <article className="flex h-full flex-col border border-border px-5 py-5">
                        <div className="flex flex-wrap items-center gap-2">
                          <VerificationStatusBadge
                            status={edition.verificationStatus}
                          />
                          <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
                            {edition.entrySuitability ?? "unknown"}
                          </span>
                        </div>
                        <h4 className="editorial mt-3 text-xl text-text">
                          {edition.titleJa ?? edition.title}
                        </h4>
                        <p className="mt-1 text-xs text-text-faint">
                          {edition.title}
                        </p>
                        <dl className="mt-4 space-y-2 text-xs text-text-faint">
                          <div>
                            <dt className="label">Diary work</dt>
                            <dd className="mt-1 text-text-soft">
                              {work?.titleOriginal ?? work?.title ?? edition.workId}
                            </dd>
                          </div>
                          <div>
                            <dt className="label">Publisher / year</dt>
                            <dd className="mt-1 text-text-soft">
                              {edition.publisher ?? "Source needed"}
                              {edition.publicationYear != null
                                ? ` · ${edition.publicationYear}`
                                : ""}
                            </dd>
                          </div>
                          <div>
                            <dt className="label">Base edition status</dt>
                            <dd className="mt-1 text-text-soft">
                              {BASE_LABEL[
                                edition.baseEditionStatus ?? "not-evaluated"
                              ]}
                            </dd>
                          </div>
                          <div>
                            <dt className="label">Access</dt>
                            <dd className="mt-1 text-text-soft">Not checked</dd>
                          </div>
                        </dl>
                        <Link
                          href={`/editions/${edition.slug}`}
                          className="focus-ring mt-6 inline-flex self-start border border-text bg-text px-4 py-2 text-xs text-bg"
                        >
                          View edition
                        </Link>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
