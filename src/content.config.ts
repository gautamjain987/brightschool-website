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
    seoTitle: z.string(),
    seoDescription: z.string(),
    lead: z.string(),
    // One entry per 8-class module.
    syllabus: z.array(z.object({
      title: z.string(),
      topics: z.array(z.string()),
      milestone: z.string().optional(),
    })).default([]),
    // Short points for pages without a full syllabus yet.
    points: z.array(z.string()).default([]),
  }),
});

export const collections = { courses };
