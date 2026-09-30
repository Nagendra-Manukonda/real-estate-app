"use client";

import { Heart } from "lucide-react";
import { scrollToId } from "@/app/lib/helpers";
import { NAV_LINKS } from "@/app/lib/constants";

export default function MobileMenu({
  id,
  savedCount,
  showSavedOnly,
  onClose,
  onToggleSavedOnly,
}: {
  id?: string;
  savedCount: number;
  showSavedOnly: boolean;
  onClose: () => void;
  onToggleSavedOnly: () => void;
}) {
  return (
    <div id={id} className="border-t border-line bg-panel px-4 py-4 md:hidden">
      <nav className="flex flex-col gap-3">
        {NAV_LINKS.map((l) => (
          <button
            key={l.id}
            type="button"
            onClick={() => { scrollToId(l.id); onClose(); }}
            className="text-left text-sm font-medium text-ink-soft"
          >
            {l.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => { onToggleSavedOnly(); onClose(); }}
          aria-pressed={showSavedOnly}
          className={
            "mt-1 flex items-center gap-2 self-start rounded-full border px-4 py-2 text-sm font-semibold " +
            (showSavedOnly ? "border-primary bg-primary text-white" : "border-line text-ink")
          }
        >
          <Heart size={16} className="text-danger" aria-hidden="true" />
          Saved <span className="font-mono text-xs">{savedCount}</span>
        </button>
      </nav>
    </div>
  );
}