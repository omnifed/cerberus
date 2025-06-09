import { Grid, GridItem, HStack } from '@/styled-system/jsx'
import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { SideNav } from '../components/shared/side-nav'
import { getDocsMetadata } from './utils/helpers.server'
import { AppBar, GetStartedLayout } from './components'
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
        md: '19.5rem 3fr',
      }}
      h="calc(100dvh - var(--nav-height))"
      mt="var(--nav-height)"
      overflow="hidden"
    >
      <GridItem>
        <HStack gap="0" h="full" w="full">
          <AppBar />
          <SideNav />
        </HStack>
      </GridItem>

      <GridItem bgColor="page.surface.initial">
        <GetStartedLayout>{props.children}</GetStartedLayout>
      </GridItem>
    </Grid>
  )
}
