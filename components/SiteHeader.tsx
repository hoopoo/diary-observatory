"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { mainNav } from "@/data/navigation";
import { SHIRO_URL, SITE_NAME } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border-soft bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href="/"
          onClick={closeMenu}
          className="focus-ring editorial group text-[0.95rem] leading-snug text-text transition-opacity hover:opacity-70"
        >
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring pb-0.5 text-[0.8rem] tracking-wide transition-colors ${
                  active
                    ? "nav-active text-text"
                    : "text-text-faint hover:text-text"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={SHIRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-[0.8rem] tracking-wide text-text-faint transition-colors hover:text-text"
          >
            SHIRO &amp; Co.
          </a>
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex items-center gap-2 border border-border px-3 py-1.5 text-xs tracking-wide text-text-faint xl:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          Menu
        </button>
      </div>

      {open && (
        <div
          id={panelId}
          className="border-t border-border bg-bg-raised px-5 py-5 xl:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`focus-ring text-sm ${
                    active ? "text-text" : "text-text-faint"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={SHIRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring text-sm text-text-faint"
              onClick={closeMenu}
            >
              SHIRO &amp; Co.
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
