import { EpistemicLabel } from "@/components/EpistemicLabel";
import { horokiVersionPanel } from "@/data/writers/fumiko-hayashi";

export function HorokiVersionPanel() {
  return (
    <aside className="not-prose my-8">
      <h3 className="editorial text-2xl text-text">One life, several versions</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        一つの生活、複数の『放浪記』
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="observation" />
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          Version-sensitive
        </span>
      </div>
      <div className="mt-6 grid gap-3">
        {horokiVersionPanel.map((ed) => (
          <article key={ed.id} className="border border-border px-4 py-4">
            <p className="label">{ed.title}</p>
            <p className="jp-serif mt-1 text-sm text-text">{ed.titleJa}</p>
            <dl className="mt-3 grid gap-2 text-sm text-text-soft sm:grid-cols-2">
              <div>
                <dt className="text-[0.65rem] text-text-faint">Year / publisher</dt>
                <dd className="mt-1">
                  {ed.publicationYear ?? "—"} · {ed.publisher}
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] text-text-faint">Base text</dt>
                <dd className="mt-1">{ed.baseText}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] text-text-faint">Additions</dt>
                <dd className="mt-1">{ed.additions}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] text-text-faint">Omissions</dt>
                <dd className="mt-1">{ed.omissions}</dd>
              </div>
            </dl>
            <p className="mt-3 text-[0.65rem] tracking-wide text-text-faint">
              {ed.verificationStatus} · {ed.rightsStatus}
            </p>
          </article>
        ))}
      </div>
    </aside>
  );
}
