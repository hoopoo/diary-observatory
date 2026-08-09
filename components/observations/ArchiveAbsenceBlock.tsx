import { EpistemicLabel } from "@/components/EpistemicLabel";
import { ConceptQuote } from "@/components/observations/ConceptQuote";
import { archiveAbsences } from "@/data/archive-absences";

export function ArchiveAbsenceBlock() {
  return (
    <aside className="not-prose my-12">
      <ConceptQuote
        en={"An archive contains absences,\nnot only documents."}
        ja="アーカイブにあるのは、資料だけではない。欠落もまた残っている。"
      />
      <div className="mt-8">
        <p className="label">Archive absences</p>
        <p className="jp-serif mt-1 text-sm text-text-faint">アーカイブの欠落</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <EpistemicLabel kind="observation" />
          <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
            Gaps recorded without inventing contents
          </span>
        </div>
        <ul className="mt-5 space-y-3">
          {archiveAbsences.map((item) => (
            <li
              key={item.id}
              className="border border-border px-4 py-4 text-sm text-text-soft"
            >
              <p className="label">{item.absenceType}</p>
              <p className="mt-2">{item.descriptionJa ?? item.description}</p>
              <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
                {item.verificationStatus}
                {item.likelyCause ? ` · ${item.likelyCause}` : ""}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
