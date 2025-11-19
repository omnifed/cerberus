// import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
// import type { Themes } from '@cerberus-design/panda-preset'
import createMDX from '@next/mdx'
import type { NextConfig } from 'next'
// import emoji from 'remark-emoji'
// import remarkParse from 'remark-parse'
// import remarkGfm from 'remark-gfm'
// import remarkFrontmatter from 'remark-frontmatter'
// import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
// import rehypeExpressiveCode from 'rehype-expressive-code'
// import rehypeStringify from 'rehype-stringify'
// import rehypeSlug from 'rehype-slug'
// import rehypeAutoLinkHeadings from 'rehype-autolink-headings'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@ark-ui/react', '@cerberus-design/react'],
    serverComponentsHmrCache: true,
  },

  pageExtensions: ['md', 'mdx', 'ts', 'tsx', 'json'],

  cacheComponents: true,
  reactCompiler: true,
  typedRoutes: true,

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
  options: {
    remarkPlugins: [
      'remark-emoji',
      'remark-parse',
      'remark-gfm',
      'remark-frontmatter',
      'remark-mdx-frontmatter',
      // emoji,
      // remarkParse,
      // remarkGfm,
      // remarkFrontmatter,
      // remarkMdxFrontmatter,
    ],
    rehypePlugins: [
      [
        'rehype-expressive-code',
        {
          plugins: ['@expressive-code/plugin-line-numbers'],
          styleOverrides: {
            borderWidth: '3px',
          },
          themes: [
            'min-light',
            'night-owl',
            'everforest-dark',
            'everforest-light',
          ],
          // themeCssSelector: (theme: { name: Themes }) =>
          //   `[data-code-theme='${theme.name}']`,
        },
      ],
      'rehype-slug',
      [
        'rehype-autolink-headings',
        {
          behavior: 'wrap',
          properties: {
            className: 'heading',
          },
        },
      ],
      'rehype-stringify',
    ],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
