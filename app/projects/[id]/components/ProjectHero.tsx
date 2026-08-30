"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type MotionValue } from "motion/react";
import type { RefObject } from "react";

import type { Project } from "@/data/types";

type ProjectHeroProps = {
  project: Project;
  heroRef: RefObject<HTMLDivElement | null>;
  heroY: MotionValue<string>;
  heroOpacity: MotionValue<number>;
};

const rise = {
  initial: { y: "110%" },
  animate: { y: 0 },
};

export default function ProjectHero({
  project,
  heroRef,
  heroY,
  heroOpacity,
}: ProjectHeroProps) {
  return (
    <section
      ref={heroRef}
      className="relative h-[100svh] min-h-[520px] overflow-hidden bg-[var(--ink)]"
    >
      <motion.div className="absolute inset-0" style={{ y: heroY }}>
        <Image
          src={project.hero.src}
          alt={project.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-[var(--ink)]/25 to-[var(--ink)]/45" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute top-20 left-6 z-10 md:left-12"
      >
        <Link
          href="/#projects"
          className="label text-white/60 transition-colors hover:text-white"
        >
          ← All works
        </Link>
      </motion.div>

      <motion.div
        style={{ opacity: heroOpacity }}
        className="absolute inset-x-0 bottom-0 z-10 px-6 pb-12 md:px-12 md:pb-16"
      >
        <div className="overflow-hidden">
          <motion.p
            {...rise}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="label text-white/60"
          >
            {project.number} — {project.type} — {project.year}
          </motion.p>
        </div>

        <h1 className="mt-3 max-w-5xl">
          <span className="block overflow-hidden">
            <motion.span
              {...rise}
              transition={{
                duration: 0.95,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="display block text-[clamp(2.1rem,6.4vw,5.6rem)] font-black leading-[0.94] tracking-[-0.015em] text-white uppercase"
            >
              {project.title}
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-5 text-sm text-white/60"
        >
          {project.location}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        style={{ opacity: heroOpacity }}
        className="absolute right-6 bottom-12 z-10 hidden md:right-12 md:block"
        aria-hidden="true"
      >
        <div className="relative h-16 w-px overflow-hidden bg-white/20">
          <motion.div
            className="absolute top-0 left-0 h-full w-full origin-top bg-white"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
