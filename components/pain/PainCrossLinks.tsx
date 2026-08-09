import Link from "next/link";
import { crossLinksFor, type PainNetworkKey } from "@/lib/pain";

export function PainCrossLinks({ from }: { from: PainNetworkKey }) {
  const links = crossLinksFor(from);
  return (
    <section
      className="my-16 border-t border-border pt-10"
      aria-labelledby="network-heading"
    >
      <p className="label">Observation network</p>
      <h2 id="network-heading" className="editorial mt-2 text-2xl text-text">
        Continue across the network
      </h2>
      <p className="jp-serif mt-2 text-sm text-text-faint">
        同じ現象を、別の観測レイヤーから読む。
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="focus-ring group flex flex-col border border-border px-5 py-6 transition-colors hover:border-text-faint"
          >
            <span className="label">{link.label}</span>
            <span className="jp-heading mt-3 text-lg leading-snug group-hover:text-accent">
              {link.title}
            </span>
            <span className="jp-serif mt-3 text-sm text-text-soft">
              {link.description}
            </span>
            <span
              className="mt-4 text-xs text-accent"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
