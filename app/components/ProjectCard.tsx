import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { projects } from "@/data";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/projects/${project.id}`} className="block">
        <div
          className={`grid md:grid-cols-2 gap-0 border-b border-[var(--rule)] ${
            isEven ? "" : "md:[&>*:first-child]:order-2"
          }`}
        >
          {/* Text side */}
          <div className="flex flex-col justify-between p-8 md:p-12 py-12 md:py-16 border-b md:border-b-0 border-[var(--rule)]">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="display text-7xl font-black text-[var(--rule)] leading-none select-none">
                  {project.number}
                </span>
                <div className="flex-1 h-px bg-[var(--rule)]" />
              </div>
              <h2 className="display text-3xl md:text-4xl font-black leading-tight mb-3 group-hover:underline decoration-1 underline-offset-4 transition-all">
                {project.title}
              </h2>
              <p className="text-sm text-[var(--muted)] mb-6">
                {project.location}
              </p>
              <p className="text-sm leading-relaxed text-[var(--ink)] max-w-sm">
                {project.summary.slice(0, 180)}…
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs tracking-widest uppercase border border-[var(--rule)] px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="relative overflow-hidden bg-[var(--card)] h-72 md:h-auto min-h-72">
            <motion.div
              className="absolute inset-0"
              style={{ transformOrigin: "center" }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={project.heroImage}
                alt={project.title}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-[var(--ink)]/0 group-hover:bg-[var(--ink)]/10 transition-colors duration-500" />
            <div className="absolute bottom-4 right-4 text-xs tracking-widest uppercase text-white/80 font-medium">
              {project.type}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
