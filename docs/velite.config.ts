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
      }),
    },
  },

  mdx: {
    rehypePlugins: [rehypeSlug, rehypePrettyCode],
  },
})
