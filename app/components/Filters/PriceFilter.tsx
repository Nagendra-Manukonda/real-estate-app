"use client";

export default function PriceFilter({
    min,
    max,
    onChange,
}: {
    min: string;
    max: string;
    onChange: (patch: { min?: string; max?: string }) => void;
}) {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-ink">Price range</span>
            <div className="flex items-center gap-2">
                <div className="flex flex-1 items-center gap-1 rounded-md border border-line bg-paper px-2.5 py-1.5">
                    <span className="text-xs text-ink-soft">$</span>
                    <input
                        type="number"
                        placeholder="Min"
                        value={min}
                        onChange={(e) => onChange({ min: e.target.value })}
                        className="w-full bg-transparent font-mono text-[13px] text-ink outline-none"
                    />
                </div>
                <span className="text-line">—</span>
                <div className="flex flex-1 items-center gap-1 rounded-md border border-line bg-paper px-2.5 py-1.5">
                    <span className="text-xs text-ink-soft">$</span>
                    <input
                        type="number"
                        placeholder="Max"
                        value={max}
                        onChange={(e) => onChange({ max: e.target.value })}
                        className="w-full bg-transparent font-mono text-[13px] text-ink outline-none"
                    />
                </div>
            </div>
        </div>
    );
}
