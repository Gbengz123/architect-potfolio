"use client";

import type { ProjectBlock } from "@/data/types";
import MaterialsBlock from "./MaterialsBlock";
import MediaBlock from "./MediaBlock";
import NotesBlock from "./NotesBlock";
import TableBlock from "./TableBlock";
import TextBlock from "./TextBlock";

/** Data says what a block is; this decides which component draws it. */
function renderBlock(block: ProjectBlock, key: string) {
  switch (block.kind) {
    case "text":
      return <TextBlock key={key} block={block} />;
    case "media":
      return <MediaBlock key={key} block={block} />;
    case "notes":
      return <NotesBlock key={key} block={block} />;
    case "materials":
      return <MaterialsBlock key={key} block={block} />;
    case "table":
      return <TableBlock key={key} block={block} />;
  }
}

export default function ProjectBlocks({ blocks }: { blocks: ProjectBlock[] }) {
  return (
    <>
      {blocks.map((block, i) =>
        renderBlock(block, `${block.kind}-${block.label ?? i}-${i}`),
      )}
    </>
  );
}
