import { Check, Sparkles } from "lucide-react";
import Button from "@/app/components/Common/Button";

const PERKS = [
    "Priority placement at the top of search results",
    "Verified agent badge on every listing",
    "Unlimited saved searches with instant alerts",
    "Direct chat with buyers, no lead fees",
];

export default function ProSection() {
    return (
        <section id="pro" className="mx-auto max-w-9xl px-4 py-14 md:px-6">
            <div className="overflow-hidden rounded-card border border-line bg-ink text-paper">
                <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
                    <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-brass/20 px-3 py-1 text-xs font-semibold text-brass">
                            <Sparkles size={13} /> Porchlight Pro
                        </span>
                        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight">List smarter. Sell faster.</h2>
                        <p className="mt-3 max-w-md text-sm text-paper/70">
                            Built for agents and owners who list often. Upgrade any listing to Pro and get seen first.
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                            <Button variant="brass">Upgrade to Pro — $29/mo</Button>
                            <span className="text-xs text-paper/60">Cancel anytime</span>
                        </div>
                    </div>
                    <ul className="flex flex-col gap-3 self-center">
                        {PERKS.map((perk) => (
                            <li key={perk} className="flex items-start gap-3 text-sm text-paper/90">
                                <Check size={16} className="mt-0.5 shrink-0 text-brass" />
                                {perk}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
