import { Grid, GridItem, HStack, Scrollable } from '@/styled-system/jsx'
import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { SideNav } from '../components/shared/side-nav'
import { getDocsMetadata } from './utils/helpers.server'
import { AppBar, DocsPageLayout } from './shared'
import type { RouteProps } from '../types'

export const metadata: Metadata = getDocsMetadata()

export default function DocsLayout(props: PropsWithChildren<RouteProps>) {
  return (
    <Grid
      columns={{
        base: 1,
        md: 2,
      }}
      gridTemplateRows="var(--row-height) 1fr"
      gridTemplateColumns={{
        base: '1fr',
        md: '22rem 3fr',
      }}
      h="100dvh"
      gap="0"
      overflow="hidden"
      css={{
        '--row-height': 'calc(var(--nav-height) + 1rem)',
      }}
    >
      <GridItem
        colSpan={1}
        h="calc(100dvh - var(--row-height))"
        pb="md"
        pt="md"
        pl="md"
        rowStart={2}
        w="full"
      >
        <HStack
          bgColor="page.surface.100"
          border="1px solid"
          borderColor="page.border.initial"
          gap="0"
          h="full"
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

      <GridItem
        bgColor="page.surface.initial"
        colStart={2}
        h="full"
        rowStart={2}
      >
        <DocsPageLayout>{props.children}</DocsPageLayout>
      </GridItem>
    </Grid>
  )
}
