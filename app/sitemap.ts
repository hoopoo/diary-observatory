import type { MetadataRoute } from "next";
import { diaries } from "@/data/diaries";
import { entities } from "@/data/entities";
import { entries } from "@/data/entries";
import { allEditions } from "@/data/editions/index";
import { getAllSources } from "@/lib/sources";
import { observations } from "@/data/observations";
import { writers } from "@/data/writers";
import { PAIN_NETWORK_LIST } from "@/lib/pain";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/writers",
    "/diaries",
    "/observations",
    "/entities",
    "/editions",
    "/sources",
    "/sources/link-rot",
    "/provenance",
    "/compare",
    "/same-day",
    "/clean-society",
    "/market-signals",
    "/about",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const painRoutes = PAIN_NETWORK_LIST.map((node) => ({
    url: `${SITE_URL}${node.path}`,
    lastModified: new Date(node.updatedAt),
  }));

  const editionRoutes = allEditions.map((e) => ({
    url: `${SITE_URL}/editions/${e.slug}`,
    lastModified: new Date(e.lastUpdated ?? "2026-08-05"),
  }));

  const sourceRoutes = getAllSources().map((s) => ({
    url: `${SITE_URL}/sources/${s.slug}`,
    lastModified: new Date(s.lastUpdated ?? "2026-08-05"),
  }));

  return [
    ...staticRoutes,
    ...painRoutes,
    ...writers.map((w) => ({
      url: `${SITE_URL}/writers/${w.slug}`,
      lastModified: new Date(),
    })),
    ...diaries.map((d) => ({
      url: `${SITE_URL}/diaries/${d.slug}`,
      lastModified: new Date(),
    })),
    ...observations.map((o) => ({
      url: `${SITE_URL}/observations/${o.slug}`,
      lastModified: new Date(o.updatedAt),
    })),
    ...entities.map((e) => ({
      url: `${SITE_URL}/entities/${e.slug}`,
      lastModified: new Date(e.lastVerified ?? "2026-08-01"),
    })),
    ...entries.flatMap((e) => [
      {
        url: `${SITE_URL}/entries/${e.slug ?? e.date}`,
        lastModified: new Date(e.lastUpdated ?? "2026-08-02"),
      },
    ]),
    ...editionRoutes,
    ...sourceRoutes,
    {
      url: `${SITE_URL}/same-day`,
      lastModified: new Date("2026-08-02"),
    },
    {
      url: `${SITE_URL}/same-day/2011-05-02`,
      lastModified: new Date("2026-08-02"),
    },
    {
      url: `${SITE_URL}/compare/kafu-nishimura`,
      lastModified: new Date("2026-08-02"),
    },
    {
      url: `${SITE_URL}/compare/two-days-two-provenances`,
      lastModified: new Date("2026-08-09"),
    },
    {
      url: `${SITE_URL}/compare/nishimura-bukowski`,
      lastModified: new Date("2026-08-02"),
    },
    {
      url: `${SITE_URL}/compare/urban-diarists`,
      lastModified: new Date("2026-08-02"),
    },
    {
      url: `${SITE_URL}/compare/four-urban-lives`,
      lastModified: new Date("2026-08-04"),
    },
    {
      url: `${SITE_URL}/research/furukawa-roppa-first-entry`,
      lastModified: new Date("2026-08-05"),
    },
    {
      url: `${SITE_URL}/research/furukawa-roppa-bibliography`,
      lastModified: new Date("2026-08-05"),
    },
    {
      url: `${SITE_URL}/same-day/1918-01-01`,
      lastModified: new Date("2026-08-02"),
    },
  ];
}
