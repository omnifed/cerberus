import type { PropsWithChildren } from 'react'
import { Box, Container, HStack, Scrollable } from '@/styled-system/jsx'
import OnThisPage from '@/app/components/OnThisPage'

/**
 * This component is the layout for all the pages in the "Docs" section
 * of the app. It includes a main content area for the documentation
 * and the "On this page" sidebar for navigation.
 */
export function DocsPageLayout(props: PropsWithChildren<object>) {
  return (
    <HStack alignItems="flex-start" h="full" justify="space-between" w="full">
      <Scrollable h="calc(100dvh - var(--nav-height))" w="full">
        <Container
          py={{
            base: '8rem',
            md: 'md',
          }}
          maxW="88ch"
        >
          {props.children}
        </Container>
      </Scrollable>

      <Box display={{ base: 'none', md: 'block' }} pr="md" pt="xl" w="20rem">
        <OnThisPage />
      </Box>
    </HStack>
  )
}
