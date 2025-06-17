import type { PropsWithChildren } from 'react'
import { Box, Container, HStack } from '@/styled-system/jsx'
import OnThisPage from '@/app/components/OnThisPage'

/**
 * This component is the layout for all the pages in the "Docs" section
 * of the app. It includes a main content area for the documentation
 * and the "On this page" sidebar for navigation.
 *
 * We don't use Scrollable here because it causes issues with the
 * "On this page" sidebar stickiness.
 */
export function DocsPageLayout(props: PropsWithChildren<object>) {
  return (
    <HStack
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
      >
        {props.children}
      </Container>

      <Box
        display={{ base: 'none', md: 'block' }}
        pos="sticky"
        pr="md"
        pt="lg"
        top="lg"
        w="20rem"
        zIndex="base"
      >
        <OnThisPage />
      </Box>
    </HStack>
  )
}
