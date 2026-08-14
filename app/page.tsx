"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  projects,
  education,
  architecturalSkills,
  softwareSkills,
  experience,
  leadership,
} from "@/data";
import { FadeIn, RevealText } from "@/animations";
import ProjectCard from "@/app/components/ProjectCard";
import SplitSection from "@/app/components/SplitSection";
import SectionLabel from "@/app/components/SectionLabel";
import Image from "next/image";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <div className="min-h-screen bg-(--paper)">
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden flex items-end"
      >
        {/* BG image with parallax */}
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <Image
            src="/images/hero.jpg"
            alt="Hero image"
            fill
            sizes="100vw"
            loading="eager"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-(--ink)/80 via-[var(--ink)]/20 to-transparent" />
        </motion.div>

        {/* Hero type */}
        <motion.div
          className="relative z-10 w-full px-6 md:px-12 pb-16 md:pb-20"
          style={{ y: heroTextY }}
        >
          <div className="overflow-hidden mb-2">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-xs tracking-widest uppercase text-white/60 mb-4"
            >
              Architecture Portfolio
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="display font-black text-white leading-[0.88] text-[clamp(3rem,10vw,9rem)] uppercase"
            >
              Olugbenga
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="display font-black text-white leading-[0.88] text-[clamp(3rem,10vw,9rem)] uppercase"
            >
              Simon-Peter
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col md:flex-row md:items-end justify-between mt-8 gap-4"
          >
            <p className="text-sm text-white/70 max-w-xs leading-relaxed">
              Graduate Architect · BSc & MSc Architecture
              <br />
              Bells University of Technology
            </p>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors border-b border-white/20 pb-px w-fit"
            >
              View Selected Works ↓
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-16 bg-white/20 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-white"
              animate={{ scaleY: [0, 1, 0], originY: "top" }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ height: "100%" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── About ── */}
      <SplitSection label="Profile">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--rule)]">
          {/* Bio */}
          <div className="p-8 md:p-12">
            <FadeIn delay={0.1}>
              <p className="text-base leading-loose text-[var(--ink)] max-w-prose">
                Olugbenga Simon-Peter is a graduate architect with BSc. and MSc.
                degrees in Architecture. He has gained practical experience
                through freelance projects and working alongside experienced
                architects through internships. Passionate about all areas of
                architectural design, he enjoys exploring creative architectural
                designs and learning how to bring them to life. His long-term
                goal is to contribute to the design and construction of iconic
                buildings that leave a lasting impact on people and the built
                environment.
              </p>
            </FadeIn>
          </div>

          {/* Details */}
          <div className="p-8 md:p-12 grid gap-8">
            {/* Education */}
            <FadeIn delay={0.15}>
              <div>
                <SectionLabel>Education</SectionLabel>

                <div className="mt-3 space-y-4">
                  {education.map((item) => (
                    <div key={item.deg}>
                      <p className="display font-bold text-base">{item.inst}</p>

                      <p className="text-sm text-[var(--muted)]">
                        {item.deg} · {item.loc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Experience */}
            <FadeIn delay={0.2}>
              <div>
                <SectionLabel>Experience</SectionLabel>

                <div className="mt-3 space-y-2">
                  {experience.map((item) => (
                    <div key={item.company}>
                      <p className="text-sm font-medium">{item.company}</p>

                      <p className="text-xs text-[var(--muted)]">{item.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Leadership */}
            <FadeIn delay={0.25}>
              <div>
                <SectionLabel>Leadership</SectionLabel>

                <div className="mt-3 space-y-2">
                  {leadership.map((item) => (
                    <div key={item.role}>
                      <p className="text-sm font-medium">{item.role}</p>

                      <p className="text-xs text-muted">
                        {item.organization}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </SplitSection>

      {/* ── Skills ── */}
      <SplitSection label="Capabilities">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--rule)]">
          {/* Architectural Skills */}
          <div className="p-8 md:p-12">
            <FadeIn>
              <SectionLabel>Architectural Skills</SectionLabel>

              <div className="mt-6 space-y-3">
                {architecturalSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 group/skill"
                  >
                    <div className="w-1 h-1 rounded-full bg-rule group-hover/skill:bg-[var(--ink)] transition-colors" />

                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Software */}
          <div className="p-8 md:p-12">
            <FadeIn delay={0.1}>
              <SectionLabel>Software</SectionLabel>

              <div className="mt-6 flex flex-wrap gap-2">
                {softwareSkills.map((software, index) => (
                  <motion.span
                    key={software}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="display text-sm font-bold border border-[var(--ink)] px-3 py-1.5 hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors cursor-default"
                  >
                    {software}
                  </motion.span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </SplitSection>

      {/* ── Projects ── */}
      <section id="projects">
        <div className="flex items-center border-b border-[var(--rule)] px-8 md:px-12 py-8">
          <RevealText>
            <h2 className="display text-xs tracking-widest uppercase text-[var(--muted)]">
              Selected Works
            </h2>
          </RevealText>
          <div className="flex-1 h-px bg-[var(--rule)] ml-8" />
          <RevealText>
            <span className="display text-xs tracking-widest uppercase text-[var(--muted)] ml-8">
              {projects.length} Projects
            </span>
          </RevealText>
        </div>
        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="border-t border-[var(--rule)]">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--rule)]">
          <div className="p-12 md:p-20">
            <FadeIn>
              <h2 className="display font-black text-[clamp(3rem,6vw,5rem)] leading-none uppercase mb-8">
                Let&apos;s build
                <br />
                something
                <br />
                remarkable.
              </h2>
              <p className="text-sm text-[var(--muted)] max-w-xs leading-relaxed">
                Available for architecture projects, internships, and
                collaborations.
              </p>
            </FadeIn>
          </div>
          <div className="p-12 md:p-20 flex flex-col justify-center gap-8">
            <FadeIn delay={0.1}>
              <div>
                <p className="text-xs tracking-widest uppercase text-[var(--muted)] mb-2">
                  Email
                </p>
                <a
                  href="mailto:simongbenga09@gmail.com"
                  className="display text-xl font-bold hover:text-[var(--muted)] transition-colors"
                >
                  simongbenga09@gmail.com
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <p className="text-xs tracking-widest uppercase text-[var(--muted)] mb-2">
                  Phone / WhatsApp
                </p>
                <a
                  href="tel:09121415094"
                  className="display text-xl font-bold hover:text-[var(--muted)] transition-colors"
                >
                  09121415094
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <p className="text-xs tracking-widest uppercase text-[var(--muted)] mb-2">
                  Location
                </p>
                <p className="display text-xl font-bold">Lagos, Nigeria</p>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="border-t border-[var(--rule)] px-8 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="display font-black text-sm tracking-tight">
            OLUGBENGA SIMON-PETER
          </span>
          <span className="text-xs text-[var(--muted)]">
            Graduate Architect · BSc. MSc. Architecture
          </span>
          <span className="text-xs text-[var(--muted)]">
            © 2024 All rights reserved
          </span>
        </div>
      </section>
    </div>
  );
}
