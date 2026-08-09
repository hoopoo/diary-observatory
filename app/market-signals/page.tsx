import type { Metadata } from "next";
import Link from "next/link";
import { PainBreadcrumb } from "@/components/pain/PainBreadcrumb";
import { PainNetworkCard } from "@/components/pain/PainNetworkCard";
import { PAIN_NETWORK } from "@/lib/pain";

const node = PAIN_NETWORK["market-signals"];

export const metadata: Metadata = {
  title: "Market Signals",
  description: node.description,
  alternates: { canonical: "/market-signals" },
  openGraph: {
    title: "Market Signals — Diary Observatory",
    description: node.description,
    url: "/market-signals",
  },
};

export default function MarketSignalsIndexPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-14 md:px-8 md:py-20">
      <PainBreadcrumb items={[{ label: "Market Signals" }]} />

      <p className="label mt-6">Observation layer</p>
      <h1 className="editorial mt-3 text-4xl text-text">Market Signals</h1>
      <p className="jp-heading mt-3 text-lg">市場のシグナル</p>
      <p className="jp-serif mt-4 max-w-2xl text-text-soft">
        中間層の不安と被害感情が、政治・メディア・広告・プラットフォーム・福祉制度・選挙市場へ転換される兆候を観測する。
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <PainNetworkCard node={node} />
        <PainNetworkCard node={PAIN_NETWORK["competition-of-pain"]} />
      </div>

      <p className="mt-8 text-sm text-text-faint">
        Related layer:{" "}
        <Link
          href={PAIN_NETWORK["clean-society"].path}
          className="focus-ring text-accent underline-offset-4 hover:underline"
        >
          Clean Society — Who Is Allowed to Be Vulnerable?
        </Link>
      </p>
    </div>
  );
}
