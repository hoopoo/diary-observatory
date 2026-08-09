import type { Metadata } from "next";
import { Suspense } from "react";
import { EntityCard } from "@/components/EntityCard";
import { FilterBar } from "@/components/FilterBar";
import { SearchInput } from "@/components/SearchInput";
import { entities, writers } from "@/data/index";
import { ENTITY_STATUS_LABELS, ENTITY_TYPE_LABELS } from "@/lib/labels";
import { filterSearchItems, buildSearchIndex } from "@/lib/search";
import type { EntityStatus, EntityType } from "@/lib/types";

export const metadata: Metadata = {
  title: "Entities",
  description:
    "People, shops, places and media indexed from diaries — with current status and verification notes.",
};

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function EntitiesPage({ searchParams }: Props) {
  const params = await searchParams;
  const q = first(params.q);
  const writer = first(params.writer);
  const city = first(params.city);
  const country = first(params.country);
  const entityType = first(params.entityType);
  const status = first(params.status);

  const index = buildSearchIndex({
    writers: [],
    diaries: [],
    entities,
    observations: [],
  });

  const filteredIds = new Set(
    filterSearchItems(index, {
      q,
      writer,
      city,
      country,
      entityType,
      status,
      kind: "entity",
    }).map((item) => item.id),
  );

  const list = entities.filter((e) => filteredIds.has(e.id));
  const cities = [...new Set(entities.map((e) => e.city).filter(Boolean))] as string[];
  const countries = [
    ...new Set(entities.map((e) => e.country).filter(Boolean)),
  ] as string[];
  const types = [...new Set(entities.map((e) => e.type))] as EntityType[];
  const statuses = [...new Set(entities.map((e) => e.status))] as EntityStatus[];

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <p className="label">Entities</p>
      <h1 className="editorial mt-3 text-4xl text-text">Entities</h1>
      <p className="jp-serif mt-3 max-w-2xl text-text-soft">
        日記に登場する人、店、場所、メディア。現況が未確認のものは unknown。
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-6">
          <Suspense fallback={<div className="text-sm text-text-faint">Loading search…</div>}>
            <SearchInput pathname="/entities" />
            <FilterBar
              pathname="/entities"
              filters={[
                {
                  key: "writer",
                  label: "Writer",
                  options: writers.map((w) => ({
                    value: w.id,
                    label: w.nameJa,
                  })),
                },
                {
                  key: "city",
                  label: "City",
                  options: cities.map((c) => ({ value: c, label: c })),
                },
                {
                  key: "country",
                  label: "Country",
                  options: countries.map((c) => ({ value: c, label: c })),
                },
                {
                  key: "entityType",
                  label: "Type",
                  options: types.map((t) => ({
                    value: t,
                    label: ENTITY_TYPE_LABELS[t].en,
                  })),
                },
                {
                  key: "status",
                  label: "Status",
                  options: statuses.map((s) => ({
                    value: s,
                    label: ENTITY_STATUS_LABELS[s].en,
                  })),
                },
              ]}
            />
          </Suspense>
        </aside>

        <div>
          <p className="text-xs text-text-faint">{list.length} entities</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {list.map((entity) => (
              <EntityCard key={entity.id} entity={entity} />
            ))}
          </div>
          {list.length === 0 && (
            <p className="mt-8 text-sm text-text-faint">No entities match these filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}
