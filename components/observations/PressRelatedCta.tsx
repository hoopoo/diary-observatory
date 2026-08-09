import Link from "next/link";

const OBS = [
  {
    title: "一日の値段",
    href: "/observations/the-price-of-an-ordinary-day",
  },
  {
    title: "三つの都市、三つの生活速度",
    href: "/observations/three-cities-three-speeds",
  },
  {
    title: "平成の断腸亭日乗",
    href: "/observations/heisei-dancho-tei-nichijo",
  },
  {
    title: "酒は、作家を説明しすぎる",
    href: "/observations/alcohol-explains-writers-too-easily",
  },
];

const CMP = [
  {
    title: "Nishimura and Bukowski",
    href: "/compare/nishimura-bukowski",
  },
  {
    title: "Three Urban Diarists",
    href: "/compare/urban-diarists",
  },
  {
    title: "From Kafū to Nishimura",
    href: "/compare/kafu-nishimura",
  },
];

export function PressRelatedCta() {
  return (
    <aside className="not-prose my-14 space-y-10">
      <section>
        <p className="label">Related Observations</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {OBS.map((o) => (
            <li key={o.href}>
              <Link
                href={o.href}
                className="focus-ring block border border-border px-4 py-4 text-sm text-text-soft hover:border-text-faint"
              >
                {o.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <p className="label">Related Comparisons</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {CMP.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="focus-ring block border border-border px-4 py-4 text-sm text-text-soft hover:border-text-faint"
              >
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
