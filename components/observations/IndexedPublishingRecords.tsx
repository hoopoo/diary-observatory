import { EpistemicLabel } from "@/components/EpistemicLabel";

const ROWS = [
  {
    writer: "Kafū Nagai",
    summary: "Print publishing system",
    status: "Partial",
  },
  {
    writer: "Kenji Nishimura",
    summary: "Publisher / literary prize / television",
    status: "Partial",
  },
  {
    writer: "Charles Bukowski",
    summary: "Postal submission / small press",
    status: "Bibliographic verification needed",
  },
];

export function IndexedPublishingRecords() {
  return (
    <aside className="not-prose my-14">
      <h3 className="editorial text-2xl text-text">Indexed publishing records</h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        索引化された出版記録
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <EpistemicLabel kind="fact" />
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          Indexed record
        </span>
        <EpistemicLabel kind="interpretation" />
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          Model
        </span>
      </div>
      <ul className="mt-6 space-y-3">
        {ROWS.map((row) => (
          <li key={row.writer} className="border border-border px-4 py-4">
            <p className="editorial text-xl text-text">{row.writer}</p>
            <p className="mt-2 text-sm text-text-soft">{row.summary}</p>
            <p className="mt-2 text-xs text-text-faint">{row.status}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
