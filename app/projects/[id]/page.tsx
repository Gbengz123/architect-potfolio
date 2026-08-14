import { projects } from "@/data"
import { redirect } from "next/navigation";
import ProjectPage from "./ProjectPage";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const project = projects.find((project) => project.id === id);

  if (!project) {
    redirect("/");
  }

  const index = projects.findIndex((project) => project.id === id);
  const nextProject = projects[index + 1] ?? projects[0];

  return (
    <ProjectPage
      project={project}
      nextProject={nextProject}
    />
  );
}