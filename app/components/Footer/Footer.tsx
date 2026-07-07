import Button from "@/app/components/Common/Button";

const COLUMNS = [
    { title: "Explore", links: ["Listings", "Deals", "Porchlight Pro", "Cities"] },
    { title: "Company", links: ["About us", "Careers", "Press", "Contact"] },
    { title: "Resources", links: ["Mortgage calculator", "Agent directory", "Help center", "Privacy policy"] },
];

export default function Footer() {
    return (
        <footer className="bg-ink text-paper">
            {/* Banner strip */}
            <div className="border-b border-white/10">
                <div className="mx-auto flex max-w-8xl flex-col items-start justify-between gap-4 px-4 py-8 md:flex-row md:items-center md:px-6">
                    <div>
                        <p className="font-display text-xl font-semibold">List your property with Porchlight</p>
                        <p className="mt-1 text-sm text-paper/60">Reach thousands of verified buyers in your city.</p>
                    </div>
                    <Button variant="brass" className="shrink-0">List a property</Button>
                </div>
            </div>

            <div className="mx-auto grid max-w-8xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-brass" />
                        <span className="font-display text-lg font-semibold">Porchlight</span>
                    </div>
                    <p className="mt-3 max-w-xs text-sm text-paper/60">
                        Verified real-estate listings, honest filters, and tools that help buyers decide.
                    </p>
                </div>

                {COLUMNS.map((col) => (
                    <div key={col.title}>
                        <p className="font-mono text-xs uppercase tracking-wider text-paper/50">{col.title}</p>
                        <ul className="mt-3 flex flex-col gap-2">
                            {col.links.map((l) => (
                                <li key={l}><a href="#" className="text-sm text-paper/80 hover:text-white">{l}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-paper/50 md:px-6">
                © {new Date().getFullYear()} Porchlight Homes, Inc. All rights reserved.
            </div>
        </footer>
    );
}
