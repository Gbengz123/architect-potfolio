import { FadeIn } from "@/animations";

type ProjectIntroProps = {
  label: string;
  text: string;
};

export default function ProjectIntro({
  label,
  text,
}: ProjectIntroProps) {
  return (
    <section className="border-b border-[var(--rule)]">
      <div className="grid md:grid-cols-[1fr_2fr] divide-y md:divide-y-0 md:divide-x divide-[var(--rule)]">
        <div className="p-8 md:p-12">
          <FadeIn>
            <span className="display text-xs tracking-widest uppercase text-[var(--muted)]">
              {label}
            </span>
          </FadeIn>
        </div>

        <div className="p-8 md:p-12">
          <FadeIn delay={0.1}>
            <p className="text-base leading-loose max-w-2xl">
              {text}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}