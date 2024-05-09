import createMDX from '@next/mdx'
import emoji from 'remark-emoji'
import rehypeHighlight from 'rehype-highlight'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [emoji],
    rehypePlugins: [rehypeHighlight],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
