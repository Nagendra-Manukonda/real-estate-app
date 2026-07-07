"use client";

// Presentational only — all data/filtering logic lives in hooks/useProperties.
// This component just lays out the filter sidebar + grid + states (loading,
// empty, mobile drawer).
import { useEffect, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import FilterSidebar from "@/app/components/Filters/FilterSidebar";
import EmptyState from "@/app/components/Common/EmptyState";
import Loader from "@/app/components/Common/Loader";
import Pagination from "@/app/components/Common/pagination";
import { PAGE_SIZE } from "@/app/lib/constants";
import { Property, Filters } from "@/app/types/property";
import PropertyCard from "./PropertyCard";

export default function PropertyGrid({
  properties,
  total,
  loading,
  showSavedOnly,
  filters,
  setFilters,
  resetFilters,
  isSaved,
  toggle,
}: {
  properties: Property[];
  total: number;
  loading: boolean;
  showSavedOnly: boolean;
  filters: Filters;
  setFilters: (updater: (f: Filters) => Filters) => void;
  resetFilters: () => void;
  isSaved: (id: number) => boolean;
  toggle: (id: number) => void;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [page, setPage] = useState(1);

  // Jump back to page 1 whenever the filtered result set changes (new
  // search, new filter, toggling saved-only) so you're never stranded on
  // a page that no longer exists.
  useEffect(() => {
    setPage(1);
  }, [properties]);

  const totalPages = Math.max(1, Math.ceil(properties.length / PAGE_SIZE));
  const pageItems = properties.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const activeCount =
    (filters.min ? 1 : 0) + (filters.max ? 1 : 0) + filters.types.length +
    (filters.city !== "Any" ? 1 : 0) + (filters.beds ? 1 : 0) + (filters.baths ? 1 : 0) + filters.amenities.length;

  return (
    <section id="listings" className="mx-auto max-w-8xl px-4 py-14 md:px-6">
      <div className="mb-5 flex items-baseline justify-between gap-3">
        <h2 className="font-display text-2xl font-semibold text-ink">
          {showSavedOnly ? "Saved properties" : "Listings"}
        </h2>
        <span className="text-xs text-ink-soft">
          {properties.length === 0
            ? `0 of ${total}`
            : `${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, properties.length)} of ${properties.length}`}
          {" "}properties
        </span>
      </div>

      <button
        onClick={() => setDrawerOpen(true)}
        className="mb-4 flex items-center gap-2 rounded-lg border border-line bg-panel px-3 py-2 text-xs font-semibold text-ink md:hidden"
      >
        <SlidersHorizontal size={14} /> Filters
        {activeCount > 0 && <span className="rounded-full bg-brass px-1.5 py-0.5 font-mono text-[10px] text-white">{activeCount}</span>}
      </button>

      <div className="flex gap-8">
        <div className="hidden md:block">
          <FilterSidebar filters={filters} setFilters={setFilters} onReset={resetFilters} />
        </div>

        {drawerOpen && (
          <div className="fixed inset-0 z-40 bg-ink/40 md:hidden" onClick={() => setDrawerOpen(false)}>
            <div className="absolute right-0 top-0 h-full w-[84%] max-w-xs overflow-y-auto bg-panel p-5" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setDrawerOpen(false)} className="mb-4 flex h-7 w-7 items-center justify-center rounded-full border border-line">
                <X size={14} />
              </button>
              <FilterSidebar filters={filters} setFilters={setFilters} onReset={resetFilters} />
            </div>
          </div>
        )}

        <div className="flex-1">
          {loading ? (
            <Loader />
          ) : properties.length === 0 ? (
            <EmptyState message="No properties match these filters yet. Try widening your price range or clearing a filter." />
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pageItems.map((p) => (
                  <PropertyCard key={p.id} property={p} saved={isSaved(p.id)} onToggle={toggle} />
                ))}
              </div>
              <Pagination page={page} totalPages={totalPages} onChange={setPage} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}