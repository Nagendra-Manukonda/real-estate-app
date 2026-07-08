"use client";

import { Bed, Bath, MapPin, Ruler, Check } from "lucide-react";
import { Property } from "@/app/types/property";
import { formatPrice } from "@/app/lib/formatPrice";
import { AMENITIES } from "@/app/lib/constants";
import ImageCarousel from "./ImageCarousel";


export default function PropertyDetails({ property }: { property: Property }) {
  const activeAmenities = AMENITIES.filter((a) => (property as unknown as Record<string, boolean>)[a.key]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <ImageCarousel images={property.images} />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-lg font-semibold text-ink">{formatPrice(property.price)}</span>
          <span className="flex items-center gap-1 text-xs font-semibold text-sage">
            <MapPin size={12} /> {property.city}
          </span>
        </div>
        <h3 className="font-display text-lg font-semibold text-ink">{property.title}</h3>
        <div className="mt-1 flex gap-4 text-xs text-ink-soft">
          <span className="flex items-center gap-1"><Bed size={13} /> {property.beds} bed</span>
          <span className="flex items-center gap-1"><Bath size={13} /> {property.baths} bath</span>
          <span className="flex items-center gap-1"><Ruler size={13} /> {property.area.toLocaleString()} sqft</span>
        </div>
      </div>

      {activeAmenities.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-ink">Amenities</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {activeAmenities.map((a) => (
              <span key={a.key} className="flex items-center gap-1 rounded-full border border-line px-2.5 py-1 text-[11.5px] text-ink-soft">
                <Check size={12} className="text-sage" /> {a.label}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}