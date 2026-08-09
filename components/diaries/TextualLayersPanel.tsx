import { EpistemicLabel } from "@/components/EpistemicLabel";
import { textualLayers } from "@/data/diaries/horoki";

export function TextualLayersPanel() {
  return (
    <aside className="not-prose my-10 space-y-3">
      <h3 className="editorial text-2xl text-text">Textual layers</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">本文の層</p>
      {textualLayers.map((layer) => (
        <div key={layer.title} className="border border-border px-4 py-3">
          {layer.kind === "unknown" ? (
            <span className="border border-border px-2 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
              Unknown
            </span>
          ) : (
            <EpistemicLabel kind={layer.kind} />
          )}
          <p className="editorial mt-2 text-lg text-text">{layer.title}</p>
          <p className="jp-serif mt-1 text-sm text-text-faint">{layer.titleJa}</p>
          <p className="mt-2 text-sm text-text-soft">{layer.text}</p>
        </div>
      ))}
    </aside>
  );
}
