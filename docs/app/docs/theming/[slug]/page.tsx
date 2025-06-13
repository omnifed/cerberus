import type { RouteProps } from '@/app/types'
import { Show, Text } from '@cerberus-design/react'
import { VStack } from '@/styled-system/jsx/vstack'
import { getDocPageData } from '../../utils/helpers.server'
import type { DocFrontmatter } from '../../types'

export default async function ThemingSlugPage(props: RouteProps) {
  const { slug } = await props.params
  const page = getDocPageData('theming', slug)
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
