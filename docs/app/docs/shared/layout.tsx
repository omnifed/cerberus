import type { PropsWithChildren } from 'react'
import { Box, Container, HStack, Scrollable } from '@/styled-system/jsx'
import OnThisPage from '@/app/components/OnThisPage'

/**
 * This component is the layout for all the pages in the "Get Started" section
 * of the documentation. It includes a main content area for the documentation
 * and the "On this page" sidebar for navigation.
 */
export function GetStartedLayout(props: PropsWithChildren<object>) {
  return (
    <HStack
      alignItems="flex-start"
      justify="space-between"
      py={{
        base: '8rem',
        md: 'xl',
      }}
      w="full"
    >
      <Scrollable h="calc(100dvh - var(--nav-height) - 2rem)">
        <Container maxW="88ch">{props.children}</Container>
      </Scrollable>

      <Box
        display={{ base: 'none', md: 'block' }}
        pt={{ base: '0', md: 'xl' }}
        pr="md"
        w="20rem"
      >
        <OnThisPage />
      </Box>
    </HStack>
  )
}
