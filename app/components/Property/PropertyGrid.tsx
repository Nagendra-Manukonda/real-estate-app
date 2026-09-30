"use client";

import { useEffect, useRef, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import FilterSidebar from "@/app/components/Filters/FilterSidebar";
import EmptyState from "@/app/components/Common/EmptyState";
import Loader from "@/app/components/Common/Loader";
import Pagination from "../Common/Pagination";
import { PAGE_SIZE } from "@/app/lib/constants";
import { Property, Filters } from "@/app/types/property";
import PropertyCard from "./PropertyCard";

export default function PropertyGrid({
  properties, loading, showSavedOnly, filters, setFilters, resetFilters, isSaved, toggle,
}: {
  properties: Property[];
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
  const [prevProperties, setPrevProperties] = useState(properties);
  const closeRef = useRef<HTMLButtonElement>(null);

  if (prevProperties !== properties) {
    setPrevProperties(properties);
    setPage(1);
  }

  useEffect(() => {
    if (drawerOpen) closeRef.current?.focus();
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen]);

  const totalPages = Math.max(1, Math.ceil(properties.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = properties.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const activeCount =
    (filters.min ? 1 : 0) + (filters.max ? 1 : 0) + filters.types.length +
    (filters.city !== "Any" ? 1 : 0) + (filters.beds ? 1 : 0) + (filters.baths ? 1 : 0) + filters.amenities.length;

  const emptyMessage = showSavedOnly
    ? "You haven't saved any properties yet. Tap the heart on a listing to keep it here."
    : "No properties match these filters yet. Try widening your price range or clearing a filter.";

  return (
    <section id="listings" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
        Premium Collection
      </span>
      <div className="mb-8 mt-3 flex items-baseline justify-between gap-3">
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink">{showSavedOnly ? "Saved properties" : "Listings"}</h2>
          <p className="mt-1 text-sm text-ink-soft">Explore carefully selected homes designed for modern lifestyles.</p>
        </div>
        <span className="hidden shrink-0 text-xs text-ink-soft sm:block" aria-live="polite">
          {properties.length === 0
            ? "0 properties"
            : `${(currentPage - 1) * PAGE_SIZE + 1}–${Math.min(currentPage * PAGE_SIZE, properties.length)} of ${properties.length} properties`}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setDrawerOpen(true)}
        aria-expanded={drawerOpen}
        aria-controls="filter-drawer"
        className="mb-4 flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-2 text-xs font-semibold text-ink md:hidden"
      >
        <SlidersHorizontal size={14} /> Filters
        {activeCount > 0 && <span className="rounded-full bg-primary px-1.5 py-0.5 font-mono text-[10px] text-white">{activeCount}</span>}
      </button>

      <div className="flex gap-10">
        <div className="hidden md:block">
          <FilterSidebar filters={filters} setFilters={setFilters} onReset={resetFilters} />
        </div>

        {drawerOpen && (
          <div className="fixed inset-0 z-40 bg-black/40 md:hidden" role="presentation" onClick={() => setDrawerOpen(false)}>
            <div
              id="filter-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Filters"
              className="absolute right-0 top-0 h-full w-[84%] max-w-xs overflow-y-auto p-5"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeRef}
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close filters"
                className="mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-line"
              >
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
            <EmptyState message={emptyMessage} />
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6 p-1 sm:grid-cols-2 lg:grid-cols-3">
                {pageItems.map((p) => (
                  <PropertyCard key={p.id} property={p} saved={isSaved(p.id)} onToggle={toggle} />
                ))}
              </div>
              <Pagination page={currentPage} totalPages={totalPages} onChange={setPage} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
