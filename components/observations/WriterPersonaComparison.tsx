import { writerPersonas } from "@/data/observations/alcohol-explains-writers-too-easily";

export function WriterPersonaComparison() {
  return (
    <aside className="not-prose my-12">
      <h3 className="editorial text-2xl text-text">Two marketable personas</h3>
      <p className="jp-heading mt-1 text-lg">二つの消費しやすい作家像</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {writerPersonas.map((persona) => (
          <article
            key={persona.id}
            className="border border-border px-4 py-5"
          >
            <p className="label">
              {persona.writerId === "writer-nishimura"
                ? "Kenji Nishimura"
                : "Charles Bukowski"}
            </p>
            <p className="mt-4 text-xs tracking-wide text-text-faint">
              Public image
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {persona.publicLabels.map((label) => (
                <li
                  key={label}
                  className="border border-border px-2 py-0.5 text-[0.65rem] text-text-soft"
                >
                  {label}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs tracking-wide text-text-faint">
              Media channels
            </p>
            <ul className="mt-2 space-y-1 text-sm text-text-soft">
              {persona.mediaChannels.map((channel) => (
                <li key={channel}>{channel}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm text-text-soft">
        These are public personas, not complete descriptions of the writers.
      </p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        これは公共的に流通した作家像であり、本人の全体像ではない。
      </p>
    </aside>
  );
}
