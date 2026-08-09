import { EpistemicLabel } from "@/components/EpistemicLabel";
import { publishingSystems } from "@/data/publishing-records";

const ORDER = ["writer-kafu", "writer-nishimura", "writer-bukowski"];
const NAMES: Record<string, string> = {
  "writer-kafu": "Kafū",
  "writer-nishimura": "Nishimura",
  "writer-bukowski": "Bukowski",
};

export function ThreeDistributionSystems() {
  const systems = ORDER.map((id) =>
    publishingSystems.find((s) => s.writerId === id),
  ).filter(Boolean);

  return (
    <aside className="not-prose my-12">
      <h3 className="editorial text-2xl text-text">Three distribution systems</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">三つの流通モデル</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="interpretation" />
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          Model
        </span>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {systems.map((sys) =>
          sys ? (
            <article key={sys.id} className="border border-border px-4 py-5">
              <p className="label">{NAMES[sys.writerId]}</p>
              <ul className="mt-4 space-y-1 text-sm text-text-soft">
                {sys.nodes.map((node, i) => (
                  <li key={node}>
                    {node}
                    {i < sys.nodes.length - 1 ? (
                      <span className="block text-text-faint">↓</span>
                    ) : null}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.65rem] tracking-wide text-text-faint">
                {sys.verificationStatus}
              </p>
            </article>
          ) : null,
        )}
      </div>
      <p className="mt-6 text-sm text-text-soft">
        These are provisional models, not complete histories.
      </p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        これは完全な出版史ではなく、現在索引化された記録から見える暫定モデルである。
      </p>
    </aside>
  );
}
