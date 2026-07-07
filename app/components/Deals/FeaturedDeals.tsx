import { Tag } from "lucide-react";
import { PROPERTIES } from "@/app/data/properties";
import DealCard from "./DealCard";

export default function FeaturedDeals() {
    const deals = PROPERTIES.filter((p) => p.deal);

    return (
        <section id="deals" className="border-y border-line bg-panel">
            <div className="mx-auto max-w-8xl px-4 py-14 md:px-6">
                <div className="mb-6 flex items-center gap-2">
                    <Tag size={18} className="text-brick" />
                    <h2 className="font-display text-2xl font-semibold text-ink">Featured deals</h2>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {deals.map((p) => (
                        <DealCard key={p.id} property={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}