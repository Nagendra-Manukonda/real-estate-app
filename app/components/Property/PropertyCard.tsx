"use client";

import { Bed, Bath, MapPin, Ruler } from "lucide-react";
import { Property } from "@/app/types/property";
import { formatPrice } from "@/app/lib/formatPrice";

import FavouriteButton from "./FavouriteButton";
import ImageCarousel from "./ImageCarousel";
import PropertyBadges from "./PropertyBadge";

interface PropertyCardProps {
  property: Property;
  saved: boolean;
  onToggle: (id: number) => void;
}

export default function PropertyCard({
  property,
  saved,
  onToggle,
}: PropertyCardProps) {
  return (
    <article
      className="relative flex flex-col overflow-hidden rounded-3xl border border-line bg-panel shadow-sm duration-300 transition-shadow  hover:shadow-2xl
      "
    >
      <div className="relative aspect-[4/3] bg-surface">
        <ImageCarousel images={property.images} />

        <PropertyBadges property={property} />

        <FavouriteButton
          saved={saved}
          onToggle={() => onToggle(property.id)}
        />
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-lg font-semibold text-primary">
            {formatPrice(property.price)}
          </span>

          <span className="flex items-center gap-1 text-[11px] font-semibold text-ink-soft">
            <MapPin size={12} />
            {property.city}
          </span>
        </div>

        <h3 className="font-display text-[15px] font-semibold text-ink">
          {property.title}
        </h3>

        <div className="mt-1 flex gap-4 text-xs text-ink-soft">
          <span className="flex items-center gap-1">
            <Bed size={13} />
            {property.beds} Beds
          </span>

          <span className="flex items-center gap-1">
            <Bath size={13} />
            {property.baths} Baths
          </span>

          <span className="flex items-center gap-1">
            <Ruler size={13} />
            {property.area.toLocaleString()} sqft
          </span>
        </div>
      </div>
    </article>
  );
}