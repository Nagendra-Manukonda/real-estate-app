"use client";

import { useEffect, useMemo, useState } from "react";
import { PROPERTIES } from "@/app/data/properties";
import { filterProperties } from "@/app/lib/filterProperties";
import { useFilters } from "./useFilters";
import { useFavorites } from "./useFavorites";

export function useProperties(showSavedOnly: boolean) {
    const { filters, setFilters, rawSearch, setRawSearch, search, reset } = useFilters();
    const { favorites, count, isSaved, toggle } = useFavorites();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 350);
        return () => clearTimeout(timer);
    }, []);

    const properties = useMemo(
        () => filterProperties(PROPERTIES, { filters, search, showSavedOnly, favorites }),
        [filters, search, showSavedOnly, favorites]
    );

    return {
        properties,
        total: PROPERTIES.length,
        loading,
        filters,
        setFilters,
        rawSearch,
        setRawSearch,
        resetFilters: reset,
        favorites,
        count,
        isSaved,
        toggle,
    };
}