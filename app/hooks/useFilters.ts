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

/**
 * Owns filter state AND the search box's debouncing.
 *
 * - `rawSearch` / `setRawSearch` — bind this to the search input directly.
 *   It updates on every keystroke so typing feels instant.
 * - `search` — the value that should actually be used to filter the list.
 *   It only updates SEARCH_DEBOUNCE_MS after the user stops typing, and
 *   only once at least SEARCH_MIN_LENGTH characters have been entered
 *   (clearing the box back to empty resets the filter immediately).
 *
 * This is what stops the property list from re-filtering on every single
 * letter typed.
 */
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
            // if it's 1 character (below the minimum), we simply don't update
            // `search` yet — the previous, valid filter stays in place.
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