// Entry for make.fun's "Fridge Roast: One Line, Biggest Laugh" bounty.
//
// The entry is one line roasting a fridge, and it has to land cold. Mine
// goes after the all-night hum every fridge makes, and the one secret that
// hum is actually keeping. This program writes that single line to
// entry.txt in the output directory and does nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fridge hums all night like it's keeping a secret. It is. The secret is expired milk.";

// The gate refuses anything over 200 characters, so check before writing
// rather than let a future edit of the line quietly disqualify the entry.
if ([...LINE].length > 200) {
  throw new Error(`entry line is ${[...LINE].length} characters, over the 200 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.error(`wrote entry.txt: ${[...LINE].length} characters`);
