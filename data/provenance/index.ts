import {
  kafu1918FactClaims,
  kafu1918InterpretationClaims,
  kafu1918ObservationClaims,
  kafu1918QualityProfile,
  kafu1918SourceLayers,
  kafu1918UnknownClaims,
} from "@/data/provenance/kafu-1918-01-01";
import {
  nishimura2011FactClaims,
  nishimura2011InterpretationClaims,
  nishimura2011ObservationClaims,
  nishimura2011SourceLayers,
} from "@/data/provenance/nishimura-2011-05-02";
import type {
  EntrySourceLayer,
  FactClaim,
  InterpretationClaim,
  ObservationClaim,
} from "@/lib/types";

export const allPublicFactClaims: FactClaim[] = [
  ...kafu1918FactClaims,
  ...nishimura2011FactClaims,
];

export const allPublicObservationClaims: ObservationClaim[] = [
  ...kafu1918ObservationClaims,
  ...nishimura2011ObservationClaims,
];

export const allPublicInterpretationClaims: InterpretationClaim[] = [
  ...kafu1918InterpretationClaims,
  ...nishimura2011InterpretationClaims,
];

export const allEntrySourceLayers: EntrySourceLayer[] = [
  ...kafu1918SourceLayers,
  ...nishimura2011SourceLayers,
];

export {
  kafu1918FactClaims,
  kafu1918ObservationClaims,
  kafu1918InterpretationClaims,
  kafu1918SourceLayers,
  kafu1918UnknownClaims,
  kafu1918QualityProfile,
  nishimura2011FactClaims,
  nishimura2011ObservationClaims,
  nishimura2011InterpretationClaims,
  nishimura2011SourceLayers,
};
