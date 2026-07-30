"use client";

import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import { scrollToId } from "@/app/lib/helpers";

const NAV_LINKS = [
  { id: "listings", label: "Listings" },
  { id: "deals", label: "Deals" },
  { id: "pro", label: "Pro" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({
  search,
  onSearchChange,
  savedCount,
  showSavedOnly,
  onToggleSavedOnly,
}: {
  search: string;
  onSearchChange: (v: string) => void;
  savedCount: number;
  showSavedOnly: boolean;
  onToggleSavedOnly: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-6">
        <button type="button" onClick={() => scrollToId("top")} className="flex items-center cursor-pointer gap-2 shrink-0">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white font-display text-sm font-bold">P</span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">Porchlight</span>
        </button>

        <nav className="ml-4 hidden gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => scrollToId(l.id)}
              className="text-sm font-medium cursor-pointer text-ink-soft transition-colors hover:text-primary"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="ml-auto flex flex-1 items-center gap-2 md:flex-none md:w-72">
          <SearchBar value={search} onChange={onSearchChange} />
        </div>

        <button
          type="button"
          onClick={onToggleSavedOnly}
          className={
            "hidden shrink-0 items-center cursor-pointer gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors md:flex " +
            (showSavedOnly ? "border-primary bg-primary text-white" : "border-line bg-panel text-ink")
          }
        >
          <Heart size={16} className={showSavedOnly ? "text-white" : "text-danger"} fill={showSavedOnly ? "currentColor" : "none"} />
          Saved
          <span className="font-mono text-xs">{savedCount}</span>
        </button>

        <ThemeToggle />

        <button
          type="button"
          className="md:hidden cursor-pointer shrink-0 rounded-lg border border-line p-2"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <MobileMenu savedCount={savedCount} onClose={() => setMobileOpen(false)} onToggleSavedOnly={onToggleSavedOnly} />
      )}
    </header>
  );
}