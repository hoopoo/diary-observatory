import { EpistemicLabel } from "@/components/EpistemicLabel";
import { revisionTension } from "@/data/observations/the-manuscripts-that-were-not-chosen";

export function RevisionTensionPanel() {
  const blocks = [
    { title: "Improvement", items: revisionTension.improvement },
    { title: "Compromise", items: revisionTension.compromise },
    { title: "Collaboration", items: revisionTension.collaboration },
    { title: "Conflict", items: revisionTension.conflict },
    { title: "Withdrawal", items: revisionTension.withdrawal },
    { title: "Unknown", items: revisionTension.unknown },
  ];

  return (
    <aside className="not-prose my-10">
      <p className="label">Revision tension</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="interpretation" />
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {blocks.map((block) => (
          <div key={block.title} className="border border-border px-4 py-4">
            <p className="label">{block.title}</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
