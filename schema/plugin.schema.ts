import { z } from "zod";

export const kebabCase = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "must be kebab-case (lowercase, hyphens only)");

export const ribbonSchema = z.union([z.null(), z.literal("new"), z.literal("trending")]);

export const tierSchema = z.enum(["free", "pro", "accelerator"]);

export type Tier = z.infer<typeof tierSchema>;

export const categorySchema = z.object({
  id: kebabCase,
  label: z.string().min(1),
});

export const pluginSchema = z.object({
  id: kebabCase,
  name: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1),
  ribbon: ribbonSchema,
  categories: z.array(categorySchema).min(1),
  order: z.number().int().nonnegative(),
  tier: tierSchema,
});

export type Plugin = z.infer<typeof pluginSchema>;
export type Category = z.infer<typeof categorySchema>;
