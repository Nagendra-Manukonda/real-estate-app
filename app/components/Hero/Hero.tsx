"use client";

import Button from "@/app/components/Common/Button";
import { scrollToId } from "@/app/lib/helpers";

export default function Hero() {
  return (
    <section id="top" className="border-b border-line bg-panel">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-soft">Find your next address</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Homes worth turning the porchlight on for.
        </h1>
        <p className="mt-4 max-w-xl text-sm text-ink-soft md:text-base">
          Browse verified listings across the country, filter down to exactly what fits, and save your
          favorites as you go — on desktop or on the move.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button onClick={() => scrollToId("listings")}>Browse listings</Button>
          <Button variant="outline" onClick={() => scrollToId("pro")}>Explore Porchlight Pro</Button>
        </div>
      </div>
    </section>
  );
}
