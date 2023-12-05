import { defineCollection } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const blog = defineCollection({
  name: 'blog', // Give a name to the collection
  schema: rssSchema,
  sources: [{ dir: 'src/content/blog', type: 'markdown' }], // Assuming blog posts are in src/content/blog
});

export const collections = { 
  blog
};