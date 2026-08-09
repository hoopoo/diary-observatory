import { algorithmEditorAxes } from "@/data/observations/before-the-platform-small-press";

export function AlgorithmEditorComparison() {
  return (
    <aside className="not-prose my-10 grid gap-3 md:grid-cols-2">
      <div className="border border-border px-4 py-4">
        <p className="label">Editor</p>
        <ul className="mt-3 space-y-1 text-sm text-text-soft">
          {algorithmEditorAxes.editor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="border border-border px-4 py-4">
        <p className="label">Algorithm</p>
        <ul className="mt-3 space-y-1 text-sm text-text-soft">
          {algorithmEditorAxes.algorithm.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
