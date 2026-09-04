import { blog } from '#site/content'

export function getBlogPosts() {
  return blog
}

export function getBlogSlugs() {
  return blog.map((post) => ({ slug: post.slug }))
}

export function getBlogPost(slug: string) {
  return blog.find((post) => post.slug === slug)
}
