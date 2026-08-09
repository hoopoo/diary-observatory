import { EpistemicLabel } from "@/components/EpistemicLabel";
import type { EpistemicKind } from "@/lib/types";

export function WriterMythComparison({
  title,
  titleJa,
  paragraphs,
  layers,
  caution,
}: {
  title: string;
  titleJa: string;
  paragraphs: string[];
  layers: Array<{ kind: EpistemicKind; label: string; text: string }>;
  caution: string;
}) {
  return (
    <section>
      <h2 className="editorial text-2xl text-text md:text-3xl">{title}</h2>
      <p className="jp-heading mt-2 text-lg">{titleJa}</p>
      <div className="jp-body mt-8 max-w-2xl space-y-3 text-[0.98rem]">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <ul className="mt-8 space-y-3">
        {layers.map((layer) => (
          <li key={layer.label} className="border border-border-soft px-4 py-3">
            <EpistemicLabel kind={layer.kind} />
            <p className="mt-2 text-sm text-text-soft">{layer.text}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-2xl text-xs text-text-faint">{caution}</p>
    </section>
  );
}
