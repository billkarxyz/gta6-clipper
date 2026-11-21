// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry is the YouTube video itself: the house reads VIDEO.json from
// this repository, fetches the video from YouTube, and ranks it by its
// views. All this program has to do is hand VIDEO.json to the grader by
// copying it from the repository root to the output directory.
//
// Local run (from the repository root):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const VIDEO_FILE = "VIDEO.json";

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, VIDEO_FILE);
const target = join(OUTPUT_DIR, VIDEO_FILE);
try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy ${VIDEO_FILE} from ${source}: ${(error as Error).message}`);
  process.exit(1);
}
