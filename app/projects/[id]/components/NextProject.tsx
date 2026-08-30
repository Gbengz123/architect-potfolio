"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

import type { Project } from "@/data/types";

function NextProject({ project }: { project: Project }) {
  return (
    <section className="surface surface-ink">
      <Link
        href={`/projects/${project.id}`}
        scroll
        className="group block focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--paper)]"
      >
        <div className="relative h-[clamp(320px,46vw,560px)] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-[var(--ink)]/55 transition-colors duration-500 group-hover:bg-[var(--ink)]/40" />

          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 md:px-12 md:pb-16">
            <p className="label text-white/55">Next project</p>

            <h2 className="display mt-3 max-w-4xl text-[clamp(1.7rem,4.4vw,3.8rem)] leading-[0.96] font-black tracking-[-0.015em] text-white uppercase">
              <span className="bg-[length:0%_1px] bg-bottom bg-no-repeat bg-gradient-to-r from-white to-white transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                {project.title}
              </span>
            </h2>

            <p className="mt-3 text-sm text-white/55">
              {project.number} — {project.location}
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default NextProject;
