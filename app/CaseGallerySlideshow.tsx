"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CaseGallerySlideshowProps = {
  frames: string[];
  intervalMs?: number;
  aspect?: "4/3" | "16/10" | "2048/1280";
};

export function CaseGallerySlideshow({
  frames,
  intervalMs = 2000,
  aspect = "2048/1280",
}: CaseGallerySlideshowProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (frames.length < 2) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % frames.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [frames, intervalMs]);

  const aspectClass =
    aspect === "2048/1280"
      ? "aspect-[2048/1280]"
      : aspect === "16/10"
        ? "aspect-[16/10]"
        : "aspect-[4/3]";

  return (
    <div className={`relative ${aspectClass} overflow-hidden bg-neutral-200`}>
      {frames.map((src, frameIndex) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="(max-width: 1920px) calc(100vw - 320px), 1600px"
          quality={90}
          priority={frameIndex === 0}
          className={`object-cover transition-opacity duration-500 ${
            frameIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
