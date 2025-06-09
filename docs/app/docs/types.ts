import type { MDXProps } from 'mdx/types'
import type { JSX } from 'react'

export interface DocConfig {
  meta: DocMetadata
  items: DocItem[]
}

export interface DocMetadata {
  title: string
  description: string
}

export interface DocItem extends DocPage {
  items: DocPage[]
}

export interface DocPage {
  id: string
  label: string
  slug: string
  href: string
  meta: {
    title: string
    description: string
  }
  Content?: (props: MDXProps) => JSX.Element
}

export interface DocFrontmatter {
  title: string
  description: string
  date?: string
  author?: string
  tags?: string[]
}
