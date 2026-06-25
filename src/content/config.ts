import { defineCollection, z } from 'astro:content';

const extensionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    storeUrl: z.string(),
    icon: z.string(), // Name of Lucide icon
    version: z.string(),
    lastUpdated: z.string(),
    downloadCount: z.string(),
    screenshots: z.array(z.string()),
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  extensions: extensionsCollection,
  blog: blogCollection,
};
