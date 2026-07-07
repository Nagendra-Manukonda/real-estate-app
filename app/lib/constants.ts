import { PropertyType } from "@/app/types/property";

// --- Search debounce settings -------------------------------------------
// The search box updates its own text instantly (so typing feels normal),
// but the *actual filtering* waits until the user pauses for this many
// milliseconds, and only runs once at least SEARCH_MIN_LENGTH characters
// have been typed. This avoids re-filtering the whole list on every single
// keystroke. See hooks/useFilters.ts for where this is used.
export const SEARCH_DEBOUNCE_MS = 500;
export const SEARCH_MIN_LENGTH = 2;

// How many listings to show per page (like Amazon/Flipkart's numbered
// pagination) — see components/Common/Pagination.tsx + PropertyGrid.tsx.
export const PAGE_SIZE = 9;

export const TYPES: PropertyType[] = ["Apartment", "Villa", "Independent House", "Studio"];

export const AMENITIES = [
  { key: "furnished", label: "Furnished" },
  { key: "parking", label: "Parking" },
  { key: "pet", label: "Pet friendly" },
  { key: "pool", label: "Swimming pool" },
  { key: "garden", label: "Garden" },
] as const;