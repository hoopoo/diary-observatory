import Link from "next/link";

export function FeaturedComparisonCard({
  title,
  subtitle,
  description,
  href,
  cta = "Open comparison",
}: {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  cta?: string;
}) {
  return (
    <article className="border border-border px-6 py-8 md:px-8 md:py-10">
      <p className="label">Featured Comparison</p>
      <h2 className="editorial mt-4 text-3xl text-text md:text-4xl">{title}</h2>
      <p className="mt-3 text-sm tracking-wide text-text-faint">{subtitle}</p>
      <p className="editorial mt-6 text-xl text-accent">{description}</p>
      <Link
        href={href}
        className="focus-ring mt-8 inline-flex border border-text bg-text px-5 py-2.5 text-xs tracking-wide text-bg"
      >
        {cta}
      </Link>
    </article>
  );
}
