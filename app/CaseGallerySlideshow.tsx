"use client";

import { useEffect, useState } from "react";

type CaseGallerySlideshowProps = {
  frames: string[];
  intervalMs?: number;
  aspect?: "4/3" | "16/10";
};

export function CaseGallerySlideshow({
  frames,
  intervalMs = 2000,
  aspect = "16/10",
}: CaseGallerySlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (frames.length < 2) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % frames.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [frames, intervalMs]);

  const aspectClass = aspect === "16/10" ? "aspect-[16/10]" : "aspect-[4/3]";

  return (
    <div className={`relative ${aspectClass} overflow-hidden bg-neutral-200`}>
      {frames.map((src, frameIndex) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            frameIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
