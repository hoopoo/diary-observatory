import { EpistemicLabel } from "@/components/EpistemicLabel";
import { humanAlgorithmMatrix } from "@/data/observations/where-did-the-editor-go";

export function HumanAlgorithmMatrix() {
  return (
    <aside className="not-prose my-10 overflow-x-auto">
      <p className="label">Human editor / Algorithm</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="interpretation" />
      </div>
      <table className="mt-5 w-full min-w-[36rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border text-[0.65rem] tracking-wide text-text-faint">
            <th className="py-2 pr-3 font-normal">Axis</th>
            <th className="py-2 pr-3 font-normal">Human editor</th>
            <th className="py-2 font-normal">Algorithm</th>
          </tr>
        </thead>
        <tbody>
          {humanAlgorithmMatrix.map((row) => (
            <tr key={row.axis} className="border-b border-border align-top">
              <td className="py-3 pr-3 text-text-soft">
                <span className="block text-[0.65rem] text-text-faint">
                  {row.axis}
                </span>
                {row.axisJa}
              </td>
              <td className="py-3 pr-3 text-text-soft">{row.human}</td>
              <td className="py-3 text-text-soft">{row.algorithm}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-sm text-text-faint">
        人間の判断理由も、必ずしも書き手に説明されない。
      </p>
    </aside>
  );
}
