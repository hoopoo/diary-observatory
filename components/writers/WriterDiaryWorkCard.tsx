import Link from "next/link";

export function WriterDiaryWorkCard({
  work,
}: {
  work: {
    title: string;
    titleEn?: string;
    titleJa?: string;
    type: string;
    periodLabel: string;
    language: string;
    description: string;
    statusLabel: string;
    verificationLabel: string;
    href: string;
  };
}) {
  return (
    <Link
      href={work.href}
      className="focus-ring group paper-panel block p-6 transition-colors hover:border-text-faint"
    >
      <p className="label">{work.type}</p>
      <h3 className="jp-heading mt-3 text-2xl text-text group-hover:opacity-85">
        {work.title}
      </h3>
      {work.titleEn && (
        <p className="mt-1 text-sm text-text-faint">{work.titleEn}</p>
      )}
      {work.titleJa && (
        <p className="jp-serif mt-1 text-sm text-accent">{work.titleJa}</p>
      )}
      <p className="mt-4 text-xs text-text-faint">
        {work.periodLabel} · {work.language}
      </p>
      <p className="jp-serif mt-4 text-sm text-text-soft">{work.description}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-[0.65rem] tracking-wide">
        <span className="border border-border px-2 py-1 text-text-soft">
          {work.statusLabel}
        </span>
        <span className="border border-accent/40 px-2 py-1 text-accent">
          {work.verificationLabel}
        </span>
        <span className="border border-border px-2 py-1 text-text-faint">
          書誌情報確認中
        </span>
      </div>
    </Link>
  );
}
