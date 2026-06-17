"use client";

import Image from "next/image";

type CaseGalleryWideProps = {
  src: string;
  priority?: boolean;
};

export function CaseGalleryWide({ src, priority = false }: CaseGalleryWideProps) {
  return (
    <div className="relative aspect-[2048/1280] w-full overflow-hidden bg-neutral-200">
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) calc(100vw - 80px), (max-width: 1536px) calc(100vw - 192px), calc(100vw - 320px)"
        quality={90}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
