"use client";

import Image from "next/image";

import { FadeIn } from "@/animations";
import type { MaterialsBlock as MaterialsBlockData } from "@/data/types";
import SectionShell from "./SectionShell";

export default function MaterialsBlock({
  block,
}: {
  block: MaterialsBlockData;
}) {
  const samples = block.items.filter((item) => item.src);
  const colours = block.items.filter((item) => !item.src && item.swatch);

  return (
    <SectionShell
      surface={block.surface}
      label={block.label}
      heading={block.heading}
      body={block.body}
    >
      {samples.length > 0 && (
        <ul className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-5">
          {samples.map((item, i) => (
            <FadeIn key={item.name} delay={Math.min(i, 5) * 0.05}>
              <li>
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={item.src as string}
                    alt={`${item.name} sample`}
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 18vw"
                    className="object-cover"
                  />
                </div>

                <p className="display mt-3 text-sm font-bold uppercase tracking-wide">
                  {item.name}
                </p>

                {item.note && <p className="caption mt-1">{item.note}</p>}
              </li>
            </FadeIn>
          ))}
        </ul>
      )}

      {colours.length > 0 && (
        <div className={samples.length ? "mt-14 md:mt-20" : ""}>
          <p className="label border-t border-[var(--line)] pt-5">
            Colour palette
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-6 sm:gap-x-12">
            {colours.map((item, i) => (
              <FadeIn key={item.name} delay={Math.min(i, 5) * 0.05}>
                <li className="flex items-center gap-3">
                  <span
                    className="block size-11 shrink-0 rounded-full ring-1 ring-black/10 sm:size-14"
                    style={{ backgroundColor: item.swatch }}
                    aria-hidden="true"
                  />
                  <span className="caption">
                    {item.name}
                    <span className="sr-only"> — {item.swatch}</span>
                  </span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      )}
    </SectionShell>
  );
}
