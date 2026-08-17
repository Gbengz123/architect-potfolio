import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "@/data";

function NextProject({ project }: { project: Project }) {
  return (
    <section>
      <Link scroll={true} href={`/projects/${project.id}`} className="group block">
        <div className="relative overflow-hidden h-[clamp(260px,40vw,520px)]">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.04 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-[var(--ink)]/50 group-hover:bg-[var(--ink)]/40 transition-colors" />

          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-3">
              Next Project
            </p>

            <h2 className="display font-black text-white text-[clamp(1.8rem,4vw,4rem)] leading-tight uppercase group-hover:underline decoration-1 underline-offset-4">
              {project.title}
            </h2>

            <p className="text-sm text-white/50 mt-2">{project.location}</p>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default NextProject;
