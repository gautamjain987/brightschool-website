import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['stage', 'ai-track', 'ai-module']),
    ages: z.string(),
    tools: z.string().optional(),
    builds: z.string(),
    prerequisite: z.string().default('None'),
    order: z.number(),
    path: z.string(), // public URL, e.g. /beginner
    draft: z.boolean().default(true),
  }),
});

export const collections = { courses };
