import type { Metadata } from "next";
import {
  PrimaryConditionsGrid,
  WriterConditionsRow,
} from "@/components/WriterConditionsRow";
import { WriterCard } from "@/components/WriterCard";
import { futureWriters, writers } from "@/data/index";

export const metadata: Metadata = {
  title: "Writers",
  description:
    "Nine lives, nine structures of an ordinary day — diaries and self-records observed through distinct Primary Conditions, not celebrity biography.",
};

export default function WritersPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <p className="label">Writers</p>
      <h1 className="editorial mt-3 text-4xl text-text md:text-5xl">Writers</h1>
      <p className="jp-serif mt-3 max-w-2xl text-text-soft">
        書き手たち。九人の生活から、「普通の一日」の異なる構造を見る。
      </p>
      <p className="mt-3 max-w-2xl text-sm text-text-faint">
        Nine lives, nine structures of an ordinary day.
      </p>
      <p className="mt-3 max-w-2xl text-xs text-text-faint">
        ここでいう Writer
        は職業としての作家だけを意味しない。日記や自己記録を書き残した人を含む。
      </p>

      <div className="mt-8">
        <WriterConditionsRow />
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {writers.map((writer) => (
          <WriterCard key={writer.id} writer={writer} />
        ))}
      </div>

      <div className="mt-10">
        <PrimaryConditionsGrid />
      </div>

      <section className="mt-14 border border-border-soft px-5 py-5">
        <h2 className="label">Future subjects / research candidates</h2>
        <p className="mt-3 text-sm leading-relaxed text-text-faint">
          {futureWriters.join(" · ")}
        </p>
        <p className="mt-3 text-xs text-text-faint">
          Research queue only — no public Writer cards until a distinct
          observation axis and bibliographic baseline are ready.
        </p>
      </section>
    </div>
  );
}
