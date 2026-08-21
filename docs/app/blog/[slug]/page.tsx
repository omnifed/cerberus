import { getBlogPost } from '@/lib/content'
import { Container } from '@/styled-system/jsx'
import { Show } from '@cerberus-design/react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next/types'
import BlogHeader from '../components/blog-header'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const slugPath = Array.isArray(slug) ? slug.join('/') : slug

  const blog = getBlogPost(slug)
  if (!blog) return notFound()

  const { frontmatter } = blog

  try {
    // const page = await import(`./content/${slug}.mdx`)
    // const frontmatter = page?.frontmatter as DocFrontmatter

    return {
      title: frontmatter.title,
      description: frontmatter.description,
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

  const blog = getBlogPost(slug)
  if (!blog) return notFound()

  const { frontmatter, content: Blog } = blog

  return (
    <Container pt="5rem" maxW="88ch">
      <Show when={frontmatter != null}>
        <BlogHeader {...frontmatter} />
      </Show>

      <Blog />
    </Container>
  )
}
