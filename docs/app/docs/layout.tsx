import { Grid, GridItem, HStack, Scrollable } from '@/styled-system/jsx'
import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { SideNav } from '../components/shared/side-nav'
import { getDocsMetadata } from './utils/helpers.server'
import { AppBar, GetStartedLayout } from './shared'
import type { RouteProps } from '../types'

export const metadata: Metadata = getDocsMetadata()

export default function DocsLayout(props: PropsWithChildren<RouteProps>) {
  return (
    <Grid
      columns={{
        base: 1,
        md: 2,
      }}
      gridTemplateColumns={{
        base: '1fr',
        md: '1fr 3fr',
      }}
      h="calc(100dvh - var(--nav-height))"
      overflow="hidden"
      pt="md"
    >
      <GridItem h="calc(100% - 1rem)" p="md" w="fit-content">
        <HStack
          bgColor="page.surface.100"
          border="1px solid"
          borderColor="page.border.initial"
          gap="0"
          h="full"
          maxH="full"
          overflow="hidden"
          rounded="lg"
          w="full"
        >
          <AppBar />
          <Scrollable h="full">
            <SideNav />
          </Scrollable>
        </HStack>
      </GridItem>

      <GridItem bgColor="page.surface.initial">
        <GetStartedLayout>{props.children}</GetStartedLayout>
      </GridItem>
    </Grid>
  )
}
