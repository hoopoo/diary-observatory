import Link from "next/link";

const LINKS = [
  {
    href: "/observations/before-the-platform-small-press",
    title: "プラットフォーム以前の小出版",
  },
  {
    href: "/compare/urban-diarists",
    title: "Three Urban Diarists",
  },
  {
    href: "/compare/nishimura-bukowski",
    title: "Nishimura and Bukowski",
  },
  {
    href: "/compare/kafu-nishimura",
    title: "From Kafū to Nishimura",
  },
];

export function EditorRelatedCta() {
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
