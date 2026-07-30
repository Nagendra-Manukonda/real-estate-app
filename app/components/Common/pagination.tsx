import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: number[] = [];

  let start = Math.max(1, page - 2);
  let end = Math.min(totalPages, start + 4);
  start = Math.max(1, end - 4);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  const go = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return;

    onChange(newPage);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById("listings")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  };

  return (
    <nav
      className="mt-8 flex items-center  justify-center gap-2"
      aria-label="Pagination"
    >
      <button
        onClick={() => go(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
        className="flex h-9 w-9 items-center cursor-pointer justify-center rounded-lg border border-line bg-panel text-ink-soft transition hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronLeft size={16} />
      </button>

      {start > 1 && (
        <>
          <button
            onClick={() => go(1)}
            className="h-9 min-w-9 rounded-lg border cursor-pointer border-line bg-panel px-3 text-sm font-medium text-ink-soft transition hover:border-primary hover:text-primary"
          >
            1
          </button>

          {start > 2 && (
            <span className="px-1 text-sm text-ink-soft">...</span>
          )}
        </>
      )}

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => go(p)}
          aria-current={p === page ? "page" : undefined}
          className={`h-9 min-w-9 rounded-lg border px-3 cursor-pointer text-sm font-medium transition ${p === page
            ? "border-primary bg-primary text-white"
            : "border-line bg-panel text-ink-soft hover:border-primary hover:text-primary"
            }`}
        >
          {p}
        </button>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && (
            <span className="px-1 text-sm text-ink-soft">...</span>
          )}

          <button
            onClick={() => go(totalPages)}
            className="h-9 min-w-9 rounded-lg border cursor-pointer border-line bg-panel px-3 text-sm font-medium text-ink-soft transition hover:border-primary hover:text-primary"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
        className="flex h-9 w-9 items-center justify-center cursor-pointer rounded-lg border border-line bg-panel text-ink-soft transition hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}