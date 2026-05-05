import { z } from "zod";
import { kebabCase, ribbonSchema } from "./plugin.schema.js";

const isoDate = z.preprocess((value) => {
  if (value instanceof Date) {
    const yyyy = value.getUTCFullYear().toString().padStart(4, "0");
    const mm = (value.getUTCMonth() + 1).toString().padStart(2, "0");
    const dd = value.getUTCDate().toString().padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }
  return value;
}, z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "must be an ISO date (YYYY-MM-DD)"));

const semver = z
  .string()
  .regex(/^\d+\.\d+\.\d+$/, "must be semver (MAJOR.MINOR.PATCH)");

export const skillSchema = z.object({
  id: kebabCase,
  title: z.string().min(1),
  type: z.literal("skill"),
  category: kebabCase,
  tags: z.array(z.string().min(1)),
  ribbon: ribbonSchema.optional(),
  preview: z.string().min(1),
  version: semver,
  author: z.string().min(1),
  created: isoDate,
  updated: isoDate,
});

export type Skill = z.infer<typeof skillSchema>;
