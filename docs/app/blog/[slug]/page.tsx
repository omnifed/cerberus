import { BlogHeader } from '@/components/blog-header'
import { MDXContent } from '@/components/mdx-content'
import { getBlogPost } from '@/lib/blog-content'
import { Container } from '@/styled-system/jsx'
import { notFound } from 'next/navigation'
import { Metadata } from 'next/types'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const slugPath = Array.isArray(slug) ? slug.join('/') : slug

  const post = getBlogPost(slug)
  if (!post) return notFound()

  try {
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        images: [`/og/blog/${slugPath}`],
      },
    }
  } catch {
    return {}
  }
}

export default async function BlogSlugPage(props: Props) {
  const { slug } = await props.params

  const post = getBlogPost(slug)
  if (!post) return notFound()

  return (
    <Container pt="5rem" maxW="88ch">
      <BlogHeader {...post} />
      <MDXContent code={post.code} />
    </Container>
  )
}
