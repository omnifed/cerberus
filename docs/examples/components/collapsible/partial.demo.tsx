'use client'

import { Box, HStack } from '@/styled-system/jsx'
import { Button, Collapsible } from '@cerberus-design/react'

export function PartialDemo() {
  return (
    <HStack h="full" w="3/4">
      <Collapsible.Root collapsedHeight="100px" w="full">
        <Collapsible.Content effect="fade">
          <Box
            border="1px solid"
            borderColor="page.border.initial"
            p="md"
            mt="sm"
            rounded="md"
            w="full"
          >
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
            opposed to using &apos;Content here, content here&apos;, making it look like
            readable English. Many desktop publishing packages and web page editors now
            use Lorem Ipsum as their default model text, and a search for &apos;lorem
            ipsum&apos; will uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </Box>
        </Collapsible.Content>

        <Collapsible.Trigger asChild>
          <Button mt="md" usage="outlined-subtle">
            Show More
          </Button>
        </Collapsible.Trigger>
      </Collapsible.Root>
    </HStack>
  )
}
