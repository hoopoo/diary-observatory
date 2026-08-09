import { EpistemicLabel } from "@/components/EpistemicLabel";
import { editorialFunctionNodes } from "@/data/editorial-functions";

export function DistributedEditorialMap() {
  return (
    <aside className="not-prose my-12">
      <h3 className="editorial text-2xl text-text">
        Distributed editorial function
      </h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">分散する編集機能</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="interpretation" />
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          Conceptual model
        </span>
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          Not indexed Fact counts
        </span>
      </div>
      <div className="mt-6 grid gap-3">
        {editorialFunctionNodes.map((node) => (
          <article key={node.id} className="border border-border px-4 py-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <p className="label">{node.label}</p>
                <p className="jp-serif mt-1 text-sm text-text">{node.labelJa}</p>
              </div>
              <p className="text-[0.65rem] tracking-wide text-text-faint">
                {node.verificationStatus}
              </p>
            </div>
            <dl className="mt-3 grid gap-2 text-sm text-text-soft sm:grid-cols-2">
              <div>
                <dt className="text-[0.65rem] tracking-wide text-text-faint">
                  Historical actors
                </dt>
                <dd className="mt-1">{node.historicalActorTypes.join(" / ")}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] tracking-wide text-text-faint">
                  Current actors
                </dt>
                <dd className="mt-1">{node.currentActorTypes.join(" / ")}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] tracking-wide text-text-faint">
                  Risks
                </dt>
                <dd className="mt-1">{node.risks.join(" · ")}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] tracking-wide text-text-faint">
                  Benefits
                </dt>
                <dd className="mt-1">{node.benefits.join(" · ")}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </aside>
  );
}
