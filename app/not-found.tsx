import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center transition-colors duration-300">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                404 error
            </span>

            <h1 className="mt-6 font-display text-7xl font-bold text-ink md:text-8xl">
                4<span className="text-primary">0</span>4
            </h1>

            <h2 className="mt-4 font-display text-2xl font-semibold text-ink md:text-3xl">
                This place isn&apos;t listed.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-ink-soft">
                The page you&apos;re looking for doesn&apos;t exist, may have been moved, or the
                listing might no longer be available.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5"
                >
                    <Home size={16} /> Back to home
                </Link>
                <Link
                    href="/#listings"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-primary hover:text-primary"
                >
                    <Search size={16} /> Browse listings
                </Link>
            </div>

            <div className="mt-16 flex items-center gap-2 text-xs text-ink-soft">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary font-display text-[11px] font-bold text-white">P</span>
                Porchlight
            </div>
        </main>
    );
}