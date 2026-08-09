import type { Metadata } from "next";
import { WriterCard } from "@/components/WriterCard";
import { futureWriters, writers } from "@/data/index";

export const metadata: Metadata = {
  title: "Writers",
  description:
    "Writers observed by Diary Observatory — including Kenji Nishimura, Kafū Nagai, Charles Bukowski, Fumiko Hayashi, and future subjects.",
};

export default function WritersPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <p className="label">Writers</p>
      <h1 className="editorial mt-3 text-4xl text-text md:text-5xl">Writers</h1>
      <p className="jp-serif mt-3 max-w-2xl text-text-soft">
        日記・日録・手紙・闘病記の書き手を、個人の紹介ではなく、取り囲んでいた世界の入口として扱う。
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {writers.map((writer) => (
          <WriterCard key={writer.id} writer={writer} />
        ))}
      </div>

      <section className="mt-14 border border-border-soft px-5 py-5">
        <h2 className="label">Future subjects</h2>
        <p className="mt-3 text-sm leading-relaxed text-text-faint">
          {futureWriters.join(" · ")}
        </p>
      </section>
    </div>
  );
}
