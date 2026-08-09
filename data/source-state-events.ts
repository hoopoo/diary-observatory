import type { SourceStateEvent } from "@/lib/types";

/**
 * Observed SourceState transitions.
 * Empty until a real check / archival event is registered.
 * Do not invent 404s, redirects, or archive URLs.
 */
export const sourceStateEvents: SourceStateEvent[] = [];
