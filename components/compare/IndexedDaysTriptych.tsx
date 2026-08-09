import { ParallelDayCard } from "@/components/compare/ParallelDayCard";

export function IndexedDaysTriptych({
  title,
  titleJa,
  days,
  note,
}: {
  title: string;
  titleJa: string;
  days: Array<{
    writerId: string;
    date: string;
    summary: string;
    href: string;
    coming?: boolean;
    verification: string;
    writerName: string;
  }>;
  note: string;
}) {
  return (
    <section>
      <h2 className="editorial text-2xl text-text md:text-3xl">{title}</h2>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {days.map((day) => (
          <ParallelDayCard
            key={day.writerId}
            date={day.date}
            writer={day.writerName}
            summary={day.summary}
            verification={day.verification}
            href={day.href}
            coming={day.coming}
          />
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-xs text-text-faint">{note}</p>
    </section>
  );
}
