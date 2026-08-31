"use client";

import { FadeIn } from "@/animations";
import type { Project } from "@/data/types";

/** Closing note: the idea restated once the images have made their case. */
export default function ProjectColophon({ project }: { project: Project }) {
  return (
    <section className="surface surface-paper border-t border-[var(--line)] py-8 md:py-12">
      <div className="px-6 md:px-12">
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-[11rem_minmax(0,1fr)] lg:grid-cols-[14rem_minmax(0,1fr)]">
          <FadeIn>
            <p className="label pt-1.5">In closing</p>
          </FadeIn>

          <div className="max-w-3xl">
            <FadeIn delay={0.05}>
              <p className="lead">{project.concept}</p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[var(--line)] pt-6">
                {project.tags.map((tag) => (
                  <li key={tag} className="label">
                    {tag}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
