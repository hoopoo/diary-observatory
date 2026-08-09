import { lifeCategories } from "@/data/diaries/horoki";

export function LifeCategoriesPanel() {
  return (
    <aside className="not-prose my-10">
      <h3 className="editorial text-2xl text-text">
        What kind of life does Hōrōki preserve?
      </h3>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        『放浪記』は、どのような生活を残したか
      </p>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {lifeCategories.map((cat) => (
          <li
            key={cat.id}
            className="border border-border px-3 py-3 text-sm text-text-soft"
          >
            <span className="block text-[0.65rem] tracking-wide text-text-faint">
              {cat.label}
            </span>
            {cat.labelJa}
            <p className="mt-2 text-[0.65rem] tracking-wide text-text-faint">
              Indexed · Verified · Source-needed · Unknown — Not indexed
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-text-faint">
        件数は実データから取得する。データがない場合は0件ではなく Not indexed。
      </p>
    </aside>
  );
}
