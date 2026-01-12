import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

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

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'",
          },
        ],
      },
    ]
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
            'vitesse-black',
            'vitesse-light',
          ],
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
