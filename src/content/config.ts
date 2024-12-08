import { defineCollection, z } from 'astro:content';

const linkSchema = z.object({
  url: z.string(),
  target: z.string().optional(),
  text: z.string().optional(),
});

// Schema para cada card do CardsCall
const cardSchema = z.object({
  link: linkSchema.optional(),
  img: z
    .object({
      src: z.string(),
    })
    .optional(),
  title: z.string().optional(),
  text: z.string().optional(),
});

const componentSchema = z.object({
  type: z.string(),
  layout: z.string().optional(),
  txtColor: z.string().optional(),
  bgColor: z.string().optional(),
  backgroundImage: z.string().optional(),
  content: z.string().optional(),
  title: z.string().optional(),
  body: z.string().optional(),
  paddingTop: z.boolean().optional(),
  paddingBottom: z.boolean().optional(),

  // Atributos específicos do CTA
  highlightedText: z.string().optional(),
  media: z.string().optional(),
  mediaType: z.string().optional(),
  ctaText: z.string().optional(),
  link: linkSchema.optional(),
  imgBg: z.string().optional(),
  overlay: z.string().optional(),
  videoBg: z.string().optional(),

  // Atributos do CardsCall
  cardsCallArr: z.array(cardSchema).optional(),

  // Caso possua subcomponentes
  components: z.array(z.any()).optional(),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    components: z.array(componentSchema).optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
};
