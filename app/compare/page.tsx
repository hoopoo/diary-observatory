import type { Metadata } from "next";
import Link from "next/link";
import { SameDayComparison } from "@/components/SameDayComparison";
import { comparisons } from "@/data/comparisons";
import { writerGroupComparisons } from "@/data/comparisons/four-urban-lives";
import { getEntryById } from "@/data/entries";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "Writer comparisons and Same Day observations across diaries, cities, and lives.",
};

export default function ComparePage() {
  const groupComparisons = writerGroupComparisons.filter(
    (c) => c.category === "Group comparison",
  );
  const pairComparisons = writerGroupComparisons.filter(
    (c) => c.category === "Pair comparison",
  );

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <p className="label">Comparative Observatory</p>
      <h1 className="editorial mt-3 text-4xl text-text">Compare</h1>
      <p className="jp-serif mt-3 max-w-2xl text-text-soft">
        作家横断の比較と、同じ日付を複数の日記で読む Same Day。
      </p>

      <section className="mt-12 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text">Group comparison</h2>
        <p className="jp-heading mt-2 text-base">3人以上</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {groupComparisons.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="focus-ring block border border-border px-5 py-6 hover:border-text-faint"
            >
              <p className="label">{item.category}</p>
              <h3 className="editorial mt-3 text-2xl text-text">{item.title}</h3>
              <p className="jp-serif mt-1 text-sm text-accent">{item.titleJa}</p>
              <p className="mt-3 text-xs tracking-wide text-text-faint">
                {item.subtitle}
              </p>
              <p className="mt-4 text-sm text-text-soft">{item.description}</p>
              <p className="mt-4 text-xs text-text-faint">
                {item.themes.join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text">Pair comparison</h2>
        <p className="jp-heading mt-2 text-base">2人比較</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {pairComparisons.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="focus-ring block border border-border px-5 py-6 hover:border-text-faint"
            >
              <p className="label">{item.category}</p>
              <h3 className="editorial mt-3 text-2xl text-text">{item.title}</h3>
              <p className="jp-serif mt-1 text-sm text-accent">{item.titleJa}</p>
              <p className="mt-3 text-xs tracking-wide text-text-faint">
                {item.subtitle}
              </p>
              <p className="mt-4 text-sm text-text-soft">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <p className="label mt-14">Same Day, Different Lives</p>
      <h2 className="editorial mt-3 text-3xl text-text">Same Day</h2>
      <p className="jp-serif mt-3 max-w-2xl text-text-soft">
        同じ日付を複数の日記で比較する。一件だけの日も Open comparison
        として公開する。詳細は{" "}
        <Link
          href="/same-day"
          className="focus-ring text-accent underline-offset-4 hover:underline"
        >
          /same-day
        </Link>
        。
      </p>

      <div className="mt-10 space-y-8">
        {comparisons.map((item) => {
          const linkedEntries = item.entryIds
            .map((id) => getEntryById(id))
            .filter(Boolean);

          return (
            <section key={item.id} id={item.id} className="scroll-mt-24">
              <SameDayComparison items={[item]} />
              {linkedEntries.length > 0 && (
                <ul className="mt-3 space-y-1 px-1">
                  {linkedEntries.map(
                    (entry) =>
                      entry && (
                        <li key={entry.id}>
                          <Link
                            href={`/entries/${entry.slug ?? entry.date}`}
                            className="focus-ring text-xs text-text-faint underline-offset-4 hover:underline"
                          >
                            Linked entry: {entry.date}
                          </Link>
                        </li>
                      ),
                  )}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
