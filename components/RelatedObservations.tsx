import { ObservationCard } from "@/components/ObservationCard";
import type { Observation } from "@/lib/types";

export function RelatedObservations({ items }: { items: Observation[] }) {
  if (items.length === 0) return null;
  return (
    <section>
      <h2 className="label">Related Observations</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <ObservationCard key={item.id} observation={item} />
        ))}
      </div>
    </section>
  );
}
