export type PropertyType = "Apartment" | "Villa" | "Independent House" | "Studio";

export interface GalleryImage {
  url: string;
  label: string;
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
  img: string;
  images: GalleryImage[];
  isPro?: boolean;
  deal?: {
    label: string;
    discountPct: number;
  };
}
export interface Filters {
  min: string;
  max: string;
  types: PropertyType[];
  city: string;
  beds: number;
  baths: number;
  amenities: string[];
}