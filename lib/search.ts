import type { DiaryWork, Entity, Observation, Writer } from "./types";

export type SearchItem = {
  id: string;
  kind: "writer" | "diary" | "entity" | "observation";
  title: string;
  subtitle?: string;
  href: string;
  tokens: string[];
  writerId?: string;
  year?: number;
  city?: string;
  country?: string;
  entityType?: string;
  status?: string;
  themes: string[];
};

function tokenize(...parts: Array<string | undefined | null>): string[] {
  return parts
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .split(/[\s,/|・、。]+/)
    .filter(Boolean);
}

export function buildSearchIndex(input: {
  writers: Writer[];
  diaries: DiaryWork[];
  entities: Entity[];
  observations: Observation[];
}): SearchItem[] {
  const { writers, diaries, entities, observations } = input;
  const writerMap = new Map(writers.map((w) => [w.id, w]));

  const writerItems: SearchItem[] = writers.map((w) => ({
    id: w.id,
    kind: "writer",
    title: w.name,
    subtitle: w.nameJa,
    href: `/writers/${w.slug}`,
    tokens: tokenize(
      w.name,
      w.nameJa,
      w.city,
      w.country,
      ...w.themes,
      ...w.works,
    ),
    writerId: w.id,
    year: w.birthYear,
    city: w.city,
    country: w.country,
    themes: w.themes,
  }));

  const diaryItems: SearchItem[] = diaries.map((d) => {
    const writer = writerMap.get(d.writerId);
    return {
      id: d.id,
      kind: "diary",
      title: d.title,
      subtitle: d.titleOriginal,
      href: `/diaries/${d.slug}`,
      tokens: tokenize(
        d.title,
        d.titleOriginal,
        d.description,
        d.descriptionJa,
        writer?.name,
        writer?.nameJa,
      ),
      writerId: d.writerId,
      year: d.startYear,
      city: writer?.city,
      country: writer?.country,
      themes: [],
    };
  });

  const entityItems: SearchItem[] = entities.map((e) => ({
    id: e.id,
    kind: "entity",
    title: e.name,
    subtitle: e.nameOriginal,
    href: `/entities/${e.slug}`,
    tokens: tokenize(
      e.name,
      e.nameOriginal,
      e.city,
      e.country,
      e.description,
      e.descriptionJa,
      e.type,
    ),
    writerId: e.writerIds[0],
    city: e.city,
    country: e.country,
    entityType: e.type,
    status: e.status,
    themes: [],
  }));

  const observationItems: SearchItem[] = observations.map((o) => ({
    id: o.id,
    kind: "observation",
    title: o.title,
    subtitle: o.subtitle,
    href: `/observations/${o.slug}`,
    tokens: tokenize(o.title, o.subtitle, o.summary, o.summaryJa, ...o.themes),
    writerId: o.writerIds[0],
    themes: o.themes,
  }));

  return [...writerItems, ...diaryItems, ...entityItems, ...observationItems];
}

export function filterSearchItems(
  items: SearchItem[],
  query: {
    q?: string;
    writer?: string;
    year?: string;
    city?: string;
    country?: string;
    entityType?: string;
    status?: string;
    theme?: string;
    kind?: string;
  },
): SearchItem[] {
  const q = query.q?.trim().toLowerCase();
  return items.filter((item) => {
    if (query.kind && item.kind !== query.kind) return false;
    if (query.writer && item.writerId !== query.writer) return false;
    if (query.city && item.city?.toLowerCase() !== query.city.toLowerCase())
      return false;
    if (
      query.country &&
      item.country?.toLowerCase() !== query.country.toLowerCase()
    )
      return false;
    if (query.entityType && item.entityType !== query.entityType) return false;
    if (query.status && item.status !== query.status) return false;
    if (query.year) {
      const y = Number(query.year);
      if (!Number.isNaN(y) && item.year !== y) return false;
    }
    if (query.theme) {
      const t = query.theme.toLowerCase();
      if (!item.themes.some((theme) => theme.toLowerCase() === t)) return false;
    }
    if (q) {
      const hay = `${item.title} ${item.subtitle ?? ""} ${item.tokens.join(" ")}`.toLowerCase();
      if (!hay.includes(q) && !item.tokens.some((t) => t.includes(q))) {
        return false;
      }
    }
    return true;
  });
}
