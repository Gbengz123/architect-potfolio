"use client";

import { AnimatePresence } from "motion/react";
import { PageTransition } from "@/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <PageTransition>{children}</PageTransition>
    </AnimatePresence>
  );
}
