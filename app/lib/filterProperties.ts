import { Property, Filters } from "@/app/types/property";

interface FilterArgs {
  filters: Filters;
  search: string;
  showSavedOnly: boolean;
  favorites: Set<number>;
}

function toPrice(value: string): number | null {
  if (!value.trim()) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

export function filterProperties(properties: Property[], { filters, search, showSavedOnly, favorites }: FilterArgs): Property[] {
  const q = search.trim().toLowerCase();
  const min = toPrice(filters.min);
  const max = toPrice(filters.max);

  return properties.filter((p) => {
    if (showSavedOnly && !favorites.has(p.id)) return false;
    if (q && !p.title.toLowerCase().includes(q) && !p.city.toLowerCase().includes(q)) return false;
    if (min !== null && p.price < min) return false;
    if (max !== null && p.price > max) return false;
    if (filters.types.length && !filters.types.includes(p.type)) return false;
    if (filters.city !== "Any" && p.city !== filters.city) return false;
    if (p.beds < filters.beds) return false;
    if (p.baths < filters.baths) return false;
    if (filters.amenities.length && !filters.amenities.every((a) => p[a])) return false;
    return true;
  });
}
