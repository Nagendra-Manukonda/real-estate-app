import { Property } from "@/app/types/property";
import { formatPrice } from "@/app/lib/formatPrice";

export default function DealCard({ property }: { property: Property }) {
    return (
        <div className="flex items-center gap-4 rounded-card border border-line p-3">
            <img src={property.img} alt={property.title} className="h-16 w-16 rounded-md object-cover" />
            <div className="flex-1">
                <p className="font-display text-sm font-semibold text-ink">{property.title}</p>
                <p className="text-xs text-ink-soft">{property.city} · {formatPrice(property.price)}</p>
            </div>
            <span className="shrink-0 rounded-md bg-brick/10 px-2 py-1 text-[11px] font-semibold text-brick">
                {property.deal?.label}
            </span>
        </div>
    );
}