"use client";

import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ProjectHeroImage,
  ProjectHero,
  ProjectIntro,
  ProjectDetailSection,
  NextProject
} from "./components";
import { FadeIn } from "@/animations";
import type { Project } from "@/data";

type ProjectPageProps = {
  project: Project;
  nextProject: Project;
};

export default function ProjectPage({
  project,
  nextProject,
}: ProjectPageProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <ProjectHero
        project={project}
        heroRef={heroRef}
        heroY={heroY}
        heroOpacity={heroOpacity}
      />

      {/* Metadata */}
      <section className="border-b border-[var(--rule)]">
        <div className="flex overflow-x-auto divide-x divide-[var(--rule)]">
          {project.details.map((detail, i) => (
            <FadeIn
              key={detail.label}
              delay={i * 0.06}
              className="min-w-[140px] p-6 md:p-8 flex-1"
            >
              <p className="text-xs tracking-widest uppercase text-[var(--muted)] mb-1">
                {detail.label}
              </p>

              <p className="display font-bold text-base">{detail.value}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <ProjectIntro label="Overview" text={project.summary} />

      <ProjectIntro label="Concept" text={project.concept} />

      <ProjectHeroImage src={project.heroImage} alt={project.title} />

      {project.sections.map((section, i) => (
        <ProjectDetailSection
          key={section.heading}
          number={i + 1}
          heading={section.heading}
          body={section.body}
          images={section.images}
          imageDirection={section.imageDirection}
        />
      ))}

      {/* Project Tags */}
      <section className="border-b border-[var(--rule)] p-8 md:p-12">
        <FadeIn className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="display text-sm font-bold border border-[var(--rule)] px-4 py-2 hover:border-[var(--ink)] transition-colors"
            >
              {tag}
            </span>
          ))}
        </FadeIn>
      </section>

      <NextProject project={nextProject} />
    </div>
  );
}
