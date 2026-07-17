import ApiLinks from '@/app/components/ApiLinks'
import { HStack, VStack } from '@/styled-system/jsx'
import { Show, Text } from '@cerberus-design/react'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import type { DocFrontmatter } from '../../types'
import { items } from './content/items'
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
        images: [`/og/docs/signals/${slugPath}`],
      },
    }
  } catch {
    // Fallback if the MDX file doesn't exist
    return {}
  }
}

export default async function SignalsSlugPage(props: Props) {
  const { slug } = await props.params
  const page = await import(`./content/${slug}.mdx`)

  const frontmatter = page?.frontmatter as DocFrontmatter
  const Doc = page?.default

  if (!page) {
    console.error(`Page not found for slug: ${slug}`)
    return notFound()
  }

  const hasLinks =
    page?.frontmatter?.ark ||
    page?.frontmatter?.npm ||
    page?.frontmatter?.recipe ||
    page?.frontmatter?.source ||
    page?.frontmatter?.panda ||
    page?.frontmatter?.package

  if (Doc) {
    return (
      <Suspense>
        <Show when={frontmatter}>
          <VStack
            alignItems="flex-start"
            bgColor="page.surface.initial/20"
            backdropFilter="auto"
            backdropBlur="16px"
            backdropSaturate="180%"
            border="1px solid"
            borderColor="page.border.initial/30"
            boxShadow="0 4px 30px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
            color="page.text.200"
            gap="xs"
            h="19.625rem"
            justifyContent="center"
            mb="3.5rem"
            ps="4rem"
            rounded="xl"
            pb="lg"
            w="full"
            _systemMode={{
              bgColor: 'page.surface.100',
              borderColor: 'page.border.100',
              boxShadow: 'none',
            }}
            css={{
              '& > h1': {
                textStyle: 'heading-md',
              },
              '& > p': {
                textStyle: 'body-md',
                textWrap: 'pretty',
                w: '3/4',
              },
            }}
            style={{
              backdropFilter: 'var(--backdrop-blur) var(--backdrop-saturate)',
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
      </Suspense>
    )
  }

  return null
}
