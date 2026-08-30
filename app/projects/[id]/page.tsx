import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { projects } from "@/data";
import ProjectPage from "./ProjectPage";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) return { title: "OSP Portfolio" };

  return {
    title: `${project.title} — Olugbenga Simon-Peter`,
    description: project.summary,
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const index = projects.findIndex((project) => project.id === id);

  if (index === -1) {
    redirect("/");
  }

  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];

  return <ProjectPage project={project} nextProject={nextProject} />;
}
