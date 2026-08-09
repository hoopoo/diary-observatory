import { EpistemicLabel } from "@/components/EpistemicLabel";
import { silenceClasses } from "@/data/observations/the-manuscripts-that-were-not-chosen";

export function SilenceClassification() {
  return (
    <aside className="not-prose my-10">
      <p className="label">Silence classification</p>
      <p className="jp-serif mt-1 text-sm text-text-faint">沈黙の分類</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <EpistemicLabel kind="observation" />
        <span className="border border-border px-2 py-0.5 text-[0.65rem] text-text-faint">
          Do not assign states by speculation
        </span>
      </div>
      <ul className="mt-5 space-y-2">
        {silenceClasses.map((item) => (
          <li
            key={item.id}
            className="flex flex-wrap items-baseline justify-between gap-2 border border-border px-3 py-2 text-sm text-text-soft"
          >
            <span>
              <span className="block text-[0.65rem] tracking-wide text-text-faint">
                {item.label}
              </span>
              {item.labelJa}
            </span>
            <span className="text-[0.65rem] tracking-wide text-text-faint">
              {item.verificationStatus}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
