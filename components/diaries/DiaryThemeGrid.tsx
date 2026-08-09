import Link from "next/link";
import type { DiaryThemeIndex } from "@/lib/types";

export function DiaryThemeGrid({
  themes,
  basePath,
  activeTheme,
}: {
  themes: DiaryThemeIndex[];
  basePath: string;
  activeTheme?: string;
}) {
  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {themes.map((theme) => {
        const active = activeTheme === theme.theme;
        return (
          <li key={theme.id}>
            <Link
              href={`${basePath}?theme=${theme.theme}`}
              className={`focus-ring block border px-4 py-4 transition-colors ${
                active
                  ? "border-accent"
                  : "border-border-soft hover:border-text-faint"
              }`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <p className="editorial text-lg text-text">{theme.label}</p>
                <span className="text-[0.65rem] tracking-wide text-text-faint">
                  {theme.indexedCount > 0
                    ? `${theme.indexedCount} indexed`
                    : "Indexing in progress"}
                </span>
              </div>
              <p className="jp-serif mt-2 text-sm text-text-soft">
                {theme.labelJa}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
