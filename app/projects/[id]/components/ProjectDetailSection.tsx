"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { FadeIn } from "@/animations";

type ProjectImage = {
  url: string;
  caption: string;
};

type ProjectDetailSectionProps = {
  number: number;
  heading: string;
  body: string;
  image?: ProjectImage;
};

export default function ProjectDetailSection({
  number,
  heading,
  body,
  image,
}: ProjectDetailSectionProps) {
  return (
    <section className="border-b border-[var(--rule)]">
      <div className="grid md:grid-cols-[1fr_2fr] divide-y md:divide-y-0 md:divide-x divide-[var(--rule)]">
        <div className="p-8 md:p-12 flex flex-col justify-between">
          <FadeIn>
            <span className="display text-xs tracking-widest uppercase text-[var(--muted)]">
              {String(number).padStart(2, "0")}
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h3 className="display font-black text-2xl md:text-3xl mt-4">
              {heading}
            </h3>
          </FadeIn>
        </div>

        <div className="p-8 md:p-12">
          <FadeIn delay={0.15}>
            <p className="text-base leading-loose max-w-2xl text-[var(--ink)]">
              {body}
            </p>
          </FadeIn>

          {image && (
            <FadeIn delay={0.2} className="mt-8">
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
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <p className="text-xs text-[var(--muted)] mt-3">
                {image.caption}
              </p>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
