import createMDX from '@next/mdx'
import emoji from 'remark-emoji'
import remarkParse from 'remark-parse'
import admonitions from 'remark-admonitions'
import rehypeStringify from 'rehype-stringify'
import rehypeShiki from '@shikijs/rehype'
import { rendererRich, transformerTwoslash } from '@shikijs/twoslash'
import {
  transformerNotationDiff,
  transformerMetaWordHighlight,
  transformerNotationWordHighlight,
  transformerNotationHighlight,
} from '@shikijs/transformers'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [emoji, remarkParse],
    rehypePlugins: [
      [
        rehypeShiki,
        {
          theme: 'night-owl',
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
      ],
      rehypeStringify,
    ],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
