import { EpistemicLabel } from "@/components/EpistemicLabel";
import { livedRecordedPublishedRevised as data } from "@/data/writers/fumiko-hayashi";

export function LivedRecordedPublishedRevised() {
  const cols = [
    { title: "Lived", titleJa: "生きたこと", items: data.lived },
    { title: "Recorded", titleJa: "記録したこと", items: data.recorded },
    { title: "Published", titleJa: "刊行したこと", items: data.published },
    { title: "Revised", titleJa: "書き直したこと", items: data.revised },
  ];

  return (
    <aside className="not-prose my-8">
      <h3 className="editorial text-2xl text-text">{data.title}</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">{data.titleJa}</p>
      <div className="mt-2">
        <EpistemicLabel kind="interpretation" />
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {cols.map((col) => (
          <div key={col.title} className="border border-border px-4 py-4">
            <p className="label">{col.title}</p>
            <p className="jp-serif mt-1 text-xs text-text-faint">{col.titleJa}</p>
            <ul className="mt-3 space-y-1 text-sm text-text-soft">
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-text-faint">{data.caution}</p>
    </aside>
  );
}
