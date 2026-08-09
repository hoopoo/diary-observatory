import { EpistemicLabel } from "@/components/EpistemicLabel";
import { marketableLifeLayers } from "@/data/writers/fumiko-hayashi";

export function MarketableLifeStory() {
  return (
    <aside className="not-prose my-8">
      <p className="label">The marketable story of poverty</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        売れる物語になった貧困
      </p>
      <div className="mt-2">
        <EpistemicLabel kind="interpretation" />
      </div>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {marketableLifeLayers.map((layer) => (
          <li
            key={layer.id}
            className="border border-border px-3 py-2 text-sm text-text-soft"
          >
            <span className="block text-[0.65rem] tracking-wide text-text-faint">
              {layer.label}
            </span>
            {layer.labelJa}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-text-faint">
        貧困を才能の証明や美しい下積みとして描かない。
      </p>
    </aside>
  );
}
