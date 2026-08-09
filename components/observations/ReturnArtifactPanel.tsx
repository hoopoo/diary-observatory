import { returnArtifacts } from "@/data/observations/the-manuscripts-that-were-not-chosen";

export function ReturnArtifactPanel() {
  return (
    <aside className="not-prose my-10 border border-border px-5 py-6">
      <p className="label">Return artifacts</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">返送の物証</p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {returnArtifacts.map((item) => (
          <li
            key={item.id}
            className="border border-border px-3 py-2 text-sm text-text-soft"
          >
            <span className="block text-[0.65rem] tracking-wide text-text-faint">
              {item.label}
            </span>
            {item.labelJa}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-text-faint">
        著作権保護中の手紙本文を長く転載しない。
      </p>
    </aside>
  );
}
