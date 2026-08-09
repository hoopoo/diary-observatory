import { EpistemicLabel } from "@/components/EpistemicLabel";
import { hayashiHousing } from "@/data/writers/fumiko-hayashi";

export function HousingTimeline() {
  return (
    <aside className="not-prose my-8">
      <p className="label">Housing timeline</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">住居の時間</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="observation" />
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          No unnecessary private addresses
        </span>
      </div>
      <ol className="mt-5 space-y-3">
        {hayashiHousing.map((h) => (
          <li key={h.id} className="border border-border px-4 py-4 text-sm">
            <p className="editorial text-lg text-text">{h.label}</p>
            {h.labelJa && (
              <p className="jp-serif mt-1 text-text-soft">{h.labelJa}</p>
            )}
            <p className="mt-2 text-text-faint">
              {h.startDate ?? "—"} – {h.endDate ?? "—"} · {h.housingType} ·{" "}
              {h.addressLevel}
            </p>
            <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
              {h.verificationStatus}
            </p>
            {h.notes && (
              <p className="mt-2 text-xs text-text-faint">{h.notes}</p>
            )}
          </li>
        ))}
      </ol>
    </aside>
  );
}
