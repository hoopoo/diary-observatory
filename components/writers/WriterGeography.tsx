import Link from "next/link";
import { getEntityById } from "@/data/entities";

export function WriterGeography({
  places,
}: {
  places: Array<{
    id: string;
    name: string;
    nameJa: string;
    role: string;
    roleJa: string;
    latitude: number | null;
    longitude: number | null;
  }>;
}) {
  return (
    <ol className="space-y-0 border-l border-border">
      {places.map((place, index) => {
        const entity = getEntityById(place.id);
        return (
          <li key={place.id} className="relative py-5 pl-6">
            <span
              className="absolute left-0 top-7 h-2 w-2 -translate-x-1/2 rounded-full bg-accent"
              aria-hidden="true"
            />
            <p className="label">
              {String(index + 1).padStart(2, "0")} · Route
            </p>
            <h3 className="editorial mt-2 text-xl text-text">{place.name}</h3>
            <p className="jp-serif text-sm text-accent">{place.nameJa}</p>
            <p className="mt-2 text-sm text-text-soft">{place.role}</p>
            <p className="jp-serif mt-1 text-xs text-text-faint">{place.roleJa}</p>
            <p className="mt-2 text-[0.65rem] text-text-faint">
              lat/lng: {place.latitude ?? "null"} / {place.longitude ?? "null"}
            </p>
            {entity && (
              <Link
                href={`/entities/${entity.slug}`}
                className="focus-ring mt-3 inline-block text-xs text-accent underline-offset-4 hover:underline"
              >
                View entity
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  );
}
