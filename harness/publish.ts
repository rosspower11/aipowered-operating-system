import { execSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { loadNotionConfig, upsertSkillPage } from "./lib/notion.js";
import type { PublishInput, PublishOutput } from "./schema.js";

const __filename = fileURLToPath(import.meta.url);
export const REPO_ROOT = resolve(dirname(__filename), "..");

const GITHUB_REPO =
  process.env.GITHUB_REPO ?? "rosspower11/aipowered-operating-system";

export type PublishOptions = {
  root?: string;
  log?: (message: string) => void;
};

function pathsFor(root: string, input: PublishInput) {
  const pluginSkill = join(root, "plugins", input.plugin, "skills", input.id, "SKILL.md");
  const seriesDir = join(root, "15 skills", input.id);
  const seriesSkill = join(seriesDir, "SKILL.md");
  const assetName = `${input.id}-SKILL.md`;
  const tag = `${input.id}-v${input.version}`;
  const downloadUrl = `https://github.com/${GITHUB_REPO}/releases/download/${tag}/${assetName}`;
  const releaseUrl = `https://github.com/${GITHUB_REPO}/releases/tag/${tag}`;

  return { pluginSkill, seriesDir, seriesSkill, assetName, tag, downloadUrl, releaseUrl };
}

function run(root: string, cmd: string, dryRun: boolean): string {
  if (dryRun) return "";
  return execSync(cmd, { cwd: root, encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] }).trim();
}

function logStep(log: (message: string) => void, message: string): void {
  log(`→ ${message}`);
}

function gateFilesWritten(
  root: string,
  input: PublishInput,
  pluginSkill: string,
  seriesSkill: string,
  log: (message: string) => void,
): void {
  if (input.claudeSkillPath) {
    if (!existsSync(input.claudeSkillPath)) {
      throw new Error(`claudeSkillPath not found: ${input.claudeSkillPath}`);
    }
    mkdirSync(dirname(seriesSkill), { recursive: true });
    if (!input.dryRun) {
      copyFileSync(input.claudeSkillPath, seriesSkill);
    }
    logStep(log, `Copied Claude skill to 15 skills/${input.id}/SKILL.md`);
  }

  if (!existsSync(pluginSkill)) {
    throw new Error(`Missing Vault skill file: ${pluginSkill}`);
  }
  if (!existsSync(seriesSkill)) {
    throw new Error(`Missing 15 skills file: ${seriesSkill}`);
  }

  const raw = readFileSync(pluginSkill, "utf8");
  const { data } = matter(raw);
  if (data.id !== input.id) {
    throw new Error(`Frontmatter id "${data.id}" does not match input id "${input.id}"`);
  }
}

function gateValidate(root: string, input: PublishInput, log: (message: string) => void): boolean {
  logStep(log, "Validating content");
  if (input.dryRun) return false;
  execSync("pnpm validate", { cwd: root, stdio: "inherit" });
  return true;
}

function gatePush(
  root: string,
  input: PublishInput,
  pluginSkill: string,
  seriesSkill: string,
  log: (message: string) => void,
): { commitSha: string | null; pushed: boolean } {
  if (input.releaseOnly || input.skipPush) {
    logStep(log, "Skipping git commit/push");
    return { commitSha: null, pushed: false };
  }

  if (input.dryRun) {
    logStep(log, "Skipping git commit/push (dry run)");
    return { commitSha: null, pushed: false };
  }

  const relPlugin = pluginSkill.replace(`${root}/`, "");
  const relSeries = seriesSkill.replace(`${root}/`, "");
  const status = run(root, "git status --porcelain", false);
  const hasChanges =
    status.includes(relPlugin) ||
    status.includes(relSeries) ||
    status.includes(basename(dirname(pluginSkill)));

  if (hasChanges) {
    logStep(log, "Committing skill files");
    run(root, `git add "${relPlugin}" "${relSeries}"`, false);
    run(
      root,
      `git commit -m "Add ${input.title} skill to ${input.plugin} plug-in."`,
      false,
    );
  } else {
    logStep(log, "No uncommitted skill changes");
  }

  logStep(log, "Pushing to origin main");
  run(root, "git push origin main", false);

  return { commitSha: run(root, "git rev-parse HEAD", false), pushed: true };
}

function gateRelease(
  root: string,
  input: PublishInput,
  seriesSkill: string,
  assetName: string,
  tag: string,
  log: (message: string) => void,
): void {
  logStep(log, `Creating GitHub release ${tag}`);
  const title = `${input.title} — Skill v${input.version}`;
  const notes = `Release of the ${input.title} skill file for direct download.`;

  if (input.dryRun) return;

  const tmpDir = join(root, ".tmp");
  mkdirSync(tmpDir, { recursive: true });
  const tmpAsset = join(tmpDir, assetName);
  copyFileSync(seriesSkill, tmpAsset);

  run(
    root,
    `gh release delete ${tag} --repo ${GITHUB_REPO} --yes 2>/dev/null || true`,
    false,
  );
  run(
    root,
    `gh release create ${tag} "${tmpAsset}" --repo ${GITHUB_REPO} --title "${title}" --notes "${notes}"`,
    false,
  );
}

async function gateNotion(
  input: PublishInput,
  downloadUrl: string,
  releaseUrl: string,
  log: (message: string) => void,
): Promise<{ pageUrl: string | null; created: boolean | null }> {
  if (input.skipNotion) {
    logStep(log, "Skipping Notion update");
    return { pageUrl: null, created: null };
  }

  const config = loadNotionConfig();
  if (!config) {
    logStep(log, "Notion skipped (set NOTION_API_KEY + NOTION_SKILLS_DB_ID)");
    return { pageUrl: null, created: null };
  }

  logStep(log, `Upserting Notion page: "${input.notionName}"`);
  if (input.dryRun) {
    return { pageUrl: null, created: null };
  }

  const { pageUrl, created } = await upsertSkillPage(config, {
    name: input.notionName,
    tag: input.tag,
    campaign: input.campaign,
    downloadUrl,
    releaseUrl,
    skillTitle: input.title,
  });

  logStep(log, `Notion page ${created ? "created" : "updated"}: ${pageUrl}`);
  return { pageUrl, created };
}

function verifyReleaseAsset(tag: string, assetName: string, dryRun: boolean): void {
  if (dryRun) return;

  const raw = execSync(
    `gh api repos/${GITHUB_REPO}/releases/tags/${tag} --jq '.assets[] | select(.name == "${assetName}") | .browser_download_url'`,
    { encoding: "utf8" },
  ).trim();

  if (!raw) {
    throw new Error(`Release asset "${assetName}" not found on tag ${tag}`);
  }
}

export async function publishSkill(
  input: PublishInput,
  options: PublishOptions = {},
): Promise<PublishOutput> {
  const root = options.root ?? REPO_ROOT;
  const log = options.log ?? (() => undefined);
  const { pluginSkill, seriesSkill, assetName, tag, downloadUrl, releaseUrl } = pathsFor(
    root,
    input,
  );

  const gates = {
    filesWritten: false,
    validated: false,
    pushed: false,
    released: false,
    notionUpdated: false,
  };

  log(`\nPublishing skill: ${input.title} (${input.id})\n`);

  gateFilesWritten(root, input, pluginSkill, seriesSkill, log);
  gates.filesWritten = true;

  gates.validated = gateValidate(root, input, log);

  const { commitSha, pushed } = gatePush(root, input, pluginSkill, seriesSkill, log);
  gates.pushed = pushed;

  gateRelease(root, input, seriesSkill, assetName, tag, log);
  if (!input.dryRun) {
    verifyReleaseAsset(tag, assetName, false);
    gates.released = true;
  }

  const { pageUrl, created } = await gateNotion(input, downloadUrl, releaseUrl, log);
  gates.notionUpdated = pageUrl !== null;

  return {
    success: true,
    id: input.id,
    title: input.title,
    downloadUrl,
    releaseUrl,
    notionPageUrl: pageUrl,
    notionCreated: created,
    commitSha,
    gates,
  };
}

export function writeHarnessOutput(root: string, output: PublishOutput): string {
  const outPath = join(root, ".tmp", `publish-${output.id}.json`);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(output, null, 2));
  return outPath;
}
