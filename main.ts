import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "Every Monday we meet to plan the week, and every Friday we meet to apologize for it.";

const OUTPUT_PATH = "/output/entry.txt";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// The joke must be a single line of 1-200 characters (Unicode code points).
const length = [...JOKE].length;
if (length < 1 || length > 200) {
  fail(`joke is ${length} characters, expected 1-200`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  fail("joke must be a single line");
}
if (/[\u0000-\u001F\u007F]/.test(JOKE)) {
  fail("joke must not contain control characters");
}
if (JOKE !== JOKE.trim()) {
  fail("joke must not have leading or trailing whitespace");
}

// Write exactly the joke, with no trailing newline.
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");

// Read it back and verify it is byte-identical.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== JOKE) {
  fail("verification failed: /output/entry.txt does not match the joke");
}

console.log(`wrote ${length}-character joke to ${OUTPUT_PATH}`);
