"use client";

import { RotateCcw } from "lucide-react";
import { Filters, PropertyType } from "@/app/types/property";
import PriceFilter from "./PriceFilter";
import PropertyTypeFilter from "./PropertyType";
import CityFilter from "./CityFilter";
import BedroomFilter from "./BedroomFilter";
import BathroomFilter from "./BathroomFilter";
import Amenities from "./Amenities";

export default function FilterSidebar({
    filters,
    setFilters,
    onReset,
}: {
    filters: Filters;
    setFilters: (updater: (f: Filters) => Filters) => void;
    onReset: () => void;
}) {
    const toggleType = (t: PropertyType) =>
        setFilters((f) => ({ ...f, types: f.types.includes(t) ? f.types.filter((x) => x !== t) : [...f.types, t] }));

    const toggleAmenity = (key: string) =>
        setFilters((f) => ({ ...f, amenities: f.amenities.includes(key) ? f.amenities.filter((x) => x !== key) : [...f.amenities, key] }));

    return (
        <div className="flex w-full flex-col gap-6 md:w-64">
            <div className="flex items-center justify-between">
                <h2 className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">Refine</h2>
                <button onClick={onReset} className="flex items-center gap-1 text-[11.5px] font-semibold text-brass">
                    <RotateCcw size={13} /> Reset
                </button>
            </div>
            <PriceFilter min={filters.min} max={filters.max} onChange={(patch) => setFilters((f) => ({ ...f, ...patch }))} />
            <PropertyTypeFilter selected={filters.types} onToggle={toggleType} />
            <CityFilter value={filters.city} onChange={(city) => setFilters((f) => ({ ...f, city }))} />
            <div className="grid grid-cols-2 gap-3">
                <BedroomFilter value={filters.beds} onChange={(beds) => setFilters((f) => ({ ...f, beds }))} />
                <BathroomFilter value={filters.baths} onChange={(baths) => setFilters((f) => ({ ...f, baths }))} />
            </div>
            <Amenities selected={filters.amenities} onToggle={toggleAmenity} />
        </div>
    );
}
