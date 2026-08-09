import { IndexedDaysTriptych } from "@/components/compare/IndexedDaysTriptych";
import { indexedDaysForEssay } from "@/data/observations/three-cities-three-speeds";

export function IndexedDaysEssay() {
  return (
    <aside className="not-prose my-14">
      <IndexedDaysTriptych
        title="Indexed days"
        titleJa="索引化された日々"
        note="Bukowski の架空日付は作らない。空欄は今後の調査対象として残す。"
        days={indexedDaysForEssay}
      />
    </aside>
  );
}
