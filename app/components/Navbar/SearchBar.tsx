"use client";

import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex w-full items-center gap-2 rounded-lg border border-line bg-paper px-3 py-2 text-ink-soft">
      <Search size={15} />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name or city…"
        className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft"
      />
    </div>
  );
}
