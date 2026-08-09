import { ParallelDayCard } from "@/components/compare/ParallelDayCard";

export function ParallelRecordPanel({
  title,
  titleJa,
  noteEn,
  noteJa,
  left,
  right,
}: {
  title: string;
  titleJa: string;
  noteEn: string;
  noteJa: string;
  left: {
    date: string;
    writer: string;
    summary: string;
    verification: string;
    href: string;
    coming?: boolean;
  };
  right: {
    date: string;
    writer: string;
    summary: string;
    verification: string;
    href: string;
    coming?: boolean;
  };
}) {
  return (
    <section>
      <h2 className="editorial text-2xl text-text md:text-3xl">{title}</h2>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <ParallelDayCard {...left} />
        <ParallelDayCard {...right} />
      </div>
      <p className="mt-6 max-w-2xl text-sm text-text-soft">{noteEn}</p>
      <p className="jp-serif mt-1 max-w-2xl text-sm text-text-faint">{noteJa}</p>
    </section>
  );
}
