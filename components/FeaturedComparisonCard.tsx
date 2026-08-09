import { CtaLink } from "@/components/ui/CtaLink";

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
      <CtaLink href={href} variant="primary" size="md" arrow className="mt-8">
        {cta}
      </CtaLink>
    </article>
  );
}
