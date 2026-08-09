import { EpistemicLabel } from "@/components/EpistemicLabel";
import { editorialSystemProfiles } from "@/data/editorial-actions";

const ORDER = ["writer-kafu", "writer-nishimura", "writer-bukowski"];
const NAMES: Record<string, string> = {
  "writer-kafu": "Kafū",
  "writer-nishimura": "Nishimura",
  "writer-bukowski": "Bukowski",
};

export function ThreeEditorialSystems() {
  const systems = ORDER.map((id) =>
    editorialSystemProfiles.find((s) => s.writerId === id),
  ).filter(Boolean);

  return (
    <aside className="not-prose my-12">
      <h3 className="editorial text-2xl text-text">Three editorial systems</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">三つの編集モデル</p>
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
              <dl className="mt-4 space-y-3 text-sm text-text-soft">
                <div>
                  <dt className="text-[0.65rem] tracking-wide text-text-faint">
                    Primary selector
                  </dt>
                  <dd className="mt-1">{sys.primaryActors.join(" / ")}</dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] tracking-wide text-text-faint">
                    Context
                  </dt>
                  <dd className="mt-1">{sys.period}</dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] tracking-wide text-text-faint">
                    Feedback
                  </dt>
                  <dd className="mt-1">
                    {sys.feedbackMechanisms.join(" / ")}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] tracking-wide text-text-faint">
                    Speed
                  </dt>
                  <dd className="mt-1">
                    {sys.writerId === "writer-nishimura"
                      ? "Faster amplification"
                      : sys.writerId === "writer-bukowski"
                        ? "Slow accumulation"
                        : "Slow"}
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-[0.65rem] tracking-wide text-text-faint">
                {sys.verificationStatus}
              </p>
            </article>
          ) : null,
        )}
      </div>
      <p className="mt-6 text-sm text-text-soft">
        These are provisional models based on currently indexed records.
      </p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        これは現在索引化された記録から構成した暫定的な編集モデルである。
      </p>
    </aside>
  );
}
