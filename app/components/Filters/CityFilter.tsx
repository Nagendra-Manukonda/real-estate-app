"use client";

import { CITIES } from "@/app/data/properties";
import { filterSelectClass } from "@/app/lib/styles";

export default function CityFilter({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    return (
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wide text-ink-soft">
            City
            <select value={value} onChange={(e) => onChange(e.target.value)} className={filterSelectClass}>
                <option>Any</option>
                {CITIES.map((c) => <option key={c}>{c}</option>)}
            </select>
        </label>
    );
}
