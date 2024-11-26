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
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com',
      },
    ],
  },
}

const withMDX = createMDX({
  experimental: {
    mdxRs: {
      mdxType: 'gfm',
    },
  },

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
          styleOverrides: {
            borderWidth: '3px',
          },
          themes: [
            'min-light',
            'night-owl',
            'everforest-dark',
            'everforest-light',
          ],
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
