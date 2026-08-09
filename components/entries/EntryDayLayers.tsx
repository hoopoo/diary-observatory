import { EpistemicLabel } from "@/components/EpistemicLabel";
import { CompactProvenanceLine } from "@/components/provenance/CompactProvenanceLine";
import { UnsupportedClaimWarning } from "@/components/provenance/UnsupportedClaimWarning";
import type { EntryLayer, EpistemicKind } from "@/lib/types";

const ORDER: EpistemicKind[] = ["fact", "observation", "interpretation"];

export function EntryDayLayers({ layers }: { layers: EntryLayer[] }) {
  return (
    <div className="mt-8 grid gap-4 lg:grid-cols-3">
      {ORDER.map((kind) => {
        const items = layers.filter((l) => l.type === kind);
        return (
          <section
            key={kind}
            className="border border-border px-5 py-5"
            aria-labelledby={`layer-${kind}`}
          >
            <div id={`layer-${kind}`}>
              <EpistemicLabel kind={kind} />
            </div>
            <ul className="mt-4 space-y-4">
              {items.map((item) => (
                <li
                  key={item.claimId ?? item.text}
                  id={item.claimId}
                  className="text-sm text-text-soft"
                >
                  <div className="flex gap-2">
                    <span className="text-accent" aria-hidden="true">
                      –
                    </span>
                    <span className="jp-serif">{item.text}</span>
                  </div>
                  {kind === "fact" && item.claimId && (
                    <div className="mt-2 pl-4">
                      <p className="text-[0.65rem] tracking-wide text-text-faint">
                        Fact · Evidence linked · Provenance
                      </p>
                      <CompactProvenanceLine factClaimId={item.claimId} />
                      <UnsupportedClaimWarning claimId={item.claimId} />
                    </div>
                  )}
                  {kind !== "fact" && item.claimId && (
                    <div className="mt-1 pl-4">
                      <p className="text-[0.65rem] text-text-faint">
                        {kind} ·{" "}
                        <a
                          href={`/provenance/${item.claimId}`}
                          className="underline-offset-4 hover:underline"
                        >
                          View trail
                        </a>
                      </p>
                      <UnsupportedClaimWarning claimId={item.claimId} />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
