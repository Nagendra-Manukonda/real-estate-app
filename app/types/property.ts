export type PropertyType = "Apartment" | "Villa" | "Independent House" | "Studio";

export interface GalleryImage {
  url: string;
  label: string; // e.g. "Bedroom", "Garden" — shown as a caption in the carousel
}

export interface Property {
  id: number;
  title: string;
  price: number;
  beds: number;
  baths: number;
  city: string;
  type: PropertyType;
  area: number;
  furnished: boolean;
  parking: boolean;
  pet: boolean;
  pool: boolean;
  garden: boolean;
  img: string; // cover / exterior photo, used in small thumbnails (e.g. deals list)
  images: GalleryImage[]; // full gallery shown in the card carousel + details modal
  isPro?: boolean; // featured / priority-placement listing (Pro plan)
  deal?: {
    label: string; // e.g. "Price drop", "Open house"
    discountPct: number;
  };
}

// Note: search text is handled separately (see hooks/useFilters.ts) so it can
// be debounced independently of the rest of the filters.
export interface Filters {
  min: string;
  max: string;
  types: PropertyType[];
  city: string;
  beds: number;
  baths: number;
  amenities: string[];
}

