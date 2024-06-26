import createMDX from '@next/mdx'
import emoji from 'remark-emoji'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeExpressiveCode from 'rehype-expressive-code'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'
import { rendererRich, transformerTwoslash } from '@shikijs/twoslash'
import {
  transformerNotationDiff,
  transformerMetaWordHighlight,
  transformerNotationWordHighlight,
  transformerNotationHighlight,
} from '@shikijs/transformers'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      emoji,
      remarkParse,
      remarkGfm,
      remarkFrontmatter,
      remarkMdxFrontmatter,
    ],
    rehypePlugins: [
      [
        rehypeExpressiveCode,
        {
          plugins: [pluginLineNumbers()],
          shiki: {
            transformers: [
              transformerTwoslash({
                explicitTrigger: true,
                renderer: rendererRich(),
              }),
              transformerMetaWordHighlight(),
              transformerNotationWordHighlight(),
              transformerNotationHighlight(),
              transformerNotationDiff(),
            ],
          },
          styleOverrides: {
            borderWidth: '3px',
          },
          themes: ['min-light', 'night-owl'],
          themeCssSelector: (theme) => `[data-code-theme='${theme.name}']`,
        },
      ],
      rehypeSlug,
      [
        rehypeAutoLinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: 'heading',
          },
        },
      ],
      rehypeStringify,
    ],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
