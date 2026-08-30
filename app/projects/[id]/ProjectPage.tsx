"use client";

import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import {
  NextProject,
  ProjectBlocks,
  ProjectColophon,
  ProjectHero,
  ProjectMeta,
} from "./components";
import type { Project } from "@/data/types";

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

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <main className="bg-[var(--paper)]">
      <ProjectHero
        project={project}
        heroRef={heroRef}
        heroY={heroY}
        heroOpacity={heroOpacity}
      />

      <ProjectMeta details={project.details} />

      <ProjectBlocks blocks={project.blocks} />

      <ProjectColophon project={project} />

      <NextProject project={nextProject} />
    </main>
  );
}
