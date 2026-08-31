"use client";

import type { MediaBlock as MediaBlockData, ProjectImage } from "@/data/types";
import Figure from "./Figure";
import SectionShell from "./SectionShell";

/** Accurate `sizes` per composition — the browser should never fetch
 *  a 2400px file to paint a quarter-width drawing. */
function sizesFor(layout: MediaBlockData["layout"], count: number) {
  switch (layout) {
    case "bleed":
      return "100vw";
    case "frame":
      return "(max-width: 768px) 100vw, (max-width: 1280px) 88vw, 1180px";
    case "duo":
      return "(max-width: 768px) 100vw, 46vw";
    case "lead":
      return "(max-width: 768px) 100vw, 30vw";
    case "asymmetric":
      // The long image and the two stacked images each occupy
      // roughly half the available width on desktop.
      return "(max-width: 768px) 100vw, 46vw";
    case "grid":
    default:
      return count >= 3
        ? "(max-width: 640px) 100vw, (max-width: 1024px) 48vw, 31vw"
        : "(max-width: 768px) 100vw, 46vw";
  }
}

const GAP = "gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-14";

function Composition({
  layout,
  images,
  longImagePosition = "left",
}: {
  layout: MediaBlockData["layout"];
  images: ProjectImage[];
  longImagePosition?: "left" | "right";
}) {
  const sizes = sizesFor(layout, images.length);

  if (layout === "bleed") {
    return (
      <>
        {images.map((image) => (
          <Figure
            key={image.src}
            image={image}
            sizes={sizes}
            inset={false}
            className="[&_figcaption]:px-6 [&_figcaption]:md:px-12"
          />
        ))}
      </>
    );
  }

  if (layout === "frame") {
    return (
      <div className="mx-auto max-w-6xl">
        {images.map((image) => (
          <Figure key={image.src} image={image} sizes={sizes} />
        ))}
      </div>
    );
  }

  if (layout === "lead") {
    const [first, ...rest] = images;
    return (
      <div className={`grid ${GAP}`}>
        <Figure image={first} sizes="(max-width: 768px) 100vw, 88vw" />
        <div className={`grid ${GAP} sm:grid-cols-2 lg:grid-cols-3`}>
          {rest.map((image) => (
            <Figure key={image.src} image={image} sizes={sizes} />
          ))}
        </div>
      </div>
    );
  }

  if (layout === "duo") {
    const mainIndex = images.findIndex((image) => image.main);

    // No main image → existing 50/50 layout
    if (mainIndex === -1) {
      return (
        <div
          className={`grid ${GAP} grid-cols-1 md:grid-cols-2 md:items-start`}
        >
          {images.map((image) => (
            <Figure
              key={image.src}
              image={image}
              sizes="(max-width: 768px) 100vw, 46vw"
            />
          ))}
        </div>
      );
    }

    const mainImage = images[mainIndex];
    const secondaryImage = images[mainIndex === 0 ? 1 : 0];

    return (
      <div
        className={`grid ${GAP} grid-cols-1 md:grid-cols-[7fr_3fr] md:items-start`}
      >
        <Figure image={mainImage} sizes="(max-width: 768px) 100vw, 80vw" />

        <Figure image={secondaryImage} sizes="(max-width: 768px) 100vw, 30vw"></Figure>
      </div>
    );
  }

  if (layout === "asymmetric") {
    const [first, second, third] = images;

    const longImage = longImagePosition === "left" ? first : third;

    const topImage = longImagePosition === "left" ? second : first;

    const bottomImage = longImagePosition === "left" ? third : second;

    return (
      <div className={`grid ${GAP} md:grid-cols-2`}>
        {/* Long image */}
        <Figure
          image={longImage}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={
            longImagePosition === "right"
              ? "md:row-span-2 md:col-start-2"
              : "md:row-span-2 md:col-start-1"
          }
        />

        {/* Top image */}
        <Figure
          image={topImage}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={
            longImagePosition === "right"
              ? "md:col-start-1 md:row-start-1"
              : "md:col-start-2 md:row-start-1"
          }
        />

        {/* Bottom image */}
        <Figure
          image={bottomImage}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={
            longImagePosition === "right"
              ? "md:col-start-1 md:row-start-2"
              : "md:col-start-2 md:row-start-2"
          }
        />
      </div>
    );
  }

  // grid — threes get a third column at desktop, everything else pairs up
  const cols =
    images.length === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";

  return (
    <div className={`grid ${GAP} ${cols} items-start`}>
      {images.map((image) => (
        <Figure key={image.src} image={image} sizes={sizes} />
      ))}
    </div>
  );
}

export default function MediaBlock({ block }: { block: MediaBlockData }) {
  return (
    <SectionShell
      surface={block.surface}
      label={block.label}
      heading={block.heading}
      body={block.body}
      bleed={block.layout === "bleed"}
    >
      <Composition
        layout={block.layout}
        images={block.images}
        longImagePosition={block.longImagePosition}
      />
    </SectionShell>
  );
}
