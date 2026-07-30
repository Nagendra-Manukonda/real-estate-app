"use client";

export default function BathroomFilter({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Min baths</span>
      <select value={value} onChange={(e) => onChange(Number(e.target.value))}
        className="rounded-lg border cursor-pointer border-line bg-paper px-2.5 py-2 text-[13px] text-ink outline-none">
        {[0, 1, 2, 3, 4].map((n) => <option key={n} value={n}>{n === 0 ? "Any" : `${n}+`}</option>)}
      </select>
    </div>
  );
}