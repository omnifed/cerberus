import { defineConfig, s } from 'velite'

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
        slug: s.path(),
        category: s.string(),
        version: s.string(),
        timeToRead: s.number(),
        tag: s.string(),
        code: s.mdx(),
      }),
    },
  },
})
