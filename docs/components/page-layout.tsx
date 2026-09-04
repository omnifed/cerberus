'use client'

import OnThisPage, { OTPFallback } from '@/app/components/OnThisPage'
import { TableOfContents } from '@/components/toc'
import { getDocPost } from '@/lib/docs-content'
import { Box, Container, HStack } from '@/styled-system/jsx'
import { Show } from '@cerberus-design/react'
import { useParams } from 'next/navigation'
import { Suspense, type PropsWithChildren } from 'react'

export function DocsPageLayout(props: PropsWithChildren<object>) {
  const { slug } = useParams()
  const reliableSlug = typeof slug === 'string' ? [slug] : (slug ?? [])
  const path = getRoutePath(reliableSlug)

  const post = getDocPost(path)

  return (
    <HStack
      data-slot="page-layout"
      alignItems="flex-start"
      h="full"
      gap="0"
      overflowY="auto"
      pos="relative"
      pb="md"
      w="full"
      css={{
        scrollBehavior: 'smooth',
        scrollbarGutter: 'stable',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Container
        py={{
          base: '8rem',
          md: 'md',
        }}
        maxW="88ch"
        w="full"
      >
        {props.children}
      </Container>

      <Box
        display={{ base: 'none', md: 'block' }}
        h="full"
        pos="sticky"
        pr="md"
        py="lg"
        top="lg"
        w="20rem"
        zIndex="-1"
      >
        <Show
          when={post?.toc}
          fallback={
            <Suspense fallback={<OTPFallback />}>
              <OnThisPage />
            </Suspense>
          }
        >
          <TableOfContents items={post?.toc ?? []} />
        </Show>
      </Box>
    </HStack>
  )
}

function getRoutePath(slug: string[]): string {
  return slug?.join('/') || '' // Handles the root /docs path
}
