'use client'

import { VStack } from '@/styled-system/jsx'
import { Button, cerberus, Text } from '@cerberus-design/react'
import { useEffect } from 'react'
import BrokenBoneIcon from '../icons/broken-bone-icon'

// Error boundaries must be Client Components that are rendered outside of the
// React tree so it must be setup with the theme and html/body.

type Props = {
  error: Error & {
    message?: string
    digest?: string
  }
  reset: () => void
}

export function ErrorBoundary({ reset, error }: Props) {
  useEffect(() => {
    if (error) {
      console.error(error)
    }
  }, [error])

  return (
    <VStack justify="center" h="100dvh" px="lg" textAlign="center">
      <cerberus.span
        color="page.surface.100"
        maxW="12rem"
        mb={{
          base: 6,
          lg: 10,
        }}
        w="1/3"
      >
        <BrokenBoneIcon />
      </cerberus.span>

      <Text as="h2" textStyle="heading-md">
        Cerb your enthusiasm!
      </Text>
      <Text color="page.text.100" maxW="66ch" pb="xl">
        Something went wrong. Cerberus has sounded the alarm and our demons are
        ready for action.
      </Text>

      <Button onClick={() => reset()}>Try again</Button>
    </VStack>
  )
}
