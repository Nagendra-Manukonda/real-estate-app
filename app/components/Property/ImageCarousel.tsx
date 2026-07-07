"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  url: string;
  label: string;
}

interface ImageCarouselProps {
  images: GalleryImage[];
}

export default function ImageCarousel({
  images,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative h-64 w-full overflow-hidden rounded-t-2xl group">

      {/* Image */}

      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].label}
        className="w-full h-full object-cover transition duration-500"
      />

      {/* Image Label */}

      <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
        {images[currentIndex].label}
      </span>

      {/* Previous Button */}

      {images.length > 1 && (
        <button
          onClick={previousImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft size={18} />
        </button>
      )}

      {/* Next Button */}

      {images.length > 1 && (
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight size={18} />
        </button>
      )}

      {/* Navigation Dots */}

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">

          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`transition-all rounded-full ${currentIndex === index
                  ? "bg-white w-6 h-2"
                  : "bg-white/60 w-2 h-2"
                }`}
            />
          ))}

        </div>
      )}
    </div>
  );
}