"use client";

import Button from "@/app/components/Common/Button";
import { scrollToId } from "@/app/lib/helpers";

const COLUMNS = [
    { title: "Explore", links: ["Listings", "Featured Deals", "Porchlight Pro", "List a Property"] },
    { title: "Company", links: ["About Us", "Careers", "Press", "Contact"] },
    { title: "Resources", links: ["Mortgage Calculator", "Agent Directory", "Help Centre", "Privacy Policy"] },
];

const LINK_IDS: Record<string, string> = {
    "Listings": "listings",
    "Featured Deals": "deals",
    "Porchlight Pro": "pro",
    "List a Property": "list-property",
    "About Us": "about",
    "Contact": "contact",
    "Mortgage Calculator": "mortgage",
};

export default function Footer() {
    return (
        <div className="border-b border-paper-fixed/10">
            <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-10 md:flex-row md:items-center md:px-6">
                <div>
                    <span className="inline-flex items-center rounded-full border border-secondary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] ">
                        Get Started
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
                        Ready to sell your property?
                    </h3>
                    <p className="mt-1 text-sm ">
                        Connect with thousands of verified buyers across Australia and list your property with confidence.
                    </p>
                </div>
                <Button className="shrink-0" onClick={() => scrollToId("list-property")}>
                    List Your Property
                </Button>
            </div>

            <footer className="bg-primary text-paper-fixed">
                <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-white">P</span>
                            <span className="font-display text-lg font-semibold text-paper-fixed">Porchlight</span>
                        </div>
                        <p className="mt-3 max-w-xs text-sm text-paper-fixed/60">
                            Australia&apos;s trusted real estate platform helping buyers, sellers, and investors
                            discover premium properties with confidence.
                        </p>
                    </div>

                    {COLUMNS.map((col) => (
                        <div key={col.title}>
                            <p className="font-mono text-xs uppercase tracking-wider text-paper-fixed/50">{col.title}</p>
                            <ul className="mt-3 flex flex-col gap-2">
                                {col.links.map((l) => {
                                    const id = LINK_IDS[l];
                                    return (
                                        <li key={l}>
                                            {id ? (
                                                <button
                                                    type="button"
                                                    onClick={() => scrollToId(id)}
                                                    className="text-left text-sm text-paper-fixed/70 transition-colors hover:text-paper-fixed"
                                                >
                                                    {l}
                                                </button>
                                            ) : (
                                                <a href="#" className="text-sm text-paper-fixed/70 transition-colors hover:text-paper-fixed">
                                                    {l}
                                                </a>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-paper-fixed/10 px-4 py-5 text-center text-xs text-paper-fixed/50 md:px-6">
                    © {new Date().getFullYear()} Porchlight. All rights reserved. Designed for modern Australian real estate.
                </div>

            </footer>
        </div>
    );
}