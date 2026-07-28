"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/app/types/property";

export default function ImageCarousel({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(0);

  const go = (delta: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((i) => (i + delta + images.length) % images.length);
  };

  return (
    <div className="group relative h-full w-full">
      <Image src={images[index].url} alt={images[index].label} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />

      <span className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white">
        {images[index].label}
      </span>

      {images.length > 1 && (
        <>
          <button onClick={(e) => go(-1, e)} aria-label="Previous photo"
            className="absolute left-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink opacity-0 transition-opacity group-hover:opacity-100">
            <ChevronLeft size={15} />
          </button>
          <button onClick={(e) => go(1, e)} aria-label="Next photo"
            className="absolute right-1.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink opacity-0 transition-opacity group-hover:opacity-100">
            <ChevronRight size={15} />
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button key={i} aria-label={`Go to photo ${i + 1}`} onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                className={"h-1.5 w-1.5 rounded-full transition-all " + (i === index ? "w-3.5 bg-white" : "bg-white/60")} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}