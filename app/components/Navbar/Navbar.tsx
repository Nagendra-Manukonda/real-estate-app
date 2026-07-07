"use client";

import { useState } from "react";
import { Mailbox, Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
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
    <header className="sticky top-0 z-30 border-b border-line bg-panel/95 backdrop-blur">
      <div className="mx-auto flex max-w-9xl items-center gap-4 px-4 py-3 md:px-6">
        <button type="button" onClick={() => scrollToId("top")} className="flex items-center gap-2 shrink-0">
          <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-brass" />
          <span className="font-display text-xl font-semibold tracking-tight text-ink">Porchlight</span>
        </button>

        {/* Desktop nav links — scroll to section, don't touch the URL hash */}
        <nav className="ml-4 hidden gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => scrollToId(l.id)}
              className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
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
            "hidden shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition-colors md:flex " +
            (showSavedOnly ? "border-ink bg-ink text-paper" : "border-line bg-panel text-ink")
          }
        >
          <Mailbox size={16} className={showSavedOnly ? "text-rose-200" : "text-brick"} />
          Saved
          <span className="font-mono text-xs">{savedCount}</span>
        </button>

        <button
          type="button"
          className="md:hidden shrink-0 rounded-lg border border-line p-2"
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
