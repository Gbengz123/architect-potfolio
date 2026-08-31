"use client";

import type { ReactNode } from "react";

import { FadeIn } from "@/animations";
import type { Surface } from "@/data/types";
import { surfaceClass } from "./Figure";

type SectionShellProps = {
  surface?: Surface;
  label?: string;
  heading?: string;
  body?: string;
  children?: ReactNode;
  /** Children run edge to edge; the header keeps the page margin. */
  bleed?: boolean;
  /** Tighter vertical rhythm for sections that continue the one above. */
  compact?: boolean;
};

/**
 * Every section is a surface plus an optional left rail carrying the
 * label and heading. The rail is what gives the page its spine.
 */
export default function SectionShell({
  surface = "paper",
  label,
  heading,
  body,
  children,
  bleed = false,
  compact = false,
}: SectionShellProps) {
  const hasHeader = Boolean(label || heading || body);
  const pad = compact
    ? "py-5 md:py-7"
    : "py-8 md:py-12 lg:py-14";

  return (
    <section className={`${surfaceClass[surface]} ${pad}`}>
      {hasHeader && (
        <div className="px-6 md:px-12">
          <div className="grid gap-x-10 gap-y-5 md:grid-cols-[11rem_minmax(0,1fr)] lg:grid-cols-[14rem_minmax(0,1fr)]">
            {label && (
              <FadeIn>
                <p className="label pt-1">{label}</p>
              </FadeIn>
            )}

            <div className={label ? "" : "md:col-start-2"}>
              {heading && (
                <FadeIn delay={0.05}>
                  <h2 className="heading max-w-3xl">{heading}</h2>
                </FadeIn>
              )}

              {body && (
                <FadeIn delay={0.1}>
                  <p
                    className={`copy max-w-2xl ${heading ? "mt-5" : ""}`}
                  >
                    {body}
                  </p>
                </FadeIn>
              )}
            </div>
          </div>
        </div>
      )}

      {children && (
        <div
          className={[
            bleed ? "" : "px-6 md:px-12",
            hasHeader ? "mt-10 md:mt-14" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {children}
        </div>
      )}
    </section>
  );
}
