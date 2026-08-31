import ApiLinks from '@/app/components/ApiLinks'
import { CopyPageMenu } from '@/components/copy-page-menu'
import { MDXContent } from '@/components/mdx-content'
import { getDocPost, getDocSlugs } from '@/lib/docs-content'
import { HStack, Stack } from '@/styled-system/jsx'
import { Show, Text } from '@cerberus-design/react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next/types'
import { type PropsWithChildren } from 'react'

export async function generateStaticParams() {
  return getDocSlugs() ?? []
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const routePath = getRoutePath(slug)

  const doc = getDocPost(routePath)
  if (!doc) return notFound()

  try {
    return {
      title: doc.title,
      description: doc.description,
      openGraph: {
        images: [`/og/${routePath}`],
      },
    }
  } catch {
    return {}
  }
}

// Component

type Props = {
  params: Promise<{ slug: string[] }>
}

export default async function DocsPage(props: PropsWithChildren<Props>) {
  const { slug } = await props.params
  const routePath = getRoutePath(slug)

  const doc = getDocPost(routePath)
  if (!doc) return notFound()

  const hasLinks =
    doc.ark || doc.npm || doc.recipe || doc.source || doc.panda || doc.package

  return (
    <>
      <Stack
        bgColor="page.surface.initial/20"
        backdropFilter="auto"
        backdropBlur="16px"
        backdropSaturate="180%"
        border="1px solid"
        borderColor="page.border.initial/30"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
        color="page.text.200"
        h="19.625rem"
        justify="center"
        pos="relative"
        ps="4rem"
        pb="lg"
        rounded="xl"
        _systemMode={{
          bgColor: 'page.surface.100',
          borderColor: 'page.border.100',
          boxShadow: 'none',
        }}
        style={{
          backdropFilter: 'var(--backdrop-blur) var(--backdrop-saturate)',
        }}
      >
        <Text as="h1" color="inherit" textStyle="heading-md">
          {doc.title}
        </Text>
        <Text color="inherit" textStyle="body-md" w="3/4">
          {doc.description}
        </Text>

        <Show when={hasLinks}>
          <HStack pt="2rem">
            <ApiLinks {...doc} />
          </HStack>
        </Show>
      </Stack>

      <HStack justify="flex-end" pt="lg" w="full">
        <CopyPageMenu endpoint={`/llms/${doc.slugAsParams}`} />
      </HStack>

      <MDXContent code={doc.code} />
    </>
  )
}

function getRoutePath(slug: string[]): string {
  return slug?.join('/') || '' // Handles the root /docs path
}
