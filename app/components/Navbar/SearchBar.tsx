"use client";

import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex w-full items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-ink-soft">
      <Search size={15} />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search properties, suburbs or cities..."
        className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft"
      />
    </div>
  );
}