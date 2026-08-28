import { Box, HStack, Scrollable } from '@/styled-system/jsx'
import type { Metadata } from 'next'
import { cacheLife } from 'next/cache'
import type { PropsWithChildren } from 'react'
import { SceneMatcher } from '../components/backgrounds/scene-matcher'
import { SideNav } from '../components/shared/side-nav'
import { AppBar, DocsPageLayout } from './shared'
import { getDocsMetadata } from './utils/helpers.server'

export const prefetch = 'partial'

export const metadata: Metadata = getDocsMetadata()

type Props = {
  params: Promise<{ slug: string[] }>
}

export default async function DocsLayout(props: PropsWithChildren<Props>) {
  'use cache'
  cacheLife('hours')

  return (
    <HStack
      alignItems="flex-start"
      gap="0"
      h="calc(100dvh - var(--nav-height))"
      overflow="hidden"
      pt="md"
    >
      <Box h="full" pb="md" pt="md" pl="md" pos="relative" w="21rem">
        <HStack
          data-placement="right"
          bgColor="page.surface.100"
          border="1px solid"
          borderColor="page.border.initial"
          gap="0"
          h="full"
          overflow="hidden"
          opacity="0"
          rounded="lg"
          w="full"
          _motionSafe={{
            animationStyle: 'slide-fade-in',
            animationDuration: 'slowest',
            animationDelay: '300ms',
            animationFillMode: 'forwards',
          }}
          _motionReduce={{
            animation: 'none',
            opacity: 1,
          }}
        >
          <AppBar />
          <Scrollable direction="vertical" h="full" overflowX="hidden">
            <SideNav />
          </Scrollable>
        </HStack>
      </Box>

      <Box flex="2" h="full">
        <DocsPageLayout>{props.children}</DocsPageLayout>
      </Box>

      <Box
        bgGradient="to-tr"
        gradientFrom="page.surface.initial"
        gradientTo="transparent"
        pos="fixed"
        top="0"
        left="0"
        h="full"
        w="full"
        zIndex="-9"
      />
      <SceneMatcher />
    </HStack>
  )
}
