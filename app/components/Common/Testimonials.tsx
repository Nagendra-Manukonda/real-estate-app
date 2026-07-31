import { Star } from "lucide-react";

const TESTIMONIALS = [
    { name: "Josh R.", meta: "Australian Homeowner", quote: "Listed our old place too — sold in under three weeks, no agent fees.", stars: 5 },
    { name: "Aisha M.", meta: "Australian Homeowner", quote: "The mortgage calculator matched what my lender quoted almost exactly.", stars: 5 },
    { name: "Connor B.", meta: "Australian Homeowner", quote: "Clean, fast, no clutter. Exactly what I wanted after work.", stars: 4 },
    { name: "Liam S.", meta: "Australian Homeowner", quote: "The search filters are incredibly intuitive. Found my dream villa in days.", stars: 4.5 },
];

export default function Testimonials() {
    const loop = [...TESTIMONIALS, ...TESTIMONIALS];

    return (
        <section className="overflow-hidden border-y border-line bg-panel py-14">
            <div className="mx-auto mb-8 max-w-7xl px-4 md:px-6">
                <h2 className="font-display text-3xl font-semibold text-ink">What buyers are saying</h2>
                <p className="mt-1 text-sm text-ink-soft">Real feedback from people who found their home through Porchlight.</p>
            </div>
            <div className="mx-auto mb-8 max-w-7xl">
                <div className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                    <div className="flex w-max animate-porchlight-scroll gap-4 px-6">
                        {loop.map((t, i) => (
                            <div key={i} className="w-64 shrink-0 rounded-3xl border border-line bg-paper p-5 shadow-sm">
                                <div className="mb-2 flex gap-0.5 text-secondary">
                                    {Array.from({ length: 5 }).map((_, s) => (
                                        <Star className="text-yellow-600" key={s} size={12} fill={s < t.stars ? "currentColor" : "none"} strokeWidth={1.5} />
                                    ))}
                                </div>
                                <p className="text-[13px] leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
                                <p className="mt-3 font-display text-[13px] font-semibold text-ink">{t.name}</p>
                                <p className="text-[11px] text-ink-soft">{t.meta}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}