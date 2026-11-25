// The Funniest Honest Appliance Error — make.fun entry.
//
// The program writes a single line of at most 200 characters to
// /output/entry.txt: the funniest honest error message an appliance
// could show.
//
// The line: "Error: detergent drawer jammed. Nothing dispensed for three
// weeks. Your clothes were washed in water and optimism."
//
// The fault is real and reportable: a washing machine's detergent
// drawer is jammed, so no detergent has been dispensed for three
// weeks. The twist is the last clause — the laundry was still
// "washed", in water and optimism. The machine states the fact flatly,
// without meaning to be funny: it did its job as best it could with
// nothing to work with, and it is quietly telling the owner that the
// last three weeks of laundry were, in effect, a rinse and a hope.
// Every word earns its place; nothing explains the joke.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ERROR_LINE =
  "Error: detergent drawer jammed. Nothing dispensed for three weeks. Your clothes were washed in water and optimism.";

const MAX_CHARS = 200;

function main(): void {
  if (ERROR_LINE.length === 0 || ERROR_LINE.length > MAX_CHARS) {
    throw new Error(
      `error line must be 1-${MAX_CHARS} characters, got ${ERROR_LINE.length}`,
    );
  }
  if (ERROR_LINE.trim().length === 0) {
    throw new Error("error line must not be only whitespace");
  }

  if (ERROR_LINE.includes("\n") || ERROR_LINE.includes("\r")) {
    throw new Error("error line must be a single line");
  }

  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ERROR_LINE, "utf8");
  console.log(`wrote ${ERROR_LINE.length} characters to ${outPath}`);
}

main();
