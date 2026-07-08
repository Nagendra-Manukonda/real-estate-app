"use client";

import { useState } from "react";
import { Bed, Bath, MapPin, Ruler } from "lucide-react";
import { Property } from "@/app/types/property";
import { formatPrice } from "@/app/lib/formatPrice";
import Modal from "@/app/components/Common/Modal";
import FavouriteButton from "./FavouriteButton";
import ImageCarousel from "./ImageCarousel";
import PropertyBadges from "./PropertyBadge";
import PropertyDetails from "./PropertyDetails";

export default function PropertyCard({
  property,
  saved,
  onToggle,
}: {
  property: Property;
  saved: boolean;
  onToggle: (id: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const p = property;

  return (
    <>
      <article className="flex flex-col overflow-hidden rounded-card border border-line bg-panel transition-all hover:-translate-y-0.5 hover:shadow-lg">
        <div className="relative aspect-[4/3] cursor-pointer bg-line" onClick={() => setOpen(true)}>
          <ImageCarousel images={p.images} />
          <PropertyBadges property={p} />
          <FavouriteButton saved={saved} onToggle={() => onToggle(p.id)} />
        </div>

        <button type="button" onClick={() => setOpen(true)} className="flex flex-col gap-1.5 p-3.5 text-left">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[15px] font-semibold text-ink">{formatPrice(p.price)}</span>
            <span className="flex items-center gap-1 text-[11.5px] font-semibold text-sage">
              <MapPin size={12} /> {p.city}
            </span>
          </div>
          <h3 className="font-display text-[14.5px] font-semibold text-ink">{p.title}</h3>
          <div className="mt-0.5 flex gap-3 text-xs text-ink-soft">
            <span className="flex items-center gap-1"><Bed size={13} /> {p.beds} bed</span>
            <span className="flex items-center gap-1"><Bath size={13} /> {p.baths} bath</span>
            <span className="flex items-center gap-1"><Ruler size={13} /> {p.area.toLocaleString()} sqft</span>
          </div>
        </button>
      </article>

      <Modal open={open} onClose={() => setOpen(false)}>
        <PropertyDetails property={p} />
      </Modal>
    </>
  );
}