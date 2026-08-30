/**
 * The data model describes WHAT exists in a project.
 * Components decide HOW it is presented.
 */

/** How the pixels meet their frame. Photographs and renders crop;
 *  drawings, diagrams and plans are never cropped. */
export type ImageFit = "cover" | "contain";

/** Warm paper, true white for linework, warm black for renders. */
export type Surface = "paper" | "sheet" | "ink";

export interface ProjectImage {
  src: string;
  /** Describes the content for screen readers — never a file name. */
  alt: string;
  /** Visible, optional. Omit when the surrounding text already says it. */
  caption?: string;
  fit?: ImageFit;
  /** Matting behind a `contain` image. Defaults to the section surface. */
  surface?: Surface;
  /** Intrinsic ratio, e.g. "16/9". Prevents layout shift and letterboxing. */
  aspect?: string;
  /** Override below 768px when the desktop ratio reads too small. */
  mobileAspect?: string;
  /** Wide technical drawings pan horizontally on phones instead of shrinking. */
  pan?: boolean;
  /** How much of the content column the figure claims from md up.
   *  Defaults to the full column for panning drawings, half otherwise. */
  span?: "full" | "half";
  priority?: boolean;
  /** Determines main image in duo layout (main spans 70vw) */
  main?: true;
}

export type MediaLayout =
  /** Edge to edge, ignores page margins. */
  | "bleed"
  /** One image inside the page margins. */
  | "frame"
  /** Two images of equal weight. */
  | "duo"
  /** Three or more of equal weight; wraps at 2 then 3 columns. */
  | "grid"
  /** One dominant image with the rest ranged beneath it. */
  | "lead"
  /** One tall image spanning two rows, with two images stacked beside it. */
  | "asymmetric";

/** A fact lifted out of an image and into real text. */
export interface Note {
  term: string;
  detail: string;
}

export interface MaterialItem {
  name: string;
  note?: string;
  /** Either a photographed sample… */
  src?: string;
  /** …or a flat colour sampled from the project's palette. */
  swatch?: string;
}

interface BaseBlock {
  label?: string;
  heading?: string;
  surface?: Surface;
}

export interface TextBlock extends BaseBlock {
  kind: "text";
  label: string;
  body: string[];
  /** Set the first paragraph at display size. */
  lead?: boolean;
}

export interface MediaBlock extends BaseBlock {
  kind: "media";
  layout: MediaLayout;
  images: ProjectImage[];
  body?: string;
  longImagePosition?: "left" | "right";
}

/** Drawing plus the information that was trapped inside it. */
export interface NotesBlock extends BaseBlock {
  kind: "notes";
  label: string;
  heading: string;
  body?: string;
  notes?: Note[];
  images?: ProjectImage[];
  /** Number the notes to match callouts printed on the drawing. */
  numbered?: boolean;
  /** First callout number, when the drawing does not start at one. */
  startAt?: number;
}

export interface MaterialsBlock extends BaseBlock {
  kind: "materials";
  label: string;
  heading: string;
  body?: string;
  items: MaterialItem[];
}

/** Schedules and other tabular content that must not stay an image. */
export interface TableBlock extends BaseBlock {
  kind: "table";
  label: string;
  heading: string;
  body?: string;
  columns: string[];
  rows: string[][];
  image?: ProjectImage;
}

export type ProjectBlock =
  | TextBlock
  | MediaBlock
  | NotesBlock
  | MaterialsBlock
  | TableBlock;

export interface Project {
  id: string;
  number: string;
  title: string;
  location: string;
  type: string;
  year: string;
  summary: string;
  concept: string;
  /** Full-bleed opening image. Wide framing, crops well. */
  hero: ProjectImage;
  /** Index and next-project card. May differ from the hero. */
  cover: ProjectImage;
  tags: string[];
  details: { label: string; value: string }[];
  blocks: ProjectBlock[];
}
