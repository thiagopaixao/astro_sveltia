import { defineCollection, z } from 'astro:content';
import { marked } from 'marked';

// Função para processar markdown e HTML
function processMarkdown(text: string) {
  if (!text) return '';
  return marked.parse(text, {
    mangle: false,
    headerIds: false,
    gfm: true,
    breaks: true,
    sanitize: false, // Allows HTML
    smartLists: true,
    smartypants: true
  });
}

// Schemas comuns
const linkSchema = z.object({
  url: z.string(),
  target: z.string().optional(),
  text: z.string().optional(),
  title: z.string().optional(),
});

// Schema para cada card do CardsCall
const cardSchema = z.object({
  link: linkSchema.optional(),
  img: z
    .object({
      src: z.string(),
    })
    .optional(),
  title: z.string().optional().transform(processMarkdown),
  text: z.string().optional().transform(processMarkdown),
});

// Schema para logos
const logoSchema = z.object({
  image: z.string(),
  link: linkSchema,
});

// Schema para barras do gráfico
const chartBarSchema = z.object({
  label: z.string().transform(processMarkdown),
  value: z.number(),
  color: z.string().optional(),
});

const componentSchema = z.object({
  type: z.string(),
  layout: z.enum(['default', 'media', 'text', 'text-bigger']).optional(),
  txtColor: z.string().optional(),
  bgColor: z.string().optional(),
  backgroundImage: z.string().optional(),
  content: z.string().optional().transform(processMarkdown),
  title: z.string().optional().transform(processMarkdown),
  body: z.string().optional().transform(processMarkdown),
  paddingTop: z.boolean().optional(),
  paddingBottom: z.boolean().optional(),

  // Atributos específicos do CTA
  highlightedText: z.string().optional(),
  media: z.string().optional(),
  mediaType: z.string().optional(),
  ctaText: z.string().optional().transform(processMarkdown),
  link: linkSchema.optional(),
  imgBg: z.string().optional(),
  overlay: z.string().optional(),
  videoBg: z.string().optional(),

  // Atributos do CardsCall
  cardsCallArr: z.array(cardSchema).optional(),

  // Atributos do ChartBar
  chartTitle: z.string().optional().transform(processMarkdown),
  chartNotes: z.string().optional().transform(processMarkdown),
  chartBars: z.array(chartBarSchema).optional(),

  // Atributos do ImageBlock
  src: z.string().optional(),
  alt: z.string().optional().transform(processMarkdown),
  wide: z.boolean().optional(),
  description: z.string().optional().transform(processMarkdown),

  // Atributos do LogosGroup
  logos: z.array(logoSchema).optional(),

  // Atributos do VideoEmbed
  videoUrl: z.string().optional(),
  videoCaption: z.string().optional().transform(processMarkdown),

  // Atributos do InnerColumns
  column1: z.string().optional().transform(processMarkdown),
  column2: z.string().optional().transform(processMarkdown),

  // Atributos do Map

  // Atributos do Spacer
  desktop: z.string().optional(),
  mobile: z.string().optional(),

  // Caso possua subcomponentes
  components: z.array(z.any()).optional(),
  id: z.string().optional(),
});

const sessionSchema = z.object({
  type: z.literal('Session'),
  id: z.string().optional(),
  components: z.array(componentSchema).optional(),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    components: z.array(componentSchema).optional(),
  }),
});

// Schema para Blog
const blogSchema = z.object({
  title: z.string(),
  date: z.date(),
  coverImage: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  author: z.string(),
});

// Schema para GeoStories
const geoStorySchema = z.object({
  title: z.string(),
  date: z.date(),
  coverImage: z.string(),
  location: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
  description: z.string(),
});

export const collections = {
  pages: pagesCollection,
  blog: defineCollection({
    type: 'content',
    schema: blogSchema,
  }),
  geostorys: defineCollection({
    type: 'content',
    schema: geoStorySchema,
  }),
};
