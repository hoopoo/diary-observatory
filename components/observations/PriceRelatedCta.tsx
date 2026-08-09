import Link from "next/link";

const LINKS = [
  {
    title: "酒は、作家を説明しすぎる",
    href: "/observations/alcohol-explains-writers-too-easily",
  },
  {
    title: "三つの都市、三つの生活速度",
    href: "/observations/three-cities-three-speeds",
  },
  {
    title: "西村賢太とブコウスキー",
    href: "/compare/nishimura-bukowski",
  },
  {
    title: "三人の都市記録者",
    href: "/compare/urban-diarists",
  },
];

export function PriceRelatedCta() {
  return (
    <aside className="not-prose my-14 border border-border px-6 py-8">
      <p className="label">Related observation and comparison</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="focus-ring block border border-border px-4 py-4 text-sm text-text-soft hover:border-text-faint"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
