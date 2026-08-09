import { beforeDrinking } from "@/data/observations/alcohol-explains-writers-too-easily";

export function BeforeDrinkingPanel() {
  return (
    <aside className="not-prose my-10 grid gap-3 md:grid-cols-2">
      <div className="border border-border-soft px-4 py-4">
        <p className="label">Nishimura before drinking</p>
        <ul className="mt-3 space-y-1 text-sm text-text-soft">
          {beforeDrinking.nishimura.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="border border-border-soft px-4 py-4">
        <p className="label">Bukowski before drinking</p>
        <ul className="mt-3 space-y-1 text-sm text-text-soft">
          {beforeDrinking.bukowski.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
