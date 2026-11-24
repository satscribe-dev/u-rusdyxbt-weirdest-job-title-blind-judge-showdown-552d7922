// Weirdest Job Title: Blind Judge Showdown
// Entry program (program/v1, Node 22). Writes one job title — the weirdest
// we could think of — to /output/entry.txt. No network, no dependencies,
// no input data: the title is the entry.
import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Senior Vice President of Apologizing to Geese";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
