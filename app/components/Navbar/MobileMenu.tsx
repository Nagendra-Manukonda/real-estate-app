"use client";

import { Mailbox } from "lucide-react";
import { scrollToId } from "@/app/lib/helpers";

const NAV_LINKS = [
  { id: "listings", label: "Listings" },
  { id: "deals", label: "Deals" },
  { id: "pro", label: "Pro" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function MobileMenu({
  savedCount,
  onClose,
  onToggleSavedOnly,
}: {
  savedCount: number;
  onClose: () => void;
  onToggleSavedOnly: () => void;
}) {
  return (
    <div className="border-t border-line bg-panel px-4 py-3 md:hidden">
      <nav className="flex flex-col gap-3">
        {NAV_LINKS.map((l) => (
          <button
            key={l.id}
            type="button"
            onClick={() => {
              scrollToId(l.id);
              onClose();
            }}
            className="text-left text-sm font-medium text-ink-soft"
          >
            {l.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            onToggleSavedOnly();
            onClose();
          }}
          className="mt-1 flex items-center gap-2 self-start rounded-full border border-line px-3 py-2 text-sm font-semibold"
        >
          <Mailbox size={16} className="text-brick" />
          Saved <span className="font-mono text-xs">{savedCount}</span>
        </button>
      </nav>
    </div>
  );
}
