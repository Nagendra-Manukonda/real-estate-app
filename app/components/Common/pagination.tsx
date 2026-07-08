import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
    page,
    totalPages,
    onChange,
}: {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
}) {
    if (totalPages <= 1) return null;

    // Show up to 5 page numbers, centered on the current page.
    const pages: number[] = [];
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, start + 4);
    start = Math.max(1, end - 4);
    for (let i = start; i <= end; i++) pages.push(i);

    const go = (p: number) => {
        if (p < 1 || p > totalPages || p === page) return;
        onChange(p);
        document.getElementById("listings")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <nav className="mt-8 flex items-center justify-center gap-1.5" aria-label="Pagination">
            <button
                onClick={() => go(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-panel text-ink-soft disabled:opacity-40"
            >
                <ChevronLeft size={15} />
            </button>

            {start > 1 && (
                <>
                    <button onClick={() => go(1)} className="h-8 min-w-8 rounded-md border border-line bg-panel px-2.5 text-xs font-semibold text-ink-soft">1</button>
                    {start > 2 && <span className="px-1 text-xs text-ink-soft">…</span>}
                </>
            )}

            {pages.map((p) => (
                <button
                    key={p}
                    onClick={() => go(p)}
                    aria-current={p === page ? "page" : undefined}
                    className={
                        "h-8 min-w-8 rounded-md border px-2.5 text-xs font-semibold " +
                        (p === page ? "border-ink bg-ink text-paper" : "border-line bg-panel text-ink-soft hover:border-brass")
                    }
                >
                    {p}
                </button>
            ))}

            {end < totalPages && (
                <>
                    {end < totalPages - 1 && <span className="px-1 text-xs text-ink-soft">…</span>}
                    <button onClick={() => go(totalPages)} className="h-8 min-w-8 rounded-md border border-line bg-panel px-2.5 text-xs font-semibold text-ink-soft">
                        {totalPages}
                    </button>
                </>
            )}

            <button
                onClick={() => go(page + 1)}
                disabled={page === totalPages}
                aria-label="Next page"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-panel text-ink-soft disabled:opacity-40"
            >
                <ChevronRight size={15} />
            </button>
        </nav>
    );
}
