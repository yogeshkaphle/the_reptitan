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
    number: z.number(),
    title: z.string(),
    teaser: z.string(),
    videoId: z.string().optional(), // Vimeo video ID — add when content arrives
  }),
});

export const collections = { faqs, leaks };
