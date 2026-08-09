import type { Metadata } from "next";
import { WriterCard } from "@/components/WriterCard";
import { WriterConditionsRow } from "@/components/WriterConditionsRow";
import { futureWriters, writers } from "@/data/index";

export const metadata: Metadata = {
  title: "Writers",
  description:
    "Writers observed by Diary Observatory — Kafū Nagai, Kenji Nishimura, Charles Bukowski, Fumiko Hayashi, Roppa Furukawa, and Ichiyō Higuchi.",
};

export default function WritersPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <p className="label">Writers</p>
      <h1 className="editorial mt-3 text-4xl text-text md:text-5xl">Writers</h1>
      <p className="jp-serif mt-3 max-w-2xl text-text-soft">
        書き手たち。六人の生活から、「普通の一日」の異なる構造を見る。
      </p>
      <p className="mt-3 max-w-2xl text-sm text-text-faint">
        Six lives, six different structures of an ordinary day.
      </p>

      <div className="mt-8">
        <WriterConditionsRow />
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {writers.map((writer) => (
          <WriterCard key={writer.id} writer={writer} />
        ))}
      </div>

      <section className="mt-14 border border-border-soft px-5 py-5">
        <h2 className="label">Future subjects / research candidates</h2>
        <p className="mt-3 text-sm leading-relaxed text-text-faint">
          {futureWriters.join(" · ")}
        </p>
        <p className="mt-3 text-xs text-text-faint">
          Candidates such as Franz Kafka, Virginia Woolf, and Samuel Pepys remain
          research queue only — no public Writer cards until diary corpus and a
          distinct observation axis are ready.
        </p>
      </section>
    </div>
  );
}
