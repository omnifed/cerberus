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
            <Button key={name} onClick={() => setActiveOption(name)} size="sm">
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
        bgColor="page.surface.100"
        size="16rem"
        css={{
          '&[data-animation="emphasized-fade-in"]': {
            animationStyle: 'emphasized-fade-in',
          },
          '&[data-animation="emphasized-fade-out"]': {
            animationStyle: 'emphasized-fade-out',
          },
          '&[data-animation="emphasized-slide-in"]': {
            animationStyle: 'emphasized-slide-in',
          },
          '&[data-animation="emphasized-slide-out"]': {
            animationStyle: 'emphasized-slide-out',
          },
          '&[data-animation="slide-fade-in"]': {
            animationStyle: 'slide-fade-in',
          },
          '&[data-animation="slide-fade-out"]': {
            animationStyle: 'slide-fade-out',
          },
          '&[data-animation="slide-in"]': {
            animationStyle: 'slide-in',
          },
          '&[data-animation="slide-out"]': {
            animationStyle: 'slide-out',
          },
          '&[data-animation="scale-fade-in"]': {
            animationStyle: 'scale-fade-in',
          },
          '&[data-animation="scale-fade-out"]': {
            animationStyle: 'scale-fade-out',
          },
        }}
      >
        <Center>{activeOption}</Center>
      </Square>
    </VStack>
  )
}
