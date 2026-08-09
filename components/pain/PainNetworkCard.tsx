import Link from "next/link";
import type { PainNetworkNode } from "@/lib/pain";

export function PainNetworkCard({ node }: { node: PainNetworkNode }) {
  return (
    <Link
      href={node.path}
      className="focus-ring group flex h-full flex-col border border-border bg-bg-raised px-6 py-7 transition-colors hover:border-text-faint"
    >
      <p className="label">{node.layer}</p>
      <h3 className="jp-heading mt-3 text-xl leading-snug group-hover:text-accent">
        {node.title}
      </h3>
      <p className="editorial mt-2 text-sm text-accent">{node.titleAlt}</p>
      <p className="jp-serif mt-4 flex-1 text-sm text-text-soft">
        {node.cardBlurb}
      </p>
      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tags">
        {node.tags.slice(0, 4).map((tag) => (
          <li key={tag} className="filter-chip text-[0.68rem]">
            {tag}
          </li>
        ))}
      </ul>
      <span className="mt-5 text-xs text-accent" aria-hidden="true">
        Open observation →
      </span>
    </Link>
  );
}
