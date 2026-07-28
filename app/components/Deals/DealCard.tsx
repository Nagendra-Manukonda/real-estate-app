import { Property } from "@/app/types/property";
import { formatPrice } from "@/app/lib/formatPrice";

// Status-badge color per deal type — matches the reference design's
// amber "Price drop", green "Open house", and blue "New listing" tags.
const DEAL_COLORS: Record<string, string> = {
    "Price drop": "#F59E0B",
    "Open house": "#16A34A",
    "New listing": "#2563EB",
};

export default function DealCard({ property }: { property: Property }) {
    const dealColor = property.deal ? (DEAL_COLORS[property.deal.label] ?? "#F59E0B") : undefined;

    return (
        <div className="relative flex items-center gap-3 rounded-2xl border border-line bg-panel p-3 pr-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={property.img}
                alt={property.title}
                className="h-14 w-14 shrink-0 rounded-xl object-cover"
            />

            <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-ink">{property.title}</p>
                <p className="truncate text-[11px] text-ink-soft">{property.city} · {formatPrice(property.price)}</p>
            </div>

            {property.deal && (
                <span
                    className="shrink-0 rounded-md px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-white"
                    style={{ backgroundColor: dealColor }}
                >
                    {property.deal.label}
                </span>
            )}
        </div>
    );
}