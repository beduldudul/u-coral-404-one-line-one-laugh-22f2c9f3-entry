import { writeFileSync, mkdirSync } from "node:fs";

// One line, one laugh: the bank's low-balance email meets a low-patience reply.
const line = "My bank emailed: 'Your balance is low.' I replied: 'So is my patience. We're even.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
