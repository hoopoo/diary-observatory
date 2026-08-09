import Link from "next/link";
import { ProvenanceBadge } from "@/components/provenance/ProvenanceBadge";
import {
  getProvenanceCompleteness,
  getProvenanceTrailForFact,
  getSourcesForFact,
} from "@/lib/provenance";

export function ProvenanceDrawer({ factClaimId }: { factClaimId: string }) {
  const trail = getProvenanceTrailForFact(factClaimId);
  const { completeness, reasons } = getProvenanceCompleteness(factClaimId);
  const sources = getSourcesForFact(factClaimId);

  if (!trail) {
    return (
      <p className="mt-2 text-xs text-text-faint">
        Source path incomplete · 資料経路は未完成
      </p>
    );
  }

  const ancestry = trail.nodes.filter((n) =>
    trail.ancestryNodeIds.includes(n.id),
  );
  const chain = ancestry.filter(
    (n) =>
      n.nodeType === "fact-claim" ||
      n.nodeType === "source" ||
      n.nodeType === "unknown" ||
      n.nodeType === "entry" ||
      n.nodeType === "diary-work" ||
      n.nodeType === "writer",
  );

  return (
    <details className="mt-2 border border-border px-3 py-3">
      <summary className="focus-ring cursor-pointer text-xs text-text-soft">
        Trace evidence · 根拠をたどる
        <span className="ml-2">
          <ProvenanceBadge completeness={completeness} />
        </span>
      </summary>

      <div className="mt-4 space-y-4">
        <div>
          <p className="label">Why can we say this?</p>
          <p className="jp-serif mt-1 text-sm text-text-faint">
            なぜ、そう言えるのか
          </p>
        </div>

        <ol className="space-y-2">
          {chain.map((node, i) => (
            <li key={node.id} className="border border-border px-3 py-3">
              <p className="label">
                {i + 1}. {node.nodeType}
                {node.isUnknown ? " · unknown" : ""}
              </p>
              <p className="mt-1 text-sm text-text-soft">
                {node.labelJa ?? node.label}
              </p>
              {node.isUnknown && (
                <p className="mt-1 text-xs text-text-faint">
                  Source path incomplete · 資料経路は未完成
                </p>
              )}
              {node.url && !node.isUnknown && (
                <Link
                  href={node.url}
                  className="focus-ring mt-2 inline-flex text-[0.65rem] text-text-soft underline-offset-4 hover:underline"
                >
                  Open
                </Link>
              )}
            </li>
          ))}
        </ol>

        <div>
          <p className="label">Completeness reasons</p>
          <ul className="mt-2 space-y-1 text-xs text-text-faint">
            {reasons.map((r) => (
              <li key={r}>· {r}</li>
            ))}
          </ul>
        </div>

        {trail.blockers.length > 0 && (
          <div>
            <p className="label">Issues</p>
            <ul className="mt-2 space-y-1 text-xs text-text-faint">
              {trail.blockers.map((b) => (
                <li key={b.id}>
                  · [{b.severity}] {b.messageJa ?? b.message}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {sources.map((s) =>
            s.slug ? (
              <Link
                key={s.id}
                href={`/sources/${s.slug}`}
                className="focus-ring inline-flex border border-border px-3 py-1.5 text-[0.65rem] text-text-soft"
              >
                View source
              </Link>
            ) : (
              <span
                key={s.id}
                className="inline-flex border border-border px-3 py-1.5 text-[0.65rem] text-text-faint"
              >
                {s.label} (no observatory page)
              </span>
            ),
          )}
          <Link
            href={`/provenance/${factClaimId}`}
            className="focus-ring inline-flex border border-text bg-text px-3 py-1.5 text-[0.65rem] text-bg"
          >
            Full provenance
          </Link>
        </div>
      </div>
    </details>
  );
}
