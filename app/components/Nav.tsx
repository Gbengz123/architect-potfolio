"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname()
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navBg = scrolled || !isHome ? "rgba(244,241,236,0.96)" : "transparent";
  const borderColor = scrolled || !isHome ? "var(--rule)" : "transparent";

  return (
    <>
      <motion.nav
        style={{ backgroundColor: navBg, borderBottomColor: borderColor }}
        className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-500"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-14">
          <Link
            href="/"
            className="display text-xl font-bold tracking-tight leading-none"
          >
            OSP
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {[
              { label: "Projects", to: "/#projects" },
              { label: "About", to: "/#about" },
              { label: "Contact", to: "/#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.to.replace("/#", "#")}
                onClick={(e) => {
                  if (item.to.startsWith("/#") && location.pathname === "/") {
                    e.preventDefault();
                    const id = item.to.replace("/#", "");
                    document
                      .getElementById(id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-xs tracking-widest uppercase font-medium text-(--muted) hover:text-[var(--ink)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-px w-6 bg-[var(--ink)] transition-transform origin-center"
              style={{
                transform: menuOpen
                  ? "rotate(45deg) translate(3px, 3px)"
                  : "none",
              }}
            />
            <span
              className="block h-px w-6 bg-[var(--ink)] transition-opacity"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-px w-6 bg-[var(--ink)] transition-transform origin-center"
              style={{
                transform: menuOpen
                  ? "rotate(-45deg) translate(3px, -3px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[var(--paper)] flex flex-col justify-center items-center gap-10 md:hidden"
          >
            {["Projects", "About", "Contact"].map((label, i) => (
              <motion.a
                key={label}
                href={`#${label.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
                className="display text-5xl font-black tracking-tight"
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
