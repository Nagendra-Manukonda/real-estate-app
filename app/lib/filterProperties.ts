import { Property, Filters } from "@/app/types/property";

interface FilterArgs {
    filters: Filters;
    search: string;
    showSavedOnly: boolean;
    favorites: Set<number>;
}

/**
 * Pure filtering function — no state, no hooks — so it's easy to unit test
 * and easy to reason about independently of React.
 */
export function filterProperties(properties: Property[], { filters, search, showSavedOnly, favorites }: FilterArgs): Property[] {
    const q = search.trim().toLowerCase();

    return properties.filter((p) => {
        if (showSavedOnly && !favorites.has(p.id)) return false;
        if (q && !p.title.toLowerCase().includes(q) && !p.city.toLowerCase().includes(q)) return false;
        if (filters.min && p.price < Number(filters.min)) return false;
        if (filters.max && p.price > Number(filters.max)) return false;
        if (filters.types.length && !filters.types.includes(p.type)) return false;
        if (filters.city !== "Any" && p.city !== filters.city) return false;
        if (p.beds < filters.beds) return false;
        if (p.baths < filters.baths) return false;
        if (filters.amenities.length && !filters.amenities.every((a) => (p as unknown as Record<string, boolean>)[a])) return false;
        return true;
    });
}