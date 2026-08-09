import Link from "next/link";

export function FeaturedEssayCard({
  title,
  subtitle,
  href,
  cta = "Read observation",
}: {
  title: string;
  subtitle: string;
  href: string;
  cta?: string;
}) {
  return (
    <article className="border border-border px-6 py-8 md:px-8 md:py-10">
      <p className="label">Featured Essay</p>
      <h2 className="editorial mt-4 text-3xl text-text md:text-4xl">{title}</h2>
      <p className="jp-serif mt-3 text-base text-text-soft">{subtitle}</p>
      <Link
        href={href}
        className="focus-ring mt-8 inline-flex border border-text bg-text px-5 py-2.5 text-xs tracking-wide text-bg"
      >
        {cta}
      </Link>
    </article>
  );
}
