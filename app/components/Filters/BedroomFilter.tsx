"use client";

import { filterSelectClass } from "@/app/lib/styles";

export default function BedroomFilter({ value, onChange }: { value: number; onChange: (n: number) => void }) {
    return (
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wide text-ink-soft">
            Min beds
            <select value={value} onChange={(e) => onChange(Number(e.target.value))} className={filterSelectClass}>
                {[0, 1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n === 0 ? "Any" : `${n}+`}</option>)}
            </select>
        </label>
    );
}
