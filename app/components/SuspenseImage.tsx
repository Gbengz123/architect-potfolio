"use client";

import Image, { type ImageProps } from "next/image";
import { Suspense, useState } from "react";

type SkeletonTone = "light" | "dark";

type SuspenseImageProps = ImageProps & {
  skeletonTone?: SkeletonTone;
};

function ImageSkeleton({
  hidden = false,
  tone = "light",
}: {
  hidden?: boolean;
  tone?: SkeletonTone;
}) {
  return (
    <span
      aria-hidden="true"
      className={`image-skeleton pointer-events-none absolute inset-0 z-10 block transition-opacity duration-500 ${
        hidden ? "opacity-0" : "opacity-100"
      } ${
        tone === "dark" ? "image-skeleton-dark" : ""
      }`}
    />
  );
}

function LoadAwareImage({
  alt,
  className = "",
  onLoad,
  skeletonTone = "light",
  ...props
}: SuspenseImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <ImageSkeleton hidden={loaded} tone={skeletonTone} />

      <Image
        {...props}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
      />
    </>
  );
}

/**
 * Suspense covers deferred component rendering; LoadAwareImage keeps the
 * fallback visible until the browser has downloaded and decoded the pixels.
 */
export default function SuspenseImage({
  skeletonTone = "light",
  ...props
}: SuspenseImageProps) {
  return (
    <Suspense fallback={<ImageSkeleton tone={skeletonTone} />}>
      <LoadAwareImage {...props} skeletonTone={skeletonTone} />
    </Suspense>
  );
}
