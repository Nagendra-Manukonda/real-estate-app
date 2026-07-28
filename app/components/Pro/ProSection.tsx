import { Check, Sparkles } from "lucide-react";
import Button from "@/app/components/Common/Button";

const PERKS = [
    "Priority placement in search results",
    "Verified agent profile badge",
    "Unlimited saved searches & alerts",
    "Direct communication with buyers",
];

export default function ProSection() {
    return (
        <section id="pro" className="mx-auto max-w-7xl px-4 py-14 md:px-6">
            <div className="overflow-hidden rounded-3xl bg-ink-fixed text-paper-fixed shadow-2xl">
                <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12" style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-ink-fixed))" }}>
                    <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                            <Sparkles size={13} /> Porchlight Pro
                        </span>
                        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white">List smarter. Sell faster.</h2>
                        <p className="mt-3 max-w-md text-sm text-white/75">
                            Designed for Australian agents and property owners who want more visibility, premium
                            exposure, and faster sales through Porchlight Pro.
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                            <Button variant="secondary">Upgrade to Pro — $29/mo</Button>
                            <span className="text-xs text-white/60">Cancel anytime</span>
                        </div>
                    </div>
                    <ul className="flex flex-col justify-center gap-3">
                        {PERKS.map((perk) => (
                            <li key={perk} className="flex items-start gap-3 text-sm text-white/90">
                                <Check size={16} className="mt-0.5 shrink-0 text-secondary" />
                                {perk}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}