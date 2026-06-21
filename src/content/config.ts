import { z, defineCollection } from 'astro:content';

const faqs = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    order: z.number().optional(),
    page: z.enum(['home', 'magnet']),
  }),
});

const leaks = defineCollection({
  type: 'content',
  schema: z.object({
    number: z.number().optional(),
    title: z.string(),
    teaser: z.string().optional(),
    videoId: z.string().optional(),     // Vimeo video ID — add when content arrives
    displayLabel: z.string().optional(), // e.g. "Lesson 1", "Bonus Lesson"
    length: z.string().optional(),       // e.g. "2 min"
    order: z.number().optional(),        // canonical sort key across all 8 lessons
  }),
});

export const collections = { faqs, leaks };
