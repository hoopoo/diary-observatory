import type { Metadata } from "next";
import Link from "next/link";
import { SameDayComparison } from "@/components/SameDayComparison";
import { comparisons } from "@/data/comparisons";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Same Day｜Diary Observatory" },
  description:
    "同じ日付を複数の日記・都市・人生で横断比較するSame Day一覧。一人の記録から始まる未完成の比較を含む。",
  openGraph: {
    title: "Same Day｜Diary Observatory",
    description:
      "同じ日付を複数の日記・都市・人生で横断比較するSame Day一覧。",
    type: "website",
    url: `${SITE_URL}/same-day`,
  },
};

export default function SameDayIndexPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <p className="label">Same Day, Different Lives</p>
      <h1 className="editorial mt-3 text-4xl text-text">Same Day</h1>
      <p className="jp-heading mt-3 text-xl">同じ日、別の人生</p>
      <p className="mt-4 max-w-2xl text-sm text-text-soft">
        同じ日付を複数の日記で比較する。一件しかない日も、未完成であることを前提に公開する。
      </p>

      <div className="mt-10">
        <SameDayComparison items={comparisons} />
      </div>

      <p className="mt-10 text-xs text-text-faint">
        Legacy list also available at{" "}
        <Link
          href="/compare"
          className="focus-ring underline-offset-4 hover:underline"
        >
          /compare
        </Link>
        .
      </p>
    </div>
  );
}
