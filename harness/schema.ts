import { z } from "zod";

const kebabCase = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "must be kebab-case");

export const pluginIdSchema = z.enum([
  "marketing",
  "sales",
  "product",
  "engineering",
  "operations",
]);

export const notionTagSchema = z.enum(["Basics", "Content", "Sales", "Admin"]);

export const publishInputSchema = z.object({
  id: kebabCase,
  plugin: pluginIdSchema,
  title: z.string().min(1),
  notionName: z.string().min(1),
  tag: notionTagSchema.default("Content"),
  campaign: z.string().default("15 Skills In 15 days"),
  version: z.number().int().positive().default(1),
  dryRun: z.boolean().default(false),
  skipNotion: z.boolean().default(false),
  skipPush: z.boolean().default(false),
  releaseOnly: z.boolean().default(false),
  claudeSkillPath: z.string().optional(),
});

export const publishOutputSchema = z.object({
  success: z.literal(true),
  id: z.string(),
  title: z.string(),
  downloadUrl: z.string().url(),
  releaseUrl: z.string().url(),
  notionPageUrl: z.string().url().nullable(),
  notionCreated: z.boolean().nullable(),
  commitSha: z.string().nullable(),
  gates: z.object({
    filesWritten: z.boolean(),
    validated: z.boolean(),
    pushed: z.boolean(),
    released: z.boolean(),
    notionUpdated: z.boolean(),
  }),
});

export type PublishInput = z.infer<typeof publishInputSchema>;
export type PublishOutput = z.infer<typeof publishOutputSchema>;
