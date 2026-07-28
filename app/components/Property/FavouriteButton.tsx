"use client";

import { Heart } from "lucide-react";

export default function FavouriteButton({ saved, onToggle }: { saved: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={saved ? "Remove from saved" : "Save property"}
      className={
        "absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md transition-transform hover:scale-105 " +
        (saved ? "text-danger" : "text-ink")
      }
    >
      <Heart size={16} strokeWidth={2.25} fill={saved ? "currentColor" : "none"} />
    </button>
  );
}