import { EpistemicLabel } from "@/components/EpistemicLabel";
import { editorialTransparencyRows } from "@/data/observations/where-did-the-editor-go";

export function EditorialTransparencyPanel() {
  return (
    <aside className="not-prose my-12">
      <h3 className="editorial text-2xl text-text">
        Can the selection be explained?
      </h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        その選択理由は説明できるか
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="observation" />
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          Structural comparison — not a product audit
        </span>
      </div>
      <ul className="mt-6 space-y-3">
        {editorialTransparencyRows.map((row) => (
          <li
            key={row.actor}
            className="border border-border px-4 py-3 text-sm text-text-soft"
          >
            <p className="label">{row.actor}</p>
            <p className="jp-serif mt-1 text-text-faint">{row.actorJa}</p>
            <p className="mt-2">{row.level}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
