import type { Metadata } from "next";
import { ObservationCard } from "@/components/ObservationCard";
import { PainNetworkCard } from "@/components/pain/PainNetworkCard";
import { observations } from "@/data/observations";
import { PAIN_NETWORK_LIST } from "@/lib/pain";

export const metadata: Metadata = {
  title: "Observations",
  description: "Observation essays from Diary Observatory.",
};

export default function ObservationsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <p className="label">Observations</p>
      <h1 className="editorial mt-3 text-4xl text-text">Observations</h1>
      <p className="jp-serif mt-3 max-w-2xl text-text-soft">
        日記に残った世界を現在と照合する観測記事。
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {observations.map((observation) => (
          <ObservationCard key={observation.id} observation={observation} />
        ))}
      </div>

      <section className="mt-20 border-t border-border pt-12">
        <p className="label">Observation Network</p>
        <h2 className="editorial mt-3 text-3xl text-text">
          The Competition of Pain
        </h2>
        <p className="jp-serif mt-3 max-w-2xl text-text-soft">
          現代社会の苦痛と承認をめぐる、相互接続された三つの観測レイヤー。
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PAIN_NETWORK_LIST.map((node) => (
            <PainNetworkCard key={node.key} node={node} />
          ))}
        </div>
      </section>
    </div>
  );
}
