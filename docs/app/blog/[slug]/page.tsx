import { Container } from '@/styled-system/jsx'
import { Show } from '@cerberus-design/react'
import { notFound } from 'next/navigation'
import BlogHeader, { type BlogHeaderProps } from '../components/blog-header'
import { items } from './content/items'
import { DocFrontmatter } from '@/app/docs/types'
import { Metadata } from 'next/types'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return items
    .map((slug) => {
      if (slug.href) return { slug: slug.slug }
    })
    .filter(Boolean)
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const slugPath = Array.isArray(slug) ? slug.join('/') : slug

  try {
    const page = await import(`./content/${slug}.mdx`)
    const frontmatter = page?.frontmatter as DocFrontmatter

    return {
      title: frontmatter?.title,
      description: frontmatter?.description,
      openGraph: {
        images: [`/og/blog/${slugPath}`],
      },
    }
  } catch {
    // Fallback if the MDX file doesn't exist
    return {}
  }
}

export default async function BlogSlugPage(props: Props) {
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
