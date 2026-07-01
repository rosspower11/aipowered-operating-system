import { loadEnvFile } from "../harness/load-env.js";
import { publishSkill, REPO_ROOT } from "../harness/publish.js";
import type { PublishInput } from "../harness/schema.js";

function usage(): never {
  console.log(`Usage: pnpm publish-skill [options]

Publish a skill to GitHub (main) and the Notion Skills Library.

Required:
  --id <kebab-case-id>
  --plugin <plugin-id>
  --title "Lead Magnet Builder"
  --notion-name "Get the lead magnet skill"

Optional:
  --tag <tag>                    Notion tag (default: Content)
  --campaign <campaign>          Notion campaign (default: "15 Skills In 15 days")
  --version <n>                  Release version (default: 1)
  --claude-skill-path <path>     Copy source file into 15 skills/<id>/SKILL.md
  --dry-run
  --skip-notion
  --skip-push
  --release-only

Or use JSON input:
  pnpm harness:publish --input harness/fixtures/my-skill.json
`);
  process.exit(1);
}

function parseArgs(argv: string[]): PublishInput {
  const get = (flag: string): string | undefined => {
    const i = argv.indexOf(flag);
    return i >= 0 ? argv[i + 1] : undefined;
  };

  const id = get("--id");
  const plugin = get("--plugin");
  const title = get("--title");
  const notionName = get("--notion-name");

  if (!id || !plugin || !title || !notionName) {
    usage();
  }

  return {
    id,
    plugin: plugin as PublishInput["plugin"],
    title,
    notionName,
    tag: (get("--tag") ?? "Content") as PublishInput["tag"],
    campaign: get("--campaign") ?? "15 Skills In 15 days",
    version: Number(get("--version") ?? "1"),
    claudeSkillPath: get("--claude-skill-path"),
    dryRun: argv.includes("--dry-run"),
    skipNotion: argv.includes("--skip-notion"),
    skipPush: argv.includes("--skip-push"),
    releaseOnly: argv.includes("--release-only"),
  };
}

async function main(): Promise<void> {
  loadEnvFile(REPO_ROOT);
  const input = parseArgs(process.argv.slice(2));

  const output = await publishSkill(input, {
    root: REPO_ROOT,
    log: (message) => console.log(message),
  });

  console.log("\n✓ Published\n");
  console.log(`  Download:  ${output.downloadUrl}`);
  console.log(`  Release:   ${output.releaseUrl}`);
  if (output.notionPageUrl) {
    console.log(`  Notion:    ${output.notionPageUrl}`);
  } else {
    console.log(`  Notion:    ${input.notionName} (not updated)`);
  }
  console.log("");
}

main().catch((err) => {
  console.error("\n✗ Publish failed:", err instanceof Error ? err.message : err);
  process.exit(1);
});
