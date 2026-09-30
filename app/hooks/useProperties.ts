"use client";

import { useEffect, useMemo, useState } from "react";
import { PROPERTIES } from "@/app/data/properties";
import { filterProperties } from "@/app/lib/filterProperties";
import { useFilters } from "./useFilters";
import { useFavorites } from "./useFavorites";

const UNFILTERED = new Set<number>();

export function useProperties(showSavedOnly: boolean) {
    const { filters, setFilters, rawSearch, setRawSearch, search, reset } = useFilters();
    const { favorites, count, isSaved, toggle } = useFavorites();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 350);
        return () => clearTimeout(timer);
    }, []);

    const favoritesForFilter = showSavedOnly ? favorites : UNFILTERED;

    const properties = useMemo(
        () => filterProperties(PROPERTIES, { filters, search, showSavedOnly, favorites: favoritesForFilter }),
        [filters, search, showSavedOnly, favoritesForFilter]
    );

    return {
        properties,
        loading,
        filters,
        setFilters,
        rawSearch,
        setRawSearch,
        resetFilters: reset,
        count,
        isSaved,
        toggle,
    };
}