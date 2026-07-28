import { defineCollection, z } from 'astro:content';

const extensionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    storeUrl: z.string().optional(),
    status: z.enum(['live', 'in-review', 'in-development']).default('live'),
    icon: z.string(),
    version: z.string(),
    lastUpdated: z.string(),
    downloadCount: z.string(),
    featured: z.boolean().default(false),
    screenshots: z.array(z.string()).default([]),
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
    ).default([]),
  }),
});

const appsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    platform: z.enum(['Amazon Appstore', 'Android', 'iOS', 'Cross-platform']),
    storeUrl: z.string().optional(),
    status: z.enum(['live', 'in-review', 'in-development']),
    icon: z.string(),
    category: z.string(),
    year: z.string(),
    featured: z.boolean().default(false),
  }),
});

const webCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    url: z.string(),
    status: z.enum(['live', 'in-review', 'in-development']).default('live'),
    stack: z.array(z.string()),
    role: z.string(),
    year: z.string(),
    icon: z.string(),
    featured: z.boolean().default(false),
    highlights: z.array(z.string()),
  }),
});

const artCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    series: z.string(),
    description: z.string(),
    productLink: z.string().optional(),
    productName: z.string().optional(),
    preview: z.string().optional(),
    medium: z.string(),
    printSpecs: z.object({
      dpi: z.number(),
      format: z.string(),
      color: z.string(),
      notes: z.string(),
    }),
    status: z.enum(['ready', 'in-progress', 'archived']),
    year: z.string(),
    palette: z.array(z.string()),
    motif: z.string(),
    featured: z.boolean().default(false),
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
  apps: appsCollection,
  web: webCollection,
  art: artCollection,
  blog: blogCollection,
};
