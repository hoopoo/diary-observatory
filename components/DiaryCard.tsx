import Link from "next/link";
import { getWriterById } from "@/data/writers";
import type { DiaryWork } from "@/lib/types";

export function DiaryCard({ diary }: { diary: DiaryWork }) {
  const writer = getWriterById(diary.writerId);
  const years = diary.endYear
    ? `${diary.startYear}–${diary.endYear}`
    : `${diary.startYear}–`;

  return (
    <Link
      href={`/diaries/${diary.slug}`}
      className="focus-ring group paper-panel flex h-full flex-col gap-3 p-6 transition-colors hover:border-text-faint"
    >
      <p className="label">{years}</p>
      <h3 className="editorial text-xl text-text group-hover:opacity-80">
        {diary.title}
      </h3>
      <p className="jp-serif text-sm text-accent">{diary.titleOriginal}</p>
      {writer && (
        <p className="text-xs text-text-faint">
          {writer.name} / {writer.nameJa}
        </p>
      )}
      <p className="mt-auto text-sm text-text-soft line-clamp-3">
        {diary.descriptionJa}
      </p>
    </Link>
  );
}
