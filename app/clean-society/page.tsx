import type { Metadata } from "next";
import Link from "next/link";
import { PainBreadcrumb } from "@/components/pain/PainBreadcrumb";
import { PainNetworkCard } from "@/components/pain/PainNetworkCard";
import { PAIN_NETWORK } from "@/lib/pain";

const node = PAIN_NETWORK["clean-society"];

export const metadata: Metadata = {
  title: "Clean Society",
  description: node.description,
  alternates: { canonical: "/clean-society" },
  openGraph: {
    title: "Clean Society — Diary Observatory",
    description: node.description,
    url: "/clean-society",
  },
};

export default function CleanSocietyIndexPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-14 md:px-8 md:py-20">
      <PainBreadcrumb items={[{ label: "Clean Society" }]} />

      <p className="label mt-6">Observation layer</p>
      <h1 className="editorial mt-3 text-4xl text-text">Clean Society</h1>
      <p className="jp-heading mt-3 text-lg">清潔な社会</p>
      <p className="jp-serif mt-4 max-w-2xl text-text-soft">
        社会は苦痛そのものではなく、苦痛を訴える資格を選別する。
        「救済に値する被害者」と「疑わしい被害者」を選別する仕組みを観測する。
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <PainNetworkCard node={node} />
        <PainNetworkCard node={PAIN_NETWORK["competition-of-pain"]} />
      </div>

      <p className="mt-8 text-sm text-text-faint">
        Related layer:{" "}
        <Link
          href={PAIN_NETWORK["market-signals"].path}
          className="focus-ring text-accent underline-offset-4 hover:underline"
        >
          Market Signals — The Grievance Economy
        </Link>
      </p>
    </div>
  );
}
