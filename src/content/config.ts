import { defineCollection, z } from 'astro:content';
import { marked } from 'marked';

// Função para processar markdown e HTML
function processMarkdown(text: string) {
  if (!text) return '';
  return marked.parse(text);
}

// Schemas comuns
const linkSchema = z.object({
  url: z.string(),
  target: z.string().optional(),
  customTarget: z.string().optional(),
  text: z.string().optional(),
  title: z.string().optional(),
});

// Schema para cada card do CardsCall
const cardCallSchema = z.object({
  link: linkSchema.optional(),
  img: z
    .object({
      src: z.string(),
      alt: z.string().optional(),
    })
    .optional(),
  title: z.string().optional().transform(processMarkdown),
  text: z.string().optional().transform(processMarkdown),
});

// Schema para cada card do Cards
const cardSchema = z.object({
  link: linkSchema.optional(),
  title: z.string().optional().transform(processMarkdown),
  text: z.string().optional().transform(processMarkdown),
  icon: z.string().optional(),
});

// Schema para logos
const logoSchema = z.object({
  image: z.string(),
  link: linkSchema,
});

// Schema para barras do gráfico
const chartBarSchema = z.object({
  label: z.string().transform(processMarkdown),
  color: z.string().optional(),
  number: z.number().min(0).optional(),
  numberPercent: z.number().min(0).max(100).optional(),
});

// Schema para barras do gráfico de porcentagem
const chartPercentageBarSchema = z.object({
  label: z.string().transform(processMarkdown),
  color: z.string().optional(),
  number: z.number().min(0).max(100).optional(),
});

const componentSchema = z.object({
  hasDropCap: z.boolean().optional(),
  type: z.string(),
  layout: z.enum(['default', 'media', 'text', 'text-bigger']).optional(),
  txtColor: z.string().optional(),
  customTxtColor: z.string().optional(),
  bgColor: z.string().optional(),
  customBgColor: z.string().optional(),
  backgroundImage: z.string().optional(),
  content: z.string().optional().transform(processMarkdown),
  title: z.string().optional().transform(processMarkdown),
  body: z.string().optional().transform(processMarkdown),
  paddingTop: z.boolean().optional(),
  paddingBottom: z.boolean().optional(),
  hasByline: z.boolean().optional(),
  byline: z.string().optional(),
  shortTitle: z.string().optional(),
  longTitle: z.string().optional(),
  description: z.string().optional(),
  showInMenu: z.boolean().optional(),
  id: z.string().optional(),

  // Atributos específicos do CTA
  highlightedText: z.string().optional(),
  media: z.string().optional(),
  mediaType: z.string().optional(),
  ctaText: z.string().optional().transform(processMarkdown),
  link: linkSchema.optional(),
  imgBg: z.string().optional(),
  videoBg: z.string().optional(),
  overlay: z.string().optional().nullable(),
  backgroundMedia: z
    .array(
      z.discriminatedUnion('type', [
        z.object({
          type: z.literal('backgroundImage'),
          imgSrc: z.string().optional(),
        }),
        z.object({
          type: z.literal('backgroundVideo'),
          videoSrc: z.string().optional(),
        }),
      ])
    )
    .optional(),

  // Atributos do CardsCall
  cardsCallArr: z.array(cardCallSchema).optional(),

  // Atributos do Cards
  cardsArr: z.array(cardSchema).optional(),

  // Atributos do ChartBar
  chartTitle: z.string().optional().transform(processMarkdown),
  chartNotes: z.string().optional().transform(processMarkdown),
  chartBars: z.array(chartBarSchema).optional(),
  chartPercentageTitle: z.string().optional().transform(processMarkdown),
  chartPercentageNotes: z.string().optional().transform(processMarkdown),
  chartPercentageValues: z.array(chartPercentageBarSchema).optional(),

  // Atributos do ImageBlock
  src: z.string().optional(),
  alt: z.string().optional(),
  wideImage: z.boolean().optional(),

  // Atributos do LogosGroup
  logos: z.array(logoSchema).optional(),

  // Atributos do VideoEmbed
  videoUrl: z.string().optional(),
  videoCaption: z.string().optional().transform(processMarkdown),
  wideVideo: z.boolean().optional(),

  // Atributos do HtmlEmbed
  htmlCode: z.string().optional(),
  htmlCaption: z.string().optional().transform(processMarkdown),
  wideHtml: z.boolean().optional(),

  // Atributos do InnerColumns
  column1: z.any().optional(),
  column2: z.any().optional(),

  // Atributos do Timeline
  // timelineItems: z.array(z.any()).optional(),

  // Atributos do Columns
  invertOnMobile: z.boolean().optional(),
  columnsAlign: z.enum(['33-66', '66-33']).optional(),

  // Atributos do Map
  columnAlign: z.enum(['left', 'center', 'right']).optional(),
  floatingText: z.boolean().optional(),
  mapView: z.string().optional(),
  style: z.string().optional(),
  center: z
    .object({
      lng: z.number(),
      lat: z.number(),
    })
    .optional(),
  zoom: z.number().optional(),
  bearing: z.number().optional(),
  pitch: z.number().optional(),
  token: z.string().optional(),
  views: z
    .array(
      z.object({
        id: z.string().optional(),
        center: z
          .object({
            lng: z.number(),
            lat: z.number(),
          })
          .optional(),
        duration: z.number().optional(),
        zoom: z.number().optional(),
        bearing: z.number().optional(),
        pitch: z.number().optional(),
        layers: z.array(z.string()).optional(),
        mobile: z
          .object({
            zoom: z.number().optional(),
          })
          .optional(),
        captions: z
          .object({
            title: z.string().optional(),
            notes: z.string().optional(),
            items: z
              .array(
                z.object({
                  icon: z.string().optional(),
                  text: z.string().optional(),
                })
              )
              .optional(),
          })
          .optional(),
      })
    )
    .optional(),

  // Atributos do BigNumbers
  alignment: z.enum(['caption-bottom', 'caption-top']).optional(),
  items: z
    .array(
      z.object({
        number: z.string().optional(),
        caption: z.string().optional().transform(processMarkdown),
      })
    )
    .optional(),

  // Atributos do Spacer
  desktop: z.string().optional(),
  tablet: z.string().optional(),
  mobile: z.string().optional(),

  // Atributos do Gallery
  uniqid: z.string().optional(),
  images: z
    .array(
      z.object({
        image: z.string().optional(),
        caption: z.string().optional().transform(processMarkdown),
      })
    )
    .optional(),

  // Atributos do Slider
  slides: z
    .array(
      z.object({
        image: z.string().optional(),
        caption: z.string().optional(),
      })
    )
    .optional(),

  // Caso possua subcomponentes
  components: z.array(z.any()).optional(),
  text: z.string().optional(),
  imageLeft: z.string().optional(),
  imageRight: z.string().optional(),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    components: z.array(componentSchema).optional(),
    pageTheme: z
      .object({
        primaryColor: z.string().optional(),
        secondaryColor: z.string().optional(),
        highlightColor: z.string().optional(),
        auxiliaryColor: z.string().optional(),
        displayFont: z.string().optional(),
        textFont: z.string().optional(),
        spacingPatterns: z
          .array(
            z.object({
              name: z.string(),
              mobile: z.string(),
              tablet: z.string(),
              desktop: z.string(),
            })
          )
          .optional(),
      })
      .optional(),
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
