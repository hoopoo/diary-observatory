import type {
  CitationGhostRecord,
  SearchSnippetRecord,
  SourceSurvivalFragment,
} from "@/lib/types";

/** Surviving fragments of sources that changed state. Empty until evidenced. */
export const sourceSurvivalFragments: SourceSurvivalFragment[] = [];

/** Short search snippets only — never full article text. */
export const searchSnippetRecords: SearchSnippetRecord[] = [];

/** Citations that outlive the cited Web source. */
export const citationGhostRecords: CitationGhostRecord[] = [];
