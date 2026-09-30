"use client";

import { useId } from "react";
import { AMENITIES } from "@/app/lib/constants";
import { AmenityKey } from "@/app/types/property";

export default function Amenities({ selected, onToggle }: { selected: AmenityKey[]; onToggle: (key: AmenityKey) => void }) {
    const groupId = useId();

    return (
        <div className="flex flex-col gap-2">
            <span id={groupId} className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Amenities</span>
            <div role="group" aria-labelledby={groupId} className="flex flex-col gap-1.5">
                {AMENITIES.map((a) => (
                    <label key={a.key} className="flex items-center gap-2 cursor-pointer text-[13px] text-ink-soft">
                        <input type="checkbox" checked={selected.includes(a.key)} onChange={() => onToggle(a.key)} className="accent-primary cursor-pointer" />
                        {a.label}
                    </label>
                ))}
            </div>
        </div>
    );
}