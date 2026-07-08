import { Sparkles, Tag } from "lucide-react";
import Badge from "@/app/components/Common/Badge";
import { Property } from "@/app/types/property";

export default function PropertyBadges({ property }: { property: Property }) {
  return (
    <>
      <Badge tone="ink" className="absolute left-2 top-2">{property.type}</Badge>
      {property.isPro && (
        <Badge tone="brass" className="absolute left-2 top-9">
          <Sparkles size={11} /> Pro
        </Badge>
      )}
      {property.deal && (
        <Badge tone="brick" className="absolute right-10 top-2">
          <Tag size={11} /> {property.deal.label}
        </Badge>
      )}
    </>
  );
}