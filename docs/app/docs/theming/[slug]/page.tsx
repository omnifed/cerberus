import { VStack } from '@/styled-system/jsx/vstack'
import { Show, Text } from '@cerberus-design/react'
import { notFound } from 'next/navigation'
import type { DocFrontmatter } from '../../types'
import { items } from './content/items'

export async function generateStaticParams() {
  return items
    .map((slug) => {
      if (slug.href) return { slug: slug.slug }
    })
    .filter(Boolean)
}

export default async function ThemingSlugPage(props: {
  params: Promise<{
    slug: string
  }>
}) {
  const { slug } = await props.params
  const page = await import(`./content/${slug}.mdx`)

  const frontmatter = page?.frontmatter as DocFrontmatter
  const Doc = page?.default

  if (!page) {
    console.error(`Page not found for slug: ${slug}`)
    return notFound()
  }

  if (Doc) {
    return (
      <>
        <Show when={frontmatter}>
          <VStack alignItems="flex-start" gap="lg" pb="lg" w="full">
            <Text as="h1" textStyle="heading-lg">
              {frontmatter?.title}
            </Text>
            <Text textStyle="heading-sm">{frontmatter?.description}</Text>
          </VStack>
        </Show>

        <Doc />
      </>
    )
  }

  return null
}
