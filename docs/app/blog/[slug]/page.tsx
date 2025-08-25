import { Show } from '@cerberus-design/react'
import { items } from './content/items'
import { Container } from '@/styled-system/jsx'
import BlogHeader, { type BlogHeaderProps } from '../components/blog-header'

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
  const page = items.find((item) => item.slug === slug)
  const frontmatter = page?.frontmatter as BlogHeaderProps
  const Doc = page?.Content

  if (!page) {
    console.error(`No items found for slug: ${slug}`)
    return null
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
