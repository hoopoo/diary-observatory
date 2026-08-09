import Link from "next/link";

export function DiaryComparisonCard({
  href = "/compare/kafu-nishimura",
}: {
  href?: string;
}) {
  return (
    <section className="my-14 paper-panel p-6 md:p-8">
      <p className="label">Comparative reading</p>
      <h2 className="editorial mt-3 text-2xl text-text">
        From Kafū to Nishimura
      </h2>
      <p className="jp-heading mt-2 text-lg">荷風から西村へ</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Link
          href="/writers/kafu-nagai"
          className="focus-ring border border-border-soft px-4 py-5 hover:border-text-faint"
        >
          <p className="editorial text-xl text-text">Kafū Nagai</p>
          <p className="jp-serif mt-1 text-sm text-accent">永井荷風</p>
          <p className="mt-3 text-xs leading-relaxed text-text-faint">
            Weather / Walking / Garden / War / Old Tokyo
          </p>
        </Link>
        <Link
          href="/writers/kenji-nishimura"
          className="focus-ring border border-border-soft px-4 py-5 hover:border-text-faint"
        >
          <p className="editorial text-xl text-text">Kenji Nishimura</p>
          <p className="jp-serif mt-1 text-sm text-accent">西村賢太</p>
          <p className="mt-3 text-xs leading-relaxed text-text-faint">
            Publishing / Television / Used Bookstores / Late-Heisei Tokyo
          </p>
        </Link>
      </div>

      <div className="jp-body mt-6 space-y-3 text-sm">
        <p>荷風の日記には、近代東京が消えていく過程が残った。</p>
        <p>
          西村の日記には、平成の出版、テレビ、書店文化が消えていく直前の姿が残っている。
        </p>
      </div>

      <Link
        href={href}
        className="focus-ring mt-6 inline-flex cta cta-secondary"
      >
        Compare the two diaries
      </Link>
    </section>
  );
}
