import Link from "next/link";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { survivingHouse } from "@/data/writers/fumiko-hayashi";

export function SurvivingHousePanel() {
  const e = survivingHouse.entity;
  const href = e.href ?? e.futureHref;
  return (
    <aside className="not-prose my-8 space-y-6">
      <div>
        <h3 className="editorial text-2xl text-text">{survivingHouse.title}</h3>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          {survivingHouse.titleJa}
        </p>
        <div className="jp-body mt-4 max-w-2xl space-y-3 text-[0.98rem] text-text-soft">
          {survivingHouse.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <article className="border border-border px-5 py-5">
        <p className="label">Entity</p>
        <h4 className="editorial mt-2 text-xl text-text">{e.name}</h4>
        <p className="mt-1 text-sm text-text-faint">{e.nameEn}</p>
        <dl className="mt-4 grid gap-2 text-sm text-text-soft sm:grid-cols-2">
          <div>
            <dt className="text-[0.65rem] text-text-faint">EntityNature</dt>
            <dd className="mt-1">{e.nature}</dd>
          </div>
          <div>
            <dt className="text-[0.65rem] text-text-faint">Type</dt>
            <dd className="mt-1">{e.type}</dd>
          </div>
          <div>
            <dt className="text-[0.65rem] text-text-faint">Historical role</dt>
            <dd className="mt-1">{e.historicalRole}</dd>
          </div>
          <div>
            <dt className="text-[0.65rem] text-text-faint">Current status</dt>
            <dd className="mt-1">{e.currentStatus}</dd>
          </div>
        </dl>
        <p className="mt-3 text-xs text-text-faint">{e.verification}</p>
        <Link
          href={href}
          className="focus-ring mt-4 inline-flex border border-text px-3 py-1.5 text-xs text-text underline-offset-4 hover:underline"
        >
          Open Entity Observatory →
        </Link>
      </article>

      <div className="border border-border px-5 py-5">
        <EpistemicLabel kind="interpretation" />
        <p className="editorial mt-3 text-xl text-accent">
          {survivingHouse.concept.title}
        </p>
        <p className="jp-serif mt-2 text-sm text-text-soft">
          {survivingHouse.concept.titleJa}
        </p>
        <div className="mt-4 space-y-3 text-sm text-text-soft">
          {survivingHouse.concept.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </aside>
  );
}
