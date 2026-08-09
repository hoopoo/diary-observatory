export function DistributedEditorialFunctionPanel() {
  const nodes = ["AI", "Algorithm", "Author", "Reader", "Editor (residual)"];
  return (
    <aside className="not-prose my-10 border border-border px-5 py-6">
      <p className="label">Distributed editorial function</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {nodes.map((node) => (
          <li
            key={node}
            className="border border-border px-3 py-1.5 text-sm text-text-soft"
          >
            {node}
          </li>
        ))}
      </ul>
    </aside>
  );
}
