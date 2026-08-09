import { EpistemicLabel } from "@/components/EpistemicLabel";

export function FactObservationInterpretationBlock({
  fact,
  observation,
  interpretation,
}: {
  fact: string;
  observation: string;
  interpretation: string;
}) {
  const layers = [
    { kind: "fact" as const, text: fact },
    { kind: "observation" as const, text: observation },
    { kind: "interpretation" as const, text: interpretation },
  ];

  return (
    <aside className="not-prose my-8 space-y-3">
      {layers.map((layer) => (
        <div key={layer.kind} className="border border-border-soft px-4 py-3">
          <EpistemicLabel kind={layer.kind} />
          <p className="mt-2 text-sm text-text-soft">{layer.text}</p>
        </div>
      ))}
    </aside>
  );
}
