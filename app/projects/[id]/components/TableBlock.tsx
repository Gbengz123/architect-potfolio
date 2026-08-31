"use client";

import Image from "next/image";

import { FadeIn } from "@/animations";
import type {
  ProjectImage,
  TableBlock as TableBlockData,
} from "@/data/types";
import Figure from "./Figure";
import SectionShell from "./SectionShell";

function RowImage({ image }: { image: ProjectImage }) {
  return (
    <div className="relative h-24 w-20 shrink-0 overflow-hidden border border-[var(--line)] bg-white">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="80px"
        unoptimized
        className="object-cover object-center"
      />
    </div>
  );
}

/**
 * A schedule is data, not a picture of data. It is set as real text so it
 * can be read, searched and spoken — the drawing beside it only shows
 * where each tagged opening lands.
 */
export default function TableBlock({ block }: { block: TableBlockData }) {
  return (
    <SectionShell
      surface={block.surface}
      label={block.label}
      heading={block.heading}
      body={block.body}
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
        {block.image && (
          <Figure
            image={block.image}
            sizes="(max-width: 768px) 680px, (max-width: 1024px) 92vw, 46vw"
          />
        )}

        <FadeIn delay={0.1}>
          {/* Stacked on phones, tabular from md up. */}
          <dl className="md:hidden">
            {block.rows.map((row) => (
              <div
                key={row.cells[0]}
                className="border-t border-[var(--line)] py-5 last:border-b"
              >
                <dt className="display flex items-start justify-between gap-5 text-lg font-bold uppercase tracking-wide">
                  <span>
                    {row.cells[0]}
                  </span>
                  {row.image && <RowImage image={row.image} />}
                </dt>
                <dd className="caption mt-2">{row.cells[1]}</dd>
                <dd className="label mt-3">{row.cells[2]}</dd>
              </div>
            ))}
          </dl>

          <table className="hidden w-full border-collapse text-left md:table">
            <caption className="sr-only">{block.heading}</caption>
            <thead>
              <tr className="border-b border-[var(--line)]">
                {block.columns.map((column) => (
                  <th key={column} scope="col" className="label pb-3 pr-6">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr
                  key={row.cells[0]}
                  className="border-b border-(--line)"
                >
                  <th
                    scope="row"
                    className="display w-32 py-2 pr-6 align-top text-base font-bold uppercase tracking-wide"
                  >
                    <span className="block">{row.cells[0]}</span>
                    {row.image && (
                      <div className="">
                        <RowImage image={row.image} />
                      </div>
                    )}
                  </th>
                  {row.cells.slice(1).map((cell, i) => (
                    <td
                      key={cell.slice(0, 20)}
                      className={`py-5 pr-6 align-middle ${
                        i === row.cells.length - 2 ? "label w-40" : "caption"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
