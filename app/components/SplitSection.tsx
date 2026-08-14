import type { ReactNode } from "react";
import { RevealText } from "@/animations";

type SplitSectionProps = {
  label: string;
  children: ReactNode;
};

export default function SplitSection({ label, children }: SplitSectionProps) {
  return (
    <section className="border-b border-[var(--rule)]">
      <div className="grid md:grid-cols-[1fr_2fr] divide-y md:divide-y-0 md:divide-x divide-[var(--rule)]">
        <div className="p-8 md:p-12">
          <RevealText>
            <span className="display text-xl font-bold tracking-widest uppercase">
              {label}
            </span>
          </RevealText>
        </div>

        {children}
      </div>
    </section>
  );
}
