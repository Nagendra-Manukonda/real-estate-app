import { Sparkles, Tag } from "lucide-react";
import Badge from "@/app/components/Common/Badge";
import { Property } from "@/app/types/property";


export default function PropertyBadges({ property }: { property: Property }) {
  return (
    <>
      <Badge tone="neutral" className="absolute left-3 top-3 px-3! py-1!">{property.type}</Badge>
      {property.isPro && (
        <Badge className="absolute bg-yellow-400 left-3 top-11 px-3! py-1!">
          <Sparkles size={11} /> Pro
        </Badge>
      )}
      {property.deal && (
        <Badge tone="danger" className="absolute left-3 bottom-4 px-3! py-1!">
          <Tag size={11} /> {property.deal.label}
        </Badge>
      )}
    </>
  );
}