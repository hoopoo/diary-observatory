import Link from "next/link";
import { mainNav } from "@/data/navigation";
import {
  BOOK_URL,
  FOOTER_TEXT,
  FOOTER_TEXT_JA,
  SHIRO_URL,
  SITE_NAME,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pb-16 pt-8 md:px-8">
      <div className="border-t border-border-soft pt-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="editorial text-sm text-text">{SITE_NAME}</p>
            <p className="mt-2 text-xs text-text-faint">{FOOTER_TEXT}</p>
            <p className="jp-serif mt-1 text-xs text-text-faint">
              {FOOTER_TEXT_JA}
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs text-text-faint">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-text-soft">
                {item.label}
              </Link>
            ))}
            <a
              href={SHIRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-soft"
            >
              SHIRO &amp; Co.
            </a>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-soft"
            >
              Book Archive
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
