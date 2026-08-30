"use client";

import { FadeIn } from "@/animations";
import type { Project } from "@/data/types";

/** The factual spine of the project, read before anything else. */
export default function ProjectMeta({ details }: { details: Project["details"] }) {
  return (
    <section className="surface surface-paper border-b border-[var(--line)]">
      <dl className="grid grid-cols-2 border-t border-[var(--line)] sm:grid-cols-3 lg:grid-cols-5">
        {details.map((detail, i) => (
          <FadeIn
            key={detail.label}
            delay={Math.min(i, 5) * 0.05}
            className="border-r border-b border-[var(--line)] px-6 py-6 last:border-r-0 md:px-8 md:py-8 lg:border-b-0"
          >
            <dt className="label">{detail.label}</dt>
            <dd className="display mt-1.5 text-base font-bold tracking-wide uppercase">
              {detail.value}
            </dd>
          </FadeIn>
        ))}
      </dl>
    </section>
  );
}
