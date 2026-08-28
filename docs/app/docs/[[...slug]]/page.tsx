import ApiLinks from '@/app/components/ApiLinks'
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
        gap="xs"
        h="19.625rem"
        justifyContent="center"
        mb="3.5rem"
        ps="4rem"
        rounded="xl"
        pb="lg"
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
          {doc.title}
        </Text>
        <Text color="inherit" textStyle="heading-sm">
          {doc.description}
        </Text>

        <Show when={hasLinks}>
          <HStack pt="2rem">
            <ApiLinks {...doc} />
          </HStack>
        </Show>
      </Stack>

      <MDXContent code={doc.code} />
    </>
  )
}

function getRoutePath(slug: string[]): string {
  return slug?.join('/') || '' // Handles the root /docs path
}
