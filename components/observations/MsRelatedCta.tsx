import Link from "next/link";

const LINKS = [
  {
    href: "/observations/where-did-the-editor-go",
    title: "編集者は消えたのか",
  },
  {
    href: "/observations/before-the-platform-small-press",
    title: "プラットフォーム以前の小出版",
  },
  {
    href: "/observations/the-price-of-an-ordinary-day",
    title: "一日の値段",
  },
  {
    href: "/compare/nishimura-bukowski",
    title: "Nishimura and Bukowski",
  },
  {
    href: "/compare/urban-diarists",
    title: "Three Urban Diarists",
  },
];

export function MsRelatedCta() {
  return (
    <aside className="not-prose my-12 border border-border px-5 py-6">
      <p className="label">Related</p>
      <ul className="mt-4 space-y-2 text-sm text-text-soft">
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="focus-ring underline-offset-4 hover:underline"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
