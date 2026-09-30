"use client";

export default function PriceFilter({
    min, max, onChange,
}: { min: string; max: string; onChange: (patch: { min?: string; max?: string }) => void }) {
    const digits = (value: string) => value.replace(/[^0-9]/g, "");

    return (
        <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Price range</span>
            <div className="flex items-center gap-2">
                <div className="flex flex-1 items-center gap-1 rounded-lg border border-line bg-paper px-2.5 py-2">
                    <span className="text-xs text-ink-soft" aria-hidden="true">$</span>
                    <input type="number" inputMode="numeric" min={0} placeholder="Min" aria-label="Minimum price in dollars"
                        value={min} onChange={(e) => onChange({ min: digits(e.target.value) })}
                        className="w-full bg-transparent font-mono text-[13px] text-ink outline-none" />
                </div>
                <span className="text-line" aria-hidden="true">—</span>
                <div className="flex flex-1 items-center gap-1 rounded-lg border border-line bg-paper px-2.5 py-2">
                    <span className="text-xs text-ink-soft" aria-hidden="true">$</span>
                    <input type="number" inputMode="numeric" min={0} placeholder="Max" aria-label="Maximum price in dollars"
                        value={max} onChange={(e) => onChange({ max: digits(e.target.value) })}
                        className="w-full bg-transparent font-mono text-[13px] text-ink outline-none" />
                </div>
            </div>
        </div>
    );
}
