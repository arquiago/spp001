import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Add other fields your pages use
  }),
});

export const collections = {
  pages,
  // ... other collections
};