import { Container } from '@/styled-system/jsx'
import { Show } from '@cerberus-design/react'
import { notFound } from 'next/navigation'
import BlogHeader, { type BlogHeaderProps } from '../components/blog-header'
import { items } from './content/items'

export async function generateStaticParams() {
  return items
    .map((slug) => {
      if (slug.href) return { slug: slug.slug }
    })
    .filter(Boolean)
}

export default async function BlogSlugPage(props: {
  params: Promise<{
    slug: string
  }>
}) {
  const { slug } = await props.params
  const page = await import(`./content/${slug}.mdx`)

  const frontmatter = page?.frontmatter as BlogHeaderProps
  const Doc = page?.default

  if (!page) {
    console.error(`Page not found for slug: ${slug}`)
    return notFound()
  }

  if (Doc) {
    return (
      <Container paddingBlockStart="5rem" maxW="88ch">
        <Show when={frontmatter != null}>
          <BlogHeader {...frontmatter} />
        </Show>

        <Doc />
      </Container>
    )
  }

  return null
}
