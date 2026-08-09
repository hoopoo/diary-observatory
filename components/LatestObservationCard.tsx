import { CtaLink } from "@/components/ui/CtaLink";

export function LatestObservationCard({
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
      <p className="label">Latest Observation</p>
      <h2 className="jp-heading mt-4 text-2xl text-text md:text-3xl">{title}</h2>
      <p className="mt-3 text-sm text-text-soft">{subtitle}</p>
      <CtaLink href={href} variant="text" arrow className="mt-8">
        {cta}
      </CtaLink>
    </article>
  );
}
