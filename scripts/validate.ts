import { readFileSync } from "node:fs";
import { basename, dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import fg from "fast-glob";
import matter from "gray-matter";
import { ZodError } from "zod";
import { pluginSchema, type Plugin } from "../schema/plugin.schema.js";
import { skillSchema, type Skill } from "../schema/skill.schema.js";
import { promptSchema, type Prompt } from "../schema/prompt.schema.js";

const __filename = fileURLToPath(import.meta.url);
const ROOT = resolve(dirname(__filename), "..");

type Issue = { file: string; message: string };

const issues: Issue[] = [];
const seenIds = new Map<string, string>();

function rel(absPath: string): string {
  return relative(ROOT, absPath).split(sep).join("/");
}

function reportZod(file: string, err: ZodError): void {
  for (const issue of err.issues) {
    const path = issue.path.length > 0 ? issue.path.join(".") : "(root)";
    issues.push({ file, message: `${path}: ${issue.message}` });
  }
}

function trackId(kind: "skill" | "prompt", id: string, file: string): void {
  const key = `${kind}:${id}`;
  const prior = seenIds.get(key);
  if (prior) {
    issues.push({
      file,
      message: `duplicate ${kind} id "${id}" — already used in ${prior}`,
    });
    return;
  }
  seenIds.set(key, file);
}

async function loadPlugins(): Promise<Map<string, Plugin>> {
  const plugins = new Map<string, Plugin>();
  const files = await fg("plugins/*/plugin.json", { cwd: ROOT, absolute: true });

  for (const file of files) {
    const fileRel = rel(file);
    const folderId = basename(dirname(file));

    let parsed: unknown;
    try {
      parsed = JSON.parse(readFileSync(file, "utf8"));
    } catch (err) {
      issues.push({ file: fileRel, message: `invalid JSON: ${(err as Error).message}` });
      continue;
    }

    const result = pluginSchema.safeParse(parsed);
    if (!result.success) {
      reportZod(fileRel, result.error);
      continue;
    }

    if (result.data.id !== folderId) {
      issues.push({
        file: fileRel,
        message: `id "${result.data.id}" does not match folder "${folderId}"`,
      });
    }

    plugins.set(folderId, result.data);
  }

  return plugins;
}

async function loadSkills(plugins: Map<string, Plugin>): Promise<number> {
  const files = await fg("plugins/*/skills/*/SKILL.md", { cwd: ROOT, absolute: true });
  let count = 0;

  for (const file of files) {
    const fileRel = rel(file);
    const skillFolder = basename(dirname(file));
    const pluginId = basename(dirname(dirname(dirname(file))));

    const raw = readFileSync(file, "utf8");
    const { data } = matter(raw);

    const result = skillSchema.safeParse(data);
    if (!result.success) {
      reportZod(fileRel, result.error);
      continue;
    }

    const skill: Skill = result.data;

    if (skill.id !== skillFolder) {
      issues.push({
        file: fileRel,
        message: `id "${skill.id}" does not match skill folder "${skillFolder}"`,
      });
    }

    const plugin = plugins.get(pluginId);
    if (!plugin) {
      issues.push({ file: fileRel, message: `parent plug-in "${pluginId}" not found` });
    } else if (!plugin.categories.some((c) => c.id === skill.category)) {
      issues.push({
        file: fileRel,
        message: `category "${skill.category}" not declared in plugins/${pluginId}/plugin.json`,
      });
    }

    trackId("skill", skill.id, fileRel);
    count += 1;
  }

  return count;
}

async function loadPrompts(plugins: Map<string, Plugin>): Promise<number> {
  const files = await fg("plugins/*/prompts/*.md", { cwd: ROOT, absolute: true });
  let count = 0;

  for (const file of files) {
    const fileRel = rel(file);
    const filenameId = basename(file, ".md");
    const pluginId = basename(dirname(dirname(file)));

    const raw = readFileSync(file, "utf8");
    const { data } = matter(raw);

    const result = promptSchema.safeParse(data);
    if (!result.success) {
      reportZod(fileRel, result.error);
      continue;
    }

    const prompt: Prompt = result.data;

    if (prompt.id !== filenameId) {
      issues.push({
        file: fileRel,
        message: `id "${prompt.id}" does not match filename "${filenameId}"`,
      });
    }

    const plugin = plugins.get(pluginId);
    if (!plugin) {
      issues.push({ file: fileRel, message: `parent plug-in "${pluginId}" not found` });
    } else if (!plugin.categories.some((c) => c.id === prompt.category)) {
      issues.push({
        file: fileRel,
        message: `category "${prompt.category}" not declared in plugins/${pluginId}/plugin.json`,
      });
    }

    trackId("prompt", prompt.id, fileRel);
    count += 1;
  }

  return count;
}

async function main(): Promise<void> {
  const plugins = await loadPlugins();
  const skillCount = await loadSkills(plugins);
  const promptCount = await loadPrompts(plugins);

  if (issues.length > 0) {
    console.error(`✗ Validation failed with ${issues.length} issue${issues.length === 1 ? "" : "s"}:\n`);
    for (const { file, message } of issues) {
      console.error(`  ${file}`);
      console.error(`    → ${message}`);
    }
    console.error("");
    process.exit(1);
  }

  console.log(
    `✓ ${plugins.size} plug-in${plugins.size === 1 ? "" : "s"}, ${skillCount} skill${
      skillCount === 1 ? "" : "s"
    }, ${promptCount} prompt${promptCount === 1 ? "" : "s"} validated.`,
  );
}

main().catch((err) => {
  console.error("Validation script crashed:", err);
  process.exit(1);
});
