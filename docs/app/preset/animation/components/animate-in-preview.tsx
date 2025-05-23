'use client'

import { Button, Show, Text } from '@cerberus-design/react'
import { AnimateIn, HStack, VStack } from 'styled-system/jsx'
import { useCallback, useState } from 'react'

export function AnimateInPreview() {
  const [animate, setAnimate] = useState<boolean>(false)

  const handleAnimateIn = useCallback(() => {
    setAnimate(true)
    setTimeout(() => {
      setAnimate(false)
    }, 4000)
  }, [])

  return (
    <HStack gap="md">
      <Button onClick={handleAnimateIn}>Animate In</Button>

      <VStack>
        <Show when={animate}>
          <AnimateIn p="md">
            <Text>Default</Text>
          </AnimateIn>
          <AnimateIn delay="600ms" p="md">
            <Text>Delayed</Text>
          </AnimateIn>
        </Show>
      </VStack>
    </HStack>
  )
}
