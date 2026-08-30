"use client";

import { FadeIn } from "@/animations";
import type { TableBlock as TableBlockData } from "@/data/types";
import Figure from "./Figure";
import SectionShell from "./SectionShell";

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
                key={row[0]}
                className="border-t border-[var(--line)] py-5 last:border-b"
              >
                <dt className="display text-lg font-bold uppercase tracking-wide">
                  {row[0]}
                </dt>
                <dd className="caption mt-2">{row[1]}</dd>
                <dd className="label mt-3">{row[2]}</dd>
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
                <tr key={row[0]} className="border-b border-[var(--line)]">
                  <th
                    scope="row"
                    className="display w-24 py-5 pr-6 align-top text-base font-bold uppercase tracking-wide"
                  >
                    {row[0]}
                  </th>
                  {row.slice(1).map((cell, i) => (
                    <td
                      key={cell.slice(0, 20)}
                      className={`py-5 pr-6 align-top ${
                        i === row.length - 2 ? "label w-40" : "caption"
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
