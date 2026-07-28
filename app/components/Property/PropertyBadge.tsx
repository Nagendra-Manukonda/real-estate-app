import { Sparkles, Tag } from "lucide-react";
import Badge from "@/app/components/Common/Badge";
import { Property } from "@/app/types/property";

// Overlay badges shown on a card's photo: property type, Pro, and any deal
// (e.g. "Price drop", "Open house") — status labels straight from the data.
export default function PropertyBadges({ property }: { property: Property }) {
  return (
    <>
      <Badge tone="neutral" className="absolute left-3 top-3 !px-3 !py-1">{property.type}</Badge>
      {property.isPro && (
        <Badge tone="secondary" className="absolute left-3 top-11 !px-3 !py-1">
          <Sparkles size={11} /> Pro
        </Badge>
      )}
      {property.deal && (
        <Badge tone="danger" className="absolute right-14 top-3 !px-3 !py-1">
          <Tag size={11} /> {property.deal.label}
        </Badge>
      )}
    </>
  );
}