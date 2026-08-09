import { CtaLink } from "@/components/ui/CtaLink";

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
      <CtaLink href={href} variant="text" arrow className="mt-8">
        {cta}
      </CtaLink>
    </article>
  );
}
