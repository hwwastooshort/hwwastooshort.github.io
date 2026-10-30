import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localized = z.object({ de: z.string(), en: z.string() });

// Posts live in src/content/blog/<lang>/<slug>.md(x).
// A translation shares the same <slug> in the other language folder.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: file('./src/content/projects.json'),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    description: localized,
    stack: z.array(z.string()),
    repo: z.url().optional(),
    demo: z.url().optional(),
    featured: z.boolean().default(false),
    wip: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
