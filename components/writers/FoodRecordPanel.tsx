import { EpistemicLabel } from "@/components/EpistemicLabel";
import { foodRecordNotice } from "@/data/writers/fumiko-hayashi";

export function FoodRecordPanel() {
  return (
    <aside className="not-prose my-8 border border-border px-5 py-6">
      <p className="label">Food record</p>
      <div className="mt-2">
        <EpistemicLabel kind="fact" />
      </div>
      <p className="mt-4 text-sm text-text-soft">{foodRecordNotice.emptyNoteEn}</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        {foodRecordNotice.emptyNoteJa}
      </p>
      <p className="mt-4 text-xs text-text-faint">
        Columns ready: Date · Food · Source · Paid/gifted/prepared · Place ·
        People · Cost · Body context · Evidence · Verification
      </p>
    </aside>
  );
}
