"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { FadeIn } from "@/animations";

type ProjectHeroImageProps = {
  src: string;
  alt: string;
};

export default function ProjectHeroImage({
  src,
  alt,
}: ProjectHeroImageProps) {
  return (
    <section className="border-b border-[var(--rule)]">
      <FadeIn>
        <div className="relative overflow-hidden h-[clamp(320px,55vw,700px)]">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
}