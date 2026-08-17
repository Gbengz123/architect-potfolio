import Link from "next/link";
import Image from "next/image";
import { motion, type MotionValue } from "motion/react";
import type { RefObject } from "react";

import type { Project } from "@/data";

type ProjectHeroProps = {
  project: Project;
  heroRef: RefObject<HTMLDivElement | null>;
  heroY: MotionValue<string>;
  heroOpacity: MotionValue<number>;
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
      className="relative h-screen overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: heroY }}
      >
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/75 via-[var(--ink)]/20 to-[var(--ink)]/40" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-20 left-6 md:left-12 z-10"
      >
        <Link
          href="/"
          className="text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors flex items-center gap-2"
        >
          ← All Works
        </Link>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 p-8 md:p-16 pb-12 md:pb-20 z-10"
        style={{ opacity: heroOpacity }}
      >
        <div className="overflow-hidden mb-2">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-xs tracking-widest uppercase text-white/50"
          >
            {project.number} — {project.type}
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="display font-black text-white leading-tight text-[clamp(2.2rem,6vw,6rem)] uppercase max-w-4xl"
          >
            {project.title}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm text-white/60 mt-4"
        >
          {project.location}
        </motion.p>
      </motion.div>
    </section>
  );
}