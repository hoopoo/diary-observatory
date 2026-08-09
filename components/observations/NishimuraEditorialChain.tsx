import { nishimuraEditorialChain } from "@/data/observations/where-did-the-editor-go";

export function NishimuraEditorialChain() {
  return (
    <aside className="not-prose my-10 border border-border px-5 py-6">
      <p className="label">Editorial amplification chain</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        編集から作家像までの連鎖
      </p>
      <ol className="mt-5 space-y-1">
        {nishimuraEditorialChain.map((step, i) => (
          <li key={step.id} className="text-sm text-text-soft">
            <span className="block text-[0.65rem] tracking-wide text-text-faint">
              {step.label}
            </span>
            {step.labelJa}
            {i < nishimuraEditorialChain.length - 1 ? (
              <span className="mt-1 block text-text-faint">↓</span>
            ) : null}
          </li>
        ))}
      </ol>
    </aside>
  );
}
