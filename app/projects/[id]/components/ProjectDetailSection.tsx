import { FadeIn } from "@/animations";
import ProjectImageGallery from "./ProductImageGallery";

type ProjectImage = {
  url: string;
  caption: string;
};

type ProjectDetailSectionProps = {
  number: number;
  heading: string;
  body?: string;
  images?: ProjectImage[];
  imageDirection?: 'row' | 'column';
};

export default function ProjectDetailSection({
  number,
  heading,
  body,
  images = [],
  imageDirection
}: ProjectDetailSectionProps) {
  return (
    <section className="border-b border-[var(--rule)]">
      <div className="grid md:grid-cols-[1fr_2fr] divide-y md:divide-y-0 md:divide-x divide-[var(--rule)]">
        {/* Left */}
        <div className="p-8 md:p-12 flex flex-col gap-2">
          <FadeIn>
            <span className="display tracking-widest uppercase text-[var(--muted)]">
              {String(number).padStart(2, "0")}
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h3 className="display font-black text-2xl md:text-3xl">
              {heading}
            </h3>
          </FadeIn>
        </div>

        {/* Right */}
        <div className="p-8 md:p-12">
          {/* Body */}
          {body && (
            <FadeIn delay={0.15}>
              <p className="text-base leading-loose max-w-2xl text-[var(--ink)]">
                {body}
              </p>
            </FadeIn>
          )}

          {/* Images */}
          {images.length > 0 && (
            <ProjectImageGallery
              images={images}
              hasBody={Boolean(body)}
              direction={imageDirection}
            />
          )}
        </div>
      </div>
    </section>
  );
}