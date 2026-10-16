'use client'

import { getVariantKeys } from '@/lib/design-system'
import { Center, HStack, Square, VStack } from '@/styled-system/jsx'
import { Button, For } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

const variants = getVariantKeys('animationStyles')

export default function AnimationStyles() {
  const [activeOption, setActiveOption] = useSignal<string>(variants[0])

  return (
    <VStack alignItems="flex-start" gap="lg" w="full">
      <HStack gap="md" flexWrap="wrap" w="full">
        <For each={variants}>
          {(name) => (
            <Button
              key={name}
              onClick={() => {
                setActiveOption(name)
              }}
              size="sm"
            >
              {name}
            </Button>
          )}
        </For>
      </HStack>

      <Square
        data-animation={activeOption}
        data-placement="top"
        animationDuration="slow"
        animationFillMode="both"
        animationTimingFunction="ease-in-out"
        animationStyle={activeOption}
        bgColor="page.surface.100"
        size="16rem"
      >
        <Center>{activeOption}</Center>
      </Square>
    </VStack>
  )
}
