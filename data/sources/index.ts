import type { Source } from "@/lib/types";
import {
  registrySources,
  sourceClaimReliabilities,
  sourceCollections,
  sourceLinkChecks,
} from "@/data/sources/registry";

export {
  registrySources,
  sourceClaimReliabilities,
  sourceCollections,
  sourceLinkChecks,
};

/** Public Observatory sources only. */
export function getPublicRegistrySources(): Source[] {
  return registrySources.filter(
    (s) =>
      s.slug &&
      (s.visibility === "public" || s.visibility === "metadata-only"),
  );
}

export const allPublicSources = getPublicRegistrySources();
