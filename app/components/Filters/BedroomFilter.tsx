"use client";

export default function BedroomFilter({ value, onChange }: { value: number; onChange: (n: number) => void }) {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-ink">Min beds</span>
            <select
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="rounded-md border border-line bg-paper px-2.5 py-1.5 text-[13px] text-ink outline-none"
            >
                {[0, 1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n === 0 ? "Any" : `${n}+`}</option>
                ))}
            </select>
        </div>
    );
}