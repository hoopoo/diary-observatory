export function ThreeConditionsPanel() {
  const items = [
    {
      label: "Kafū",
      condition: "Environment",
      detail: "天候、季節、庭、身体",
    },
    {
      label: "Nishimura",
      condition: "Media",
      detail: "出版社、編集者、テレビ、移動",
    },
    {
      label: "Bukowski",
      condition: "Labor",
      detail: "勤務、疲労、賃金、夜の執筆",
    },
  ];

  return (
    <aside className="not-prose my-12">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="border border-border px-4 py-6 text-center md:text-left"
          >
            <p className="label">{item.label}</p>
            <p className="editorial mt-3 text-2xl text-accent">
              {item.condition}
            </p>
            <p className="jp-serif mt-3 text-sm text-text-soft">{item.detail}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-text-soft">
        These are not complete definitions. They are provisional centers of
        gravity visible in the currently indexed records.
      </p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        これは三人を固定的に定義するものではない。現在索引化された記録から見える、暫定的な重心である。
      </p>
    </aside>
  );
}
