import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { loadEnvFile } from "../harness/load-env.js";
import { publishSkill, REPO_ROOT, writeHarnessOutput } from "../harness/publish.js";
import { publishInputSchema } from "../harness/schema.js";

function usage(): never {
  console.log(`Usage: pnpm harness:publish --input <path-to-json>

Reads a JSON publish manifest and runs the skill publisher harness.
Outputs structured JSON to stdout and saves .tmp/publish-<id>.json.

Example:
  pnpm harness:publish --input harness/fixtures/voice-dna-builder.json

Input schema: harness/schema.ts (publishInputSchema)
`);
  process.exit(1);
}

async function main(): Promise<void> {
  const inputFlag = process.argv.indexOf("--input");
  if (inputFlag === -1 || !process.argv[inputFlag + 1]) {
    usage();
  }

  const inputPath = resolve(process.argv[inputFlag + 1]);
  const raw = JSON.parse(readFileSync(inputPath, "utf8"));
  const input = publishInputSchema.parse(raw);

  loadEnvFile(REPO_ROOT);

  const output = await publishSkill(input, {
    root: REPO_ROOT,
    log: (message) => console.log(message),
  });

  const outFile = writeHarnessOutput(REPO_ROOT, output);
  console.log("\n✓ Harness complete\n");
  console.log(JSON.stringify(output, null, 2));
  console.log(`\nSaved: ${outFile}\n`);
}

main().catch((err) => {
  console.error("\n✗ Harness failed:", err instanceof Error ? err.message : err);
  process.exit(1);
});
