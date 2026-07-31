"use client";

import Button from "@/app/components/Common/Button";
import { scrollToId } from "@/app/lib/helpers";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        src="videos/villa-hero-35s.mp4"
        onError={(e) => console.error("Video failed to load:", e.currentTarget.error)}
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-xl">
            <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
              Australian Real Estate
            </span>

            <h1 className="mt-6 font-display text-6xl font-bold leading-tight text-white">
              Discover a place
              <br />
              you'll proudly
              <span className="text-primary"> call home.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/80">
              Explore verified homes across Australia, compare listings,
              calculate mortgages and save your favourites.
            </p>

            <div className="mt-8 flex gap-4">
              <Button onClick={() => scrollToId("listings")}>
                Browse Properties
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToId("about")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}