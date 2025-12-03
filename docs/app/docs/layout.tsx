import { Box, HStack, Scrollable } from '@/styled-system/jsx'
import type { Metadata } from 'next'
import { SideNav } from '../components/shared/side-nav'
import { getDocsMetadata } from './utils/helpers.server'
import { AppBar, DocsPageLayout } from './shared'
import type { ReactNode } from 'react'
import { cacheLife } from 'next/cache'

export const metadata: Metadata = getDocsMetadata()

export default async function DocsLayout(props: { children: ReactNode }) {
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

      <Box bgColor="page.surface.initial" flex="2" h="full">
        <DocsPageLayout>{props.children}</DocsPageLayout>
      </Box>
    </HStack>
  )
}
