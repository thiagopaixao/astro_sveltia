import { z, defineCollection } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    sections: z.array(
      z.object({
        section: z.string(),
        title: z.string().optional(),
        txtColor: z.string().optional(),
        bgColor: z.string().optional(),
        backgroundImage: z.string().optional(),
        body: z.string().optional(),
        media: z.string().optional(),
        mediaType: z.string().optional(),
        ctaText: z.string().optional(),
        link: z.object({
          url: z.string(),
          target: z.string(),
          text: z.string()
        }).optional()
      })
    )
  })
});

export const collections = {
  pages: pagesCollection,
};
