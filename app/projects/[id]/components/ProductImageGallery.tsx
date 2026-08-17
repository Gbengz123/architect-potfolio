"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { FadeIn } from "@/animations";

type ProjectImage = {
  url: string;
  caption: string;
};

type ProjectImageGalleryProps = {
  images: ProjectImage[];
  hasBody: boolean;
  direction?: 'row' | 'column';
};

function ProjectImageItem({
  image,
  index,
  count,
}: {
  image: ProjectImage;
  index: number;
  count: number;
}) {
  return (
    <figure
      className={
        count === 3 && index === 0
          ? "md:col-span-2"
          : ""
      }
    >
      <div className="relative overflow-hidden h-[clamp(200px,30vw,420px)]">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            src={image.url}
            alt={image.caption}
            fill
            sizes={
              count === 1 || (count === 3 && index === 0)
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
            className="object-fit"
          />
        </motion.div>
      </div>

      <figcaption className="text-xs text-[var(--muted)] mt-3">
        {image.caption}
      </figcaption>
    </figure>
  );
}

export default function ProjectImageGallery({
  images,
  hasBody,
  direction,
}: ProjectImageGalleryProps) {
  return (
    <FadeIn delay={hasBody ? 0.2 : 0.15} className="mt-8">
      <div
        className={`
          grid gap-4
          ${
            images.length === 1 || direction === 'row'
              ? "grid-cols-1"
              : "grid-cols-1 md:grid-cols-2"
          }
        `}
      >
        {images.map((image, index) => (
          <ProjectImageItem
            key={image.url}
            image={image}
            index={index}
            count={images.length}
          />
        ))}
      </div>
    </FadeIn>
  );
}