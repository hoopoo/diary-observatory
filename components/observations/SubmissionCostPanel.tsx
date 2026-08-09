import { submissionCostItems } from "@/data/observations/before-the-platform-small-press";

export function SubmissionCostPanel() {
  return (
    <aside className="not-prose my-10 space-y-4">
      <div className="border border-dashed border-border px-4 py-5">
        <p className="label">Submission cost</p>
        <p className="editorial mt-3 text-xl text-text-faint">
          No verified submission cost indexed yet.
        </p>
        <p className="jp-serif mt-2 text-sm text-text-faint">
          確認済みの投稿費用は、まだ索引化されていません。
        </p>
      </div>
      <ul className="flex flex-wrap gap-2">
        {submissionCostItems.map((item) => (
          <li
            key={item.id}
            className="border border-border px-2.5 py-1 text-sm text-text-soft"
          >
            {item.label}
            <span className="ml-1 text-xs text-text-faint">{item.labelJa}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
