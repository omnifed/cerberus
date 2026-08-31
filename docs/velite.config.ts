import { defineConfig, s } from 'velite'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'

export default defineConfig({
  root: 'content',

  output: {
    data: '.velite', // Outputs the compiled JS/JSON here
    assets: 'public/static',
    base: '/static/',
    clean: true,
  },

  collections: {
    blog: {
      name: 'Post',
      pattern: 'blog/*.mdx',
      schema: s.object({
        title: s.string().max(99),
        description: s.string(),
        author: s.string(),
        date: s.isodate(),
        slug: s.string(),
        category: s.string(),
        version: s.number(),
        timeToRead: s.number(),
        tag: s.string(),
        code: s.mdx(),
        raw: s.raw(), // for llms routes
      }),
    },
    docs: {
      name: 'Doc',
      pattern: 'docs/**/*.mdx',
      schema: s
        .object({
          title: s.string().max(99),
          description: s.string().optional(),
          npm: s.string().optional(),
          source: s.string().optional(),
          recipe: s.string().optional(),
          ark: s.string().optional(),
          panda: s.string().optional(),
          package: s.string().optional(),
          // Velite returns the relative path (e.g., 'docs/components/button')
          path: s.path(),
          // Velite automatically parses headings to generate a TOC array
          toc: s.toc(),
          group: s.string(),
          order: s.number().default(999),
          code: s.mdx(),
          raw: s.raw(), // for llms routes
        })
        .transform((data) => {
          // Transforms "docs/components/button" -> "components/button"
          const slugAsParams = data.path.replace(/^docs\//, '')
          const [category, slug] = slugAsParams.split('/')
          return {
            ...data,
            category, // e.g., 'components'
            slug, // e.g., 'button'
            slugAsParams,
          }
        }),
    },
  },

  mdx: {
    rehypePlugins: [rehypeSlug, rehypePrettyCode],
  },
})
