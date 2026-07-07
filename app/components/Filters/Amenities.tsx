"use client";

import { AMENITIES } from "@/app/lib/constants";

export default function Amenities({ selected, onToggle }: { selected: string[]; onToggle: (key: string) => void }) {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-ink">Amenities</span>
            <div className="flex flex-col gap-1.5">
                {AMENITIES.map((a) => (
                    <label key={a.key} className="flex items-center gap-2 text-[13px] text-ink-soft">
                        <input type="checkbox" checked={selected.includes(a.key)} onChange={() => onToggle(a.key)} className="accent-brass" />
                        {a.label}
                    </label>
                ))}
            </div>
        </div>
    );
}