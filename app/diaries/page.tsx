import type { Metadata } from "next";
import { DiaryCard } from "@/components/DiaryCard";
import { diaries } from "@/data/diaries";

export const metadata: Metadata = {
  title: "Diaries",
  description: "Diary works indexed by Diary Observatory.",
};

export default function DiariesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <p className="label">Diaries</p>
      <h1 className="editorial mt-3 text-4xl text-text">Diaries</h1>
      <p className="jp-serif mt-3 max-w-2xl text-text-soft">
        日記作品一覧。長い本文転載は行わず、作品単位の観測入口として扱う。
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {diaries.map((diary) => (
          <DiaryCard key={diary.id} diary={diary} />
        ))}
      </div>
    </div>
  );
}
