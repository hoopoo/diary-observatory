import { recognitionLayers, type RecognitionLayer } from "@/data/pain";

export function RecognitionGapPanel({
  layers = recognitionLayers,
}: {
  layers?: RecognitionLayer[];
}) {
  return (
    <figure className="not-prose my-10">
      <figcaption className="sr-only">
        実際の苦痛・制度が認識する苦痛・社会が認める苦痛・SNSで可視化される苦痛。四つは一致しない。
      </figcaption>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {layers.map((layer, index) => (
          <li
            key={layer.id}
            className="flex flex-col border border-border-soft bg-bg-raised px-4 py-5"
          >
            <span className="editorial text-xl text-text-faint" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mt-2 text-sm font-medium text-text">
              {layer.labelJa}
            </span>
            <span className="mt-0.5 text-[0.7rem] tracking-wide text-text-faint">
              {layer.label}
            </span>
            <span className="jp-serif mt-3 text-xs text-text-soft">
              {layer.description}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-5 text-sm text-text-soft">
        These four do not coincide. A pain can be real and still remain
        unrecognized, unacknowledged, and invisible.
      </p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        この四つは一致しない。苦痛は、実在しながら、認定されず・共感されず・可視化されないまま残ることがある。
      </p>
    </figure>
  );
}
