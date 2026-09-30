import { PropertyType } from "@/app/types/property";

export const SEARCH_DEBOUNCE_MS = 500;
export const SEARCH_MIN_LENGTH = 2;

export const PAGE_SIZE = 9;

export const TYPES: PropertyType[] = ["Apartment", "Villa", "Independent House", "Studio"];

export const NAV_LINKS = [
  { id: "listings", label: "Listings" },
  { id: "deals", label: "Deals" },
  { id: "pro", label: "Pro" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export const AMENITIES = [
  { key: "furnished", label: "Furnished" },
  { key: "parking", label: "Parking" },
  { key: "pet", label: "Pet friendly" },
  { key: "pool", label: "Swimming pool" },
  { key: "garden", label: "Garden" },
] as const;