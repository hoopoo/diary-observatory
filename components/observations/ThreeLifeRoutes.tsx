import { EpistemicLabel } from "@/components/EpistemicLabel";
import { threeCitiesRoutes } from "@/data/observations/three-cities-three-speeds";

export function ThreeLifeRoutes() {
  return (
    <aside className="not-prose my-12">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <p className="label">Route comparison</p>
        <EpistemicLabel kind="interpretation" />
      </div>
      <ul className="grid gap-3 md:grid-cols-3">
        {threeCitiesRoutes.map((route) => (
          <li
            key={route.writerId}
            className="border border-border-soft px-4 py-4"
          >
            <p className="label">{route.label}</p>
            <p className="editorial mt-3 text-lg text-text">{route.route}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
