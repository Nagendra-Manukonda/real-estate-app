"use client";

import { useEffect, useState } from "react";
import { Filters } from "@/app/types/property";
import { SEARCH_DEBOUNCE_MS, SEARCH_MIN_LENGTH } from "@/app/lib/constants";

export const DEFAULT_FILTERS: Filters = {
    min: "",
    max: "",
    types: [],
    city: "Any",
    beds: 0,
    baths: 0,
    amenities: [],
};

export function useFilters() {
    const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
    const [rawSearch, setRawSearch] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const trimmed = rawSearch.trim();

        const timer = setTimeout(() => {
            if (trimmed.length === 0 || trimmed.length >= SEARCH_MIN_LENGTH) {
                setSearch(trimmed);
            }
        }, SEARCH_DEBOUNCE_MS);

        return () => clearTimeout(timer);
    }, [rawSearch]);

    const reset = () => {
        setFilters(DEFAULT_FILTERS);
        setRawSearch("");
        setSearch("");
    };

    return { filters, setFilters, rawSearch, setRawSearch, search, reset };
}