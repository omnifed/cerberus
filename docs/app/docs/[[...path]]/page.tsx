import { getDocslugs, getDocPost } from '@/lib/docs-content'
import { type PropsWithChildren } from 'react'
import { MDXContent } from '@/components/mdx-content'
import { Container } from '@/styled-system/jsx'
import { notFound } from 'next/navigation'
import { Metadata } from 'next/types'

export async function generateStaticParams() {
  return getDocslugs() ?? []
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { path } = await props.params
  const slugPath = Array.isArray(path) ? path.join('/') : path

  const post = getDocPost(path)
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

// Component

type Props = {
  params: Promise<{ path: string }>
}

export async function DocsPage(props: PropsWithChildren<Props>) {
  const { path } = await props.params

  const post = getDocPost(path)
  if (!post) return notFound()

  return (
    <Container pt="5rem" maxW="88ch">
      <MDXContent code={post.code} />
    </Container>
  )
}
