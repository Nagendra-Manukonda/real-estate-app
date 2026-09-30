"use client";

import { useId } from "react";
import { TYPES } from "@/app/lib/constants";
import { PropertyType } from "@/app/types/property";

export default function PropertyTypeFilter({
    selected, onToggle,
}: { selected: PropertyType[]; onToggle: (t: PropertyType) => void }) {
    const groupId = useId();

    return (
        <div className="flex flex-col gap-2">
            <span id={groupId} className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Property type</span>
            <div role="group" aria-labelledby={groupId} className="flex flex-col gap-1.5">
                {TYPES.map((t) => (
                    <label key={t} className="flex cursor-pointer items-center gap-2 text-[13px] text-ink-soft">
                        <input type="checkbox" checked={selected.includes(t)} onChange={() => onToggle(t)} className="accent-primary cursor-pointer" />
                        {t}
                    </label>
                ))}
            </div>
        </div>
    );
}