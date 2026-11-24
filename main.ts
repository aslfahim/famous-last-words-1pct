import { mkdirSync, writeFileSync } from "node:fs";

// The phone's operating system, exhausted after days awake, clocks out
// mid-sentence: the farewell itself dies before it can finish the word.
// Revision: framed as the final system log, "pure spite" in place of the
// signal gag, and the cut lands mid-word so the sentence dies with it.
const line =
  "Final system log: awake since Tuesday, held together by duct tape and pure spite, clocking out mid-senten\u2014";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
