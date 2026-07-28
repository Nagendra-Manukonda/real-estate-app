"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/app/components/Common/Button";
import { scrollToId } from "@/app/lib/helpers";

const HERO_IMAGE = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80";

const STATS = [
  { value: "12k+", label: "Active listings" },
  { value: "38", label: "Cities covered" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };
  const resetTilt = () => setTilt({ x: 0, y: 0 });

  const reveal = (delayMs: number) =>
    `transition-all duration-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`;

  return (
    <section id="top" className="relative overflow-hidden border-b border-line bg-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-24">
        <div>
          <span
            style={{ transitionDelay: mounted ? "0ms" : "0ms" }}
            className={`inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary ${reveal(0)}`}
          >
            Australian Real Estate
          </span>

          <h1
            style={{ transitionDelay: mounted ? "100ms" : "0ms" }}
            className={`mt-5 font-display text-5xl font-semibold leading-[1.08] text-ink md:text-6xl ${reveal(100)}`}
          >
            Discover a place<br />you&apos;ll proudly <span className="text-primary">call home.</span>
          </h1>

          <p
            style={{ transitionDelay: mounted ? "200ms" : "0ms" }}
            className={`mt-5 max-w-md text-base leading-7 text-ink-soft ${reveal(200)}`}
          >
            Explore verified homes across Australia, compare listings, calculate mortgages, and save
            your favourites — all in one beautifully designed platform.
          </p>

          <div
            style={{ transitionDelay: mounted ? "300ms" : "0ms" }}
            className={`mt-8 flex flex-wrap gap-3 ${reveal(300)}`}
          >
            <Button onClick={() => scrollToId("listings")}>Browse Properties</Button>
            <Button variant="outline" onClick={() => scrollToId("about")}>Learn More</Button>
          </div>
        </div>

        <div
          ref={frameRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          style={{ transitionDelay: mounted ? "150ms" : "0ms", perspective: "1000px" }}
          className={`relative aspect-[4/3] ${reveal(150)}`}
        >
          <div
            className="h-full w-full overflow-hidden rounded-3xl shadow-2xl transition-transform duration-150 ease-out"
            style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HERO_IMAGE} alt="Featured home exterior at dusk" className="h-full w-full object-cover" />
          </div>

          <div
            className="absolute -bottom-6 -right-4 flex gap-3 transition-transform duration-150 ease-out md:-right-6"
            style={{ transform: `rotateX(${tilt.x * 0.6}deg) rotateY(${tilt.y * 0.6}deg)` }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                style={{ animationDelay: `${i * 0.6}s` }}
                className="animate-porchlight-float rounded-2xl border border-white/40 bg-white/75 px-5 py-3 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-panel/80"
              >
                <p className="font-mono text-xl font-semibold text-ink">{s.value}</p>
                <p className="text-[10px] uppercase tracking-wide text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}