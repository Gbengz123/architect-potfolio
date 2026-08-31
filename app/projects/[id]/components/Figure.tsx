"use client";

import { motion } from "motion/react";
import type { CSSProperties } from "react";

import SuspenseImage from "@/app/components/SuspenseImage";
import type { ProjectImage, Surface } from "@/data/types";

export const surfaceClass: Record<Surface, string> = {
  paper: "surface surface-paper",
  sheet: "surface surface-sheet",
  ink: "surface surface-ink",
};

type FigureProps = {
  image: ProjectImage;
  /** Accurate `sizes` matters more than any other prop here. */
  sizes: string;
  className?: string;
  /** Drawings get no padding when they are meant to bleed to the frame. */
  inset?: boolean;
};

/**
 * The one place an image is turned into pixels.
 *
 * Photographs and renders fill their frame and get a slow scale reveal.
 * Drawings are never cropped and never scaled — they fade in on a mat,
 * and wide ones pan horizontally on phones rather than shrinking away.
 */
export default function Figure({
  image,
  sizes,
  className = "",
  inset = true,
}: FigureProps) {
  const isDrawing = image.fit === "contain";
  const aspect = image.aspect ?? "4/3";

  const frame = (
    <div
      className={[
        "fig",
        image.surface ? surfaceClass[image.surface] : "",
        isDrawing && inset ? "p-5 sm:p-7 md:p-10" : "",
        isDrawing ? "bg-[var(--bg)]" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          "--ar": aspect,
          "--ar-m": image.mobileAspect ?? aspect,
        } as CSSProperties
      }
    >
      <motion.div
        className="absolute inset-0"
        initial={isDrawing ? { opacity: 0 } : { opacity: 0, scale: 1.05 }}
        whileInView={isDrawing ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: isDrawing ? 0.8 : 1.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <SuspenseImage
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={image.priority}
          className={isDrawing ? "object-contain" : "object-cover"}
        />
      </motion.div>
    </div>
  );

  return (
    <figure className={`min-w-0 ${className}`}>
      {image.pan ? (
        <>
          <div className="pan">
            <div className="pan-inner">{frame}</div>
          </div>
          <p className="label mt-2 md:hidden" aria-hidden="true">
            Scroll to read →
          </p>
        </>
      ) : (
        frame
      )}

      {image.caption && (
        <figcaption className="caption mt-3 max-w-prose">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}
