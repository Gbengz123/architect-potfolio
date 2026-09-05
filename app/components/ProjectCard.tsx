import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/data";
import SuspenseImage from "./SuspenseImage";

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="group block focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--ink)]"
      >
        <div
          className={`grid gap-0 border-b border-[var(--rule)] md:grid-cols-2 ${
            isEven ? "" : "md:[&>*:first-child]:order-2"
          }`}
        >
          {/* Text side */}
          <div className="flex flex-col justify-between border-b border-[var(--rule)] p-8 py-12 md:border-b-0 md:p-12 md:py-16">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="display text-7xl leading-none font-black text-[var(--rule)] select-none">
                  {project.number}
                </span>
                <div className="h-px flex-1 bg-[var(--rule)]" />
              </div>

              <h2 className="display mb-3 text-3xl leading-tight font-black uppercase transition-all group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4 md:text-4xl">
                {project.title}
              </h2>

              <p className="mb-6 text-sm text-[var(--muted)]">
                {project.location}
              </p>

              <p className="max-w-sm text-sm leading-relaxed text-[var(--ink)]">
                {project.summary}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-xs tracking-widest text-[var(--muted)] uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <span className="display inline-flex shrink-0 items-center gap-3 border border-[var(--ink)] px-4 py-2.5 text-xs font-bold tracking-[0.14em] uppercase transition-colors duration-300 group-hover:bg-[var(--ink)] group-hover:text-[var(--paper)] group-focus-visible:bg-[var(--ink)] group-focus-visible:text-[var(--paper)]">
                View project
                <span
                  aria-hidden="true"
                  className="text-base leading-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5"
                >
                  ↗
                </span>
              </span>
            </div>
          </div>

          {/* Image side */}
          <div className="relative h-72 min-h-72 overflow-hidden bg-[var(--card)] md:h-auto">
            <motion.div
              className="absolute inset-0"
              style={{ transformOrigin: "center" }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <SuspenseImage
                src={project.cover.src}
                alt={project.cover.alt}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            <div className="absolute inset-0 bg-[var(--ink)]/0 transition-colors duration-500 group-hover:bg-[var(--ink)]/10" />

            <div className="absolute right-4 bottom-4 text-xs font-medium tracking-widest text-white/80 uppercase">
              {project.type}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
