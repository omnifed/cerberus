import { Author } from '@/data/authors'
import matter from 'gray-matter'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { cache } from 'react'

// BLOGS

const BLOG_DIR = join(process.cwd(), 'content/blog')

export const getBlogSlugs = cache((): string[] => {
  if (!existsSync(BLOG_DIR)) return []
  return readdirSync(BLOG_DIR).filter((file) => file.endsWith('.mdx'))
})

export const getBlogPost = cache((slug: string) => {
  const filePath = join(BLOG_DIR, `${slug}.mdx`)
  if (!existsSync(filePath)) return null

  const fileContent = readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)

  return {
    frontmatter: data as BlogFrontmatter,
    content,
  }
})

// types

export type BlogFrontmatter = {
  slug: string
  date: string
  author: Author
  title: string
  description: string
  category: string
  version: string
  timeToRead: number
  tag: string
}
