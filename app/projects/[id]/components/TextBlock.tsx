"use client";

import { FadeIn } from "@/animations";
import type { TextBlock as TextBlockData } from "@/data/types";
import { surfaceClass } from "./Figure";

export default function TextBlock({ block }: { block: TextBlockData }) {
  const [first, ...rest] = block.body;

  return (
    <section
      className={`${surfaceClass[block.surface ?? "paper"]} py-8 md:py-10 lg:py-14`}
    >
      <div className="px-6 md:px-12">
        <div className="grid gap-x-10 gap-y-6 md:grid-cols-[11rem_minmax(0,1fr)] lg:grid-cols-[14rem_minmax(0,1fr)]">
          <FadeIn>
            <p className="label pt-1.5">{block.label}</p>
          </FadeIn>

          <div className="max-w-3xl">
            {block.heading && (
              <FadeIn delay={0.05}>
                <h2 className="heading mb-7">{block.heading}</h2>
              </FadeIn>
            )}

            <FadeIn delay={0.1}>
              <p className={block.lead ? "lead" : "copy"}>{first}</p>
            </FadeIn>

            {rest.map((paragraph, i) => (
              <FadeIn key={paragraph.slice(0, 24)} delay={0.15 + i * 0.05}>
                <p className="copy mt-6 max-w-2xl">{paragraph}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
