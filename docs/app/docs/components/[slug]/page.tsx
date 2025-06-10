import type { RouteProps } from '@/app/types'
import { getDocPageData } from '../../utils/helpers.server'
import { Show, Text } from '@cerberus-design/react'
import { HStack, VStack } from '@/styled-system/jsx'
import type { DocFrontmatter } from '../../types'
import ApiLinks from '@/app/components/ApiLinks'

export default async function GetStartedSlugPage(props: RouteProps) {
  const { slug } = await props.params
  const page = getDocPageData('components', slug)

  const frontmatter = page?.frontmatter as DocFrontmatter
  const Doc = page?.Content

  const hasLinks =
    page?.frontmatter?.ark ||
    page?.frontmatter?.npm ||
    page?.frontmatter?.recipe ||
    page?.frontmatter?.source ||
    page?.frontmatter?.panda

  if (!page) return null

  if (Doc) {
    return (
      <>
        <Show when={frontmatter}>
          <VStack
            data-state={hasLinks ? 'links' : 'default'}
            alignItems="flex-start"
            gap="lg"
            pb="lg"
            w="full"
            css={{
              '&:is([data-state="links"])': {
                border: '1px solid',
                borderColor: 'page.border.initial',
                bgColor: 'page.surface.100',
                color: 'page.text.200',
                gap: 'xs',
                h: '19.625rem',
                justifyContent: 'center',
                mb: '3.5rem',
                ps: '4rem',
                rounded: 'xl',
                '& > h1': {
                  textStyle: 'heading-md',
                },
                '& > p': {
                  textStyle: 'body-md',
                  textWrap: 'pretty',
                  w: '3/4',
                },
              },
            }}
          >
            <Text as="h1" color="inherit" textStyle="heading-lg">
              {frontmatter?.title}
            </Text>
            <Text color="inherit" textStyle="heading-sm">
              {frontmatter?.description}
            </Text>

            <Show when={hasLinks}>
              <HStack pt="2rem">
                <ApiLinks {...frontmatter} />
              </HStack>
            </Show>
          </VStack>
        </Show>

        <Doc />
      </>
    )
  }

  return null
}
