import { painDiagramFlows, type DiagramFlow } from "@/data/pain";

function FlowColumn({ flow }: { flow: DiagramFlow }) {
  const isExit = flow.tone === "exit";
  return (
    <div
      className={`flex flex-col border px-5 py-6 ${
        isExit ? "border-accent/40 bg-accent-soft" : "border-border"
      }`}
    >
      <p className="label">{flow.title}</p>
      <p className="jp-heading mt-1 text-base">{flow.titleJa}</p>

      <ol className="mt-5 space-y-0">
        {flow.steps.map((step, index) => (
          <li key={step.ja}>
            <div className="border border-border-soft bg-bg-raised px-4 py-3">
              <p className="text-sm text-text-soft">{step.ja}</p>
              <p className="mt-0.5 text-[0.7rem] tracking-wide text-text-faint">
                {step.en}
              </p>
            </div>
            {index < flow.steps.length - 1 && (
              <div
                className="flex justify-center py-1 text-text-faint"
                aria-hidden="true"
              >
                ↓
              </div>
            )}
          </li>
        ))}
      </ol>

      <div
        className="flex justify-center py-1 text-text-faint"
        aria-hidden="true"
      >
        ↓
      </div>
      <div
        className={`border px-4 py-4 ${
          isExit
            ? "border-accent/50 bg-bg-raised"
            : "border-text/40 bg-bg-raised"
        }`}
      >
        <p
          className={`text-sm font-medium ${
            isExit ? "text-accent" : "text-text"
          }`}
        >
          {flow.outcome.ja}
        </p>
        <p className="mt-0.5 text-[0.7rem] tracking-wide text-text-faint">
          {flow.outcome.en}
        </p>
      </div>
    </div>
  );
}

export function PainCompetitionDiagram({
  flows = painDiagramFlows,
}: {
  flows?: DiagramFlow[];
}) {
  return (
    <figure className="not-prose my-10">
      <figcaption className="sr-only">
        社会的苦痛の流れ図。出口のない分断と、出口のある分断の比較。
      </figcaption>
      <div className="grid gap-4 md:grid-cols-2">
        {flows.map((flow) => (
          <FlowColumn key={flow.id} flow={flow} />
        ))}
      </div>
      <p className="mt-5 text-sm text-text-soft">
        Same starting load, two routes. The difference is not the pain, but
        whether the load is read as a person or as a condition.
      </p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        出発点の負荷は同じ。分岐するのは、負荷を「人」として見るか「条件」として見るかである。
      </p>
    </figure>
  );
}
