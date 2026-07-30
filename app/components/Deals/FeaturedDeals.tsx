import { PROPERTIES } from "@/app/data/properties";
import DealCard from "./DealCard";

export default function FeaturedDeals() {
    const deals = PROPERTIES.filter((p) => p.deal).slice(0, 6);

    return (
        <section id="deals" className="border-y border-line py-20 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <span className="inline-flex items-center rounded-full border border-secondary bg-yellow-400/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                    Featured Deals
                </span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
                    Handpicked properties <span className="text-primary">with exclusive offers.</span>
                </h2>
                <p className="mt-2 max-w-xl text-sm text-ink-soft">
                    Explore our featured homes, premium listings, and limited-time offers selected by our property experts.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {deals.map((p) => <DealCard key={p.id} property={p} />)}
                </div>
            </div>
        </section>
    );
}