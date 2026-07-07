"use client";

import { CITIES } from "@/app/data/properties";

export default function CityFilter({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-ink">City</span>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="rounded-md border border-line bg-paper px-2.5 py-1.5 text-[13px] text-ink outline-none"
            >
                <option>Any</option>
                {CITIES.map((c) => (
                    <option key={c}>{c}</option>
                ))}
            </select>
        </div>
    );
}