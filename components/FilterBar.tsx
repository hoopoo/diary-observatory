"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

type Option = { value: string; label: string };

export function FilterBar({
  pathname,
  filters,
}: {
  pathname: string;
  filters: Array<{
    key: string;
    label: string;
    options: Option[];
  }>;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  function update(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (!value) params.delete(key);
    else params.set(key, value);
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <div className="flex flex-col gap-4">
      {filters.map((filter) => {
        const active = searchParams.get(filter.key) ?? "";
        return (
          <fieldset key={filter.key}>
            <legend className="label mb-2">{filter.label}</legend>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="filter-chip focus-ring"
                data-active={active === "" ? "true" : "false"}
                onClick={() => update(filter.key, "")}
              >
                All
              </button>
              {filter.options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className="filter-chip focus-ring"
                  data-active={active === option.value ? "true" : "false"}
                  onClick={() => update(filter.key, option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </fieldset>
        );
      })}
    </div>
  );
}
