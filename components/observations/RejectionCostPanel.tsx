import { EpistemicLabel } from "@/components/EpistemicLabel";
import { rejectionCost } from "@/data/observations/the-manuscripts-that-were-not-chosen";

export function RejectionCostPanel() {
  const blocks = [
    { title: "Money", titleJa: "金銭", items: rejectionCost.money },
    { title: "Time", titleJa: "時間", items: rejectionCost.time },
    { title: "Emotion", titleJa: "感情", items: rejectionCost.emotion },
    {
      title: "Opportunity",
      titleJa: "機会",
      items: rejectionCost.opportunity,
    },
    { title: "Archive", titleJa: "記録", items: rejectionCost.archive },
  ];

  return (
    <aside className="not-prose my-10">
      <p className="label">Rejection cost</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">不採用のコスト</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="observation" />
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          No medical / psychological diagnosis
        </span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {blocks.map((block) => (
          <div key={block.title} className="border border-border px-4 py-4">
            <p className="label">{block.title}</p>
            <p className="jp-serif mt-1 text-xs text-text-faint">
              {block.titleJa}
            </p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm text-text-soft">{rejectionCost.amountNoteEn}</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        {rejectionCost.amountNoteJa}
      </p>
    </aside>
  );
}
