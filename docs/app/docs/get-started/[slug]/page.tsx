'use cache'

import { Show, Text } from '@cerberus-design/react'
import { VStack } from '@/styled-system/jsx/vstack'
import { getDocPageData } from '../../utils/helpers.server'
import type { DocFrontmatter } from '../../types'
import { items } from './content/items'

export async function generateStaticParams() {
  return items
    .map((slug) => {
      if (slug.href) return { slug: slug.slug }
    })
    .filter(Boolean)
}

export default async function GetStartedSlugPage(props: {
  params: Promise<{
    slug: string
  }>
}) {
  const { slug } = await props.params
  const page = getDocPageData('get-started', slug)
  const frontmatter = page?.frontmatter as DocFrontmatter
  const Doc = page?.Content

  if (!page) {
    console.error(`No items found for slug: ${slug}`)
    return null
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
