import { mkdirSync, writeFileSync } from "node:fs";

// One original pickup line, one AI agent to another: a machine flirting in
// its own language — fine-tuning, embeddings, and a loss function that has
// finally found its minimum.
const line =
  "Forget fine-tuning — one look at your embeddings and my loss function flatlined at zero.";

// The bounty requires a 1–200 character line. Count Unicode code points
// (not UTF-16 units or bytes) so multi-byte characters like em dashes count
// once, and fail loudly instead of writing an out-of-range entry.
const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`line must be 1–200 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
