"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export function SearchInput({
  pathname = "/entities",
  placeholder = "人名、店名、地名、作品名を横断検索",
}: {
  pathname?: string;
  placeholder?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") ?? "");
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    setValue(searchParams.get("q") ?? "");
  }, [searchParams]);

  function commit(next: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (next.trim()) params.set("q", next.trim());
    else params.delete("q");
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <label className="block">
      <span className="label">Search</span>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") commit(value);
        }}
        onBlur={() => commit(value)}
        placeholder={placeholder}
        className="focus-ring mt-2 w-full border border-border bg-bg-raised px-3 py-2.5 text-sm text-text placeholder:text-text-faint"
        aria-busy={pending}
      />
    </label>
  );
}
