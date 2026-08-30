"use client";

import { FadeIn } from "@/animations";
import type { NotesBlock as NotesBlockData, ProjectImage } from "@/data/types";
import Figure from "./Figure";
import SectionShell from "./SectionShell";

/** A drawing claims the whole column when it was drawn to be read closely. */
function isFullWidth(image: ProjectImage) {
  if (image.span) return image.span === "full";
  return Boolean(image.pan);
}

/**
 * Group the drawings: anything that needs the full column takes a row of
 * its own, everything else pairs up. A lone half-width drawing beside
 * whitespace is the point, not an accident.
 */
function toRows(images: ProjectImage[]): ProjectImage[][] {
  const rows: ProjectImage[][] = [];
  let run: ProjectImage[] = [];

  for (const image of images) {
    if (isFullWidth(image)) {
      if (run.length) {
        rows.push(run);
        run = [];
      }
      rows.push([image]);
    } else {
      run.push(image);
    }
  }
  if (run.length) rows.push(run);

  return rows;
}

export default function NotesBlock({ block }: { block: NotesBlockData }) {
  const rows = toRows(block.images ?? []);

  return (
    <SectionShell
      surface={block.surface}
      label={block.label}
      heading={block.heading}
      body={block.body}
    >
      {rows.length > 0 && (
        <div className="grid gap-10 md:gap-14">
          {rows.map((row, i) =>
            row.length === 1 && isFullWidth(row[0]) ? (
              <Figure
                key={row[0].src}
                image={row[0]}
                sizes="(max-width: 768px) 680px, 88vw"
              />
            ) : (
              <div
                key={`row-${i}`}
                className="grid gap-x-8 gap-y-10 md:grid-cols-2 items-start"
              >
                {row.map((image) => (
                  <Figure
                    key={image.src}
                    image={image}
                    sizes="(max-width: 768px) 100vw, 44vw"
                  />
                ))}
              </div>
            ),
          )}
        </div>
      )}

      {/* The information that was trapped inside the drawing. */}
      {/* A single rule, then whitespace. A rule per item leaves a hanging
          stub under a part-filled last row. */}
      {block.notes && <dl
        className={`${
          rows.length ? "mt-12 md:mt-16" : ""
        } grid gap-x-8 gap-y-9 border-t border-[var(--line)] pt-8 sm:grid-cols-2 lg:grid-cols-3`}
      >
        {block.notes.map((note, i) => (
          <FadeIn
            key={note.term}
            delay={Math.min(i, 5) * 0.04}
            className="pr-4"
          >
            <div className="flex gap-3">
              {block.numbered && (
                <span
                  className="label pt-0.5 tabular-nums"
                  aria-hidden="true"
                >
                  {String(i + (block.startAt ?? 1)).padStart(2, "0")}
                </span>
              )}

              <div>
                <dt className="display text-base font-bold uppercase tracking-wide">
                  {note.term}
                </dt>
                <dd className="caption mt-1.5">{note.detail}</dd>
              </div>
            </div>
          </FadeIn>
        ))}
      </dl>}
    </SectionShell>
  );
}
