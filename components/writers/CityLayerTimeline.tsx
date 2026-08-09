export function CityLayerTimeline({
  layers,
}: {
  layers: Array<{
    id: string;
    label: string;
    text: string;
    note: string;
    verificationStatus: string;
  }>;
}) {
  return (
    <ol className="mt-8 space-y-0 border-l border-border">
      {layers.map((layer) => (
        <li key={layer.id} className="relative py-5 pl-6">
          <span
            className="absolute left-0 top-7 h-2 w-2 -translate-x-1/2 rounded-full bg-accent"
            aria-hidden="true"
          />
          <div className="flex flex-wrap items-center gap-2">
            <p className="editorial text-xl text-text">{layer.label}</p>
            <span className="border border-border px-1.5 py-0.5 text-[0.65rem] tracking-wide text-text-faint">
              {layer.verificationStatus}
            </span>
          </div>
          <p className="jp-serif mt-2 text-sm text-text-soft">{layer.text}</p>
          <p className="mt-1 text-xs text-text-faint">{layer.note}</p>
        </li>
      ))}
    </ol>
  );
}
