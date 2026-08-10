import { Metadata } from 'next'
import { PropsWithChildren, Suspense } from 'react'
import { DocFrontmatter } from '../../types'
import { items } from './content/items'

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
        images: [`/og/docs/get-started/${slugPath}`],
      },
    }
  } catch {
    // Fallback if the MDX file doesn't exist
    return {}
  }
}

// Component

type Props = {
  params: Promise<{
    slug: string | string[]
  }>
}

export default async function GetStartedSlugLayout(props: PropsWithChildren<Props>) {
  return <Suspense>{props.children}</Suspense>
}
