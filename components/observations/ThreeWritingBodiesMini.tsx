import { threeCitiesBodies } from "@/data/observations/three-cities-three-speeds";

export function ThreeWritingBodiesMini() {
  return (
    <aside className="not-prose my-10">
      <div className="grid gap-3 md:grid-cols-3">
        {threeCitiesBodies.map((col) => (
          <div
            key={col.writerId}
            className="border border-border-soft px-4 py-4"
          >
            <p className="label">{col.label}</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
